import { useState } from "react";
import Bento from "./components/Bento";
import Overlay from "./components/Overlay";
import { viewBody, viewMeta, type View } from "./components/details";
import { profile } from "./data";

export default function App() {
  const [view, setView] = useState<View | null>(null);
  const Body = view ? viewBody[view] : null;

  return (
    <div className="relative min-h-screen">
      {/* faint grid backdrop */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <header className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <p className="font-mono text-lg font-semibold">
          jonathan<span className="text-accent">.nguyen</span>
        </p>
        <p className="hidden font-mono text-xs text-fog sm:block">Gothenburg, Sweden · Chalmers University of Technology</p>
      </header>

      <main className="relative">
        <Bento onOpen={setView} />
      </main>

      <footer className="relative py-6 text-center font-mono text-xs text-fog">
        © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript &amp; Tailwind
      </footer>

      {view && Body && (
        <Overlay eyebrow={viewMeta[view].eyebrow} title={viewMeta[view].title} onClose={() => setView(null)}>
          <Body />
        </Overlay>
      )}
    </div>
  );
}
