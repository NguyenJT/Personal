// All site content lives here — edit this file to update the website.

export const profile = {
  name: "Jonathan Nguyen",
  location: "Gothenburg, Sweden",
  email: "Nguyen-JT@hotmail.com",
  phone: "+46 79 076 96 49",
  github: "https://github.com/NguyenJT",
  linkedin: "https://www.linkedin.com/in/jonathan-nguyen-8b773b257/",
  cvFile: "Jonathan_Nguyen_CV.pdf",
  tagline: "Mathematics, machine learning, and software that ships.",
  summary:
    "Engineering Physics graduate starting an MSc in Engineering Mathematics & Computational Science at Chalmers. I like taking problems all the way from mathematical model to production code — time-series machine learning, AI pipelines, and full-stack systems in Python, FastAPI, React and TypeScript.",
  currently: [
    { label: "Software Engineer Intern", detail: "Balence · Stockholm" },
    { label: "Data Scientist Intern", detail: "Algeno · Gothenburg" },
    { label: "MSc from Aug 2026", detail: "Eng. Mathematics & Computational Science" },
  ],
};

export const about = {
  paragraphs: [
    "I fell for mathematics early and never really recovered. That pull took me through an Engineering Physics degree at Chalmers and now into an MSc focused on computational mathematics, optimization, and statistical learning.",
    "What I enjoy most is the full arc of a problem: understanding the underlying model, choosing the right statistical or numerical method, then building it into software people actually use — with tests, clean APIs, and a frontend when it needs one.",
    "Away from the keyboard I play chess and basketball, and I still spend a suspicious amount of free time on physics.",
  ],
  facts: [
    { label: "Based in", value: "Gothenburg, Sweden" },
    { label: "University", value: "Chalmers University of Technology" },
    { label: "GPA", value: "4.83 / 5.0 (BSc)" },
    { label: "Languages", value: "Swedish · English · Vietnamese" },
  ],
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Balence",
    location: "Stockholm",
    period: "Jun 2026 — Aug 2026",
    bullets: [
      "Built a document template engine that turns standardized Swedish legal contracts into reusable fill-in-the-blank templates, including an AI parser (Claude on AWS Bedrock) converting uploaded Word/PDF contracts via a two-pass, schema-validated pipeline with automatic render verification.",
      "Productionized the pipeline: asynchronous template authoring on Celery workers, Jinja2 + WeasyPrint HTML-to-PDF rendering with live preview, workspace-scoped access control.",
      "Shipped a firm-wide client overview and monthly-close checklist for accounting teams end to end — task statuses auto-derived from bookkeeping data, recurring tasks, pytest coverage including concurrent-update tests.",
      "Developed a role-gated admin analytics platform: time-bucketed SQL aggregation in PostgreSQL and a React dashboard with Recharts time-series and failed-document monitoring.",
    ],
    tags: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "AWS Bedrock", "Celery"],
  },
  {
    role: "Data Scientist Intern",
    company: "Algeno",
    location: "Gothenburg",
    period: "Feb 2026 — Present",
    bullets: [
      "Built a time-series anomaly-detection engine for indoor heating sensors over 4.6M readings: robust statistical detectors (median/MAD z-scores, least-squares drift, derivative and cross-sensor checks) plus a nonparametric dynamic threshold, fully vectorized in pandas.",
      "Extracted, cleaned, and modeled sensor time series for temperature forecasting and sensor segmentation with scikit-learn clustering (KMeans, DBSCAN, PCA, silhouette scoring), validated on held-out data.",
      "Shipped the engine as a tested Python package (pytest) with a React frontend for exploring flagged anomalies across sensors.",
    ],
    tags: ["Python", "pandas", "scikit-learn", "pytest", "React"],
  },
  {
    role: "Private Teacher",
    company: "Leexer",
    location: "Gothenburg",
    period: "Feb 2023 — Feb 2026",
    bullets: [
      "Tutored students aged 14–19 in physics and mathematics, planning lessons and adapting explanations to each student's level.",
    ],
    tags: ["Teaching", "Mathematics", "Physics"],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "GPT-2 CUDA Inference Engine",
    description:
      "A from-scratch CUDA forward pass for GPT-2 124M — every kernel hand-written (embeddings, layernorm, attention, GELU, matmul), verified layer by layer against a HuggingFace oracle. Developed from a Mac with the GPU living in the cloud.",
    tags: ["CUDA", "C++", "Python", "GPU"],
    link: "https://github.com/NguyenJT/gpt2-cuda",
  },
  {
    title: "Trading Bot & Backtesting Engine",
    description:
      "An honest, vectorized backtesting engine testing SMA-200 trend and dual-momentum strategies on 21 years of daily ETF data. No-lookahead guarantees, real turnover costs, and sanity tests that prove the engine can't cheat.",
    tags: ["Python", "pandas", "Quant Finance"],
  },
  {
    title: "Internship Radar",
    description:
      "Local-first internship archive and application tracker for quant/SWE/ML roles. FastAPI + SQLite backend with importers for the Swedish Platsbanken API, React/TypeScript frontend for triage and status tracking.",
    tags: ["FastAPI", "React", "TypeScript", "SQLite"],
  },
  {
    title: "Imposter — Party Game",
    description:
      "A pass-the-phone social deduction game: everyone gets a secret word except the imposter, who must blend in. Pure frontend React + TypeScript, designed for a single phone going around a table.",
    tags: ["React", "TypeScript", "Vite"],
  },
  {
    title: "Alcohol Soundcheck",
    description:
      "Experimental physics: why does flipping a bottle and striking it produce a dampened sound? Answered with data acquisition, FFT analysis, and Lorentzian curve fitting over recordings at varying fill levels.",
    tags: ["Python", "FFT", "Experimental Physics"],
    link: "https://github.com/NguyenJT/AlcoholExperiment",
  },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript / JavaScript", "SQL (PostgreSQL)", "C", "Java", "HTML / CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["pandas", "NumPy", "SciPy", "scikit-learn", "Matplotlib", "FastAPI", "SQLAlchemy", "React", "pytest"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git / GitHub", "AWS (Bedrock, S3)", "Celery", "Alembic", "Vite", "TanStack Query", "CAD"],
  },
  {
    title: "Mathematics",
    skills: ["Probability & Statistics", "Numerical Analysis", "Optimization", "Machine Learning", "Bayesian Inference"],
  },
];

export type Education = {
  degree: string;
  school: string;
  period: string;
  notes: string[];
};

export const education: Education[] = [
  {
    degree: "MSc — Engineering Mathematics & Computational Science",
    school: "Chalmers University of Technology",
    period: "Aug 2026 — Jun 2028 (expected)",
    notes: [
      "Master's programme within the Engineering Physics degree; specialization in computational mathematics, optimization, and statistical learning.",
    ],
  },
  {
    degree: "BSc — Engineering Physics",
    school: "Chalmers University of Technology",
    period: "Aug 2023 — Jun 2026",
    notes: [
      "GPA 4.83 / 5.0.",
      "Coursework: Probability & Statistics, Numerical Analysis (Python), Linear Algebra, Machine Learning & Bayesian Inference.",
      "Additional higher-level mathematics coursework at the University of Gothenburg, taken alongside the degree.",
    ],
  },
];
