export default function Footer() {
  const year = "2026";

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <p className="font-display text-sm text-muted">
          © {year} Eyad Islam. Built with Next.js &amp; Three.js.
        </p>

        <a
          href="#top"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
