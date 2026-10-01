# Abu Hanifah Academy

An online learning platform teaching Hanafi fiqh to young, English-speaking British Muslims with little Islamic studies background. The curriculum is built on two classical texts:

- **Nur al-Idah** (al-Shurunbulali): worship essentials, Level 1
- **Mukhtasar al-Quduri** (al-Quduri): worship in depth, family, trade, food and conduct, Levels 2 to 3

Layout and structure take inspiration from SeekersGuidance Academy (tracks, levelled courses, live timetable, recordings).

## What's in it

| Page | What it does |
| --- | --- |
| Home | Hero, the three-stage learning path, featured courses, the Hanafi scale of rulings, live preview, FAQ |
| Courses | Catalogue of 8 courses (49 lessons) with track and level filters |
| Course page | Trailer video slot, modules and lessons, outcomes, the text, teacher placeholder, enrol |
| Lesson page | Video slot, summary, key points, Arabic terms, mark complete, previous/next |
| Live | Weekly timetable (UK time) and recordings |
| My learning | Progress across courses |

Progress and enrolment are stored in the visitor's browser (localStorage). There are no accounts yet.

## Adding videos

Open `js/videos.js` and add a line per lesson:

```js
window.VIDEOS = {
  "nur-tah-03": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  "course:nur-salah": "https://vimeo.com/123456789",   // course trailer
};
```

YouTube (including unlisted), Vimeo and direct `.mp4` links work. Each empty video slot on the site shows the exact key to use. Live recordings go in `js/live.js` under `RECORDINGS`.

## Editing content

- Courses, lessons and text: `js/curriculum.js`
- Live timetable and recordings: `js/live.js`
- Look and feel: `css/styles.css` (colours and fonts are tokens at the top)

**Before launch:** every lesson summary needs review and sign-off by a qualified Hanafi teacher. The content is a teaching outline, not fatwa.

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
