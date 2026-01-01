import { Link } from "react-router-dom";

interface CyberBoxProps {
  heading: string;
  description: string;
  to: string;
}

const CyberBox = ({ heading, description, to }: CyberBoxProps) => {
  return (
    <Link to={to} className="group block">
      <div className="cyber-box border-primary/30 bg-card/60 hover:border-primary/60 min-w-[160px]">
        <h4 className="text-primary font-display text-lg uppercase tracking-wider mb-2">
          {heading}
        </h4>
        <p className="text-foreground/60 font-mono text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default CyberBox;
