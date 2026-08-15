/* ============================================================
   CONTENT.JS
   ------------------------------------------------------------
   This is the ONLY file you need to edit to add your real
   content. Everything on the site (homepage index, category
   pages, and the search box) is generated from the data below.

   HOW TO ADD CONTENT
   1. Find the ENTRIES array below.
   2. Duplicate any entry object, fill in your real values.
   3. category    -> must match one of CATEGORIES[].slug
   4. section     -> must be one of SECTIONS (spelled exactly)
   5. link        -> URL to the actual piece (dev.to post, PDF,
                      GitHub repo, Google Doc, etc.)
   6. status      -> "live" once real content is in, "todo"
                      while it's still a placeholder (todo
               A       entries render with a dimmed "DRAFT" tag)

   Nothing else in the site needs to change.
   ============================================================ */

const SITE = {
  name: "PRAVEEN KUMAR K",
  role: "ML Engineer — Applied & Forward-Deployed",
  tagline:
    "I build machine learning systems end to end — from the algorithm on the whiteboard to the model in production — and write down how, so anyone can audit the thinking.",
  loomEmbedUrl: "https://www.loom.com/embed/REPLACE_WITH_YOUR_LOOM_ID",
  githubUrl: "https://github.com/Praveenkumarkasipanthula?tab=repositories",
  linkedinUrl: "https://www.linkedin.com/in/kasipanthula-praveen-kumar-679a27235/",
  email: "praveenkumarkasipanthula@gmail.com",
  location: "Hyderabad, INDIA",
};

const CATEGORIES = [
  {
    slug: "projects",
    code: "PR",
    label: "Projects",
    blurb: "End-to-end machine learning projects built for real-world use cases.",
  },
  {
    slug: "coreml",
    code: "CM",
    label: "CoreML",
    blurb: "Algorithms from first principles — supervised and unsupervised.",
  },
  {
    slug: "agentic",
    code: "AG",
    label: "Agentic",
    blurb: "Agent architectures, tool use, and multi-step system design.",
  },
  {
    slug: "mlops",
    code: "MO",
    label: "MLOps",
    blurb: "Pipelines, deployment, monitoring, and the tabular-data grind.",
  },
  {
    slug: "system-design",
    code: "SD",
    label: "System Design",
    blurb: "Design docs and architecture for ML-backed systems at scale.",
  },
  
];

// Section order is fixed and identical across every category page.
const SECTIONS = [
  "Blogs",
  "Technical Content",
  "Publications",
  "Projects",
  "Design Documents",
];

/* Every piece of content on the site is one entry in this array.
   Replace the placeholders below with your real work. Add more
   objects for anything not covered yet — the page will render
   however many entries exist per category/section, including zero. */
const ENTRIES = [
  // ---- CoreML / Technical Content — supervised (4) ----
  {
    id: "sup-1",
    category: "coreml",
    section: "Technical Content",
    title: "Logistic Regression — Supervised ML Thinking Doc",
    date: "2026",
    summary: "A production-oriented deep dive into Logistic Regression covering hypothesis design, sigmoid probability mapping, Log Loss, gradient descent, regularization, data leakage, class imbalance, threshold selection, failure modes, and practical AI/ML engineering scenarios.",
    tags: ["supervised", "logistic-regression", "ml-thinking", "production-ml"],
    link: "https://docs.google.com/document/d/1zyKBud4hTC5We5rduFglxT4OE23M1wMfJvnxefLggjo/edit?usp=sharing",
    status: "live"
  },
  {
    category: "coreml",
    section: "Technical Content",
    date: "2026",
    title: "Decision Trees — ML Thinking Doc",
    summary: "A production-focused exploration of Decision Trees, including how tree-based hypotheses work, splitting decisions, overfitting, regularization, and practical ML trade-offs.",
    tags: ["supervised", "classification", "decision-trees", "ml-thinking"],
    link: "https://docs.google.com/document/d/1ViE6-93IABEmkoi6Vmkhr7bwhoKvaZ_gvPlJFoCRssg/edit?usp=sharing"
  },
  
  {
    category: "coreml",
    section: "Technical Content",
    date: "2026",
    title: "Random Forest — ML Thinking Doc",
    summary: "An analysis of Random Forests and how ensembles of decision trees improve robustness, reduce variance, and handle real-world supervised learning problems.",
    tags: ["supervised", "ensemble", "random-forest", "ml-thinking"],
    link: "https://docs.google.com/document/d/1H-E47OKmWUAyxKXzR3IcNMwaANp_JCpPgTu5qxifGo8/edit?usp=sharing"
  },
   { id: "sup-4", category: "coreml", section: "Technical Content", title: "Supervised Algorithms — Write-up 04", date: "", summary: "Add a 1-2 sentence summary of this write-up.", tags: ["supervised"], link: "#", status: "todo" },

  // ---- CoreML / Technical Content — unsupervised (4) ----
  {
    category: "coreml",
    section: "Technical Content",
    date: "2026",
    title: "DBSCAN — ML Thinking Doc",
    summary: "A practical exploration of density-based clustering, focusing on discovering groups of arbitrary shape, identifying noise, and understanding when density-based assumptions break.",
    tags: ["unsupervised", "clustering", "dbscan", "density-based"],
    link: "https://docs.google.com/document/d/1TjPMTRMJR17cRhTIglVl87Yq6JLeq96xVSPCW-oysPY/edit?usp=sharing"
  },
  
  {
    category: "coreml",
    section: "Technical Content",
    date: "2026",
    title: "Principal Component Analysis — ML Thinking Doc",
    summary: "A machine-learning thinking guide to PCA, covering dimensionality reduction, variance, feature transformation, trade-offs, and practical use in ML pipelines.",
    tags: ["unsupervised", "dimensionality-reduction", "pca", "feature-engineering"],
    link: "https://docs.google.com/document/d/1mTRXdRdP48JsXLm6JVB2XR7W99ly0kVzrQHXudp1-fE/edit?usp=sharing"
  },
  
  {
    category: "coreml",
    section: "Technical Content",
    date: "2026",
    title: "Hierarchical Clustering — ML Thinking Doc",
    summary: "An exploration of hierarchical clustering, including how clusters are progressively constructed, how distance and linkage affect the result, and where the approach fits in unsupervised learning.",
    tags: ["unsupervised", "clustering", "hierarchical-clustering", "ml-thinking"],
    link: "https://docs.google.com/document/d/1HFRL-lZEFVZwne4787ZlYM_Bd3pKpeIaUt52bsu_gFo/edit?usp=sharing"
  },
  { id: "unsup-4", category: "coreml", section: "Technical Content", title: "Unsupervised Algorithms — Write-up 04", date: "", summary: "Add a 1-2 sentence summary of this write-up.", tags: ["unsupervised"], link: "#", status: "todo" },


  // ---- CoreML / Projects ----
{
  id: "coreml-price-prediction",
  category: "coreml",
  section: "Projects",
  title: "Price Prediction — Machine Learning Project",
  date: "2026",
  summary:
    "A machine learning project focused on predicting prices from structured data, implemented as a Jupyter Notebook with the complete modeling workflow.",
  tags: ["coreml", "supervised-learning", "price-prediction", "machine-learning"],
  link:
    "https://github.com/Praveenkumarkasipanthula/Price-prediction/blob/main/main.ipynb",
  status: "live",
},

// ---- Projects / Projects ----
{
  id: "projects-price-prediction",
  category: "projects",
  section: "Projects",
  title: "Price Prediction — Machine Learning Project",
  date: "2026",
  summary:
    "A machine learning project focused on predicting prices from structured data, implemented as a Jupyter Notebook with the complete modeling workflow.",
  tags: ["machine-learning", "supervised-learning", "price-prediction"],
  link:
    "https://github.com/Praveenkumarkasipanthula/Price-prediction/blob/main/main.ipynb",
  status: "live",
},

  // ---- Agentic / Design Documents — week 1 ----
  {
    category: "agentic",
    section: "Design Documents",
    date: "2026",
    title: "Agentic System Design — AI Coding Assistant Churn Prevention",
    summary:
      "An intelligent retention system that predicts 30-day customer churn, converts risk into capacity-aware intervention tiers, uses an LLM for execution rather than policy decisions, and learns from intervention outcomes.",
    tags: [
      "agentic-system",
      "churn-prediction",
      "decision-policy",
      "expected-value",
      "llm",
      "feedback-loop"
    ],
    link:
      "https://docs.google.com/document/d/1QkoUjvKtNbSRieHKXEqiLS76zTCqMBXhsQXtdWYhAVo/edit?usp=sharing"
  },
  //{ id: "agentic-design-w1", category: "agentic", section: "Design Documents", title: "Agentic System Design — Week 1", date: "", summary: "Add a summary of the agent architecture this design doc covers.", tags: ["agentic", "architecture"], link: "#", status: "todo" },

  // ---- Blogs — dev.to articles, weeks 2 & 3 ----
  { id: "devto-w2", category: "agentic", section: "Blogs", title: "Dev.to Article — Week 2", date: "", summary: "Add a summary. Re-assign the category if this post isn't about agentic systems.", tags: ["dev.to"], link: "#", status: "todo" },
  { id: "devto-w3", category: "system-design", section: "Blogs", title: "Dev.to Article — Week 3", date: "", summary: "Add a summary. Re-assign the category if this post isn't about system design.", tags: ["dev.to"], link: "#", status: "todo" },

  // ---- System Design / Design Documents — week 3 ----
  { id: "sysdesign-w3", category: "system-design", section: "Design Documents", title: "System Design — Week 3", date: "", summary: "Add a summary of the system this design doc specifies.", tags: ["system-design"], link: "#", status: "todo" },

  // ---- MLOps / Projects — week 5 ----
  { id: "mlops-tabular-w5", category: "mlops", section: "Projects", title: "MLOps Tabular Project — Week 5", date: "", summary: "Add a summary of the pipeline: data, training, deployment, monitoring.", tags: ["mlops", "tabular"], link: "#", status: "todo" },

  // ---- Forward-Deployed — no seed content yet ----
  // Add entries here once you have Forward-Deployed material.
  // Example:
  // { id: "fd-1", category: "forward-deployed", section: "Projects", title: "...", date: "", summary: "...", tags: [], link: "#", status: "todo" },
];
