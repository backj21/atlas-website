const atlasProjects = [
  {
    title: "Dunnhumby Customer Analysis Dashboard",
    semester: "Fall 2025",
    category: "Customer Segmentation & CRM Analytics",
    tags: ["RFM", "Segmentation", "Classification", "Retail Analytics"],
    summary:
      "Built a Streamlit dashboard on Dunnhumby transaction and demographic data to segment customers and compare ML performance with and without RFM features.",
    impact:
      "Demonstrated that RFM-driven modeling significantly improves customer classification, with Random Forest reaching about 91% accuracy.",
    tools: [
      "Python",
      "Streamlit",
      "Pandas",
      "scikit-learn",
      "XGBoost",
      "Altair",
      "Seaborn"
    ],
    dashboardUrl: "./project-previews/dunnhumby-rfm.html",
    repoUrl: "https://github.com/backjhello/DunnhumbyRFM.git",
    authors: ["Jinu Jung", "Eugene Hwang"],
    featured: true
  },
  {
    title: "Customer Behavior & Loan Approval Dashboard",
    semester: "Fall 2025",
    category: "Financial Analytics & Modeling",
    tags: ["EDA", "Clustering", "Statistical Testing", "Loan Modeling"],
    summary:
      "Developed an end-to-end Streamlit analytics app covering customer spending behavior, segmentation, statistical analysis, and credit-limit approval modeling.",
    impact:
      "Delivered an interactive workflow that helps analysts profile customers and evaluate ML-based approval predictions across multiple analysis pages.",
    tools: ["Python", "Streamlit", "Pandas", "scikit-learn", "Seaborn", "Matplotlib"],
    dashboardUrl: "https://loanapproval-atlas.streamlit.app/",
    repoUrl: "https://github.com/backjhello/LoanApproval.git",
    authors: ["Seyeon Kim", "Jihyun Seo"],
    featured: false
  }
];
