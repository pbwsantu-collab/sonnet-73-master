/* ============================================================
   Sonnet 73 Master — Application Logic
   West Bengal, India · Class XII Bengali Medium
   ============================================================ */

const STORAGE_KEY = 's73_progress_v1';
const NOTES_KEY = 's73_notes_v1';
const FAV_WORDS_KEY = 's73_fav_words_v1';

let state = {
  page: 'home',
  lang: 'both',
  simple: false,
  progress: {},
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: [],
  flashIndex: 0,
  flashFlipped: false,
  currentLine: null
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state.progress = JSON.parse(raw);
  } catch (_) {}
  SECTIONS.forEach(s => {
    if (state.progress[s] == null) state.progress[s] = 0;
  });
}
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch (_) {}
  updateProgressUI();
}
function markSection(id, pct = 100) {
  state.progress[id] = Math.max(state.progress[id] || 0, pct);
  saveProgress();
}
function overallProgress() {
  const vals = SECTIONS.map(s => state.progress[s] || 0);
  return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
}

function setLang(lang) {
  state.lang = lang;
  document.body.classList.remove('lang-en', 'lang-bn', 'lang-both');
  document.body.classList.add('lang-' + lang);
  document.querySelectorAll('#langSwitch button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}
function toggleSimpleMode() {
  state.simple = !state.simple;
  document.body.classList.toggle('simple-mode', state.simple);
  document.getElementById('simpleModeBtn').classList.toggle('active', state.simple);
}

function navigate(page) {
  state.page = page;
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  render();
  window.scrollTo(0, 0);
  markSection(page, Math.max(state.progress[page] || 0, 30));
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

function speak(text, lang = 'en-GB') {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = lang;
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}
function speakCurrent() {
  const el = document.querySelector('main h1, main .section-title, .poem-block');
  if (el) speak(el.textContent.slice(0, 400));
}

function closeModal(id) {
  document.getElementById(id).hidden = true;
}
function openSearch() {
  document.getElementById('searchModal').hidden = false;
  document.getElementById('globalSearch').focus();
}
function openNotes() {
  document.getElementById('notesModal').hidden = false;
  renderNotes();
}
function closeSheet() {
  document.getElementById('lineSheet').hidden = true;
}

function showWord(word) {
  const v = VOCAB.find(x => x.word.toLowerCase() === word.toLowerCase() || x.word.toLowerCase().includes(word.toLowerCase()));
  if (!v) return;
  const body = document.getElementById('wordModalBody');
  body.innerHTML = `
    <h2 style="font-family:var(--font-serif);color:var(--accent2);margin-bottom:4px">${v.word}</h2>
    <p class="text-muted" style="font-size:0.9rem">${v.phon} · ${v.bnPhon}</p>
    <p style="margin:8px 0"><strong>Part of Speech:</strong> ${v.pos}</p>
    <p class="bn" style="font-size:1.1rem;color:var(--accent)">${v.bn}</p>
    <p style="margin:8px 0"><strong>Simple English:</strong> ${v.en}</p>
    <p class="text-muted"><strong>Synonyms:</strong> ${v.syn}</p>
    <p style="margin-top:8px"><strong>In this poem:</strong> ${v.ctx}</p>
    <div style="display:flex;gap:8px;margin-top:14px;flex-wrap:wrap">
      <button class="btn sm" onclick="speak('${v.word.replace(/'/g, "\\'")}')">🔊 Listen</button>
      <button class="btn sm" onclick="addFavWord('${v.word.replace(/'/g, "\\'")}')">⭐ Favourite</button>
    </div>
  `;
  document.getElementById('wordModal').hidden = false;
  markSection('vocab', 50);
}
function addFavWord(w) {
  let favs = [];
  try { favs = JSON.parse(localStorage.getItem(FAV_WORDS_KEY) || '[]'); } catch (_) {}
  if (!favs.includes(w)) favs.push(w);
  localStorage.setItem(FAV_WORDS_KEY, JSON.stringify(favs));
  alert('Added to favourites: ' + w);
}

function openLine(id) {
  const la = LINE_ANALYSIS.find(x => x.id === id);
  if (!la) return;
  state.currentLine = id;
  const body = document.getElementById('lineSheetBody');
  body.innerHTML = `
    <p class="quatrain-label">Line ${la.id}</p>
    <p style="font-family:var(--font-serif);font-size:1.25rem;margin-bottom:12px">${la.text}</p>
    <p class="bn" style="color:var(--accent);margin-bottom:12px">${la.bn}</p>
    <div class="simple-only">
      <p><strong>Simple:</strong> ${la.simple}</p>
      <p class="bn">${la.simpleBn}</p>
    </div>
    <div class="detailed-only">
      <p><strong>Explanation:</strong> ${la.detailed}</p>
      <p class="bn mt-1">${la.detailedBn}</p>
      <p class="mt-1"><strong>Keywords:</strong> ${la.keywords.join(', ')}</p>
      <p><strong>Symbolism:</strong> ${la.symbolism}</p>
      <p><strong>Imagery:</strong> ${la.imagery}</p>
      <p><strong>Devices:</strong> ${la.devices.join(', ')}</p>
      <p><strong>Tone:</strong> ${la.tone}</p>
      <p class="mt-1" style="color:var(--accent2)"><strong>Exam point:</strong> ${la.exam}</p>
    </div>
  `;
  document.getElementById('lineSheet').hidden = false;
  markSection('analysis', 40);
  markSection('poem', 60);
}

function getNotes() {
  try { return JSON.parse(localStorage.getItem(NOTES_KEY) || '[]'); } catch (_) { return []; }
}
function saveNote() {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (!text) return;
  const notes = getNotes();
  notes.unshift({ id: Date.now(), text, page: state.page, ts: new Date().toISOString() });
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  input.value = '';
  renderNotes();
}
function deleteNote(id) {
  const notes = getNotes().filter(n => n.id !== id);
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
  renderNotes();
}
function renderNotes() {
  const list = document.getElementById('notesList');
  const notes = getNotes();
  if (!notes.length) {
    list.innerHTML = '<p class="text-muted mt-2">No notes yet.</p>';
    return;
  }
  list.innerHTML = notes.map(n => `
    <div class="card" style="padding:10px;margin-top:8px">
      <p style="font-size:0.9rem">${escapeHtml(n.text)}</p>
      <p class="text-muted" style="font-size:0.75rem;margin-top:4px">${n.page} · ${new Date(n.ts).toLocaleDateString()}</p>
      <button class="btn sm" style="margin-top:6px" onclick="deleteNote(${n.id})">Delete</button>
    </div>
  `).join('');
}

function doSearch(q) {
  q = q.trim().toLowerCase();
  const results = [];
  if (!q) return results;
  POEM.lines.forEach(l => {
    if (l.text.toLowerCase().includes(q)) results.push({ type: 'Line', text: l.text, action: () => { navigate('poem'); setTimeout(() => openLine(l.id), 200); } });
  });
  VOCAB.forEach(v => {
    if (v.word.toLowerCase().includes(q) || v.bn.includes(q) || v.en.toLowerCase().includes(q))
      results.push({ type: 'Word', text: `${v.word} — ${v.bn}`, action: () => showWord(v.word) });
  });
  THEMES.forEach(t => {
    if (t.title.toLowerCase().includes(q) || t.bn.includes(q) || t.en.toLowerCase().includes(q))
      results.push({ type: 'Theme', text: t.title, action: () => navigate('themes') });
  });
  DEVICES.forEach(d => {
    if (d.name.toLowerCase().includes(q)) results.push({ type: 'Device', text: d.name, action: () => navigate('devices') });
  });
  return results.slice(0, 20);
}

function updateProgressUI() {
  const pct = overallProgress();
  const el = document.getElementById('progressMini');
  if (el) el.textContent = pct + '%';
}

function startQuiz() {
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = [];
  state.quizOrder = [...Array(QUIZ.length).keys()].sort(() => Math.random() - 0.5).slice(0, 20);
  renderQuizQ();
}
function renderQuizQ() {
  const main = document.getElementById('mainContent');
  if (state.quizIndex >= state.quizOrder.length) {
    const pct = Math.round((state.quizScore / state.quizOrder.length) * 100);
    markSection('quiz', Math.max(state.progress.quiz || 0, pct));
    main.innerHTML = `
      <h1 class="section-title">Quiz Complete</h1>
      <div class="quiz-score">${state.quizScore} / ${state.quizOrder.length} (${pct}%)</div>
      <p class="text-muted" style="text-align:center">Well done! Review explanations and try again.</p>
      <div style="text-align:center;margin-top:16px">
        <button class="btn primary" onclick="startQuiz()">Retry Quiz</button>
        <button class="btn" onclick="navigate('revision')">Revision</button>
      </div>
    `;
    return;
  }
  const qi = state.quizOrder[state.quizIndex];
  const item = QUIZ[qi];
  const order = [0,1,2,3].sort(() => Math.random() - 0.5);
  main.innerHTML = `
    <h1 class="section-title">MCQ Quiz</h1>
    <p class="section-desc">Question ${state.quizIndex + 1} of ${state.quizOrder.length} · Score: ${state.quizScore}</p>
    <div class="quiz-card">
      <div class="quiz-q">${item.q}</div>
      <div class="quiz-opts" id="quizOpts">
        ${order.map(i => `<button class="quiz-opt" data-i="${i}">${item.opts[i]}</button>`).join('')}
      </div>
      <div id="quizFb"></div>
    </div>
  `;
  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = +btn.dataset.i;
      const correct = chosen === item.ans;
      document.querySelectorAll('.quiz-opt').forEach(b => {
        b.disabled = true;
        if (+b.dataset.i === item.ans) b.classList.add('correct');
        else if (+b.dataset.i === chosen) b.classList.add('wrong');
      });
      if (correct) state.quizScore++;
      const fb = document.getElementById('quizFb');
      fb.className = 'quiz-feedback ' + (correct ? 'ok' : 'bad');
      fb.innerHTML = (correct ? '✓ Correct. ' : '✗ Incorrect. ') + item.exp;
      setTimeout(() => {
        state.quizIndex++;
        renderQuizQ();
      }, 1600);
    });
  });
}

function renderFlash() {
  const main = document.getElementById('mainContent');
  const f = FLASHCARDS[state.flashIndex];
  main.innerHTML = `
    <h1 class="section-title">Flashcards</h1>
    <p class="section-desc">${state.flashIndex + 1} / ${FLASHCARDS.length}</p>
    <div class="flash-nav">
      <button class="btn sm" onclick="flashPrev()">← Prev</button>
      <button class="btn sm" onclick="state.flashFlipped=false;state.flashIndex=Math.floor(Math.random()*FLASHCARDS.length);renderFlash()">🔀 Shuffle</button>
      <button class="btn sm" onclick="flashNext()">Next →</button>
    </div>
    <div class="flash-card" onclick="state.flashFlipped=!state.flashFlipped;renderFlash()">
      ${state.flashFlipped
        ? `<div class="back">${f.back}</div><div class="bn">${f.bn}</div><p class="text-muted mt-1" style="font-size:0.8rem">Tap to flip</p>`
        : `<div class="front">${f.front}</div><p class="text-muted mt-1" style="font-size:0.8rem">Tap to reveal</p>`}
    </div>
  `;
}
function flashPrev() {
  state.flashFlipped = false;
  state.flashIndex = (state.flashIndex - 1 + FLASHCARDS.length) % FLASHCARDS.length;
  renderFlash();
}
function flashNext() {
  state.flashFlipped = false;
  state.flashIndex = (state.flashIndex + 1) % FLASHCARDS.length;
  renderFlash();
}

function escapeHtml(s) {
  return String(s).replace(/&/g,'&').replace(/</g,'<').replace(/>/g,'>');
}

function makeWordsClickable(text) {
  const sorted = [...VOCAB].sort((a, b) => b.word.length - a.word.length);
  let html = escapeHtml(text);
  sorted.forEach(v => {
    const re = new RegExp('\\b(' + v.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'gi');
    html = html.replace(re, '<span class="word" onclick="event.stopPropagation();showWord(\$1)">$1</span>'.replace('\\$1',"'$1'"));
  });
  return html;
}

function renderHome() {
  const pct = overallProgress();
  return `
    <div class="hero">
      <div class="hero-tree">🌳🍂</div>
      <h1>SONNET 73</h1>
      <p class="subtitle">William Shakespeare</p>
      <p class="bn-sub">বার্ধক্য, সময়, মৃত্যু ও ভালোবাসার অমর কবিতা</p>
      <p class="hero-meta">Class XII · English · Bengali Medium · West Bengal, India 🇮🇳</p>
      <div class="hero-btns">
        <button class="btn primary" onclick="navigate('poem')">START LEARNING</button>
        <button class="btn" onclick="navigate('poem')">READ POEM</button>
        <button class="btn" onclick="navigate('teach')">🧒 TEACH ME</button>
        <button class="btn" onclick="navigate('revision')">QUICK REVISION</button>
        <button class="btn" onclick="navigate('quiz')">TAKE QUIZ</button>
      </div>
      <p class="hero-progress">Your Progress: <strong>${pct}%</strong></p>
    </div>
    <div class="card">
      <h3>From autumn to twilight to fire</h3>
      <p class="en-only">Understand how Shakespeare transforms aging into an unforgettable meditation on love.</p>
      <p class="bn">শেক্সপিয়ার কীভাবে বার্ধক্যকে ভালোবাসার অমর ধ্যানে রূপান্তরিত করেছেন—তা বুঝুন।</p>
    </div>
    <div class="card">
      <h3>Continue Learning</h3>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
        <button class="btn sm" onclick="navigate('poet')">👤 Poet</button>
        <button class="btn sm" onclick="navigate('about')">📜 About Sonnet</button>
        <button class="btn sm" onclick="navigate('vocab')">🔤 Vocabulary</button>
        <button class="btn sm" onclick="navigate('analysis')">🔍 Line Analysis</button>
        <button class="btn sm" onclick="navigate('devices')">🎭 Devices</button>
        <button class="btn sm" onclick="navigate('themes')">💡 Themes</button>
        <button class="btn sm" onclick="navigate('critical')">🧠 Critical</button>
        <button class="btn sm" onclick="navigate('exam')">📝 Exam Qs</button>
        <button class="btn sm" onclick="navigate('teach')">🧒 Teach Me</button>
        <button class="btn sm" onclick="navigate('progress')">⭐ Progress</button>
      </div>
    </div>
  `;
}

function renderTeach() {
  markSection('revision', 40);
  const steps = [
    { t: 'Who was Shakespeare?', en: 'William Shakespeare (1564–1616), the Bard of Avon — poet, playwright, actor.', bn: 'উইলিয়াম শেক্সপিয়ার (১৫৬৪–১৬১৬), বার্ড অফ এভন — কবি, নাট্যকার, অভিনেতা।' },
    { t: 'What is a sonnet?', en: 'A 14-line poem in iambic pentameter. Shakespearean form: 3 quatrains + couplet, rhyme ABAB CDCD EFEF GG.', bn: '১৪ লাইনের কবিতা। শেক্সপিয়রীয় রূপ: ৩টি কোয়াট্রেন + কপলেট, ছন্দ ABAB CDCD EFEF GG।' },
    { t: 'What is Sonnet 73 about?', en: 'Aging, time, mortality, and how awareness of death makes love stronger.', bn: 'বার্ধক্য, সময়, মরণশীলতা — এবং মৃত্যুচেতনা কীভাবে ভালোবাসাকে দৃঢ় করে।' },
    { t: 'Quatrain 1 — Autumn', en: 'Yellow leaves, bare boughs, cold — old age as late autumn. “Bare ruin’d choirs” = empty branches once full of song.', bn: 'হলুদ পাতা, খালি ডাল, ঠান্ডা — বার্ধক্যকে শরতের সাথে তুলনা।' },
    { t: 'Quatrain 2 — Twilight', en: 'Twilight after sunset → black night. Night = death; sleep = Death’s second self.', bn: 'সূর্যাস্তের পর গোধূলি → কালো রাত। রাত = মৃত্যু; ঘুম = মৃত্যুর দ্বিতীয় রূপ।' },
    { t: 'Quatrain 3 — Dying Fire', en: 'Fire on the ashes of youth, on a death-bed, consumed by what nourished it — life is self-consuming.', bn: 'যৌবনের ছাইয়ের উপর আগুন, মৃত্যুশয্যায় — জীবন স্বয়ংসম্পূর্ণ ক্ষয়শীল।' },
    { t: 'The Couplet', en: 'You perceive this → love becomes stronger → love well what you must leave soon.', bn: 'তুমি উপলব্ধি করো → ভালোবাসা দৃঢ় হয় → যা শীঘ্রই ছাড়তে হবে তাকে ভালোভাবে ভালোবাসো।' },
    { t: 'Remember', en: 'Three metaphors → Mortality → Stronger love. Rhyme: ABAB CDCD EFEF GG.', bn: 'তিন রূপক → মরণশীলতা → দৃঢ় ভালোবাসা। ছন্দ: ABAB CDCD EFEF GG।' }
  ];
  return `<h1 class="section-title">Teach Me</h1>
    <p class="section-desc">Step-by-step lesson · West Bengal, India 🇮🇳</p>
    ${steps.map((s,i) => `
      <div class="card">
        <h3>${i+1}. ${s.t}</h3>
        <p class="en-only">${s.en}</p>
        <p class="bn">${s.bn}</p>
        <button class="btn sm primary" onclick="this.textContent='✓ Understood';this.disabled=true;markSection('revision', Math.min(100, 40+(i+1)*8))">✓ I Understand</button>
      </div>
    `).join('')}
    <div class="card" style="text-align:center">
      <button class="btn primary" onclick="navigate('quiz')">Take Quiz →</button>
      <button class="btn" onclick="navigate('revision')">Revision</button>
    </div>`;
}

function renderPoet() {
  markSection('poet', 80);
  return `
    <h1 class="section-title">About the Poet</h1>
    <p class="section-desc">${POET.name} (${POET.years})</p>
    <div class="card">
      <p class="en-only">${POET.summary}</p>
      <p class="bn">${POET.bnSummary}</p>
      <p class="mt-1 en-only">${POET.works}</p>
    </div>
    <div class="card">
      <h3>Quick Facts</h3>
      <div style="display:grid;gap:8px;margin-top:8px">
        ${POET.facts.map(f => `<div><strong style="color:var(--accent)">${f.label}:</strong> ${f.value}</div>`).join('')}
      </div>
    </div>
    <div class="card">
      <h3>Timeline</h3>
      <div class="timeline">
        ${POET.timeline.map(t => `
          <div class="timeline-item">
            <div class="year">${t.year}</div>
            <div>${t.event}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAbout() {
  markSection('about', 80);
  const s = ABOUT_SONNET;
  return `
    <h1 class="section-title">About Sonnet 73</h1>
    <div class="card">
      <h3>What is a sonnet?</h3>
      <p class="en-only">${s.what}</p>
      <p class="bn">${s.bnWhat}</p>
    </div>
    <div class="card">
      <h3>Shakespearean Structure</h3>
      <ul style="padding-left:18px;color:var(--muted)">
        <li><strong>Lines:</strong> ${s.structure.lines}</li>
        <li><strong>Form:</strong> ${s.structure.form}</li>
        <li><strong>Rhyme:</strong> ${s.structure.rhyme}</li>
        <li><strong>Meter:</strong> ${s.structure.meter}</li>
        <li><strong>Volta:</strong> ${s.structure.volta}</li>
      </ul>
    </div>
    <div class="struct-diagram">
      <div class="struct-box q1"><h4>QUATRAIN 1</h4><p>Autumn — yellow leaves, bare boughs</p></div>
      <div class="struct-box q2"><h4>QUATRAIN 2</h4><p>Twilight — sunset fading into night</p></div>
      <div class="struct-box q3"><h4>QUATRAIN 3</h4><p>Dying Fire — ashes of youth, death-bed</p></div>
      <div class="struct-box cp"><h4>COUPLET</h4><p>Love becomes stronger because separation is near</p></div>
    </div>
    <div class="card">
      <h3>Central Argument</h3>
      <p class="en-only">${s.argument}</p>
      <p class="bn">কবি প্রিয়জনকে তাঁর বার্ধক্যের চিহ্ন দেখতে বলেন। এই উপলব্ধি ভালোবাসাকে দুর্বল না করে আরও দৃঢ় করে।</p>
    </div>
  `;
}

function renderPoem() {
  markSection('poem', 50);
  let html = `<h1 class="section-title">Sonnet 73</h1><p class="section-desc">Tap any line for full analysis · Tap underlined words for dictionary</p><div class="card poem-block">`;
  let lastQ = 0;
  POEM.lines.forEach(l => {
    if (l.quatrain && l.quatrain !== lastQ) { lastQ = l.quatrain; html += `<div class="quatrain-label">Quatrain ${lastQ}</div>`; }
    if (l.couplet && lastQ !== 4) { lastQ = 4; html += `<div class="quatrain-label">Couplet</div>`; }
    html += `<div class="poem-line" onclick="openLine(${l.id})"><span class="line-num">${l.id}</span>${makeWordsClickable(l.text)}</div>`;
  });
  html += `</div>`;
  return html;
}

function renderVocab() {
  markSection('vocab', 40);
  return `<h1 class="section-title">Word Explorer</h1><p class="section-desc">Every important word — click for full entry</p>
    <input class="vocab-search" type="search" placeholder="Search words…" id="vocabFilter" oninput="filterVocab(this.value)" />
    <div id="vocabList">${VOCAB.map(v => `<div class="vocab-item" onclick="showWord('${v.word.replace(/'/g, "\\'")}')"><div class="w">${v.word}</div><div class="meta">${v.pos} · ${v.phon}</div><div class="bn-m">${v.bn}</div></div>`).join('')}</div>`;
}
function filterVocab(q) {
  q = q.toLowerCase();
  document.querySelectorAll('.vocab-item').forEach(el => { el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none'; });
}

function renderBangla() {
  markSection('bangla', 70);
  return `<h1 class="section-title">বাংলা অর্থ</h1><p class="section-desc">Line-by-line Bengali meaning · India 🇮🇳</p>
    ${LINE_ANALYSIS.map(la => `<div class="card"><p style="font-family:var(--font-serif);font-size:1.05rem">${la.id}. ${la.text}</p><p class="bn" style="color:var(--accent);margin-top:6px">${la.bn}</p><p class="text-muted mt-1" style="font-size:0.9rem">${la.simpleBn}</p></div>`).join('')}`;
}

function renderAnalysis() {
  markSection('analysis', 50);
  return `<h1 class="section-title">Line-by-Line Analysis</h1><p class="section-desc">Expand any line for full critical notes</p><div class="accordion">
    ${LINE_ANALYSIS.map(la => `<details><summary>${la.id}. ${la.text.slice(0, 42)}${la.text.length > 42 ? '…' : ''}</summary><div class="acc-body"><p class="bn" style="color:var(--accent)">${la.bn}</p><div class="simple-only"><p><strong>Simple:</strong> ${la.simple}</p><p class="bn">${la.simpleBn}</p></div><div class="detailed-only"><p><strong>Detailed:</strong> ${la.detailed}</p><p class="bn">${la.detailedBn}</p><p><strong>Devices:</strong> ${la.devices.join(', ')}</p><p><strong>Symbolism:</strong> ${la.symbolism}</p><p style="color:var(--accent2)"><strong>Exam:</strong> ${la.exam}</p></div></div></details>`).join('')}</div>`;
}

function renderDevices() {
  markSection('devices', 70);
  return `<h1 class="section-title">Literary Devices</h1><p class="section-desc">Only devices genuinely present in the poem</p>
    ${DEVICES.map(d => `<div class="card"><h3>${d.name}</h3><ul style="padding-left:18px;color:var(--muted)">${d.examples.map(e => `<li><em style="color:var(--text)">${e.text}</em> — ${e.note}</li>`).join('')}</ul></div>`).join('')}
    <div class="card"><h3>Three Central Metaphors</h3><div class="metaphor-grid">${METAPHORS.map(m => `<div class="metaphor-card" onclick="alert('${m.title}: ${m.meaning}')"><div class="icon">${m.icon}</div><h4>${m.title}</h4><p class="bn" style="font-size:0.85rem">${m.bnTitle}</p><div class="stages">${m.stages.map(s => `<span>${s}</span>`).join('')}</div><p style="font-size:0.85rem;color:var(--muted);margin-top:8px">${m.meaning}</p></div>`).join('')}</div></div>`;
}

function renderThemes() {
  markSection('themes', 70);
  return `<h1 class="section-title">Themes</h1><p class="section-desc">Exam-ready paragraphs for each theme</p><div class="theme-grid">
    ${THEMES.map(t => `<div class="theme-card"><h4>${t.title}</h4><div class="bn-label">${t.bn}</div><p class="en-only" style="font-size:0.9rem;color:var(--muted)">${t.en}</p><p class="bn" style="font-size:0.9rem">${t.bnExpl}</p><details style="margin-top:8px"><summary style="font-size:0.85rem;color:var(--accent);cursor:pointer">Exam paragraph</summary><p style="font-size:0.9rem;margin-top:6px;color:var(--text)">${t.examPara}</p></details></div>`).join('')}</div>`;
}

function renderBackground() {
  markSection('background', 70);
  return `<h1 class="section-title">Historical & Literary Background</h1>
    <div class="card"><h3>Shakespeare’s Sonnet Tradition</h3><p class="en-only">Shakespeare wrote 154 sonnets, published in 1609. They belong to the Renaissance tradition of love poetry that also meditates on time, beauty, and mortality.</p><p class="bn">শেক্সপিয়ার ১৫৪টি সনেট লেখেন (প্রকাশ ১৬০৯)। এগুলি রেনেসাঁ যুগের প্রেমকবিতার ঐতিহ্যের অংশ।</p></div>
    <div class="card"><h3>Time → Aging → Mortality → Love</h3><div class="struct-diagram"><div class="struct-box"><h4>TIME</h4><p>Irreversible passage</p></div><div class="struct-box q1"><h4>AGING</h4><p>Autumn / Twilight / Fire</p></div><div class="struct-box q3"><h4>MORTALITY</h4><p>Night / Death-bed / Leave</p></div><div class="struct-box cp"><h4>LOVE</h4><p>Made stronger by awareness</p></div></div></div>`;
}

function renderCritical() {
  markSection('critical', 70);
  return `<h1 class="section-title">Critical Appreciation</h1>
    <div class="card"><h3>Introduction</h3><p class="en-only">Sonnet 73 is one of Shakespeare’s most admired meditations on aging, time, and love. Through three extended metaphors the speaker shows the beloved the signs of late life; the couplet then argues that this awareness strengthens love.</p><p class="bn">সনেট ৭৩ শেক্সপিয়ারের বার্ধক্য, সময় ও ভালোবাসা বিষয়ক প্রশংসিত ধ্যান।</p></div>
    <div class="card"><h3>5-Mark Answer (sample)</h3><p class="en-only">In Sonnet 73 Shakespeare compares old age to late autumn, to twilight, and to a dying fire. Yellow leaves and bare boughs show physical decline; twilight fading into night shows the approach of death; the fire on the ashes of youth shows life consuming itself. The final couplet states that the beloved’s perception of this mortality makes love stronger.</p><p class="bn mt-1">সনেট ৭৩-এ শেক্সপিয়ার বার্ধক্যকে শরৎ, গোধূলি ও নিভে আসা আগুনের সাথে তুলনা করেছেন।</p></div>`;
}

function renderExam() {
  markSection('exam', 50);
  return `<h1 class="section-title">Exam Questions</h1>
    <div class="card"><h3>Very Short Questions</h3>${EXAM_QS.veryShort.map(x => `<details style="margin-bottom:8px"><summary style="cursor:pointer;font-weight:600">${x.q}</summary><p class="mt-1">${x.a}</p><p class="bn">${x.bn}</p></details>`).join('')}</div>
    <div class="card"><h3>Short Questions</h3>${EXAM_QS.short.map(x => `<details style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:600">${x.q}</summary><p class="mt-1">${x.a}</p><p class="bn mt-1">${x.bn}</p></details>`).join('')}</div>
    <div class="card"><h3>Broad Questions</h3>${EXAM_QS.broad.map(x => `<details style="margin-bottom:10px"><summary style="cursor:pointer;font-weight:600">${x.q}</summary><p class="mt-1" style="white-space:pre-line">${x.a}</p><p class="bn mt-1" style="white-space:pre-line">${x.bn}</p></details>`).join('')}</div>`;
}

function renderQuiz() {
  return `<h1 class="section-title">MCQ Quiz</h1><p class="section-desc">20 random questions from a bank of ${QUIZ.length}.</p>
    <div class="card" style="text-align:center"><p>Test poet, form, vocabulary, metaphors, themes and critical points.</p><button class="btn primary mt-2" onclick="startQuiz()">Start Quiz</button></div>
    <div class="card"><h3>Flashcards</h3><button class="btn" onclick="state.flashIndex=0;state.flashFlipped=false;renderFlash()">Open Flashcards</button></div>`;
}

function renderRevision() {
  markSection('revision', 80);
  return `<h1 class="section-title">Revision</h1>
    <div class="card"><h3>1-Minute Revision</h3><p><strong>Poet:</strong> Shakespeare (1564–1616), Bard of Avon, 154 sonnets.</p><p><strong>Form:</strong> 14 lines, ABAB CDCD EFEF GG.</p><p><strong>Metaphors:</strong> Autumn → Twilight → Dying Fire.</p><p><strong>Message:</strong> Awareness of death makes love stronger.</p></div>
    <div class="card"><h3>Night-Before-Exam</h3><ul style="padding-left:18px;color:var(--muted)"><li>Three metaphors + meanings</li><li>Rhyme scheme & structure</li><li>Bare ruin'd choirs / Consum'd with that which it was nourish'd by</li><li>Final couplet argument</li><li>Themes: aging, time, mortality, love</li></ul></div>
    <div class="card"><h3>Memory Map</h3><pre style="font-size:0.85rem;color:var(--muted);white-space:pre-wrap;font-family:var(--font-sans)">SONNET 73\n├── AGING\n│   ├── Autumn (yellow leaves, bare boughs)\n│   ├── Twilight (sunset → night)\n│   └── Fire (ashes of youth → expire)\n├── MORTALITY\n└── LOVE (perceiv'st → more strong)</pre></div>`;
}

function renderProgress() {
  const sections = [{ id: 'poem', label: 'Poem Reading' },{ id: 'vocab', label: 'Vocabulary' },{ id: 'analysis', label: 'Analysis' },{ id: 'devices', label: 'Literary Devices' },{ id: 'themes', label: 'Themes' },{ id: 'exam', label: 'Questions' },{ id: 'quiz', label: 'Quiz' },{ id: 'revision', label: 'Revision' }];
  const overall = overallProgress();
  return `<h1 class="section-title">My Progress</h1>
    <div class="card" style="text-align:center"><p style="font-size:2.5rem;font-weight:700;color:var(--accent2)">${overall}%</p><p class="text-muted">Overall completion</p></div>
    <div class="card"><div class="progress-bars">${sections.map(s => { const p = state.progress[s.id] || 0; return `<div class="pbar-row"><div class="pbar-label">${s.label}</div><div class="pbar-track"><div class="pbar-fill" style="width:${p}%"></div></div><div class="pbar-pct">${p}%</div></div>`; }).join('')}</div></div>
    <div class="card"><h3>Badges</h3><div class="badges"><span class="badge ${state.progress.poet >= 50 ? 'earned' : ''}">🏆 Poet Explorer</span><span class="badge ${state.progress.poem >= 50 ? 'earned' : ''}">📖 Poem Reader</span><span class="badge ${state.progress.vocab >= 50 ? 'earned' : ''}">🔤 Vocabulary Master</span><span class="badge ${state.progress.devices >= 50 ? 'earned' : ''}">🎭 Device Detective</span><span class="badge ${state.progress.critical >= 50 ? 'earned' : ''}">🧠 Critical Thinker</span><span class="badge ${overall >= 70 ? 'earned' : ''}">⭐ Sonnet Master</span></div></div>`;
}

function render() {
  const main = document.getElementById('mainContent');
  const map = { home: renderHome, poet: renderPoet, about: renderAbout, poem: renderPoem, vocab: renderVocab, bangla: renderBangla, analysis: renderAnalysis, devices: renderDevices, themes: renderThemes, background: renderBackground, critical: renderCritical, exam: renderExam, quiz: renderQuiz, revision: renderRevision, progress: renderProgress, teach: renderTeach };
  const fn = map[state.page] || renderHome;
  main.innerHTML = fn();
  updateProgressUI();
}

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  setLang('both');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); navigate(a.dataset.page); });
  });
  document.querySelectorAll('#langSwitch button').forEach(b => {
    b.addEventListener('click', () => setLang(b.dataset.lang));
  });
  const searchInput = document.getElementById('globalSearch');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const results = doSearch(searchInput.value);
      const box = document.getElementById('searchResults');
      if (!results.length) { box.innerHTML = '<p class="text-muted">No results</p>'; return; }
      box.innerHTML = results.map((r, i) => `<div class="search-hit" data-i="${i}"><span class="tag">${r.type}</span>${escapeHtml(r.text)}</div>`).join('');
      box.querySelectorAll('.search-hit').forEach((el, i) => {
        el.addEventListener('click', () => { closeModal('searchModal'); results[i].action(); });
      });
    });
  }
  function updateOnline() { document.getElementById('offlineBadge').hidden = navigator.onLine; }
  window.addEventListener('online', updateOnline);
  window.addEventListener('offline', updateOnline);
  updateOnline();
  render();
});
