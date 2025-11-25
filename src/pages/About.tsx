import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Shield, Target, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Shield className="inline-block mr-3 h-10 w-10 text-primary" />
            About <span className="text-primary">VulnScan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering the next generation of ethical hackers through education
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                VulnScan is an educational platform designed to help beginners understand common web vulnerabilities 
                in a safe, controlled environment. We believe that understanding how attacks work is the first step 
                to building secure applications.
              </p>
              <p className="text-muted-foreground">
                Modern websites face serious security threats like SQL Injection, Cross-Site Scripting (XSS), 
                and weak password policies. Many beginners struggle to understand these concepts because most 
                real systems are protected and cannot be tested without breaking the law.
              </p>
              <p className="text-muted-foreground">
                Our platform provides interactive demonstrations that show exactly how these vulnerabilities work, 
                why they're dangerous, and most importantly, how to fix them properly.
              </p>
            </CardContent>
          </Card>

          {/* What You'll Learn */}
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-6 w-6 text-secondary" />
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Understanding Attacks</h4>
                  <p className="text-sm text-muted-foreground">
                    See firsthand how SQL Injection, XSS, and other attacks work through interactive demonstrations.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Secure Coding</h4>
                  <p className="text-sm text-muted-foreground">
                    Learn industry-standard practices like parameterized queries, input sanitization, and password hashing.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Real-World Examples</h4>
                  <p className="text-sm text-muted-foreground">
                    Study actual code examples showing both vulnerable and secure implementations.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 text-primary">Best Practices</h4>
                  <p className="text-sm text-muted-foreground">
                    Understand defense-in-depth, least privilege, and other security principles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal & Ethical */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-primary" />
                Legal & Ethical Use
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This platform is designed <strong className="text-foreground">exclusively for educational purposes</strong>. 
                All demonstrations are simulated and run entirely in your browser - no real systems are affected.
              </p>
              <div className="bg-destructive/10 border border-destructive/30 p-4 rounded-lg">
                <p className="text-sm font-semibold text-destructive mb-2">⚠️ Important Legal Notice</p>
                <p className="text-sm text-muted-foreground">
                  Using these techniques against real systems without explicit permission is illegal and unethical. 
                  Always obtain proper authorization before conducting security testing. This platform is meant to 
                  teach defensive security practices, not to facilitate attacks.
                </p>
              </div>
              <p className="text-muted-foreground">
                Ethical hacking requires responsibility, integrity, and respect for privacy and security. 
                Use this knowledge to build better, more secure applications.
              </p>
            </CardContent>
          </Card>

          {/* Creator Info */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-primary" />
                Created By
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                VulnScan was created as an educational project to help students and developers understand 
                web security fundamentals. The platform demonstrates real vulnerabilities in a safe environment 
                while teaching proper mitigation techniques.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="default"
                  className="flex items-center gap-2"
                >
                  <a 
                    href="https://www.linkedin.com/in/greeshmagowda06" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  <a 
                    href="http://github.com/greeshmagowda06" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <a href="mailto:vgreeshmagowda06@gmail.com">
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
