/* ============================================================
   MAIN.JS
   Rendering logic only. Content lives in content.js — edit that
   file, not this one, when adding real work.
   python3 -m http.server 8000
   ============================================================ */

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  (Array.isArray(children) ? children : [children]).forEach((c) => {
    if (c == null) return;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  });
  return node;
}

function categoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}

/* ---------------- Header / Footer (shared across pages) ---------------- */

function renderHeader(activeSlug) {
  const nav = el(
    "div",
    { class: "site-nav" },
    CATEGORIES.map((c) =>
      el(
        "a",
        {
          href: `category.html?cat=${c.slug}`,
          class: c.slug === activeSlug ? "active mono" : "mono",
        },
        `${c.code} · ${c.label}`
      )
    )
  );

  const header = el("header", { class: "site-header" }, [
    el("div", { class: "wrap" }, [
      el("a", { href: "index.html", class: "brand" }, [
        el("span", { class: "brand-mark" }),
        el("span", {}, SITE.name.toUpperCase()),
      ]),
      nav,
    ]),
  ]);

  document.body.prepend(header);
}

function renderFooter() {
  const links = [
    ["GitHub", SITE.githubUrl],
    ["LinkedIn", SITE.linkedinUrl],
    ["Email", `mailto:${SITE.email}`],
  ];

  const footer = el("footer", { class: "site-footer" }, [
    el("div", { class: "wrap" }, [
      el(
        "div",
        { class: "footer-links" },
        links.map(([label, href]) => el("a", { href }, label))
      ),
      renderTitleBlock("FOOTER"),
    ]),
  ]);

  document.body.appendChild(footer);
}

function renderTitleBlock(sheetLabel) {
  const cells = [
    ["Name", SITE.name],
    ["Discipline", SITE.role],
    ["Location", SITE.location],
    ["Sheet", sheetLabel],
    ["Rev", new Date().getFullYear().toString()],
  ];
  return el(
    "div",
    { class: "title-block" },
    cells.map(([label, value]) =>
      el("div", { class: "tb-cell" }, [
        el("div", { class: "tb-label" }, label),
        el("div", { class: "tb-value" }, value || "—"),
      ])
    )
  );
}

/* ---------------- Homepage ---------------- */

function renderHome() {
  renderHeader(null);

  const hero = el("section", { class: "hero" }, [
    el("div", { class: "wrap" }, [
      el("div", { class: "hero-grid" }, [
        el("div", {}, [
          el("div", { class: "eyebrow" }, "Portfolio — Sheet 1 of 1"),
          el("h1", {}, SITE.role),
          el("p", { class: "lede" }, SITE.tagline),
          el("div", { class: "hero-actions" }, [
            el("a", { href: SITE.githubUrl, class: "btn" }, "GitHub ↗"),
            el(
              "a",
              { href: "#search", class: "btn btn-solid" },
              "Search my writing"
            ),
          ]),
          renderTitleBlock("1 / 1"),
        ]),
        el("div", { class: "viewport crosshair" }, [
          el("div", { class: "viewport-label" }, [
            el("span", {}, "ELEVATION — INTRO"),
            el("span", {}, "60 SEC"),
          ]),
          el("div", { class: "viewport-frame" }, [

            /*
            OLD LOOM VIDEO — KEEP FOR LATER
          
            el("iframe", {
              src: SITE.loomEmbedUrl,
              allow: "autoplay; fullscreen",
              allowfullscreen: "true",
            }),
            */
          
            el("img", {
              src: "assets/images/profile.jpeg",
              alt: "Praveen Kumar Kasipanthula",
              class: "profile-image",
            }),
          ]),
        ]),
      ]),
    ]),
  ]);

  const indexRows = CATEGORIES.map((c) => {
    const count = ENTRIES.filter((e) => e.category === c.slug).length;
    return el(
      "a",
      { href: `category.html?cat=${c.slug}`, class: "index-row" },
      [
        el("div", { class: "index-code mono" }, c.code),
        el("div", { class: "index-row-text" }, [
          el("div", { class: "index-row-title" }, c.label),
          el("div", { class: "index-row-blurb" }, c.blurb),
        ]),
        el(
          "div",
          { class: "index-row-arrow mono" },
          `${count} FILED →`
        ),
      ]
    );
  });

  const indexSection = el("section", { style: "padding: 48px 0;" }, [
    el("div", { class: "wrap" }, [
      el("div", { class: "index-panel" }, [
        el(
          "div",
          { class: "index-panel-head" },
          "Category Index"
        ),
        ...indexRows,
      ]),
    ]),
  ]);

  const searchSection = renderSearchSection();

  document.getElementById("app").append(hero, indexSection, searchSection);
  renderFooter();
}

/* ---------------- Category page ---------------- */

function renderCategoryPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("cat") || CATEGORIES[0].slug;
  const cat = categoryBySlug(slug) || CATEGORIES[0];

  renderHeader(cat.slug);

  const tabs = el(
    "nav",
    { class: "sheet-tabs" },
    CATEGORIES.map((c, i) =>
      el(
        "a",
        {
          href: `category.html?cat=${c.slug}`,
          class: `sheet-tab mono${c.slug === cat.slug ? " active" : ""}`,
        },
        `SHEET 0${i + 1} — ${c.code}`
      )
    )
  );

  const catHero = el("section", { class: "category-hero" }, [
    el("div", { class: "wrap" }, [
      el("div", { class: "eyebrow" }, `${cat.code} — Category`),
      el("h1", {}, cat.label),
      el("p", {}, cat.blurb),
    ]),
  ]);

  //const sections = SECTIONS.map((sectionName, i) => {
    const sectionsForCategory =
    cat.slug === "coreml"
      ? ["Technical Content", "Projects"]
      : cat.slug === "projects"
        ? ["Projects"]
        : SECTIONS;
  
  const sections = sectionsForCategory.map((sectionName, i) => {
    const entries = ENTRIES.filter(
      (e) => e.category === cat.slug && e.section === sectionName
    );

    const head = el("div", { class: "section-head" }, [
      el("span", { class: "n" }, String(i + 1).padStart(2, "0")),
      el("h2", {}, sectionName),
      el("span", { class: "rule" }),
    ]);

    let body;
    if (entries.length === 0) {
      body = el(
        "div",
        { class: "empty-state" },
        `No ${sectionName.toLowerCase()} filed yet under ${cat.label}.`
      );
    } else {
      body = el(
        "div",
        { class: "entry-grid" },
        entries.map((e) => renderEntryCard(e))
      );
    }

    return el("div", { class: "section-block" }, [
      el("div", { class: "wrap" }, [head, body]),
    ]);
  });

  document
    .getElementById("app")
    .append(tabs, catHero, ...sections);
  renderFooter();
}

function renderEntryCard(entry) {
  return el("a", { href: entry.link, class: "entry-card" }, [
    el("div", { class: "entry-top" }, [
      el("span", { class: "entry-date mono" }, entry.date || "UNDATED"),
      entry.status === "todo"
        ? el("span", { class: "entry-status" }, "Draft")
        : null,
    ]),
    el("div", { class: "entry-title" }, entry.title),
    el("div", { class: "entry-summary" }, entry.summary),
    el(
      "div",
      { class: "entry-tags" },
      entry.tags.map((t) => el("span", { class: "entry-tag" }, t))
    ),
  ]);
}

/* ---------------- Search: lightweight TF-IDF cosine retrieval ----------------
   No backend or API key — this runs entirely in the browser so it works
   on static GitHub Pages. It tokenizes each entry's title/summary/tags,
   builds TF-IDF vectors, and ranks entries by cosine similarity to the
   query. It's a genuine (if small-scale) retrieval model, not a keyword
   filter — good enough for a "search my writing" box over a personal
   corpus of a few dozen entries. */

function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function buildCorpus(entries) {
  const docs = entries.map((e) =>
    tokenize([e.title, e.summary, (e.tags || []).join(" "), e.category, e.section].join(" "))
  );
  const df = new Map();
  docs.forEach((doc) => {
    new Set(doc).forEach((term) => df.set(term, (df.get(term) || 0) + 1));
  });
  const N = docs.length || 1;
  const idf = new Map();
  df.forEach((count, term) => idf.set(term, Math.log(1 + N / count)));

  const vectors = docs.map((doc) => {
    const tf = new Map();
    doc.forEach((term) => tf.set(term, (tf.get(term) || 0) + 1));
    const vec = new Map();
    tf.forEach((count, term) => vec.set(term, (count / doc.length) * (idf.get(term) || 0)));
    return vec;
  });

  return { vectors, idf };
}

function vectorize(query, idf) {
  const terms = tokenize(query);
  const tf = new Map();
  terms.forEach((term) => tf.set(term, (tf.get(term) || 0) + 1));
  const vec = new Map();
  tf.forEach((count, term) => {
    if (idf.has(term)) vec.set(term, (count / (terms.length || 1)) * idf.get(term));
  });
  return vec;
}

function cosineSim(a, b) {
  let dot = 0, na = 0, nb = 0;
  a.forEach((v, k) => {
    na += v * v;
    if (b.has(k)) dot += v * b.get(k);
  });
  b.forEach((v) => { nb += v * v; });
  if (na === 0 || nb === 0) return 0;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

function renderSearchSection() {
  const { vectors, idf } = buildCorpus(ENTRIES);

  const input = el("input", {
    type: "text",
    placeholder: "Search across every write-up, doc, and project…",
  });
  const resultsBox = el("div", { class: "search-results" });

  function runSearch(query) {
    resultsBox.innerHTML = "";
    if (!query.trim()) {
      resultsBox.appendChild(
        el("div", { class: "search-empty mono" }, "Type to search — e.g. \"agent tool use\" or \"tabular pipeline\".")
      );
      return;
    }
    const qVec = vectorize(query, idf);
    const scored = ENTRIES.map((e, i) => ({ e, score: cosineSim(qVec, vectors[i]) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    if (scored.length === 0) {
      resultsBox.appendChild(
        el("div", { class: "search-empty mono" }, "No matches yet — try a different term.")
      );
      return;
    }

    scored.forEach(({ e, score }) => {
      const cat = categoryBySlug(e.category);
      resultsBox.appendChild(
        el("a", { href: e.link, class: "search-result" }, [
          el("div", { class: "search-result-main" }, [
            el("div", { class: "search-result-cat mono" }, `${cat ? cat.code : "?"} · ${e.section}`),
            el("div", { class: "search-result-title" }, e.title),
            el("div", { class: "search-result-summary" }, e.summary),
          ]),
          el("div", { class: "search-result-score mono" }, score.toFixed(2)),
        ])
      );
    });
  }

  input.addEventListener("input", (ev) => runSearch(ev.target.value));

  const section = el("section", { class: "search-section", id: "search" }, [
    el("div", { class: "wrap" }, [
      el("div", { class: "search-head" }, [
        el("h2", {}, "Search my writing"),
        el(
          "p",
          {},
          "A small retrieval model (TF-IDF + cosine similarity) running in your browser, indexed over every entry on this site."
        ),
      ]),
      el("div", { class: "search-box" }, [
        input,
        el("div", { class: "search-icon mono" }, "⌕"),
      ]),
      resultsBox,
    ]),
  ]);

  runSearch("");
  return section;
}
