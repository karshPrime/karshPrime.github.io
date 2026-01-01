import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Scan line effect */}
      <div className="pointer-events-none fixed inset-0 z-50">
        <div className="absolute w-full h-px bg-primary/20 animate-scan-line" />
      </div>

      {/* Corner decorations */}
      <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
      <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
      <div className="fixed bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
      <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30" />

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-wider">back to main</span>
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-primary animate-pulse-glow" />
            <span className="text-primary/50 font-mono text-xs uppercase tracking-widest">
              /{title}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display uppercase tracking-widest text-primary text-glow-primary">
            {title}
          </h1>
        </header>

        <main className="text-foreground/80 font-mono leading-relaxed">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
