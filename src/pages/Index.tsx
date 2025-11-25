import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Terminal, Lock, AlertTriangle, Code, BookOpen, Play } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { simulateScan } from "@/lib/scanSimulator";

const Index = () => {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const runScan = async () => {
    if (running) return;
    setRunning(true);
    setProgress(0);

    try {
      await simulateScan((p) => setProgress(p));

      // fake results
      const vulnCount = Math.floor(Math.random() * 6); // 0-5
      toast({
        title: "Scan complete",
        description: vulnCount > 0 ? `${vulnCount} potential issues found` : `No issues found`,
      });
    } catch (err) {
      toast({ title: "Scan failed", description: "An unexpected error occurred" });
    } finally {
      setRunning(false);
      setProgress(100);
      setTimeout(() => setProgress(0), 1200);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 inline-block">
            <Shield className="h-20 w-20 text-primary animate-glow" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-primary text-glow">VulnScan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            An <span className="text-primary font-semibold">Ethical Hacking Learning Platform</span> for understanding 
            web vulnerabilities in a safe, legal environment
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Learn how common security vulnerabilities work, why they're dangerous, 
            and most importantly - how to fix them properly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/vulnerabilities">
                <Terminal className="mr-2 h-5 w-5" />
                Explore Vulnerabilities
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/solutions">
                <Lock className="mr-2 h-5 w-5" />
                Learn Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is <span className="text-primary">Ethical Hacking?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ethical hacking is the practice of testing systems for vulnerabilities to improve security. 
            It's legal, authorized, and essential for building secure applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/20 hover:border-primary/40 transition-all cyber-glow">
            <CardHeader>
              <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
              <CardTitle className="text-xl">Learn Attacks</CardTitle>
              <CardDescription className="text-base">
                Understand how SQL Injection, XSS, and weak passwords work through interactive demos
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-all cyber-glow">
            <CardHeader>
              <Code className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-xl">See Real Code</CardTitle>
              <CardDescription className="text-base">
                Compare vulnerable code with secure implementations using industry best practices
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-all cyber-glow">
            <CardHeader>
              <BookOpen className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-xl">Build Securely</CardTitle>
              <CardDescription className="text-base">
                Apply security principles to create robust, protected applications from day one
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto border-border">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
              <Shield className="h-8 w-8 text-destructive" />
              The Problem We're Solving
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Modern websites face serious security threats like <strong className="text-foreground">SQL Injection</strong>, 
              <strong className="text-foreground"> Cross-Site Scripting (XSS)</strong>, 
              <strong className="text-foreground"> Weak Passwords</strong>, and 
              <strong className="text-foreground"> Unvalidated Inputs</strong>.
            </p>
            <p>
              Beginners often struggle to understand how these vulnerabilities work because most real systems 
              are properly protected and cannot be tested without breaking the law.
            </p>
            <p className="text-primary font-semibold">
              VulnScan provides a safe, legal platform where you can EXPERIENCE how web vulnerabilities work 
              and learn how to fix them - all without doing anything illegal.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Vulnerabilities Overview */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interactive <span className="text-primary">Demonstrations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try these attacks in a safe environment and learn why they're dangerous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                SQL Injection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Learn how attackers bypass login systems and manipulate databases by injecting malicious SQL code.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Bypass authentication</li>
                <li>Extract sensitive data</li>
                <li>Modify or delete records</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-secondary" />
                XSS Attack
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                See how malicious scripts can be injected into web pages and executed in victims' browsers.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Steal session cookies</li>
                <li>Redirect users</li>
                <li>Deface websites</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Weak Passwords
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Test password strength and understand brute-force and dictionary attack vulnerabilities.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground list-disc list-inside">
                <li>Brute-force attacks</li>
                <li>Dictionary attacks</li>
                <li>Rainbow tables</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/vulnerabilities">
              <Terminal className="mr-2 h-5 w-5" />
              Try Interactive Demos
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto border-primary/30 bg-card/50">
          <CardContent className="text-center py-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6 animate-glow" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Begin your journey into ethical hacking and web security. 
              All demonstrations are 100% legal, safe, and educational.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/vulnerabilities">Start Learning</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
