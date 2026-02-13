const state = {
  activeCategory: "All",
  query: ""
};

const elements = {
  projectGrid: document.getElementById("project-grid"),
  filters: document.getElementById("filters"),
  searchInput: document.getElementById("search-input"),
  emptyState: document.getElementById("empty-state"),
  projectCount: document.getElementById("project-count"),
  semesterCount: document.getElementById("semester-count"),
  toolCount: document.getElementById("tool-count")
};

function createFilterButtons() {
  const categories = new Set(atlasProjects.map((project) => project.category));
  const labels = ["All", ...categories];

  labels.forEach((label) => {
    const button = document.createElement("button");
    button.className = `filter${label === state.activeCategory ? " active" : ""}`;
    button.type = "button";
    button.textContent = label;
    button.dataset.filter = label;
    button.addEventListener("click", () => {
      state.activeCategory = label;
      renderFilters();
      renderProjects();
    });
    elements.filters.appendChild(button);
  });
}

function renderFilters() {
  const buttons = elements.filters.querySelectorAll(".filter");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.activeCategory);
  });
}

function getFilteredProjects() {
  const query = state.query.trim().toLowerCase();
  return atlasProjects.filter((project) => {
    const categoryMatches =
      state.activeCategory === "All" || project.category === state.activeCategory;

    if (!categoryMatches) {
      return false;
    }

    if (!query) {
      return true;
    }

    const searchable = [
      project.title,
      project.semester,
      project.category,
      project.summary,
      project.impact,
      ...project.tags,
      ...project.tools,
      ...project.authors
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });
}

function buildProjectCard(project) {
  const article = document.createElement("article");
  article.className = `project-card${project.featured ? " featured" : ""}`;

  const chips = document.createElement("div");
  chips.className = "project-meta";
  [project.semester, project.category].forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "project-chip";
    chip.textContent = item;
    chips.appendChild(chip);
  });

  const title = document.createElement("h3");
  title.textContent = project.title;

  const summary = document.createElement("p");
  summary.textContent = project.summary;

  const impact = document.createElement("p");
  impact.textContent = project.impact;

  const authors = document.createElement("p");
  authors.className = "project-authors";
  authors.textContent = `Contributors: ${project.authors.join(", ")}`;

  const tags = document.createElement("div");
  tags.className = "project-tags";
  project.tags.forEach((tag) => {
    const tagPill = document.createElement("span");
    tagPill.textContent = tag;
    tags.appendChild(tagPill);
  });

  const tools = document.createElement("div");
  tools.className = "project-tools";
  project.tools.forEach((tool) => {
    const toolTag = document.createElement("span");
    toolTag.textContent = tool;
    tools.appendChild(toolTag);
  });

  const links = document.createElement("div");
  links.className = "project-links";
  links.appendChild(
    buildProjectLink(
      "Open Dashboard",
      project.dashboardUrl,
      "project-link primary"
    )
  );
  links.appendChild(buildProjectLink("Source Repo", project.repoUrl, "project-link"));

  article.append(chips, title, summary, impact, authors, tags, tools, links);
  return article;
}

function buildProjectLink(label, href, className) {
  const link = document.createElement("a");
  link.className = className;
  link.textContent = href ? label : `${label} (Add Link)`;

  if (!href) {
    link.classList.add("disabled");
    link.href = "#";
    link.setAttribute("aria-disabled", "true");
    return link;
  }

  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  return link;
}

function renderProjects() {
  elements.projectGrid.innerHTML = "";
  const filtered = getFilteredProjects();

  filtered.forEach((project) => {
    elements.projectGrid.appendChild(buildProjectCard(project));
  });

  elements.emptyState.classList.toggle("hidden", filtered.length > 0);
}

function renderMetrics() {
  const semesterCount = new Set(atlasProjects.map((project) => project.semester)).size;
  const toolCount = new Set(
    atlasProjects.flatMap((project) => project.tools)
  ).size;

  elements.projectCount.textContent = String(atlasProjects.length);
  elements.semesterCount.textContent = String(semesterCount);
  elements.toolCount.textContent = String(toolCount);
}

function initSearch() {
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderProjects();
  });
}

function initReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function init() {
  createFilterButtons();
  renderFilters();
  renderProjects();
  renderMetrics();
  initSearch();
  initReveals();
}

init();
