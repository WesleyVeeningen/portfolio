(() => {
  const P = window.PORTFOLIO;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.documentElement.classList.add("js");

  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  };

  // ---------- Render ----------
  $$("[data-name]").forEach((el) => (el.textContent = P.name));
  $("[data-role]").textContent = P.role;
  $("[data-location]").textContent = P.location;
  $("[data-year]").textContent = "© " + new Date().getFullYear();

  const linkPills = () =>
    [
      ["github", P.links.github, "GitHub"],
      ["linkedin", P.links.linkedin, "LinkedIn"],
      ["email", "mailto:" + P.links.email, "Email"],
    ]
      .map(([k, href, label]) => {
        const ext = k === "email" ? "" : ' target="_blank" rel="noopener noreferrer"';
        return `<li><a class="pill" href="${esc(href)}"${ext}>${icons[k]}${label}</a></li>`;
      })
      .join("");
  $("[data-hero-links]").innerHTML = linkPills();
  $("[data-footer-links]").innerHTML = linkPills();

  const mail = $("[data-email-link]");
  mail.href = "mailto:" + P.links.email;
  mail.textContent = P.links.email;

  $("[data-about]").innerHTML = P.about.map((t) => `<p>${esc(t)}</p>`).join("");

  $("[data-projects]").innerHTML = P.projects
    .map((p) => {
      const ext = 'target="_blank" rel="noopener noreferrer"';
      const demo = p.demo ? `<a href="${esc(p.demo)}" ${ext}>Live demo <span class="arrow">↗</span></a>` : "";
      return `
      <article class="card reveal${p.featured ? " featured" : ""}">
        <div class="card-top">
          <h3>${esc(p.name)}${p.featured ? '<span class="badge">featured</span>' : ""}</h3>
          <span class="year">${esc(p.year || "")}</span>
        </div>
        <p>${esc(p.description)}</p>
        <ul class="tags" aria-label="Tech used">${p.tech.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>
        <div class="card-links">
          ${demo}
          <a href="${esc(p.repo)}" ${ext}>Source <span class="arrow">↗</span></a>
        </div>
      </article>`;
    })
    .join("");

  $("[data-timeline]").innerHTML = P.timeline
    .map(
      (t) => `
      <li class="tl-item reveal${/now/i.test(t.period) ? " now" : ""}">
        <p class="tl-period">${esc(t.period)}<span class="tl-kind">${t.type === "work" ? "work" : "study"}</span></p>
        <h3 class="tl-title">${esc(t.title)}</h3>
        <p class="tl-place">${esc(t.place)}</p>
        <p class="tl-text">${esc(t.text)}</p>
      </li>`
    )
    .join("");

  $("[data-skills]").innerHTML =
    Object.entries(P.skills)
      .map(
        ([group, list]) => `
      <div class="reveal">
        <h3>${esc(group)}</h3>
        <ul class="tags">${list.map((s) => `<li class="tag">${esc(s)}</li>`).join("")}</ul>
      </div>`
      )
      .join("") + `<p class="spoken reveal"><span>Spoken</span>${esc(P.spokenLanguages)}</p>`;

  // ---------- Reveal on scroll ----------
  // Stagger siblings that enter together so grids cascade instead of popping at once.
  const io = new IntersectionObserver(
    (entries) => {
      entries
        .filter((e) => e.isIntersecting)
        .forEach((e, i) => {
          e.target.style.setProperty("--d", `${Math.min(i, 6) * 70}ms`);
          e.target.classList.add("in");
          io.unobserve(e.target);
        });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => (reduced ? el.classList.add("in") : io.observe(el)));

  // ---------- Nav: background on scroll + active section ----------
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const navLinks = $$(".nav nav a");
  const setActive = (id) => navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
  const sectionIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("main section[id], footer[id]").forEach((s) => sectionIO.observe(s));
  addEventListener("scroll", () => {
    if (scrollY < innerHeight * 0.4) setActive("");
    if (innerHeight + scrollY >= document.body.scrollHeight - 4) setActive("contact");
  }, { passive: true });

  // ---------- Cursor glow + card border light ----------
  const glow = $(".glow");
  if (!reduced && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let x = innerWidth / 2, y = innerHeight / 3, tx = x, ty = y, raf = 0;
    const tick = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.classList.add("on");
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });
    document.addEventListener("pointerleave", () => glow.classList.remove("on"));
  }
  $$(".card").forEach((card) =>
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    })
  );

  // ---------- Hero tagline: text scramble ----------
  const tagEl = $("[data-tagline]");
  const lines = P.taglines;
  if (reduced || lines.length === 0) {
    tagEl.textContent = lines[0] || "";
    return;
  }
  const glyphs = "abcdefghijklmnopqrstuvwxyz01<>/_#*";
  const scramble = (from, to) =>
    new Promise((done) => {
      const len = Math.max(from.length, to.length);
      const queue = Array.from({ length: len }, (_, i) => {
        const start = Math.floor(Math.random() * 18);
        return { from: from[i] || "", to: to[i] || "", start, end: start + 10 + Math.floor(Math.random() * 18) };
      });
      let frame = 0;
      const step = () => {
        let out = "", finished = 0;
        for (const q of queue) {
          if (frame >= q.end) { finished++; out += q.to; }
          else if (frame >= q.start) out += `<span style="color:var(--faint)">${glyphs[(Math.random() * glyphs.length) | 0]}</span>`;
          else out += esc(q.from);
        }
        tagEl.innerHTML = out;
        if (finished === queue.length) return done();
        frame++;
        requestAnimationFrame(step);
      };
      step();
    });

  let i = 0;
  const loop = async () => {
    const next = (i + 1) % lines.length;
    await scramble(lines[i], lines[next]);
    i = next;
    setTimeout(loop, 3200);
  };
  tagEl.textContent = lines[0];
  setTimeout(loop, 2600);
})();
