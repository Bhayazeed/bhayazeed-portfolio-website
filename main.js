// Renders content.js into the page. You normally don't need to edit this file.
(function () {
  const C = window.CONTENT;
  const $ = (id) => document.getElementById(id);
  const put = (id, ...kids) => $(id).append(...kids.flat().filter((k) => k != null && k !== "" && k !== false));

  // Tiny element builder: el("p", { class: "x" }, "text", childEl, ...)
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v === "" || v == null || v === false) continue;
      node.setAttribute(k, v);
    }
    for (const c of children.flat()) {
      if (c == null || c === "") continue;
      node.append(c instanceof Node ? c : document.createTextNode(c));
    }
    return node;
  }
  const ext = { target: "_blank", rel: "noopener" };
  const tags = (list) => (list && list.length ? el("ul", { class: "tags" }, list.map((t) => el("li", {}, t))) : null);
  const points = (list) => (list && list.length ? el("ul", { class: "points" }, list.map((p) => el("li", {}, p))) : null);

  const p = C.profile, L = C.links;
  function photo(src, alt) {
    const img = el("img", { class: "hero-photo", src, alt });
    img.onerror = () => img.remove(); // no photo file yet -> just hide it
    return img;
  }

  // Nav + hero
  $("nav-name").textContent = p.name;
  const actions = el("div", { class: "actions" },
    L.cv && el("a", { class: "btn primary", href: L.cv, ...ext }, "Download CV"),
    L.linkedin && el("a", { class: "btn", href: L.linkedin, ...ext }, "LinkedIn"),
    L.github && el("a", { class: "btn", href: L.github, ...ext }, "GitHub"),
    L.email && el("a", { class: "btn", href: "mailto:" + L.email }, "Email")
  );
  put("hero", 
    p.photo ? photo(p.photo, p.name) : null,
    el("div", {},
      el("h1", {}, p.name),
      el("p", { class: "role" }, p.role),
      el("p", { class: "focus" }, p.focus),
      el("p", { class: "summary" }, p.summary),
      el("div", { class: "meta" },
        el("span", {}, p.location),
        p.availability && el("span", { class: "open" }, "● " + p.availability)
      ),
      actions
    )
  );

  // Highlights
  put("highlights", ...C.highlights.map((h) =>
    el("div", { class: "stat" }, el("strong", {}, h.value), el("span", {}, h.label))
  ));

  // Experience
  put("experience-list", ...C.experience.map((j) =>
    el("article", { class: "job" },
      el("div", { class: "period" }, j.period),
      el("div", {},
        el("h3", {}, j.title),
        el("p", { class: "org" }, [j.org, j.place].filter(Boolean).join(" · ")),
        points(j.points),
        tags(j.tags),
        j.link && el("a", { class: "job-link", href: j.link.url, ...ext }, j.link.label + " →")
      )
    )
  ));

  // Projects (first project with a badge is shown full-width)
  put("project-list", ...C.projects.map((pr, i) =>
    el("article", { class: i === 0 ? "card featured" : "card" },
      pr.badge && el("span", { class: "badge" }, pr.badge),
      el("h3", {}, pr.name),
      el("p", { class: "role" }, pr.role),
      el("p", { class: "summary" }, pr.summary),
      el("p", { class: "details" }, pr.details),
      tags(pr.tags),
      pr.links && pr.links.length
        ? el("div", { class: "links" }, pr.links.map((l) => el("a", { href: l.url, ...ext }, l.label + " →")))
        : null
    )
  ));

  // Skills
  put("skill-list", ...C.skills.map((s) =>
    el("div", { class: "skill-row" }, el("div", { class: "group" }, s.group), tags(s.items))
  ));

  // Education
  put("education-list", ...C.education.map((e) =>
    el("article", { class: "edu" },
      el("h3", {}, e.degree),
      el("p", { class: "school" }, [e.school, e.period].filter(Boolean).join(" · ")),
      e.note && el("p", { class: "note" }, e.note),
      e.thesis && el("div", { class: "thesis" },
        el("div", { class: "label" }, "Thesis"),
        el("p", {}, e.thesis.title),
        points(e.thesis.points)
      )
    )
  ));
  if (C.achievements && C.achievements.length) {
    put("education-list", el("div", { class: "achievements" },
      el("h3", {}, "Achievements & Certifications"), points(C.achievements)));
  }
  if (C.languages && C.languages.length) {
    put("education-list", el("p", { class: "langs" }, el("strong", {}, "Languages: "), C.languages.join(" · ")));
  }

  // Contact
  put("contact-body", 
    el("p", {}, "I'm open to entry-level roles in AI/ML, data, and software engineering. The fastest way to reach me is LinkedIn or email."),
    L.email ? el("p", {}, el("a", { href: "mailto:" + L.email }, L.email)) : null,
    actions.cloneNode(true)
  );

  $("footer").textContent = "© " + new Date().getFullYear() + " " + p.name;
})();
