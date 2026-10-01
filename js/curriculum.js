/*
  Curriculum data.
  Every lesson id is used for progress tracking and for attaching a video in js/videos.js.
  Lesson content is a teaching summary based on Nur al-Idah (al-Shurunbulali) and
  Mukhtasar al-Quduri, following the relied-upon positions of the Hanafi school.
  It must be reviewed by your qualified teacher(s) before launch.
*/
window.TRACKS = [
  {
    id: "start",
    name: "Start Here",
    level: "Level 0",
    blurb: "A short orientation: what fiqh is, who Imam Abu Hanifah was, and how to study without getting lost."
  },
  {
    id: "nur",
    name: "Nur al-Idah Path",
    level: "Level 1",
    blurb: "The essentials of worship from Nur al-Idah. Everything you need to pray, fast and stay pure correctly."
  },
  {
    id: "quduri",
    name: "Quduri Path",
    level: "Level 2 to 3",
    blurb: "Mukhtasar al-Quduri, the classic Hanafi primer. Worship in more depth, then family, money and everyday life."
  }
];

window.TEXTS = {
  nur: {
    title: "Nur al-Idah",
    ar: "نور الإيضاح ونجاة الأرواح",
    author: "Imam Hasan ibn Ammar al-Shurunbulali (d. 1069 AH)",
    about: "A concise Hanafi handbook on worship, written in Egypt and taught as a first fiqh text for centuries. It covers purification, prayer, funerals, fasting, zakat and pilgrimage."
  },
  quduri: {
    title: "Mukhtasar al-Quduri",
    ar: "مختصر القدوري",
    author: "Imam Abu al-Husayn Ahmad al-Quduri (d. 428 AH)",
    about: "One of the most studied Hanafi texts in history and the base of al-Hidayah. It covers the whole of fiqh, from worship to trade, marriage, food and judgment."
  }
};

window.COURSES = [
  /* ---------------- START HERE ---------------- */
  {
    id: "start-fiqh",
    track: "start",
    level: "Level 0",
    title: "Foundations: How to Learn Fiqh",
    ar: "مدخل إلى الفقه",
    text: null,
    blurb: "Start here. What fiqh is, why we follow a madhab, who Imam Abu Hanifah was, and the vocabulary of rulings you'll hear in every lesson.",
    outcomes: [
      "Explain what fiqh is and where it comes from",
      "Understand why Muslims follow a school of law",
      "Know the Hanafi scale of rulings: fard, wajib, sunnah, makruh and more",
      "Have a realistic study plan that fits around work or uni"
    ],
    modules: [
      {
        title: "Orientation",
        ar: "تمهيد",
        lessons: [
          {
            id: "start-01",
            title: "What is fiqh, and why should I learn it?",
            ar: "ما هو الفقه",
            mins: 15,
            summary: "Fiqh is the understanding of practical rulings of the Shariah from their detailed evidences. Some knowledge is personally obligatory on every Muslim: enough to pray, fast and live correctly. This course gives you that.",
            points: [
              "Fard al-ayn: knowledge every adult Muslim must have, such as how to perform wudu and pray.",
              "Fard al-kifayah: knowledge the community needs some people to have, such as detailed inheritance law.",
              "Fiqh is drawn from the Quran, the Sunnah, scholarly consensus (ijma) and analogy (qiyas).",
              "Learning fiqh is worship in itself when done with a sincere intention."
            ],
            terms: [
              ["Fiqh", "فقه", "Deep understanding of the practical rulings of the religion."],
              ["Shariah", "شريعة", "The sacred law revealed by Allah through the Prophet ﷺ."]
            ]
          },
          {
            id: "start-02",
            title: "Madhabs and Imam Abu Hanifah",
            ar: "المذاهب والإمام أبو حنيفة",
            mins: 18,
            summary: "A madhab is a school of interpretation built by expert scholars. The Hanafi school, founded on the method of Imam Abu Hanifah al-Nu'man ibn Thabit (d. 150 AH) in Kufa, is followed by a large share of Muslims worldwide, including most British Muslims of South Asian and Turkish heritage.",
            points: [
              "The four Sunni schools (Hanafi, Maliki, Shafi'i, Hanbali) are all valid paths to following the Quran and Sunnah.",
              "Following a school protects ordinary believers from picking and choosing opinions to suit their desires.",
              "Imam Abu Hanifah's main students Abu Yusuf and Muhammad al-Shaybani recorded and developed his school.",
              "Later scholars sorted the school's opinions into a 'relied-upon' (mu'tamad) position for fatwa. That is what we teach here."
            ],
            terms: [
              ["Madhab", "مذهب", "A school of legal interpretation."],
              ["Mu'tamad", "معتمد", "The relied-upon position within a school, used for fatwa."]
            ]
          },
          {
            id: "start-03",
            title: "The scale of rulings",
            ar: "الأحكام التكليفية",
            mins: 20,
            summary: "Every action falls somewhere on a scale. The Hanafi school is distinct in separating fard from wajib, and in splitting makruh into two levels. Knowing this scale makes every later lesson click.",
            points: [
              "Fard: established by decisive proof. Leaving it is sinful; denying it is disbelief.",
              "Wajib: established by proof that is strong but not decisive. Leaving it is sinful, like the witr prayer.",
              "Sunnah mu'akkadah: the Prophet ﷺ did it consistently. Habitually leaving it is blameworthy.",
              "Makruh tahrimi is close to haram and sinful; makruh tanzihi is merely better avoided."
            ],
            terms: [
              ["Wajib", "واجب", "Necessary; slightly below fard in the strength of its proof."],
              ["Makruh tahrimi", "مكروه تحريمي", "Prohibitively disliked; sinful to do."]
            ]
          },
          {
            id: "start-04",
            title: "How to study: texts, teachers and habits",
            ar: "آداب طلب العلم",
            mins: 12,
            summary: "Traditional learning moves from short texts to longer ones, always with a teacher. We start with Nur al-Idah for worship and then move to Mukhtasar al-Quduri. Small, consistent sessions beat occasional binges.",
            points: [
              "A matn is a short core text; scholars write commentaries (sharh) that explain it.",
              "Ask questions to qualified teachers, not random comment sections.",
              "Aim for 20 to 30 minutes a day: one lesson, one revision, one action.",
              "Act on what you learn. Knowledge without practice doesn't stay."
            ],
            terms: [
              ["Matn", "متن", "A concise core text designed to be memorised and explained."],
              ["Sharh", "شرح", "A commentary that explains a matn."]
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- NUR AL-IDAH ---------------- */
  {
    id: "nur-taharah",
    track: "nur",
    level: "Level 1",
    title: "Purification (Taharah)",
    ar: "كتاب الطهارة",
    text: "nur",
    blurb: "Water, wudu, ghusl, tayammum, wiping over socks, and keeping clean from impurity. Prayer is not valid without these, so we start here.",
    outcomes: [
      "Perform wudu and ghusl correctly, knowing what is obligatory and what is sunnah",
      "Know exactly what breaks wudu in the Hanafi school",
      "Understand tayammum and wiping over leather socks (khuffs)",
      "Know the rulings of menstruation and how to deal with impurity on clothes"
    ],
    modules: [
      {
        title: "Water and cleanliness",
        ar: "المياه والاستنجاء",
        lessons: [
          {
            id: "nur-tah-01",
            title: "Types of water",
            ar: "باب المياه",
            mins: 15,
            summary: "Not all water can be used for wudu. Nur al-Idah opens by sorting water into what is pure and purifying, what is pure but not purifying, and what is impure.",
            points: [
              "Plain water (rain, sea, river, well, tap, melted snow) is pure and purifying.",
              "Water already used for wudu or ghusl (musta'mal) is pure but cannot purify again.",
              "Water mixed with something that takes away its name, like tea or juice, cannot be used for wudu.",
              "A small amount of still water becomes impure if impurity falls into it; a large body does not unless its properties change."
            ],
            terms: [
              ["Ma' mutlaq", "ماء مطلق", "Unrestricted, plain water. Pure and purifying."],
              ["Ma' musta'mal", "ماء مستعمل", "Used water. Pure but not purifying."]
            ]
          },
          {
            id: "nur-tah-02",
            title: "Istinja and toilet etiquette",
            ar: "فصل في الاستنجاء",
            mins: 12,
            summary: "Cleaning yourself after using the toilet is a sunnah, and it becomes obligatory if impurity spreads beyond the exit by more than the excused amount.",
            points: [
              "Use water, or water after tissue. Water is better.",
              "Use the left hand. Don't face or turn your back to the qiblah when relieving yourself.",
              "Enter with the left foot and leave with the right, reciting the known supplications.",
              "Don't talk unnecessarily, and don't take anything with Allah's name on it inside."
            ],
            terms: [
              ["Istinja", "استنجاء", "Cleaning the private parts after relieving oneself."]
            ]
          }
        ]
      },
      {
        title: "Wudu",
        ar: "الوضوء",
        lessons: [
          {
            id: "nur-tah-03",
            title: "Wudu: the four obligatory acts",
            ar: "فرائض الوضوء",
            mins: 18,
            summary: "In the Hanafi school wudu has four fard acts, taken directly from Surah al-Ma'idah 5:6. Miss one and the wudu is not valid.",
            points: [
              "Wash the whole face once: from hairline to below the chin, and ear to ear.",
              "Wash both arms once, including the elbows.",
              "Wipe at least a quarter of the head with a wet hand.",
              "Wash both feet once, including the ankles."
            ],
            terms: [
              ["Wudu", "وضوء", "Ritual washing required for prayer."],
              ["Fard", "فرض", "Obligatory by decisive proof."]
            ]
          },
          {
            id: "nur-tah-04",
            title: "Sunnahs and manners of wudu",
            ar: "سنن الوضوء وآدابه",
            mins: 16,
            summary: "The sunnahs turn a valid wudu into a complete one. Some things other schools treat as obligatory, such as intention and order, are sunnah in the Hanafi school.",
            points: [
              "Make intention, say Bismillah, and wash the hands to the wrists first.",
              "Use a miswak, rinse the mouth three times and the nose three times.",
              "Wipe the whole head once and the ears; run wet fingers through the beard, fingers and toes.",
              "Wash each limb three times, in order, without long pauses between limbs."
            ]
          },
          {
            id: "nur-tah-05",
            title: "What breaks wudu",
            ar: "نواقض الوضوء",
            mins: 15,
            summary: "Knowing what breaks wudu, and what doesn't, removes a lot of anxiety. Some common beliefs are not the Hanafi position.",
            points: [
              "Anything leaving the front or back passage, including wind.",
              "Blood or pus that flows beyond the wound's surface; vomit that fills the mouth.",
              "Sleeping lying down or leaning on something so that you'd fall if it were removed; fainting.",
              "Laughing out loud in a prayer that has ruku and sujud breaks both the prayer and the wudu.",
              "Touching your private parts or touching the opposite gender does not break wudu in the Hanafi school."
            ]
          }
        ]
      },
      {
        title: "Ghusl, tayammum and socks",
        ar: "الغسل والتيمم والمسح على الخفين",
        lessons: [
          {
            id: "nur-tah-06",
            title: "Ghusl: when and how",
            ar: "باب الغسل",
            mins: 18,
            summary: "Ghusl is a full ritual bath. It is required after sexual intercourse or ejaculation with desire, and at the end of menstruation and post-natal bleeding.",
            points: [
              "Three fard acts: rinse the whole mouth, rinse the nose up to the soft bone, and wash the entire body.",
              "Not a single hair's width of skin may be left dry; check navel, ears and under rings.",
              "Sunnah method: wash hands and private parts, remove any impurity, make wudu, then pour water three times over the body.",
              "Ghusl is sunnah for Jumu'ah, the two Eids, ihram and standing at Arafah."
            ],
            terms: [
              ["Janabah", "جنابة", "Major ritual impurity that requires ghusl."]
            ]
          },
          {
            id: "nur-tah-07",
            title: "Tayammum: dry purification",
            ar: "باب التيمم",
            mins: 15,
            summary: "When water can't be found within about a mile, or using it would cause harm, tayammum replaces both wudu and ghusl.",
            points: [
              "Intention is fard in tayammum, unlike wudu.",
              "Strike the hands on pure earth or anything of the earth's kind (stone, sand, clay) and wipe the face.",
              "Strike again and wipe both arms including the elbows.",
              "Whatever breaks wudu breaks tayammum; it also ends when you become able to use water."
            ]
          },
          {
            id: "nur-tah-08",
            title: "Wiping over khuffs (leather socks)",
            ar: "باب المسح على الخفين",
            mins: 14,
            summary: "Instead of washing the feet you may wipe over khuffs that were put on after a complete wudu. Ordinary thin cotton socks don't qualify.",
            points: [
              "Valid for one day and night for a resident, three days and nights for a traveller.",
              "The period starts from the first time your wudu breaks after putting them on, not from when you wore them.",
              "Wipe the top of each khuff with wet fingers, at least three fingers' width.",
              "Thick socks only count if they meet strict conditions: you can walk in them a long distance, they stay up on their own and don't let water through."
            ],
            terms: [
              ["Khuff", "خف", "A leather sock or boot covering the ankles."]
            ]
          }
        ]
      },
      {
        title: "Women's rulings and impurity",
        ar: "الحيض والنجاسات",
        lessons: [
          {
            id: "nur-tah-09",
            title: "Menstruation, post-natal bleeding and irregular bleeding",
            ar: "باب الحيض والنفاس والاستحاضة",
            mins: 22,
            summary: "These rulings matter to everyone: sisters for practice, brothers to support their wives and daughters. The Hanafi school uses clear numbers.",
            points: [
              "Menstruation (hayd) lasts a minimum of 3 days and a maximum of 10. A clean gap between periods is at least 15 days.",
              "Post-natal bleeding (nifas) has no minimum and a maximum of 40 days.",
              "During hayd and nifas: no prayer (and no make-up of it), no fasting (fasts are made up later), no touching the mushaf, no entering the masjid, no intercourse.",
              "Bleeding outside these limits is istihadah. It does not stop prayer; she makes a fresh wudu for each prayer time."
            ],
            terms: [
              ["Hayd", "حيض", "Menstruation."],
              ["Istihadah", "استحاضة", "Irregular or dysfunctional bleeding outside the limits of hayd."]
            ]
          },
          {
            id: "nur-tah-10",
            title: "Impurities and how to clean them",
            ar: "باب الأنجاس والطهارة عنها",
            mins: 16,
            summary: "Impurity (najasah) on the body, clothes or place of prayer must be removed. The school divides it into heavy and light, each with an excused amount.",
            points: [
              "Heavy impurity includes urine of humans, faeces, blood that flows, and alcohol. The excused amount is the size of a dirham (roughly the inner palm).",
              "Light impurity includes urine of animals whose meat is eaten. Less than a quarter of the garment or limb is excused.",
              "Wash visible impurity until it is gone; wash invisible impurity three times, wringing each time if possible.",
              "Excused does not mean ideal: remove it when you can."
            ],
            terms: [
              ["Najasah", "نجاسة", "Physical ritual impurity."]
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nur-salah",
    track: "nur",
    level: "Level 1",
    title: "Prayer (Salah)",
    ar: "كتاب الصلاة",
    text: "nur",
    blurb: "Times, conditions, integrals, wajibat and sunnahs of prayer, step by step. Then witr, forgetfulness, travel, Jumu'ah and making up missed prayers.",
    outcomes: [
      "Pray every prayer correctly according to the Hanafi school",
      "Know the difference between what invalidates a prayer and what only reduces it",
      "Perform the prostration of forgetfulness (sajdat al-sahw)",
      "Shorten prayers when travelling and make up missed prayers"
    ],
    modules: [
      {
        title: "Before you pray",
        ar: "قبل الصلاة",
        lessons: [
          {
            id: "nur-sal-01",
            title: "Prayer times",
            ar: "كتاب الصلاة: الأوقات",
            mins: 18,
            summary: "Each prayer has a window. The Hanafi school has a distinct Asr time, which is why UK timetables often show two Asr times.",
            points: [
              "Fajr: from true dawn until sunrise.",
              "Zuhr: from when the sun passes its zenith until an object's shadow is twice its length (plus its zenith shadow). Asr starts then.",
              "Asr: until sunset. Delaying it until the sun turns yellow is disliked.",
              "Maghrib: from sunset until the twilight disappears. Isha: from then until true dawn. Witr is prayed after Isha.",
              "No prayer at sunrise, when the sun is at its zenith, or at sunset."
            ]
          },
          {
            id: "nur-sal-02",
            title: "Adhan and iqamah",
            ar: "باب الأذان",
            mins: 10,
            summary: "The adhan is an emphasised sunnah for the five daily prayers and Jumu'ah, and the iqamah is called just before the prayer begins.",
            points: [
              "Words are said slowly in the adhan and faster in the iqamah.",
              "In Fajr, 'As-salatu khayrun min an-nawm' is added after 'Hayya ala al-falah'.",
              "Those who hear it repeat the words and say the supplication after it.",
              "Someone praying alone at home may rely on the local masjid's adhan, though calling it is better."
            ]
          },
          {
            id: "nur-sal-03",
            title: "Conditions of prayer",
            ar: "باب شروط الصلاة وأركانها",
            mins: 18,
            summary: "Conditions must be in place before and throughout the prayer. If one is missing, the prayer never starts.",
            points: [
              "Purity from minor and major ritual impurity (wudu or ghusl).",
              "Purity of body, clothes and place of prayer from physical impurity.",
              "Covering the awrah: for men from navel to knee (the knee included); for women the whole body except face, hands and feet.",
              "Facing the qiblah, the prayer time having entered, intention, and the opening takbir."
            ],
            terms: [
              ["Awrah", "عورة", "The parts of the body that must be covered."],
              ["Qiblah", "قبلة", "The direction of the Ka'bah in Makkah."]
            ]
          }
        ]
      },
      {
        title: "Inside the prayer",
        ar: "صفة الصلاة",
        lessons: [
          {
            id: "nur-sal-04",
            title: "The integrals (arkan)",
            ar: "أركان الصلاة",
            mins: 15,
            summary: "The integrals are the pillars of the prayer itself. Missing one, even by mistake, means the prayer must be repeated.",
            points: [
              "Standing, for anyone able to stand in a fard prayer.",
              "Recitation of at least one verse of the Quran.",
              "Bowing (ruku) and the two prostrations (sujud) in every rak'ah.",
              "The final sitting for the length of the tashahhud."
            ]
          },
          {
            id: "nur-sal-05",
            title: "The necessary acts (wajibat)",
            ar: "واجبات الصلاة",
            mins: 18,
            summary: "Wajibat sit between integrals and sunnahs. Leaving one by mistake is fixed with sajdat al-sahw; leaving one on purpose means the prayer must be repeated.",
            points: [
              "Reciting al-Fatihah in every rak'ah, and adding a surah or three short verses in the first two rak'ahs of fard prayers.",
              "Calmness (tuma'ninah) in ruku, sujud and the positions between them.",
              "The first sitting in a three or four rak'ah prayer, and reciting the tashahhud in both sittings.",
              "Ending with the word 'as-salam', the qunut in witr, and reciting aloud or quietly in the right prayers."
            ]
          },
          {
            id: "nur-sal-06",
            title: "How to pray, step by step",
            ar: "صفة الصلاة",
            mins: 25,
            summary: "We walk through a complete two rak'ah prayer as the Hanafi school describes it, with the sunnahs in place.",
            points: [
              "Raise hands to the ears (men) or shoulders (women) and say 'Allahu akbar'. Place right hand over left below the navel (men) or on the chest (women).",
              "Recite the opening du'a (thana), ta'awwudh, Bismillah, al-Fatihah, then a surah.",
              "Ruku with a straight back, 'Subhana Rabbiyal Azim' three times; rise, then sujud with 'Subhana Rabbiyal A'la' three times.",
              "Sit for the tashahhud, salawat on the Prophet ﷺ and a du'a, then give salam to the right and left."
            ]
          },
          {
            id: "nur-sal-07",
            title: "What breaks the prayer and what is disliked",
            ar: "باب ما يفسد الصلاة وما يكره فيها",
            mins: 18,
            summary: "Some actions end the prayer completely. Others leave it valid but reduce its reward.",
            points: [
              "Talking, even a little or by mistake, breaks the prayer.",
              "Eating or drinking, excessive movement that would make an onlooker think you're not praying, and turning the chest away from the qiblah.",
              "Disliked: fidgeting with clothes or body, looking around, cracking knuckles, praying while needing the toilet.",
              "Praying with food served that you're craving, or in front of an image, is also disliked."
            ]
          }
        ]
      },
      {
        title: "Special prayers and situations",
        ar: "صلوات وأحوال خاصة",
        lessons: [
          {
            id: "nur-sal-08",
            title: "Witr and the sunnah prayers",
            ar: "باب الوتر والنوافل",
            mins: 16,
            summary: "Witr is wajib in the Hanafi school: three rak'ahs with one salam, and a qunut du'a in the third before ruku.",
            points: [
              "Pray witr after Isha. If you trust yourself to wake, the end of the night is better.",
              "Emphasised sunnahs: 2 before Fajr, 4 before and 2 after Zuhr, 2 after Maghrib, 2 after Isha, 4 before and 4 after Jumu'ah.",
              "The 2 before Fajr are the most emphasised of all.",
              "Tarawih in Ramadan is an emphasised sunnah of 20 rak'ahs."
            ]
          },
          {
            id: "nur-sal-09",
            title: "Prostration of forgetfulness",
            ar: "باب سجود السهو",
            mins: 15,
            summary: "Sajdat al-sahw repairs a prayer when you forget a wajib, delay an integral or wajib, or add something extra by mistake.",
            points: [
              "After the final tashahhud, give one salam to the right.",
              "Make two prostrations, then sit and recite the tashahhud, salawat and du'a again.",
              "End with salam to both sides.",
              "Doubt about how many rak'ahs you prayed: if this rarely happens to you, restart. If it happens often, go with your strongest assumption, and if you have none, take the lower number."
            ]
          },
          {
            id: "nur-sal-10",
            title: "Congregation and the imam",
            ar: "باب الإمامة",
            mins: 15,
            summary: "Praying in congregation is an emphasised sunnah for men, close to wajib. Who should lead and how to follow are covered in Nur al-Idah.",
            points: [
              "The most knowledgeable in the rulings of prayer leads, then the best reciter, then the most pious.",
              "A follower who joins late (masbuq) completes the missed rak'ahs after the imam's salam.",
              "Followers do not recite behind the imam in the Hanafi school.",
              "Rows should be straight and gaps filled."
            ]
          },
          {
            id: "nur-sal-11",
            title: "Travel prayer",
            ar: "باب صلاة المسافر",
            mins: 15,
            summary: "Shortening is not just allowed for a traveller in the Hanafi school: it is wajib to pray four rak'ah fard prayers as two.",
            points: [
              "You become a traveller when you leave your town intending a journey of about 48 miles (around 77 km; some contemporary scholars say up to 55 miles).",
              "Zuhr, Asr and Isha become 2 rak'ahs. Fajr and Maghrib stay as they are.",
              "You remain a traveller until you intend to stay 15 days or more in one place.",
              "Combining two prayers in one time is not permitted in the Hanafi school, except at Arafah and Muzdalifah during Hajj."
            ]
          },
          {
            id: "nur-sal-12",
            title: "Jumu'ah and Eid",
            ar: "باب الجمعة والعيدين",
            mins: 18,
            summary: "Jumu'ah is fard on adult, resident, healthy men and replaces Zuhr. Eid prayers are wajib.",
            points: [
              "Jumu'ah requires the khutbah, the prayer time of Zuhr, a congregation and a town setting.",
              "Listen silently to the khutbah; even saying 'be quiet' to someone else is not allowed.",
              "Eid prayer is two rak'ahs with three extra takbirs in each, followed by the khutbah.",
              "Jumu'ah is not obligatory on women, travellers or the sick. If they do pray it, it counts in place of Zuhr."
            ]
          },
          {
            id: "nur-sal-13",
            title: "Missed prayers and the prayer of the sick",
            ar: "باب قضاء الفوائت وصلاة المريض",
            mins: 18,
            summary: "Every missed fard and witr prayer must be made up. Illness changes the form of prayer, not its obligation.",
            points: [
              "Make up missed prayers as soon as reasonably possible; there is no expiry.",
              "If you have fewer than six missed prayers, pray them in order before the current prayer.",
              "If you can't stand, sit; if you can't sit, lie down and pray with head movements, sujud lower than ruku.",
              "If you can't even move your head, the prayer is postponed and made up when able."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "nur-ibadat",
    track: "nur",
    level: "Level 1",
    title: "Funerals, Fasting, Zakat and Hajj",
    ar: "الجنائز والصوم والزكاة والحج",
    text: "nur",
    blurb: "The remaining chapters of Nur al-Idah: caring for the dying and the dead, Ramadan, giving zakat and the pilgrimage.",
    outcomes: [
      "Know what to do when a Muslim passes away and how to pray Janazah",
      "Fast Ramadan correctly and know the difference between qada and kaffarah",
      "Work out whether zakat is due and who can receive it",
      "Understand the core structure of Hajj and Umrah"
    ],
    modules: [
      {
        title: "Funerals",
        ar: "الجنائز",
        lessons: [
          {
            id: "nur-iba-01",
            title: "Janazah: washing, shrouding and prayer",
            ar: "باب الجنائز",
            mins: 22,
            summary: "Washing, shrouding, praying over and burying a Muslim is a communal obligation (fard kifayah). If no one does it, the whole community is sinful.",
            points: [
              "Encourage the dying person to say the shahadah by saying it near them, without pressuring them.",
              "The body is washed an odd number of times; men are shrouded in three pieces of cloth, women in five.",
              "The Janazah prayer has four takbirs: thana, salawat, du'a for the deceased, then salam. No ruku or sujud.",
              "Burial should be prompt, facing the qiblah, and in the earth."
            ]
          }
        ]
      },
      {
        title: "Fasting",
        ar: "الصوم",
        lessons: [
          {
            id: "nur-iba-02",
            title: "Fasting Ramadan",
            ar: "كتاب الصوم",
            mins: 20,
            summary: "Fasting Ramadan is fard on every sane, adult Muslim. The fast runs from true dawn to sunset with an intention.",
            points: [
              "For a Ramadan fast, the intention can be made any time from the night before until before the midpoint of the day.",
              "Eating or drinking forgetfully does not break the fast. Continue fasting.",
              "Travellers, the ill, and pregnant or breastfeeding women who fear harm may break the fast and make it up later.",
              "Those permanently unable to fast, like the very elderly, pay a fidyah for each day instead."
            ]
          },
          {
            id: "nur-iba-03",
            title: "Breaking the fast: qada and kaffarah",
            ar: "باب ما يفسد الصوم",
            mins: 18,
            summary: "Some things only need a make-up day (qada). Deliberately breaking a Ramadan fast with no excuse through eating, drinking or intercourse also requires an expiation (kaffarah).",
            points: [
              "Kaffarah: fast 60 consecutive days; if unable, feed 60 poor people.",
              "Qada only: vomiting a mouthful on purpose, swallowing something non-nourishing, or eating thinking it was still night when it was dawn.",
              "Not breaking: injections, eye drops, bathing, unintended vomit, and a wet dream.",
              "Disliked while fasting: tasting food without need, and chewing gum."
            ],
            terms: [
              ["Qada", "قضاء", "Making up a missed act of worship."],
              ["Kaffarah", "كفارة", "An expiation for a specific violation."]
            ]
          },
          {
            id: "nur-iba-04",
            title: "I'tikaf and Laylat al-Qadr",
            ar: "باب الاعتكاف",
            mins: 12,
            summary: "I'tikaf is staying in the masjid with intention. In the last ten days of Ramadan it is an emphasised sunnah on the community.",
            points: [
              "Men make i'tikaf in a masjid where congregational prayers are held.",
              "Women make i'tikaf in a designated prayer space at home.",
              "You only leave for necessities such as the toilet, ghusl that is required, or Jumu'ah.",
              "Seek Laylat al-Qadr in the odd nights of the last ten."
            ]
          }
        ]
      },
      {
        title: "Zakat and Hajj",
        ar: "الزكاة والحج",
        lessons: [
          {
            id: "nur-iba-05",
            title: "Zakat: who pays, how much, to whom",
            ar: "كتاب الزكاة",
            mins: 22,
            summary: "Zakat is fard on a free, sane, adult Muslim who owns the nisab beyond basic needs and debts for a full lunar year. The rate on wealth is 2.5%.",
            points: [
              "Zakatable wealth: gold, silver, cash, savings, and trade stock. Your home, car and personal items are not zakatable.",
              "Nisab is 87.48g of gold or 612.36g of silver. Many Hanafi scholars use the silver value for cash, as it benefits the poor.",
              "Recipients are the eight categories in Surah al-Tawbah 9:60. You can't pay it to your parents, children, spouse or the Prophet's family (Banu Hashim).",
              "Sadaqat al-Fitr is wajib on anyone owning nisab on Eid morning, paid for themselves and their young children before the Eid prayer."
            ],
            terms: [
              ["Nisab", "نصاب", "The minimum wealth that makes zakat due."],
              ["Hawl", "حول", "A full lunar year of owning the nisab."]
            ]
          },
          {
            id: "nur-iba-06",
            title: "Hajj and Umrah: the essentials",
            ar: "كتاب الحج",
            mins: 25,
            summary: "Hajj is fard once in a lifetime on a Muslim who is adult, sane, free, and able to afford the journey and support their dependants while away.",
            points: [
              "Three fard: ihram, standing at Arafah, and tawaf al-ziyarah.",
              "Wajib acts include staying at Muzdalifah, sa'i between Safa and Marwah, stoning, shaving or trimming, and the farewell tawaf. Missing one requires a sacrifice (dam).",
              "Three types: ifrad (Hajj only), tamattu' (Umrah then Hajj), qiran (both in one ihram, the best in the Hanafi school).",
              "Umrah is an emphasised sunnah: ihram, tawaf, sa'i, then shaving or trimming."
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- QUDURI ---------------- */
  {
    id: "qud-ibadat",
    track: "quduri",
    level: "Level 2",
    title: "Worship in Depth",
    ar: "العبادات في مختصر القدوري",
    text: "quduri",
    blurb: "Revisit purification, prayer, fasting and zakat through al-Quduri, now with the evidence and the differences between Abu Hanifah and his two students.",
    outcomes: [
      "Read the structure of a classical matn with confidence",
      "Explain the evidence behind key Hanafi positions in worship",
      "Understand how the school weighs the opinions of Abu Hanifah, Abu Yusuf and Muhammad",
      "Handle common real-life worship questions with less anxiety"
    ],
    modules: [
      {
        title: "Reading al-Quduri",
        ar: "منهج القدوري",
        lessons: [
          {
            id: "qud-iba-01",
            title: "Meet the text: al-Quduri and his method",
            ar: "التعريف بالمختصر",
            mins: 14,
            summary: "Imam al-Quduri wrote his Mukhtasar in Baghdad in the 5th century AH. It became the base of al-Hidayah and dozens of other works.",
            points: [
              "The text is arranged in books (kitab), chapters (bab) and sections (fasl).",
              "When al-Quduri names Abu Hanifah, Abu Yusuf or Muhammad, he's flagging a difference of opinion within the school.",
              "Usually the fatwa follows Abu Hanifah, but not always; later scholars specify where.",
              "We read selected passages in English with the Arabic alongside."
            ]
          },
          {
            id: "qud-iba-02",
            title: "Purification and prayer: the evidence",
            ar: "أدلة الطهارة والصلاة",
            mins: 22,
            summary: "Why is witr wajib? Why don't followers recite behind the imam? Why is intention sunnah in wudu? We trace the reasoning back to Quran and hadith.",
            points: [
              "Wudu: the fard acts are only what the verse in al-Ma'idah names; intention and order come from the Sunnah, so they're sunnah.",
              "Recitation behind the imam: the Quran commands listening silently (7:204), and the hadith 'whoever has an imam, the imam's recitation is his recitation'.",
              "Witr: the Prophet ﷺ commanded it and never left it, which raises it above sunnah.",
              "Seeing this method helps you respect other schools that read the same evidence differently."
            ]
          }
        ]
      },
      {
        title: "Fasting and zakat in practice",
        ar: "الصوم والزكاة",
        lessons: [
          {
            id: "qud-iba-03",
            title: "Zakat in modern life",
            ar: "الزكاة في الواقع المعاصر",
            mins: 24,
            summary: "Applying al-Quduri's zakat chapter to salaries, savings accounts, shares, pensions and student debt. Classical principles, modern assets.",
            points: [
              "Pick a fixed zakat date: the anniversary of when you first owned the nisab.",
              "Count cash, savings, gold and silver, and trade goods on that date.",
              "Shares held for trade are zakatable at market value; shares held for dividends need specialist guidance.",
              "Pensions and long-term debts are disputed areas. We set out the principles and you ask your teacher for your case."
            ]
          },
          {
            id: "qud-iba-04",
            title: "Udhiyah (Qurbani)",
            ar: "كتاب الأضحية",
            mins: 15,
            summary: "In the Hanafi school udhiyah is wajib on every free, resident Muslim who owns the nisab during the days of sacrifice.",
            points: [
              "Days: 10th, 11th and 12th of Dhul Hijjah, after the Eid prayer.",
              "A sheep or goat counts for one person; a cow or camel can be shared by seven.",
              "The animal must reach a minimum age and be free from major defects.",
              "It is recommended to divide the meat into thirds: family, relatives and friends, and the poor."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "qud-family",
    track: "quduri",
    level: "Level 3",
    title: "Marriage and Family",
    ar: "كتاب النكاح والطلاق",
    text: "quduri",
    blurb: "Marriage contracts, mahr, rights and maintenance, divorce, iddah and custody. Essential before and after you get married.",
    outcomes: [
      "Know what makes a nikah valid in the Hanafi school",
      "Understand mahr, maintenance and mutual rights",
      "Know the types of divorce and their consequences",
      "Understand iddah and child custody"
    ],
    modules: [
      {
        title: "Marriage",
        ar: "النكاح",
        lessons: [
          {
            id: "qud-fam-01",
            title: "The marriage contract",
            ar: "كتاب النكاح",
            mins: 22,
            summary: "A nikah is a contract formed by offer and acceptance in front of witnesses. In the UK it's also wise to register a civil marriage to protect both spouses.",
            points: [
              "Offer and acceptance in clear wording, in the same sitting.",
              "Two witnesses: two Muslim men, or one man and two women, who hear the words.",
              "A sane adult woman can contract her own marriage in the Hanafi school; her guardian (wali) may object if the match is clearly unsuitable (kafa'ah).",
              "A Muslim man may marry a chaste Christian or Jewish woman; a Muslim woman may only marry a Muslim man."
            ],
            terms: [
              ["Wali", "ولي", "A guardian, usually the father."],
              ["Kafa'ah", "كفاءة", "Suitability or compatibility between spouses."]
            ]
          },
          {
            id: "qud-fam-02",
            title: "Mahr",
            ar: "باب المهر",
            mins: 15,
            summary: "Mahr is the wife's right, owed by the husband because of the marriage. It belongs to her alone.",
            points: [
              "The minimum mahr in the Hanafi school is ten dirhams of silver.",
              "It can be paid immediately (mu'ajjal) or deferred (muwajjal).",
              "If no mahr is named, she's owed the customary mahr of women like her in her family (mahr al-mithl).",
              "Full mahr becomes due on consummation, valid seclusion or death."
            ]
          },
          {
            id: "qud-fam-03",
            title: "Rights and maintenance",
            ar: "باب النفقة",
            mins: 18,
            summary: "The husband must provide his wife's food, clothing and housing according to their circumstances. Both spouses owe each other good treatment.",
            points: [
              "Maintenance is the husband's duty even if the wife is wealthy.",
              "She has a right to private accommodation separate from in-laws.",
              "Parents in need are maintained by their children, and young children by their father.",
              "Kindness, fairness and consultation are part of the Sunnah of marriage, not optional extras."
            ]
          }
        ]
      },
      {
        title: "Separation",
        ar: "الفرقة",
        lessons: [
          {
            id: "qud-fam-04",
            title: "Divorce (talaq)",
            ar: "كتاب الطلاق",
            mins: 22,
            summary: "Divorce is permitted but disliked. The Sunnah way is one divorce, during a clean period in which there was no intercourse.",
            points: [
              "Revocable divorce (raj'i): the husband can take her back during the iddah without a new contract.",
              "Irrevocable divorce (ba'in): a new nikah and mahr are needed to remarry.",
              "Three divorces end the marriage completely; remarriage is only possible after she genuinely marries someone else and that marriage ends.",
              "Saying three divorces at once counts as three in the Hanafi school, and is sinful. This is why learning the rules beforehand matters."
            ]
          },
          {
            id: "qud-fam-05",
            title: "Khul', iddah and custody",
            ar: "باب الخلع والعدة والحضانة",
            mins: 20,
            summary: "Khul' is a separation the wife seeks in return for compensation. Iddah is the waiting period after separation. Custody protects the child's interests.",
            points: [
              "Iddah after divorce: three menstrual cycles, or three months if she doesn't menstruate, or until birth if pregnant.",
              "Iddah of a widow: four months and ten days, or until birth if pregnant.",
              "The mother has first right of custody (hadanah), then her mother.",
              "In the UK, religious and civil divorce are separate processes; both may be needed."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "qud-trade",
    track: "quduri",
    level: "Level 3",
    title: "Trade, Money and Work",
    ar: "كتاب البيوع والمعاملات",
    text: "quduri",
    blurb: "Buying and selling, riba, renting and employment, partnerships and debt. The principles behind halal money in a UK economy.",
    outcomes: [
      "Know the conditions of a valid sale",
      "Understand what riba is in the Hanafi school",
      "Understand hire, employment and partnership contracts",
      "Ask better questions about modern financial products"
    ],
    modules: [
      {
        title: "Sales",
        ar: "البيوع",
        lessons: [
          {
            id: "qud-tra-01",
            title: "The valid sale",
            ar: "كتاب البيوع",
            mins: 20,
            summary: "A sale is valid when there's offer and acceptance between competent parties over a known item for a known price.",
            points: [
              "The item must exist, be owned by the seller and be deliverable.",
              "The price and item must be known well enough to prevent dispute.",
              "Selling something you don't yet own is generally invalid; salam (paying upfront for specified goods delivered later) is an exception with strict conditions.",
              "Options (khiyar) give a right to cancel: a stipulated option of up to three days, on first seeing the item, or for a defect."
            ],
            terms: [
              ["Khiyar", "خيار", "An option to confirm or cancel a contract."],
              ["Salam", "سلم", "Advance payment for goods delivered later."]
            ]
          },
          {
            id: "qud-tra-02",
            title: "Riba (usury and interest)",
            ar: "باب الربا",
            mins: 24,
            summary: "Riba is one of the gravest sins in the Quran. The Hanafi school identifies it through two factors: the same type of goods, and goods measured by weight or volume.",
            points: [
              "Same type and measured by weight or volume (gold for gold, wheat for wheat): must be equal and hand to hand.",
              "Only one of the two factors present: excess is allowed but delay is not.",
              "A loan with any stipulated benefit to the lender is riba.",
              "Conventional interest falls under this prohibition. For specific products like mortgages or student finance, consult a qualified scholar."
            ]
          }
        ]
      },
      {
        title: "Work and partnership",
        ar: "الإجارة والشركة",
        lessons: [
          {
            id: "qud-tra-03",
            title: "Hire and employment (ijarah)",
            ar: "كتاب الإجارة",
            mins: 18,
            summary: "Ijarah covers renting property and hiring people. The benefit, the wage and the duration or task must all be clear.",
            points: [
              "Employer and employee should agree the wage up front.",
              "A specific employee works for one employer; a general worker (like a tailor) serves many clients.",
              "Renting out something to be used for sin is not permitted.",
              "Paying wages on time is a religious duty: 'Give the worker his wage before his sweat dries.'"
            ]
          },
          {
            id: "qud-tra-04",
            title: "Partnerships and mudarabah",
            ar: "كتاب الشركة والمضاربة",
            mins: 18,
            summary: "Islamic law has detailed rules for running a business together. These are the roots of modern Islamic finance.",
            points: [
              "Sharikat al-inan: partners contribute capital and share profit as agreed; loss follows capital.",
              "Mudarabah: one side gives capital, the other works; profit is split by an agreed ratio.",
              "In mudarabah, financial loss falls on the capital provider unless the worker was negligent.",
              "Guaranteeing a fixed return on capital invalidates the partnership."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "qud-life",
    track: "quduri",
    level: "Level 3",
    title: "Food, Oaths and Everyday Life",
    ar: "الذبائح والأيمان والحظر والإباحة",
    text: "quduri",
    blurb: "Halal slaughter, oaths and vows, and the chapter on what is permitted and prohibited in dress, food and conduct.",
    outcomes: [
      "Understand the conditions of halal slaughter",
      "Know the types of oaths and how to expiate a broken one",
      "Know key rulings on dress, gold, silk and etiquette"
    ],
    modules: [
      {
        title: "Food",
        ar: "الذبائح",
        lessons: [
          {
            id: "qud-lif-01",
            title: "Halal slaughter",
            ar: "كتاب الذبائح",
            mins: 20,
            summary: "Meat of permitted animals is halal when slaughtered correctly by a Muslim or a Christian or Jew.",
            points: [
              "Cut at least three of the four: windpipe, oesophagus and the two jugular veins.",
              "Allah's name must be mentioned. Deliberately leaving it makes the meat haram; forgetting it is excused.",
              "Pig, carrion, flowing blood and predatory animals with fangs or talons are prohibited.",
              "Fish is the only sea creature permitted in the Hanafi school, and it needs no slaughter."
            ]
          }
        ]
      },
      {
        title: "Oaths and conduct",
        ar: "الأيمان والحظر والإباحة",
        lessons: [
          {
            id: "qud-lif-02",
            title: "Oaths and vows",
            ar: "كتاب الأيمان",
            mins: 18,
            summary: "An oath by Allah is binding. Know the types before you swear casually.",
            points: [
              "Laghw: a past statement you sincerely thought was true. No sin and no expiation.",
              "Ghamus: a deliberately false oath about the past. A major sin with no expiation except sincere repentance.",
              "Mun'aqidah: an oath about the future. Breaking it requires kaffarah: feed or clothe ten poor people; if unable, fast three consecutive days.",
              "A vow (nadhr) to do an act of worship must be fulfilled."
            ]
          },
          {
            id: "qud-lif-03",
            title: "Permitted and prohibited",
            ar: "كتاب الحظر والإباحة",
            mins: 18,
            summary: "Al-Quduri's chapter on everyday conduct: clothing, adornment, utensils and social etiquette.",
            points: [
              "Gold and pure silk are prohibited for men, except a small amount of silk trim. Men may wear a silver ring.",
              "Eating or drinking from gold or silver utensils is prohibited for men and women.",
              "Looking at the awrah of others is prohibited; lowering the gaze is commanded for both men and women.",
              "Returning salam is wajib; initiating it is sunnah."
            ]
          }
        ]
      }
    ]
  }
];
