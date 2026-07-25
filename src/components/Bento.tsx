import type { ReactNode } from "react";
import { education, experience, profile, projects, skillGroups } from "../data";
import type { View } from "./details";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, Reveal, Tag } from "./ui";
import portrait from "../assets/profile.jpg";

function Tile({
  children,
  onClick,
  label,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  onClick?: () => void;
  label?: string;
  className?: string;
  delay?: number;
}) {
  const base =
    "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 p-6 text-left";
  const interactive = onClick
    ? " cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-surface"
    : "";

  return (
    <Reveal className={className} delay={delay}>
      {onClick ? (
        <button onClick={onClick} className={base + interactive} aria-label={label}>
          {children}
          <span className="absolute top-5 right-5 text-fog opacity-60 transition-all group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100">
            <ArrowIcon />
          </span>
        </button>
      ) : (
        <div className={base}>{children}</div>
      )}
    </Reveal>
  );
}

function TileLabel({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs tracking-wider text-accent uppercase">{children}</p>;
}

export default function Bento({ onOpen }: { onOpen: (view: View) => void }) {
  const featured = projects.slice(0, 4);

  return (
    <div className="mx-auto grid max-w-6xl auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-6">
      {/* Identity — the "home page" card */}
      <Tile className="sm:col-span-2 lg:col-span-4 lg:row-span-2" delay={0}>
        <TileLabel>Jonathan Nguyen</TileLabel>
        <h1 className="mt-3 text-3xl leading-tight font-extrabold tracking-tight md:text-5xl">
          Mathematics, machine learning &amp; <span className="text-accent">software that ships</span>.
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-fog">{profile.summary}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`./${profile.cvFile}`}
            download
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-ink-deep transition-colors hover:bg-accent-dim"
          >
            Download CV
          </a>
          <button
            onClick={() => onOpen("about")}
            className="rounded-md border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-accent/60 hover:text-accent"
          >
            More about me
          </button>
          <div className="ml-1 flex items-center gap-3 text-fog">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent">
              <MailIcon />
            </a>
          </div>
        </div>
      </Tile>

      {/* Photo */}
      <Tile className="lg:col-span-2" delay={60}>
        <div className="-m-6 flex flex-1">
          <img src={portrait} alt="Portrait of Jonathan Nguyen" className="h-full max-h-64 w-full object-cover lg:max-h-none" />
        </div>
        <p className="absolute bottom-3 left-6 rounded-full bg-ink-deep/70 px-3 py-1 font-mono text-xs text-snow backdrop-blur">
          {profile.location}
        </p>
      </Tile>

      {/* Currently */}
      <Tile className="lg:col-span-2" delay={120}>
        <TileLabel>Currently</TileLabel>
        <ul className="mt-3 space-y-2.5">
          {profile.currently.map((c) => (
            <li key={c.label} className="flex items-baseline gap-2.5">
              <span className="h-1.5 w-1.5 shrink-0 translate-y-[-1px] rounded-full bg-accent" />
              <span>
                <span className="text-sm font-semibold text-snow">{c.label}</span>{" "}
                <span className="text-sm text-fog">— {c.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Tile>

      {/* Projects */}
      <Tile className="sm:col-span-2 lg:col-span-4 lg:row-span-2" onClick={() => onOpen("projects")} label="Open projects" delay={180}>
        <TileLabel>Projects</TileLabel>
        <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-2">
          {featured.map((p) => (
            <div key={p.title} className="rounded-lg border border-line bg-ink/60 p-4">
              <h3 className="text-sm font-bold">{p.title}</h3>
              <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-fog">{p.description}</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 font-mono text-xs text-fog transition-colors group-hover:text-accent">
          view all {projects.length} projects →
        </p>
      </Tile>

      {/* Experience */}
      <Tile className="lg:col-span-2 lg:row-span-2" onClick={() => onOpen("experience")} label="Open experience" delay={240}>
        <TileLabel>Experience</TileLabel>
        <ol className="mt-4 flex-1 space-y-5 border-l border-line pl-4">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute top-1 -left-[21.5px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-ink" />
              <p className="text-sm font-bold">
                {job.role} <span className="text-accent">· {job.company}</span>
              </p>
              <p className="mt-0.5 font-mono text-xs text-fog">{job.period}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 font-mono text-xs text-fog transition-colors group-hover:text-accent">full detail →</p>
      </Tile>

      {/* Skills */}
      <Tile className="lg:col-span-2" onClick={() => onOpen("skills")} label="Open skills" delay={300}>
        <TileLabel>Skills</TileLabel>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Python", "TypeScript", "SQL", "React", "FastAPI", "pandas", "scikit-learn", "AWS"].map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
          <Tag>+{skillGroups.reduce((n, g) => n + g.skills.length, 0) - 8} more</Tag>
        </div>
      </Tile>

      {/* Education */}
      <Tile className="lg:col-span-2" onClick={() => onOpen("education")} label="Open education" delay={360}>
        <TileLabel>Education</TileLabel>
        <div className="mt-3 space-y-3">
          {education.map((e) => (
            <div key={e.degree}>
              <p className="text-sm font-bold">{e.degree.split("—")[1]?.trim() ?? e.degree}</p>
              <p className="font-mono text-xs text-fog">
                {e.degree.startsWith("MSc") ? "MSc" : "BSc"} · Chalmers · {e.period.split("—")[1]?.trim()}
              </p>
            </div>
          ))}
          <p className="font-mono text-xs text-accent">GPA 4.83 / 5.0</p>
        </div>
      </Tile>

      {/* Contact */}
      <Tile className="lg:col-span-2" onClick={() => onOpen("contact")} label="Open contact" delay={420}>
        <TileLabel>Contact</TileLabel>
        <p className="mt-3 text-sm leading-relaxed text-fog">
          Open to quantitative &amp; computational roles.
        </p>
        <p className="mt-2 font-mono text-sm break-all text-snow">{profile.email}</p>
        <p className="mt-4 font-mono text-xs text-fog transition-colors group-hover:text-accent">get in touch →</p>
      </Tile>
    </div>
  );
}
