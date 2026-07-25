import type { JSX } from "react";
import { about, education, experience, profile, projects, skillGroups } from "../data";
import { ExternalIcon, GitHubIcon, LinkedInIcon, MailIcon, Tag } from "./ui";

export type View = "about" | "experience" | "projects" | "skills" | "education" | "contact";

export const viewMeta: Record<View, { eyebrow: string; title: string }> = {
  about: { eyebrow: "about", title: "About me" },
  experience: { eyebrow: "experience", title: "Where I've worked" },
  projects: { eyebrow: "projects", title: "Things I've built" },
  skills: { eyebrow: "skills", title: "What I work with" },
  education: { eyebrow: "education", title: "Education" },
  contact: { eyebrow: "contact", title: "Get in touch" },
};

function AboutDetail() {
  return (
    <div className="space-y-4 leading-relaxed text-fog">
      {about.paragraphs.map((p) => (
        <p key={p.slice(0, 24)}>{p}</p>
      ))}
      <dl className="mt-6 grid gap-4 rounded-lg border border-line bg-surface/60 p-5 sm:grid-cols-2">
        {about.facts.map((f) => (
          <div key={f.label}>
            <dt className="font-mono text-xs text-accent">{f.label}</dt>
            <dd className="mt-0.5 text-sm text-snow">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function ExperienceDetail() {
  return (
    <ol className="relative space-y-10 border-l border-line pl-6">
      {experience.map((job) => (
        <li key={job.company} className="relative">
          <span className="absolute top-1.5 -left-[31px] h-3 w-3 rounded-full border-2 border-accent bg-ink" />
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-lg font-bold">
              {job.role} <span className="text-accent">· {job.company}</span>
            </h3>
            <p className="font-mono text-xs text-fog">{job.period}</p>
          </div>
          <p className="mt-0.5 font-mono text-xs text-fog">{job.location}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fog">
            {job.bullets.map((b) => (
              <li key={b.slice(0, 32)} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap gap-2">
            {job.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}

function ProjectsDetail() {
  return (
    <div className="space-y-4">
      {projects.map((project) => {
        const body = (
          <article className="group rounded-lg border border-line bg-surface/60 p-5 transition-colors hover:border-accent/50">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-bold transition-colors group-hover:text-accent">{project.title}</h3>
              {project.link && <ExternalIcon className="mt-1 shrink-0 text-fog transition-colors group-hover:text-accent" />}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-fog">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        );
        return project.link ? (
          <a key={project.title} href={project.link} target="_blank" rel="noreferrer" className="block">
            {body}
          </a>
        ) : (
          <div key={project.title}>{body}</div>
        );
      })}
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 pt-2 font-mono text-sm text-accent transition-colors hover:text-snow"
      >
        <GitHubIcon className="h-4 w-4" /> More on GitHub
      </a>
    </div>
  );
}

function SkillsDetail() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="rounded-lg border border-line bg-surface/60 p-5">
          <h3 className="font-mono text-sm text-accent">{group.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span key={skill} className="rounded-md border border-line bg-ink px-2.5 py-1 text-sm text-snow">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function EducationDetail() {
  return (
    <div className="space-y-4">
      {education.map((entry) => (
        <div key={entry.degree} className="rounded-lg border border-line bg-surface/60 p-5">
          <p className="font-mono text-xs text-fog">{entry.period}</p>
          <h3 className="mt-1.5 font-bold">{entry.degree}</h3>
          <p className="mt-0.5 text-sm text-accent">{entry.school}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fog">
            {entry.notes.map((note) => (
              <li key={note.slice(0, 32)} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function ContactDetail() {
  return (
    <div className="text-center">
      <p className="mx-auto max-w-md leading-relaxed text-fog">
        I'm always happy to talk about quantitative and computational roles, interesting problems, or
        collaboration. The fastest way to reach me is email — I usually reply within a day.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-flex items-center gap-3 rounded-md bg-accent px-6 py-3 font-semibold text-ink-deep transition-colors hover:bg-accent-dim"
      >
        <MailIcon className="h-5 w-5" />
        {profile.email}
      </a>
      <div className="mt-6 flex items-center justify-center gap-6 text-fog">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <GitHubIcon className="h-5 w-5" /> GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 transition-colors hover:text-accent"
        >
          <LinkedInIcon className="h-5 w-5" /> LinkedIn
        </a>
      </div>
      <p className="mt-5 font-mono text-sm text-fog">
        {profile.location} · {profile.phone}
      </p>
    </div>
  );
}

export const viewBody: Record<View, () => JSX.Element> = {
  about: AboutDetail,
  experience: ExperienceDetail,
  projects: ProjectsDetail,
  skills: SkillsDetail,
  education: EducationDetail,
  contact: ContactDetail,
};
