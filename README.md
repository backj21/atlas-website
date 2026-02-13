# ATLAS Statistics Team Portfolio

Static website for showcasing Statistics team projects under ATLAS (Association of the Liberal Arts and Sciences).

## What this includes

- Modern, responsive single-page layout
- Dynamic project gallery rendered from `projects.js`
- Category filters and search
- Project metric counters
- Structured setup for adding future projects without redesigning the site

## Local preview

Open `index.html` directly in your browser, or run a simple static server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## How to add a new project

1. Open `/Users/jimmyback/Code/ATLAS/atlas_website/projects.js`.
2. Add a new object to the `atlasProjects` array with the same fields:

```js
{
  title: "Project Name",
  semester: "Fall 2026",
  category: "Forecasting",
  tags: ["Forecasting", "Planning"],
  summary: "One-sentence summary.",
  impact: "One-sentence result/impact.",
  tools: ["Python", "Streamlit"],
  dashboardUrl: "https://your-streamlit-app-url",
  repoUrl: "https://github.com/your-org/your-repo",
  authors: ["Statistics Team Cohort X"],
  featured: false
}
```

3. Save. The gallery and metrics update automatically.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In your repository, go to **Settings > Pages**.
3. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main` (or your default branch), folder: `/ (root)`
4. Save and wait for deployment.
5. Your site will be available at:
   `https://<your-github-username>.github.io/<repository-name>/`

## Future expansion

This first version focuses on the Statistics team. When other ATLAS teams are ready:

- Add new pages or sections per team
- Reuse the same data-driven card pattern
- Keep each team's project data in its own JS data file
