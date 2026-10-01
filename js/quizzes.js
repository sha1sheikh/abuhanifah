/*
  END-OF-LESSON QUIZZES
  Three questions per lesson, keyed by lesson id (see js/curriculum.js).
  Each question is drawn only from that lesson's own notes.
  "answer" is the position of the correct option, counting from 0.
  Review alongside the lesson content before launch.
*/
window.QUIZZES = {
  "int-01": [
    {
      "q": "What proves that something is fard?",
      "options": [
        "A text open to interpretation",
        "A decisive text",
        "The custom of the people"
      ],
      "answer": 1,
      "why": "Fard is established by a decisive text (dalil qat'i)."
    },
    {
      "q": "What happens to a prayer if a fard part, such as bowing, is left out?",
      "options": [
        "The prayer is void",
        "It is valid but deficient",
        "It is fixed by two prostrations of forgetfulness"
      ],
      "answer": 0,
      "why": "Leaving a fard part of prayer, such as bowing or prostration, voids the prayer."
    },
    {
      "q": "A wajib part of prayer is left out by forgetting. What makes up for it?",
      "options": [
        "Nothing is needed",
        "Repeating the whole prayer",
        "Two prostrations of forgetfulness at the end"
      ],
      "answer": 2,
      "why": "Two prostrations of forgetfulness at the end make up for a wajib part left out by forgetting."
    }
  ],
  "int-02": [
    {
      "q": "What is the ruling on habitually leaving an emphasised sunnah, such as congregational prayer?",
      "options": [
        "It is sinful",
        "It carries no blame at all",
        "It is disbelief"
      ],
      "answer": 0,
      "why": "Leaving an emphasised sunnah is blameworthy, and leaving it habitually is sinful."
    },
    {
      "q": "According to Abu Hanifa, what must be done if a voluntary fast is broken?",
      "options": [
        "Nothing, as it was voluntary",
        "It must be made up",
        "A fine must be paid"
      ],
      "answer": 1,
      "why": "A voluntary act becomes binding once begun, so a broken voluntary fast must be made up."
    },
    {
      "q": "Which kind of disliked act is sinful to do?",
      "options": [
        "Makruh tanzihi",
        "Mubah",
        "Makruh tahrimi"
      ],
      "answer": 2,
      "why": "Makruh tahrimi is the opposite of wajib, and doing it is sinful."
    }
  ],
  "int-03": [
    {
      "q": "What is taqlid?",
      "options": [
        "Deriving rulings directly from the Quran",
        "Following a qualified scholar without demanding the proof",
        "Choosing the easiest opinion"
      ],
      "answer": 1,
      "why": "Taqlid means accepting a scholar's statement without asking for the proof."
    },
    {
      "q": "What should a person do if they cannot perform ijtihad?",
      "options": [
        "Adopt one of the jurists and follow his view",
        "Work out rulings for themselves",
        "Avoid acting until certain"
      ],
      "answer": 0,
      "why": "A person who cannot do ijtihad is to adopt one of the jurists and follow his view."
    },
    {
      "q": "According to al-Baghdadi, in which of these is taqlid NOT allowed?",
      "options": [
        "Details of marriage",
        "Details of transactions",
        "Knowing that the five prayers are obligatory"
      ],
      "answer": 2,
      "why": "Taqlid is not allowed in what every Muslim must know, such as the five prayers."
    }
  ],
  "int-04": [
    {
      "q": "Who are the imams of the four schools?",
      "options": [
        "Abu Hanifa, Abu Yusuf, Muhammad and Zufar",
        "Abu Hanifa, Malik, Shafi'i and Ahmad",
        "Malik, Shafi'i, Ibn Salah and Ahmad"
      ],
      "answer": 1,
      "why": "The four are Abu Hanifa, Malik, Shafi'i and Ahmad."
    },
    {
      "q": "What reward does a qualified mujtahid get if he strives and errs?",
      "options": [
        "One reward",
        "Two rewards",
        "No reward"
      ],
      "answer": 0,
      "why": "One who strives and errs gets one reward, so he is rewarded even when wrong."
    },
    {
      "q": "What should someone who has adopted a madhhab avoid?",
      "options": [
        "Asking scholars questions",
        "Reading the Quran in translation",
        "Following another school for convenience"
      ],
      "answer": 2,
      "why": "Once he has adopted a madhhab, he should not follow another for convenience."
    }
  ],
  "int-05": [
    {
      "q": "Who are the Sahibayn, \"the two companions\"?",
      "options": [
        "Malik and Shafi'i",
        "Abu Yusuf and Muhammad",
        "Zufar and al-Sha'bi"
      ],
      "answer": 1,
      "why": "The Sahibayn are Abu Yusuf and Muhammad, Abu Hanifa's two leading students."
    },
    {
      "q": "What order of sources did Abu Hanifa describe for his method?",
      "options": [
        "The Companions, then the sunnah, then the Book",
        "The sunnah, then the Book, then analogy",
        "The Book of Allah, then the sunnah, then the views of the Companions"
      ],
      "answer": 2,
      "why": "He described taking from the Book of Allah, then the sunnah, then the views of the Companions."
    },
    {
      "q": "Who wrote Nur al-Idah?",
      "options": [
        "Hasan al-Shurunbulali",
        "Abu Yusuf",
        "Imam Muhammad al-Shaybani"
      ],
      "answer": 0,
      "why": "Hasan ibn 'Ammar al-Shurunbulali is the author of Nur al-Idah."
    }
  ],
  "pur-01": [
    {
      "q": "What is the ruling on used (musta'mal) water?",
      "options": [
        "It is impure",
        "It is pure but does not purify",
        "It is pure and purifying"
      ],
      "answer": 1,
      "why": "Used water is pure but no longer lifts impurity, so it cannot be used for wudu or ghusl."
    },
    {
      "q": "A little filth falls into a small amount of still water, leaving no trace. What is the ruling?",
      "options": [
        "The water is still purifying",
        "It is only disliked",
        "The water becomes impure"
      ],
      "answer": 2,
      "why": "Small still water becomes impure when filth falls in, even with no trace."
    },
    {
      "q": "When does a large amount of water, or running water, become impure?",
      "options": [
        "When the taste, colour or smell of the filth appears",
        "As soon as any filth touches it",
        "Never"
      ],
      "answer": 0,
      "why": "Large or running water becomes impure only when the taste, colour or smell of the filth appears."
    }
  ],
  "pur-02": [
    {
      "q": "What is the ruling on water left after a dog drinks from it?",
      "options": [
        "Pure",
        "Disliked",
        "Impure"
      ],
      "answer": 2,
      "why": "Leftover water from a dog, pig or predatory land animal is impure."
    },
    {
      "q": "Only water left by a donkey is available. What does one do?",
      "options": [
        "Make wudu with it, then tayammum, then pray",
        "Make tayammum only",
        "Make wudu with it only"
      ],
      "answer": 0,
      "why": "With only the doubtful water of a donkey or mule, one makes wudu with it, then tayammum, then prays."
    },
    {
      "q": "How many buckets are drawn from a well if a rat dies in it?",
      "options": [
        "40",
        "20",
        "200"
      ],
      "answer": 1,
      "why": "For a rat it is 20 buckets."
    }
  ],
  "pur-03": [
    {
      "q": "Filth has spread beyond the outlet and is more than a dirham in size. What is the ruling?",
      "options": [
        "Istinja is only sunnah",
        "Wiping with stones is enough",
        "Washing with water is obligatory"
      ],
      "answer": 2,
      "why": "If it is more than a dirham, washing with water is obligatory."
    },
    {
      "q": "What is the best way to do istinja?",
      "options": [
        "Wipe first, then wash with water",
        "Wash with water only",
        "Wipe with stones only"
      ],
      "answer": 0,
      "why": "Water is better than wiping, and combining the two is best: wipe first, then wash."
    },
    {
      "q": "Before starting wudu after urinating, what must a man make sure of?",
      "options": [
        "That he has changed his clothes",
        "That the flow has stopped",
        "That he has used three stones"
      ],
      "answer": 1,
      "why": "A man must be sure the flow has stopped, for example by walking or coughing, before starting wudu."
    }
  ],
  "pur-04": [
    {
      "q": "What is the ruling on facing the qiblah while relieving oneself inside a building?",
      "options": [
        "Permitted inside a building",
        "Prohibitively disliked",
        "Recommended"
      ],
      "answer": 1,
      "why": "Facing the qiblah or turning one's back to it is prohibitively disliked, even inside a building."
    },
    {
      "q": "Which foot does one enter the toilet with?",
      "options": [
        "The left foot",
        "The right foot",
        "Either foot"
      ],
      "answer": 0,
      "why": "One enters with the left foot and leaves with the right."
    },
    {
      "q": "If people are present, how does one do istinja?",
      "options": [
        "Exposes the private parts quickly",
        "Leaves it until later",
        "Cleans under one's clothes"
      ],
      "answer": 2,
      "why": "Exposing the private parts in front of others is not permitted, so one cleans under one's clothes."
    }
  ],
  "pur-05": [
    {
      "q": "How many obligatory pillars does wudu have?",
      "options": [
        "Three",
        "Four",
        "Six"
      ],
      "answer": 1,
      "why": "Wudu has four pillars: face, arms, wiping a quarter of the head, and feet."
    },
    {
      "q": "How much of the head must be wiped in wudu?",
      "options": [
        "A quarter",
        "The whole head",
        "Three hairs"
      ],
      "answer": 0,
      "why": "One of the four pillars is wiping a quarter of the head."
    },
    {
      "q": "A pinhole-sized spot of required skin stays dry. What happens to the wudu?",
      "options": [
        "It is valid",
        "It is valid but disliked",
        "It is invalid"
      ],
      "answer": 2,
      "why": "Water must reach all the required skin, and even a pinhole left dry invalidates it."
    }
  ],
  "pur-06": [
    {
      "q": "In the Hanafi school, what is the ruling on the intention in wudu?",
      "options": [
        "Fard, so wudu is invalid without it",
        "Sunnah, so wudu is valid without it but with less reward",
        "Not part of wudu at all"
      ],
      "answer": 1,
      "why": "The intention is sunnah: wudu without it is valid but its reward is less."
    },
    {
      "q": "How many times does one wipe the head?",
      "options": [
        "Three times",
        "Twice",
        "Once"
      ],
      "answer": 2,
      "why": "One wipes the whole head once."
    },
    {
      "q": "When should one not rinse the mouth and nose deeply?",
      "options": [
        "When fasting",
        "When travelling",
        "When the water is cold"
      ],
      "answer": 0,
      "why": "One rinses deeply if not fasting."
    }
  ],
  "pur-07": [
    {
      "q": "Which of these is disliked during wudu?",
      "options": [
        "Facing the qiblah",
        "Wasting water, even at a flowing river",
        "Sitting on a raised place"
      ],
      "answer": 1,
      "why": "Wasting water, even at a flowing river, is one of the six disliked things."
    },
    {
      "q": "Which hand is used to blow the nose in wudu?",
      "options": [
        "The right hand",
        "Either hand",
        "The left hand"
      ],
      "answer": 2,
      "why": "One rinses mouth and nose with the right hand and blows the nose with the left."
    },
    {
      "q": "What is the ruling on wiping the head three times with fresh water?",
      "options": [
        "Disliked",
        "Sunnah",
        "Obligatory"
      ],
      "answer": 0,
      "why": "Wiping the head three times with fresh water is among the six disliked things."
    }
  ],
  "pur-08": [
    {
      "q": "What is the ruling on wudu for a funeral prayer?",
      "options": [
        "Recommended",
        "Not needed",
        "Obligatory (fard)"
      ],
      "answer": 2,
      "why": "Wudu is obligatory for any prayer, even voluntary or funeral prayer."
    },
    {
      "q": "Wudu is wajib (necessary) for which act?",
      "options": [
        "Tawaf around the Ka'bah",
        "Reciting Quran from memory",
        "Sleeping"
      ],
      "answer": 0,
      "why": "Wudu is necessary (wajib) for tawaf around the Ka'bah."
    },
    {
      "q": "Does touching a woman break wudu in this school?",
      "options": [
        "Yes, always",
        "No, but making wudu is recommended",
        "Only with a barrier"
      ],
      "answer": 1,
      "why": "Touching a woman does not break wudu, but making wudu avoids the scholars' disagreement."
    }
  ],
  "pur-09": [
    {
      "q": "Blood flows from a cut on the arm. What happens to the wudu?",
      "options": [
        "It breaks",
        "Nothing",
        "It breaks only if more than a dirham"
      ],
      "answer": 0,
      "why": "Blood or pus that flows from any part of the body breaks wudu."
    },
    {
      "q": "How much vomit breaks wudu?",
      "options": [
        "Any amount",
        "Only vomit with blood in it",
        "A mouthful, when the mouth can only be closed with difficulty"
      ],
      "answer": 2,
      "why": "Vomiting a mouthful breaks wudu, meaning the mouth can only be closed with difficulty."
    },
    {
      "q": "Someone laughs loudly during a normal prayer with bowing and prostration. What breaks?",
      "options": [
        "Only the prayer",
        "Both the wudu and the prayer",
        "Neither"
      ],
      "answer": 1,
      "why": "Loud laughter in a prayer with bowing and prostration breaks both wudu and prayer."
    }
  ],
  "pur-10": [
    {
      "q": "Blood appears on a wound but does not flow beyond it. Is wudu broken?",
      "options": [
        "Yes",
        "No",
        "Only in prayer"
      ],
      "answer": 1,
      "why": "Blood that appears but does not flow beyond the wound does not break wudu."
    },
    {
      "q": "Does touching one's own private part break wudu?",
      "options": [
        "No",
        "Yes",
        "Only for women"
      ],
      "answer": 0,
      "why": "Touching one's own private part does not break wudu."
    },
    {
      "q": "Someone sleeps in prayer while prostrating in the sunnah posture. Is wudu broken?",
      "options": [
        "Yes, any sleep breaks it",
        "Only if they sleep for a long time",
        "No, unless the body collapses"
      ],
      "answer": 2,
      "why": "Sleeping in prayer in the sunnah posture does not break wudu, unless the body collapses."
    }
  ],
  "pur-11": [
    {
      "q": "Semen is released without desire, such as from a blow to the back. Is ghusl obligatory?",
      "options": [
        "Yes",
        "No",
        "Only for women"
      ],
      "answer": 1,
      "why": "Semen released without desire does not require ghusl."
    },
    {
      "q": "Does madhi (pre-seminal fluid) require ghusl?",
      "options": [
        "Yes",
        "Only if it is a lot",
        "No"
      ],
      "answer": 2,
      "why": "Ghusl is not required for madhi or wadi."
    },
    {
      "q": "Someone dreams of something sexual but wakes to find no wetness. Is ghusl obligatory?",
      "options": [
        "No",
        "Yes",
        "Only if they remember the dream"
      ],
      "answer": 0,
      "why": "Ghusl is not required for a wet dream with no wetness found."
    }
  ],
  "pur-12": [
    {
      "q": "What are the three obligatory washes of ghusl?",
      "options": [
        "The face, arms and feet",
        "The mouth, the nose and the whole body",
        "The head, right side and left side"
      ],
      "answer": 1,
      "why": "It is obligatory to wash the mouth, the nose and the whole body once."
    },
    {
      "q": "Must a woman undo her braids for ghusl?",
      "options": [
        "Yes, always",
        "Only for janabah",
        "No, as long as water reaches the roots"
      ],
      "answer": 2,
      "why": "A woman need not undo her braids as long as water reaches the roots."
    },
    {
      "q": "How many times is water poured over the whole body in the sunnah way?",
      "options": [
        "Three times",
        "Once",
        "Seven times"
      ],
      "answer": 0,
      "why": "One pours water over the whole body three times, starting with the head."
    }
  ],
  "pur-13": [
    {
      "q": "Which of these is a sunnah occasion for ghusl?",
      "options": [
        "After cupping",
        "Friday prayer",
        "Returning from travel"
      ],
      "answer": 1,
      "why": "Ghusl is sunnah for Friday prayer, the two Eids, entering ihram and at Arafah."
    },
    {
      "q": "When is ghusl sunnah for the pilgrim at Arafah?",
      "options": [
        "After midday",
        "Before dawn",
        "At sunset"
      ],
      "answer": 0,
      "why": "Ghusl is sunnah for the pilgrim at Arafah after midday."
    },
    {
      "q": "Filth has struck the body in a spot one cannot find. What is the ruling on ghusl?",
      "options": [
        "Obligatory",
        "Disliked",
        "Recommended"
      ],
      "answer": 2,
      "why": "Ghusl is recommended when filth has struck the body in a spot one cannot find."
    }
  ],
  "pur-14": [
    {
      "q": "How far from water must one be for tayammum to be allowed?",
      "options": [
        "Any distance",
        "A mile or more",
        "Ten miles or more"
      ],
      "answer": 1,
      "why": "A valid excuse includes being a mile or more from water."
    },
    {
      "q": "Fear of missing which prayer allows tayammum?",
      "options": [
        "Friday prayer",
        "A prayer whose time is ending",
        "The Eid prayer"
      ],
      "answer": 2,
      "why": "Funeral and Eid prayers cannot be made up, so fear of missing them allows tayammum."
    },
    {
      "q": "Which of these can tayammum be done with?",
      "options": [
        "Stone",
        "Wood",
        "Gold"
      ],
      "answer": 0,
      "why": "Tayammum is done with a pure earth substance such as stone, not wood, gold or metal."
    }
  ],
  "pur-15": [
    {
      "q": "How many prayers can one tayammum be used for?",
      "options": [
        "One obligatory prayer only",
        "As many obligatory and voluntary prayers as one wishes",
        "Only voluntary prayers"
      ],
      "answer": 1,
      "why": "One tayammum allows as many obligatory and voluntary prayers as one wishes."
    },
    {
      "q": "Most of the wudu limbs are sound and some are injured. What does one do?",
      "options": [
        "Make tayammum only",
        "Combine water and tayammum",
        "Wash the sound parts and wipe the injured"
      ],
      "answer": 2,
      "why": "If most are sound, one washes the sound parts and wipes the injured; water and tayammum are not combined."
    },
    {
      "q": "Someone has been promised water before the time ends. What is the ruling on delaying tayammum?",
      "options": [
        "Wajib",
        "Disliked",
        "Only recommended"
      ],
      "answer": 0,
      "why": "Delaying tayammum is wajib if one has been promised water."
    }
  ],
  "pur-16": [
    {
      "q": "How long may a resident wipe over khuffs?",
      "options": [
        "Three days and nights",
        "One day and night",
        "Until they are removed"
      ],
      "answer": 1,
      "why": "A resident may wipe for one day and night and a traveller for three days and nights."
    },
    {
      "q": "When does the wiping period start?",
      "options": [
        "When wudu first breaks after putting them on",
        "When the khuffs are put on",
        "At the next prayer time"
      ],
      "answer": 0,
      "why": "The period starts when wudu first breaks after putting them on."
    },
    {
      "q": "Which part of the khuff must be wiped?",
      "options": [
        "The underneath",
        "The heel",
        "The top of each foot"
      ],
      "answer": 2,
      "why": "It is obligatory to wipe an area of three small fingers on the top of each foot."
    }
  ],
  "pur-17": [
    {
      "q": "The wiping period ends while one still has wudu. What must one do?",
      "options": [
        "Redo the whole wudu",
        "Wash the feet only",
        "Nothing"
      ],
      "answer": 1,
      "why": "When the period ends, one only washes the feet."
    },
    {
      "q": "Can one wipe over gloves in place of washing the hands?",
      "options": [
        "Yes, if worn in purity",
        "Yes, for travellers",
        "No"
      ],
      "answer": 2,
      "why": "Wiping over a turban, cap, veil or gloves in place of the head or hands is not permitted."
    },
    {
      "q": "What is the time limit for wiping over a splint or bandage?",
      "options": [
        "There is no time limit",
        "One day and night",
        "Three days and nights"
      ],
      "answer": 0,
      "why": "Wiping a splint has no time limit."
    }
  ],
  "pur-18": [
    {
      "q": "What is the maximum length of menstruation?",
      "options": [
        "Seven days",
        "Ten days",
        "Fifteen days"
      ],
      "answer": 1,
      "why": "Menstruation lasts at least three days and nights and at most ten."
    },
    {
      "q": "What is the maximum length of postnatal bleeding (nifas)?",
      "options": [
        "Forty days",
        "Thirty days",
        "Sixty days"
      ],
      "answer": 0,
      "why": "Postnatal bleeding has no minimum and a maximum of forty days."
    },
    {
      "q": "Bleeding lasts only two days. What is it?",
      "options": [
        "Menstruation",
        "Postnatal bleeding",
        "Chronic bleeding (istihadah)"
      ],
      "answer": 2,
      "why": "Bleeding of less than three days is istihadah."
    }
  ],
  "pur-19": [
    {
      "q": "What must a woman make up after menstruation?",
      "options": [
        "Missed prayers only",
        "Missed fasts but not missed prayers",
        "Both prayers and fasts"
      ],
      "answer": 1,
      "why": "She makes up missed fasts but not missed prayers."
    },
    {
      "q": "Which of these is allowed during menstruation?",
      "options": [
        "Saying \"In the name of Allah\" as remembrance",
        "Reciting a verse of Quran",
        "Entering a mosque"
      ],
      "answer": 0,
      "why": "Words of the Quran said as supplication or remembrance, not recitation, are allowed."
    },
    {
      "q": "Which of these does minor impurity forbid?",
      "options": [
        "Reciting Quran from memory",
        "Entering a mosque",
        "Touching the Quran without a cover"
      ],
      "answer": 2,
      "why": "Minor impurity forbids prayer, tawaf and touching the Quran without a cover."
    }
  ],
  "pur-20": [
    {
      "q": "How often does an excused person make wudu?",
      "options": [
        "Before every single prayer, even voluntary",
        "For the time of each obligatory prayer",
        "Once a day"
      ],
      "answer": 1,
      "why": "The excused person makes wudu for the time of each obligatory prayer and may pray as much as they like with it."
    },
    {
      "q": "When does a person first become excused?",
      "options": [
        "When the condition lasts a full prayer time with no break long enough to make wudu and pray",
        "When the condition happens once",
        "When it lasts three days"
      ],
      "answer": 0,
      "why": "A person becomes excused when the condition lasts a full prayer time with no such break."
    },
    {
      "q": "An excused person gets a new cut that bleeds. What happens to their wudu?",
      "options": [
        "Nothing, they are excused",
        "It breaks only at sunrise",
        "It breaks"
      ],
      "answer": 2,
      "why": "Something other than the condition, such as a new cut that bleeds, still breaks it."
    }
  ],
  "pur-21": [
    {
      "q": "How much heavy filth is excused?",
      "options": [
        "Up to a quarter of the garment",
        "Up to the size of a dirham",
        "None at all"
      ],
      "answer": 1,
      "why": "Heavy filth up to the size of a dirham is excused."
    },
    {
      "q": "How much light filth is excused?",
      "options": [
        "Less than a quarter of the garment or body part",
        "Up to the size of a dirham",
        "Any amount"
      ],
      "answer": 0,
      "why": "Light filth is excused if it covers less than a quarter of the garment or body part."
    },
    {
      "q": "Which of these is heavy filth?",
      "options": [
        "Horse urine",
        "Sheep urine",
        "Flowing blood"
      ],
      "answer": 2,
      "why": "Flowing blood is listed as heavy filth, while horse and sheep urine are light."
    }
  ],
  "pur-22": [
    {
      "q": "How is invisible filth washed?",
      "options": [
        "Once",
        "Three times, wringing each time",
        "Seven times with soil"
      ],
      "answer": 1,
      "why": "Invisible filth is washed three times, wringing each time."
    },
    {
      "q": "Ground where filth has dried and its traces have gone can be used for what?",
      "options": [
        "Prayer but not tayammum",
        "Tayammum but not prayer",
        "Neither"
      ],
      "answer": 0,
      "why": "Such ground may be prayed on, but not used for tayammum."
    },
    {
      "q": "Which hide never becomes pure, even with tanning?",
      "options": [
        "A dog's hide",
        "A sheep's hide",
        "A pig's hide"
      ],
      "answer": 2,
      "why": "A pig's hide never becomes pure, and neither does a human's."
    }
  ],
  "sal-01": [
    {
      "q": "Which three conditions make prayer obligatory on a person?",
      "options": [
        "Islam, maturity and sanity",
        "Islam, wealth and health",
        "Maturity, sanity and being resident"
      ],
      "answer": 0,
      "why": "Prayer is obligatory on anyone with Islam, maturity and sanity."
    },
    {
      "q": "What makes each prayer due?",
      "options": [
        "Hearing the adhan",
        "The arrival of its time",
        "Being in wudu"
      ],
      "answer": 1,
      "why": "The cause that makes each prayer due is the arrival of its time."
    },
    {
      "q": "When does the time of maghrib end, according to the fatwa?",
      "options": [
        "When the sun has fully set",
        "At midnight",
        "When the red glow on the horizon disappears"
      ],
      "answer": 2,
      "why": "Maghrib runs from complete sunset until the red glow disappears, and the fatwa is on this."
    }
  ],
  "sal-02": [
    {
      "q": "Can two obligatory prayers be joined in one time because of travel or rain?",
      "options": [
        "Yes, for travel only",
        "No, only at Arafah and Muzdalifah during hajj",
        "Yes, for both travel and rain"
      ],
      "answer": 1,
      "why": "The only exceptions to joining prayers are at Arafah and Muzdalifah."
    },
    {
      "q": "Which prayer is still valid at sunset, though disliked?",
      "options": [
        "That day's 'asr",
        "An owed fajr",
        "The funeral prayer"
      ],
      "answer": 0,
      "why": "No prayer is valid at sunset except that day's 'asr, which is valid but disliked."
    },
    {
      "q": "Why is it disliked to pray while holding back the need to use the toilet?",
      "options": [
        "It breaks wudu",
        "It makes the prayer void",
        "It takes away concentration"
      ],
      "answer": 2,
      "why": "Holding back the call of nature takes away concentration, so praying like this is disliked."
    }
  ],
  "sal-03": [
    {
      "q": "What is the ruling of the adhan and iqama for the obligatory prayers?",
      "options": [
        "Obligatory",
        "An emphasised sunna",
        "Disliked when praying alone"
      ],
      "answer": 1,
      "why": "They are an emphasised sunna for the obligatory prayers, alone or in a group."
    },
    {
      "q": "What is added twice to the adhan at fajr?",
      "options": [
        "'Prayer is better than sleep'",
        "'The prayer has begun'",
        "'Come to success'"
      ],
      "answer": 0,
      "why": "At fajr 'prayer is better than sleep' is added twice."
    },
    {
      "q": "What does the listener say when the caller says 'come to prayer'?",
      "options": [
        "He repeats 'come to prayer'",
        "He stays silent",
        "'There is no power or strength except with Allah'"
      ],
      "answer": 2,
      "why": "At 'come to prayer' and 'come to success' the listener says 'there is no power or strength except with Allah'."
    }
  ],
  "sal-04": [
    {
      "q": "How much heavy filth is excused on the body, clothes or place?",
      "options": [
        "Less than a dirham's area",
        "Less than a quarter of the garment",
        "Any amount if washed later"
      ],
      "answer": 0,
      "why": "Heavy filth is excused if it is less than a dirham's area."
    },
    {
      "q": "Someone prays unsure whether the time has started, and it had in fact started. What is the ruling?",
      "options": [
        "The prayer is valid",
        "The prayer is void",
        "It is valid but disliked"
      ],
      "answer": 1,
      "why": "The person must be certain the time has started, otherwise the prayer is void even if the time had begun."
    },
    {
      "q": "Which prayer does not need to be named specifically in the intention?",
      "options": [
        "The obligatory dhuhr",
        "Witr",
        "A voluntary prayer, even the fajr sunna"
      ],
      "answer": 2,
      "why": "A specific obligatory or wajib prayer must be named, but a voluntary prayer need not be."
    }
  ],
  "sal-05": [
    {
      "q": "Is standing required in voluntary prayers?",
      "options": [
        "Yes, always",
        "No, only in obligatory prayers",
        "Only in the first rak'ah"
      ],
      "answer": 1,
      "why": "Standing is required in obligatory prayers but not in voluntary ones."
    },
    {
      "q": "What should a follower do about recitation behind the imam?",
      "options": [
        "Not recite, whether the imam is loud or silent",
        "Recite the Fatiha silently",
        "Recite only when the imam is silent"
      ],
      "answer": 0,
      "why": "The follower does not recite behind the imam, and doing so is prohibitively disliked."
    },
    {
      "q": "How long must the last sitting last?",
      "options": [
        "One breath",
        "As long as three tasbihs",
        "As long as reciting the tashahhud"
      ],
      "answer": 2,
      "why": "The last sitting must last as long as reciting the tashahhud."
    }
  ],
  "sal-06": [
    {
      "q": "What is a man's nakedness in prayer?",
      "options": [
        "From the chest to the knees",
        "From the navel to the end of the knees",
        "From the navel to the ankles"
      ],
      "answer": 1,
      "why": "A man's nakedness is from the navel to the end of the knees."
    },
    {
      "q": "How much of one limb of the nakedness being exposed makes the prayer invalid?",
      "options": [
        "Any amount at all",
        "Half of it",
        "A quarter of it"
      ],
      "answer": 2,
      "why": "If a quarter of any one limb of the nakedness is exposed, the prayer is not valid."
    },
    {
      "q": "Someone did his best to work out the qibla and later learns he was wrong. What should he do?",
      "options": [
        "Not repeat the prayer",
        "Repeat the prayer",
        "Repeat it only if still in time"
      ],
      "answer": 0,
      "why": "If he tried to work it out and later learns he was wrong, he does not repeat."
    }
  ],
  "sal-07": [
    {
      "q": "What happens if a wajib act is left out by mistake?",
      "options": [
        "The prayer is void",
        "It is made good with the prostration of forgetfulness",
        "Nothing at all is needed"
      ],
      "answer": 1,
      "why": "Leaving a wajib by mistake does not ruin the prayer but requires the prostration of forgetfulness."
    },
    {
      "q": "In which rak'ahs of an obligatory prayer is adding a surah to the Fatiha wajib?",
      "options": [
        "Every rak'ah",
        "Only the first rak'ah",
        "The first two rak'ahs"
      ],
      "answer": 2,
      "why": "A surah or three verses is wajib in the first two rak'ahs of an obligatory prayer."
    },
    {
      "q": "Is recitation in dhuhr and 'asr wajib aloud or silent?",
      "options": [
        "Silent",
        "Aloud",
        "The person may choose"
      ],
      "answer": 0,
      "why": "Recitation is wajib silently in dhuhr and 'asr."
    }
  ],
  "sal-08": [
    {
      "q": "Does missing a sunna of prayer require the prostration of forgetfulness?",
      "options": [
        "Yes, always",
        "Only if missed on purpose",
        "No"
      ],
      "answer": 2,
      "why": "Missing a sunna does not spoil the prayer or need the prostration of forgetfulness."
    },
    {
      "q": "Where does a man place his hands after the opening takbir?",
      "options": [
        "On his chest",
        "Right over left below the navel",
        "By his sides"
      ],
      "answer": 1,
      "why": "A man places his right hand over his left below the navel."
    },
    {
      "q": "How many times is 'Glory be to my Lord the Great' said in bowing as a sunna?",
      "options": [
        "Three",
        "Once",
        "Seven"
      ],
      "answer": 0,
      "why": "It is sunna to say it three times in bowing."
    }
  ],
  "sal-09": [
    {
      "q": "What spoils the prayer when saying the opening Allahu akbar?",
      "options": [
        "Saying it quietly",
        "Raising the hands",
        "Stretching the opening 'a' of Allah"
      ],
      "answer": 2,
      "why": "Stretching the opening 'a' of Allah or the 'a' and 'b' of akbar spoils the prayer."
    },
    {
      "q": "What does a follower say when rising from bowing?",
      "options": [
        "'Allah hears whoever praises Him'",
        "Only 'our Lord, all praise is Yours'",
        "Nothing"
      ],
      "answer": 1,
      "why": "The follower says only 'our Lord, all praise is Yours'."
    },
    {
      "q": "What is recited in the last two rak'ahs of a four-rak'ah obligatory prayer?",
      "options": [
        "Only the Fatiha",
        "The Fatiha and a surah",
        "The thana' and the Fatiha"
      ],
      "answer": 0,
      "why": "In the last two rak'ahs he recites only the Fatiha."
    }
  ],
  "sal-10": [
    {
      "q": "What is the ruling of congregation for a free man with no valid excuse?",
      "options": [
        "Merely allowed",
        "An emphasised sunna",
        "Disliked"
      ],
      "answer": 1,
      "why": "Congregation is an emphasised sunna for a free man with no valid excuse."
    },
    {
      "q": "Can someone praying obligatory follow an imam praying voluntary?",
      "options": [
        "Yes",
        "Only in Ramadan",
        "No, the imam would be in a weaker state"
      ],
      "answer": 2,
      "why": "The imam must not be in a weaker state, such as praying voluntary while the follower prays obligatory."
    },
    {
      "q": "If the imam's prayer turns out to be void, what must the followers do?",
      "options": [
        "Repeat their prayers",
        "Nothing, their prayers stand",
        "Do the prostration of forgetfulness"
      ],
      "answer": 0,
      "why": "If the imam's prayer is void, the followers repeat theirs."
    }
  ],
  "sal-11": [
    {
      "q": "Who has the most right to lead the prayer?",
      "options": [
        "The oldest person",
        "The best reciter",
        "The ruler"
      ],
      "answer": 2,
      "why": "The ruler has most right to lead, then the appointed imam or owner of the place."
    },
    {
      "q": "Someone intended to attend the congregation but was held back by an excuse. Is he rewarded?",
      "options": [
        "Yes",
        "No",
        "Only if he prays at home in a group"
      ],
      "answer": 0,
      "why": "Someone held back by an excuse who intended to attend is still rewarded."
    },
    {
      "q": "If women pray as a separate congregation, where does the woman leading stand?",
      "options": [
        "In front of the row",
        "In the middle of the row",
        "Behind the row"
      ],
      "answer": 1,
      "why": "The woman leading stands in the middle of the row."
    }
  ],
  "sal-12": [
    {
      "q": "Where does a single follower stand?",
      "options": [
        "On the imam's left",
        "Directly behind the imam",
        "On the imam's right"
      ],
      "answer": 2,
      "why": "A single follower stands on the imam's right."
    },
    {
      "q": "The imam gives salam before the follower finishes the tashahhud. What does the follower do?",
      "options": [
        "Completes the tashahhud, then gives salam",
        "Gives salam straight away",
        "Starts the prayer again"
      ],
      "answer": 0,
      "why": "The tashahhud is wajib, so the follower completes it, then gives salam."
    },
    {
      "q": "If the imam forgetfully stands up before the last sitting, what does the follower do?",
      "options": [
        "Stands with him",
        "Waits and says 'subhan Allah' to alert him",
        "Gives salam at once"
      ],
      "answer": 1,
      "why": "The follower does not follow him but waits, saying 'subhan Allah' to alert him."
    }
  ],
  "sal-13": [
    {
      "q": "Does speaking one word by mistake nullify the prayer?",
      "options": [
        "No, only deliberate speech",
        "Only if it is more than three words",
        "Yes"
      ],
      "answer": 2,
      "why": "Speaking even one word, forgetfully or by mistake, nullifies the prayer."
    },
    {
      "q": "Which of these is an example of excessive movement that nullifies the prayer?",
      "options": [
        "Three continuous steps",
        "Moving the eyes",
        "Adjusting one's sleeve once"
      ],
      "answer": 0,
      "why": "Excessive movement, such as three continuous steps, nullifies the prayer."
    },
    {
      "q": "Does weeping at the thought of Paradise or Hell nullify the prayer?",
      "options": [
        "Yes",
        "No",
        "Only if it is loud"
      ],
      "answer": 1,
      "why": "Crying out from pain nullifies it, but weeping at the thought of Paradise or Hell does not."
    }
  ],
  "sal-14": [
    {
      "q": "Someone praying with tayammum sees water he can use. What happens?",
      "options": [
        "He finishes and does not repeat",
        "The prayer ends",
        "He finishes and repeats later"
      ],
      "answer": 1,
      "why": "The prayer ends when someone with tayammum sees water he can use."
    },
    {
      "q": "If wudu breaks by accident, when may the person renew it and continue the same prayer?",
      "options": [
        "As long as he has not spoken",
        "Only in voluntary prayers",
        "Never"
      ],
      "answer": 0,
      "why": "He may renew wudu and continue the same prayer as long as he has not spoken."
    },
    {
      "q": "According to the book, which is better after wudu breaks by accident?",
      "options": [
        "Continuing the same prayer",
        "Doing tayammum",
        "Starting the prayer afresh"
      ],
      "answer": 2,
      "why": "The book says starting afresh is better."
    }
  ],
  "sal-15": [
    {
      "q": "Does someone passing in front of a person praying nullify the prayer?",
      "options": [
        "Yes",
        "No, though the person who passes sins",
        "Only if it is a woman"
      ],
      "answer": 1,
      "why": "Passing in front does not nullify the prayer, though the passer sins."
    },
    {
      "q": "Eating something between the teeth smaller than a chickpea in prayer is:",
      "options": [
        "Disliked but does not nullify",
        "A nullifier",
        "Completely fine"
      ],
      "answer": 0,
      "why": "Eating something between the teeth smaller than a chickpea does not nullify, though it is disliked."
    },
    {
      "q": "Which of these is disliked in recitation?",
      "options": [
        "Reciting the Fatiha in every rak'ah",
        "Reciting surahs in order",
        "Making the second rak'ah longer than the first"
      ],
      "answer": 2,
      "why": "It is disliked to make the second rak'ah longer than the first."
    }
  ],
  "sal-16": [
    {
      "q": "How high should a sutra be?",
      "options": [
        "A hand's length",
        "An arm's length or more",
        "Knee height exactly"
      ],
      "answer": 1,
      "why": "The barrier should be an arm's length or more high and a finger thick."
    },
    {
      "q": "When is it wajib to break off a prayer, even obligatory?",
      "options": [
        "To answer a desperate cry for help",
        "To answer the ordinary call of a parent",
        "To answer the phone"
      ],
      "answer": 0,
      "why": "It is wajib to break off a prayer to answer a desperate cry for help."
    },
    {
      "q": "Who may carry out the punishment for abandoning prayer that the book describes?",
      "options": [
        "The person's family",
        "Any Muslim",
        "A legitimate ruling authority only"
      ],
      "answer": 2,
      "why": "The punishment is for a ruling authority only, never for individuals."
    }
  ],
  "slt-01": [
    {
      "q": "How many rak'ahs is witr, and how many salams?",
      "options": [
        "Three rak'ahs with one salam",
        "Three rak'ahs with two salams",
        "One rak'ah with one salam"
      ],
      "answer": 0,
      "why": "Witr is three rak'ahs with one salam at the end."
    },
    {
      "q": "When is the qunut recited in witr?",
      "options": [
        "After bowing in the second rak'ah",
        "Standing before bowing in the third rak'ah",
        "In the last sitting"
      ],
      "answer": 1,
      "why": "The qunut is recited standing before bowing in the third rak'ah."
    },
    {
      "q": "Someone forgets the qunut and remembers in bowing. What does he do?",
      "options": [
        "Goes back and recites it",
        "Restarts the prayer",
        "Does not go back, but does the prostration of forgetfulness"
      ],
      "answer": 2,
      "why": "He does not go back to it but does the prostration of forgetfulness."
    }
  ],
  "slt-02": [
    {
      "q": "Which is the most emphasised of all the sunna prayers?",
      "options": [
        "Four before dhuhr",
        "Two after maghrib",
        "Two before fajr"
      ],
      "answer": 2,
      "why": "The two rak'ahs before fajr are the most emphasised of all."
    },
    {
      "q": "How many emphasised sunna rak'ahs are prayed before dhuhr?",
      "options": [
        "Four",
        "Two",
        "Six"
      ],
      "answer": 0,
      "why": "The emphasised sunnas include four rak'ahs before dhuhr."
    },
    {
      "q": "What is the most voluntary rak'ahs one should pray with one salam in the day?",
      "options": [
        "Two",
        "Four",
        "Eight"
      ],
      "answer": 1,
      "why": "It is disliked to pray more than four voluntary rak'ahs with one salam in the day."
    }
  ],
  "slt-03": [
    {
      "q": "What is the reward for a voluntary prayer prayed seated without a reason?",
      "options": [
        "Half the reward",
        "No reward",
        "The full reward"
      ],
      "answer": 0,
      "why": "It may be prayed seated, but with half the reward unless there is a reason."
    },
    {
      "q": "Is prayer while walking valid?",
      "options": [
        "Yes, for voluntary prayers",
        "Yes, when travelling",
        "No, by consensus"
      ],
      "answer": 2,
      "why": "Prayer while walking is not valid by consensus."
    },
    {
      "q": "Can witr be prayed on a mount without necessity?",
      "options": [
        "Yes, like any voluntary prayer",
        "No, it is wajib",
        "Only during travel"
      ],
      "answer": 1,
      "why": "Obligatory and wajib prayers such as witr are not valid on a mount except out of necessity."
    }
  ],
  "slt-04": [
    {
      "q": "How many rak'ahs is tarawih?",
      "options": [
        "Eight with four salams",
        "Twenty with ten salams",
        "Twelve with six salams"
      ],
      "answer": 1,
      "why": "Tarawih is twenty rak'ahs with ten salams."
    },
    {
      "q": "What happens with a missed tarawih?",
      "options": [
        "It is not made up",
        "It must be made up the next night",
        "It is made up after fajr"
      ],
      "answer": 0,
      "why": "A missed tarawih is not made up; praying it later counts as voluntary."
    },
    {
      "q": "Praying on the roof of the Ka'bah is:",
      "options": [
        "Invalid",
        "Recommended",
        "Valid but disliked"
      ],
      "answer": 2,
      "why": "Prayers are valid on the Ka'bah's roof, though praying there is disliked."
    }
  ],
  "slt-05": [
    {
      "q": "Roughly how far is the shortest journey that changes the rulings, by the translator's reckoning?",
      "options": [
        "81 km one way",
        "40 km one way",
        "160 km one way"
      ],
      "answer": 0,
      "why": "The translator's note reckons it as 81 km one way."
    },
    {
      "q": "When does the traveller begin shortening?",
      "options": [
        "Once he decides to travel",
        "Once past the buildings of his town and its attached land",
        "After a full day's travel"
      ],
      "answer": 1,
      "why": "He begins once he has passed the buildings of his town and the open land attached to them."
    },
    {
      "q": "What is the ruling of shortening in the Hanafi school?",
      "options": [
        "Recommended",
        "An optional concession",
        "Wajib"
      ],
      "answer": 2,
      "why": "Shortening is the original form of the traveller's prayer, so it is wajib."
    }
  ],
  "slt-06": [
    {
      "q": "How long must a traveller intend to stay in one town to stop shortening?",
      "options": [
        "Four days",
        "Fifteen days",
        "A month"
      ],
      "answer": 1,
      "why": "He shortens until he intends to stay fifteen days in one town or village."
    },
    {
      "q": "A traveller follows a resident imam within the time. How many rak'ahs does he pray?",
      "options": [
        "Four, with the imam",
        "Two, then leaves",
        "Two, then sits waiting"
      ],
      "answer": 0,
      "why": "A traveller following a resident imam within the time completes four rak'ahs with him."
    },
    {
      "q": "How is a prayer missed while travelling made up at home?",
      "options": [
        "As four rak'ahs",
        "As two rak'ahs",
        "It is not made up"
      ],
      "answer": 1,
      "why": "A prayer missed while travelling is made up as two rak'ahs, even at home."
    }
  ],
  "slt-07": [
    {
      "q": "When nodding, how must the nod for prostration compare with the nod for bowing?",
      "options": [
        "The same",
        "Higher",
        "Lower"
      ],
      "answer": 2,
      "why": "The nod for prostration must be lower than for bowing, or the prayer is invalid."
    },
    {
      "q": "Someone unable even to nod misses five prayers or fewer. What happens?",
      "options": [
        "They are made up",
        "They are forgiven",
        "Fidya is paid at once"
      ],
      "answer": 0,
      "why": "If it lasts five prayers or fewer, they are made up."
    },
    {
      "q": "How much fidya is due for each missed prayer?",
      "options": [
        "One sa' of dates",
        "Half a sa' of wheat or its value",
        "One dirham"
      ],
      "answer": 1,
      "why": "The fidya is half a sa' of wheat or its value for each prayer."
    }
  ],
  "slt-08": [
    {
      "q": "Someone missed fajr, dhuhr, 'asr and maghrib. In what order does he pray them?",
      "options": [
        "Maghrib first, then backwards",
        "In any order",
        "Fajr, dhuhr, 'asr, maghrib, then 'isha"
      ],
      "answer": 2,
      "why": "He prays them in order, then 'isha."
    },
    {
      "q": "At how many missed prayers is the order excused?",
      "options": [
        "Six, not counting witr",
        "Three",
        "Ten"
      ],
      "answer": 0,
      "why": "The order is excused when the missed prayers reach six, not counting witr."
    },
    {
      "q": "Someone became Muslim in enemy lands and did not know the obligations. What about prayers he missed?",
      "options": [
        "He must make them all up",
        "He is excused from making them up",
        "He pays fidya"
      ],
      "answer": 1,
      "why": "He is excused from making up what he missed."
    }
  ],
  "slt-09": [
    {
      "q": "How is a rak'ah caught with the imam?",
      "options": [
        "By joining before he prostrates",
        "By joining in the standing",
        "By joining him in bowing before he rises"
      ],
      "answer": 2,
      "why": "A rak'ah is caught only by joining the imam in bowing before he rises."
    },
    {
      "q": "Someone arrives while the imam is praying. Which sunna may he pray first?",
      "options": [
        "The fajr sunna, if sure he will still catch the imam",
        "Any sunna",
        "The dhuhr sunna"
      ],
      "answer": 0,
      "why": "He joins the imam, except for the fajr sunna if he is sure he will still catch him."
    },
    {
      "q": "When are the four rak'ahs before dhuhr made up if missed?",
      "options": [
        "The next day",
        "After dhuhr, before its two-rak'ah sunna",
        "They are not made up"
      ],
      "answer": 1,
      "why": "They are made up after dhuhr, before its two-rak'ah sunna, within dhuhr time."
    }
  ],
  "slt-10": [
    {
      "q": "How many times are the prostrations of forgetfulness done for several mistakes?",
      "options": [
        "Once only",
        "Once per mistake",
        "Twice"
      ],
      "answer": 0,
      "why": "They are done once only, even for several mistakes."
    },
    {
      "q": "Leaving out a wajib act on purpose means:",
      "options": [
        "The prostrations fix it",
        "Nothing is needed",
        "It is sinful and the prayer must be repeated"
      ],
      "answer": 2,
      "why": "Leaving a wajib on purpose is sinful and the prayer must be repeated."
    },
    {
      "q": "A follower makes his own mistake behind the imam. Who must do the prostrations?",
      "options": [
        "The imam",
        "Nobody",
        "The follower and the imam"
      ],
      "answer": 1,
      "why": "A follower's own mistake binds nobody."
    }
  ],
  "slt-11": [
    {
      "q": "Someone gives salam after two rak'ahs of a four-rak'ah prayer, thinking he has finished. What does he do?",
      "options": [
        "Restarts the prayer",
        "Completes the missing rak'ahs and does the prostrations of forgetfulness",
        "Nothing, the prayer is valid"
      ],
      "answer": 1,
      "why": "He completes the missing rak'ahs and does the prostrations of forgetfulness."
    },
    {
      "q": "Someone doubts how many rak'ahs he prayed, and such doubt is not a habit for him. What does he do?",
      "options": [
        "Builds on the smaller number",
        "Acts on what he thinks most likely",
        "Starts again"
      ],
      "answer": 2,
      "why": "If the doubt is not a habit, the prayer is void and he starts again."
    },
    {
      "q": "Someone is sure he had wudu but unsure whether he broke it. What is the ruling?",
      "options": [
        "He is still in wudu",
        "He must renew wudu",
        "He must do tayammum"
      ],
      "answer": 0,
      "why": "Certainty is not removed by doubt, so he is still in wudu."
    }
  ],
  "slt-12": [
    {
      "q": "On whom is the recital prostration wajib?",
      "options": [
        "The reciter only",
        "The reciter and the listener",
        "Only those who understand Arabic"
      ],
      "answer": 1,
      "why": "It is wajib on the reciter and the listener, even if he did not mean to listen and does not understand."
    },
    {
      "q": "Inside prayer, when must the recital prostration be done?",
      "options": [
        "Straight away",
        "After the prayer",
        "Any time that day"
      ],
      "answer": 0,
      "why": "Inside prayer it must be done straight away."
    },
    {
      "q": "If three or more verses follow the prostration verse in prayer, what is needed?",
      "options": [
        "The bowing covers it",
        "Nothing",
        "A separate prostration"
      ],
      "answer": 2,
      "why": "If three or more verses follow, a separate prostration is needed."
    }
  ],
  "slt-13": [
    {
      "q": "Someone repeats a prostration verse several times in the same sitting. How many prostrations are due?",
      "options": [
        "One for each recitation",
        "One",
        "None"
      ],
      "answer": 1,
      "why": "One prostration covers a verse repeated in the same sitting."
    },
    {
      "q": "How is the recital prostration done?",
      "options": [
        "One prostration between two takbirs, with no tashahhud or salam",
        "Two prostrations with a tashahhud and salam",
        "One prostration followed by a salam"
      ],
      "answer": 0,
      "why": "It is a single prostration between two takbirs, with no tashahhud or salam."
    },
    {
      "q": "Which of these is disliked?",
      "options": [
        "Reciting the prostration verse alone",
        "Reciting the verse quietly when others are not ready",
        "Reciting a surah and skipping its prostration verse"
      ],
      "answer": 2,
      "why": "It is disliked to recite a surah and skip its prostration verse."
    }
  ],
  "slt-14": [
    {
      "q": "Is the Friday prayer obligatory on a traveller?",
      "options": [
        "Yes",
        "No, though attending is preferred if he hears the call",
        "Only if he is in a city"
      ],
      "answer": 1,
      "why": "It is not obligatory on a traveller, though attending is preferred if he hears the call."
    },
    {
      "q": "How many men besides the imam are needed for the Friday group?",
      "options": [
        "One",
        "Forty",
        "Three"
      ],
      "answer": 2,
      "why": "The group is three men besides the imam."
    },
    {
      "q": "What happens if 'asr time enters during the Friday prayer?",
      "options": [
        "It is void",
        "It is valid but disliked",
        "It becomes dhuhr"
      ],
      "answer": 0,
      "why": "If 'asr time enters during the Friday prayer, it is void."
    }
  ],
  "slt-15": [
    {
      "q": "What becomes obligatory at the first adhan of Friday?",
      "options": [
        "Praying four sunna rak'ahs",
        "Setting off and stopping buying and selling",
        "Reciting Surat al-Kahf"
      ],
      "answer": 1,
      "why": "It is obligatory to set off and stop buying and selling at the first adhan."
    },
    {
      "q": "Once the imam comes out for the sermon, may one return a greeting?",
      "options": [
        "No",
        "Yes, quietly",
        "Only if near the imam"
      ],
      "answer": 0,
      "why": "Once the imam comes out there is no talking, and one does not return a greeting."
    },
    {
      "q": "Someone joins the imam only in the last tashahhud of the Friday prayer. What does he complete?",
      "options": [
        "Four rak'ahs of dhuhr",
        "Nothing more",
        "The Friday prayer"
      ],
      "answer": 2,
      "why": "Someone who joins the imam even in the last tashahhud completes the Friday prayer."
    }
  ],
  "slt-16": [
    {
      "q": "When is the Eid sermon given?",
      "options": [
        "Before the prayer",
        "After the prayer",
        "There is no sermon"
      ],
      "answer": 1,
      "why": "The Eid sermon is a sunna given after the prayer; giving it first is contrary to the sunna."
    },
    {
      "q": "How many extra takbirs are said in each rak'ah of the Eid prayer?",
      "options": [
        "Three",
        "Seven",
        "One"
      ],
      "answer": 0,
      "why": "Three extra takbirs are said in each rak'ah, with the hands raised."
    },
    {
      "q": "Someone misses the Eid prayer with the imam. What does he do?",
      "options": [
        "Prays it alone later",
        "Prays it the next day",
        "Does not make it up alone"
      ],
      "answer": 2,
      "why": "Someone who misses the Eid prayer with the imam does not make it up alone."
    }
  ],
  "slt-17": [
    {
      "q": "On Eid al-Adha, when is it recommended to eat?",
      "options": [
        "Before leaving for the prayer",
        "After the prayer",
        "Only at sunset"
      ],
      "answer": 1,
      "why": "On Eid al-Adha one delays eating until after the prayer."
    },
    {
      "q": "Which are the days of tashriq?",
      "options": [
        "The 11th, 12th and 13th of Dhu al-Hijjah",
        "The 8th, 9th and 10th",
        "The 10th, 11th and 12th"
      ],
      "answer": 0,
      "why": "The days of tashriq are the 11th, 12th and 13th of Dhu al-Hijjah."
    },
    {
      "q": "According to the fatwa, until when is the takbir of tashriq said?",
      "options": [
        "Until 'asr on the day of Eid",
        "Until maghrib on the day of Arafah",
        "Until 'asr of the last day of tashriq"
      ],
      "answer": 2,
      "why": "The fatwa follows the two companions: until 'asr of the last day of tashriq."
    }
  ],
  "slt-18": [
    {
      "q": "How is the recitation in the solar eclipse prayer?",
      "options": [
        "Aloud",
        "Silent",
        "There is none"
      ],
      "answer": 1,
      "why": "In the eclipse prayer recitation is silent."
    },
    {
      "q": "How is a lunar eclipse prayer prayed?",
      "options": [
        "Individually",
        "In congregation with a sermon",
        "With an adhan and iqama"
      ],
      "answer": 0,
      "why": "A lunar eclipse is prayed individually."
    },
    {
      "q": "According to Abu Hanifa, what is the essence of seeking rain?",
      "options": [
        "A congregational prayer",
        "Turning the cloak around",
        "Asking forgiveness"
      ],
      "answer": 2,
      "why": "Abu Hanifa held that the essence of seeking rain is asking forgiveness."
    }
  ],
  "slt-19": [
    {
      "q": "When is the fear prayer permitted?",
      "options": [
        "Only during a declared war",
        "When an enemy or predator is present, or one fears drowning or burning",
        "Whenever one is in a hurry"
      ],
      "answer": 1,
      "why": "It is permitted when an enemy or predator is present, or one fears drowning or burning."
    },
    {
      "q": "Why does the first group complete its prayer without recitation?",
      "options": [
        "The imam's recitation counts for them",
        "They are latecomers",
        "There is no time"
      ],
      "answer": 0,
      "why": "The imam's recitation counts for the first group."
    },
    {
      "q": "If the fear becomes intense, how does each person pray?",
      "options": [
        "In two groups as normal",
        "He delays the prayer",
        "Alone, riding and nodding"
      ],
      "answer": 2,
      "why": "If fear becomes intense, each person prays alone, riding and nodding."
    }
  ],
  "jan-01": [
    {
      "q": "Which side is it sunna to turn a dying person onto?",
      "options": [
        "The left side",
        "The right side",
        "Face down"
      ],
      "answer": 1,
      "why": "It is sunna to turn the dying person onto his right side."
    },
    {
      "q": "How should you prompt a dying person with the testimony of faith?",
      "options": [
        "Say 'There is no god but Allah' near him so he can repeat it",
        "Tell him firmly to say it",
        "Keep insisting until he says it"
      ],
      "answer": 0,
      "why": "You say it near him gently, without telling him 'Say it' or insisting, as he may become annoyed."
    },
    {
      "q": "Where are the hands of the deceased placed after death?",
      "options": [
        "Folded on the chest",
        "Raised above the head",
        "By the sides"
      ],
      "answer": 2,
      "why": "The hands are placed by the sides, not on the chest."
    }
  ],
  "jan-02": [
    {
      "q": "When the deceased is given wudu, what is left out?",
      "options": [
        "Washing the face",
        "Rinsing the mouth and nose",
        "Washing the feet"
      ],
      "answer": 1,
      "why": "The deceased is given wudu without rinsing the mouth and nose, unless he died in major impurity, menstruation or postnatal bleeding."
    },
    {
      "q": "What is done if something comes out after the stomach is gently pressed?",
      "options": [
        "It is washed away and the washing is not repeated",
        "The whole washing is repeated",
        "The wudu is repeated"
      ],
      "answer": 0,
      "why": "Whatever comes out is washed away and the washing is not repeated."
    },
    {
      "q": "What is done with the deceased's hair and nails?",
      "options": [
        "They are trimmed neatly",
        "The hair is combed only",
        "They are not cut, trimmed or combed"
      ],
      "answer": 2,
      "why": "The hair and nails are not cut, trimmed or combed."
    }
  ],
  "jan-03": [
    {
      "q": "Who may wash a deceased husband?",
      "options": [
        "Only his male relatives",
        "His wife",
        "No one but a paid washer"
      ],
      "answer": 1,
      "why": "A wife may wash her deceased husband because she is still counted as his wife during her waiting period."
    },
    {
      "q": "A woman dies among men only. What do they do?",
      "options": [
        "Give her tayammum with a cloth wrapped round the hand",
        "Wash her fully",
        "Bury her without any purification"
      ],
      "answer": 0,
      "why": "If a woman dies among men only, they give her tayammum with a cloth wrapped round the hand."
    },
    {
      "q": "The deceased left no money and has no one obliged to support him. Who pays for the shroud?",
      "options": [
        "The person who washes him",
        "The local mosque imam",
        "The public treasury (bayt al-mal)"
      ],
      "answer": 2,
      "why": "If there is no one obliged to support him, the shroud comes from the public treasury."
    }
  ],
  "jan-04": [
    {
      "q": "How many cloths make up the sunna shroud for a man?",
      "options": [
        "Two",
        "Three",
        "Five"
      ],
      "answer": 1,
      "why": "The sunna shroud for a man is three cloths: a shirt, an inner wrapper and an outer wrapper."
    },
    {
      "q": "How many pieces make up the sunna shroud for a woman?",
      "options": [
        "Three",
        "Four",
        "Five"
      ],
      "answer": 2,
      "why": "A woman's sunna shroud is five pieces: shirt, head veil, inner wrapper, outer wrapper and a chest cloth."
    },
    {
      "q": "Which is best for a shroud?",
      "options": [
        "White cotton",
        "The most expensive silk available",
        "A coloured cloth with pockets"
      ],
      "answer": 0,
      "why": "White cotton is best, without extravagance."
    }
  ],
  "jan-05": [
    {
      "q": "What kind of obligation is the funeral prayer?",
      "options": [
        "An individual obligation on every Muslim",
        "A communal obligation",
        "Only a recommended act"
      ],
      "answer": 1,
      "why": "It is a communal obligation: if some perform it, the rest are freed of the duty."
    },
    {
      "q": "What are the two pillars of the funeral prayer?",
      "options": [
        "Bowing and prostration",
        "Reciting al-Fatiha and the salams",
        "The takbirs and standing"
      ],
      "answer": 2,
      "why": "Its pillars are the takbirs and standing."
    },
    {
      "q": "Can the funeral prayer be performed over someone whose body is absent?",
      "options": [
        "No, the body must be placed in front of those praying",
        "Yes, always",
        "Yes, if the family asks"
      ],
      "answer": 0,
      "why": "The body must be in front of those praying; the prayer over the Negus was special to him."
    }
  ],
  "jan-06": [
    {
      "q": "What is said after the second takbir of the funeral prayer?",
      "options": [
        "The opening praise (thana)",
        "Blessings on the Prophet ﷺ",
        "The salams"
      ],
      "answer": 1,
      "why": "After the second takbir one says the blessings on the Prophet ﷺ."
    },
    {
      "q": "When are the hands raised in the funeral prayer?",
      "options": [
        "Only for the first takbir",
        "For every takbir",
        "Only for the last takbir"
      ],
      "answer": 0,
      "why": "The hands are raised only for the first takbir."
    },
    {
      "q": "If the imam says a fifth takbir, what do the followers do?",
      "options": [
        "Follow him in it",
        "End the prayer straight away",
        "Wait for his salams without following"
      ],
      "answer": 2,
      "why": "The followers do not follow a fifth takbir but wait for his salams."
    }
  ],
  "jan-07": [
    {
      "q": "Who has more right to lead the funeral prayer: the father or the son of the deceased?",
      "options": [
        "The son",
        "The father",
        "They have equal right"
      ],
      "answer": 1,
      "why": "The father has more right than the son."
    },
    {
      "q": "Someone was buried without the funeral prayer. What is done?",
      "options": [
        "Nothing can be done",
        "The body is dug up and prayed over",
        "It is prayed over the grave if the body is not thought to have decomposed"
      ],
      "answer": 2,
      "why": "It is prayed over the grave as long as the body is not thought to have decomposed."
    },
    {
      "q": "In one prayer over several bodies, who is placed nearest the imam?",
      "options": [
        "Men",
        "Women",
        "Boys"
      ],
      "answer": 0,
      "why": "Men are placed nearest the imam, then boys, then hermaphrodites, then women."
    }
  ],
  "jan-08": [
    {
      "q": "A newborn cried and then died. What is done?",
      "options": [
        "Buried without washing",
        "Named, washed and prayed over",
        "Washed but not prayed over"
      ],
      "answer": 1,
      "why": "A newborn who showed signs of life such as crying is named, washed and prayed over."
    },
    {
      "q": "A baby made no sound at birth. What is done?",
      "options": [
        "Washed, wrapped, named and buried without the prayer",
        "Washed, shrouded and prayed over",
        "Buried without being washed or named"
      ],
      "answer": 0,
      "why": "A baby who made no sound is washed, wrapped in a cloth, named and buried without the prayer."
    },
    {
      "q": "Is someone who killed himself prayed over, on the soundest view?",
      "options": [
        "No, never",
        "Only if he left a will",
        "Yes, he is washed and prayed over"
      ],
      "answer": 2,
      "why": "According to Abu Hanifa and Muhammad, the soundest view, he is washed and prayed over."
    }
  ],
  "jan-09": [
    {
      "q": "How many steps is each person to carry the bier in the sunna way?",
      "options": [
        "Ten",
        "Forty",
        "Seventy"
      ],
      "answer": 1,
      "why": "Each person carries it for forty steps: ten at each of the four corners."
    },
    {
      "q": "Where is it better to walk in a funeral procession?",
      "options": [
        "Behind the bier",
        "In front of the bier",
        "Far to the side"
      ],
      "answer": 0,
      "why": "Walking behind the bier is better than walking in front of it."
    },
    {
      "q": "What is disliked while following the bier?",
      "options": [
        "Remembering Allah quietly",
        "Staying silent",
        "Loud Quran recitation"
      ],
      "answer": 2,
      "why": "Loud remembrance or loud recitation is disliked; one stays silent or remembers Allah quietly."
    }
  ],
  "jan-10": [
    {
      "q": "Which is generally better, the lahd or the shaq?",
      "options": [
        "The shaq",
        "The lahd",
        "They are equal"
      ],
      "answer": 1,
      "why": "The lahd is better than the shaq, though in soft ground the shaq is preferred."
    },
    {
      "q": "How is the deceased laid in the grave?",
      "options": [
        "On his back facing the sky",
        "On his left side",
        "On his right side facing the qibla"
      ],
      "answer": 2,
      "why": "The deceased is laid on his right side facing the qibla."
    },
    {
      "q": "How is the top of the grave shaped?",
      "options": [
        "Raised in a hump",
        "Flattened square",
        "Built up with decoration"
      ],
      "answer": 0,
      "why": "The grave is raised in a hump, not flattened square."
    }
  ],
  "jan-11": [
    {
      "q": "How far may a body be moved for burial without it being disliked?",
      "options": [
        "To another country",
        "A mile or two",
        "To any city the family chooses"
      ],
      "answer": 1,
      "why": "Moving him a mile or two is no harm, but further is disliked."
    },
    {
      "q": "Who is recommended to prepare food after a death?",
      "options": [
        "The bereaved family, for their guests",
        "No one at all",
        "Neighbours and distant relatives, for the family"
      ],
      "answer": 2,
      "why": "Neighbours and distant relatives prepare food for the family for a day and a night; a family feast is disliked."
    },
    {
      "q": "May a grave be opened because the body was placed facing the wrong way?",
      "options": [
        "No",
        "Yes, always",
        "Yes, within three days"
      ],
      "answer": 0,
      "why": "A grave may be opened to recover property, but not because the body faces the wrong way."
    }
  ],
  "jan-12": [
    {
      "q": "Who is recommended to visit graves, on the soundest view?",
      "options": [
        "Men only",
        "Men and women",
        "Close relatives only"
      ],
      "answer": 1,
      "why": "Visiting graves is recommended for men and women according to the soundest view."
    },
    {
      "q": "Does the reward of charity or Quran recitation gifted to the dead reach them?",
      "options": [
        "No, never",
        "Only Hajj reaches them",
        "Yes, it reaches them"
      ],
      "answer": 2,
      "why": "A person may give the reward of his good deeds to the dead, and it reaches them."
    },
    {
      "q": "Which is disliked at graves?",
      "options": [
        "Pulling up fresh green grass",
        "Removing dry grass",
        "Standing to supplicate"
      ],
      "answer": 0,
      "why": "Pulling up fresh plants is disliked because they glorify Allah while green; removing dry grass is no harm."
    }
  ],
  "jan-13": [
    {
      "q": "Is the complete martyr washed?",
      "options": [
        "Yes, like everyone else",
        "No, he is shrouded in his own clothes and blood",
        "Only his wounds are washed"
      ],
      "answer": 1,
      "why": "The complete martyr is not washed but is shrouded in his own clothes and blood."
    },
    {
      "q": "Is the complete martyr prayed over?",
      "options": [
        "No",
        "Only if he is a child",
        "Yes"
      ],
      "answer": 2,
      "why": "The complete martyr is shrouded in his clothes and is prayed over."
    },
    {
      "q": "Someone who drowns is a martyr of the hereafter. How is he treated?",
      "options": [
        "Washed, shrouded and prayed over like others",
        "Not washed, like a battlefield martyr",
        "Buried without the prayer"
      ],
      "answer": 0,
      "why": "Martyrs of the hereafter only, such as those who drown, are washed, shrouded and prayed over like others."
    }
  ],
  "saw-01": [
    {
      "q": "What is the cause of the obligation to fast Ramadan?",
      "options": [
        "Reaching the age of forty",
        "The arrival of Ramadan",
        "Being in a Muslim country"
      ],
      "answer": 1,
      "why": "The cause of the obligation is the arrival of Ramadan, each day being the cause for that day's fast."
    },
    {
      "q": "Someone becomes Muslim halfway through Ramadan. What about the days already passed?",
      "options": [
        "He must make them all up",
        "He pays fidya for them",
        "He does not make them up"
      ],
      "answer": 2,
      "why": "He fasts what remains and does not make up what has passed."
    },
    {
      "q": "Does being in a state of major impurity at dawn affect the fast?",
      "options": [
        "No",
        "Yes, it breaks it",
        "Yes, it needs expiation"
      ],
      "answer": 0,
      "why": "Being in a state of major impurity at dawn does not affect the fast."
    }
  ],
  "saw-02": [
    {
      "q": "Which days is it prohibitively disliked to fast?",
      "options": [
        "Mondays and Thursdays",
        "The two Eids and the days of tashriq",
        "The 13th, 14th and 15th of the month"
      ],
      "answer": 1,
      "why": "Fasting the two Eids and the days of tashriq is prohibitively disliked."
    },
    {
      "q": "The sunna fast of Ashura is the 10th of Muharram together with which day?",
      "options": [
        "The 9th",
        "The 1st",
        "The 15th"
      ],
      "answer": 0,
      "why": "The sunna fast is Ashura together with the 9th; fasting it alone is somewhat disliked."
    },
    {
      "q": "What is the ruling on making up a voluntary fast that was broken?",
      "options": [
        "Sunna",
        "Recommended",
        "Necessary (wajib)"
      ],
      "answer": 2,
      "why": "Making up a broken voluntary fast is a necessary (wajib) fast."
    }
  ],
  "saw-03": [
    {
      "q": "Until when can the intention for a Ramadan fast be made?",
      "options": [
        "Only before dawn",
        "Just before midday",
        "Until sunset"
      ],
      "answer": 1,
      "why": "For Ramadan the intention may be made from sunset until just before midday."
    },
    {
      "q": "When must the intention for making up a missed Ramadan fast be made?",
      "options": [
        "At night before dawn",
        "Any time before midday",
        "After the afternoon prayer"
      ],
      "answer": 0,
      "why": "Making up Ramadan needs a specific intention made at night before dawn."
    },
    {
      "q": "A healthy resident fasts in Ramadan intending a different wajib fast. What does it count as?",
      "options": [
        "The other fast",
        "Nothing at all",
        "Ramadan"
      ],
      "answer": 2,
      "why": "He gets Ramadan, not the other fast."
    }
  ],
  "saw-04": [
    {
      "q": "If the moon cannot be seen after the 29th of Sha'ban, what happens?",
      "options": [
        "Ramadan begins the next day anyway",
        "Sha'ban is completed as thirty days",
        "People wait for a second sighting"
      ],
      "answer": 1,
      "why": "If it cannot be seen, Sha'ban is completed as thirty days and then fasting begins."
    },
    {
      "q": "Someone on the day of doubt says 'if it is Ramadan I am fasting, if not I am not'. It turns out to be Ramadan. What then?",
      "options": [
        "His fast counts",
        "He owes expiation",
        "He must make the day up"
      ],
      "answer": 2,
      "why": "Someone who wavers is not fasting and must make the day up if it was Ramadan."
    },
    {
      "q": "Someone alone sees the moon of Ramadan and the judge does not believe him. What must he do?",
      "options": [
        "Fast",
        "Wait for others to fast",
        "Fast only if he wishes"
      ],
      "answer": 0,
      "why": "Whoever alone sees the moon of Ramadan and is not believed must fast."
    }
  ],
  "saw-05": [
    {
      "q": "With a cloudy sky, how many witnesses does the imam need for the Ramadan moon?",
      "options": [
        "One upright person",
        "Two free men",
        "A large group"
      ],
      "answer": 0,
      "why": "If the sky is obstructed, the report of one upright person is accepted for Ramadan."
    },
    {
      "q": "With a cloudy sky, what is required for the Eid al-Fitr moon?",
      "options": [
        "One person of unknown state",
        "Two free men, or one free man and two free women",
        "Any single woman"
      ],
      "answer": 1,
      "why": "For Eid al-Fitr with an obstructed sky, two free men or one free man and two free women must testify."
    },
    {
      "q": "On the fatwa view, does a sighting confirmed in one region bind other regions?",
      "options": [
        "No, each region sights its own moon",
        "Only nearby towns",
        "Yes, it binds all other regions"
      ],
      "answer": 2,
      "why": "On the view the fatwa is given on, a sighting confirmed in one region binds all regions."
    }
  ],
  "saw-06": [
    {
      "q": "Someone eats forgetfully while fasting. What is the ruling?",
      "options": [
        "His fast is broken",
        "His fast is not broken",
        "He owes expiation"
      ],
      "answer": 1,
      "why": "Eating, drinking or intercourse done forgetfully does not break the fast."
    },
    {
      "q": "Does vomiting without choice break the fast?",
      "options": [
        "No, even a mouthful",
        "Yes, if it is a mouthful",
        "Yes, always"
      ],
      "answer": 0,
      "why": "Vomiting without choice does not break the fast, even a mouthful."
    },
    {
      "q": "Does applying kohl break the fast?",
      "options": [
        "Yes, and it needs a make-up day",
        "Yes, and it needs expiation",
        "No"
      ],
      "answer": 2,
      "why": "Applying oil or kohl does not break the fast."
    }
  ],
  "saw-07": [
    {
      "q": "What does deliberate intercourse during a Ramadan fast require?",
      "options": [
        "A make-up day only",
        "Expiation and a make-up day",
        "Nothing if there is no ejaculation"
      ],
      "answer": 1,
      "why": "It breaks the fast of both partners and requires expiation and a make-up day, with or without ejaculation."
    },
    {
      "q": "Someone deliberately eats a little food in a Ramadan fast. What does he owe?",
      "options": [
        "Expiation and a make-up day",
        "A make-up day only",
        "Nothing, as it was little"
      ],
      "answer": 0,
      "why": "Eating or drinking for food or medicine, even a little, requires expiation and make-up."
    },
    {
      "q": "Which of these deliberately swallowed requires expiation?",
      "options": [
        "Water slipping down while rinsing the mouth",
        "A fly entering the throat",
        "Rain that enters the mouth"
      ],
      "answer": 2,
      "why": "Deliberately swallowing rain that enters the mouth requires expiation."
    }
  ],
  "saw-08": [
    {
      "q": "If one cannot free a slave, what is the next expiation?",
      "options": [
        "Feeding ten poor people",
        "Fasting two consecutive months",
        "Fasting thirty days"
      ],
      "answer": 1,
      "why": "If one cannot free a slave, one fasts two consecutive months."
    },
    {
      "q": "If one cannot fast two months, how many poor people must be fed?",
      "options": [
        "Ten",
        "Thirty",
        "Sixty"
      ],
      "answer": 2,
      "why": "If one cannot fast, one feeds sixty poor people."
    },
    {
      "q": "Someone deliberately breaks his fast, then falls ill that same day in a way that allows breaking it. What happens to the expiation?",
      "options": [
        "It falls away",
        "It is doubled",
        "It stays owed"
      ],
      "answer": 0,
      "why": "The expiation falls away if he falls ill that day in a way that allows breaking the fast, unless he made himself ill deliberately."
    }
  ],
  "saw-09": [
    {
      "q": "Someone swallows a pebble while fasting. What does he owe?",
      "options": [
        "Expiation and a make-up day",
        "A make-up day only",
        "Nothing"
      ],
      "answer": 1,
      "why": "Swallowing a pebble breaks the fast without expiation."
    },
    {
      "q": "Water slips down the throat while rinsing the mouth. What is the ruling?",
      "options": [
        "The fast is broken without expiation",
        "It does not break the fast, like forgetfulness",
        "It requires expiation"
      ],
      "answer": 0,
      "why": "Water slipping down while rinsing breaks the fast without expiation; this differs from forgetfulness."
    },
    {
      "q": "A woman is forced into intercourse while fasting. Does she owe expiation?",
      "options": [
        "Yes",
        "Yes, and two make-up days",
        "No"
      ],
      "answer": 2,
      "why": "A woman forced into intercourse owes no expiation."
    }
  ],
  "saw-10": [
    {
      "q": "Someone breaks his fast thinking the sun had set, but it had not. What does he owe?",
      "options": [
        "Nothing",
        "A make-up day only",
        "Expiation and a make-up day"
      ],
      "answer": 1,
      "why": "Breaking the fast thinking the sun had set when it had not needs a make-up day without expiation."
    },
    {
      "q": "What does deliberately vomiting a mouthful require?",
      "options": [
        "Nothing",
        "Expiation",
        "A make-up day"
      ],
      "answer": 2,
      "why": "Deliberately vomiting a mouthful breaks the fast and needs a make-up day, not expiation."
    },
    {
      "q": "A woman's period ends after dawn in Ramadan. What must she do for the rest of the day?",
      "options": [
        "Refrain from eating",
        "Eat normally",
        "Begin a voluntary fast"
      ],
      "answer": 0,
      "why": "A woman whose period ends after dawn must refrain from eating for the rest of the day."
    }
  ],
  "saw-11": [
    {
      "q": "Is using the siwak disliked for a fasting person?",
      "options": [
        "Yes, after midday",
        "No, not at any time of day",
        "Yes, if it is wet"
      ],
      "answer": 1,
      "why": "Using the siwak at any time of day, even a wet one, is not disliked."
    },
    {
      "q": "Which of these is recommended for the fasting person?",
      "options": [
        "Eating sahur early in the night",
        "Delaying breaking the fast",
        "Hurrying to break the fast when the sky is clear"
      ],
      "answer": 2,
      "why": "Recommended: eating sahur, delaying it to shortly before dawn, and hurrying to break the fast."
    },
    {
      "q": "Is tasting food without a reason disliked while fasting?",
      "options": [
        "Yes",
        "No",
        "Only in the last ten days"
      ],
      "answer": 0,
      "why": "Tasting or chewing something without a reason is disliked."
    }
  ],
  "saw-12": [
    {
      "q": "A sick person may break the fast if he fears what?",
      "options": [
        "Feeling a little tired",
        "The illness worsening or recovery being delayed",
        "Missing a meal"
      ],
      "answer": 1,
      "why": "The sick may break the fast if they fear the illness will worsen or recovery be delayed."
    },
    {
      "q": "Must missed Ramadan days be made up consecutively?",
      "options": [
        "Yes, always",
        "Yes, before Shawwal ends",
        "No, though making them up soon is recommended"
      ],
      "answer": 2,
      "why": "Missed days need not be made up consecutively, though making them up soon is recommended."
    },
    {
      "q": "The next Ramadan arrives before old days are made up. What then?",
      "options": [
        "Fast Ramadan, make up the old days after, with no fidya for the delay",
        "Make up the old days first",
        "Pay fidya instead of the old days"
      ],
      "answer": 0,
      "why": "One fasts Ramadan and makes up the old days afterwards, with no fidya for the delay."
    }
  ],
  "saw-13": [
    {
      "q": "How much is the fidya for each missed day for a frail elderly person?",
      "options": [
        "One sa' of wheat",
        "Half a sa' of wheat (1.6 kg) or its value",
        "A single meal"
      ],
      "answer": 1,
      "why": "The fidya is half a sa' of wheat, given as 1.6 kg, or its value in cash."
    },
    {
      "q": "Can fidya replace the fasting required as the Ramadan expiation?",
      "options": [
        "Yes, for anyone",
        "Yes, for the elderly",
        "No"
      ],
      "answer": 2,
      "why": "Fidya is not valid in place of the Ramadan expiation, even for someone too old to fast."
    },
    {
      "q": "Someone breaks a voluntary fast without a reason. What follows?",
      "options": [
        "He must make it up",
        "He owes expiation",
        "Nothing at all"
      ],
      "answer": 0,
      "why": "According to Abu Yusuf it may be broken without a reason, but it must then be made up."
    }
  ],
  "saw-14": [
    {
      "q": "Does a vow to perform the Zuhr prayer bind?",
      "options": [
        "Yes",
        "No, because it is already obligatory",
        "Only if made in a mosque"
      ],
      "answer": 1,
      "why": "A vow binds only if the act is not already obligatory, so vowing Zuhr does not bind."
    },
    {
      "q": "Someone fulfils a conditional vow before the condition happens. Does it count?",
      "options": [
        "Yes",
        "Yes, if he intended it",
        "No"
      ],
      "answer": 2,
      "why": "A conditional vow is fulfilled when the condition happens; fulfilling it before does not count."
    },
    {
      "q": "Someone vows to fast in Sha'ban but fasts in Rajab instead. Is it valid?",
      "options": [
        "Yes, the time named does not bind",
        "No, he must fast in Sha'ban",
        "Only with expiation"
      ],
      "answer": 0,
      "why": "The time named in a vow does not bind, so fasting Rajab instead of Sha'ban is valid."
    }
  ],
  "saw-15": [
    {
      "q": "What is the minimum length of a wajib (vowed) i'tikaf?",
      "options": [
        "A moment",
        "A day",
        "Ten days"
      ],
      "answer": 1,
      "why": "A wajib i'tikaf needs fasting and cannot be less than a day."
    },
    {
      "q": "Which i'tikaf is an emphasised communal sunna?",
      "options": [
        "The first ten days of Ramadan",
        "Any Friday",
        "The last ten days of Ramadan"
      ],
      "answer": 2,
      "why": "I'tikaf in the last ten days of Ramadan is an emphasised communal sunna."
    },
    {
      "q": "Does intercourse forgetfully at night break the i'tikaf?",
      "options": [
        "Yes",
        "No, only if deliberate",
        "No, only if by day"
      ],
      "answer": 0,
      "why": "Intercourse breaks the i'tikaf whether deliberate or forgetful, by day or by night."
    }
  ],
  "zak-01": [
    {
      "q": "Which of these owes zakat if it is not kept for trade?",
      "options": [
        "A family car",
        "Gold that reaches the nisab",
        "The house you live in"
      ],
      "answer": 1,
      "why": "Zakat is due on wealth that grows, such as gold, but not on cars or housing unless they are for trade."
    },
    {
      "q": "When does zakat become due on wealth?",
      "options": [
        "As soon as you own any amount",
        "At the start of every Ramadan",
        "Once the nisab has been owned for a full year"
      ],
      "answer": 2,
      "why": "Zakat becomes due once the nisab has been owned for a full year."
    },
    {
      "q": "What is needed for zakat to be valid?",
      "options": [
        "The payer intends zakat when giving it or setting it aside",
        "The poor person is told it is zakat",
        "It is handed over in front of a witness"
      ],
      "answer": 0,
      "why": "The payer must intend zakat, and the poor person does not need to know it is zakat."
    }
  ],
  "zak-02": [
    {
      "q": "What is the nisab of gold, as given in the book?",
      "options": [
        "About 700 grams",
        "About 87 grams",
        "About 20 grams"
      ],
      "answer": 1,
      "why": "The nisab of gold is twenty mithqals, given as about 87 grams."
    },
    {
      "q": "What rate of zakat is due on gold and silver?",
      "options": [
        "2.5%",
        "5%",
        "10%"
      ],
      "answer": 0,
      "why": "Half a mithqal on twenty mithqals, or five dirhams on 200, is 2.5%."
    },
    {
      "q": "Which of these does NOT owe zakat?",
      "options": [
        "Gold jewellery",
        "Silver utensils",
        "Pearls and gems"
      ],
      "answer": 2,
      "why": "Zakat is due on gold and silver jewellery and utensils, but not on gems and pearls."
    }
  ],
  "zak-03": [
    {
      "q": "Which livestock owe zakat?",
      "options": [
        "Animals fed on fodder the owner buys",
        "Animals that graze on open pasture for most of the year",
        "Any animals, however they are fed"
      ],
      "answer": 1,
      "why": "Zakat on livestock requires that they graze on open pasture for all or most of the year."
    },
    {
      "q": "What is the smallest number of sheep and goats that owes zakat?",
      "options": [
        "Forty",
        "Five",
        "Thirty"
      ],
      "answer": 0,
      "why": "There is no zakat on fewer than forty sheep and goats."
    },
    {
      "q": "How much is due on five to nine camels?",
      "options": [
        "A one-year-old she-camel",
        "Nothing at all",
        "One sheep"
      ],
      "answer": 2,
      "why": "Five to nine camels owe one sheep."
    }
  ],
  "zak-04": [
    {
      "q": "How much zakat is due on crops watered mainly by rain?",
      "options": [
        "2.5%",
        "5%",
        "10%"
      ],
      "answer": 2,
      "why": "Rain-watered crops owe one tenth (10%), while irrigated crops owe half that."
    },
    {
      "q": "When is zakat on crops due?",
      "options": [
        "After a full year has passed",
        "On the day of harvest",
        "At the end of Ramadan"
      ],
      "answer": 1,
      "why": "No year has to pass: zakat on crops is due on the day of harvest."
    },
    {
      "q": "When valuing trade goods, which of gold or silver is used?",
      "options": [
        "Whichever gives the nisab or most benefits the poor",
        "Always gold",
        "Whichever gives the payer the lowest amount"
      ],
      "answer": 0,
      "why": "One uses whichever of gold or silver gives the nisab or is more beneficial for the poor."
    }
  ],
  "zak-05": [
    {
      "q": "How much is due on treasure (rikaz) found in the ground?",
      "options": [
        "A tenth",
        "A fifth",
        "2.5%"
      ],
      "answer": 1,
      "why": "A fifth (20%) is due on treasure."
    },
    {
      "q": "When is the fifth on treasure due?",
      "options": [
        "Immediately on finding it",
        "After holding it for a year",
        "At harvest time"
      ],
      "answer": 0,
      "why": "A fifth is due immediately on finding it."
    },
    {
      "q": "Where does the fifth taken from treasure go?",
      "options": [
        "Only to the poor",
        "To the eight zakat recipients",
        "To the general benefit of the country"
      ],
      "answer": 2,
      "why": "It is added to the spoils of war and used for the general benefit, not given specifically to zakat recipients."
    }
  ],
  "zak-06": [
    {
      "q": "How many categories of people may receive zakat?",
      "options": [
        "Five",
        "Eight",
        "Ten"
      ],
      "answer": 1,
      "why": "Allah names eight categories of zakat recipients in Surah al-Tawbah."
    },
    {
      "q": "Who is worse off, a faqir or a miskin?",
      "options": [
        "A miskin, who owns almost nothing",
        "A faqir, who owns nothing at all",
        "They are exactly the same"
      ],
      "answer": 0,
      "why": "A faqir owns less than a nisab, while a miskin owns nothing beyond a few basic necessities."
    },
    {
      "q": "Must zakat be divided between all eight categories?",
      "options": [
        "Yes, equally between all eight",
        "Yes, between at least three",
        "No, it may all go to one category"
      ],
      "answer": 2,
      "why": "One may give all of one's zakat to one category or divide it between them."
    }
  ],
  "zak-07": [
    {
      "q": "Can you give your zakat to your own child?",
      "options": [
        "Yes, if the child is poor",
        "No, because you already support them",
        "Only if the child is an adult"
      ],
      "answer": 1,
      "why": "The recipient must not be the payer's child or other dependant, since he already supports them."
    },
    {
      "q": "Can zakat be used to build a mosque?",
      "options": [
        "No",
        "Yes",
        "Only in a poor area"
      ],
      "answer": 0,
      "why": "The lesson states zakat may not be used to build a mosque."
    },
    {
      "q": "Which of these may NOT receive zakat?",
      "options": [
        "A poor Muslim neighbour",
        "A Muslim drowning in debt",
        "A rich person who owns a nisab"
      ],
      "answer": 2,
      "why": "Zakat may not be given to a rich person who owns a nisab."
    }
  ],
  "zak-08": [
    {
      "q": "When does sadaqah al-Fitr become due?",
      "options": [
        "At the start of Ramadan",
        "At dawn on the day of Eid al-Fitr",
        "After the Eid prayer"
      ],
      "answer": 1,
      "why": "It becomes due at dawn on the day of Eid al-Fitr."
    },
    {
      "q": "Must the nisab for sadaqah al-Fitr be held for a full year?",
      "options": [
        "No, and it need not be growing wealth",
        "Yes, like zakat",
        "Yes, and it must be growing wealth"
      ],
      "answer": 0,
      "why": "The nisab need not be held for a year or be growing wealth."
    },
    {
      "q": "When is it recommended to pay sadaqah al-Fitr?",
      "options": [
        "Only after the Eid prayer",
        "Only in the last ten nights",
        "After dawn and before the Eid prayer"
      ],
      "answer": 2,
      "why": "It is recommended to pay it after dawn and before the Eid prayer."
    }
  ],
  "zak-09": [
    {
      "q": "How much wheat is given for sadaqah al-Fitr?",
      "options": [
        "A full sa'",
        "Half a sa'",
        "Two sa'"
      ],
      "answer": 1,
      "why": "It is half a sa' of wheat, or a full sa' of dates or barley."
    },
    {
      "q": "Can sadaqah al-Fitr be paid in cash?",
      "options": [
        "Yes, and the fatwa is that cash is best",
        "No, it must be food",
        "Only if no food is available"
      ],
      "answer": 0,
      "why": "Paying the cash value is allowed, and the fatwa is that cash is best as it most benefits the poor."
    },
    {
      "q": "Who comes first in the best order for giving?",
      "options": [
        "Neighbours",
        "People of one's profession",
        "The closest relatives"
      ],
      "answer": 2,
      "why": "The best order begins with the closest relatives, then the next closest, then neighbours."
    }
  ],
  "haj-01": [
    {
      "q": "How often is Hajj obligatory?",
      "options": [
        "Every year",
        "Once in a lifetime",
        "Every five years"
      ],
      "answer": 1,
      "why": "Hajj is obligatory once in a lifetime."
    },
    {
      "q": "What does having the means for Hajj include?",
      "options": [
        "Enough for the journey and back, beyond what one's family needs until return",
        "Enough for the journey there only",
        "Owning a house in Makkah"
      ],
      "answer": 0,
      "why": "Having the means is having enough for the journey there and back, beyond what supports one's family until return."
    },
    {
      "q": "A child performs Hajj. What happens after he reaches maturity?",
      "options": [
        "Nothing, his Hajj counts",
        "He only needs to do umrah",
        "He must perform Hajj again"
      ],
      "answer": 2,
      "why": "A child who performs Hajj must perform it again after reaching maturity."
    }
  ],
  "haj-02": [
    {
      "q": "Which is a condition for Hajj to be valid?",
      "options": [
        "Being in ihram",
        "Travelling in a group",
        "Visiting Madinah first"
      ],
      "answer": 0,
      "why": "Hajj is valid with three conditions, one of which is being in ihram."
    },
    {
      "q": "Which months are the time of Hajj?",
      "options": [
        "Ramadan, Shawwal and Dhul Qa'dah",
        "Shawwal, Dhul Qa'dah and the first ten days of Dhul Hijjah",
        "Only the month of Dhul Hijjah"
      ],
      "answer": 1,
      "why": "The time of Hajj is Shawwal, Dhul Qa'dah and the first ten days of Dhul Hijjah."
    },
    {
      "q": "A frail elderly person has the means but cannot travel. What must they do?",
      "options": [
        "Nothing, Hajj is dropped completely",
        "Go anyway, whatever the hardship",
        "Have someone perform it on their behalf"
      ],
      "answer": 2,
      "why": "The frail elderly do not have to go in person, but must have someone perform it on their behalf."
    }
  ],
  "haj-03": [
    {
      "q": "How many pillars does Hajj have?",
      "options": [
        "Two",
        "Four",
        "Eight"
      ],
      "answer": 0,
      "why": "Hajj has two pillars: standing at Arafah and Tawaf al-Ziyarah."
    },
    {
      "q": "How long must one stand at Arafah to fulfil the pillar?",
      "options": [
        "The whole day",
        "Even a moment, in the set time",
        "At least one hour"
      ],
      "answer": 1,
      "why": "Standing at Arafah even for a moment between midday on the 9th and dawn on the 10th fulfils the pillar."
    },
    {
      "q": "Where does the sa'y start and end?",
      "options": [
        "Starts at Marwah, ends at Safa",
        "Starts and ends at Safa",
        "Starts at Safa, ends at Marwah"
      ],
      "answer": 2,
      "why": "The sa'y is seven trips starting at Safa and ending at Marwah."
    }
  ],
  "haj-04": [
    {
      "q": "What is the ruling of Tawaf al-Qudum, the arrival tawaf?",
      "options": [
        "Obligatory",
        "Wajib",
        "Sunna"
      ],
      "answer": 2,
      "why": "Tawaf al-Qudum on arrival is sunna."
    },
    {
      "q": "Is ghusl before ihram sunna for a woman who is menstruating?",
      "options": [
        "Yes",
        "No, it is forbidden for her",
        "No, she does wudu only"
      ],
      "answer": 0,
      "why": "A ghusl before ihram is sunna even for a woman who is menstruating."
    },
    {
      "q": "Where is the Multazam?",
      "options": [
        "Between Safa and Marwah",
        "The wall between the Ka'bah's door and the Black Stone",
        "Inside the Station of Ibrahim"
      ],
      "answer": 1,
      "why": "The Multazam is the part of the Ka'bah's wall between its door and the Black Stone."
    }
  ],
  "haj-05": [
    {
      "q": "What is a miqat?",
      "options": [
        "A point you may not pass without ihram",
        "The place where pilgrims are stoned",
        "A mosque in Madinah"
      ],
      "answer": 0,
      "why": "No one heading for Hajj or umrah may pass a miqat without being in ihram."
    },
    {
      "q": "Is entering ihram before reaching the miqat allowed?",
      "options": [
        "No, it is forbidden",
        "Yes, and it is best for someone confident he will avoid what ihram forbids",
        "Only for people from Yemen"
      ],
      "answer": 1,
      "why": "Entering ihram before the miqat is allowed, and best for someone confident he will keep its rules."
    },
    {
      "q": "Someone lives closer to Makkah than the miqat. Where does he enter ihram?",
      "options": [
        "He must travel back to a miqat",
        "He does not need ihram",
        "Anywhere on his way, before entering the Haram"
      ],
      "answer": 2,
      "why": "He enters ihram anywhere on his way, but may not enter the Haram for Hajj or umrah without it."
    }
  ],
  "haj-06": [
    {
      "q": "When does ihram actually begin?",
      "options": [
        "When the talbiyah is said with the intention",
        "When the intention is made, even silently",
        "When the two cloths are put on"
      ],
      "answer": 0,
      "why": "Ihram begins when the talbiyah is said with the intention; intention alone is not enough."
    },
    {
      "q": "In ihram, what must a woman do?",
      "options": [
        "Cover her face and head",
        "Uncover both her head and face",
        "Cover her head but not her face"
      ],
      "answer": 2,
      "why": "A woman in ihram must not cover her face, though she must cover her head."
    },
    {
      "q": "Which of these is allowed in ihram?",
      "options": [
        "Wearing perfume",
        "Bathing with water only",
        "Cutting the nails"
      ],
      "answer": 1,
      "why": "Bathing with water only is allowed, while perfume and cutting nails are forbidden."
    }
  ],
  "haj-07": [
    {
      "q": "What is the ruling of the two rak'ahs after tawaf?",
      "options": [
        "Sunna",
        "Wajib",
        "Optional only"
      ],
      "answer": 1,
      "why": "The two rak'ahs at the Station of Ibrahim or elsewhere in the mosque after tawaf are wajib."
    },
    {
      "q": "In which circuits do men walk briskly (ramal)?",
      "options": [
        "All seven",
        "The last three",
        "The first three"
      ],
      "answer": 2,
      "why": "Men do ramal in the first three circuits, then walk normally."
    },
    {
      "q": "In the sa'y, how is a trip counted?",
      "options": [
        "Safa to Marwah is one trip, and back is the second",
        "Safa to Marwah and back is one trip",
        "Each time you pass the green markers"
      ],
      "answer": 0,
      "why": "Safa to Marwah is one trip and back is the second, until seven are complete."
    }
  ],
  "haj-08": [
    {
      "q": "What happens if a pilgrim misses the standing at Arafah?",
      "options": [
        "He owes a sheep",
        "There is no Hajj",
        "He makes it up the next day"
      ],
      "answer": 1,
      "why": "Standing at Arafah is the pillar, and missing it means there is no Hajj."
    },
    {
      "q": "How are Maghrib and Isha prayed at Muzdalifah?",
      "options": [
        "Together at Isha time, one adhan and one iqamah",
        "Separately at their own times",
        "Together at Maghrib time, two adhans"
      ],
      "answer": 0,
      "why": "At Muzdalifah, Maghrib and Isha are prayed together at Isha time with one adhan and one iqamah."
    },
    {
      "q": "What is owed for leaving out the standing at Muzdalifah without an excuse?",
      "options": [
        "Nothing",
        "Fasting three days",
        "A sacrifice (dam)"
      ],
      "answer": 2,
      "why": "Leaving out the standing at Muzdalifah without an excuse requires a sacrifice."
    }
  ],
  "haj-09": [
    {
      "q": "How many pebbles are thrown at Jamrat al-Aqabah on the 10th?",
      "options": [
        "Three",
        "Seven",
        "Twenty-one"
      ],
      "answer": 1,
      "why": "The pilgrim throws seven pebbles at Jamrat al-Aqabah, saying takbir with each."
    },
    {
      "q": "What remains unlawful after stoning and shaving on the 10th, until Tawaf al-Ziyarah?",
      "options": [
        "Intercourse",
        "Perfume",
        "Stitched clothes"
      ],
      "answer": 0,
      "why": "After shaving everything becomes lawful except intercourse, which becomes lawful after Tawaf al-Ziyarah."
    },
    {
      "q": "What is owed for delaying Tawaf al-Ziyarah past the 12th?",
      "options": [
        "Nothing",
        "A charity of half a sa'",
        "A sacrifice"
      ],
      "answer": 2,
      "why": "Delaying Tawaf al-Ziyarah past the 10th to the 12th requires a sacrifice."
    }
  ],
  "haj-10": [
    {
      "q": "What is qiran?",
      "options": [
        "Performing Hajj on its own",
        "Intending umrah and Hajj together in one ihram",
        "Doing umrah, leaving ihram, then Hajj"
      ],
      "answer": 1,
      "why": "Qiran is intending umrah and Hajj together in one ihram."
    },
    {
      "q": "What is the pillar of umrah?",
      "options": [
        "The sa'y",
        "Shaving the hair",
        "The seven circuits of tawaf, or most of them"
      ],
      "answer": 2,
      "why": "The pillar of umrah is the seven circuits of tawaf, or most of them."
    },
    {
      "q": "What is the ruling of umrah according to the most evident view?",
      "options": [
        "An established sunna",
        "Obligatory once in a lifetime",
        "Disliked outside Ramadan"
      ],
      "answer": 0,
      "why": "Umrah is an established sunna according to the most evident view in the school."
    }
  ],
  "haj-11": [
    {
      "q": "Which way of performing Hajj is best?",
      "options": [
        "Ifrad",
        "Tamattu'",
        "Qiran"
      ],
      "answer": 2,
      "why": "Qiran is better than ifrad, umrah alone and tamattu'."
    },
    {
      "q": "What sacrifice is owed for qiran or tamattu'?",
      "options": [
        "A sheep, or a seventh share of a cow or camel",
        "A whole camel only",
        "Nothing at all"
      ],
      "answer": 0,
      "why": "Both must sacrifice a sheep or a seventh share of a cow or camel, in thanks to Allah."
    },
    {
      "q": "If someone cannot sacrifice, how many days does he fast in total?",
      "options": [
        "Three",
        "Ten",
        "Seven"
      ],
      "answer": 1,
      "why": "He fasts three days before the 10th and seven after finishing Hajj, ten in total."
    }
  ],
  "haj-12": [
    {
      "q": "What is owed for wearing stitched clothes for a whole day in ihram?",
      "options": [
        "A charity of half a sa'",
        "Nothing",
        "A sacrifice"
      ],
      "answer": 2,
      "why": "A sacrifice is owed for wearing stitched clothes for a whole day."
    },
    {
      "q": "What is owed for cutting one nail in ihram?",
      "options": [
        "A charity of half a sa' of wheat or its value",
        "A sacrifice",
        "Fasting ten days"
      ],
      "answer": 0,
      "why": "Cutting one nail requires a charity of half a sa' of wheat or its value."
    },
    {
      "q": "What is owed for killing a scorpion or a mouse in ihram?",
      "options": [
        "A sacrifice",
        "No penalty",
        "Half a sa' of wheat"
      ],
      "answer": 1,
      "why": "Harmful creatures such as scorpions and mice may be killed with no penalty."
    }
  ],
  "haj-13": [
    {
      "q": "How old must a sheep be to be offered as a hady?",
      "options": [
        "Six months",
        "At least one year",
        "At least two years"
      ],
      "answer": 1,
      "why": "A sheep must be at least one year old."
    },
    {
      "q": "When is a sheep NOT enough for a violation?",
      "options": [
        "Intercourse after Arafah and before shaving",
        "Cutting all the nails of one hand",
        "Wearing stitched clothes for a day"
      ],
      "answer": 0,
      "why": "Intercourse after Arafah and before shaving requires a cow or a camel, not a sheep."
    },
    {
      "q": "Where is an offering normally slaughtered?",
      "options": [
        "Anywhere at all",
        "Only at Mina",
        "Within the Haram"
      ],
      "answer": 2,
      "why": "Every offering is slaughtered within the Haram, not specifically Mina, with a few exceptions."
    }
  ],
  "haj-14": [
    {
      "q": "What is the ruling of visiting graves?",
      "options": [
        "Sunna",
        "Disliked",
        "Obligatory"
      ],
      "answer": 0,
      "why": "Visiting graves to take a lesson and pray for the dead is sunna."
    },
    {
      "q": "What is the Rawdah?",
      "options": [
        "A cemetery in Madinah",
        "The area between the Prophet's ﷺ tomb and his minbar",
        "The mosque of Quba'"
      ],
      "answer": 1,
      "why": "The Rawdah is the area between the tomb of the Prophet ﷺ and his minbar."
    },
    {
      "q": "How is one prayer in the Prophet's ﷺ mosque valued?",
      "options": [
        "Equal to one prayer elsewhere",
        "Better than ten prayers elsewhere",
        "Better than a thousand elsewhere, except Masjid al-Haram"
      ],
      "answer": 2,
      "why": "One prayer in his mosque is better than a thousand elsewhere, except Masjid al-Haram."
    }
  ]
};
