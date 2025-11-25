import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} VulnScan — Educational demo for ethical hacking
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <a href="https://www.linkedin.com/in/greeshmagowda06" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
            </a>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="https://github.com/greeshmagowda06" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> GitHub
            </a>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="mailto:ethicalhacking784@gmail.com">
              <Mail className="h-4 w-4 mr-2" /> Contact
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
