import { Link, useLocation } from "react-router-dom";
import { Shield, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-8 w-8 text-primary group-hover:text-glow transition-all" />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">Vuln</span>
              <span className="text-secondary">Scan</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant={isActive("/") ? "default" : "ghost"}
              size="sm"
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/vulnerabilities") ? "default" : "ghost"}
              size="sm"
            >
              <Link to="/vulnerabilities">Vulnerabilities</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/solutions") ? "default" : "ghost"}
              size="sm"
            >
              <Link to="/solutions">Solutions</Link>
            </Button>
            <Button
              asChild
              variant={isActive("/about") ? "default" : "ghost"}
              size="sm"
            >
              <Link to="/about">About</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
