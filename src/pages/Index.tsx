import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MatrixRain from "@/components/MatrixRain";

const personalItems = [
  { name: "about_me/", description: "summary & background", to: "/background" },
  { name: "PGP_key/", description: "secure communication", to: "/pgp" },
  { name: "community/", description: "engagement & impact", to: "/community" },
  { name: "journal/", description: "thoughts & writings", to: "/journal" },
];

const workItems = [
  { name: "codebase/", description: "projects & development", to: "/codebase" },
  { name: "opennetics/", description: "current focus", to: "/opennetics" },
  { name: "dotfiles/", description: "system configurations", to: "/dotfiles" },
];

const profileItems = [
  {
    name: "email",
    description: "direct contact",
    to: "mailto:karshmail@icloud.com",
    external: false,
  },
  {
    name: "github*",
    description: "code repositories",
    to: "http://github.com/karshPrime",
    external: true,
  },
  {
    name: "linkedIn*",
    description: "professional profile",
    to: "https://linkedin.com/in/karshPrime",
    external: true,
  },
];

const TerminalHeading = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Karsh Ranjan";

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="font-mono">
      <span className="text-primary/60">$</span>
      <span className="text-primary/60 ml-2">whoami</span>
      <div className="mt-2">
        <span className="text-primary text-3xl md:text-5xl font-bold tracking-tight">
          {displayText}
        </span>
        <span
          className={`text-primary text-3xl md:text-5xl ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        >
          _
        </span>
      </div>
    </div>
  );
};

const FileTree = () => {
  const renderSection = (
    command: string,
    items: typeof personalItems | typeof profileItems
  ) => (
    <div className="mb-6">
      <div className="text-muted-foreground mb-2">
        <span className="text-primary/60">$</span>
        <span className="text-primary/60 ml-2">{command}</span>
      </div>
      <div className="pl-2 space-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const prefix = isLast ? "└──" : "├──";
          const isExternal = "external" in item && item.external;

          if (isExternal || item.to.startsWith("mailto:")) {
            return (
              <a
                key={item.name}
                href={item.to}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-2 hover:text-primary transition-colors"
              >
                <span className="text-primary/40">{prefix}</span>
                <span className="text-primary group-hover:text-primary/80">
                  {item.name}
                </span>
                <span className="text-muted-foreground text-xs mt-0.5 hidden sm:inline">
                  {item.description}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.to}
              className="group flex items-start gap-2 hover:text-primary transition-colors"
            >
              <span className="text-primary/40">{prefix}</span>
              <span className="text-primary group-hover:text-primary/80">
                {item.name}
              </span>
              <span className="text-muted-foreground text-xs mt-0.5 hidden sm:inline">
                {item.description}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="font-mono text-sm">
      {renderSection("ls ~/Personal_Archive", personalItems)}
      {renderSection("ls ~/Creative_Dashboard", workItems)}
      {renderSection("ls ~/Digital_Footprints", profileItems)}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Matrix rain effect */}
      <MatrixRain />

      {/* Corner decorations - scroll with content */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30" />

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl relative z-10">
        {/* Header */}
        <header className="mb-12">
          <TerminalHeading />
          <p className="text-muted-foreground font-mono text-sm mt-6 leading-relaxed">
            Portfolio websites are like unique neckties - an accessory that reflects your personality.
            Just as a colourful tie adds character to an outfit, this site reveals my essence
            beyond formalism. It’s a carefully crafted space where I organise my identity.
          </p>
          <p className="text-muted-foreground font-mono text-sm mt-6 leading-relaxed">
            Here, every choice matters: from the font styles and colours to the way I structure my
            experiences. It’s not just about words; it's about how I present different aspects of my
            life in a visually cohesive way.
          </p>
        </header>

        {/* File Tree Navigation */}
        <nav className="mb-16">
          <FileTree />
        </nav>

        {/* Footer */}
        <footer className="pt-6 border-t border-border/20">
          <div className="flex items-center justify-between text-muted-foreground text-xs font-mono">
            <span>[https://karsh.me]</span>
            <span className="text-primary/40">◈ ENCRYPTED ◈</span>
          </div>
        </footer>
      </div>

      {/* Bottom corner decorations */}
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30" />
    </div>
  );
};

export default Index;
