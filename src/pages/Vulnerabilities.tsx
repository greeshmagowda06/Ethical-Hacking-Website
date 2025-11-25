import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Terminal, AlertTriangle, CheckCircle2, XCircle, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const Vulnerabilities = () => {
  const { toast } = useToast();
  
  // SQL Injection state
  const [sqlUsername, setSqlUsername] = useState("");
  const [sqlPassword, setSqlPassword] = useState("");
  const [sqlResult, setSqlResult] = useState<{ type: "success" | "error" | "warning"; message: string } | null>(null);

  // XSS state
  const [xssComment, setXssComment] = useState("");
  const [xssResults, setXssResults] = useState<{ unsafe: string; safe: string } | null>(null);

  // Password strength state
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: "", color: "" });

  const handleSqlInjection = () => {
    // Simulating vulnerable SQL check
    if (sqlUsername.includes("'") || sqlUsername.toLowerCase().includes("or") || 
        sqlPassword.includes("'") || sqlPassword.toLowerCase().includes("or")) {
      setSqlResult({
        type: "warning",
        message: "⚠️ SQL INJECTION DETECTED! You bypassed the login system. In a real application, you could access unauthorized data or delete databases."
      });
      toast({ title: "SQL Injection", description: "Vulnerable login bypassed — demonstrates why prepared statements are needed." });
    } else if (sqlUsername === "admin" && sqlPassword === "admin123") {
      setSqlResult({
        type: "success",
        message: "✓ Login successful with valid credentials."
      });
      toast({ title: "Login", description: "Authenticated with provided credentials." });
    } else {
      setSqlResult({
        type: "error",
        message: "✗ Invalid credentials. Try: ' OR '1'='1 in the username field."
      });
      toast({ title: "Login Failed", description: "Invalid credentials. Try the injection example to see the vulnerability." });
    }
  };

  const handleSecureLogin = () => {
    // Simulate server-side parameterized query: reject inputs with quotes or SQL keywords
    const sanitize = (s: string) => s.replace(/['\"]/g, "").toLowerCase();
    const u = sanitize(sqlUsername);
    const p = sanitize(sqlPassword);

    if (u === "admin" && p === "admin123") {
      setSqlResult({ type: "success", message: "✅ Secure login (prepared statements) — authentication succeeded." });
      toast({ title: "Secure Login", description: "Prepared statements would prevent injection attacks." });
    } else {
      setSqlResult({ type: "error", message: "✗ Secure login failed — inputs did not match stored credentials." });
      toast({ title: "Secure Login", description: "Sanitized input did not match credentials." });
    }
  };

  const handleXss = () => {
    const unsafe = xssComment;
    // Simple sanitization
    const safe = xssComment
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");

    setXssResults({ unsafe, safe });

    // Notify user and demonstrate risk
    if (xssComment.toLowerCase().includes("<script>") || xssComment.toLowerCase().includes("alert")) {
      toast({ title: "XSS Detected", description: "This input would execute in a vulnerable app — sanitize user content." });
      setTimeout(() => {
        if (xssComment.toLowerCase().includes("alert")) {
          // gentle browser alert to show effect in demo
          alert("⚠️ XSS Detected! In a real scenario, this could steal cookies or redirect users.");
        }
      }, 100);
    } else {
      toast({ title: "Comment Submitted", description: "Input rendered safely in the sanitized example." });
    }
  };

  const checkPasswordStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (pwd.length >= 12) score++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
    if (/\d/.test(pwd)) score++;
    if (/[^a-zA-Z\d]/.test(pwd)) score++;

    let label = "";
    let color = "";

    if (score === 0 || pwd.length < 6) {
      label = "Very Weak";
      color = "bg-destructive";
    } else if (score <= 2) {
      label = "Weak";
      color = "bg-orange-500";
    } else if (score === 3) {
      label = "Medium";
      color = "bg-yellow-500";
    } else if (score === 4) {
      label = "Strong";
      color = "bg-cyan-500";
    } else {
      label = "Very Strong";
      color = "bg-primary";
    }

    setPasswordStrength({ score: (score / 5) * 100, label, color });
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    checkPasswordStrength(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Terminal className="inline-block mr-3 h-10 w-10 text-primary" />
            Vulnerability <span className="text-primary">Demonstrations</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience how common web vulnerabilities work in a safe, controlled environment
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* SQL Injection Demo */}
          <Card className="border-primary/20 cyber-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-destructive" />
                SQL Injection Demo
              </CardTitle>
              <CardDescription className="text-base">
                SQL Injection allows attackers to manipulate database queries and bypass authentication
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm mb-3 text-foreground">
                  <strong>Try this attack:</strong> Enter <code className="bg-background px-2 py-1 rounded text-primary">admin</code> as username and <code className="bg-background px-2 py-1 rounded text-primary">' OR '1'='1</code> as password
                </p>
                <div className="grid gap-3">
                  <Input
                    placeholder="Username"
                    value={sqlUsername}
                    onChange={(e) => setSqlUsername(e.target.value)}
                    className="font-mono"
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={sqlPassword}
                    onChange={(e) => setSqlPassword(e.target.value)}
                    className="font-mono"
                  />
                  <div className="grid sm:grid-cols-2 gap-2">
                    <Button onClick={handleSqlInjection} className="w-full">
                      Login (Vulnerable)
                    </Button>
                    <Button onClick={handleSecureLogin} variant="secondary" className="w-full">
                      Simulate Secure Login
                    </Button>
                  </div>
                </div>
              </div>

              {sqlResult && (
                <Alert variant={sqlResult.type === "warning" ? "destructive" : "default"} className="border-2">
                  <AlertDescription className="text-sm font-medium">
                    {sqlResult.message}
                  </AlertDescription>
                </Alert>
              )}

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  Why This Happens
                </h4>
                <p className="text-sm text-muted-foreground">
                  Vulnerable code directly concatenates user input into SQL queries. The input <code className="text-primary">' OR '1'='1</code> 
                  changes the query logic to always return true, bypassing authentication.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* XSS Demo */}
          <Card className="border-secondary/20 cyber-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-destructive" />
                Cross-Site Scripting (XSS) Demo
              </CardTitle>
              <CardDescription className="text-base">
                XSS allows attackers to inject malicious scripts into web pages viewed by other users
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm mb-3 text-foreground">
                  <strong>Try this attack:</strong> Enter <code className="bg-background px-2 py-1 rounded text-secondary">&lt;script&gt;alert('XSS')&lt;/script&gt;</code> in the comment box
                </p>
                <div className="grid gap-3">
                  <Textarea
                    placeholder="Enter your comment..."
                    value={xssComment}
                    onChange={(e) => setXssComment(e.target.value)}
                    className="font-mono min-h-[100px]"
                  />
                  <Button onClick={handleXss} variant="secondary" className="w-full">
                    Submit Comment
                  </Button>
                </div>
              </div>

              {xssResults && (
                <div className="space-y-3">
                  <Alert variant="destructive" className="border-2">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4" />
                      <AlertDescription className="flex-1">
                        <div className="flex items-center justify-between">
                          <strong>Unsafe Output</strong>
                          <Button size="sm" variant="ghost" onClick={() => { navigator.clipboard.writeText(xssResults.unsafe); toast({ title: "Copied", description: "Unsafe output copied to clipboard (for demo only)." }); }}>
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <pre className="mt-2 bg-background p-2 rounded text-xs overflow-x-auto">
                          {xssResults.unsafe}
                        </pre>
                        <p className="mt-2 text-xs">This would execute malicious code in a vulnerable application!</p>
                      </AlertDescription>
                    </div>
                  </Alert>

                  <Alert className="border-primary border-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      <AlertDescription className="flex-1">
                        <div className="flex items-center justify-between">
                          <strong>Safe Output (Sanitized)</strong>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" onClick={() => { navigator.clipboard.writeText(xssResults.safe); toast({ title: "Copied", description: "Sanitized output copied to clipboard." }); }}>
                              <Copy className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" onClick={() => toast({ title: "Sanitized", description: "Special characters are escaped, preventing script execution." })}>
                              <Check className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <pre className="mt-2 bg-background p-2 rounded text-xs overflow-x-auto">
                          {xssResults.safe}
                        </pre>
                        <p className="mt-2 text-xs">Special characters are escaped, preventing script execution.</p>
                      </AlertDescription>
                    </div>
                  </Alert>
                </div>
              )}

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  Why This Happens
                </h4>
                <p className="text-sm text-muted-foreground">
                  When user input is rendered without sanitization, browsers execute any JavaScript code, 
                  allowing attackers to steal cookies, session tokens, or redirect users to malicious sites.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Password Strength Demo */}
          <Card className="border-primary/20 cyber-glow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-primary" />
                Password Strength Checker
              </CardTitle>
              <CardDescription className="text-base">
                Weak passwords are vulnerable to brute-force and dictionary attacks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg border border-border">
                <p className="text-sm mb-3 text-foreground">
                  <strong>Test password strength:</strong> Try passwords like "123456", "password", or "MyP@ssw0rd!2024"
                </p>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter a password to test..."
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                    className="font-mono"
                  />
                  
                  {password && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Strength:</span>
                        <span className={`font-bold ${passwordStrength.label === "Very Strong" ? "text-primary" : passwordStrength.label === "Strong" ? "text-cyan-500" : passwordStrength.label === "Medium" ? "text-yellow-500" : "text-destructive"}`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                      <Progress value={passwordStrength.score} className={`h-2 ${passwordStrength.color}`} />
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Strong Password Requirements:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li className={password.length >= 12 ? "text-primary font-medium" : ""}>
                    At least 12 characters
                  </li>
                  <li className={/[a-z]/.test(password) && /[A-Z]/.test(password) ? "text-primary font-medium" : ""}>
                    Mix of uppercase and lowercase
                  </li>
                  <li className={/\d/.test(password) ? "text-primary font-medium" : ""}>
                    Contains numbers
                  </li>
                  <li className={/[^a-zA-Z\d]/.test(password) ? "text-primary font-medium" : ""}>
                    Special characters (!@#$%^&*)
                  </li>
                </ul>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  Attack Methods
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Brute Force:</strong> Trying every possible combination. A weak 6-character password 
                  can be cracked in seconds.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Dictionary Attack:</strong> Using common words and patterns. Passwords like "password123" 
                  are cracked instantly.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Vulnerabilities;
