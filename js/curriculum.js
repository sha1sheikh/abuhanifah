/*
  Curriculum data: one path through Nur al-Idah.
  Source: Nur al-Idah, Arabic text with English translation by Charkawi
  (commentary from Maraqi al-Falah). "ref" and "pages" are printed page numbers in that edition.
  Every lesson id is used for progress tracking and for attaching a video in js/videos.js.
  All content must be reviewed by a qualified Hanafi teacher before launch.
*/
window.TRACKS = [
  { id: "nur", name: "Nur al-Idah", level: "Books I to VI", blurb: "One path through the whole of Nur al-Idah, in the book's own order: purification, prayer, funerals, fasting, zakat and Hajj." }
];

window.TEXTS = {
  nur: {
    title: "Nur al-Idah",
    ar: "نور الإيضاح ونجاة الأرواح",
    author: "Imam Hasan ibn Ammar al-Shurunbulali",
    edition: "Arabic text with English translation by Charkawi",
    about: "A concise Hanafi handbook on worship, written in Egypt and taught as a first fiqh text for centuries. The explanation in this edition comes from Maraqi al-Falah, the author's own commentary."
  }
};

window.COURSES = [
  {
    "id": "introduction",
    "title": "Introduction to Fiqh",
    "ar": "مقدمة",
    "book": "Introduction",
    "pages": "11–25",
    "blurb": "The translator's introduction to Nur al-Idah: the scale of rulings used throughout the book, why Muslims follow qualified scholars, and the imams behind the Hanafi school. It gives you the vocabulary and background you need before studying any chapter.",
    "outcomes": [
      "Tell apart fard, wajib, the kinds of sunnah, mubah, makruh and haram.",
      "Explain what taqlid means and why a non-scholar follows a qualified jurist.",
      "Explain why scholars hold that a person should not pick and mix between schools to suit his desires.",
      "Describe Imam Abu Hanifa, his two companions and the author Hasan al-Shurunbulali."
    ],
    "modules": [
      {
        "title": "The Rulings of Fiqh",
        "ar": "الأحكام الشرعية",
        "lessons": [
          {
            "id": "int-01",
            "title": "The book, fard and wajib",
            "ar": "الفرض والواجب",
            "ref": "pp. 11–12",
            "mins": 14,
            "summary": "Nur al-Idah is a Hanafi text on the rulings of worship, from purification to hajj. The Hanafi school separates two levels of obligation: fard, proven by a decisive text, and wajib, proven by a text open to interpretation.",
            "points": [
              "Nur al-Idah is based on the teachings of Abu Hanifa and his students Muhammad, Abu Yusuf and Zufar. Its commentary, Maraqi al-Falah, is by the same author, Hasan al-Shurunbulali.",
              "In the translation the bold text is the law. Other opinions in the notes are given to teach legal reasoning and are not to be followed.",
              "Fard is established by a decisive text (dalil qat'i). Whoever does it out of obedience is rewarded, whoever leaves it without excuse deserves punishment, and whoever denies it becomes an unbeliever.",
              "Wajib is established by a firm command through a text open to interpretation (dalil dhanni), such as sadaqat al-fitr and the witr prayer. Leaving it is sinful, and denying it is corruption (fisq) but not disbelief.",
              "Leaving a fard part of prayer, such as bowing or prostration, voids the prayer. Leaving a wajib part, such as the Fatiha, leaves it valid but deficient.",
              "If a wajib part of prayer is left out by forgetting, two prostrations of forgetfulness at the end make up for it. If it is left out on purpose, the prayer must be repeated."
            ],
            "terms": [
              [
                "Mukallaf",
                "مكلف",
                "A person morally responsible before the Sacred Law."
              ],
              [
                "Fard",
                "فرض",
                "Obligatory: proven by a decisive text."
              ],
              [
                "Wajib",
                "واجب",
                "Necessary: a firm command proven by a text open to interpretation."
              ]
            ]
          },
          {
            "id": "int-02",
            "title": "Sunnah, mubah, makruh and haram",
            "ar": "السنة والمباح والمكروه والحرام",
            "ref": "pp. 13–15",
            "mins": 16,
            "summary": "Below the obligations sit the recommended acts, which come in three kinds, then the permissible, the two levels of disliked acts, and the forbidden. Each level carries its own reward or blame.",
            "points": [
              "The recommended act (mandub) has three kinds: the emphasised sunnah (sunnah mu'akkadah), the non-emphasised sunnah (nafl or mustahabb), and the sunnah of habit (sunnah zawa'id).",
              "The emphasised sunnah is what the Prophet ﷺ did most of the time in worship and rarely left, such as the adhan, iqamah and congregational prayer. Leaving it is blameworthy, and leaving it habitually is sinful.",
              "The non-emphasised sunnah is what he ﷺ did and then sometimes left, such as four rak'ahs before 'isha or fasting Mondays and Thursdays. Doing it brings reward and leaving it brings no blame. The sunnah of habit covers his dress, food and conduct, and following it out of love for him is rewarded.",
              "Abu Hanifa held that a voluntary act becomes binding once begun: a voluntary fast that is broken must be made up. A vow also turns a voluntary act into a wajib one.",
              "Mubah (also called halal) is neither requested nor forbidden. Makruh tanzihi is something we are told to leave but doing it is not sinful, such as wudu from a cat's leftover water. Makruh tahrimi is the opposite of wajib, and doing it is sinful.",
              "Haram is what the Lawgiver strictly forbids through a decisive text. Whoever does it deserves punishment, and whoever avoids it out of obedience to Allah is rewarded."
            ],
            "terms": [
              [
                "Mandub",
                "مندوب",
                "Recommended: rewarded if done, not punished if left."
              ],
              [
                "Makruh tahrimi",
                "مكروه تحريمي",
                "Prohibitively disliked: doing it is sinful."
              ],
              [
                "Makruh tanzihi",
                "مكروه تنزيهي",
                "Somewhat disliked: better left, but not sinful."
              ]
            ]
          }
        ]
      },
      {
        "title": "Following Qualified Scholarship",
        "ar": "التقليد",
        "lessons": [
          {
            "id": "int-03",
            "title": "Why we follow qualified scholars",
            "ar": "مشروعية التقليد",
            "ref": "pp. 15–19",
            "mins": 15,
            "summary": "Deriving rulings from the Quran and sunnah needs deep, specialist knowledge. For this reason the person who cannot do it follows a qualified jurist, and the book explains why this is valid.",
            "points": [
              "Taqlid means accepting a scholar's statement without asking for the proof, trusting that it rests on fact and evidence.",
              "The hadith about the sects destined for the Fire does not refer to jurists who differed on secondary matters. They agreed on the foundations of belief.",
              "\"Those in authority\" in Quran 4:59 were explained as the jurists by Ibn Abbas, Mujahid, 'Ata and al-Hasan al-Basri. Quran 9:122 tells a group to devote itself to learning and the rest to follow its instruction.",
              "Ijtihad needs knowledge of the Quran, the sunnah, scholarly consensus (ijma') and analogy (qiyas). A person who cannot do it is to adopt one of the jurists and follow his view.",
              "Al-Baghdadi said taqlid is not allowed in what every Muslim must know, such as the five prayers, zakat, fasting Ramadan, hajj and the ban on adultery and wine. It is allowed in details of worship, transactions and marriage."
            ],
            "terms": [
              [
                "Taqlid",
                "تقليد",
                "Following a qualified scholar's ruling without demanding the proof."
              ],
              [
                "Ijtihad",
                "اجتهاد",
                "A qualified jurist's full effort to derive rulings from the sources."
              ],
              [
                "Mujtahid",
                "مجتهد",
                "A scholar qualified to perform ijtihad."
              ]
            ]
          },
          {
            "id": "int-04",
            "title": "The four schools and keeping to one",
            "ar": "المذاهب الأربعة",
            "ref": "pp. 19–22",
            "mins": 13,
            "summary": "A school (madhhab) is a trusted jurist's reading of the Quran and sunnah, arranged for others to follow. Scholars limited this to four imams and warned against mixing schools out of desire.",
            "points": [
              "Following a school means following the Quran and sunnah as interpreted by a reliable jurist. The four are Abu Hanifa, Malik, Shafi'i and Ahmad.",
              "Scholars took Quran 16:43, \"Ask those who recall if you know not\", as the main proof that someone who does not know a ruling must follow a mujtahid.",
              "A judge who strives and is right gets two rewards, and one who strives and errs gets one. This shows that a qualified mujtahid is rewarded even when wrong.",
              "Ibn Salah reported consensus that following rulings from schools other than the four is unlawful, because their attribution is not reliably transmitted.",
              "A person who cannot weigh the evidence must not pick views from different schools to suit his desires. Once he has adopted a madhhab, he should not follow another for convenience."
            ],
            "terms": [
              [
                "Madhhab",
                "مذهب",
                "A school of law: one imam's method and rulings."
              ]
            ]
          }
        ]
      },
      {
        "title": "The Imams of the School",
        "ar": "أئمة المذهب",
        "lessons": [
          {
            "id": "int-05",
            "title": "Abu Hanifa, his two companions and the author",
            "ar": "أبو حنيفة وصاحباه والمؤلف",
            "ref": "pp. 23–25",
            "mins": 15,
            "summary": "The lives of Imam Abu Hanifa and his two leading students, Muhammad and Abu Yusuf, whose views shape the school. The lesson ends with Hasan al-Shurunbulali, author of Nur al-Idah.",
            "points": [
              "Abu Hanifa is al-Nu'man ibn Thabit, born in Kufa in 80 AH. He was a merchant until al-Sha'bi urged him to seek knowledge. He became one of the greatest jurists of Kufa.",
              "He prayed fajr with the wudu of 'isha for forty years. He described his method as taking from the Book of Allah, then the sunnah, then the views of the Companions. He was imprisoned for refusing office and died in Baghdad in 150 AH at seventy.",
              "Imam Muhammad ibn al-Hasan al-Shaybani was born in Wasit in 131 AH. He studied under Abu Hanifa, Abu Yusuf and Malik, and Harun al-Rashid appointed him a judge.",
              "Abu Yusuf, Qadi Ya'qub ibn Ibrahim, was the first to spread Abu Hanifa's school and the first to write on the foundations of Hanafi law. He was a hadith master.",
              "Imam Ahmad said that when Abu Hanifa, Abu Yusuf and Muhammad agree, no one pays attention to whoever disagrees with them.",
              "Hasan ibn 'Ammar al-Shurunbulali was born in 994 AH and studied at al-Azhar, where he was called its \"lamp\". His works include Nur al-Idah and a hashiyah on al-Durar wa al-Ghurar."
            ],
            "terms": [
              [
                "Sahibayn",
                "الصاحبان",
                "\"The two companions\": Abu Yusuf and Muhammad."
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Introduction",
    "text": "nur"
  },
  {
    "id": "purification",
    "title": "Purification",
    "ar": "كتاب الطهارة",
    "book": "Book I",
    "pages": "27–115",
    "blurb": "The full Hanafi law of ritual purity from Nur al-Idah: water, istinja, wudu, ghusl, tayammum, wiping over footwear and dressings, women's bleeding and filth. Prayer is not valid without purity, so this is where practice begins.",
    "outcomes": [
      "Judge which water is fit for wudu and ghusl, and how wells, leftovers and filth affect it.",
      "Perform wudu, ghusl and tayammum with their obligations and sunnahs, and know what breaks each.",
      "Apply the rules for wiping khuffs and dressings, women's bleeding and the excused person.",
      "Classify filth as heavy or light, know the excused amounts and how to purify it."
    ],
    "modules": [
      {
        "title": "Water, Leftovers and Wells",
        "ar": "المياه والأسآر والآبار",
        "lessons": [
          {
            "id": "pur-01",
            "title": "The kinds of water",
            "ar": "أنواع المياه",
            "ref": "pp. 31–35",
            "mins": 18,
            "summary": "Seven natural waters may be used for purification. The book then sorts water into five types and explains when mixing or filth makes water unfit.",
            "points": [
              "The seven waters fit for purification are rain, sea, river, well, melted snow, melted hail and spring water.",
              "There are five types. Plain (mutlaq) water is pure and purifying. Water a cat or similar animal drank from is pure and purifying but disliked. Used (musta'mal) water is pure but does not purify. Small still water that filth fell into is impure. Water a donkey or mule drank from is doubtful as a purifier.",
              "Water becomes used once it leaves the body after removing minor impurity, or after wudu renewed for closeness to Allah. It can still wash physical filth but cannot be used for wudu or ghusl.",
              "Wudu is not valid with water from trees or fruit, or with water that lost its thin, flowing nature through cooking or a solid mixed in. Saffron or leaves do not harm it while it still flows, even if its colour changes.",
              "A liquid with two qualities, like milk, overwhelms water when one quality shows. One with three, like vinegar, overwhelms when two show. A liquid with no qualities, like used water, is judged by quantity.",
              "A small amount of still water (less than ten by ten arm lengths) becomes impure when filth falls in, even with no trace. A large amount, or running water, becomes impure only when taste, colour or smell of the filth appears."
            ],
            "terms": [
              [
                "Mutlaq",
                "الماء المطلق",
                "Plain water: pure and able to purify."
              ],
              [
                "Musta'mal",
                "الماء المستعمل",
                "Used water: pure but no longer lifts impurity."
              ]
            ]
          },
          {
            "id": "pur-02",
            "title": "Leftover water, utensils and wells",
            "ar": "الأسآر والتحري والآبار",
            "ref": "pp. 35–39",
            "mins": 18,
            "summary": "Water left after an animal drinks takes a ruling from that animal. The lesson also covers mixed clean and dirty containers, and how a well is cleaned when something falls in.",
            "points": [
              "Leftover water (su'r) has four types. From a human with no filth in the mouth, a horse or an animal whose meat is lawful, it is pure. From a dog, pig or predatory land animal, it is impure. From a cat, free-roaming chicken, bird of prey, rat or snake, it is disliked when plain water is available. From a donkey or mule, it is doubtful.",
              "If only the doubtful water of a donkey or mule is available, one makes wudu with it, then tayammum, then prays.",
              "If clean and filthy containers are mixed and most are clean, one uses best judgement to choose water for wudu and drinking. If most are filthy, one does so only for drinking. With clothes one uses best judgement whichever way the majority goes.",
              "All the water of a small well is drawn out if filth falls in, if a pig falls in, if a dog, sheep or human dies in it, or if any dead animal swells. If that is not possible, 200 buckets are drawn. For a chicken or cat it is 40 buckets, and for a rat 20.",
              "A well is not spoiled by a little dung, pigeon or sparrow droppings, or the death of a creature with no flowing blood, such as a fish, frog, fly or scorpion. It is also not spoiled by a person or lawful animal that comes out alive with no filth on it.",
              "If a dead animal is found and no one knows when it fell in, the water is impure for one day and night, and prayers made with its wudu are repeated. If the animal has swollen, it is three days and nights."
            ],
            "terms": [
              [
                "Su'r",
                "سؤر",
                "The small amount of water left after a person or animal drinks."
              ]
            ]
          }
        ]
      },
      {
        "title": "Istinja and Relieving Oneself",
        "ar": "باب الاستنجاء",
        "lessons": [
          {
            "id": "pur-03",
            "title": "Istinja: its ruling and method",
            "ar": "حكم الاستنجاء وكيفيته",
            "ref": "pp. 39–42",
            "mins": 14,
            "summary": "Istinja is cleaning the private parts after relieving oneself. Its ruling depends on how far the filth has spread, and the book sets out how it is done.",
            "points": [
              "After urinating, a man must be sure the flow has stopped, for example by walking or coughing, before starting wudu. A woman waits a short while and then cleans herself.",
              "Istinja is sunnah when the filth has not spread beyond the outlet. If it spreads beyond and equals a dirham in size, it is necessary to wash it with water or a liquid cleanser. If it is more than a dirham, washing with water is obligatory.",
              "In a ghusl for janabah, menstruation or postnatal bleeding, it is obligatory to wash filth at the outlet even if it is very little.",
              "It is sunnah to use a clean stone or similar. Water is better than wiping, and combining the two is best: wipe first, then wash. Using three stones is recommended, even if fewer clean the area.",
              "A woman wipes from front to back. After wiping, one washes the hand, then rubs the area with the inside of the fingers until the smell is gone. A fasting person does not relax the body too much and dries the area before standing."
            ],
            "terms": [
              [
                "Istinja",
                "الاستنجاء",
                "Removing filth from the private parts with water, stones or similar."
              ]
            ]
          },
          {
            "id": "pur-04",
            "title": "What to use and toilet etiquette",
            "ar": "ما يكره به الاستنجاء وآداب الخلاء",
            "ref": "pp. 42–44",
            "mins": 12,
            "summary": "Some things must not be used for istinja, and modesty must be kept. The book also lists the manners of entering, using and leaving the toilet.",
            "points": [
              "Exposing the private parts for istinja in front of others is not permitted. If people are present, one cleans under one's clothes.",
              "It is disliked to clean with bones, food of people or animals, baked brick, glass, charcoal, or valuable items such as silk or cotton. Using the right hand is disliked without a valid reason.",
              "One enters with the left foot and seeks refuge in Allah from Satan before entering. One sits leaning on the left side and does not talk without need.",
              "It is prohibitively disliked to face the qiblah or turn one's back to it while relieving oneself, even inside a building. Facing the sun, the moon or the wind is disliked.",
              "It is disliked to relieve oneself in water, even running water, in shade, in a hole, on a road, in a cemetery or under a fruit tree. Urinating standing is disliked without a reason.",
              "One leaves with the right foot and praises Allah who removed harm and gave protection. The Prophet ﷺ would ask for Allah's forgiveness on leaving."
            ]
          }
        ]
      },
      {
        "title": "Wudu",
        "ar": "باب الوضوء",
        "lessons": [
          {
            "id": "pur-05",
            "title": "Pillars and conditions of wudu",
            "ar": "أركان الوضوء وشروطه",
            "ref": "pp. 45–49",
            "mins": 18,
            "summary": "Wudu has four obligatory pillars. The lesson covers who must perform it, what makes it valid, and how to make sure water reaches every part.",
            "points": [
              "The four pillars are: washing the face, washing the arms with the elbows, washing the feet with the ankles, and wiping a quarter of the head. Washing means at least a couple of drops flow over the limb.",
              "The face runs from the top of the forehead to the bottom of the chin, and from one earlobe to the other.",
              "Wudu becomes obligatory with sanity, maturity, Islam, the ability to use enough water, being in minor impurity, being free of menstruation and postnatal bleeding, and the prayer time running short. Without signs of maturity, a person is mature at fifteen.",
              "Wudu is valid with three conditions: water reaches all the required skin, and even a pinhole left dry invalidates it. Whatever is incompatible with it, such as flowing urine or blood, has stopped. Anything that blocks water, such as wax or grease, is removed.",
              "With a thick beard one washes its visible surface. With a light beard water must reach the skin. Hair hanging beyond the face need not be washed.",
              "A tight ring must be moved so water reaches beneath it. Insect or flea droppings do not block wudu. One need not redo wudu after shaving the head or cutting the nails."
            ],
            "terms": [
              [
                "Wudu",
                "الوضوء",
                "Ritual washing of set limbs that lifts minor impurity."
              ],
              [
                "Hadath",
                "الحدث",
                "Ritual impurity, minor or major, that blocks acts of worship."
              ]
            ]
          },
          {
            "id": "pur-06",
            "title": "The sunnahs of wudu",
            "ar": "سنن الوضوء",
            "ref": "pp. 49–52",
            "mins": 15,
            "summary": "The book lists eighteen sunnahs that complete wudu. Some of them, such as the intention and the order, are obligatory in other schools but sunnah in the Hanafi school.",
            "points": [
              "One begins by washing the hands to the wrists, saying the name of Allah (tasmiyah), and using the siwak, or a finger if there is no siwak.",
              "One rinses the mouth three times and the nose three times with fresh water each time. One rinses deeply if not fasting.",
              "One combs through a thick beard with wet fingers, passes water between the fingers and toes, and washes each limb three times.",
              "One wipes the whole head once, and the ears, even with the head's water. One rubs the limbs (dalk) and washes them in succession, so that in normal weather one limb does not dry before the next is washed.",
              "The intention is sunnah. Abu Hanifa held that wudu without it is valid but its reward is less. Following the order in the Quran is also sunnah.",
              "One begins with the right side, starts from the fingertips and toes, starts wiping the head from the front, and wipes the neck but not the throat."
            ],
            "terms": [
              [
                "Niyyah",
                "النية",
                "Intention: the heart's resolve to perform the act."
              ],
              [
                "Dalk",
                "الدلك",
                "Rubbing the limbs with water while washing."
              ],
              [
                "Tartib",
                "الترتيب",
                "Doing the actions in the order Allah mentioned them."
              ]
            ]
          },
          {
            "id": "pur-07",
            "title": "Etiquettes and dislikes of wudu",
            "ar": "آداب الوضوء ومكروهاته",
            "ref": "pp. 53–55",
            "mins": 12,
            "summary": "Beyond the sunnahs are recommended manners (adab) that the Prophet ﷺ did once or twice. The book also names six things that are disliked during wudu.",
            "points": [
              "Adab is rewarded when done and not blameworthy when left. Fourteen are listed, including sitting on a raised place, facing the qiblah, and not asking others for help.",
              "One avoids ordinary talk, joins the heart's intention to spoken words, and uses supplications passed down from the Prophet ﷺ, the Companions and the Tabi'in.",
              "One puts the little finger into the ear openings, moves a loose ring, rinses mouth and nose with the right hand, and blows the nose with the left.",
              "Making wudu before the prayer time is recommended, except for an excused person. Afterwards one says the two testimonies of faith while standing, may drink from the leftover water, and asks Allah to make one of those who repent and are purified.",
              "Six things are disliked: wasting water, even at a flowing river; using so little that washing becomes like wiping; slapping water on the face; ordinary talk; asking help without reason; and wiping the head three times with fresh water."
            ],
            "terms": [
              [
                "Adab",
                "آداب",
                "Recommended manners: rewarded if done, not blamed if left."
              ]
            ]
          },
          {
            "id": "pur-08",
            "title": "The three categories of wudu",
            "ar": "أقسام الوضوء",
            "ref": "pp. 56–59",
            "mins": 14,
            "summary": "Wudu is obligatory for some acts, necessary for one, and recommended on many occasions. The recommended occasions include times of sin, anger and disagreement between scholars.",
            "points": [
              "Wudu is obligatory (fard) for any prayer, even voluntary or funeral prayer, for the prostration of recitation, and to touch the Quran, even a single verse written on paper, a coin or a wall.",
              "Wudu is necessary (wajib) for tawaf around the Ka'bah.",
              "It is recommended before sleep and on waking, to remain in wudu, before touching books of Islamic law, and to renew wudu for reward in a different place. Renewing it in the same place without worship in between is wasteful.",
              "It is recommended after backbiting, lying, tale-carrying, evil poetry or any sin, after laughing loudly outside prayer, after washing or carrying a dead person, and when angry.",
              "It is recommended for reciting Quran from memory, reading hadith, studying Sacred knowledge, giving the adhan, iqamah or a sermon, visiting the Prophet ﷺ, and standing at Arafah.",
              "It is recommended after eating camel meat, touching a woman or touching one's private part. These do not break wudu, but making wudu avoids the scholars' disagreement."
            ]
          },
          {
            "id": "pur-09",
            "title": "What breaks wudu",
            "ar": "نواقض الوضوء",
            "ref": "pp. 59–62",
            "mins": 16,
            "summary": "The book lists twelve things that break wudu. Its distinctive Hanafi positions include flowing blood, a mouthful of vomit and loud laughter in prayer.",
            "points": [
              "Anything that leaves the front or back passage breaks wudu, except air from a woman's front passage. Giving birth breaks wudu even if no blood is seen.",
              "Blood or pus that flows from any other part of the body breaks wudu. So does saliva in which blood dominates or is equal, shown when the saliva looks red or yellow.",
              "Vomiting a mouthful of food, water, blood clots or bile breaks wudu. A mouthful is when the mouth can only be closed with difficulty. Several small vomits from one cause are added together.",
              "Sleep breaks wudu when the buttocks are not firmly on the ground, such as lying on the side, back or hip, or when the buttocks rise while asleep. Fainting, insanity and drunkenness also break it.",
              "Loud laughter by a mature, conscious person in a prayer with bowing and prostration breaks both wudu and prayer. In the funeral prayer it breaks only the prayer, and a smile breaks neither.",
              "Direct contact between the private parts with arousal and no barrier also breaks wudu."
            ]
          },
          {
            "id": "pur-10",
            "title": "What does not break wudu",
            "ar": "ما لا ينقض الوضوء",
            "ref": "pp. 62–64",
            "mins": 11,
            "summary": "Ten things that people may think break wudu but do not. Most depend on whether something actually flows, or on whether the sleeper's body stays firm.",
            "points": [
              "Blood that appears but does not flow beyond the wound does not break wudu. Nor does a piece of skin or a scab that falls off without flowing blood.",
              "A worm coming out of a wound, ear or nose does not break wudu, but one coming out of the back passage does.",
              "Touching one's own private part or a woman's does not break wudu, and neither does touching a woman.",
              "Vomit less than a mouthful does not break wudu, and vomiting phlegm does not break it even if it is more than a mouthful.",
              "Swaying while asleep seated with the buttocks firmly on the ground does not break wudu, even when leaning on a support that would make one fall if removed.",
              "Sleeping in prayer while standing, sitting, bowing or prostrating in the sunnah posture does not break wudu, unless the body collapses."
            ]
          }
        ]
      },
      {
        "title": "Ghusl",
        "ar": "باب الغسل",
        "lessons": [
          {
            "id": "pur-11",
            "title": "What makes ghusl obligatory",
            "ar": "موجبات الغسل وما لا يوجبه",
            "ref": "pp. 64–67",
            "mins": 16,
            "summary": "Ghusl, the full ritual bath, becomes obligatory for seven reasons. The book also lists ten situations that do not require it.",
            "points": [
              "Ghusl is obligatory when semen leaves its place with desire, whether from a dream or thoughts, for men and women. Semen released without desire, such as from a blow to the back, does not require it.",
              "Ghusl is obligatory on both people when the head of the penis enters either passage.",
              "It is obligatory when someone wakes to find thin fluid and does not remember a dream, or finds wetness they believe is semen after fainting or drunkenness. It is also obligatory when menstruation or postnatal bleeding ends.",
              "A person who was in one of these states before becoming Muslim must still bathe after accepting Islam. Washing a dead Muslim is a communal obligation (fard kifayah).",
              "Ghusl is not required for madhi or wadi, for a wet dream with no wetness found, for a suppository, or for inserting a finger. Giving birth without blood does not require it, though Abu Hanifa held she bathes as a precaution.",
              "Ghusl is not required for penetration with a barrier that prevents feeling, though it is recommended. It is also not required for a virgin whose hymen stays intact with no ejaculation."
            ],
            "terms": [
              [
                "Ghusl",
                "الغسل",
                "The ritual bath: washing the whole body to lift major impurity."
              ],
              [
                "Janabah",
                "الجنابة",
                "Major impurity from intercourse or ejaculation."
              ],
              [
                "Madhi",
                "المذي",
                "Thin pre-seminal fluid released with arousal; it does not require ghusl."
              ]
            ]
          },
          {
            "id": "pur-12",
            "title": "The obligations and sunnahs of ghusl",
            "ar": "فرائض الغسل وسننه",
            "ref": "pp. 68–71",
            "mins": 14,
            "summary": "Ghusl has three obligatory washes, and several hidden areas must be reached. Twelve sunnahs follow the Prophet's ﷺ way of bathing.",
            "points": [
              "It is obligatory to wash the mouth, the nose and the whole body once. Allah commands the impure to purify the whole body, and this includes the mouth and nose.",
              "One must also wash the navel, any unsealed hole in the body, the skin under the beard, moustache and eyebrows, and under the foreskin if it retracts without difficulty.",
              "A man must undo his braids. A woman need not undo hers as long as water reaches the roots.",
              "The sunnahs are: saying bismillah with the intention, washing the hands to the wrists, washing off any filth, washing the private parts, then making wudu as for prayer.",
              "After this one pours water over the whole body three times, starting with the head, then the right shoulder, then the left, rubbing and washing without pause. If water pools underfoot, one washes the feet last.",
              "The manners of ghusl are those of wudu, except that one does not face the qiblah and bathes where no one can see. Speaking is disliked, even supplication."
            ]
          },
          {
            "id": "pur-13",
            "title": "When ghusl is sunnah or recommended",
            "ar": "الأغسال المسنونة والمندوبة",
            "ref": "pp. 71–74",
            "mins": 11,
            "summary": "Beyond obligatory bathing, ghusl is sunnah on four occasions and recommended on sixteen. Many are linked to Friday, the Eids and the hajj.",
            "points": [
              "Ghusl is sunnah for Friday prayer, the two Eid prayers, entering ihram, and for the pilgrim at Arafah after midday.",
              "It is recommended for someone accepting Islam free of major impurity, someone who reaches maturity by age, and someone who recovers from insanity or fainting.",
              "It is recommended after cupping (hijamah) and after washing a dead body, to avoid the scholars' disagreement.",
              "It is recommended on the night of mid-Sha'ban, on Laylat al-Qadr, on entering Madinah, at Muzdalifah on the morning of the 10th of Dhu al-Hijjah, and on entering Makkah for tawaf.",
              "It is recommended for the eclipse prayers, the prayer for rain, prayer in fear, darkness or strong wind, after repenting, on returning from travel, and when filth has struck the body in a spot one cannot find."
            ]
          }
        ]
      },
      {
        "title": "Tayammum",
        "ar": "باب التيمم",
        "lessons": [
          {
            "id": "pur-14",
            "title": "Tayammum and its eight conditions",
            "ar": "شروط صحة التيمم",
            "ref": "pp. 74–80",
            "mins": 20,
            "summary": "Tayammum is wiping the face and arms with pure earth when water is missing or cannot be used. The book sets eight conditions for it to be valid.",
            "points": [
              "Tayammum was given only to this religion, as an ease, so that no one is cut off from worship. The intention is a condition, made when placing the hands on the earth. To pray with it, one must intend purification, making prayer lawful, or an act of worship that needs purity.",
              "There must be a valid excuse: being a mile or more from water, fearing illness will start or worsen, harmful cold, an enemy or predator, thirst, or having nothing to draw water with.",
              "Fear of missing a funeral or Eid prayer allows tayammum, as they cannot be made up. Fear of missing Friday prayer or a prayer's time does not, because Friday has dhuhr as a substitute and other prayers can be made up.",
              "It must be done with a pure earth substance: soil, stone, sand, gypsum, lime, kohl or clay. It is not done with wood, gold, silver, metal or anything that turns to ash when burnt.",
              "The face and arms to the elbows must be wiped completely, using the whole hand or most of it, not two fingers. It is done with two strikes of the palms on the earth.",
              "Anything incompatible with it, such as menstruation, must have stopped, and anything that blocks the skin, such as wax or grease, must be removed."
            ],
            "terms": [
              [
                "Tayammum",
                "التيمم",
                "Wiping the face and arms with pure earth in place of water."
              ],
              [
                "Sa'id",
                "الصعيد",
                "Pure earth, the substance used for tayammum."
              ]
            ]
          },
          {
            "id": "pur-15",
            "title": "Pillars, sunnahs and rules of tayammum",
            "ar": "أركان التيمم وسننه وأحكامه",
            "ref": "pp. 80–86",
            "mins": 18,
            "summary": "Tayammum has two pillars and several sunnahs. The lesson covers when to delay it, searching for or buying water, what it allows and what breaks it.",
            "points": [
              "The two pillars are wiping the face and wiping the arms with the elbows. Its sunnahs include doing them in order and without pause, moving the hands forward and back in the earth, shaking them off, and spreading the fingers.",
              "Delaying tayammum is recommended if one expects water before the time ends. It is wajib if one has been promised water. If one thinks water is near and it is safe, one searches 300 to 400 steps for it.",
              "One asks companions for water where people are not stingy with it. One buys it at the normal price if one has money beyond basic needs, but need not pay an excessive price.",
              "One tayammum allows as many obligatory and voluntary prayers as one wishes, and it may be made before the prayer time enters.",
              "If most of the wudu limbs are injured, one makes tayammum. If most are sound, one washes the sound parts and wipes the injured. Water and tayammum are not combined.",
              "Tayammum breaks with whatever breaks wudu, and when one becomes able to use enough water. Someone with no hands or feet and a wound on the face prays without purification and does not repeat the prayer."
            ]
          }
        ]
      },
      {
        "title": "Wiping Footwear and Dressings",
        "ar": "باب المسح على الخفين",
        "lessons": [
          {
            "id": "pur-16",
            "title": "Wiping over the khuff",
            "ar": "المسح على الخفين",
            "ref": "pp. 86–90",
            "mins": 16,
            "summary": "Instead of washing the feet in wudu, one may wipe over khuffs (leather socks) worn in a state of purity. The book sets seven conditions, a time limit and the area to wipe.",
            "points": [
              "Wiping is established by mass-transmitted reports, and Abu Hanifa feared that denying it could be disbelief. It is valid for men and women, only for minor impurity, and also on thick non-leather socks.",
              "Seven conditions: the khuffs are put on after washing the feet, with wudu completed before anything breaks it. They cover the ankles, can be walked in continuously, and have no tear the size of three small toes.",
              "They also stay on the feet without being tied, keep water from reaching the skin, and the front of the foot is present to the length of three small fingers.",
              "A resident may wipe for one day and night and a traveller for three days and nights. The period starts when wudu first breaks after putting them on.",
              "A resident who travels before the period ends completes three days and nights. A traveller who becomes resident after a day and night must stop wiping.",
              "It is obligatory to wipe, once, an area of three small fingers on the top of each foot. Wiping underneath, the heel or the sides is not valid. The sunnah is to wipe from the toes towards the shin with spread fingers."
            ],
            "terms": [
              [
                "Khuff",
                "خف",
                "A leather sock covering the ankles that may be wiped over in wudu."
              ]
            ]
          },
          {
            "id": "pur-17",
            "title": "What ends wiping, and wiping splints",
            "ar": "نواقض المسح والمسح على الجبيرة",
            "ref": "pp. 90–94",
            "mins": 15,
            "summary": "Four things end the wiping over khuffs, and some coverings cannot be wiped at all. Splints and bandages follow easier rules, with no time limit.",
            "points": [
              "Wiping ends with whatever breaks wudu, with removing a khuff (or most of the foot coming out), with most of one foot getting wet, and with the period ending. For the last three one only washes the feet.",
              "If the period ends and one fears losing the foot to cold, one may keep the khuffs on. If the period ends during prayer, the prayer is void.",
              "Wiping over a turban, cap, veil or gloves in place of the head or hands is not permitted.",
              "If an injured or broken limb cannot be washed or wiped, it is wajib to wipe most of the splint or bandage. Abu Hanifa held it wajib rather than fard.",
              "Wiping a splint has no time limit. It need not be applied in a state of purity, one may wipe a bandage on one foot and wash the other, and it is not undone if the bandage falls off before healing.",
              "If a doctor forbids washing an eye, or medicine is on a wound, one wipes over it, and leaves it if wiping harms. No intention is required for wiping the khuff, a splint or the head."
            ],
            "terms": [
              [
                "Jabirah",
                "الجبيرة",
                "A splint, cast or bandage over an injured limb."
              ]
            ]
          }
        ]
      },
      {
        "title": "Menstruation, Postnatal Bleeding and Istihadah",
        "ar": "باب الحيض والنفاس والاستحاضة",
        "lessons": [
          {
            "id": "pur-18",
            "title": "The three types of blood",
            "ar": "الحيض والنفاس والاستحاضة",
            "ref": "pp. 94–99",
            "mins": 20,
            "summary": "Three kinds of bleeding affect a woman's worship: menstruation, postnatal bleeding and chronic bleeding. Their limits in days decide which is which.",
            "points": [
              "Menstruation (hayd) is blood from the womb of a girl who has reached puberty, who is not ill or pregnant, and who is below menopause, which is fifty-five.",
              "Menstruation lasts at least three days and nights, typically five, and at most ten. Red, yellow and dark discharge in its days counts as menstruation until pure white is seen.",
              "Postnatal bleeding (nifas) has no minimum and a maximum of forty days.",
              "Chronic bleeding (istihadah) is bleeding of less than three days, beyond ten days of menstruation, or beyond forty days after birth. Bleeding before age nine or during pregnancy is also istihadah.",
              "A woman with a set habit who bleeds past ten days returns to her habit, and the rest is istihadah. If she bleeds past her habit but not past ten, the new length becomes her habit.",
              "At least fifteen days of purity separate two periods. There is no maximum."
            ],
            "terms": [
              [
                "Hayd",
                "الحيض",
                "Menstruation: 3 to 10 days."
              ],
              [
                "Nifas",
                "النفاس",
                "Postnatal bleeding: at most 40 days."
              ],
              [
                "Istihadah",
                "الاستحاضة",
                "Chronic bleeding outside these limits; it does not stop prayer."
              ]
            ]
          },
          {
            "id": "pur-19",
            "title": "What is forbidden in each state of impurity",
            "ar": "ما يحرم بالحيض والجنابة والحدث",
            "ref": "pp. 99–105",
            "mins": 18,
            "summary": "Menstruation and postnatal bleeding forbid eight things, major impurity five, and minor impurity three. The lesson also covers when intercourse becomes lawful again and what must be made up.",
            "points": [
              "During menstruation and postnatal bleeding, prayer, fasting, reciting any verse of Quran, touching the Quran without a separate cover, entering a mosque, tawaf and intercourse are forbidden. So is enjoying what is beneath the izar (waist-wrap).",
              "Words of the Quran said as supplication or remembrance, not as recitation, are allowed, such as \"In the name of Allah\" or \"To Allah we belong and to Him we return\".",
              "If bleeding stops at the maximum (ten days, or forty after birth), intercourse is lawful before ghusl. If it stops at her habit but before the maximum, it is lawful only after ghusl, or tayammum and prayer, or once a prayer's time has fully passed and become owed by her.",
              "If bleeding stops before her habit ends, intercourse is not lawful until the habit is complete, even if she bathes. She prays and fasts as a precaution.",
              "She makes up missed fasts but not missed prayers.",
              "Major impurity (janabah) forbids prayer, reciting Quran, touching the Quran without a cover, entering a mosque and tawaf. Minor impurity forbids prayer, tawaf and touching the Quran without a cover."
            ]
          },
          {
            "id": "pur-20",
            "title": "Chronic bleeding and the excused person",
            "ar": "أحكام المعذور",
            "ref": "pp. 105–106",
            "mins": 10,
            "summary": "Someone with constant bleeding, drops of urine or wind is \"excused\" and follows special rules for wudu. The book sets out how this status starts, continues and ends.",
            "points": [
              "Istihadah is like a constant nosebleed. It does not prevent prayer, fasting or intercourse.",
              "The excused person makes wudu for the time of each obligatory prayer and may pray as many obligatory and voluntary prayers as they like with it, even if the condition continues during prayer.",
              "This wudu breaks only when the prayer time ends. For fajr, that is at sunrise. Something other than the condition, such as a new cut that bleeds, still breaks it.",
              "A person becomes excused when the condition lasts a full prayer time with no break long enough to make wudu and pray.",
              "The excuse continues if the condition appears at least once in each later prayer time. It ends when a full prayer time passes without it."
            ],
            "terms": [
              [
                "Ma'dhur",
                "معذور",
                "An excused person with a constant condition that breaks wudu."
              ]
            ]
          }
        ]
      },
      {
        "title": "Filth and Its Purification",
        "ar": "باب الأنجاس والطهارة عنها",
        "lessons": [
          {
            "id": "pur-21",
            "title": "Heavy and light filth, and what is excused",
            "ar": "النجاسة المغلظة والمخففة",
            "ref": "pp. 107–109",
            "mins": 14,
            "summary": "Filth is either heavy or light, and each has its own excused amount. The book also explains when contact with old filth makes something impure.",
            "points": [
              "Real filth (najasah haqiqiyyah) is a substance that is impure in itself. Legal impurity (hadath) is the minor or major state that the law places on a person.",
              "Heavy filth includes wine, flowing blood, the flesh of a dead animal, the urine of animals whose meat is unlawful, the dung of dogs and predatory animals, chicken and duck droppings, and anything from the body that breaks wudu, such as semen, madhi or a mouthful of vomit.",
              "Light filth includes horse urine, the urine of animals whose meat is lawful such as sheep, and the droppings of birds that are not eaten such as falcons and eagles.",
              "Heavy filth up to the size of a dirham is excused. Light filth is excused if it covers less than a quarter of the garment or body part. Specks of urine like pinheads are excused.",
              "A bed or ground with old filth that becomes damp from sweat or wet feet makes the body impure only if a trace of the filth appears. A dry clean cloth wrapped in a damp filthy cloth that does not drip stays clean.",
              "Wind that blows over filth onto clothes does not make them impure unless the filth can be seen on them."
            ],
            "terms": [
              [
                "Najasah",
                "النجاسة",
                "Filth: a substance the law treats as impure."
              ]
            ]
          },
          {
            "id": "pur-22",
            "title": "How filth is purified",
            "ar": "تطهير النجاسة",
            "ref": "pp. 110–113",
            "mins": 15,
            "summary": "Different things are purified in different ways: washing, rubbing, wiping, drying, tanning or a complete change of substance. The lesson ends with which animal parts are pure.",
            "points": [
              "Visible filth is purified by removing it, even with one wash. A remaining colour or smell that is hard to remove does no harm. Invisible filth is washed three times, wringing each time.",
              "Filth on the body and clothes can be removed with water or any liquid that removes it, such as vinegar or rose water. A khuff is cleaned by rubbing it on the ground if the filth has body, even if it is moist. Swords and metal are cleaned by wiping.",
              "Ground on which the traces of filth have gone and that has dried may be prayed on, but not used for tayammum. Trees and grass on it become pure when dry.",
              "Filth becomes pure when it turns into something else, such as wine becoming vinegar or something burnt to ash. Dry semen is scratched off, and wet semen is washed.",
              "The hide of a dead animal, even a dog, is purified by tanning, or by placing it in the sun or cleaning it with soil. A pig's hide never becomes pure, and neither does a human's, out of respect for human dignity.",
              "Hair, feathers, horns, hooves and bones without grease are pure. Musk and its pod are pure and may be eaten, and civet is pure."
            ],
            "terms": [
              [
                "Dibagh",
                "الدباغ",
                "Tanning: treating a hide so that it becomes pure."
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book I",
    "text": "nur"
  },
  {
    "id": "prayer-1",
    "title": "Prayer I: The Daily Prayers",
    "ar": "كتاب الصلاة",
    "book": "Book II",
    "pages": "116–200",
    "blurb": "Everything you need to pray the five daily prayers correctly by the Hanafi school: when they are due, how the adhan works, the conditions, pillars and necessary acts, how to pray step by step, praying in congregation, and what spoils or reduces a prayer.",
    "outcomes": [
      "Know who must pray, the five prayer times, and the times when prayer is forbidden or disliked",
      "Tell apart the conditions, pillars, wajib acts and sunnas of prayer and what each means for your prayer",
      "Pray a complete prayer step by step, alone or behind an imam",
      "Recognise what nullifies a prayer, what is disliked in it, and what does not harm it"
    ],
    "modules": [
      {
        "title": "Who must pray and when",
        "ar": "شروط وجوب الصلاة وأوقاتها",
        "lessons": [
          {
            "id": "sal-01",
            "title": "Who must pray, and the five prayer times",
            "ar": "شروط الوجوب والأوقات",
            "ref": "pp. 120–123",
            "mins": 18,
            "summary": "Prayer is a set of specific words and actions that begins with the opening Allahu akbar and ends with the closing salams. This lesson covers who it is obligatory on, what makes each prayer due, and the start and end of each of the five times.",
            "points": [
              "Prayer is obligatory on anyone with three conditions: Islam, maturity and sanity. A disbeliever is not subject to it, and neither is a child until he or she matures.",
              "Children are told to pray at seven and disciplined for neglecting it at ten, with the hand and not a stick. The book stresses this means sensible discipline, not injury.",
              "What makes each prayer due is the arrival of its time. The time is wide enough for the prayer and more, but if a person delays until only enough time for the prayer itself remains, he must pray at once.",
              "Fajr runs from true dawn until just before sunrise. Dhuhr starts when the sun passes its zenith and ends when an object's shadow is twice its length, plus its shadow at noon. This is Abu Hanifa's view, which the book calls the most correct.",
              "'Asr runs from the end of dhuhr until sunset. Maghrib runs from complete sunset until the red glow on the horizon disappears, and the fatwa is on this. 'Isha and witr run from then until a little before true dawn.",
              "Witr is not prayed before 'isha because the order between them is wajib. Where the time of 'isha never arrives, 'isha and witr are not obligatory, because their cause, the time, never comes."
            ],
            "terms": [
              [
                "Al-fajr al-sadiq",
                "الفجر الصادق",
                "True dawn: when light begins to spread across the horizon"
              ],
              [
                "Wajib muwassa'",
                "واجب موسع",
                "An obligation whose time is wider than the act needs"
              ],
              [
                "Shafaq",
                "الشفق",
                "The glow after sunset; the book takes the red glow as the end of maghrib"
              ]
            ]
          },
          {
            "id": "sal-02",
            "title": "Joining prayers, best times and forbidden times",
            "ar": "الجمع والأوقات المستحبة والمكروهة",
            "ref": "pp. 124–130",
            "mins": 20,
            "summary": "Each prayer belongs in its own time, with one exception during hajj. This lesson covers the best time to offer each prayer and the times when prayer is invalid or disliked.",
            "points": [
              "Two obligatory prayers are not joined in one time, even for travel or rain. The only exceptions are at Arafah, where dhuhr and 'asr are prayed together at dhuhr time with the great imam while in ihram, and at Muzdalifah, where maghrib and 'isha are prayed together at 'isha time.",
              "It is recommended for men to pray fajr when the sky has brightened, to delay dhuhr in hot weather and pray it early in cold weather, to delay 'asr but not until the sun turns pale, to pray maghrib early, and to delay 'isha to the first third of the night.",
              "Witr is best delayed to the end of the night for someone sure he will wake up for it.",
              "No prayer is valid at three times: while the sun is rising until it is a spear's length high, when it is at its zenith, and when it is about to set until it sets. This includes owed obligatory prayers, the funeral prayer and the recital prostration. The exception is that day's 'asr, which is valid at sunset though disliked.",
              "Voluntary prayer is prohibitively disliked in those three times, even prayers with a reason such as greeting the mosque. It is also disliked after dawn except its sunna, after the fajr and 'asr prayers, before maghrib, once the imam comes out for the Friday sermon, during the iqama except the fajr sunna, and around the Eid prayer.",
              "Praying is disliked when holding back the need to urinate or defecate, and when desired food is present, because both take away concentration."
            ],
            "terms": [
              [
                "Makruh tahrimi",
                "مكروه تحريماً",
                "Prohibitively disliked: close to forbidden"
              ]
            ]
          }
        ]
      },
      {
        "title": "The call to prayer",
        "ar": "باب الأذان",
        "lessons": [
          {
            "id": "sal-03",
            "title": "The adhan and the iqama",
            "ar": "الأذان والإقامة",
            "ref": "pp. 130–135",
            "mins": 18,
            "summary": "The adhan announces that the time of prayer has come, and the iqama announces that the prayer is starting. This lesson covers their ruling, their words, how the caller should give them, and how the listener responds.",
            "points": [
              "The adhan and iqama are an emphasised sunna for the obligatory prayers, whether praying alone or in a group, on time or making up, travelling or at home. They are not sunna for the funeral, Eid, eclipse, rain or tarawih prayers, the regular sunnas, or witr. It is disliked for women to give them.",
              "Allahu akbar is said four times at the start and twice at the end, and the other phrases twice, without repeating the shahadas quietly first. The iqama has the same words. At fajr 'prayer is better than sleep' is added twice, and in the iqama 'the prayer has begun' is added twice.",
              "The caller gives the adhan slowly with pauses and the iqama quickly, only in Arabic. He should be righteous, know the prayer times, be in wudu and face the qibla, put his fingers in his ears, and turn his head right at 'come to prayer' and left at 'come to success'.",
              "It is disliked to sing the adhan in a way that changes the words, to give it in minor impurity, sitting down, or while speaking. It is disliked for the caller to be in major impurity, a child without understanding, insane, drunk, female or openly sinful.",
              "Someone making up a missed prayer gives the adhan and iqama for it. For several missed prayers in one sitting, he gives both for the first, and for the rest leaving the adhan is fine but leaving the iqama is disliked.",
              "The listener stops what he is doing and repeats the caller's words, but at 'come to prayer' and 'come to success' says 'there is no power or strength except with Allah'. Afterwards he asks Allah to grant the Prophet ﷺ the place of nearness and the praiseworthy station."
            ],
            "terms": [
              [
                "Adhan",
                "الأذان",
                "The call announcing that prayer time has come"
              ],
              [
                "Iqama",
                "الإقامة",
                "The second call, made as the prayer starts"
              ],
              [
                "Tarji'",
                "الترجيع",
                "Saying the shahadas quietly before saying them aloud; not done in the Hanafi adhan"
              ]
            ]
          }
        ]
      },
      {
        "title": "Conditions and pillars of prayer",
        "ar": "باب شروط الصلاة وأركانها",
        "lessons": [
          {
            "id": "sal-04",
            "title": "The conditions of prayer",
            "ar": "شروط الصلاة",
            "ref": "pp. 135–137",
            "mins": 15,
            "summary": "Conditions are things that must be in place for the prayer to be valid. Most of them come before the prayer starts: purity, covering, facing the qibla, the time, the intention and the opening takbir.",
            "points": [
              "The body, clothes and place of prayer must be pure of filth beyond what is excused: less than a dirham's area of heavy filth, and less than a quarter of the garment of light filth. The places where the feet, hands, knees and forehead rest must also be pure.",
              "The nakedness must be covered on all sides. It does no harm if it can be seen from the neck opening of the garment.",
              "Someone in Makkah who can see the Ka'bah must face it exactly. Anyone who cannot see it faces its direction.",
              "The person must be certain the time has started. If he prays unsure, the prayer is void even if the time had in fact begun.",
              "The intention is a firm resolve in the heart that marks out which prayer is being offered. It must be joined to the opening takbir without a long gap. A specific obligatory or wajib prayer must be named in the intention, but a voluntary prayer need not be, even the fajr sunna.",
              "The opening takbir must be said standing before bending into bowing, loud enough to hear oneself, and a follower must intend to follow his imam."
            ],
            "terms": [
              [
                "Shart",
                "الشرط",
                "A condition: something outside the prayer that must be in place for it to be valid"
              ],
              [
                "Niyya",
                "النية",
                "Intention: a firm resolve in the heart"
              ],
              [
                "Takbirat al-ihram",
                "تكبيرة الإحرام",
                "The opening Allahu akbar that begins the prayer"
              ]
            ]
          },
          {
            "id": "sal-05",
            "title": "The pillars of prayer",
            "ar": "أركان الصلاة",
            "ref": "pp. 137–142",
            "mins": 18,
            "summary": "Pillars are parts of the prayer itself, and without them it does not exist. The book names four: standing, recitation, bowing and prostration, and adds further requirements on how they are done.",
            "points": [
              "Standing is required in obligatory prayers, but not in voluntary ones.",
              "The minimum recitation required is one verse in two rak'ahs of an obligatory prayer, according to Abu Hanifa, and in every rak'ah of witr and voluntary prayers. No particular verse is required for validity, though reciting the Fatiha is wajib.",
              "The follower does not recite behind the imam, whether the imam recites aloud or silently. Reciting behind him is prohibitively disliked.",
              "Prostration must be on something firm the forehead settles on, not snow, hay or loose rice. It uses the forehead and the nose, not the nose alone unless the forehead is injured. The place of prostration must not be more than half an arm's length higher than the feet, except in a crowd. At least one hand, one knee and part of the toes must touch the ground.",
              "The bowing must come before the prostration, and the second prostration is obligatory like the first. The last sitting must last as long as reciting the tashahhud and must come after all the other pillars.",
              "The pillars must be done while conscious, and the person must know which acts are obligatory so that he does not treat an obligatory act as voluntary."
            ],
            "terms": [
              [
                "Rukn",
                "الركن",
                "A pillar: an essential part of the prayer itself"
              ],
              [
                "Qa'da akhira",
                "القعدة الأخيرة",
                "The last sitting, held for the length of the tashahhud"
              ]
            ]
          },
          {
            "id": "sal-06",
            "title": "Purity, covering and qibla in practice",
            "ar": "فروع شروط الصلاة",
            "ref": "pp. 142–146",
            "mins": 16,
            "summary": "The book applies the conditions to everyday situations: praying on surfaces with filth underneath, having no clean clothes, what counts as nakedness, and what to do when the qibla is unclear.",
            "points": [
              "It is valid to pray on a thick board whose underside is filthy, on a cloth whose lining is filthy if the two are not stitched together, and on the clean side of a mat or carpet.",
              "Someone with no means of removing filth from his clothes prays in them and does not repeat the prayer. Praying in completely filthy clothes is better than praying naked, and if a quarter of the garment is clean he must wear it.",
              "Someone with nothing at all to cover himself prays without repeating. It is best that he prays seated, nodding for bowing and prostration, with his legs stretched towards the qibla.",
              "A man's nakedness is from the navel to the end of the knees. A free woman's is her whole body except the face, hands and feet. If a quarter of any one limb of the nakedness is exposed, the prayer is not valid, and small exposed parts are added together and measured against the smallest of them.",
              "Someone unable to face the qibla because of illness or fear faces whatever direction he can. Someone who does not know the qibla, with nobody to ask and no mihrab, does his best to work it out. If he later learns he was wrong he does not repeat, and if he learns during the prayer he turns.",
              "If he began without trying to work out the qibla, the prayer is valid only if he learns after finishing that he was facing the right way."
            ],
            "terms": [
              [
                "'Awrah",
                "العورة",
                "The parts of the body that must be covered in prayer"
              ],
              [
                "Mihrab",
                "المحراب",
                "The niche in a mosque that marks the qibla"
              ]
            ]
          }
        ]
      },
      {
        "title": "Wajib acts, sunnas and how to pray",
        "ar": "واجبات الصلاة وسننها وكيفيتها",
        "lessons": [
          {
            "id": "sal-07",
            "title": "The wajib acts of prayer",
            "ar": "واجبات الصلاة",
            "ref": "pp. 146–149",
            "mins": 17,
            "summary": "Wajib acts sit between the pillars and the sunnas. Leaving one by mistake does not ruin the prayer but must be made good with the prostration of forgetfulness, and leaving one on purpose is sinful.",
            "points": [
              "It is wajib to recite the Fatiha, and to add a surah or three verses to it in the first two rak'ahs of an obligatory prayer and in every rak'ah of witr and voluntary prayers. The Fatiha comes before the surah.",
              "It is wajib to place both the nose and forehead in prostration, to do the second prostration before moving on, and to be still for a moment in every pillar. The Prophet ﷺ told a man who rushed his prayer three times to go back and pray, because he had not prayed.",
              "The first sitting and its tashahhud are wajib, as is the tashahhud in the last sitting. One must stand for the third rak'ah straight after the first tashahhud; sitting on forgetfully for the length of a pillar requires the prostration of forgetfulness.",
              "Also wajib: ending the prayer with the word 'salam', the qunut in witr, the extra takbirs of both Eids, using the words 'Allahu akbar' to begin the prayer, and the takbir for bowing in the second rak'ah of Eid.",
              "Recitation is wajib aloud in fajr, the first two rak'ahs of maghrib and 'isha, Friday, Eid, tarawih and witr in Ramadan, and silent in dhuhr and 'asr, the last rak'ah of maghrib and last two of 'isha. Someone praying alone in a loud prayer may choose.",
              "If someone left out the surah in the first two rak'ahs of 'isha, he recites it aloud with the Fatiha in the last two. If he left out the Fatiha, he does not repeat it."
            ],
            "terms": [
              [
                "Wajib",
                "الواجب",
                "Necessary: proven by evidence a little below the obligatory; leaving it on purpose is sinful"
              ],
              [
                "Tuma'nina",
                "الطمأنينة",
                "Being still for a moment in each position"
              ]
            ]
          },
          {
            "id": "sal-08",
            "title": "The sunnas of prayer",
            "ar": "سنن الصلاة",
            "ref": "pp. 150–158",
            "mins": 22,
            "summary": "A sunna is the path the Prophet ﷺ kept to without making it binding. Missing one does not spoil the prayer or need the prostration of forgetfulness, but leaving one on purpose is blameworthy.",
            "points": [
              "At the opening takbir a man raises his hands to his ears, fingers spread and palms facing the qibla, and a free woman to her shoulders. A man places his right hand over his left below the navel, and a woman places her hands on her chest.",
              "The opening praise (thana'), seeking refuge from Satan, the basmala before the Fatiha in each rak'ah, and saying amin are all sunna and said silently. The imam says the takbirs and 'Allah hears whoever praises Him' aloud.",
              "For a resident, recitation after the Fatiha is from the long part of the mufassal (al-Hujurat to al-Buruj) in fajr and dhuhr, the middle part in 'asr and 'isha, and the short part in maghrib. A traveller may recite whatever he likes. Only the first rak'ah of fajr is lengthened.",
              "In bowing it is sunna to say 'Glory be to my Lord the Great' three times, grasp the knees with fingers spread, and keep the back straight with the head level. In prostration it is sunna to place the knees, then hands, then face, with the face between the palms, and to say 'Glory be to my Lord the Most High' three times.",
              "A man keeps his stomach away from his thighs and elbows from his sides, and sits on his left foot with the right foot upright. A woman keeps her limbs close and sits with her left foot out from under her. In the tashahhud the index finger is raised at 'there is no god' and lowered at 'except Allah'.",
              "In the last sitting it is sunna to recite the ibrahimiyya and a supplication in words like the Quran and sunna, then give salam to the right and then the left, intending those praying with him and the angels. A latecomer waits for both of the imam's salams before standing to make up."
            ],
            "terms": [
              [
                "Thana'",
                "الثناء",
                "The opening praise: Subhanaka Allahumma wa bi-hamdika"
              ],
              [
                "Mufassal",
                "المفصل",
                "The last section of the Quran, from al-Hujurat to an-Nas"
              ],
              [
                "Iftirash",
                "الافتراش",
                "The man's sitting: on the left foot with the right foot upright"
              ]
            ]
          },
          {
            "id": "sal-09",
            "title": "Etiquette, and the prayer step by step",
            "ar": "آداب الصلاة وكيفية تركيبها",
            "ref": "pp. 159–164",
            "mins": 20,
            "summary": "The book closes this section by describing a complete prayer from the opening takbir to the salams, after listing the etiquettes that keep the heart focused.",
            "points": [
              "Etiquettes: the gaze rests on the place of prostration when standing, the feet when bowing, the nose in prostration, the lap when sitting and the shoulders at salam. One resists coughing and keeps the mouth closed when yawning. The imam and people stand when the caller says 'come to success'.",
              "The worshipper raises his hands and says Allahu akbar without stretching the opening 'a' of Allah or the 'a' and 'b' of akbar, as this spoils the prayer. Beginning with another pure glorification of Allah is valid but disliked. Beginning in another language is invalid for someone able to say it in Arabic, and reciting Quran in another language is invalid.",
              "He folds his hands below the navel straight after the takbir, recites the thana', seeks refuge from Satan if he is the imam or praying alone, says the basmala silently, recites the Fatiha, says amin silently, and recites a surah or three verses.",
              "He bows, rises saying 'Allah hears whoever praises Him, our Lord, all praise is Yours' if he is imam or alone, while the follower says only 'our Lord, all praise is Yours'. He prostrates, sits briefly, prostrates again, then rises for the second rak'ah without leaning on his hands or sitting first.",
              "The second rak'ah is the same without the thana' or seeking refuge. The hands are raised only for the opening takbir, the qunut of witr and the Eid takbirs.",
              "In the first sitting he recites only the tashahhud of Ibn Mas'ud. In the last two rak'ahs he recites only the Fatiha. In the last sitting he recites the tashahhud, the ibrahimiyya and a supplication, then gives salam right and left."
            ],
            "terms": [
              [
                "Adab",
                "الآداب",
                "Etiquettes: refinements that complete the sunnas"
              ],
              [
                "Ibrahimiyya",
                "الصلاة الإبراهيمية",
                "The blessing on the Prophet ﷺ and Ibrahim recited in the last sitting"
              ]
            ]
          }
        ]
      },
      {
        "title": "Imamate and congregation",
        "ar": "باب الإمامة",
        "lessons": [
          {
            "id": "sal-10",
            "title": "Congregation and the conditions of following",
            "ar": "الجماعة وشروط الإمامة والاقتداء",
            "ref": "pp. 165–169",
            "mins": 18,
            "summary": "Praying in congregation is an emphasised sunna for men. This lesson covers who can lead, the conditions for a follower's prayer to be valid, and which combinations of imam and follower are allowed.",
            "points": [
              "Leading the prayer is better than giving the adhan. Congregation is an emphasised sunna for a free man with no valid excuse, and the Prophet ﷺ kept to it all his life.",
              "For healthy men, an imam must be Muslim, mature, sane, male, know at least three short verses or one long verse by heart, and be free of excuses such as a constant nosebleed, stuttering or mispronouncing letters, unless the followers share the same problem.",
              "The follower intends to follow at the opening takbir. The imam must intend to lead women for their following to be valid. The imam's heel must be ahead of the follower's, and both must be praying the same obligatory prayer.",
              "The imam must not be in a weaker state than the follower, for example praying voluntary while the follower prays obligatory. Following is not valid if a row of women, a river a boat could pass through, a road a cart could pass along, or a wall that hides the imam's movements separates them.",
              "It is valid for someone with wudu to follow someone with tayammum, someone washing to follow someone wiping, someone standing to follow someone seated, and someone praying voluntary to follow someone praying obligatory.",
              "If the imam's prayer turns out to be void, the followers repeat theirs, and the imam should tell them as best he can."
            ],
            "terms": [
              [
                "Imam",
                "الإمام",
                "The person leading the prayer"
              ],
              [
                "Iqtida'",
                "الاقتداء",
                "Following the imam in prayer"
              ]
            ]
          },
          {
            "id": "sal-11",
            "title": "Excuses, the rightful imam and disliked imamate",
            "ar": "أعذار الجماعة والأحق بالإمامة",
            "ref": "pp. 170–175",
            "mins": 16,
            "summary": "The book lists eighteen excuses for missing the congregation, the order of who has most right to lead, and whose leading is disliked.",
            "points": [
              "Congregation is excused for heavy rain, severe cold, fear of an oppressor, deep darkness, confinement, blindness, paralysis, losing a leg, illness, being unable to walk, mud, chronic illness, old age, and a fiqh class that would otherwise be missed.",
              "It is also excused when desired food is present, when preparing to travel and fearing to miss one's group, when caring for a sick person, and in a strong wind at night. Someone held back by an excuse who intended to attend is still rewarded.",
              "The ruler has most right to lead, then the appointed imam or owner of the place. After them comes the one most knowledgeable in the rulings of prayer, then the best reciter, the most scrupulous, the oldest, the best in character, the most handsome, the noblest lineage, the best voice and the cleanest clothes.",
              "If they are equal, they draw lots or follow the people's choice. Choosing someone less suitable is a mistake but not a sin.",
              "It is disliked for an ignorant slave, a blind man, a bedouin, a child born of fornication who lacks knowledge, an open sinner or an innovator to lead. It is also disliked for the imam to lengthen the prayer so that people find it a burden.",
              "It is disliked for women to pray as a separate congregation. If they do, the woman leading stands in the middle of the row."
            ],
            "terms": [
              [
                "Wara'",
                "الورع",
                "Scrupulousness: avoiding even what looks doubtful"
              ]
            ]
          },
          {
            "id": "sal-12",
            "title": "Rows, following the imam, and remembrance after prayer",
            "ar": "موقف المأموم والأذكار بعد الصلاة",
            "ref": "pp. 175–178",
            "mins": 15,
            "summary": "Where followers stand, what they do when they fall out of step with the imam, and the remembrance of Allah after the obligatory prayer.",
            "points": [
              "A single follower stands on the imam's right; standing on his left or behind him is disliked. Two or more stand behind him. Men form the front rows, then boys, then hermaphrodites, then women, and the first row is the best.",
              "If the imam gives salam before the follower has finished the tashahhud, the follower completes it, as it is wajib, then gives salam. If he has finished the tashahhud but not the ibrahimiyya, he leaves it and gives salam with the imam.",
              "If the imam rises from bowing or prostration before the follower has said three tasbihs, the follower goes with the imam.",
              "If the imam forgetfully stands up before the last sitting, the follower does not follow him but waits, saying 'subhan Allah' to alert him. If the follower gives salam before the imam prostrates in the extra rak'ah, his prayer is void. Giving salam before the imam after the tashahhud is disliked but valid.",
              "It is sunna to stand for the sunna prayer straight after the obligatory one, pausing only as long as it takes to say 'O Allah, You are Peace and from You is peace'. The imam moves to his left for the sunna and may then face the people.",
              "Then one seeks forgiveness three times, recites Ayat al-Kursi and the last two surahs, says subhan Allah, al-hamdu lillah and Allahu akbar thirty-three times each, says 'there is no god but Allah alone without partner', and makes supplication with hands raised, wiping the face afterwards."
            ]
          }
        ]
      },
      {
        "title": "What spoils the prayer, and what is disliked",
        "ar": "باب ما يفسد الصلاة وما يكره فيها",
        "lessons": [
          {
            "id": "sal-13",
            "title": "What nullifies the prayer: speech, movement and eating",
            "ar": "مفسدات الصلاة من الكلام والعمل",
            "ref": "pp. 178–181",
            "mins": 16,
            "summary": "Some acts end the prayer straight away, even when done by mistake. This lesson covers speech, replies, movement, eating and drinking.",
            "points": [
              "Speaking even one word, forgetfully or by mistake, nullifies the prayer, as does a supplication in words like ordinary human talk. Saying salam to greet someone or replying to a greeting with the tongue or a handshake nullifies it, even forgetfully.",
              "Excessive movement nullifies it: movement that makes an onlooker think the person is not praying, such as three continuous steps. Turning the chest away from the qibla without reason nullifies it.",
              "Eating anything from outside the mouth, however small, nullifies it, as does eating something between the teeth the size of a chickpea, and drinking.",
              "Clearing the throat without need, groaning, sighing, and crying out loud from pain or a calamity nullify it. Weeping at the thought of Paradise or Hell does not.",
              "Words of dhikr said as a reply nullify the prayer: saying 'may Allah have mercy on you' to someone who sneezes, 'there is no god but Allah' in answer to a question, 'to Allah we belong and to Him we return' at bad news, 'all praise is for Allah' at good news, or a verse of Quran to answer someone."
            ]
          },
          {
            "id": "sal-14",
            "title": "Other nullifiers and continuing after wudu breaks",
            "ar": "بقية المفسدات والبناء",
            "ref": "pp. 181–187",
            "mins": 20,
            "summary": "A change in a person's state can end the prayer. The book also explains when someone whose wudu breaks by accident may renew it and continue, and what stops him continuing.",
            "points": [
              "The prayer ends when someone with tayammum sees water he can use, when the period for wiping khuffs runs out or they are removed, when someone praying naked finds clothes, when someone praying by nodding becomes able to bow and prostrate, and when someone remembers a missed prayer that must come first in order.",
              "It also ends if the sun rises during fajr, the sun passes its zenith during Eid prayer, 'asr time enters during the Friday prayer, a splint falls off a healed wound, an excused person's condition stops, wudu is broken on purpose, or the person faints or loses his sanity.",
              "If a woman who arouses desire stands alongside a man in the same prayer that has bowing and prostration, in the same place with no barrier, and he does not signal her to move back, his prayer is void if the imam intended to lead her.",
              "If wudu breaks by accident, the person may leave, renew wudu and continue the same prayer, as long as he has not spoken. Uncovering the nakedness, reciting Quran on the way, staying for the length of a pillar after knowing, or leaving the mosque wrongly thinking wudu broke all prevent continuing. The book says starting afresh is better.",
              "Prompting anyone other than one's own imam, saying a new takbir intending a different prayer, reciting from a mushaf, staying for a pillar's length with the nakedness exposed or with filth, and doing a pillar before the imam without him joining all nullify the prayer.",
              "A loud laugh by the imam spoils the prayer, even for the latecomer, because the imam's prayer is linked to those behind him."
            ],
            "terms": [
              [
                "Bina'",
                "البناء",
                "Continuing a prayer after leaving to renew wudu that broke by accident"
              ],
              [
                "Muhadhat",
                "المحاذاة",
                "A woman standing level with a man in the same prayer"
              ]
            ]
          },
          {
            "id": "sal-15",
            "title": "What does not nullify, and what is disliked",
            "ar": "ما لا يفسد الصلاة ومكروهاتها",
            "ref": "pp. 188–196",
            "mins": 22,
            "summary": "Some acts reduce the reward of a prayer without ending it. The book lists a few acts that do not nullify, then a long list of things disliked in prayer.",
            "points": [
              "These do not nullify the prayer, though they are disliked: reading writing with the eyes and understanding it, eating something between the teeth smaller than a chickpea, and someone passing in front, though the person who passes sins.",
              "It is disliked to leave out a wajib or sunna on purpose, to play with one's clothes or body, to brush away stones more than once, to crack or interlace the fingers, to put the hands on the hips, to turn the head, to rest the forearms on the ground in prostration, or to roll up the sleeves.",
              "It is disliked to pray in trousers alone when able to wear a shirt, to return a greeting by gesture, to sit cross-legged without reason, to have the hair tied up, to hold up the clothes when prostrating, to let a cloak hang without putting the arms through it, or to pray in work clothes or with the head uncovered except from humility.",
              "In recitation it is disliked to make the second rak'ah longer than the first, to repeat a surah within one rak'ah of an obligatory prayer, to recite surahs out of order, or to skip a single surah between two.",
              "It is disliked to close the eyes, look up at the sky, stretch, kill an ant without reason, cover the face, prostrate on a turban fold or on a picture of a living being without reason, or prostrate with the forehead alone.",
              "It is disliked to pray on a road, in a washroom, near a toilet, in a graveyard, on land without its owner's permission, near filth, facing people who are asleep, in clothes with pictures of living beings, or behind a row with a gap in it. It is disliked for the imam to stand alone in the mihrab or on a raised place."
            ],
            "terms": [
              [
                "Makruh",
                "المكروه",
                "Disliked: does not void the prayer but reduces it"
              ],
              [
                "Sadl",
                "السدل",
                "Letting a cloak hang over the shoulders without wearing it properly"
              ]
            ]
          },
          {
            "id": "sal-16",
            "title": "The sutra, cutting off prayer, and neglecting prayer",
            "ar": "السترة وقطع الصلاة وحكم تارك الصلاة",
            "ref": "pp. 196–200",
            "mins": 15,
            "summary": "This lesson covers the barrier placed in front of someone praying, what is not disliked in prayer, when a prayer may or must be broken off, and the ruling on someone who abandons prayer.",
            "points": [
              "Someone who expects people to pass in front of him should set up a barrier an arm's length or more high and a finger thick. He stands close to it, slightly to its right or left. If he has nothing, he draws a line in front of him.",
              "It is better not to push back someone passing. If he does, a man may gesture or say 'subhan Allah', but not both, or raise his voice in recitation. A woman claps with the back of her right hand on her left palm. Using force is not allowed.",
              "It is not disliked to wear a belt, carry a sword that does not distract, pray towards a Quran, a sword, someone's back or a lamp, pray on a carpet with pictures if one does not prostrate on them, or kill a snake or scorpion one fears.",
              "It is wajib to break off a prayer, even obligatory, to answer a desperate cry for help, but not the ordinary call of a parent. It is permissible to break it off to stop a thief taking a dirham's worth, or a wolf attacking sheep. A midwife must break it off if she fears for the child or mother.",
              "Deliberately abandoning prayer out of laziness is a grave sin, and the same applies to not fasting Ramadan. The book describes the punishment a legitimate Islamic court could impose (discipline and imprisonment until he prays). That is for a ruling authority only, never for individuals. He does not leave Islam unless he denies that prayer or Ramadan is obligatory, or mocks them."
            ],
            "terms": [
              [
                "Sutra",
                "السترة",
                "A barrier placed in front of someone praying"
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book II",
    "text": "nur"
  },
  {
    "id": "prayer-2",
    "title": "Prayer II: Witr, Voluntary and Special Prayers",
    "ar": "كتاب الصلاة",
    "book": "Book II",
    "pages": "201–281",
    "blurb": "The second half of the Book of Prayer covers witr, voluntary prayers, prayer while travelling or ill, making up missed prayers, the prostrations of forgetfulness and recitation, and the Friday, Eid, eclipse, rain and fear prayers.",
    "outcomes": [
      "Pray witr, the sunna prayers, tarawih and other voluntary prayers correctly",
      "Apply the rulings for travellers, the sick and anyone with missed prayers",
      "Know when the prostrations of forgetfulness, recitation and gratitude apply and how to perform them",
      "Understand the conditions and method of the Friday, Eid, eclipse, rain and fear prayers"
    ],
    "modules": [
      {
        "title": "Witr and voluntary prayers",
        "ar": "باب الوتر والنوافل",
        "lessons": [
          {
            "id": "slt-01",
            "title": "The witr prayer",
            "ar": "صلاة الوتر",
            "ref": "pp. 201–204",
            "mins": 16,
            "summary": "Witr is a wajib prayer of three rak'ahs prayed after 'isha. This lesson covers how it is prayed, the qunut supplication, and what to do if the qunut is forgotten.",
            "points": [
              "Witr is wajib according to Abu Hanifa. It is three rak'ahs with one salam at the end. Whoever denies it is not a disbeliever, because it is established by the sunna. The adhan and iqama of 'isha are enough for it.",
              "The Fatiha and a surah are wajib in every rak'ah. One sits after the second rak'ah and recites only the tashahhud, and does not recite the opening praise in the third.",
              "After the surah in the third rak'ah, one raises the hands to the ears, says Allahu akbar and recites the qunut standing before bowing, every day of the year. The qunut is not recited in any prayer other than witr.",
              "The qunut begins 'O Allah, we seek Your help and Your forgiveness'. Someone who does not know it says 'O Allah, forgive me' three times, or 'Our Lord, give us good in this world and good in the next'.",
              "If someone forgets the qunut and remembers in bowing, he does not go back to it but does the prostration of forgetfulness. A latecomer who catches the imam in the third rak'ah counts as having caught the qunut.",
              "Witr is prayed in congregation only in Ramadan. In Ramadan praying it in congregation is better than alone at the end of the night, which Qadikhan called the soundest view."
            ],
            "terms": [
              [
                "Witr",
                "الوتر",
                "The odd-numbered prayer of three rak'ahs after 'isha"
              ],
              [
                "Qunut",
                "القنوت",
                "The supplication recited standing in the third rak'ah of witr"
              ]
            ]
          },
          {
            "id": "slt-02",
            "title": "Sunna prayers and other voluntary prayers",
            "ar": "السنن والنوافل",
            "ref": "pp. 205–210",
            "mins": 18,
            "summary": "Voluntary prayers range from the emphasised sunnas tied to the daily prayers to prayers for particular occasions. This lesson lists them and explains how they are prayed.",
            "points": [
              "The emphasised sunnas are two rak'ahs before fajr, the most emphasised of all, four before dhuhr, two after dhuhr, maghrib and 'isha, and four before and after the Friday prayer.",
              "Recommended sunnas are four before 'asr, four before and after 'isha, and six after maghrib.",
              "In a four-rak'ah emphasised sunna, the first sitting has only the tashahhud and the third rak'ah does not begin with the opening praise. In an ordinary four-rak'ah voluntary prayer, the opening praise and seeking refuge are repeated in the third rak'ah.",
              "It is disliked to pray more than four voluntary rak'ahs with one salam in the day or more than eight at night. Abu Hanifa held fours to be best. The two companions held pairs to be best at night, and the fatwa is on their view. Night prayer is better than day prayer, and long standing is better than many prostrations.",
              "It is sunna to greet the mosque with two rak'ahs before sitting, and any prayer offered on entering takes its place. Also recommended: two rak'ahs after wudu, duha of four or more rak'ahs between sunrise and the zenith, night prayer of at least eight rak'ahs, the istikhara prayer and the prayer of need.",
              "It is recommended to stay up in worship on the last ten nights of Ramadan, the nights of both Eids, the first ten nights of Dhu al-Hijjah and the middle night of Sha'ban, but it is disliked to gather in mosques to do so."
            ],
            "terms": [
              [
                "Nafl",
                "النفل",
                "Voluntary prayer: extra to what is required"
              ],
              [
                "Tahiyyat al-masjid",
                "تحية المسجد",
                "Two rak'ahs greeting the mosque on entering"
              ],
              [
                "Duha",
                "الضحى",
                "The mid-morning voluntary prayer"
              ]
            ]
          },
          {
            "id": "slt-03",
            "title": "Praying seated, on a mount, and on a ship",
            "ar": "النفل جالساً والصلاة على الدابة وفي السفينة",
            "ref": "pp. 210–215",
            "mins": 17,
            "summary": "Voluntary prayer allows ease that obligatory prayer does not. This lesson covers praying seated, praying while riding, and prayer on a ship.",
            "points": [
              "A voluntary prayer may be prayed seated even by someone able to stand, but with half the reward unless there is a reason. It may be started standing and finished sitting, according to Abu Hanifa.",
              "Once past the buildings of his town, a person may pray voluntary prayers on his mount, nodding, in whatever direction it faces, including the emphasised sunnas. Prayer while walking is not valid by consensus.",
              "Obligatory and wajib prayers, such as witr, a vowed prayer or a spoilt voluntary prayer, and the funeral prayer are not valid on a mount, except out of necessity: fear for oneself, the animal or one's belongings, a predator, deep mud, or being unable to remount.",
              "Praying in a carriage fixed on an animal is like praying on its back. If the carriage is propped on posts to rest on the ground, it counts as ground and the obligatory prayer must be prayed standing.",
              "Abu Hanifa allowed praying an obligatory prayer seated on a moving ship without excuse, with full bowing and prostration. The two companions required standing unless there is an excuse such as dizziness, and the text calls their view the more evident. Nodding is not allowed for someone able to bow and prostrate.",
              "On a sailing ship one faces the qibla at the start and turns back towards it every time the ship changes direction."
            ]
          },
          {
            "id": "slt-04",
            "title": "Tarawih, and prayer inside the Ka'bah",
            "ar": "التراويح والصلاة في الكعبة",
            "ref": "pp. 215–218",
            "mins": 15,
            "summary": "Tarawih is the Ramadan night prayer. The lesson ends with the rules for praying inside, on top of and around the Ka'bah.",
            "points": [
              "Tarawih is sunna for men and women, an emphasised sunna according to Abu Hanifa. Praying it in congregation is a communal sunna. Its time is after 'isha until dawn, and witr is best prayed after it.",
              "Tarawih is twenty rak'ahs with ten salams. It is recommended to sit after every four rak'ahs for as long as they took, and likewise between the last of them and witr.",
              "It is sunna to complete the Quran once in tarawih during Ramadan. If people find that too heavy, the imam recites what will not drive them away, and the fatwa is on this. The ibrahimiyya, opening praise and tasbihs should not be dropped, but the supplication before salam may be.",
              "A missed tarawih is not made up. If someone prays it later, it counts as a voluntary prayer.",
              "Obligatory and voluntary prayers are valid inside the Ka'bah and on its roof, though praying on the roof is disliked. In congregation inside, a follower's prayer is valid in any direction unless his back faces the imam's face, which puts him ahead of the imam.",
              "Following an imam inside the Ka'bah from outside is valid if the follower knows the imam's movements. Praying in a circle around the Ka'bah is valid for all, except someone ahead of the imam on the imam's own side."
            ],
            "terms": [
              [
                "Tarawih",
                "التراويح",
                "The Ramadan night prayer, named after the rest taken after every four rak'ahs"
              ]
            ]
          }
        ]
      },
      {
        "title": "The traveller and the sick",
        "ar": "صلاة المسافر والمريض",
        "lessons": [
          {
            "id": "slt-05",
            "title": "The traveller's prayer: who shortens and when",
            "ar": "صلاة المسافر: المسافة والقصر",
            "ref": "pp. 219–222",
            "mins": 16,
            "summary": "A traveller shortens the four-rak'ah prayers to two. This lesson covers how far counts as travel, when shortening starts, and why shortening is obligatory in the Hanafi school.",
            "points": [
              "The shortest journey that changes the rulings is three days' travel in the shortest days of the year, at an average walking pace with rests. The translator's note reckons this as 81 km one way, by any means of transport.",
              "The traveller shortens the four-rak'ah prayers even if his journey is for a sinful purpose. He begins once he has passed the buildings of his town and the open land attached to them, such as a burial ground.",
              "The intention of travel needs three conditions: the person must decide for himself, be mature, and intend at least three days' travel. A child, or someone dependent on another's decision such as a soldier with his commander or a wife with her husband, does not shorten unless he knows the leader's intention and destination.",
              "Shortening is the original form of the traveller's prayer, not a concession, so in the Hanafi school it is wajib.",
              "If a traveller prays four rak'ahs and sat after the second, the prayer is valid but disliked, and the last two count as voluntary. If he did not sit after the second, the prayer is not valid, unless he intended to become resident when he stood for the third."
            ],
            "terms": [
              [
                "Qasr",
                "القصر",
                "Shortening a four-rak'ah prayer to two"
              ],
              [
                "'Azima",
                "العزيمة",
                "An original ruling, as opposed to a concession"
              ],
              [
                "Fina'",
                "الفناء",
                "Open land attached to a town and used for its benefit"
              ]
            ]
          },
          {
            "id": "slt-06",
            "title": "The traveller's prayer: residence and homeland",
            "ar": "مدة القصر والوطن",
            "ref": "pp. 223–226",
            "mins": 15,
            "summary": "A traveller keeps shortening until he returns home or intends to stay long enough. This lesson covers residence, following a resident imam, making up prayers, and the types of home.",
            "points": [
              "A traveller shortens until he re-enters his home town or intends to stay fifteen days in one town or village. If he intends less, or does not know how long he will stay, he keeps shortening even for years.",
              "An intention to stay is not valid for two towns without choosing one, for the desert except for people who live in tents, or for soldiers in enemy land or besieging a town.",
              "A traveller who follows a resident imam within the time completes four rak'ahs with him. He may not follow a resident in a four-rak'ah prayer after its time has ended. A traveller may lead residents in both cases, and tells them to complete their prayer as he is travelling.",
              "A prayer missed while travelling is made up as two rak'ahs even at home, and one missed while resident is made up as four even while travelling. What counts is the person's state at the end of the prayer's time.",
              "A permanent home, where one was born or married or intends to live, is only replaced by another permanent home. A temporary residence of fifteen days or more ends by moving to another, setting out on a journey, or returning home."
            ],
            "terms": [
              [
                "Watan asli",
                "الوطن الأصلي",
                "Permanent home: where one was born, married or settled"
              ],
              [
                "Watan al-iqama",
                "وطن الإقامة",
                "Temporary residence: a place one intends to stay fifteen days or more"
              ]
            ]
          },
          {
            "id": "slt-07",
            "title": "The sick person's prayer, and fidya for missed prayers",
            "ar": "صلاة المريض والفدية",
            "ref": "pp. 227–232",
            "mins": 20,
            "summary": "Illness changes how a person prays but rarely removes the prayer. The book then explains when a dying person must leave a will for missed prayers and fasts, and how the fidya is paid.",
            "points": [
              "Someone unable to stand, or for whom standing brings severe pain or worsens his illness, prays seated with bowing and prostration, sitting however he likes. If he can stand for part of the prayer, he does so.",
              "Someone unable to bow or prostrate prays seated and nods, making the nod for prostration lower than for bowing, or the prayer is invalid. He must not raise something to his face to prostrate on. If sitting is hard, he lies on his back, which is better, or his side, with a pillow under his head so his face is towards the qibla.",
              "Nodding is with the head only, not the eyes, eyebrows or heart. Someone unable even to nod postpones the prayer. If this lasts for five prayers or fewer they are made up; if more, they are not, according to the soundest view. The same applies to insanity or fainting.",
              "Someone who began nodding and then becomes able to bow and prostrate must start again. Someone who began sitting with bowing and prostration and recovers continues.",
              "A person who could have made up missed fasts or prayers but did not must leave a will for his heirs to pay fidya from a third of his estate: half a sa' of wheat or its value for each prayer, including witr, and each day of fasting. Without a will the heirs need not pay but may. No one may fast or pray on behalf of the dead.",
              "If the estate is not enough, the heir gives what there is to a poor person, who gives it back as a gift, and the heir gives it again, until the debt is cleared. All the fidya for prayers may go to one poor person."
            ],
            "terms": [
              [
                "Ima'",
                "الإيماء",
                "Praying by nodding the head for bowing and prostration"
              ],
              [
                "Fidya",
                "الفدية",
                "A payment of food or its value for each missed prayer or fast"
              ]
            ]
          }
        ]
      },
      {
        "title": "Missed prayers and catching the congregation",
        "ar": "قضاء الفوائت وإدراك الفريضة",
        "lessons": [
          {
            "id": "slt-08",
            "title": "Making up missed prayers in order",
            "ar": "الترتيب في قضاء الفوائت",
            "ref": "pp. 233–235",
            "mins": 14,
            "summary": "Missed prayers must normally be made up in order, before the current prayer. This lesson explains when that order applies and the three things that excuse it.",
            "points": [
              "It is necessary to keep the order between a missed prayer and the current one, and between missed prayers themselves when they are fewer than six. Someone who missed fajr, dhuhr, 'asr and maghrib prays them in that order, then 'isha.",
              "The order is excused in three cases: when the preferred time is too short for the missed prayers and the current one, when the missed prayer is forgotten, and when the missed prayers reach six, not counting witr.",
              "Once the order is excused it stays excused, even if the missed prayers are reduced below six, and missing a new prayer does not bring it back, according to the soundest view.",
              "If someone prays while remembering a missed prayer, his prayers are held in suspense. According to Abu Hanifa, once the sixth prayer's time enters without him having made up the missed one, all of them become valid.",
              "Someone with many missed prayers makes them up until he is fairly sure he is clear. He may specify each one as, for example, the first dhuhr he owes, or the last.",
              "Someone who became Muslim in enemy lands and did not know the obligations is excused from making up what he missed."
            ],
            "terms": [
              [
                "Qada'",
                "القضاء",
                "Making up a prayer after its time has gone"
              ],
              [
                "Tartib",
                "الترتيب",
                "Keeping missed and current prayers in their order"
              ]
            ]
          },
          {
            "id": "slt-09",
            "title": "Catching the congregation and making up sunnas",
            "ar": "إدراك الفريضة وقضاء السنن",
            "ref": "pp. 236–240",
            "mins": 17,
            "summary": "What to do when a congregation starts while you are already praying alone, how to catch a rak'ah, and which sunnas can be made up.",
            "points": [
              "Someone praying an obligatory prayer alone when the congregation starts breaks it off with a salam while standing, if he has not yet prostrated. In fajr or maghrib he breaks it off even after prostrating in the first rak'ah. In a four-rak'ah prayer, after prostrating, he adds a second rak'ah, gives salam so it counts as voluntary, and then joins.",
              "If he has prayed three rak'ahs of four, he completes his prayer, then joins the congregation with the intention of a voluntary prayer, except in 'asr and fajr, after which voluntary prayer is not allowed.",
              "Someone praying the Friday sunna when the imam comes out, or the dhuhr sunna when the iqama is given, gives salam after two rak'ahs and completes the sunna after the obligatory prayer.",
              "Someone who arrives while the imam is praying joins him and does not pray the sunna first, except the fajr sunna if he is sure he will still catch the imam, even only the tashahhud. He prays it away from the rows.",
              "The fajr sunna is made up only together with fajr itself. The four rak'ahs before dhuhr are made up after dhuhr, before its two-rak'ah sunna, within dhuhr time.",
              "A rak'ah is caught only by joining the imam in bowing before he rises. Leaving the mosque after the adhan before praying is disliked, unless one leads another congregation."
            ]
          }
        ]
      },
      {
        "title": "The prostrations",
        "ar": "باب سجود السهو والتلاوة والشكر",
        "lessons": [
          {
            "id": "slt-10",
            "title": "The prostration of forgetfulness",
            "ar": "سجود السهو",
            "ref": "pp. 240–245",
            "mins": 20,
            "summary": "Two prostrations after the salam repair a prayer in which a wajib act was missed by mistake. This lesson covers when they are due, how to do them, and how they apply to followers and latecomers.",
            "points": [
              "Forgetfully leaving out a wajib act requires two prostrations, then the tashahhud and salams, once only even for several mistakes. After the last tashahhud one gives one salam to the right, makes two prostrations, then recites the tashahhud, ibrahimiyya and supplication, and gives the closing salams. Doing them before the salam is somewhat disliked.",
              "Leaving out a wajib act on purpose is sinful and the prayer must be repeated. The prostrations are still required, though, if one deliberately leaves the first sitting, delays a prostration of the first rak'ah to the end, or stops to think for the length of a pillar.",
              "They are dropped if the sun rises after the salam of fajr, if the sun changes colour after the salam of 'asr, or if one does anything after the salam that ends the prayer, such as speaking.",
              "The imam's mistake binds his followers, but a follower's own mistake binds nobody. A latecomer prostrates with the imam, then stands to make up, and does the prostrations again if he makes his own mistake. The imam does not do them in the Friday and Eid prayers, to avoid confusion in large crowds.",
              "Someone who forgets the first sitting goes back to it if he has not fully stood up, and does the prostrations if he was closer to standing. A follower goes back even if he had stood up.",
              "Someone who stands for a fifth rak'ah without the last sitting goes back if he has not prostrated in it, and does the prostrations. If he prostrates in the fifth, his obligatory prayer becomes voluntary and he adds a sixth rak'ah. If he had done the last sitting, he goes back and gives salam, or if he already prostrated in the fifth, adds a rak'ah and does the prostrations."
            ],
            "terms": [
              [
                "Sujud al-sahw",
                "سجود السهو",
                "The prostrations of forgetfulness that repair a mistake in prayer"
              ],
              [
                "Masbuq",
                "المسبوق",
                "A latecomer who missed the start of the congregation"
              ]
            ]
          },
          {
            "id": "slt-11",
            "title": "Further cases, and doubt in prayer",
            "ar": "فروع السهو والشك",
            "ref": "pp. 245–248",
            "mins": 14,
            "summary": "More cases of forgetfulness, and what to do when unsure how many rak'ahs have been prayed.",
            "points": [
              "Someone who gives salam after two rak'ahs of a three or four-rak'ah prayer, thinking he has finished, completes the missing rak'ahs and does the prostrations of forgetfulness.",
              "Someone who gives salam on purpose while owing the prostrations still does them, as long as he has not turned from the qibla, spoken or left the mosque.",
              "Someone lost in thought who delays the final salam for the length of a pillar must do the prostrations of forgetfulness.",
              "If someone doubts how many rak'ahs he has prayed, and this is the first time or such doubt is not a habit for him, the prayer is void and he starts again. He ends it with an action, not with intention alone.",
              "If such doubt is frequent, he acts on what he thinks most likely. If he has no leaning, he builds on the smaller number, sits for the tashahhud at every point that could be the end, and does the prostrations of forgetfulness.",
              "Doubt after the salam is ignored unless one is certain something was missed. Certainty is not removed by doubt: someone sure he had wudu and unsure whether he broke it is still in wudu."
            ],
            "terms": [
              [
                "Shakk",
                "الشك",
                "Doubt"
              ]
            ]
          },
          {
            "id": "slt-12",
            "title": "The recital prostration: who prostrates and when",
            "ar": "سجود التلاوة: سببه وحكمه",
            "ref": "pp. 248–252",
            "mins": 18,
            "summary": "Fourteen verses of the Quran require a prostration from the person who recites them and the person who hears them. This lesson covers who must prostrate and how it fits into a prayer.",
            "points": [
              "The recital prostration is wajib on the reciter and on the listener, even if he did not mean to listen and does not understand. It is not wajib on a woman in menstruation or postnatal bleeding.",
              "The verses are in fourteen surahs: al-A'raf, ar-Ra'd, an-Nahl, al-Isra', Maryam, the first prostration of al-Hajj, al-Furqan, an-Naml, as-Sajda, Sad, Fussilat, an-Najm, al-Inshiqaq and al-'Alaq.",
              "An imam and followers who hear the verse from one of the followers do not prostrate. If they hear it from someone outside the prayer, they prostrate after the prayer. It is not required for a verse heard from a bird or an echo.",
              "Outside prayer the prostration may be delayed, but delaying it without excuse is somewhat disliked. Inside prayer it must be done straight away.",
              "If the verse ends the recitation, or no more than two verses follow it, the prayer's own bowing fulfils it if intended, and the prayer's own prostration fulfils it even without intention. If three or more verses follow, a separate prostration is needed, followed by some recitation before bowing.",
              "In a silent prayer it is better for the imam to fulfil it within the bowing, so that the followers are not confused."
            ],
            "terms": [
              [
                "Sajdat al-tilawa",
                "سجدة التلاوة",
                "The prostration for reciting or hearing certain verses"
              ]
            ]
          },
          {
            "id": "slt-13",
            "title": "The recital prostration in practice, and the prostration of gratitude",
            "ar": "تداخل سجود التلاوة وسجدة الشكر",
            "ref": "pp. 252–257",
            "mins": 16,
            "summary": "How one prostration can cover repeated recitations, how the prostration is performed, and the ruling on prostrating out of gratitude.",
            "points": [
              "Someone who hears the verse from an imam but does not join, or joins in a later rak'ah, prostrates after the prayer. If he joins before the imam prostrates, he prostrates with him. A verse recited in prayer whose prostration is not done in the prayer cannot be made up afterwards.",
              "One prostration covers a verse repeated in the same sitting. The sitting changes by walking three steps on open land, moving from one branch to another, or swimming. It does not change by moving within a small house or a mosque, being on a ship, or eating two mouthfuls.",
              "Its conditions are those of prayer, except for the opening takbir. One makes a single prostration between two takbirs, saying 'Glory be to my Lord the Most High' three times, with no tashahhud or salam.",
              "It is disliked to recite a surah and skip its prostration verse, but not to recite the verse alone. It is recommended to recite it quietly if those present are not ready to prostrate, and to stand before going down into the prostration.",
              "Abu Hanifa held the prostration of gratitude to be disliked and unrewarded. The two companions held it to be an act of worship that is rewarded. It is done like the recital prostration, with the same conditions."
            ],
            "terms": [
              [
                "Majlis",
                "المجلس",
                "A sitting: the place where the verse was recited or heard"
              ],
              [
                "Sajdat al-shukr",
                "سجدة الشكر",
                "A prostration made in gratitude for a blessing"
              ]
            ]
          }
        ]
      },
      {
        "title": "Friday and Eid",
        "ar": "باب الجمعة والعيدين",
        "lessons": [
          {
            "id": "slt-14",
            "title": "The Friday prayer: who must attend and when it is valid",
            "ar": "شروط وجوب الجمعة وصحتها",
            "ref": "pp. 258–261",
            "mins": 16,
            "summary": "The Friday prayer is an individual obligation established by the Quran, sunna and consensus, and whoever rejects it is not a believer. This lesson covers who it is due on and what makes it valid.",
            "points": [
              "It is obligatory on someone who meets seven conditions: male, free, resident in a city or its surrounding area, healthy, safe from an oppressor, able to see, according to Abu Hanifa, and able to walk.",
              "It is not obligatory on a traveller, though it is preferred that he attends if he hears the call. Someone living in a small village outside the city is not obliged.",
              "It is valid only with six conditions: a city or its surroundings, the ruler or his deputy leading it, the time of dhuhr, a sermon before the prayer within its time and given for the Friday prayer, open access for the public, and a group.",
              "The group is three men besides the imam, who must stay with him until the first prostration. Women and boys do not count towards the three. A slave, sick person or traveller may lead it with the ruler's permission.",
              "If 'asr time enters during the Friday prayer, it is void. At least one person obliged to attend must be present to hear the sermon.",
              "A city, according to Abu Hanifa, is a place with a governor and judge who carry out the law and its penalties, with as many buildings as Mina, according to the most evident view."
            ],
            "terms": [
              [
                "Jumu'a",
                "الجمعة",
                "The Friday congregational prayer"
              ],
              [
                "Misr",
                "المصر",
                "A city in the legal sense, where the Friday prayer is held"
              ]
            ]
          },
          {
            "id": "slt-15",
            "title": "The Friday sermon and its etiquette",
            "ar": "الخطبة وسننها وآداب الجمعة",
            "ref": "pp. 261–266",
            "mins": 18,
            "summary": "The sermon has eighteen sunnas and strict rules on silence. This lesson also covers people who miss or are excused from the Friday prayer.",
            "points": [
              "A sermon of a single 'subhan Allah' or 'al-hamdu lillah' is valid but disliked, as the sunna has not been fulfilled.",
              "Among its sunnas: the imam is pure and covered, sits on the pulpit while the adhan is given in front of him, then stands facing the people. He begins with praise of Allah, the two shahadas and blessings on the Prophet ﷺ, gives advice and reminders, recites a verse, and gives two sermons with a sitting of three verses' length between them.",
              "In the second sermon he repeats the praise and blessings and prays for the believing men and women. The two sermons are kept to the length of a surah from the long part of the mufassal. Lengthening them or leaving one of their sunnas is disliked.",
              "It is obligatory to set off for the Friday prayer and stop buying and selling at the first adhan, and to walk there calmly.",
              "Once the imam comes out there is no prayer and no talking until the Friday prayer is finished, according to Abu Hanifa, whether one is near or far. One does not return a greeting or reply to a sneeze, and sends blessings on the Prophet ﷺ silently if the imam mentions him.",
              "Someone who prays dhuhr before the Friday prayer without excuse has done wrong, and if he then sets off towards the Friday prayer his dhuhr is cancelled. People excused from the Friday prayer should pray dhuhr alone after it, not in a group in the city. Someone who joins the imam even in the last tashahhud completes the Friday prayer."
            ],
            "terms": [
              [
                "Khutba",
                "الخطبة",
                "The sermon"
              ]
            ]
          },
          {
            "id": "slt-16",
            "title": "The Eid prayers",
            "ar": "صلاة العيدين",
            "ref": "pp. 267–271",
            "mins": 18,
            "summary": "The Eid prayer is wajib on everyone who must attend the Friday prayer. This lesson covers the recommended acts of Eid al-Fitr, the time of the prayer, and how it is performed.",
            "points": [
              "Eid prayer is wajib on those obliged to attend the Friday prayer, with the same conditions except the sermon, which is a sunna given after the prayer. It is valid with one person besides the imam. Giving the sermon first is contrary to the sunna.",
              "On Eid al-Fitr it is recommended to eat an odd number of dates before leaving, bathe, use the miswak, wear perfume and one's best clothes, pay sadaqat al-fitr before the prayer, show happiness, give extra charity, wake early and arrive early.",
              "One prays fajr in the local mosque, walks to the Eid prayer saying the takbir quietly, and returns by a different road. Voluntary prayer is disliked at the prayer site before and after the Eid prayer, and at home before it.",
              "Its time is from when the sun has risen a spear's length or two until just before midday.",
              "After the opening takbir and opening praise, three extra takbirs are said with the hands raised for each, then the recitation. In the second rak'ah the recitation comes first, then three extra takbirs with the hands raised, then the takbir for bowing. Two sermons follow, teaching the rules of sadaqat al-fitr.",
              "Someone who misses the Eid prayer with the imam does not make it up alone. If there is an excuse, Eid al-Fitr prayer may be delayed to the next day only."
            ],
            "terms": [
              [
                "Takbirat al-zawa'id",
                "التكبيرات الزوائد",
                "The extra takbirs of the Eid prayer"
              ],
              [
                "Sadaqat al-fitr",
                "صدقة الفطر",
                "The charity due at the end of Ramadan"
              ]
            ]
          },
          {
            "id": "slt-17",
            "title": "Eid al-Adha and the takbir of tashriq",
            "ar": "أحكام الأضحى وتكبير التشريق",
            "ref": "pp. 271–274",
            "mins": 14,
            "summary": "Eid al-Adha follows the rules of Eid al-Fitr with a few differences. The takbir of tashriq is said after the obligatory prayers around the day of Arafah.",
            "points": [
              "On Eid al-Adha one delays eating until after the prayer, though eating before is not disliked, and says the takbir aloud on the way. In the sermon the imam teaches the rules of sacrifice and of the takbir of tashriq. With an excuse, the prayer may be delayed up to three days.",
              "The days of sacrifice are the 10th, 11th and 12th of Dhu al-Hijjah, and the days of tashriq are the 11th, 12th and 13th.",
              "Gathering elsewhere to copy the pilgrims standing at Arafah is a prohibitively disliked innovation, and circling any building other than the Ka'bah is unlawful.",
              "According to Abu Hanifa, the takbir of tashriq is wajib once straight after each obligatory prayer prayed in congregation, from fajr on the day of Arafah until 'asr on the day of Eid, on a resident imam in a city and those following him. Women following a man say it silently.",
              "Abu Yusuf and Muhammad held it wajib after every obligatory prayer for everyone, even alone, travelling or in a village, until 'asr of the last day of tashriq. This is the adopted practice and the fatwa is on it.",
              "The takbir is: Allah is the Greatest, Allah is the Greatest, there is no god but Allah, Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise."
            ],
            "terms": [
              [
                "Ayyam al-tashriq",
                "أيام التشريق",
                "The 11th to 13th of Dhu al-Hijjah"
              ],
              [
                "Takbir al-tashriq",
                "تكبير التشريق",
                "The takbir said after obligatory prayers around Eid al-Adha"
              ]
            ]
          }
        ]
      },
      {
        "title": "Prayers for special circumstances",
        "ar": "الكسوف والاستسقاء والخوف",
        "lessons": [
          {
            "id": "slt-18",
            "title": "The eclipse prayer and the prayer for rain",
            "ar": "صلاة الكسوف والاستسقاء",
            "ref": "pp. 275–279",
            "mins": 17,
            "summary": "Eclipses and other frightening events are met with prayer and supplication. Drought is met mainly with seeking forgiveness, and the imam may also lead a prayer.",
            "points": [
              "When the sun is eclipsed it is sunna to pray two rak'ahs like a voluntary prayer, led by the imam of the Friday prayer or the ruler's deputy, otherwise individually. There is no adhan, iqama or sermon, and recitation is silent. People are called with 'the prayer is gathering'.",
              "It is sunna to lengthen the recitation, for example with al-Baqarah, and the bowing and prostration. Then the imam supplicates, seated facing the qibla or, better, standing facing the people, while they say amin, until the sun clears.",
              "A lunar eclipse is prayed individually, as are prayers for darkness in the day, strong wind, and frightening events such as earthquakes.",
              "Abu Hanifa held the rain prayer to be lawful and prayed individually but not a sunna, as the essence of seeking rain is asking forgiveness. The two companions held the imam leads two rak'ahs with loud recitation like Eid but without extra takbirs, then gives a sermon. It is up to the imam whether to pray.",
              "People go out for three days, walking in worn, washed clothes, humble with heads lowered, after giving charity and renewing repentance, bringing the elderly, children and animals. In Makkah, Jerusalem and Madina they gather in the sacred mosques instead.",
              "The imam faces the qibla and raises his hands while people sit and say amin. According to Abu Hanifa the cloak is not turned around. Non-Muslims are not to take part."
            ],
            "terms": [
              [
                "Kusuf",
                "الكسوف",
                "Solar eclipse"
              ],
              [
                "Khusuf",
                "الخسوف",
                "Lunar eclipse"
              ],
              [
                "Istisqa'",
                "الاستسقاء",
                "Asking Allah for rain"
              ]
            ]
          },
          {
            "id": "slt-19",
            "title": "The fear prayer",
            "ar": "صلاة الخوف",
            "ref": "pp. 279–281",
            "mins": 12,
            "summary": "When an enemy is present, the congregation can be divided so that half keep watch while half pray, and each half completes its prayer in turn.",
            "points": [
              "The fear prayer is permitted when an enemy or predator is present, even if the fear is not great, and when one fears drowning or burning.",
              "The people split into two groups. One faces the enemy while the other prays the first rak'ah with the imam, or the first two rak'ahs of a four-rak'ah prayer or maghrib, then walks back to face the enemy. Riding, or walking in another direction, voids their prayer.",
              "The second group then comes and prays the rest with the imam, who gives salam alone, and they walk back to the enemy.",
              "The first group returns and completes its prayer without recitation, because the imam's recitation counts for them. Then the second group completes its prayer with recitation, because they are latecomers.",
              "If the fear becomes intense, each person prays alone, riding and nodding. Dividing the prayer this way is only permitted when an enemy is present. Carrying weapons during it is recommended.",
              "If the people are not anxious about praying behind one imam, it is best that each group prays the whole prayer behind its own imam, as in normal conditions."
            ],
            "terms": [
              [
                "Salat al-khawf",
                "صلاة الخوف",
                "The prayer in danger, with the congregation divided"
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book II",
    "text": "nur"
  },
  {
    "id": "funerals",
    "title": "Funerals",
    "ar": "كتاب الجنائز",
    "book": "Book III",
    "pages": "284–316",
    "blurb": "What to do when a Muslim is dying and after death: washing, shrouding, the funeral prayer, carrying the bier, burial, visiting graves and the rules of the martyr. These are duties the community owes every Muslim who dies.",
    "outcomes": [
      "Describe how to care for a dying person and the first steps after death.",
      "Explain how the deceased is washed and shrouded, and who may wash whom.",
      "Perform the funeral prayer and state its ruling, pillars, conditions and sunan.",
      "Explain the sunna of carrying the bier, burial, condolence and visiting graves, and the rules of the martyr."
    ],
    "modules": [
      {
        "title": "The dying person",
        "ar": "أحكام المحتضر",
        "lessons": [
          {
            "id": "jan-01",
            "title": "Caring for the dying and the moment of death",
            "ar": "المحتضر وما يفعل به",
            "ref": "pp. 285–288",
            "mins": 15,
            "summary": "The sunna ways of caring for someone close to death, prompting them gently with the testimony of faith, and what is done once they have died. The section ends with announcing the death and hurrying the preparations.",
            "points": [
              "It is sunna to turn the dying person onto his right side. Laying him on his back is also allowed, with the head raised slightly so the face points to the qibla and not the sky.",
              "It is sunna to prompt the dying person by saying 'There is no god but Allah' near him so he can repeat it. Do not tell him 'Say it' and do not insist, because the moment is hard and he may become annoyed.",
              "Prompting the deceased with the testimony and matters of belief after he has been placed in the grave (talqin) is legitimate in the Sacred Law. The person leading the burial is neither ordered to do it nor stopped from doing it.",
              "Relatives and neighbours should visit, recite Surah Ya-Sin, give him water and remind him of Allah's mercy.",
              "After death the jaw is tied with a wide bandage, the eyes are gently closed, the limbs are bent and straightened to keep them supple, and the hands are placed by the sides, not on the chest.",
              "Reciting Quran beside the body is disliked until it has been washed. There is no harm in announcing the death so more people pray, and it is recommended to hurry the preparation for burial."
            ],
            "terms": [
              [
                "Talqin",
                "تلقين",
                "Prompting a dying or buried person with the testimony of faith."
              ],
              [
                "Muhtadar",
                "محتضر",
                "A person on the point of death."
              ]
            ]
          }
        ]
      },
      {
        "title": "Washing the deceased",
        "ar": "غسل الميت",
        "lessons": [
          {
            "id": "jan-02",
            "title": "How the body is washed",
            "ar": "كيفية غسل الميت",
            "ref": "pp. 288–290",
            "mins": 18,
            "summary": "Step by step, the book describes how the body is placed, covered, given wudu and washed with water and sidr, then dried and perfumed. Some things are not done, such as cutting the hair or nails.",
            "points": [
              "The body is placed on a washing bench that has been scented an odd number of times, such as three, five or seven. The area from the navel to the knees is covered and the clothes removed.",
              "The deceased is given wudu without rinsing the mouth and nose. Someone who died in a state of major impurity, menstruation or postnatal bleeding has the mouth and nose rinsed gently. A young child who was not yet old enough to pray is not given wudu.",
              "Water boiled with sidr (lote tree leaves) is poured over the body, or plain water if there is none. The head and beard are washed with khitmi, a cleansing plant.",
              "The body is tilted onto the left side so the right side is washed first, then onto the right side. It is then propped up and the stomach gently pressed. Whatever comes out is washed away and the washing is not repeated.",
              "The body is dried with a cloth. Hanut (a scented compound) is put on the head and beard, and camphor on the places that touch the ground in prostration: forehead, nose, hands, knees and feet.",
              "Cotton is not placed in the body's openings. The hair and nails are not cut, trimmed or combed."
            ],
            "terms": [
              [
                "Sidr",
                "سدر",
                "Leaves of the lote tree, boiled in the washing water."
              ],
              [
                "Hanut",
                "حنوط",
                "A mixture of perfumes put on the deceased."
              ]
            ]
          },
          {
            "id": "jan-03",
            "title": "Who may wash whom, and who pays for the shroud",
            "ar": "من يغسل الميت ونفقة كفنه",
            "ref": "pp. 290–292",
            "mins": 13,
            "summary": "Which relatives may wash the deceased, what happens when no one of the same sex is present, and who bears the cost of the shroud.",
            "points": [
              "A wife may wash her deceased husband because she is still counted as his wife during her waiting period. A husband may not wash his deceased wife.",
              "If a woman dies among men only, or a man among women only, they give the deceased tayammum with a cloth wrapped round the hand. A mahram relative (one they could never marry) may give tayammum without a cloth.",
              "A man may wash a young girl who has not reached puberty, and a woman may wash a young boy, provided there is no desire.",
              "There is no harm in kissing the deceased out of love. The Prophet ﷺ kissed Uthman ibn Mazun after his death with tears in his eyes.",
              "A husband is responsible for preparing and shrouding his deceased wife, according to Abu Yusuf, which matches the fatwa.",
              "If the deceased left no money, the shroud is paid for by those who were obliged to support him. If there is no such person, it comes from the public treasury (bayt al-mal), and if that is not possible, from people able to help."
            ],
            "terms": [
              [
                "Mahram",
                "محرم",
                "A relative one can never marry, such as a parent, child or sibling."
              ],
              [
                "Bayt al-mal",
                "بيت المال",
                "The public treasury of the Muslims."
              ]
            ]
          }
        ]
      },
      {
        "title": "Shrouding",
        "ar": "الكفن",
        "lessons": [
          {
            "id": "jan-04",
            "title": "The shroud for a man and a woman",
            "ar": "كفن الرجل والمرأة",
            "ref": "pp. 292–294",
            "mins": 15,
            "summary": "Shrouding the deceased is obligatory. The book divides the shroud into three levels, sunna, sufficient and necessity, and explains how the cloths are wrapped for a man and for a woman.",
            "points": [
              "The sunna shroud for a man is three cloths: a shirt from the base of the neck to the feet, an inner wrapper (izar) from head to feet, and an outer wrapper (lifafah) longer than the body so it can be tied at both ends.",
              "The sufficient shroud for a man is the inner and outer wrapper. The necessity shroud is whatever is available, as when Mus'ab ibn Umair was shrouded in a single cloak at Uhud.",
              "The shroud should be of the quality the person wore in life on Eid or Friday, without extravagance. White cotton is best. The shirt has no sleeves, no opening and no pockets, and adding a turban is disliked.",
              "The outer wrapper is laid down first, then the inner wrapper, then the deceased is dressed in the shirt and laid on them. Each wrapper is folded from the left side first, then the right, and may be knotted if it might come loose.",
              "The sunna shroud for a woman is five pieces: shirt, head veil, inner wrapper, outer wrapper and a cloth tied over the chest. Her hair is put in two parts over her chest on top of the shirt, and the chest cloth is tied over the outer wrapper.",
              "The shrouds are scented an odd number of times before the body is placed in them."
            ],
            "terms": [
              [
                "Kafan",
                "كفن",
                "The shroud the deceased is wrapped in."
              ],
              [
                "Izar",
                "إزار",
                "The inner wrapper of the shroud, from head to feet."
              ],
              [
                "Lifafah",
                "لفافة",
                "The outer wrapper that covers the whole body."
              ]
            ]
          }
        ]
      },
      {
        "title": "The funeral prayer",
        "ar": "صلاة الجنازة",
        "lessons": [
          {
            "id": "jan-05",
            "title": "Ruling, pillars and conditions of the funeral prayer",
            "ar": "حكم صلاة الجنازة وأركانها وشروطها",
            "ref": "pp. 294–295",
            "mins": 12,
            "summary": "The funeral prayer is a communal obligation. It has two pillars and six conditions, some relating to the deceased and some to those praying.",
            "points": [
              "The prayer over the deceased is a communal obligation: if some people perform it, the rest are freed of the duty.",
              "Its pillars are the takbirs (saying 'Allahu akbar') and standing.",
              "The deceased must be a Muslim and must be pure, meaning the body, shroud and the place it lies are free of filth.",
              "The body must be placed in front of those praying, and the whole body or most of it must be present, or half of it with the head. The prayer is not performed over someone absent; the prayer over the Negus (Najashi) was special to him.",
              "Those praying must not be riding or sitting without a valid reason, because standing is a pillar.",
              "The body must be on the ground. If it is on an animal or held up by hands, the prayer is not valid unless there is a reason, such as very muddy ground."
            ],
            "terms": [
              [
                "Fard kifayah",
                "فرض كفاية",
                "A communal obligation: if some do it, the rest are freed of it."
              ],
              [
                "Janazah",
                "جنازة",
                "The deceased on the bier, and the funeral itself."
              ]
            ]
          },
          {
            "id": "jan-06",
            "title": "How the funeral prayer is performed",
            "ar": "كيفية صلاة الجنازة وسننها",
            "ref": "pp. 296–297, 301–302",
            "mins": 18,
            "summary": "The four sunan of the funeral prayer give it its shape: four takbirs with praise, blessings on the Prophet ﷺ and supplication between them. The lesson also covers the latecomer and praying in the mosque.",
            "points": [
              "The imam stands level with the chest of the deceased, whether male or female.",
              "After the first takbir one recites the opening praise (thana). After the second, the blessings on the Prophet ﷺ. After the third, one supplicates for the deceased, ideally with a supplication taught by the Prophet ﷺ such as the one Awf ibn Malik learnt. After the fourth, one gives the salams without a further supplication.",
              "The hands are raised only for the first takbir. If the imam says a fifth takbir, the followers do not follow him but wait for his salams.",
              "For a child or an insane person one does not ask forgiveness, since they have no sin. Instead one asks Allah to make the child a forerunner and a reward for the family.",
              "A latecomer who finds the imam between takbirs waits for the next takbir and joins with it, then makes up the missed takbirs after the salam before the body is lifted. Someone present at the opening takbir joins straight away.",
              "Performing the funeral prayer inside the congregational mosque is somewhat disliked, as is praying on the road or on people's land."
            ],
            "terms": [
              [
                "Thana",
                "ثناء",
                "The opening praise: 'Glory be to You, O Allah, and praise be to You...'"
              ],
              [
                "Takbir",
                "تكبير",
                "Saying 'Allahu akbar', Allah is the Greatest."
              ]
            ]
          },
          {
            "id": "jan-07",
            "title": "Who leads the prayer, and several funerals at once",
            "ar": "الأحق بالإمامة وتعدد الجنائز",
            "ref": "pp. 298–300",
            "mins": 14,
            "summary": "The order of people most entitled to lead the funeral prayer, what happens if someone else leads without permission, and how several bodies are arranged when prayed over together.",
            "points": [
              "The most entitled to lead is the ruler, then his deputy, then the judge, then the local imam, then the male guardian of the deceased. A woman or a boy has no right to lead it, and the father has more right than the son.",
              "The person most entitled may give permission to another. If someone with less right leads without permission, he may repeat the prayer if he wishes, but those who prayed the first time do not repeat it.",
              "The guardian's right comes before that of someone the deceased named in a will to lead his prayer, and the fatwa is on this view.",
              "If someone is buried without the prayer, it is prayed over the grave as long as the body is not thought to have decomposed. If only seven people are present, they form three rows behind the imam.",
              "With several bodies it is best to pray separately over each, starting with the most pious. One prayer for all is valid, with men placed nearest the imam, then boys, then hermaphrodites, then women.",
              "If several are buried in one grave out of necessity, the order is reversed so that the most virtuous is placed nearest the qibla."
            ],
            "terms": [
              [
                "Wali",
                "ولي",
                "The guardian, here the nearest male relative of the deceased."
              ]
            ]
          },
          {
            "id": "jan-08",
            "title": "Who is prayed over and who is not",
            "ar": "من يصلى عليه ومن لا يصلى عليه",
            "ref": "pp. 302–303",
            "mins": 12,
            "summary": "Special cases: newborns, children of non-Muslims, a non-Muslim relative, and certain wrongdoers over whom the prayer is not performed.",
            "points": [
              "A newborn who showed signs of life, such as crying, and then died is named, washed and prayed over. A baby who made no sound is washed, wrapped in a cloth, named and buried without the prayer.",
              "A child captured with a non-Muslim parent takes the parent's ruling and is not prayed over, unless a parent or the child accepts Islam, or the child was captured without his parents.",
              "If a non-Muslim dies and has a Muslim relative, the relative may wash him as one washes a dirty cloth, wrap him in a cloth and bury him, or hand him to people of his religion.",
              "There is no funeral prayer over a rebel against a just Muslim ruler, a highway robber killed in his crime, a murderer who strangled his victims, an armed aggressor at night who dies in that state, someone killed in tribal fighting, or someone who unjustly killed his parent.",
              "Someone who killed himself is washed and prayed over according to Abu Hanifa and Muhammad, which is the soundest view."
            ]
          }
        ]
      },
      {
        "title": "Carrying and burial",
        "ar": "حمل الجنازة والدفن",
        "lessons": [
          {
            "id": "jan-09",
            "title": "Carrying the bier and the funeral procession",
            "ar": "حمل الجنازة واتباعها",
            "ref": "pp. 304–305",
            "mins": 11,
            "summary": "The sunna way to carry the bier by its four corners, the pace of walking, where to walk and how to behave in the procession.",
            "points": [
              "It is sunna for four men to carry the bier, and for each person to carry it for forty steps: ten at each of the four corners, starting at the front right on the right shoulder.",
              "Carrying the bier to the grave on an animal without an excuse is disliked. A child's bier is carried by one person, with the carrier changing.",
              "It is recommended to walk quickly with the bier, but not so fast that the body shakes.",
              "Walking behind the bier is better than walking in front of it.",
              "Loud remembrance of Allah or loud Quran recitation while following the bier is disliked; one stays silent or remembers Allah quietly. Weeping quietly is no harm. Women joining the procession is disliked.",
              "It is disliked to sit down before the bier has been put down from people's shoulders."
            ]
          },
          {
            "id": "jan-10",
            "title": "The grave and the burial",
            "ar": "صفة القبر والدفن",
            "ref": "pp. 305–308",
            "mins": 17,
            "summary": "How deep the grave is dug, the lahd and the shaq, how the body is laid in the grave, how the grave is closed and shaped, and what may and may not be built on it.",
            "points": [
              "The grave is dug to half a man's height or up to his chest, and deeper is better.",
              "The lahd, a niche dug into the qibla side of the grave, is better than the shaq, a trench in the middle of the floor. In soft ground the shaq is preferred.",
              "The body is brought in from the qibla side. The one lowering it says 'In the name of Allah and upon the religion of the Messenger of Allah'. The deceased is laid on his right side facing the qibla and the knots of the shroud are untied.",
              "The niche is closed with unbaked bricks and cane. Baked bricks and wood are disliked. A woman's grave is screened with a sheet until it is closed, but not a man's unless there is a need.",
              "Earth is then filled in, and it is recommended to throw in three handfuls. The grave is raised in a hump, not flattened square.",
              "Building on a grave for decoration is unlawful and building to strengthen it is disliked. Marking or writing on it so it is not lost is no harm. Burying in houses or vaults is disliked, and several bodies may share a grave when needed, with soil between them."
            ],
            "terms": [
              [
                "Lahd",
                "لحد",
                "A niche dug into the qibla side at the bottom of the grave."
              ],
              [
                "Shaq",
                "شق",
                "A trench dug down the middle of the grave floor."
              ]
            ]
          },
          {
            "id": "jan-11",
            "title": "After the burial: moving bodies, condolence and food",
            "ar": "نقل الميت والتعزية",
            "ref": "pp. 308–311",
            "mins": 13,
            "summary": "Rules on burying at sea, moving the body, opening a grave, and how to treat the bereaved family, including condolence and preparing food.",
            "points": [
              "Someone who dies on a ship far from land, where the body may cause harm, is washed, shrouded, prayed over and placed in the sea.",
              "It is recommended to bury the deceased where he died. Moving him a mile or two is no harm, but more than that, or to another city or country, is disliked.",
              "Once buried, the body may not be moved, except for cases such as land taken by force whose owner wants it back. A grave may be opened to recover property that fell into it, but not because the body was placed facing the wrong way.",
              "Many later Hanafi scholars dislike gathering at the family's home to receive condolences, and the family making a feast for guests is disliked. Neighbours and distant relatives are recommended to prepare food for the family for a day and a night.",
              "Offering condolence is recommended for men, and for women where there is no fear of temptation. Once is enough."
            ],
            "terms": [
              [
                "Ta'ziyah",
                "تعزية",
                "Offering condolence and comfort to the bereaved."
              ]
            ]
          }
        ]
      },
      {
        "title": "Visiting graves",
        "ar": "زيارة القبور",
        "lessons": [
          {
            "id": "jan-12",
            "title": "Visiting graves and its etiquette",
            "ar": "زيارة القبور وآدابها",
            "ref": "pp. 311–313",
            "mins": 13,
            "summary": "Visiting graves is recommended because it reminds us of death. The lesson covers how to visit, gifting the reward of good deeds to the dead, and what is disliked at a grave.",
            "points": [
              "Visiting graves is recommended for men and women according to the soundest view. The sunna is to visit and supplicate while standing, as the Prophet ﷺ did at al-Baqi'.",
              "It is recommended to recite Surah Ya-Sin at the graves. A person may give the reward of his good deeds, such as charity, Hajj and Quran recitation, to the dead, and it reaches them.",
              "There is no harm in sitting by a grave to recite Quran, but sitting there for other reasons is disliked.",
              "Treading or walking on a grave and sleeping on it are disliked. Relieving oneself on a grave is prohibitively disliked.",
              "Pulling up fresh grass or plants from graves is disliked because they glorify Allah while green. Removing dry grass is no harm."
            ]
          }
        ]
      },
      {
        "title": "Martyrdom",
        "ar": "الشهيد",
        "lessons": [
          {
            "id": "jan-13",
            "title": "The martyr and how he is treated",
            "ar": "الشهيد وأحكامه",
            "ref": "pp. 313–316",
            "mins": 16,
            "summary": "Who counts as a martyr in Islamic law, why the complete martyr is not washed, and which martyrs are washed like everyone else while still receiving the martyr's reward in the hereafter.",
            "points": [
              "A martyr (shahid) is a Muslim who is killed by enemy fighters, rebels or highway robbers, by a thief in his home, is found dead on the battlefield with signs of injury, or is killed unjustly by a Muslim with a sharp weapon.",
              "For the full ruling he must be sane, adult, free from major impurity, menstruation and postnatal bleeding, and must die before the battle ends without benefiting from life.",
              "The complete martyr is not washed. He is shrouded in his own clothes and blood, after removing weapons, armour and the like, and is prayed over. Clothes may be added or removed to meet the sunna shroud, but removing all his clothes is disliked.",
              "According to Abu Hanifa, a martyr killed in major impurity, a boy or an insane person is washed.",
              "Someone who lives on after the battle and eats, drinks, sleeps, receives treatment, is carried off alive or a prayer time passes while he is conscious (irtithath) is washed, though he still has the martyr's reward.",
              "Martyrs of the hereafter only, such as those who drown, burn, die under a collapsing wall or die seeking knowledge, are washed, shrouded and prayed over like others."
            ],
            "terms": [
              [
                "Shahid",
                "شهيد",
                "A martyr."
              ],
              [
                "Irtithath",
                "ارتثاث",
                "Benefiting from life after being wounded, such as eating or receiving treatment, before dying."
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book III",
    "text": "nur"
  },
  {
    "id": "fasting",
    "title": "Fasting",
    "ar": "كتاب الصوم",
    "book": "Book IV",
    "pages": "318–371",
    "blurb": "The rules of fasting Ramadan and other fasts: intention, sighting the moon, what breaks the fast and what follows, the expiation, valid excuses, vows and the spiritual retreat of i'tikaf.",
    "outcomes": [
      "Define fasting and state its conditions, pillar and the types of fast with their intentions.",
      "Explain how Ramadan is established by sighting the moon and how the day of doubt is treated.",
      "Distinguish what does not break the fast, what requires a make-up day only, and what also requires expiation.",
      "Apply the rules on excuses, fidya, voluntary fasts, vows and i'tikaf."
    ],
    "modules": [
      {
        "title": "Fasting: definition and types",
        "ar": "تعريف الصوم وأنواعه",
        "lessons": [
          {
            "id": "saw-01",
            "title": "What fasting is and when it is obligatory",
            "ar": "تعريف الصوم وشروطه",
            "ref": "pp. 321–323",
            "mins": 14,
            "summary": "The legal definition of fasting, what makes Ramadan obligatory, the conditions for it to be obligatory and valid, and its single pillar.",
            "points": [
              "Fasting is to hold back during the day from anything entering the stomach or brain through the mouth, nose or a body opening, and from sexual pleasure, with the intention of fasting, by a person fit to fast.",
              "The cause of the obligation is the arrival of Ramadan, and each day is the cause for that day's fast. Someone who reaches maturity or accepts Islam during Ramadan fasts what remains and does not make up what has passed.",
              "Fasting Ramadan and making up missed Ramadan days is obligatory on a Muslim who is sane and mature and knows it is obligatory. That knowledge is only an issue for someone who became Muslim in enemy lands.",
              "Performing it is required of someone free of illness, menstruation and postnatal bleeding, and who is resident. A traveller need not fast, but fasting is better if he can.",
              "The fast is valid with an intention, freedom from menstruation and postnatal bleeding, and freedom from what breaks the fast. Being in a state of major impurity at dawn does not affect it.",
              "The pillar of fasting is holding back from food, intercourse and what counts as either."
            ],
            "terms": [
              [
                "Sawm",
                "صوم",
                "Fasting."
              ],
              [
                "Niyyah",
                "نية",
                "Intention: a firm resolve in the heart. Saying it aloud is not required."
              ]
            ]
          },
          {
            "id": "saw-02",
            "title": "The six types of fast",
            "ar": "أقسام الصوم",
            "ref": "pp. 324–327",
            "mins": 16,
            "summary": "The book divides fasts into obligatory, necessary, sunna, recommended, voluntary and disliked, and gives examples of each, including the days on which fasting is forbidden.",
            "points": [
              "Obligatory (fard) fasts are Ramadan and its make-up, expiation fasts and vowed fasts. A necessary (wajib) fast is making up a voluntary fast that was broken.",
              "The sunna fast is Ashura, the 10th of Muharram, together with the 9th.",
              "Recommended fasts include three days each month, preferably the 13th, 14th and 15th (the white days), Mondays and Thursdays, six days of Shawwal, and the fast of Dawud: fasting one day and not the next.",
              "Fasting Ashura alone without the 9th is somewhat disliked. Fasting the two Eids and the days of tashriq, the 11th, 12th and 13th of Dhul Hijjah, is prohibitively disliked.",
              "It is disliked to single out Friday or Saturday for fasting unless it matches one's regular fasting or is joined with the day before or after. Fasting the Persian new year and similar festivals is also disliked.",
              "Joining fasts without breaking at night (wisal), even for two days, and fasting one's whole life are disliked."
            ],
            "terms": [
              [
                "Ayyam al-bid",
                "أيام البيض",
                "The 'white days', the 13th, 14th and 15th of the lunar month."
              ],
              [
                "Ayyam al-tashriq",
                "أيام التشريق",
                "The 11th, 12th and 13th of Dhul Hijjah."
              ],
              [
                "Wisal",
                "وصال",
                "Fasting continuously without breaking the fast at night."
              ]
            ]
          },
          {
            "id": "saw-03",
            "title": "The intention for each type of fast",
            "ar": "النية في أنواع الصوم",
            "ref": "pp. 328–331",
            "mins": 14,
            "summary": "Some fasts need a specific intention made before dawn, while others can be intended up to just before midday with a general intention.",
            "points": [
              "Ramadan, a vow to fast a specific day, and voluntary fasts do not need a specific intention, and the intention may be made any time from sunset until just before midday.",
              "These three are also valid with a general intention to fast or even an intention for a voluntary fast, as Ramadan is the only fast that can occur in its time.",
              "A healthy resident who fasts in Ramadan intending a different wajib fast gets Ramadan, not the other fast. For a traveller, one narration from Abu Hanifa is that the other fast counts.",
              "If someone vowed to fast a specific day and fasts it intending a different wajib fast, the other fast counts and the vow remains owed.",
              "Making up Ramadan, making up a broken voluntary fast, expiation fasts and a general vow not tied to a day all need a specific intention made at night before dawn."
            ]
          }
        ]
      },
      {
        "title": "Sighting the moon",
        "ar": "رؤية الهلال",
        "lessons": [
          {
            "id": "saw-04",
            "title": "Starting Ramadan and the day of doubt",
            "ar": "ثبوت رمضان ويوم الشك",
            "ref": "pp. 331–333",
            "mins": 14,
            "summary": "Ramadan begins with the sighting of the new moon or the completion of thirty days of Sha'ban. The day after the 29th of Sha'ban, when clouds hid the moon, is the day of doubt, and the book explains how to treat it.",
            "points": [
              "Ramadan is established by sighting the moon. If it cannot be seen, Sha'ban is completed as thirty days and then fasting begins.",
              "The day of doubt is the day after the 29th of Sha'ban when cloud has hidden the moon. Fasting it is disliked, except a voluntary fast made with a firm intention.",
              "If that day turns out to be Ramadan, the voluntary fast counts for Ramadan. Someone who wavers, saying 'if it is Ramadan I am fasting, if not I am not', is not fasting and must make the day up if it was Ramadan.",
              "Fasting one or two days just before Ramadan is disliked, unless it matches a fast one regularly keeps.",
              "On the day of doubt the mufti tells people to wait without intending to fast, then to eat once the time for intention has passed. The mufti, judge and those able to keep a firm voluntary intention may fast it voluntarily.",
              "Whoever alone sees the moon of Ramadan and is not believed by the judge must fast. Whoever alone sees the moon of Shawwal and is not believed may not break his fast. Breaking it in either case needs a make-up day, not expiation."
            ],
            "terms": [
              [
                "Yawm al-shakk",
                "يوم الشك",
                "The day of doubt: the 30th of Sha'ban when the moon was hidden."
              ]
            ]
          },
          {
            "id": "saw-05",
            "title": "Witnesses and sightings in different places",
            "ar": "الشهادة على الهلال واختلاف المطالع",
            "ref": "pp. 334–337",
            "mins": 13,
            "summary": "How many witnesses are needed to establish the new moon depends on the sky and the month. The lesson also covers whether a sighting in one region binds another.",
            "points": [
              "If the sky is obstructed by cloud or dust, the imam accepts the report of one upright person, or one whose state is unknown, for Ramadan. This can be a woman or a slave, and no formal court testimony is needed.",
              "If the sky is obstructed for Eid al-Fitr, the testimony of two free men, or one free man and two free women, is required, using the words 'I bear witness'. Eid al-Adha follows the same rule, as do the other months.",
              "If the sky is clear, a large group must report the sighting. How large is left to the imam's judgement according to the correct view.",
              "If Ramadan began on one witness and thirty days pass with a clear sky and no moon seen, people may not end the fast. If the sky is obstructed after thirty days, they may.",
              "According to the most evident view in the school, on which the fatwa is given, a sighting confirmed in one region binds all other regions.",
              "A moon seen during the day, before or after noon, belongs to the following night and does not change that day's ruling."
            ]
          }
        ]
      },
      {
        "title": "What breaks the fast",
        "ar": "مفسدات الصوم",
        "lessons": [
          {
            "id": "saw-06",
            "title": "What does not break the fast",
            "ar": "ما لا يفسد الصوم",
            "ref": "pp. 338–341",
            "mins": 17,
            "summary": "The book lists twenty-four things that do not break the fast. Many involve forgetfulness, things that cannot be avoided, or things that do not reach the stomach.",
            "points": [
              "Eating, drinking or intercourse done forgetfully does not break the fast. Someone who can fast should be reminded; for someone weak it is better not to.",
              "Ejaculation from looking or thinking, applying oil or kohl, being cupped, backbiting, and intending to break the fast without doing so do not break it. Backbiting and cupping may lose the reward.",
              "Smoke, dust, flour, a fly or the taste of medicine reaching the throat without choice does not break the fast. Waking in a state of major impurity does not either, even if it lasts all day.",
              "Water entering the ears while in a river, putting a twig in the ear and taking out wax, and sniffing mucus back and swallowing it do not break the fast.",
              "Vomiting without choice does not break the fast, even a mouthful.",
              "Swallowing food stuck between the teeth smaller than a chickpea does not break the fast. Chewing a sesame seed from outside the mouth until it disappears, with no taste reaching the throat, does not either."
            ]
          },
          {
            "id": "saw-07",
            "title": "What requires make-up and expiation",
            "ar": "ما يوجب القضاء والكفارة",
            "ref": "pp. 341–344",
            "mins": 15,
            "summary": "Twenty-two acts, done deliberately and by choice in a Ramadan fast, break the fast and require both a make-up day and the expiation. The common thread is completed desire or nourishment.",
            "points": [
              "Intercourse in either passage breaks the fast of both partners and requires expiation and a make-up day, whether or not there is ejaculation.",
              "Eating or drinking for food or medicine, even a little, requires expiation and make-up. So does deliberately swallowing rain that enters the mouth.",
              "Eating raw meat, fat, cured meat, a grain of wheat from outside the mouth, beneficial clay, or ordinary earth by someone used to eating it requires expiation. So does a small amount of salt.",
              "Swallowing the saliva of one's wife or a friend requires expiation, because one is not repelled by it.",
              "Someone who deliberately eats after backbiting, cupping, kissing or applying oil, thinking his fast was already broken, owes expiation and make-up, unless a scholar told him it was broken or he misunderstood a hadith.",
              "A wife who willingly allows intercourse while her husband is forced owes the expiation."
            ],
            "terms": [
              [
                "Qada",
                "قضاء",
                "Making up a missed or broken fast."
              ],
              [
                "Kaffarah",
                "كفارة",
                "Expiation: a penalty that wipes out a serious violation."
              ]
            ]
          },
          {
            "id": "saw-08",
            "title": "The expiation and what cancels it",
            "ar": "الكفارة وما يسقطها",
            "ref": "pp. 344–346",
            "mins": 12,
            "summary": "The expiation for deliberately breaking a Ramadan fast is taken from the story of the man who came to the Prophet ﷺ saying he was ruined. The lesson covers its order, how feeding works and when one expiation covers several violations.",
            "points": [
              "The expiation is freeing a sound slave. If one cannot, one fasts two consecutive months. If one cannot, one feeds sixty poor people.",
              "The two months must not include the two Eids or the days of tashriq, as there must be no break in the sixty days.",
              "Feeding means giving sixty people lunch and dinner, the same people for both. Feeding one poor person for sixty days is also valid. One may instead give each half a sa' of wheat or flour, or a sa' of dates or barley, or its value.",
              "The expiation falls away if, on the same day, a woman's period or postnatal bleeding begins, or the person falls ill in a way that allows breaking the fast. Deliberately making oneself ill does not cancel it, and neither does travelling that day.",
              "One expiation covers many violations, even across two Ramadans, as long as an expiation was not paid between them. If it was, a new one is needed."
            ],
            "terms": [
              [
                "Sa'",
                "صاع",
                "A measure of volume used for grain and dates."
              ]
            ]
          },
          {
            "id": "saw-09",
            "title": "What requires a make-up day only: things that enter the body",
            "ar": "ما يوجب القضاء دون الكفارة",
            "ref": "pp. 346–348",
            "mins": 15,
            "summary": "Fifty-seven things break the fast but need only a make-up day, because they are not food, or there was a reason, or desire was not completed. This lesson covers things that enter the body.",
            "points": [
              "Eating raw rice, flour, dough, a mouthful of salt, or earth one is not used to eating breaks the fast without expiation.",
              "Swallowing a fruit stone, cotton, paper, a pebble or metal, or eating a raw quince or raw walnut, breaks the fast without expiation. A raw almond requires expiation.",
              "An enema or drops of medicine in the nose break the fast without expiation, as does drops of water or oil in the ears according to the soundest view.",
              "Medicine on a head or stomach wound that reaches the brain or stomach breaks the fast without expiation.",
              "Rain or snow that enters the throat by accident, or water slipping down while rinsing the mouth, breaks the fast without expiation. This is different from forgetfulness, which does not break it.",
              "Being forced to break the fast, even by intercourse, and a woman forced into intercourse, require no expiation. Nor does a wife or slave woman who breaks it fearing illness from her duties."
            ]
          },
          {
            "id": "saw-10",
            "title": "Make-up only: mistakes, intention, fainting and refraining",
            "ar": "تتمة ما يوجب القضاء والإمساك",
            "ref": "pp. 348–352",
            "mins": 17,
            "summary": "Further cases that need only a make-up day, the rules for fainting and insanity, and when someone must still refrain from eating for the rest of the day.",
            "points": [
              "Eating deliberately after eating forgetfully, or continuing intercourse after remembering one is fasting, breaks the fast without expiation. So does eating at sahur after dawn had in fact begun, or breaking the fast thinking the sun had set when it had not.",
              "Someone who intended in the day and then ate, or who began the day travelling and then became resident, or resident and then travelled, and ate, owes a make-up day only. Holding back with no intention at all is not a fast and must be made up.",
              "Ejaculation from kissing, touching or masturbation, deliberately inhaling smoke, or something entering the front or back passage until it disappears, breaks the fast without expiation. Breaking any fast other than Ramadan requires only a make-up day.",
              "Deliberately vomiting a mouthful breaks the fast and needs a make-up day, not expiation. Eating food stuck between the teeth the size of a chickpea also breaks it without expiation.",
              "Someone who faints, even for all of Ramadan, makes up the days except the day on which the fainting began. Someone insane for part of the month makes up the days, but not if insanity covered the whole month.",
              "Whoever breaks the fast, a woman whose period ends after dawn, a boy who matures and a non-Muslim who accepts Islam after dawn must all refrain from eating for the rest of the day. The last two do not make it up. The sick and the traveller need not refrain."
            ],
            "terms": [
              [
                "Imsak",
                "إمساك",
                "Refraining from eating for the rest of the day out of respect for Ramadan."
              ]
            ]
          }
        ]
      },
      {
        "title": "Disliked and recommended",
        "ar": "ما يكره وما يستحب للصائم",
        "lessons": [
          {
            "id": "saw-11",
            "title": "What is disliked, not disliked and recommended",
            "ar": "مكروهات الصوم ومستحباته",
            "ref": "pp. 353–355",
            "mins": 12,
            "summary": "Seven things are disliked for the fasting person, nine are not, and three are recommended, including sahur and hurrying to break the fast.",
            "points": [
              "Tasting or chewing something without a reason is disliked. A woman with a harsh husband may taste the food, and chewing food for a small child is allowed, as long as nothing goes down.",
              "Kissing and caressing are disliked if one is not sure of controlling oneself, and allowed if one is. Gathering saliva and swallowing it is disliked.",
              "Cupping, bleeding or anything thought to weaken one for the fast is disliked. If one is sure it will not weaken, it is not disliked.",
              "Oil on the moustache, kohl and using the siwak at any time of day, even a wet one, are not disliked. Rinsing the mouth or nose outside wudu, bathing, or wrapping in a wet cloth to cool down are not disliked either, and the fatwa is on this view.",
              "Three things are recommended: eating sahur, delaying it to shortly before dawn, and hurrying to break the fast when the sky is clear."
            ],
            "terms": [
              [
                "Sahur",
                "سحور",
                "The pre-dawn meal."
              ],
              [
                "Siwak",
                "سواك",
                "A tooth stick used for cleaning the teeth."
              ]
            ]
          }
        ]
      },
      {
        "title": "Excuses for not fasting",
        "ar": "العوارض المبيحة للفطر",
        "lessons": [
          {
            "id": "saw-12",
            "title": "Illness, pregnancy, breastfeeding and travel",
            "ar": "المريض والحامل والمرضع والمسافر",
            "ref": "pp. 356–359",
            "mins": 16,
            "summary": "Eight situations allow breaking the fast without sin. The lesson covers the sick, pregnant and nursing women and the traveller, and how missed days are made up.",
            "points": [
              "The excuses are illness, travel, coercion, pregnancy, breastfeeding, hunger, thirst and old age. In each, one may break the fast and make up the days later.",
              "The sick may break the fast if they fear the illness will worsen or recovery be delayed. A pregnant or nursing woman may if she fears harm to herself or the child. Extreme hunger or thirst that threatens life or mind is also an excuse.",
              "The fear must be based on one's own strong belief from past experience, or on the advice of a skilled, upright Muslim doctor.",
              "Fasting is better for a traveller if it will not harm him, unless most of his companions are not fasting or they share expenses, in which case it is better to break it with them.",
              "Someone who dies while still ill or travelling owes nothing for those days. If he had days in which he could have made them up and did not, he must leave a will for a fidya for those days only.",
              "Missed days need not be made up consecutively, though making them up soon is recommended. If the next Ramadan arrives first, one fasts it and makes up the old days afterwards, with no fidya for the delay."
            ],
            "terms": [
              [
                "Fidya",
                "فدية",
                "A payment of food or its value given in place of a missed fast."
              ]
            ]
          },
          {
            "id": "saw-13",
            "title": "The elderly, fidya and breaking a voluntary fast",
            "ar": "الشيخ الفاني والفدية وقطع النفل",
            "ref": "pp. 359–361",
            "mins": 12,
            "summary": "An elderly person who cannot fast pays fidya instead. The lesson also explains when fidya is not valid, and what happens when someone breaks a voluntary fast.",
            "points": [
              "A frail elderly man or woman may leave the fast and pay a fidya for each day: half a sa' of wheat, which the book gives as 1.6 kg, or its value in cash.",
              "Someone who vowed to fast for life and becomes too weak to work and fast breaks the fast and pays fidya. If he cannot afford it, he seeks Allah's forgiveness.",
              "Fidya is not valid in place of the fasting required as expiation for a broken oath or for killing, or the Ramadan expiation, even for someone too old to fast.",
              "A voluntary fast may be broken without a reason, according to Abu Yusuf, but it must then be made up.",
              "Hosting or being a guest is a valid reason to break a voluntary fast, for both the guest and the host.",
              "If someone began a voluntary fast on the two Eids or the days of tashriq and broke it, he does not make it up, since fasting those days is forbidden."
            ]
          }
        ]
      },
      {
        "title": "Vows",
        "ar": "النذر",
        "lessons": [
          {
            "id": "saw-14",
            "title": "Fulfilling vows of fasting, prayer and charity",
            "ar": "أحكام النذر",
            "ref": "pp. 361–364",
            "mins": 14,
            "summary": "A vow to do a good deed must be fulfilled if three conditions are met. The lesson explains which vows bind, the vow to fast on Eid, and which details of a vow do not bind.",
            "points": [
              "A vow binds if the act is from a kind that is obligatory in itself (such as prayer, fasting or Hajj), is intended for itself and not as a means to something else, and is not already obligatory on the person.",
              "So vowing wudu, a prostration of recitation or the Zuhr prayer does not bind. Vowing to free a slave, to do i'tikaf, or to pray, fast or give charity voluntarily does bind.",
              "An unconditional vow must be fulfilled, and a vow tied to a condition must be fulfilled when the condition happens. Fulfilling it before the condition does not count.",
              "A vow to fast the two Eids and the days of tashriq is valid, but one must not fast those days and makes them up later. If one fasts them anyway it counts, but it is unlawful.",
              "The time, place, particular coin or particular poor person named in a vow do not bind. Fasting Rajab instead of the vowed Sha'ban, or praying the vowed two rak'ahs outside Makkah, is valid."
            ],
            "terms": [
              [
                "Nadhr",
                "نذر",
                "A vow: making a good deed binding on oneself."
              ]
            ]
          }
        ]
      },
      {
        "title": "I'tikaf",
        "ar": "الاعتكاف",
        "lessons": [
          {
            "id": "saw-15",
            "title": "I'tikaf: the spiritual retreat in the mosque",
            "ar": "الاعتكاف وأحكامه",
            "ref": "pp. 365–371",
            "mins": 20,
            "summary": "I'tikaf is staying in the mosque with the intention of retreat. The lesson covers its types, when one may leave, what is disliked or forbidden during it, and its virtue.",
            "points": [
              "I'tikaf is staying, with intention, in a mosque where the five prayers are held in congregation. For a woman it is the place she uses for prayer in her home.",
              "It has three types: wajib, which is vowed, needs fasting and cannot be less than a day; an emphasised communal sunna in the last ten days of Ramadan; and recommended at other times. The shortest recommended i'tikaf is a moment, according to Imam Muhammad, and the fatwa is on this.",
              "One leaves the mosque only for a legal need, such as the Friday prayer or the toilet, or a necessity such as the mosque collapsing or being forced out. Leaving without reason, even briefly, breaks a wajib i'tikaf and ends a voluntary one.",
              "The person eats, drinks and sleeps in the mosque and may make a needed trade contract there, though it is disliked. Bringing goods to trade, and staying silent as an act of worship, are disliked.",
              "Intercourse, kissing and caressing are forbidden. Intercourse, or ejaculation from kissing or touching, breaks the i'tikaf, whether deliberate or forgetful, by day or by night.",
              "Vowing i'tikaf for a number of days includes their nights. Its virtue is that the heart is freed from worldly matters and the person is like one constantly waiting for prayer in Allah's house."
            ],
            "terms": [
              [
                "I'tikaf",
                "اعتكاف",
                "Spiritual retreat: staying in the mosque with the intention of worship."
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book IV",
    "text": "nur"
  },
  {
    "id": "zakat",
    "title": "Zakat",
    "ar": "كتاب الزكاة",
    "book": "Book V",
    "pages": "376–396",
    "blurb": "Who must pay zakat, on what wealth, how much, and to whom it is given, followed by sadaqah al-Fitr at the end of Ramadan. In the translation this book comes from the completion (Hibatul Fattah) by Muhammad Muhyi al-Din Abdul Hamid.",
    "outcomes": [
      "State the conditions that make zakat obligatory and valid.",
      "Calculate zakat on gold, silver and merchandise using the nisab.",
      "Describe zakat on livestock, crops and treasure.",
      "Identify the eight recipients of zakat, those who cannot receive it, and the rules of sadaqah al-Fitr."
    ],
    "modules": [
      {
        "title": "Zakat: meaning and conditions",
        "ar": "معنى الزكاة وشروطها",
        "lessons": [
          {
            "id": "zak-01",
            "title": "What zakat is and who must pay it",
            "ar": "تعريف الزكاة وشروط وجوبها",
            "ref": "pp. 377–378",
            "mins": 12,
            "summary": "Zakat means purification and growth. In the Sacred Law it is handing over a set portion of wealth to a poor Muslim. The lesson covers the five conditions for it to be obligatory and the condition for it to be valid.",
            "points": [
              "Linguistically zakat means purity and also increase or growth.",
              "Legally it is making a poor Muslim, who is not from Banu Hashim nor a slave of theirs, the owner of a portion of wealth set by the Law.",
              "It is obligatory on someone who is Muslim, free, mature, sane, and owns a nisab of wealth that grows, such as grazing livestock, crops, gold, silver or trade goods.",
              "There is no zakat on things that do not grow, such as cars, utensils, food, clothing, housing or furniture, unless they are for trade.",
              "Zakat becomes due once the nisab has been owned for a full year.",
              "To be valid, the payer must intend zakat when giving it or when setting it aside. The poor person does not need to know it is zakat."
            ],
            "terms": [
              [
                "Zakat",
                "زكاة",
                "The obligatory alms due on certain wealth."
              ],
              [
                "Nisab",
                "نصاب",
                "The minimum amount of wealth on which zakat becomes due."
              ]
            ]
          },
          {
            "id": "zak-02",
            "title": "Wealth subject to zakat and the nisab of gold and silver",
            "ar": "الأموال الزكوية ونصاب الذهب والفضة",
            "ref": "pp. 379–381",
            "mins": 15,
            "summary": "Zakat is due on five kinds of wealth. The lesson focuses on gold, silver and currency: their nisab, the 2.5% rate and how amounts above the nisab are counted.",
            "points": [
              "Zakat is due on gold and silver (bullion, jewellery, coins or notes), grazing livestock, trade goods, crops and fruit, and treasure and minerals.",
              "The nisab of gold is twenty mithqals, which the book gives as about 87 grams. The nisab of silver is 200 dirhams, given as about 700 grams.",
              "On twenty mithqals of gold, half a mithqal is due, which is 2.5%. On 200 dirhams of silver, five dirhams are due.",
              "According to Abu Hanifa, nothing more is due on an excess until it reaches four mithqals of gold or forty dirhams of silver, on which a tenth of a mithqal or one dirham is due. Abu Yusuf and Muhammad held that any excess is charged at the same rate.",
              "Zakat is due on gold and silver jewellery and utensils, but not on gems and pearls. Currency held for a year is zakatable if it reaches the value of the silver nisab."
            ],
            "terms": [
              [
                "Mithqal",
                "مثقال",
                "A gold coin, the unit for the gold nisab."
              ],
              [
                "Dirham",
                "درهم",
                "A silver coin, the unit for the silver nisab."
              ]
            ]
          }
        ]
      },
      {
        "title": "Livestock",
        "ar": "زكاة السوائم",
        "lessons": [
          {
            "id": "zak-03",
            "title": "Zakat on camels, cattle, sheep and horses",
            "ar": "زكاة الإبل والبقر والغنم والخيل",
            "ref": "pp. 382–386",
            "mins": 14,
            "summary": "Grazing animals are counted by number, not value. The lesson gives the conditions and the first thresholds for camels, cattle and sheep, and Abu Hanifa's view on horses.",
            "points": [
              "Zakat on livestock requires that a year has passed in ownership, the animals reach the nisab by number, and they graze on open pasture for all or most of the year. Animals fed on fodder the owner grows or buys owe no zakat.",
              "Camels: none below five. Five to nine owe one sheep, rising to four sheep for 20 to 24. At 25 a one-year-old she-camel is due, with older camels and more of them at higher numbers.",
              "Cattle: none below thirty. Thirty owe a one-year-old calf (tabi'), forty a two-year-old (musinn), then a tabi' for every thirty and a musinn for every forty.",
              "Sheep and goats: none below forty. 40 to 120 owe one sheep, 121 to 200 two, 201 to 399 three, 400 four, then one for every hundred. The animal given must be at least a year old.",
              "Abu Hanifa held zakat due on grazing horses kept for breeding, of mixed sex and worth a nisab, paid as 2.5% of value or one dinar a head. Abu Yusuf and Muhammad held there is no zakat on horses."
            ],
            "terms": [
              [
                "Sa'imah",
                "سائمة",
                "Livestock that graze on open pasture for most of the year."
              ]
            ]
          }
        ]
      },
      {
        "title": "Merchandise, crops and treasure",
        "ar": "زكاة العروض والزروع والركاز",
        "lessons": [
          {
            "id": "zak-04",
            "title": "Trade goods, crops and fruit",
            "ar": "زكاة عروض التجارة والزروع والثمار",
            "ref": "pp. 387–388",
            "mins": 13,
            "summary": "Trade goods are valued yearly against gold or silver in the way that most benefits the poor. Crops and fruit owe a tenth or half a tenth at harvest, with no year needing to pass.",
            "points": [
              "Trade goods are anything kept for trade, even animals, crops or fruit. They are valued at the end of each lunar year and, if they reach the nisab of gold or silver, 2.5% of their value is paid.",
              "When valuing, one uses whichever of gold or silver gives the nisab or is more beneficial for the poor.",
              "Abu Hanifa held that zakat is due on everything the earth produces, little or much, whether it keeps, like grain and cotton, or does not, like vegetables and fruit.",
              "Abu Yusuf and Muhammad held it due only on produce that keeps for a year and reaches five wasqs, a wasq being sixty sa'.",
              "No year has to pass: zakat on crops is due on the day of harvest.",
              "Crops watered mainly by rain owe one tenth (10%). Crops watered mainly by irrigation owe half a tenth (5%)."
            ],
            "terms": [
              [
                "Ushr",
                "عشر",
                "The tenth due on crops watered by rain."
              ],
              [
                "Wasq",
                "وسق",
                "A measure of sixty sa'."
              ]
            ]
          },
          {
            "id": "zak-05",
            "title": "Treasure and minerals",
            "ar": "الركاز والمعادن",
            "ref": "p. 389",
            "mins": 8,
            "summary": "Valuable minerals or buried treasure found in the ground owe an immediate fifth, which goes to the public good rather than to the zakat recipients.",
            "points": [
              "If a Muslim or a non-Muslim citizen finds gold, silver or lead in tithe land or tax land, whether in its natural state or buried in pre-Islamic times, it is treasure (rikaz).",
              "A fifth (20%) is due immediately on finding it.",
              "This fifth is added to the spoils of war and used for the general benefit of the country, not given specifically to the poor or the other zakat recipients.",
              "According to Abu Hanifa, minerals found inside one's own house owe nothing. Abu Yusuf and Muhammad held it due regardless."
            ],
            "terms": [
              [
                "Rikaz",
                "ركاز",
                "Treasure or minerals found in the ground."
              ]
            ]
          }
        ]
      },
      {
        "title": "Recipients of zakat",
        "ar": "مصارف الزكاة",
        "lessons": [
          {
            "id": "zak-06",
            "title": "The eight recipients of zakat",
            "ar": "مصارف الزكاة الثمانية",
            "ref": "pp. 389–391",
            "mins": 14,
            "summary": "Allah names eight categories of people who may receive zakat in Surah al-Tawbah. The lesson defines each one.",
            "points": [
              "The recipients are the poor, the destitute, zakat collectors, those whose hearts are being reconciled, slaves buying their freedom, debtors, those striving in the path of Allah, and the stranded traveller.",
              "A poor person (faqir) owns something but less than a nisab. A destitute person (miskin) owns nothing beyond a few basic necessities and is worse off.",
              "Collectors are those appointed by the Muslim ruler to gather zakat. Those whose hearts were reconciled were given zakat by the Prophet ﷺ, and Umar stopped this as Islam grew strong.",
              "Slaves who agreed with their master to buy their freedom are helped. Debtors are those who cannot pay their debts, even if they own a nisab that their debt exceeds.",
              "Those in the path of Allah are soldiers the ruler equips. The traveller is one cut off from his money on a journey, even if he is wealthy at home.",
              "One may give all of one's zakat to one category or divide it between them."
            ],
            "terms": [
              [
                "Faqir",
                "فقير",
                "A poor person who owns less than a nisab."
              ],
              [
                "Miskin",
                "مسكين",
                "A destitute person who owns almost nothing."
              ]
            ]
          },
          {
            "id": "zak-07",
            "title": "Who and what zakat cannot be given to",
            "ar": "من لا تدفع إليه الزكاة",
            "ref": "pp. 390, 392",
            "mins": 9,
            "summary": "Zakat must go to an eligible Muslim who is not someone the payer already supports. It cannot be spent on projects such as building mosques.",
            "points": [
              "The recipient must be Muslim and must not be the payer's parent, grandparent, child, grandchild or wife, since he already supports them.",
              "Zakat may not be given to a non-Muslim, a rich person who owns a nisab, a wealthy child, or anyone from Banu Hashim or their freed slaves.",
              "It may not be used to buy a shroud for the deceased, to pay for a burial, or to pay a dead person's debt.",
              "It may not be used to build a mosque.",
              "It may not be used to buy a slave to free him, unless the slave has an agreement with his master to buy his freedom."
            ]
          }
        ]
      },
      {
        "title": "Sadaqah al-Fitr",
        "ar": "صدقة الفطر",
        "lessons": [
          {
            "id": "zak-08",
            "title": "Sadaqah al-Fitr: who pays, for whom and when",
            "ar": "صدقة الفطر: على من تجب ومتى",
            "ref": "pp. 392–394",
            "mins": 13,
            "summary": "Sadaqah al-Fitr is the charity due at the end of Ramadan. The lesson covers who must pay it, on whose behalf, and its timing.",
            "points": [
              "It is wajib on a free Muslim who owns a nisab beyond his housing needs and debts. The nisab need not be held for a year or be growing wealth.",
              "Sanity and maturity are not conditions, so it is paid on behalf of a child or an insane person, from their own money if they are wealthy.",
              "A man pays for himself, his young children who have no wealth, and his slave who serves in the home. He does not have to pay for his wife or his adult children.",
              "It becomes due at dawn on the day of Eid al-Fitr. Someone who dies before dawn, or is born or becomes Muslim after it, owes nothing.",
              "It is recommended to pay it after dawn and before the Eid prayer. Paying it in advance is valid, and it does not fall away if delayed, though delaying it is wrong."
            ],
            "terms": [
              [
                "Sadaqah al-Fitr",
                "صدقة الفطر",
                "The charity due for each person at the end of Ramadan."
              ]
            ]
          },
          {
            "id": "zak-09",
            "title": "The amount, the recipients and sending zakat elsewhere",
            "ar": "مقدار صدقة الفطر ومصرفها ونقل الزكاة",
            "ref": "pp. 394–396",
            "mins": 11,
            "summary": "How much sadaqah al-Fitr is, what it may be paid in, who receives it, and whether zakat may be sent to another town.",
            "points": [
              "It is paid from wheat, dates, barley or raisins: half a sa' of wheat, flour or sawiq (a wheat and barley mix), or a full sa' of dates or barley. Abu Hanifa counted raisins like wheat.",
              "Paying the cash value is allowed, and the fatwa is that cash is best, because what matters is what most benefits the poor.",
              "Its recipients are the same eight categories as zakat, and one may give it all to one category.",
              "Sending zakat or sadaqah al-Fitr to another town is disliked, unless it goes to a relative, to people in greater need or more righteous, or to people who benefit the Muslims by teaching knowledge.",
              "The best order is the closest relatives, then the next closest, then neighbours, then the people of one's area, then poor people of one's profession, then the people of the land."
            ],
            "terms": [
              [
                "Sawiq",
                "سويق",
                "A mix of wheat and barley flour."
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book V",
    "text": "nur"
  },
  {
    "id": "hajj",
    "title": "Hajj and Umrah",
    "ar": "كتاب الحج",
    "book": "Book VI",
    "pages": "398–437",
    "blurb": "The pilgrimage to Makkah from start to finish: its conditions, pillars and necessary acts, the miqat sites, the rites day by day, umrah, qiran and tamattu', penalties for violations, the sacrificial offering and visiting the Prophet ﷺ in Madinah. In the translation this book comes from the completion (Hibatul Fattah) by Muhammad Muhyi al-Din Abdul Hamid.",
    "outcomes": [
      "State who Hajj is obligatory on, its conditions, its time, its two pillars and its necessary acts.",
      "Name the miqat sites and explain how ihram is entered and what it forbids.",
      "Walk through the rites of Hajj from the 8th to the 13th of Dhul Hijjah, and the forms of umrah, qiran and tamattu'.",
      "Explain the penalties for violations in ihram, the rules of the offering, and the etiquette of visiting the Prophet's ﷺ tomb."
    ],
    "modules": [
      {
        "title": "Hajj: meaning and conditions",
        "ar": "معنى الحج وشروطه",
        "lessons": [
          {
            "id": "haj-01",
            "title": "What Hajj is and who it is obligatory on",
            "ar": "تعريف الحج وشروط وجوبه",
            "ref": "pp. 400–403",
            "mins": 13,
            "summary": "Hajj is visiting a specific place to do specific acts at specific times. It is obligatory once in a lifetime on someone who meets six conditions, and its obligation is proven by the Quran, the sunna and consensus.",
            "points": [
              "Linguistically Hajj means aiming for something great. Legally it is visiting the House of Allah in Makkah and the mountain of Arafah, to perform tawaf, the sa'y between Safa and Marwah and the standing at Arafah, in the months of Hajj.",
              "Hajj is obligatory once in a lifetime.",
              "Its six conditions are Islam, maturity, sanity, freedom, having the means, and knowing it is obligatory, the last mattering only for someone who became Muslim in enemy lands.",
              "Having the means is having enough for the journey there and back and for transport and lodging, beyond what is left to support one's family until one returns.",
              "A child or slave who performs Hajj must perform it again after reaching maturity or being freed.",
              "Its obligation is proven by the verse 'Pilgrimage to the House is a duty owed to Allah by those who can afford the journey', by many hadith, and by consensus."
            ],
            "terms": [
              [
                "Hajj",
                "حج",
                "The greater pilgrimage to Makkah."
              ]
            ]
          },
          {
            "id": "haj-02",
            "title": "Conditions of performance, validity and the time of Hajj",
            "ar": "شروط الأداء والصحة ووقت الحج",
            "ref": "pp. 403–405",
            "mins": 12,
            "summary": "Beyond being obligatory, a person must be able to perform Hajj in practice, and the Hajj must meet three conditions to be valid. The lesson also sets out the months of Hajj.",
            "points": [
              "To have to perform Hajj in person one must have sound health, a safe route by one's strong belief, and, for a woman, her husband or a mahram to travel with her.",
              "Hajj is not obligatory to perform in person on the crippled, chronically ill or frail elderly, but they must have someone perform it on their behalf.",
              "A woman pays her mahram's expenses if he will not go otherwise. A child or an insane person does not count as a mahram.",
              "Hajj is valid with three conditions: being in ihram, performing it in its set time, and not having intercourse before the standing at Arafah.",
              "The time of Hajj is Shawwal, Dhul Qa'dah and the first ten days of Dhul Hijjah. Entering ihram for Hajj before this is prohibitively disliked.",
              "Umrah may be done all year, except that it is disliked on five days: the day of Arafah, the day of sacrifice and the days of tashriq."
            ],
            "terms": [
              [
                "Ihram",
                "إحرام",
                "The sacred state entered by intention and the talbiyah, in which certain things become forbidden."
              ]
            ]
          }
        ]
      },
      {
        "title": "Pillars, necessary acts and sunan",
        "ar": "أركان الحج وواجباته وسننه",
        "lessons": [
          {
            "id": "haj-03",
            "title": "The pillars and necessary acts of Hajj",
            "ar": "أركان الحج وواجباته",
            "ref": "pp. 405–407",
            "mins": 15,
            "summary": "Hajj has two pillars, without which it is not valid, and eight necessary (wajib) acts.",
            "points": [
              "The first pillar is standing at Arafah, even for a moment, between the sun passing its height on the 9th of Dhul Hijjah and dawn on the 10th. Best is to be there before sunset and stay until it sets.",
              "The second pillar is Tawaf al-Ziyarah, seven circuits of the Ka'bah after Arafah. Completing four, the majority, fulfils the pillar. It should be done by the 12th of Dhul Hijjah.",
              "The necessary acts include standing at Muzdalifah after dawn on the 10th, even briefly, and the sa'y: seven trips between Safa and Marwah starting at Safa and ending at Marwah.",
              "They also include stoning the jamarat on the day of sacrifice and the days of tashriq, and the farewell tawaf for those who do not live in Makkah.",
              "They also include shaving or shortening the hair after stoning Jamrat al-Aqabah on the 10th, within the Haram, and entering ihram from the miqat.",
              "Finally, a man uncovers his head and face while a woman covers her head and uncovers her face, and stitched clothes are not worn."
            ],
            "terms": [
              [
                "Wuquf",
                "وقوف",
                "Standing, meaning staying at Arafah or Muzdalifah."
              ],
              [
                "Sa'y",
                "سعي",
                "Walking seven times between the hills of Safa and Marwah."
              ],
              [
                "Jamarat",
                "جمرات",
                "The three stone pillars at Mina that pilgrims stone."
              ]
            ]
          },
          {
            "id": "haj-04",
            "title": "The sunan of Hajj",
            "ar": "سنن الحج",
            "ref": "pp. 407–408",
            "mins": 10,
            "summary": "The sunna acts of Hajj, from the ritual bath before ihram to drinking Zamzam and holding the Multazam. The lesson also sets out the three kinds of tawaf.",
            "points": [
              "A ritual bath (ghusl) before entering ihram is sunna, even for a woman who is menstruating or has postnatal bleeding.",
              "Wearing two new cloths, a waist wrapper and an upper wrapper, then praying two rak'ahs, is sunna. So is saying the talbiyah often and aloud.",
              "There are three kinds of tawaf: Tawaf al-Ziyarah, which is obligatory; the farewell tawaf, which is wajib; and Tawaf al-Qudum on arrival, which is sunna.",
              "It is sunna to send blessings on the Prophet ﷺ after entering ihram, to say takbir and tahlil on seeing the Ka'bah, and to do many voluntary tawafs.",
              "It is sunna to go to Mina after sunrise on the 8th and spend the night there, and to spend the nights of the days of Mina there.",
              "It is sunna to drink Zamzam and pour it over oneself, and to hold the Multazam, the wall between the door and the Black Stone, and the cloth of the Ka'bah while supplicating."
            ],
            "terms": [
              [
                "Talbiyah",
                "تلبية",
                "The pilgrim's call: 'At Your service, O Allah, at Your service...'"
              ],
              [
                "Multazam",
                "ملتزم",
                "The part of the Ka'bah's wall between its door and the Black Stone."
              ]
            ]
          },
          {
            "id": "haj-05",
            "title": "The miqat sites",
            "ar": "المواقيت",
            "ref": "pp. 408–410",
            "mins": 10,
            "summary": "The miqat are the points a pilgrim may not pass without being in ihram. The book lists five and explains the rule for those living closer to Makkah.",
            "points": [
              "No one heading for Hajj or umrah may pass a miqat without being in ihram.",
              "Al-Juhfah, near Rabigh, is for Syria, Egypt and North-West Africa, about 204 km from Makkah. Dhul Hulayfah is for Madinah, about 450 km away.",
              "Dhat Irq is for Iraq, Iran and Khurasan, about 94 km away. Qarn al-Manazil is for Najd, also about 94 km away.",
              "Yalamlam is for Yemen and those coming that way, such as from India, Pakistan and Malaysia, about 54 km away. Each site is also for anyone passing through it.",
              "Entering ihram before reaching the miqat is allowed, and is best for someone confident he will avoid what ihram forbids.",
              "Someone living closer to Makkah than the miqat enters ihram anywhere on his way, but may not enter the Haram for Hajj or umrah without ihram."
            ],
            "terms": [
              [
                "Miqat",
                "ميقات",
                "A set point that cannot be passed on the way to Makkah without ihram."
              ]
            ]
          }
        ]
      },
      {
        "title": "How to perform Hajj",
        "ar": "صفة الحج",
        "lessons": [
          {
            "id": "haj-06",
            "title": "Entering ihram and what it forbids",
            "ar": "الإحرام ومحظوراته",
            "ref": "pp. 410–412",
            "mins": 15,
            "summary": "Preparing for ihram, praying two rak'ahs, making the intention and saying the talbiyah. The lesson then lists what becomes forbidden in ihram and what remains allowed.",
            "points": [
              "Before ihram it is recommended to cut the nails, trim the moustache and cut the hair, then do wudu or, better, ghusl. One wears two new white cloths and applies perfume. Abu Hanifa and Abu Yusuf held that traces of perfume remaining after ihram do not matter.",
              "One prays two rak'ahs and says 'O Allah, I wish to perform Hajj, so make it easy for me and accept it from me'.",
              "One then says the talbiyah. Ihram begins when the talbiyah is said with the intention; intention alone is not enough.",
              "In ihram one must avoid intercourse and amorous talk, sin and arguing; killing or hunting game or pointing it out; a man covering his head or face; a woman covering her face, though she must cover her head; cutting hair or nails; perfume; and stitched clothes, shoes or boots.",
              "A woman may hold a cloth in front of her face as long as it does not touch it.",
              "Bathing with water only, entering a bathhouse, and shading under the Ka'bah's cloth, a canopy or a carriage are allowed. A marriage contract in ihram is valid, but consummating it is forbidden."
            ]
          },
          {
            "id": "haj-07",
            "title": "Arrival: Tawaf al-Qudum and the sa'y",
            "ar": "طواف القدوم والسعي",
            "ref": "pp. 412–413",
            "mins": 15,
            "summary": "On entering Makkah the pilgrim goes to the Sacred Mosque, greets the Black Stone, performs the arrival tawaf, prays at the Station of Ibrahim and then performs the sa'y.",
            "points": [
              "One begins at Masjid al-Haram, faces the Black Stone, says takbir and tahlil with raised hands, and touches and kisses it if possible without harming anyone, or greets it from a distance.",
              "One circles the Ka'bah seven times starting from the Black Stone, kissing it each time if able. This arrival tawaf (Tawaf al-Qudum) is sunna.",
              "Afterwards one prays two rak'ahs at the Station of Ibrahim or wherever possible in the mosque, which is wajib.",
              "If one plans to do sa'y after this tawaf, men uncover the right shoulder (idtiba') and walk briskly with strong steps (ramal) in the first three circuits, then walk normally.",
              "For the sa'y one climbs Safa until the Ka'bah is visible, says takbir and tahlil, sends blessings and supplicates with raised hands, then walks to Marwah, running between the two green markers.",
              "Safa to Marwah is one trip and back is the second, until seven are complete, starting at Safa."
            ],
            "terms": [
              [
                "Ramal",
                "رمل",
                "Walking briskly with short, strong steps in the first three circuits of tawaf."
              ],
              [
                "Idtiba'",
                "اضطباع",
                "Passing the upper cloth under the right armpit so the right shoulder is bare."
              ]
            ]
          },
          {
            "id": "haj-08",
            "title": "Mina, Arafah and Muzdalifah",
            "ar": "منى وعرفة ومزدلفة",
            "ref": "pp. 414–415",
            "mins": 16,
            "summary": "From the 8th to the dawn of the 10th of Dhul Hijjah: going to Mina, the standing at Arafah, and the night and standing at Muzdalifah.",
            "points": [
              "The pilgrim stays in Makkah until the 8th, the day of tarwiyah, then goes to Mina after sunrise and prays there from Zuhr until Fajr the next day.",
              "On the 9th he goes to Arafah. After the sun passes its height the imam gives two sermons and, if the imam is present, Zuhr and Asr are prayed together at Zuhr time with one adhan and two iqamahs.",
              "All of Arafah is a place of standing except the valley of Uranah. Standing there from midday on the 9th until dawn on the 10th is the pillar, and missing it means there is no Hajj.",
              "After sunset he leaves for Muzdalifah, where Maghrib and Isha are prayed together at Isha time with one adhan and one iqamah. Praying Maghrib on the way is not valid according to Abu Hanifa and Muhammad.",
              "On the 10th he prays Fajr very early, then stands at Muzdalifah, even for a moment, supplicating. All of it is a place of standing except the valley of Muhassir.",
              "The standing at Muzdalifah lasts from true dawn until it is very light. Leaving it out without an excuse requires a sacrifice (dam)."
            ],
            "terms": [
              [
                "Yawm al-tarwiyah",
                "يوم التروية",
                "The 8th of Dhul Hijjah, when pilgrims go to Mina."
              ],
              [
                "Dam",
                "دم",
                "A sacrificed animal owed as a penalty."
              ]
            ]
          },
          {
            "id": "haj-09",
            "title": "The day of sacrifice, the days of Mina and the farewell",
            "ar": "يوم النحر وأيام منى وطواف الوداع",
            "ref": "pp. 416–419",
            "mins": 18,
            "summary": "The four acts of the 10th of Dhul Hijjah, Tawaf al-Ziyarah, stoning the three jamarat on the following days, and the farewell tawaf that ends Hajj.",
            "points": [
              "Before sunrise on the 10th the pilgrim goes to Mina and throws seven pebbles at Jamrat al-Aqabah, saying takbir with each and stopping the talbiyah at the first. Seven thrown at once count as one. Taking pebbles from those at the jamrah is disliked.",
              "He then sacrifices if he wishes and shaves or shortens his hair, shaving being better. Everything becomes lawful except intercourse.",
              "Abu Hanifa held that the stoning, sacrifice and shaving must be done in order. Doing one before its turn requires a sacrifice.",
              "He returns to Makkah for Tawaf al-Ziyarah, a pillar, on the 10th, 11th or 12th, the first day being best. Delaying it past these days requires a sacrifice. After it, intercourse also becomes lawful.",
              "He spends the nights in Mina. On the 11th and 12th, after midday, he stones all three jamarat with seven pebbles each, starting near Masjid al-Khayf, pausing to supplicate after the first two. If he stays in Mina into the night of the 13th, he must stone on the 13th too; if he leaves before nightfall on the 12th, he need not.",
              "Before leaving Makkah he performs the farewell tawaf, which is wajib for those not living in Makkah and has no ramal. He then drinks Zamzam standing and may supplicate at the Multazam."
            ],
            "terms": [
              [
                "Yawm al-nahr",
                "يوم النحر",
                "The day of sacrifice, the 10th of Dhul Hijjah."
              ],
              [
                "Tawaf al-Wada'",
                "طواف الوداع",
                "The farewell tawaf before leaving Makkah."
              ]
            ]
          }
        ]
      },
      {
        "title": "Umrah, qiran and tamattu'",
        "ar": "العمرة والقران والتمتع",
        "lessons": [
          {
            "id": "haj-10",
            "title": "Umrah and the three ways of performing Hajj",
            "ar": "العمرة وأنواع النسك",
            "ref": "pp. 420–422",
            "mins": 12,
            "summary": "Hajj can be done alone (ifrad), combined with umrah in one ihram (qiran), or after a separate umrah (tamattu'). The lesson also covers the ruling, pillar and method of umrah.",
            "points": [
              "Ifrad is performing Hajj alone. Qiran is intending umrah and Hajj together in one ihram. Tamattu' is performing umrah, leaving ihram, then entering ihram again for Hajj, all within the months of Hajj.",
              "Umrah is an established sunna according to the most evident view in the school. It may be done any time of year except the five disliked days, and it is recommended in Ramadan.",
              "Its pillar is the seven circuits of tawaf, or most of them. Its necessary acts are the sa'y and shaving or shortening the hair.",
              "Its condition is ihram. A resident of Makkah enters it from the area outside the Haram (al-Hill), and someone from afar from the miqat.",
              "One bathes, says 'O Allah, I wish to perform umrah, so make it easy for me and accept it from me', and says the talbiyah. In Makkah one performs tawaf, then sa'y, then shaves or shortens, and the umrah is complete."
            ],
            "terms": [
              [
                "Umrah",
                "عمرة",
                "The lesser pilgrimage, possible at any time of year."
              ],
              [
                "Ifrad",
                "إفراد",
                "Performing Hajj on its own without umrah."
              ]
            ]
          },
          {
            "id": "haj-11",
            "title": "Qiran and tamattu' and their sacrifice",
            "ar": "القران والتمتع وهديهما",
            "ref": "pp. 422–426",
            "mins": 15,
            "summary": "How qiran and tamattu' are performed, which is better, and the sacrifice of thanks each requires, or the ten days of fasting in its place.",
            "points": [
              "Qiran is better than ifrad, than umrah alone and than tamattu'. Tamattu' is better than ifrad or umrah alone.",
              "In qiran one intends both, then in Makkah does the umrah's tawaf with ramal, two rak'ahs and sa'y, without shaving. One then performs Tawaf al-Qudum for Hajj and continues the Hajj.",
              "In tamattu' one enters ihram for umrah at the miqat, stops the talbiyah at the start of tawaf, does tawaf, sa'y and shaves, and leaves ihram. On the 8th one enters ihram for Hajj from the Haram.",
              "Both the qarin and the mutamatti' must, after stoning Jamrat al-Aqabah on the 10th, sacrifice a sheep or a seventh share of a cow or camel, in thanks to Allah. Eating from it is recommended according to Abu Hanifa.",
              "Someone who cannot sacrifice fasts three days before the 10th and seven after finishing Hajj, which may be separate days.",
              "If he did not fast the three days before the 10th, only a sheep will do."
            ],
            "terms": [
              [
                "Qiran",
                "قران",
                "Combining umrah and Hajj in a single ihram."
              ],
              [
                "Tamattu'",
                "تمتع",
                "Performing umrah, leaving ihram, then entering ihram for Hajj in the same season."
              ]
            ]
          }
        ]
      },
      {
        "title": "Violations and the offering",
        "ar": "الجنايات والهدي",
        "lessons": [
          {
            "id": "haj-12",
            "title": "Violations in ihram and their penalties",
            "ar": "الجنايات في الإحرام",
            "ref": "pp. 426–428",
            "mins": 16,
            "summary": "Violations of ihram are paid for with a sacrifice, a charity, less than that, or the value of game killed, depending on how serious they are.",
            "points": [
              "Violations are of two types: breaking the restrictions of ihram, such as intercourse, and breaking the sanctity of the Haram, such as hunting there.",
              "A sacrifice is owed for perfuming a whole limb, dyeing the hair, oiling the body, wearing stitched clothes or covering the head for a whole day, shaving a quarter of the head, cutting all the nails of hands and feet in one sitting or of one hand, or leaving out a wajib act.",
              "A charity of half a sa' of wheat or its value is owed for perfuming less than a limb, stitched clothes or covering the head or face for less than a day, shaving less than a quarter of the head, or cutting one nail.",
              "The same charity is owed for doing Tawaf al-Qudum or the farewell tawaf without wudu, and for each circuit of the farewell tawaf or each pebble left out.",
              "Killing a louse or locust requires whatever charity one wishes.",
              "Game killed is valued by two upright people. One may buy an offering and slaughter it in the Haram, buy food of equal value and give each poor person half a sa', or fast a day for each half sa'. Harmful creatures such as crows, scorpions, mice and rabid dogs may be killed with no penalty."
            ],
            "terms": [
              [
                "Jinayah",
                "جناية",
                "A violation of the rules of ihram or of the Haram."
              ]
            ]
          },
          {
            "id": "haj-13",
            "title": "The offering (hady)",
            "ar": "الهدي",
            "ref": "pp. 429–430",
            "mins": 9,
            "summary": "The hady is an animal offered to the poor in the Haram. The lesson covers its types and ages, when a sheep is not enough, and when and where it is slaughtered.",
            "points": [
              "The offering is a camel, cow or sheep. A sheep must be at least one year old, a cow two years and a camel five years.",
              "The animal must be free of defects such as limping.",
              "A sheep is enough for every violation except performing Tawaf al-Ziyarah in a state of major impurity, or intercourse after Arafah and before shaving. Those require a cow or a camel.",
              "The offering for qiran and tamattu' is slaughtered on the three days of sacrifice, the 10th to the 12th of Dhul Hijjah. Other offerings, such as for a violation, have no set time.",
              "Every offering is slaughtered within the Haram, not specifically Mina, except a voluntary offering, for which Mina in the days of sacrifice is sunna, or one injured on the way, which may be slaughtered where it is."
            ],
            "terms": [
              [
                "Hady",
                "هدي",
                "An animal offered as a sacrifice in the Haram."
              ]
            ]
          }
        ]
      },
      {
        "title": "Visiting the Prophet ﷺ",
        "ar": "زيارة النبي ﷺ",
        "lessons": [
          {
            "id": "haj-14",
            "title": "Visiting graves and the tomb of the Prophet ﷺ",
            "ar": "زيارة القبور وزيارة قبر النبي ﷺ",
            "ref": "pp. 431–437",
            "mins": 20,
            "summary": "Visiting graves is sunna, and visiting the tomb of the Prophet ﷺ is even more emphasised. The book closes with the etiquette of the visit to Madinah, taken from Maraqi al-Falah.",
            "points": [
              "Visiting graves to take a lesson and pray for the dead is sunna, as the Prophet ﷺ said 'Visit the graves, for they remind you of death'. Visiting the tomb of the Prophet ﷺ is more emphasised.",
              "It is sunna for someone Allah has enabled to perform Hajj or umrah to travel to Madinah to visit him ﷺ. One prayer in his mosque is better than a thousand elsewhere, except Masjid al-Haram.",
              "The visitor sends many blessings on the Prophet ﷺ on the way, bathes, wears his best clothes and enters Madinah humbly, with the supplications the book gives.",
              "In the mosque he prays two rak'ahs by the minbar and two more in the Rawdah, the area between the tomb and the minbar, out of thanks.",
              "He then stands about four arms' lengths from the tomb, facing it with his back to the qibla, greets the Prophet ﷺ, asks Allah's forgiveness and seeks his intercession, then moves to greet Abu Bakr and then Umar.",
              "It is recommended to visit al-Baqi', the martyrs of Uhud beginning with Hamzah, and the mosque of Quba' on Saturday to pray there."
            ],
            "terms": [
              [
                "Rawdah",
                "روضة",
                "The area between the Prophet's ﷺ tomb and his minbar, described as a garden of Paradise."
              ],
              [
                "Ziyarah",
                "زيارة",
                "Visiting, here the visit to the Prophet's ﷺ tomb."
              ]
            ]
          }
        ]
      }
    ],
    "track": "nur",
    "level": "Book VI",
    "text": "nur"
  }
];
