/* SONNET 73 MASTER — Educational Content Module */

const POEM = {
  title: "Sonnet 73 (LXXIII)",
  poet: "William Shakespeare",
  lines: [
    { id: 1, text: "That time of year thou mayst in me behold", quatrain: 1 },
    { id: 2, text: "When yellow leaves, or none, or few, do hang", quatrain: 1 },
    { id: 3, text: "Upon those boughs which shake against the cold,", quatrain: 1 },
    { id: 4, text: "Bare ruin'd choirs where late the sweet birds sang.", quatrain: 1 },
    { id: 5, text: "In me thou see'st the twilight of such day", quatrain: 2 },
    { id: 6, text: "As after sunset fadeth in the west,", quatrain: 2 },
    { id: 7, text: "Which by and by black night doth take away,", quatrain: 2 },
    { id: 8, text: "Death's second self, that seals up all in rest.", quatrain: 2 },
    { id: 9, text: "In me thou see'st the glowing of such fire", quatrain: 3 },
    { id: 10, text: "That on the ashes of his youth doth lie,", quatrain: 3 },
    { id: 11, text: "As the death-bed whereon it must expire,", quatrain: 3 },
    { id: 12, text: "Consum'd with that which it was nourish'd by.", quatrain: 3 },
    { id: 13, text: "This thou perceiv'st, which makes thy love more strong,", couplet: true },
    { id: 14, text: "To love that well which thou must leave ere long.", couplet: true }
  ]
};

const VOCAB = [
  { word: "behold", phon: "/bɪˈhəʊld/", bnPhon: "বিহোল্ড", pos: "Verb", bn: "দেখা / লক্ষ্য করা", en: "to see or observe", syn: "see, observe, notice", ctx: "Notice the signs of aging in me.", line: 1 },
  { word: "mayst", phon: "/meɪst/", bnPhon: "মেস্ট", pos: "Verb (archaic)", bn: "পারো", en: "may (old form)", syn: "can, might", ctx: "You may see in me…", line: 1 },
  { word: "thou", phon: "/ðaʊ/", bnPhon: "দাউ", pos: "Pronoun", bn: "তুমি (পুরনো রূপ)", en: "you (singular, old form)", syn: "you", ctx: "Addressed to the beloved", line: 1 },
  { word: "yellow leaves", phon: "", bnPhon: "", pos: "Noun phrase", bn: "হলুদ পাতা", en: "autumn leaves", syn: "autumn foliage", ctx: "Symbol of aging and decline", line: 2 },
  { word: "boughs", phon: "/baʊz/", bnPhon: "বাউজ", pos: "Noun", bn: "গাছের ডালপালা", en: "tree branches", syn: "branches", ctx: "Represent the frail human body", line: 3 },
  { word: "cold", phon: "/kəʊld/", bnPhon: "কোল্ড", pos: "Noun", bn: "ঠান্ডা", en: "low temperature; weakness", syn: "chill", ctx: "Physical vulnerability of old age", line: 3 },
  { word: "bare", phon: "/beə/", bnPhon: "বেয়ার", pos: "Adjective", bn: "পাতাহীন", en: "without leaves", syn: "naked, exposed", ctx: "Leafless branches", line: 4 },
  { word: "ruin'd", phon: "/ˈruːɪnd/", bnPhon: "রুইন্ড", pos: "Adjective", bn: "ধ্বংসপ্রাপ্ত", en: "ruined", syn: "destroyed", ctx: "Abandoned state", line: 4 },
  { word: "choirs", phon: "/kwaɪəz/", bnPhon: "কোয়ারস", pos: "Noun", bn: "গায়কদল / গির্জার গায়কস্থান", en: "groups of singers; church choir area", syn: "chorus", ctx: "Metaphor for empty branches", line: 4 },
  { word: "twilight", phon: "/ˈtwaɪlaɪt/", bnPhon: "টুইলাইট", pos: "Noun", bn: "গোধূলি", en: "soft light after sunset", syn: "dusk", ctx: "Transition from life toward death", line: 5 },
  { word: "sunset", phon: "/ˈsʌnset/", bnPhon: "সানসেট", pos: "Noun", bn: "সূর্যাস্ত", en: "when the sun goes down", syn: "sundown", ctx: "End of life", line: 6 },
  { word: "fadeth", phon: "/ˈfeɪdɪθ/", bnPhon: "ফেডেথ", pos: "Verb (archaic)", bn: "ম্লান হয়ে যায়", en: "fades", syn: "dims", ctx: "Slow slipping away of life", line: 6 },
  { word: "by and by", phon: "", bnPhon: "", pos: "Adverbial", bn: "ক্রমে", en: "before long; gradually", syn: "eventually", ctx: "Unstoppable approach of death", line: 7 },
  { word: "black night", phon: "", bnPhon: "", pos: "Noun phrase", bn: "কালো রাত", en: "complete darkness", syn: "darkness", ctx: "Metaphor for death", line: 7 },
  { word: "Death's second self", phon: "", bnPhon: "", pos: "Noun phrase", bn: "মৃত্যুর দ্বিতীয় রূপ", en: "sleep, which resembles death", syn: "sleep", ctx: "Sleep as image of death", line: 8 },
  { word: "seals up", phon: "", bnPhon: "", pos: "Verb phrase", bn: "বন্ধ করে দেয়", en: "closes completely", syn: "closes", ctx: "Finality of death", line: 8 },
  { word: "rest", phon: "/rest/", bnPhon: "রেস্ট", pos: "Noun", bn: "বিশ্রাম / চিরনিদ্রা", en: "sleep; final rest of death", syn: "repose", ctx: "Nothing awakens one from death", line: 8 },
  { word: "glowing", phon: "/ˈɡləʊɪŋ/", bnPhon: "গ্লোয়িং", pos: "Adjective", bn: "জ্বলন্ত আভা", en: "emitting steady light", syn: "shining", ctx: "Remaining life-force", line: 9 },
  { word: "fire", phon: "/ˈfaɪə/", bnPhon: "ফায়ার", pos: "Noun", bn: "আগুন / জীবনশিখা", en: "flame; here = life", syn: "flame", ctx: "Life as a dying fire", line: 9 },
  { word: "ashes", phon: "/ˈæʃɪz/", bnPhon: "অ্যাশিজ", pos: "Noun", bn: "ছাই", en: "remains after burning", syn: "cinders", ctx: "Youth already spent", line: 10 },
  { word: "youth", phon: "/juːθ/", bnPhon: "ইয়ুথ", pos: "Noun", bn: "যৌবন", en: "period of being young", syn: "young days", ctx: "What has already been consumed", line: 10 },
  { word: "death-bed", phon: "", bnPhon: "", pos: "Noun", bn: "মৃত্যুশয্যা", en: "bed on which someone dies", syn: "final bed", ctx: "Where the fire/life ends", line: 11 },
  { word: "expire", phon: "/ɪkˈspaɪə/", bnPhon: "এক্সপায়ার", pos: "Verb", bn: "নিভে যাওয়া / মারা যাওয়া", en: "to die; to burn out", syn: "die, end", ctx: "Both literal and metaphorical dying", line: 11 },
  { word: "Consum'd", phon: "/kənˈsjuːmd/", bnPhon: "কনজিউমড", pos: "Verb", bn: "ক্ষয়প্রাপ্ত", en: "used up; destroyed by", syn: "destroyed", ctx: "Life ending by what sustained it", line: 12 },
  { word: "nourish'd", phon: "/ˈnʌrɪʃt/", bnPhon: "নারিশড", pos: "Verb", bn: "পুষ্ট", en: "fed; given strength", syn: "fed, sustained", ctx: "What once gave energy now causes decay", line: 12 },
  { word: "perceiv'st", phon: "/pəˈsiːvst/", bnPhon: "পার্সিভস্ট", pos: "Verb (archaic)", bn: "উপলব্ধি করো", en: "you perceive / understand", syn: "understand", ctx: "Beloved understands speaker's mortality", line: 13 },
  { word: "strong", phon: "/strɒŋ/", bnPhon: "স্ট্রং", pos: "Adjective", bn: "দৃঢ়", en: "powerful; intense", syn: "intense", ctx: "Love grows stronger", line: 13 },
  { word: "well", phon: "/wel/", bnPhon: "ওয়েল", pos: "Adverb", bn: "ভালোভাবে", en: "deeply; thoroughly", syn: "deeply", ctx: "Love deeply while it lasts", line: 14 },
  { word: "ere long", phon: "/eə lɒŋ/", bnPhon: "এয়ার লং", pos: "Adverbial", bn: "শীঘ্রই", en: "before long; soon", syn: "soon", ctx: "Separation due to death is near", line: 14 }
];

const LINE_ANALYSIS = [
  { id: 1, text: "That time of year thou mayst in me behold", bn: "বছরের সেই সময় তুমি আমার মধ্যে দেখতে পারো", simple: "The speaker asks the listener to notice in him a late stage of the year.", simpleBn: "কবি শ্রোতাকে তাঁর মধ্যে বছরের শেষ পর্যায় দেখতে বলছেন।", detailed: "The opening invites the beloved to observe the speaker’s aging. ‘That time of year’ is a metaphor for late life.", detailedBn: "প্রথম লাইনে প্রিয়জনকে কবির বার্ধক্য লক্ষ্য করতে বলা হয়েছে।", keywords: ["time of year","thou","mayst","behold"], symbolism: "Season = stage of life", imagery: "Seasonal", devices: ["Metaphor","Direct address"], tone: "Intimate, reflective", exam: "Establishes the central comparison between age and a late season." },
  { id: 2, text: "When yellow leaves, or none, or few, do hang", bn: "যখন হলুদ পাতা, বা কোনো পাতা নেই, বা অল্প কয়েকটি ঝুলে থাকে", simple: "In autumn trees have yellow leaves, or almost none left.", simpleBn: "শরতে গাছে হলুদ পাতা থাকে, বা প্রায় কোনো পাতাই থাকে না।", detailed: "Yellow leaves signal autumn and decline. The progression emphasises scarcity.", detailedBn: "হলুদ পাতা শরৎ ও ক্ষয়ের ইঙ্গিত দেয়।", keywords: ["yellow leaves","none","few"], symbolism: "Yellow leaves = aging", imagery: "Visual, seasonal", devices: ["Imagery"], tone: "Melancholic", exam: "Shows physical signs of aging through nature imagery." },
  { id: 3, text: "Upon those boughs which shake against the cold,", bn: "সেই ডালপালার উপর যা ঠান্ডায় কাঁপে", simple: "The branches tremble in the cold wind.", simpleBn: "ডালগুলো ঠান্ডা হাওয়ায় কাঁপছে।", detailed: "Boughs stand for the aging body; shaking suggests frailty.", detailedBn: "ডালপালা বার্ধক্যপ্রাপ্ত দেহের প্রতীক।", keywords: ["boughs","shake","cold"], symbolism: "Boughs = frail body; Cold = weakness", imagery: "Tactile, visual", devices: ["Metaphor","Personification"], tone: "Somber", exam: "Links the human body with the exposed, trembling tree." },
  { id: 4, text: "Bare ruin'd choirs where late the sweet birds sang.", bn: "উন্মোচিত ধ্বংসপ্রাপ্ত গায়কদল যেখানে একসময় মিষ্টি পাখিরা গান গাইত", simple: "Empty branches are like ruined church choirs where birds once sang.", simpleBn: "খালি ডালগুলো যেন ভাঙা গির্জার গায়কস্থান।", detailed: "Famous image: leafless branches as ruined choir stalls. Sweet birds recall lost youth.", detailedBn: "পাতাহীন ডালকে ধ্বংসপ্রাপ্ত গায়কস্থানের সাথে তুলনা।", keywords: ["bare","ruin'd choirs","sweet birds"], symbolism: "Ruined choirs = empty life; Birds = lost youth", imagery: "Architectural + natural", devices: ["Metaphor","Alliteration","Contrast"], tone: "Nostalgic, elegiac", exam: "Key image of emptiness after vitality; often asked in exams." },
  { id: 5, text: "In me thou see'st the twilight of such day", bn: "আমার মধ্যে তুমি এমন দিনের গোধূলি দেখতে পাও", simple: "You see in me the evening light of a day that is ending.", simpleBn: "তুমি আমার মধ্যে একটি শেষ হয়ে আসা দিনের সন্ধ্যালোক দেখছ।", detailed: "Second metaphor: life as a day moving into twilight.", detailedBn: "দ্বিতীয় রূপক: জীবনকে দিনের সাথে তুলনা।", keywords: ["twilight","such day"], symbolism: "Twilight = late stage of life", imagery: "Light / dark", devices: ["Metaphor","Parallel structure"], tone: "Contemplative", exam: "Introduces the day–night metaphor for life and death." },
  { id: 6, text: "As after sunset fadeth in the west,", bn: "যেমন সূর্যাস্তের পর পশ্চিমে ম্লান হয়ে যায়", simple: "Just as the light fades in the west after the sun sets.", simpleBn: "ঠিক যেমন সূর্য ডোবার পর পশ্চিমে আলো মিলিয়ে যায়।", detailed: "Sunset marks the end of day; slow fading emphasises gradual decline.", detailedBn: "সূর্যাস্ত দিনের সমাপ্তি; ধীর ম্লান হওয়া ক্রমশ ক্ষয়কে বোঝায়।", keywords: ["sunset","fadeth","west"], symbolism: "Sunset = end of life’s active period", imagery: "Visual", devices: ["Simile","Imagery"], tone: "Quiet, resigned", exam: "Shows the gradual nature of aging." },
  { id: 7, text: "Which by and by black night doth take away,", bn: "যাকে ক্রমে কালো রাত কেড়ে নেয়", simple: "Which is gradually taken away by black night.", simpleBn: "যাকে ধীরে ধীরে কালো রাত নিয়ে যায়।", detailed: "‘By and by’ stresses the inevitable advance of night (death).", detailedBn: "‘By and by’ মৃত্যুর অনিবার্য অগ্রগতি নির্দেশ করে।", keywords: ["by and by","black night"], symbolism: "Black night = death", imagery: "Darkness", devices: ["Personification","Metaphor"], tone: "Serious, inevitable", exam: "Night as death is a traditional but powerful equation." },
  { id: 8, text: "Death's second self, that seals up all in rest.", bn: "মৃত্যুর দ্বিতীয় রূপ, যা সবকিছু চিরবিশ্রামে বন্ধ করে দেয়", simple: "Night is like a second form of death that closes everything in final sleep.", simpleBn: "রাত মৃত্যুর দ্বিতীয় রূপ—যা সবকিছু চিরঘুমে বন্ধ করে দেয়।", detailed: "Sleep is death’s brother. ‘Seals up’ conveys finality.", detailedBn: "ঘুমকে মৃত্যুর দ্বিতীয় রূপ বলা হয়। ‘Seals up’ চূড়ান্ততা বোঝায়।", keywords: ["Death's second self","seals up","rest"], symbolism: "Sleep ≈ death", imagery: "Closure", devices: ["Metaphor","Personification"], tone: "Solemn, final", exam: "Links sleep and death; reinforces mortality." },
  { id: 9, text: "In me thou see'st the glowing of such fire", bn: "আমার মধ্যে তুমি এমন আগুনের জ্বলন্ত আভা দেখতে পাও", simple: "You see in me the glow of a fire that is still burning.", simpleBn: "তুমি আমার মধ্যে এখনও জ্বলতে থাকা আগুনের আভা দেখছ।", detailed: "Third metaphor: life as a fire. The glow is residual.", detailedBn: "তৃতীয় রূপক: জীবনকে আগুনের সাথে তুলনা।", keywords: ["glowing","fire"], symbolism: "Fire = remaining life", imagery: "Fire, light", devices: ["Metaphor","Parallel structure"], tone: "Warm yet fading", exam: "Introduces the fire–ashes metaphor." },
  { id: 10, text: "That on the ashes of his youth doth lie,", bn: "যা তার যৌবনের ছাইয়ের উপর শুয়ে আছে", simple: "The fire is lying on the ashes of its own youth.", simpleBn: "আগুনটি তার নিজের যৌবনের ছাইয়ের উপর পড়ে আছে।", detailed: "Past vitality has become the bed of the present weak flame.", detailedBn: "অতীত প্রাণশক্তিই বর্তমান ক্ষীণ শিখার আধার।", keywords: ["ashes","youth","lie"], symbolism: "Ashes = spent youth", imagery: "Fire residual on ash", devices: ["Metaphor","Irony"], tone: "Reflective", exam: "Youth is already consumed; only remnants remain." },
  { id: 11, text: "As the death-bed whereon it must expire,", bn: "যেমন সেই মৃত্যুশয্যা যার উপর তাকে নিভে যেতে হবে", simple: "Like a death-bed on which the fire must die out.", simpleBn: "যেমন একটি মৃত্যুশয্যা যার উপর আগুনকে নিভে যেতেই হবে।", detailed: "‘Expire’ means both to die and to burn out.", detailedBn: "‘Expire’ মানে মারা যাওয়া এবং নিভে যাওয়া।", keywords: ["death-bed","expire"], symbolism: "Death-bed = place of final extinction", imagery: "Death-bed", devices: ["Metaphor","Double meaning"], tone: "Inevitable, grave", exam: "Strongest image of approaching death in the poem." },
  { id: 12, text: "Consum'd with that which it was nourish'd by.", bn: "তাই দিয়ে ক্ষয়প্রাপ্ত যা দিয়ে তাকে পুষ্ট করা হয়েছিল", simple: "Used up by the very thing that once fed it.", simpleBn: "যে জিনিস একসময় একে খাইয়েছিল, সেই জিনিসই একে শেষ করে দিচ্ছে।", detailed: "Paradox: the fuel that nourished the fire is also what consumes it.", detailedBn: "বিরোধাভাস: যে জ্বালানি পুষ্ট করেছিল সেটাই গ্রাস করছে।", keywords: ["Consum'd","nourish'd"], symbolism: "Self-consuming nature of life", imagery: "Fire consuming its fuel", devices: ["Paradox","Antithesis"], tone: "Philosophical", exam: "Often cited for the paradox of life feeding on and destroying itself." },
  { id: 13, text: "This thou perceiv'st, which makes thy love more strong,", bn: "এটা তুমি উপলব্ধি করো, যা তোমার ভালোবাসাকে আরও দৃঢ় করে", simple: "You understand this, and that understanding makes your love stronger.", simpleBn: "তুমি এটা বুঝতে পারো, এবং সেই বোঝাপড়া তোমার ভালোবাসাকে আরও শক্তিশালী করে।", detailed: "The volta: awareness of mortality intensifies love.", detailedBn: "ভোল্টা: মরণশীলতা উপলব্ধি ভালোবাসাকে তীব্র করে।", keywords: ["perceiv'st","love more strong"], symbolism: "Knowledge of loss → deeper love", imagery: "Emotional shift", devices: ["Volta","Cause–effect"], tone: "Tender, affirmative", exam: "Crucial for the poem’s argument about love and mortality." },
  { id: 14, text: "To love that well which thou must leave ere long.", bn: "তা ভালোভাবে ভালোবাসতে যা তোমাকে শীঘ্রই ছেড়ে যেতে হবে", simple: "To love deeply the person you will soon have to leave.", simpleBn: "তাকে গভীরভাবে ভালোবাসতে যাকে তোমাকে শীঘ্রই ছেড়ে চলে যেতে হবে।", detailed: "Final couplet: because separation is near, love should be fuller. Poem ends on love, not despair.", detailedBn: "শেষ কপলেট: বিচ্ছেদ কাছে বলেই ভালোবাসা আরও পূর্ণ হওয়া উচিত।", keywords: ["love that well","leave ere long"], symbolism: "Impending loss deepens present love", imagery: "Pure statement", devices: ["Couplet resolution","Irony of gain through loss"], tone: "Intimate, urgent, loving", exam: "The moral and emotional climax of the sonnet." }
];

const METAPHORS = [
  { id: "autumn", title: "Autumn", bnTitle: "শরৎ", icon: "🍂", stages: ["Full tree","Yellow leaves","Few / none","Bare boughs","Cold"], meaning: "The decline of the year represents the decline of the human body and life.", bnMeaning: "বছরের ক্ষয় মানবদেহ ও জীবনের ক্ষয়কে নির্দেশ করে।", lines: [1,2,3,4], exam: "Shakespeare compares old age to late autumn when leaves are yellow or gone and branches shake in the cold." },
  { id: "twilight", title: "Twilight", bnTitle: "গোধূলি", icon: "🌅", stages: ["Day","Sunset","Twilight","Black night","Rest"], meaning: "The fading light of day represents the gradual approach of death.", bnMeaning: "দিনের ম্লান আলো মৃত্যুর ক্রমশ কাছাকাছি আসাকে নির্দেশ করে।", lines: [5,6,7,8], exam: "Twilight stands for the late stage of life; black night stands for death." },
  { id: "fire", title: "Dying Fire", bnTitle: "নিভে আসা আগুন", icon: "🔥", stages: ["Strong fire","Glowing","On ashes of youth","Death-bed","Expire"], meaning: "Life is a fire that is slowly burning out on the ashes of its own youth.", bnMeaning: "জীবন এমন একটি আগুন যা নিজের যৌবনের ছাইয়ের উপর ধীরে ধীরে নিভে যাচ্ছে।", lines: [9,10,11,12], exam: "The fire metaphor shows that life is self-consuming—nourished by the same force that finally destroys it." }
];

const THEMES = [
  { id: "old-age", title: "Old Age", bn: "বার্ধক্য", en: "The speaker presents himself as being in the late season of life through autumn imagery, fading light, and a dying fire.", bnExpl: "কবি নিজেকে জীবনের শেষ ঋতুতে উপস্থাপন করেছেন।", lines: [1,2,3,4,9,10], keywords: ["yellow leaves","boughs","cold","ashes"], examPara: "In Sonnet 73 Shakespeare portrays old age through three sustained metaphors: late autumn, twilight, and a fire burning on its own ashes." },
  { id: "time", title: "Passage of Time", bn: "কালের প্রবাহ", en: "Time turns leaves yellow, fades the day into night, and reduces the fire to ashes.", bnExpl: "সময় পাতা হলুদ করে, দিনকে রাতে পরিণত করে এবং আগুনকে ছাই করে।", lines: [1,5,6,7,12], keywords: ["time of year","fadeth","by and by"], examPara: "Time is the central agent of change in Sonnet 73. The final couplet accepts time’s power while insisting that love can grow stronger in the face of it." },
  { id: "mortality", title: "Mortality", bn: "মরণশীলতা", en: "Death is present as black night, Death’s second self, and the death-bed of the fire.", bnExpl: "মৃত্যু উপস্থিত কালো রাত, মৃত্যুর দ্বিতীয় রূপ এবং আগুনের মৃত্যুশয্যা হিসেবে।", lines: [7,8,11,14], keywords: ["black night","Death's second self","death-bed","expire"], examPara: "Mortality is the shadow that falls across every image. Awareness of this mortality becomes the ground of deeper love." },
  { id: "love", title: "Love", bn: "ভালোবাসা", en: "Knowledge of coming separation intensifies love. The final couplet turns the meditation on decay into an affirmation of loving well.", bnExpl: "আসন্ন বিচ্ছেদের জ্ঞান ভালোবাসাকে তীব্র করে।", lines: [13,14], keywords: ["love more strong","love that well","leave ere long"], examPara: "Far from despair, Sonnet 73 ends with a positive claim: because the beloved perceives the speaker’s mortality, love grows stronger." },
  { id: "beauty-decay", title: "Beauty and Decay", bn: "সৌন্দর্য ও ক্ষয়", en: "Past beauty is recalled in the sweet birds and youth that has become ashes; present beauty is the remaining glow.", bnExpl: "অতীত সৌন্দর্য মিষ্টি পাখি ও যৌবনে; বর্তমান সৌন্দর্য অবশিষ্ট আভায়।", lines: [4,9,10], keywords: ["sweet birds","glowing","ashes of his youth"], examPara: "The sonnet holds beauty and decay in the same frame. Decay makes the remaining beauty more precious." },
  { id: "impermanence", title: "Impermanence", bn: "অনিত্যতা", en: "Everything is vanishing: leaves, light, fire, and finally the relationship itself.", bnExpl: "সবকিছু মিলিয়ে যাওয়ার প্রক্রিয়ায়: পাতা, আলো, আগুন, সম্পর্ক।", lines: [2,6,7,12,14], keywords: ["few","fadeth","take away","expire","ere long"], examPara: "Impermanence is the condition the poem accepts. Shakespeare shows how love can answer it by becoming more deliberate and intense." },
  { id: "awareness", title: "Awareness of Death", bn: "মৃত্যুচেতনা", en: "The poem is built on seeing and perceiving. That awareness transforms love.", bnExpl: "কবিতা দেখা ও উপলব্ধির কাজের উপর নির্মিত। সেই সচেতনতা ভালোবাসাকে রূপান্তরিত করে।", lines: [1,5,9,13], keywords: ["behold","see'st","perceiv'st"], examPara: "The repeated verbs of seeing make awareness itself a theme. Understanding aging changes the quality of love." }
];

const DEVICES = [
  { name: "Metaphor", examples: [
    { text: "That time of year", note: "Late life as a season" },
    { text: "Bare ruin'd choirs", note: "Leafless branches as empty church choirs" },
    { text: "twilight of such day", note: "Late life as evening" },
    { text: "black night", note: "Death" },
    { text: "Death's second self", note: "Sleep as image of death" },
    { text: "glowing of such fire", note: "Life as a fire" },
    { text: "ashes of his youth", note: "Spent youth" },
    { text: "death-bed", note: "Place where life ends" }
  ]},
  { name: "Imagery", examples: [
    { text: "yellow leaves… boughs… cold", note: "Seasonal / visual / tactile" },
    { text: "twilight… sunset… black night", note: "Light and dark" },
    { text: "glowing… ashes… death-bed", note: "Fire imagery" }
  ]},
  { name: "Symbolism", examples: [
    { text: "Yellow leaves", note: "Aging, decline" },
    { text: "Bare branches", note: "Physical frailty" },
    { text: "Twilight", note: "Transition toward death" },
    { text: "Night", note: "Death" },
    { text: "Fire", note: "Vital force" },
    { text: "Ashes", note: "Youth already consumed" }
  ]},
  { name: "Personification", examples: [
    { text: "boughs which shake against the cold", note: "Branches given human-like trembling" },
    { text: "black night doth take away", note: "Night acts as an agent" }
  ]},
  { name: "Alliteration", examples: [
    { text: "sweet birds sang", note: "s sound" },
    { text: "by and by black", note: "b sound" }
  ]},
  { name: "Contrast / Antithesis", examples: [
    { text: "Consum'd with that which it was nourish'd by", note: "Destruction vs nourishment" },
    { text: "Youth / ashes", note: "Past vitality vs present remains" }
  ]},
  { name: "Paradox", examples: [
    { text: "Consum'd with that which it was nourish'd by", note: "Life feeds on and is destroyed by the same force" },
    { text: "love more strong… leave ere long", note: "Love deepens because of impending loss" }
  ]},
  { name: "Volta", examples: [
    { text: "This thou perceiv'st, which makes thy love more strong", note: "Turn from decay to affirmation of love" }
  ]}
];

const QUIZ = [
  { q: "Who wrote Sonnet 73?", opts: ["John Milton","William Shakespeare","John Donne","Edmund Spenser"], ans: 1, exp: "William Shakespeare (1564–1616) wrote the sequence of 154 sonnets." },
  { q: "How many lines does a Shakespearean sonnet have?", opts: ["12","14","16","18"], ans: 1, exp: "A Shakespearean sonnet has 14 lines: three quatrains and a final couplet." },
  { q: "What is the rhyme scheme of a Shakespearean sonnet?", opts: ["ABBA ABBA CDC DCD","ABAB CDCD EFEF GG","AABB CCDD EEFF GG","ABAB BABA CDCD EE"], ans: 1, exp: "The Shakespearean sonnet rhymes ABAB CDCD EFEF GG." },
  { q: "In Sonnet 73, ‘yellow leaves’ primarily symbolise:", opts: ["Spring","Youthful energy","Aging and decline","Wealth"], ans: 2, exp: "Yellow leaves belong to autumn and stand for the decline of life." },
  { q: "‘Bare ruin'd choirs’ compares leafless branches to:", opts: ["Empty market stalls","Abandoned church choir stalls","Ruined castles","Broken instruments"], ans: 1, exp: "The famous metaphor likens bare branches to the ruined choirs of a church." },
  { q: "What does ‘twilight’ represent in the second quatrain?", opts: ["Midday","The late stage of life approaching death","Childhood","Eternal life"], ans: 1, exp: "Twilight is the fading light between day and night, standing for late life." },
  { q: "‘Death's second self’ refers to:", opts: ["Old age","Sleep","Winter","Night only"], ans: 1, exp: "Sleep has traditionally been called the second self or brother of death." },
  { q: "In the fire metaphor, the ‘ashes of his youth’ stand for:", opts: ["Future hopes","The remains of spent youth","Wealth","Poetry"], ans: 1, exp: "The fire lies on the ashes of the youth it has already burned." },
  { q: "The phrase ‘Consum'd with that which it was nourish'd by’ is an example of:", opts: ["Simile","Alliteration only","Paradox","Hyperbole"], ans: 2, exp: "It is a paradox: the same force both feeds and destroys the fire (life)." },
  { q: "The final couplet claims that awareness of mortality:", opts: ["Destroys love","Makes love stronger","Is irrelevant to love","Ends the relationship"], ans: 1, exp: "‘which makes thy love more strong’ — knowledge of coming loss intensifies love." },
  { q: "The three central metaphors of Sonnet 73 are:", opts: ["Spring, noon, candle","Autumn, twilight, dying fire","Winter, midnight, ice","Summer, dawn, river"], ans: 1, exp: "Autumn (Q1), twilight (Q2), dying fire (Q3)." },
  { q: "‘Thou mayst in me behold’ means:", opts: ["You must ignore me","You may see / observe in me","You should leave me","You cannot understand me"], ans: 1, exp: "‘Behold’ = see or observe; the speaker invites observation." },
  { q: "The volta (turn) of the sonnet occurs at:", opts: ["Line 5","Line 9","Line 13","Line 1"], ans: 2, exp: "The turn toward the effect on love comes in the couplet, lines 13–14." },
  { q: "‘Ere long’ means:", opts: ["Long ago","Before long / soon","Never","Forever"], ans: 1, exp: "Archaic phrase meaning ‘before long’ or ‘soon’." },
  { q: "Which image appears in the first quatrain?", opts: ["Sunset","Ashes","Yellow leaves and bare boughs","Death-bed"], ans: 2, exp: "Yellow leaves, few or none, and boughs shaking against the cold." },
  { q: "Shakespeare is also known as:", opts: ["The Bard of Avon","The Lake Poet","The Metaphysical Poet","The Cavalier Poet"], ans: 0, exp: "He is traditionally called the Bard of Avon." },
  { q: "A quatrain is:", opts: ["A two-line unit","A four-line unit","A six-line unit","An eight-line unit"], ans: 1, exp: "A quatrain is a stanza or unit of four lines." },
  { q: "The couplet in a Shakespearean sonnet usually:", opts: ["Introduces a new metaphor","Resolves or comments on the argument","Describes nature only","Is unrelated"], ans: 1, exp: "The final couplet often provides a resolution, twist, or summary." },
  { q: "‘Seals up all in rest’ suggests:", opts: ["Temporary sleep","The finality of death","A short rest","Waking up soon"], ans: 1, exp: "‘Seals up’ conveys closure and finality." },
  { q: "The tone of the first twelve lines is best described as:", opts: ["Joyful","Reflective and melancholic","Angry","Comic"], ans: 1, exp: "The dominant tone is reflective and tinged with melancholy." },
  { q: "What does the speaker ask the beloved to do?", opts: ["Forget him","Observe the signs of aging in him","Leave at once","Write a poem"], ans: 1, exp: "The repeated ‘behold / see'st / perceiv'st’ asks for observation and understanding." },
  { q: "‘Boughs’ means:", opts: ["Roots","Tree branches","Flowers","Fruits"], ans: 1, exp: "Boughs are the main branches of a tree." },
  { q: "Which statement best captures the poem’s final message?", opts: ["Love is impossible in old age","Because separation is near, love should be deeper","Death ends all feeling","Youth is the only time for love"], ans: 1, exp: "Awareness of impending loss makes love ‘more strong’ and urges loving ‘well’." },
  { q: "‘Ruin'd choirs’ is primarily a:", opts: ["Simile","Metaphor","Hyperbole","Onomatopoeia"], ans: 1, exp: "It is a metaphor equating bare branches with ruined choir stalls." },
  { q: "How many sonnets did Shakespeare write?", opts: ["100","120","154","200"], ans: 2, exp: "The sequence contains 154 sonnets." },
  { q: "Iambic pentameter means:", opts: ["Five stressed syllables only","A line of five iambic feet","Four feet per line","Free verse"], ans: 1, exp: "An iamb is unstressed + stressed; pentameter = five such feet." },
  { q: "The ‘death-bed’ in the third quatrain belongs to:", opts: ["The beloved","The fire (life)","The birds","Night"], ans: 1, exp: "The fire lies on the ashes as on a death-bed where it must expire." },
  { q: "Which literary device is clearest in ‘Consum'd with that which it was nourish'd by’?", opts: ["Alliteration","Paradox / antithesis","Onomatopoeia","Pun only"], ans: 1, exp: "The same agent both nourishes and consumes—classic paradox." },
  { q: "The overall movement of the three quatrains is:", opts: ["From death to youth","From autumn → twilight → dying fire","From fire to leaves","Random"], ans: 1, exp: "Each metaphor moves closer to extinction." },
  { q: "‘Perceiv'st’ means:", opts: ["You destroy","You understand / perceive","You forget","You sing"], ans: 1, exp: "Archaic second-person form of ‘perceive’." },
  { q: "The poem’s attitude toward death is best described as:", opts: ["Denial","Acceptance that deepens love","Celebration of death","Indifference"], ans: 1, exp: "Death is accepted; the response is stronger, more conscious love." },
  { q: "Why is the awareness of death important in the poem’s argument?", opts: ["It ends the poem in fear","It is what strengthens love","It is ignored","It is comic"], ans: 1, exp: "The perception of mortality is presented as the cause of stronger love." },
  { q: "The structure of Sonnet 73 can be summarised as:", opts: ["One long description","Three metaphors of decline + couplet on love","Only a love declaration","A narrative of a day"], ans: 1, exp: "Q1 Autumn, Q2 Twilight, Q3 Fire, Couplet Love." },
  { q: "What makes the love ‘more strong’ according to the couplet?", opts: ["Wealth","The perception of the speaker’s mortality","Youth","Distance"], ans: 1, exp: "‘This thou perceiv'st, which makes thy love more strong.’" },
  { q: "‘Expire’ in the fire metaphor carries a double meaning of:", opts: ["Begin and end","Die and burn out","Grow and shrink","Sing and speak"], ans: 1, exp: "Expire = to die; also to come to an end as a flame does." },
  { q: "The dominant feeling after reading the whole sonnet is:", opts: ["Despair only","A complex mixture of melancholy and intensified love","Pure joy","Anger at time"], ans: 1, exp: "Melancholy images lead to an affirmation of deeper love." },
  { q: "‘Choirs’ in ‘ruin'd choirs’ primarily evokes:", opts: ["Military ranks","Church architecture and lost song","School classrooms","Market places"], ans: 1, exp: "Choirs = the part of a church for singers; now ruined and silent." },
  { q: "Shakespeare lived during which historical period?", opts: ["Victorian","Elizabethan / early Jacobean","Romantic","Modernist"], ans: 1, exp: "He lived 1564–1616, spanning Elizabeth I and James I." },
  { q: "The primary addressee of Sonnet 73 is:", opts: ["The poet’s enemy","A beloved (traditionally the Fair Youth)","Death itself","The reader only"], ans: 1, exp: "The second-person address and concern with love point to the beloved." },
  { q: "‘Shake against the cold’ suggests:", opts: ["Strength","Physical frailty and vulnerability","Anger","Dance"], ans: 1, exp: "Shaking against cold is an image of weakness and exposure." },
  { q: "Which of the following is NOT one of the three central metaphors?", opts: ["Autumn tree","Twilight","River flowing to the sea","Dying fire"], ans: 2, exp: "The three are autumn, twilight, and the dying fire." },
  { q: "The phrase ‘love that well’ urges the beloved to:", opts: ["Love moderately","Love deeply / thoroughly","Stop loving","Love only youth"], ans: 1, exp: "‘Well’ here means fully, deeply, properly." },
  { q: "The west in the sunset image is symbolically linked to:", opts: ["Beginning","Ending and decline","Wealth","War"], ans: 1, exp: "Sunset in the west marks the close of day and of life." },
  { q: "A ‘couplet’ is:", opts: ["Four lines","Two rhyming lines","Six lines","An unrhymed pair"], ans: 1, exp: "A couplet is two consecutive lines that usually rhyme." },
  { q: "What does ‘behold’ mean?", opts: ["To destroy","To see or observe","To forget","To sing"], ans: 1, exp: "Behold means to see or observe." },
  { q: "Sonnet 73 belongs to which larger sequence theme group?", opts: ["The Dark Lady sonnets only","The Fair Youth sonnets (time, love, mortality)","Only political sonnets","Comic sonnets"], ans: 1, exp: "It is among the sonnets addressed to the Fair Youth that meditate on time and love." },
  { q: "‘Mayst’ is an archaic form of:", opts: ["Must","May","Might have","Made"], ans: 1, exp: "‘Mayst’ = may (second person singular)." },
  { q: "The image of birds that ‘late… sang’ suggests:", opts: ["Present joy","Past vitality now gone","Future hope","Anger"], ans: 1, exp: "‘Late’ means recently — the song belongs to the past." },
  { q: "Black night ‘doth take away’ the twilight. This is an example of:", opts: ["Simile","Personification","Hyperbole","Oxymoron"], ans: 1, exp: "Night is given the human-like action of taking something away." },
  { q: "Which word most clearly signals the self-consuming nature of life?", opts: ["Yellow","Twilight","Nourish'd / Consum'd","Behold"], ans: 2, exp: "The pairing ‘Consum'd… nourish'd’ states the paradox directly." }
];

const FLASHCARDS = [
  { front: "What does ‘twilight’ symbolise?", back: "The late stage of life approaching death.", bn: "জীবনের শেষ পর্যায় যা মৃত্যুর দিকে এগিয়ে যাচ্ছে।" },
  { front: "What are the three central metaphors?", back: "Autumn, Twilight, Dying Fire.", bn: "শরৎ, গোধূলি, নিভে আসা আগুন।" },
  { front: "What does ‘bare ruin'd choirs’ compare?", back: "Leafless branches to abandoned church choir stalls.", bn: "পাতাহীন ডালকে ধ্বংসপ্রাপ্ত গির্জার গায়কস্থানের সাথে।" },
  { front: "What is the rhyme scheme of a Shakespearean sonnet?", back: "ABAB CDCD EFEF GG", bn: "ABAB CDCD EFEF GG" },
  { front: "What does the final couplet claim?", back: "Awareness of mortality makes love stronger.", bn: "মরণশীলতার উপলব্ধি ভালোবাসাকে আরও দৃঢ় করে।" },
  { front: "What do ‘ashes of his youth’ represent?", back: "The remains of youth already spent.", bn: "ইতিমধ্যে ক্ষয়প্রাপ্ত যৌবনের অবশেষ।" },
  { front: "What is ‘Death's second self’?", back: "Sleep (which resembles death).", bn: "ঘুম (যা মৃত্যুর মতো)।" },
  { front: "What does ‘Consum'd with that which it was nourish'd by’ mean?", back: "Life is destroyed by the same force that once fed it (paradox).", bn: "জীবন সেই শক্তি দ্বারা ধ্বংস হয় যা একসময় তাকে পুষ্ট করেছিল।" },
  { front: "How many lines in Sonnet 73?", back: "14 lines (3 quatrains + couplet).", bn: "১৪ লাইন (৩টি কোয়াট্রেন + কপলেট)।" },
  { front: "Who is the ‘Bard of Avon’?", back: "William Shakespeare.", bn: "উইলিয়াম শেক্সপিয়ার।" },
  { front: "What does ‘behold’ mean?", back: "To see or observe.", bn: "দেখা বা লক্ষ্য করা।" },
  { front: "What is a volta?", back: "The turn in thought, often near the couplet in a Shakespearean sonnet.", bn: "চিন্তার মোড়, শেক্সপিয়রীয় সনেটে প্রায়শই কপলেটের কাছে।" },
  { front: "What does ‘ere long’ mean?", back: "Before long; soon.", bn: "শীঘ্রই / অচিরেই।" },
  { front: "Main themes of Sonnet 73?", back: "Old age, time, mortality, and love intensified by awareness of loss.", bn: "বার্ধক্য, সময়, মরণশীলতা এবং ক্ষতির চেতনায় তীব্র ভালোবাসা।" },
  { front: "What does the fire lie upon?", back: "The ashes of its own youth.", bn: "তার নিজের যৌবনের ছাইয়ের উপর।" }
];

const EXAM_QS = {
  veryShort: [
    { q: "Who is the poet of Sonnet 73?", a: "William Shakespeare.", bn: "উইলিয়াম শেক্সপিয়ার।" },
    { q: "How many lines are there in Sonnet 73?", a: "Fourteen lines.", bn: "চৌদ্দটি লাইন।" },
    { q: "What is the rhyme scheme of the sonnet?", a: "ABAB CDCD EFEF GG.", bn: "ABAB CDCD EFEF GG।" },
    { q: "Name the three central metaphors.", a: "Autumn, twilight, and the dying fire.", bn: "শরৎ, গোধূলি এবং নিভে আসা আগুন।" },
    { q: "What does ‘twilight’ stand for?", a: "The late stage of life approaching death.", bn: "মৃত্যুর দিকে এগিয়ে যাওয়া জীবনের শেষ পর্যায়।" }
  ],
  short: [
    { q: "How does Shakespeare compare old age to autumn?", a: "He compares the speaker’s old age to late autumn when yellow leaves, or few, or none, hang on boughs that shake against the cold. The bare branches are like ruined choirs where birds once sang.", bn: "কবি বার্ধক্যকে শরতের সাথে তুলনা করেছেন—যখন হলুদ পাতা ঠান্ডায় কাঁপা ডালে ঝোলে। পাতাহীন ডাল যেন ধ্বংসপ্রাপ্ত গায়কদল।" },
    { q: "Explain the significance of twilight in Sonnet 73.", a: "Twilight represents the transitional stage between the full day of life and the black night of death. After sunset the light fades and is taken by night, called Death’s second self.", bn: "গোধূলি জীবনের পূর্ণ দিন ও মৃত্যুর কালো রাতের মধ্যবর্তী পর্যায়। রাতকে মৃত্যুর দ্বিতীয় রূপ বলা হয়েছে।" },
    { q: "Explain the metaphor of the dying fire.", a: "Life is compared to a fire that still glows but lies on the ashes of its youth. The ashes form a death-bed on which the fire must expire. The fire is consumed by what once nourished it—a paradox.", bn: "জীবনকে এমন আগুনের সাথে তুলনা করা হয়েছে যা যৌবনের ছাইয়ের উপর জ্বলছে এবং নিভে যাবে। বিরোধাভাস: যা পুষ্ট করেছিল তাই ক্ষয় করে।" },
    { q: "How does awareness of death strengthen love?", a: "According to the final couplet, when the beloved perceives the speaker’s mortality, love becomes stronger. The knowledge that separation is near urges the beloved to love deeply while time remains.", bn: "শেষ কপলেট অনুসারে, প্রিয়জন যখন কবির মরণশীলতা উপলব্ধি করে, ভালোবাসা আরও দৃঢ় হয়।" }
  ],
  broad: [
    { q: "Discuss the three central metaphors in Sonnet 73.", a: "Sonnet 73 is built on three extended metaphors.\n\nFirst, the speaker compares himself to late autumn: yellow leaves hang on boughs that shake against the cold; the branches are ‘bare ruin'd choirs’ where birds once sang.\n\nSecond, he compares himself to the twilight of a day that fades after sunset and is taken by black night—Death’s second self.\n\nThird, life is a fire still glowing but lying on the ashes of its youth, as on a death-bed where it must expire, consumed by what once nourished it.\n\nTogether the metaphors move from seasonal decline to the end of day to the extinction of fire, preparing the couplet’s claim that such awareness strengthens love.", bn: "সনেট ৭৩ তিনটি বিস্তৃত রূপকের উপর নির্মিত: শরৎ, গোধূলি ও নিভে আসা আগুন। তিনটি রূপক মৃত্যুর কাছাকাছি নিয়ে যায় এবং শেষে ভালোবাসার তীব্রতাকে প্রস্তুত করে।" },
    { q: "Discuss Sonnet 73 as a poem about aging and love.", a: "Sonnet 73 is simultaneously a meditation on aging and an argument about love. The first twelve lines present aging through natural imagery. Yet the poem does not end in despair. The couplet turns on perception: awareness of mortality becomes the reason for deeper love. Aging and the prospect of separation intensify the need to love well while time remains.", bn: "সনেট ৭৩ একই সাথে বার্ধক্যের ধ্যান এবং ভালোবাসার যুক্তি। কবিতা হতাশায় শেষ হয় না। মরণশীলতার চেতনা গভীর ভালোবাসার কারণ হয়ে ওঠে।" }
  ]
};

const POET = {
  name: "William Shakespeare",
  years: "1564–1616",
  knownAs: "Bard of Avon",
  summary: "English playwright, poet and actor, widely regarded as the greatest writer in the English language.",
  bnSummary: "ইংরেজি নাট্যকার, কবি ও অভিনেতা, ইংরেজি ভাষার সর্বশ্রেষ্ঠ লেখক হিসেবে ব্যাপকভাবে স্বীকৃত।",
  facts: [
    { label: "Born", value: "1564, Stratford-upon-Avon" },
    { label: "Died", value: "1616" },
    { label: "Known as", value: "Bard of Avon" },
    { label: "Sonnets", value: "154" },
    { label: "Plays", value: "About 39" },
    { label: "Profession", value: "Poet, playwright, actor" }
  ],
  timeline: [
    { year: "1564", event: "Born in Stratford-upon-Avon" },
    { year: "1582", event: "Married Anne Hathaway" },
    { year: "c.1590–1613", event: "Career in London as actor, playwright, shareholder" },
    { year: "c.1593–1603", event: "Sonnets composed (published 1609)" },
    { year: "1599", event: "Globe Theatre built" },
    { year: "1616", event: "Died in Stratford" }
  ],
  works: "Major plays include Hamlet, King Lear, Macbeth, Othello, Romeo and Juliet. He also wrote two long narrative poems and 154 sonnets."
};

const ABOUT_SONNET = {
  what: "A sonnet is a 14-line poem, traditionally written in iambic pentameter, that explores a single idea or emotion, often with a turn (volta) in thought.",
  bnWhat: "সনেট হল ১৪ লাইনের কবিতা, সাধারণত আইয়্যাম্বিক পেন্টামিটারে লেখা, যা একটি মাত্র ভাব বা আবেগ অন্বেষণ করে।",
  structure: {
    lines: 14,
    form: "Three quatrains (4 lines each) + final couplet (2 lines)",
    rhyme: "ABAB CDCD EFEF GG",
    meter: "Iambic pentameter",
    volta: "Often in or just before the couplet; in Sonnet 73 the turn is toward the effect of perceived mortality on love."
  },
  argument: "The speaker asks the beloved to observe in him the signs of late life. This awareness, far from weakening love, makes it stronger."
};

const SECTIONS = [
  "home", "poet", "about", "poem", "vocab", "bangla", "analysis",
  "devices", "themes", "background", "critical", "exam", "quiz", "revision", "progress"
];
