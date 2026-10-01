# Abu Hanifah Academy

An online learning platform teaching Hanafi fiqh to young, English-speaking British Muslims with little Islamic studies background. The curriculum is one path through **Nur al-Idah** by Imam Hasan al-Shurunbulali, following the book's own order. The reference edition is the Arabic text with English translation by Charkawi (commentary from Maraqi al-Falah). Every lesson cites the printed page numbers it is drawn from.

| Course | Book | Pages | Lessons |
| --- | --- | --- | --- |
| Introduction to Fiqh | Introduction | 11–25 | 5 |
| Purification | Book I | 27–115 | 22 |
| Prayer I: The Daily Prayers | Book II | 116–200 | 16 |
| Prayer II: Witr, Voluntary and Special Prayers | Book II | 201–281 | 19 |
| Funerals | Book III | 284–316 | 13 |
| Fasting | Book IV | 318–371 | 15 |
| Zakat | Book V | 376–396 | 9 |
| Hajj and Umrah | Book VI | 398–437 | 14 |

Note: in this edition the Zakat and Hajj books come from *Hibatul Fattah*, a completion of Nur al-Idah by Muhammad Muhyi al-Din Abdul Hamid (see p. 373). The course blurbs say so.

Layout and structure take inspiration from SeekersGuidance Academy (tracks, levelled courses, live timetable, recordings).

## What's in it

| Page | What it does |
| --- | --- |
| Home | Hero, the learning path through the book, featured courses, the Hanafi scale of rulings, live preview, FAQ |
| Courses | All 8 courses (113 lessons) in the book's order |
| Course page | Trailer video slot, modules and lessons, outcomes, the text, teacher placeholder, enrol |
| Lesson page | Video slot, summary, key points, Arabic terms, mark complete, previous/next |
| Notes | Reading-only version of every course: one page per course, contents list, page references, mark as read (shares progress with the video lessons) |
| Live | Weekly timetable (UK time) and recordings |
| My learning | Progress across courses |

Progress and enrolment are stored in the visitor's browser (localStorage). There are no accounts yet.

## Adding videos

Open `js/videos.js` and add a line per lesson:

```js
window.VIDEOS = {
  "pur-05": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  "course:prayer-1": "https://vimeo.com/123456789",   // course trailer
};
```

YouTube (including unlisted), Vimeo and direct `.mp4` links work. Each empty video slot on the site shows the exact key to use. Live recordings go in `js/live.js` under `RECORDINGS`.

## Editing content

- Courses, lessons and text: `js/curriculum.js`
- Live timetable and recordings: `js/live.js`
- Look and feel: `css/styles.css` (colours and fonts are tokens at the top)

**Before launch:** every lesson summary was written from the Charkawi translation, but the OCR of the scan is imperfect in places, so each lesson needs review and sign-off by a qualified Hanafi teacher. The content is a teaching outline, not fatwa.

## Running it

It's a static site with no build step. Open `index.html` through any local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

To publish free: GitHub repo Settings > Pages > deploy from branch, root folder.

## Next steps (when you outgrow static)

1. Accounts and synced progress: Supabase or Firebase auth, or move content into an LMS (LearnDash, Thinkific, Teachable).
2. Quizzes per lesson.
3. Donations (Stripe or LaunchGood link).
4. Teacher bios and ijazah details.
