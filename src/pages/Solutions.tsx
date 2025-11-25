import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Code, Shield, Copy } from "lucide-react";

const Solutions = () => {
  const { toast } = useToast();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Shield className="inline-block mr-3 h-10 w-10 text-primary" />
            Security <span className="text-primary">Solutions</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn how to properly defend against common web vulnerabilities
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* SQL Injection Solutions */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Preventing SQL Injection
              </CardTitle>
              <CardDescription className="text-base">
                Use parameterized queries and prepared statements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-destructive" />
                  <h4 className="font-semibold text-destructive">❌ Vulnerable Code</h4>
                </div>
                <div className="relative">
                  <Button size="sm" variant="ghost" className="absolute right-2 top-2" onClick={() => { navigator.clipboard.writeText(`// PHP - Vulnerable to SQL Injection
$query = "SELECT * FROM users WHERE 
  username='$username' AND password='$password'";
$result = mysqli_query($conn, $query);`); toast({ title: "Copied", description: "Vulnerable code copied to clipboard." }); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono">
{`// PHP - Vulnerable to SQL Injection
$query = "SELECT * FROM users WHERE 
  username='$username' AND password='$password'";
$result = mysqli_query($conn, $query);`}
                  </pre>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-primary">✅ Secure Code</h4>
                </div>
                <div className="relative">
                  <Button size="sm" variant="ghost" className="absolute right-2 top-2" onClick={() => { navigator.clipboard.writeText(`// PHP - Using Prepared Statements
$stmt = $conn->prepare(
  "SELECT * FROM users WHERE username=? AND password=?"
);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

// Node.js with Sequelize ORM
const user = await User.findOne({
  where: { username: username, password: hashedPassword }
});`); toast({ title: "Copied", description: "Secure code copied to clipboard." }); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono">
{`// PHP - Using Prepared Statements
$stmt = $conn->prepare(
  "SELECT * FROM users WHERE username=? AND password=?"
);
$stmt->bind_param("ss", $username, $password);
$stmt->execute();

// Node.js with Sequelize ORM
const user = await User.findOne({
  where: { username: username, password: hashedPassword }
});`}
                  </pre>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Key Prevention Techniques:</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Parameterized Queries:</strong> Separate SQL code from data using placeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">ORM Frameworks:</strong> Use libraries like Sequelize, Prisma, or Entity Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Input Validation:</strong> Whitelist allowed characters and validate data types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Least Privilege:</strong> Database users should only have necessary permissions</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* XSS Solutions */}
          <Card className="border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
                Preventing Cross-Site Scripting (XSS)
              </CardTitle>
              <CardDescription className="text-base">
                Sanitize and encode all user-generated content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-destructive" />
                  <h4 className="font-semibold text-destructive">❌ Vulnerable Code</h4>
                </div>
                <div className="relative">
                  <Button size="sm" variant="ghost" className="absolute right-2 top-2" onClick={() => { navigator.clipboard.writeText(`// React - Dangerous HTML rendering
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// JavaScript - Direct innerHTML
document.getElementById('comment').innerHTML = userInput;`); toast({ title: "Copied", description: "Vulnerable code copied to clipboard." }); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono">
{`// React - Dangerous HTML rendering
<div dangerouslySetInnerHTML={{ __html: userComment }} />

// JavaScript - Direct innerHTML
document.getElementById('comment').innerHTML = userInput;`}
                  </pre>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-primary">✅ Secure Code</h4>
                </div>
                <div className="relative">
                  <Button size="sm" variant="ghost" className="absolute right-2 top-2" onClick={() => { navigator.clipboard.writeText(`// React - Safe rendering (auto-escapes)
<div>{userComment}</div>

// JavaScript - Safe text content
document.getElementById('comment').textContent = userInput;

// Manual sanitization function
function sanitizeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}`); toast({ title: "Copied", description: "Sanitized example copied to clipboard." }); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono">
{`// React - Safe rendering (auto-escapes)
<div>{userComment}</div>

// JavaScript - Safe text content
document.getElementById('comment').textContent = userInput;

// Manual sanitization function
function sanitizeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}`}
                  </pre>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Key Prevention Techniques:</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Output Encoding:</strong> Escape HTML special characters (&lt;, &gt;, &amp;, ", ')</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Content Security Policy:</strong> Use CSP headers to restrict script sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Sanitization Libraries:</strong> Use DOMPurify or similar tools for HTML content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">HTTPOnly Cookies:</strong> Prevent JavaScript access to session cookies</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Password Security Solutions */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                Implementing Strong Password Security
              </CardTitle>
              <CardDescription className="text-base">
                Hash passwords and enforce strong password policies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-destructive" />
                  <h4 className="font-semibold text-destructive">❌ Insecure Practices</h4>
                </div>
                <div className="relative">
                  <Button size="sm" variant="ghost" className="absolute right-2 top-2" onClick={() => { navigator.clipboard.writeText(`// Storing passwords in plain text
INSERT INTO users (username, password) 
VALUES ('user', 'password123');

// Using weak hashing (MD5)
const hash = md5(password);`); toast({ title: "Copied", description: "Insecure snippet copied to clipboard." }); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono">
{`// Storing passwords in plain text
INSERT INTO users (username, password) 
VALUES ('user', 'password123');

// Using weak hashing (MD5)
const hash = md5(password);`}
                  </pre>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold text-primary">✅ Secure Implementation</h4>
                </div>
                <div className="relative">
                  <Button size="sm" variant="ghost" className="absolute right-2 top-2" onClick={() => { navigator.clipboard.writeText(`// Node.js - Using bcrypt with salt
const bcrypt = require('bcrypt');
const saltRounds = 12;

// Hashing a password
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Verifying a password
const isValid = await bcrypt.compare(password, hashedPassword);

// Python - Using bcrypt
import bcrypt

# Hashing
hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

# Verifying
if bcrypt.checkpw(password.encode('utf-8'), hashed):
    print("Valid password")`); toast({ title: "Copied", description: "Secure snippet copied to clipboard." }); }}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="bg-background p-3 rounded text-xs overflow-x-auto font-mono">
{`// Node.js - Using bcrypt with salt
const bcrypt = require('bcrypt');
const saltRounds = 12;

// Hashing a password
const hashedPassword = await bcrypt.hash(password, saltRounds);

// Verifying a password
const isValid = await bcrypt.compare(password, hashedPassword);

// Python - Using bcrypt
import bcrypt

# Hashing
hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

# Verifying
if bcrypt.checkpw(password.encode('utf-8'), hashed):
    print("Valid password")`}
                  </pre>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg border border-border">
                <h4 className="font-semibold mb-2">Best Practices:</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Use bcrypt, scrypt, or Argon2:</strong> Industry-standard hashing algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Always Salt Hashes:</strong> Prevent rainbow table attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Enforce Password Complexity:</strong> Minimum 12 characters, mixed case, numbers, symbols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Implement Rate Limiting:</strong> Prevent brute-force attacks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Multi-Factor Authentication:</strong> Add an extra layer of security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Password Expiration:</strong> Require periodic password changes for sensitive systems</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* General Security Principles */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="h-6 w-6 text-primary" />
                General Security Principles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Defense in Depth</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement multiple layers of security controls. If one fails, others still protect the system.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Principle of Least Privilege</h4>
                  <p className="text-sm text-muted-foreground">
                    Grant users and systems only the minimum access rights needed to perform their functions.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Input Validation</h4>
                  <p className="text-sm text-muted-foreground">
                    Never trust user input. Validate, sanitize, and encode all data from untrusted sources.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Security Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep all software, libraries, and dependencies updated with latest security patches.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Solutions;
