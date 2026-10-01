/* Abu Hanifah Academy: a small hash-routed single page app. No build step. */
(function () {
  "use strict";

  const COURSES = window.COURSES || [];
  const TRACKS = window.TRACKS || [];
  const TEXTS = window.TEXTS || {};
  const VIDEOS = window.VIDEOS || {};
  const LIVE = window.LIVE || [];
  const RECORDINGS = window.RECORDINGS || [];
  const app = document.getElementById("app");

  /* ---------- helpers ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const allLessons = (c) => c.modules.flatMap((m) => m.lessons);
  const courseById = (id) => COURSES.find((c) => c.id === id);
  const lessonIndex = {};
  COURSES.forEach((c) => allLessons(c).forEach((l, i) => (lessonIndex[l.id] = { course: c, lesson: l, i })));
  const minsLabel = (m) => (m >= 60 ? `${Math.floor(m / 60)}h ${m % 60 ? (m % 60) + "m" : ""}`.trim() : `${m} min`);
  const courseMins = (c) => allLessons(c).reduce((n, l) => n + (l.mins || 0), 0);

  /* ---------- progress (stored only in this browser) ---------- */
  const STORE = "aha-progress-v1";
  function load() {
    try { return JSON.parse(localStorage.getItem(STORE)) || { done: {}, enrolled: {} }; }
    catch (e) { return { done: {}, enrolled: {} }; }
  }
  let state = load();
  function save() { try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) { /* storage unavailable */ } }
  const isDone = (id) => !!state.done[id];
  const coursePct = (c) => {
    const ls = allLessons(c);
    return ls.length ? Math.round((ls.filter((l) => isDone(l.id)).length / ls.length) * 100) : 0;
  };

  /* ---------- video ---------- */
  function embedUrl(url) {
    if (!url) return null;
    let m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/))) {
      return { type: "iframe", src: `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0` };
    }
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      return { type: "iframe", src: `https://player.vimeo.com/video/${m[1]}` };
    }
    if (/\.(mp4|webm|ogg)(\?|$)/i.test(url)) return { type: "video", src: url };
    return { type: "iframe", src: url };
  }
  function videoSlot(key, title) {
    const v = embedUrl(VIDEOS[key]);
    if (v && v.type === "video") return `<div class="video-slot"><video controls preload="metadata" src="${esc(v.src)}"></video></div>`;
    if (v) return `<div class="video-slot"><iframe src="${esc(v.src)}" title="${esc(title)}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>`;
    return `<div class="video-slot"><div class="video-empty">
      <div class="play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div>
      <strong>Video coming soon</strong>
      <span>Add it in <code>js/videos.js</code> with the key <code>${esc(key)}</code></span>
    </div></div>`;
  }

  /* ---------- shared pieces ---------- */
  function courseCard(c) {
    const pct = coursePct(c);
    const n = allLessons(c).length;
    return `<a class="course-card" href="#course-${c.id}">
      <div class="course-cover"><span class="pill level">${esc(c.level)}</span><span class="ar">${esc(c.ar)}</span></div>
      <div class="course-body">
        <span class="eyebrow">Nur al-Idah · pp. ${esc(c.pages)}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.blurb)}</p>
        <div class="course-meta"><span>${n} lessons</span><span>${minsLabel(courseMins(c))}</span>${pct ? `<span>${pct}% done</span>` : ""}</div>
        ${pct ? `<div class="progress"><span style="width:${pct}%"></span></div>` : ""}
      </div>
    </a>`;
  }

  const RULINGS = [
    ["Fard", "فرض", "Obligatory by decisive proof. Leaving it is a major sin.", "var(--accent)"],
    ["Wajib", "واجب", "Necessary by strong proof. Leaving it is sinful. Witr is an example.", "color-mix(in srgb, var(--accent) 75%, var(--surface))"],
    ["Sunnah mu'akkadah", "سنة مؤكدة", "The Prophet ﷺ did it consistently. Don't make a habit of leaving it.", "color-mix(in srgb, var(--accent) 50%, var(--surface))"],
    ["Mustahabb", "مستحب", "Recommended. Rewarded if done, no blame if left.", "color-mix(in srgb, var(--accent) 28%, var(--surface))"],
    ["Mubah", "مباح", "Permitted. Neither rewarded nor blamed in itself.", "var(--line)"],
    ["Makruh tanzihi", "مكروه تنزيهي", "Disliked. Better avoided, but not sinful.", "color-mix(in srgb, var(--gold) 40%, var(--surface))"],
    ["Makruh tahrimi", "مكروه تحريمي", "Prohibitively disliked. Close to haram and sinful.", "color-mix(in srgb, var(--gold) 75%, var(--surface))"],
    ["Haram", "حرام", "Prohibited by decisive proof.", "var(--gold)"]
  ];

  /* ---------- pages ---------- */
  function home() {
    const featured = ["introduction", "purification", "prayer-1"].map(courseById).filter(Boolean);
    return `
    <section class="hero">
      <div class="wrap">
        <div class="hero-copy">
          <span class="eyebrow">Hanafi fiqh for young British Muslims</span>
          <h1>Learn your deen properly, one clear step at a time.</h1>
          <p>Short video lessons and live classes in plain English, built on Nur al-Idah, the Hanafi handbook of worship that generations of Muslims started with. No background needed.</p>
          <div class="row">
            <a class="btn btn-primary" href="#course-introduction">Start the first lesson</a>
            <a class="btn btn-ghost" href="#courses">Browse courses</a>
          </div>
        </div>
        <div class="hero-texts">
          ${Object.values(TEXTS).map((t) => `<div class="text-plate"><strong>${esc(t.title)}</strong><span class="ar">${esc(t.ar)}</span><span>${esc(t.author)}</span></div>`).join("")}
        </div>
      </div>
    </section>

    <section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Your path</span>
        <h2>One book, start to finish</h2>
        <p>We follow Nur al-Idah in its own order. Purification comes first because prayer isn't valid without it, and prayer comes before everything else.</p>
      </div>
      <ol class="path">
        ${COURSES.map((c) => `<li><div class="path-body">
            <div class="row"><h3><a href="#course-${c.id}">${esc(c.title)}</a></h3><span class="pill">${esc(c.book)}</span></div>
            <p>${esc(c.blurb)}</p>
            <p><small class="muted">${allLessons(c).length} lessons · pp. ${esc(c.pages)}</small></p>
          </div></li>`).join("")}
      </ol>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Begin here</span>
        <h2>Featured courses</h2>
      </div>
      <div class="grid">${featured.map(courseCard).join("")}</div>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Key idea</span>
        <h2>The Hanafi scale of rulings</h2>
        <p>Every lesson labels actions on this scale. The Hanafi school separates fard from wajib, and splits makruh into two levels.</p>
      </div>
      <div class="scale">
        ${RULINGS.map(([n, a, d, col]) => `<div class="scale-row"><span class="bar" style="background:${col}"></span><strong>${esc(n)}<span class="ar">${esc(a)}</span></strong><p>${esc(d)}</p></div>`).join("")}
      </div>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Live classes</span>
        <h2>Learn with a teacher every week</h2>
        <p>Recorded lessons give you the content. Live classes give you a teacher to ask. All times are UK time.</p>
      </div>
      ${scheduleList(LIVE.slice(0, 3))}
      <p style="margin-top:16px"><a href="#live">See the full timetable and recordings</a></p>
    </div></section>

    <section class="section"><div class="wrap">
      <div class="section-head"><span class="eyebrow">Questions</span><h2>Before you start</h2></div>
      <div class="faq">
        ${faq([
          ["I know almost nothing. Is this for me?", "Yes. The Start Here course assumes no background. Every Arabic term is explained the first time it appears."],
          ["Why only the Hanafi school?", "Following one school consistently is how scholars have always taught beginners. Most British Muslims of South Asian, Turkish and Balkan heritage follow it. We respect the other three schools and mention them where it helps."],
          ["Do I need to know Arabic?", "No. Lessons are in English. Arabic chapter names are shown so you recognise them later if you continue studying."],
          ["Is this a replacement for asking a scholar?", "No. Courses teach general rulings. For your personal situation, especially in marriage, divorce and finance, ask a qualified teacher. The Friday Q&A is a good place to start."],
          ["How much does it cost?", "Set your own pricing model here. Many academies keep core courses free and run on donations."]
        ])}
      </div>
    </div></section>`;
  }

  function faq(items) {
    return items.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");
  }

  function courses() {
    return `<section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Catalogue</span>
        <h1>Courses</h1>
        <p>${COURSES.length} courses, ${Object.keys(lessonIndex).length} lessons, covering the whole of Nur al-Idah in the book's order. Work through them in order, or jump to what you need.</p>
      </div>
      <div class="grid">${COURSES.map(courseCard).join("")}</div>
    </div></section>`;
  }

  function course(id) {
    const c = courseById(id);
    if (!c) return notFound();
    const ls = allLessons(c);
    const t = c.text ? TEXTS[c.text] : null;
    const pct = coursePct(c);
    const next = ls.find((l) => !isDone(l.id)) || ls[0];
    const enrolled = !!state.enrolled[c.id];
    return `
    <section class="course-hero"><div class="wrap">
      <div class="course-hero-copy">
        <div class="crumbs"><a href="#courses">Courses</a> / ${esc(TRACKS.find((x) => x.id === c.track)?.name)}</div>
        <div class="row"><span class="pill">${esc(c.level)}</span>${t ? `<span class="pill pill-accent">${esc(t.title)}</span>` : ""}</div>
        <h1>${esc(c.title)}</h1>
        <p class="ar" style="font-size:1.6rem;color:var(--accent);text-align:left">${esc(c.ar)}</p>
        <p class="muted" style="font-size:1.1rem">${esc(c.blurb)}</p>
        <div class="row">
          <a class="btn btn-primary" href="#lesson-${next.id}">${pct ? (pct === 100 ? "Review course" : "Continue") : "Start course"}</a>
          <a class="btn btn-ghost" href="#notes-${c.id}">Read notes</a>
          <button class="btn ${enrolled ? "btn-done" : "btn-ghost"}" type="button" data-enrol="${c.id}">${enrolled ? "Enrolled ✓" : "Enrol"}</button>
        </div>
        <div class="facts">
          <div class="fact"><span>Lessons</span><b>${ls.length}</b></div>
          <div class="fact"><span>Video time</span><b>${minsLabel(courseMins(c))}</b></div>
          <div class="fact"><span>Pages</span><b>${esc(c.pages)}</b></div>
          <div class="fact"><span>Progress</span><b>${pct}%</b></div>
        </div>
      </div>
      ${videoSlot("course:" + c.id, c.title + " trailer")}
    </div></section>

    <div class="wrap"><div class="course-layout">
      <div>
        <div class="section-head" style="margin-bottom:20px"><h2>Course content</h2></div>
        ${c.modules.map((m) => `
          <div class="module">
            <div class="module-head"><strong>${esc(m.title)}</strong><span class="ar">${esc(m.ar)}</span></div>
            ${m.lessons.map((l) => `<a class="lesson-link ${isDone(l.id) ? "is-done" : ""}" href="#lesson-${l.id}">
              <span class="tick" aria-hidden="true">${isDone(l.id) ? "✓" : ""}</span>
              <span>${esc(l.title)}${VIDEOS[l.id] ? `<span class="vid">● video</span>` : ""}</span>
              <small>pp. ${esc(l.ref.replace(/^pp?\. /, ""))} · ${l.mins} min</small>
            </a>`).join("")}
          </div>`).join("")}
      </div>
      <aside>
        <div class="aside-card">
          <h3>What you'll learn</h3>
          <ul>${c.outcomes.map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
        </div>
        ${t ? `<div class="aside-card">
          <span class="eyebrow">The text</span>
          <h3>${esc(t.title)}</h3>
          <p class="ar" style="font-size:1.3rem;text-align:left">${esc(t.ar)}</p>
          <p class="muted">${esc(t.author)}. ${esc(t.about)}</p>
          <p class="muted"><small>This course: ${esc(c.book)}, pp. ${esc(c.pages)} (${esc(t.edition)}).</small></p>
        </div>` : ""}
        <div class="aside-card">
          <span class="eyebrow">Teacher</span>
          <h3>To be announced</h3>
          <p class="muted">Add your teacher's name, ijazah and a short bio here.</p>
        </div>
      </aside>
    </div></div>`;
  }

  function lesson(id) {
    const hit = lessonIndex[id];
    if (!hit) return notFound();
    const { course: c, lesson: l, i } = hit;
    const ls = allLessons(c);
    const prev = ls[i - 1], next = ls[i + 1];
    const done = isDone(l.id);
    return `<div class="wrap"><div class="lesson-layout">
      <div class="lesson-main">
        <div class="crumbs"><a href="#courses">Courses</a> / <a href="#course-${c.id}">${esc(c.title)}</a> / Lesson ${i + 1} of ${ls.length} · <a href="#notes-${c.id}">Read as notes</a></div>
        ${videoSlot(l.id, l.title)}
        <div class="stack">
          <div class="row"><span class="pill pill-accent">${l.mins} min</span><span class="pill">Nur al-Idah ${esc(l.ref)}</span><span class="ar muted" style="font-size:1.2rem">${esc(l.ar)}</span></div>
          <h1 style="font-size:clamp(1.7rem,4vw,2.4rem)">${esc(l.title)}</h1>
        </div>
        <div class="prose">
          <p style="font-size:1.1rem">${esc(l.summary)}</p>
          <h3>Key points</h3>
          <ul>${l.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
        ${l.terms && l.terms.length ? `<div class="stack"><h3>Terms in this lesson</h3><div class="terms">
          ${l.terms.map(([en, ar, def]) => `<div class="term"><b><span>${esc(en)}</span><span class="ar">${esc(ar)}</span></b><p>${esc(def)}</p></div>`).join("")}
        </div></div>` : ""}
        <p class="callout">This is a general teaching summary. For your own situation, ask a qualified teacher at the weekly <a href="#live">live Q&amp;A</a>.</p>
        <div class="row"><button class="btn ${done ? "btn-done" : "btn-primary"}" type="button" data-done="${l.id}">${done ? "Completed ✓" : "Mark as complete"}</button></div>
        <nav class="lesson-nav" aria-label="Lesson navigation">
          ${prev ? `<a class="btn btn-ghost" href="#lesson-${prev.id}">← ${esc(prev.title)}</a>` : "<span></span>"}
          ${next ? `<a class="btn btn-ghost" href="#lesson-${next.id}">${esc(next.title)} →</a>` : `<a class="btn btn-ghost" href="#course-${c.id}">Back to course</a>`}
        </nav>
      </div>
      <aside class="stack">
        <h3>${esc(c.title)}</h3>
        <div class="progress"><span style="width:${coursePct(c)}%"></span></div>
        <ul class="side-list">
          ${ls.map((x, n) => `<li><a href="#lesson-${x.id}" class="${isDone(x.id) ? "is-done" : ""}" aria-current="${x.id === l.id}">${n + 1}. ${esc(x.title)}</a></li>`).join("")}
        </ul>
      </aside>
    </div></div>`;
  }

  function scheduleList(items) {
    return `<div class="schedule">${items.map((s) => {
      const c = s.course ? courseById(s.course) : null;
      return `<div class="slot">
        <div class="when"><b>${esc(s.day)}</b><span>${esc(s.time)} UK · ${s.length} min</span></div>
        <div><strong>${esc(s.title)}</strong><div class="muted" style="font-size:.9rem">${esc(s.teacher)} · ${esc(s.audience)}${c ? ` · <a href="#course-${c.id}">Course page</a>` : ""}</div></div>
        ${s.link ? `<a class="btn btn-primary" href="${esc(s.link)}" target="_blank" rel="noopener">Join</a>` : `<span class="pill pill-accent">Link coming soon</span>`}
      </div>`;
    }).join("")}</div>`;
  }

  function live() {
    return `<section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Live</span>
        <h1>Live classes and Q&amp;A</h1>
        <p>Each live class follows a course, so you can watch the lesson first and bring your questions. All times are UK time.</p>
      </div>
      ${scheduleList(LIVE)}
    </div></section>
    <section class="section"><div class="wrap">
      <div class="section-head"><span class="eyebrow">Catch up</span><h2>Recordings</h2></div>
      <div class="grid">
        ${RECORDINGS.map((r, n) => {
          const key = "rec-" + n;
          if (r.video) VIDEOS[key] = r.video;
          return `<div class="stack">${videoSlot(key, r.title)}<div><strong>${esc(r.title)}</strong><div class="muted" style="font-size:.9rem">${esc(r.date)}</div></div></div>`;
        }).join("")}
      </div>
    </div></section>`;
  }

  function about() {
    return `<section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">About</span>
        <h1>Why this academy exists</h1>
      </div>
      <div class="prose">
        <p>Plenty of young British Muslims grew up going to mosque classes, learnt to read the Quran, and then stopped. A lot of us now pray without being sure we're doing it right, and don't know where to go to learn properly without it feeling like school again.</p>
        <p>This academy teaches the practical rulings of Islam according to the Hanafi school, in plain English, through Nur al-Idah, a text scholars have used to teach beginners for centuries. Short recorded lessons give you the content. Weekly live classes give you a teacher.</p>
        <h3>Our text</h3>
        ${Object.values(TEXTS).map((t) => `<p><strong>${esc(t.title)}</strong> <span class="ar">${esc(t.ar)}</span><br><span class="muted">${esc(t.author)}. ${esc(t.about)}</span></p>`).join("")}
        <h3>Our approach</h3>
        <ul>
          <li>One school, taught consistently, with respect for the other three.</li>
          <li>The book's own order: purification, prayer, funerals, fasting, zakat, Hajj.</li>
          <li>Every lesson is reviewed by a qualified teacher before it goes live.</li>
          <li>General teaching is not a fatwa. Personal questions go to a scholar.</li>
        </ul>
      </div>
    </div></section>`;
  }

  function mine() {
    const started = COURSES.filter((c) => state.enrolled[c.id] || coursePct(c) > 0);
    const doneCount = Object.keys(state.done).filter((k) => lessonIndex[k]).length;
    return `<section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">My learning</span>
        <h1>Your progress</h1>
        <p>${doneCount} of ${Object.keys(lessonIndex).length} lessons complete. Progress is saved in this browser only.</p>
      </div>
      ${started.length ? `<div class="grid">${started.map(courseCard).join("")}</div>`
        : `<div class="empty"><p>You haven't started a course yet.</p><p style="margin-top:12px"><a class="btn btn-primary" href="#course-introduction">Start with the Introduction</a></p></div>`}
    </div></section>`;
  }

  /* ---------- notes (reading only, no video) ---------- */
  function notes() {
    return `<section class="section"><div class="wrap">
      <div class="section-head">
        <span class="eyebrow">Notes</span>
        <h1>Read the notes</h1>
        <p>Prefer reading to watching? Every course is here as written notes, one page per course, with the page numbers in Nur al-Idah so you can follow along in the book.</p>
      </div>
      <div class="notes-index">
        ${COURSES.map((c) => {
          const ls = allLessons(c);
          const read = ls.filter((l) => isDone(l.id)).length;
          return `<a class="notes-row" href="#notes-${c.id}">
            <span class="pill">${esc(c.book)}</span>
            <span class="notes-row-main"><strong>${esc(c.title)}</strong><span class="muted">${ls.length} lessons · pp. ${esc(c.pages)}${read ? ` · ${read} read` : ""}</span></span>
            <span class="ar">${esc(c.ar)}</span>
          </a>`;
        }).join("")}
      </div>
    </div></section>`;
  }

  function lessonNotes(l) {
    return `<div class="prose">
        <p class="note-summary">${esc(l.summary)}</p>
        <ul>${l.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>
      ${l.terms && l.terms.length ? `<div class="terms">
        ${l.terms.map(([en, ar, def]) => `<div class="term"><b><span>${esc(en)}</span><span class="ar">${esc(ar)}</span></b><p>${esc(def)}</p></div>`).join("")}
      </div>` : ""}`;
  }

  function notesCourse(id) {
    const c = courseById(id);
    if (!c) return notFound();
    const ci = COURSES.indexOf(c);
    const prevC = COURSES[ci - 1], nextC = COURSES[ci + 1];
    let n = 0;
    return `<div class="wrap"><div class="notes-layout">
      <aside class="notes-toc">
        <span class="eyebrow">Contents</span>
        <div class="progress"><span style="width:${coursePct(c)}%"></span></div>
        <ol>
          ${c.modules.map((m) => `<li class="toc-module">${esc(m.title)}</li>${m.lessons.map((l) => `<li><button type="button" data-jump="${l.id}" class="${isDone(l.id) ? "is-done" : ""}">${++n}. ${esc(l.title)}</button></li>`).join("")}`).join("")}
        </ol>
      </aside>
      <div class="notes-main">
        <div class="stack">
          <div class="crumbs"><a href="#notes">Notes</a> / ${esc(c.book)}</div>
          <h1>${esc(c.title)}</h1>
          <p class="ar" style="font-size:1.5rem;color:var(--accent);text-align:left">${esc(c.ar)}</p>
          <p class="muted">${esc(c.blurb)}</p>
          <div class="row"><span class="pill pill-accent">Nur al-Idah pp. ${esc(c.pages)}</span><a href="#course-${c.id}">Prefer video? Go to the course</a></div>
        </div>
        ${c.modules.map((m) => `<section class="note-module">
          <div class="note-module-head"><h2>${esc(m.title)}</h2><span class="ar">${esc(m.ar)}</span></div>
          ${m.lessons.map((l) => `<article class="note" id="n-${l.id}">
            <div class="row"><span class="pill">Nur al-Idah ${esc(l.ref)}</span><span class="ar muted" style="font-size:1.15rem">${esc(l.ar)}</span></div>
            <h3>${esc(l.title)}</h3>
            ${lessonNotes(l)}
            <div class="row">
              <button class="btn ${isDone(l.id) ? "btn-done" : "btn-ghost"}" type="button" data-done="${l.id}">${isDone(l.id) ? "Read ✓" : "Mark as read"}</button>
              ${VIDEOS[l.id] ? `<a href="#lesson-${l.id}">Watch the video</a>` : ""}
            </div>
          </article>`).join("")}
        </section>`).join("")}
        <p class="callout">These are general teaching notes. For your own situation, ask a qualified teacher at the weekly <a href="#live">live Q&amp;A</a>.</p>
        <nav class="lesson-nav" aria-label="Course notes navigation">
          ${prevC ? `<a class="btn btn-ghost" href="#notes-${prevC.id}">← ${esc(prevC.title)}</a>` : "<span></span>"}
          ${nextC ? `<a class="btn btn-ghost" href="#notes-${nextC.id}">${esc(nextC.title)} →</a>` : `<a class="btn btn-ghost" href="#notes">All notes</a>`}
        </nav>
      </div>
    </div></div>`;
  }

  function notFound() {
    return `<section class="section"><div class="wrap"><div class="empty"><h2>Page not found</h2><p style="margin-top:12px"><a href="#home">Go to the home page</a></p></div></div></section>`;
  }

  /* ---------- router ---------- */
  const ROUTES = { home, courses, notes, live, about, my: mine };
  function render() {
    const hash = (location.hash || "#home").slice(1);
    const dash = hash.indexOf("-");
    const head = dash === -1 ? hash : hash.slice(0, dash);
    const rest = dash === -1 ? "" : hash.slice(dash + 1);
    let html;
    if (head === "course" && rest) html = course(rest);
    else if (head === "lesson" && rest) html = lesson(rest);
    else if (head === "notes" && rest) html = notesCourse(rest);
    else if (ROUTES[hash]) html = ROUTES[hash]();
    else html = notFound();
    app.innerHTML = html;
    const section = head === "lesson" || head === "course" ? "courses" : head === "notes" ? "notes" : hash;
    document.querySelectorAll(".nav a").forEach((a) => a.setAttribute("aria-current", a.getAttribute("href") === "#" + section ? "page" : "false"));
  }

  let lastHash = null;
  function onRoute() {
    render();
    if (location.hash !== lastHash) window.scrollTo(0, 0);
    lastHash = location.hash;
  }

  app.addEventListener("click", (e) => {
    const j = e.target.closest("[data-jump]");
    if (j) { const t = document.getElementById("n-" + j.dataset.jump); if (t) t.scrollIntoView({ block: "start" }); return; }
    const d = e.target.closest("[data-done]");
    if (d) { const id = d.dataset.done; if (state.done[id]) delete state.done[id]; else state.done[id] = Date.now(); save(); render(); return; }
    const en = e.target.closest("[data-enrol]");
    if (en) { const id = en.dataset.enrol; state.enrolled[id] = !state.enrolled[id]; save(); render(); }
  });

  /* theme toggle */
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const root = document.documentElement;
      const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("aha-theme", root.dataset.theme); } catch (e) { /* ignore */ }
    });
    try { const t = localStorage.getItem("aha-theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) { /* ignore */ }
  }

  window.addEventListener("hashchange", onRoute);
  onRoute();
})();
