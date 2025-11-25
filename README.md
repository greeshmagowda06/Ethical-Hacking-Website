# VulnScan 🛡️

An **Ethical Hacking Learning Platform** for understanding web vulnerabilities in a safe, legal environment.

Learn how common security vulnerabilities work, why they're dangerous, and most importantly — **how to fix them properly**.

---

## 🎯 Features

### Interactive Demonstrations
- **SQL Injection Demo** — Bypass login systems and understand query manipulation
- **XSS (Cross-Site Scripting) Demo** — See how malicious scripts are injected and sanitized
- **Password Strength Checker** — Test password security and understand brute-force vulnerabilities

### Security Solutions
- **Side-by-side Code Examples** — Compare vulnerable vs. secure implementations
- **Industry Best Practices** — Learn parameterized queries, input sanitization, password hashing
- **Real-World Patterns** — Apply concepts to your own projects

### Educational Content
- **About Page** — Mission, legal disclaimers, and ethical hacking principles
- **Quick Scan Widget** — Interactive security scan simulation on the homepage
- **Responsive Design** — Works on desktop, tablet, and mobile

---

## ⚙️ Tech Stack

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + Shadcn UI Components
- **Routing:** React Router
- **State Management:** React Hooks + React Query
- **Icons:** Lucide React

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 16+ ([Download](https://nodejs.org/))
- **npm** or **bun** package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/greeshmagowda06/VulnScan.git
cd VulnScan
```

2. **Install dependencies:**
```bash
npm install
```

Or with **bun**:
```bash
bun install
```

### Running the Development Server

Start the dev server:
```bash
npm run dev
```

Or with **bun**:
```bash
bun run dev
```

**Output:**
```
  VITE v5.4.19  ready in 2743 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://10.0.71.117:5173/
  ➜  press h + enter to show help
```

**Open your browser and navigate to:** `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Index.tsx              # Homepage with hero, features, Quick Scan widget
│   ├── Vulnerabilities.tsx    # Interactive vulnerability demos
│   ├── Solutions.tsx          # Security best practices & code examples
│   ├── About.tsx              # Mission, legal info, creator details
│   └── NotFound.tsx           # 404 page
├── components/
│   ├── Navigation.tsx         # Header with links
│   ├── Footer.tsx             # Footer component
│   └── ui/                    # Shadcn UI component library
├── hooks/
│   ├── use-toast.ts          # Toast notification system
│   └── use-mobile.tsx         # Mobile responsiveness hook
├── lib/
│   ├── utils.ts              # Utility functions
│   └── scanSimulator.ts       # Quick Scan simulation logic
├── App.tsx                    # Main app router
└── main.tsx                   # Entry point
```

---

## 📚 Page Guide

### 🏠 Homepage (`/`)
- Hero section with VulnScan tagline
- Feature overview cards
- Interactive "Quick Scan" widget
- Links to explore vulnerabilities and learn solutions

### 🔓 Vulnerabilities (`/vulnerabilities`)
**Try these interactive demos:**

1. **SQL Injection**
   - Try logging in with credentials: `admin` / `admin123`
   - Or bypass the system with: `' OR '1'='1` (in username field)
   - See both vulnerable and secure versions

2. **XSS Attack**
   - Try entering: `<script>alert('XSS')</script>` or `<img src=x onerror=alert('xss')>`
   - See how the input is rendered unsafely vs. sanitized

3. **Password Strength**
   - Test weak vs. strong passwords
   - See the strength meter update in real-time

### 🔐 Solutions (`/solutions`)
- **SQL Injection Prevention** — Parameterized queries, ORM frameworks, input validation
- **XSS Prevention** — Content Security Policy, output encoding, sanitization libraries
- **Password Security** — Hashing algorithms, salts, best practices
- Copy-to-clipboard code examples for each solution

### ℹ️ About (`/about`)
- VulnScan's mission and goals
- What you'll learn
- Legal & ethical use disclaimers
- Creator information

---

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run TypeScript type checking
npm run type-check

# Lint code with ESLint
npm run lint
```

---

## ⚖️ Legal & Ethical Use

⚠️ **IMPORTANT:** This platform is designed **exclusively for educational purposes**.

- ✅ Use this to learn how vulnerabilities work
- ✅ Use this to understand secure coding practices
- ✅ Use this to build safer applications
- ❌ Do **NOT** use these techniques against real systems without explicit permission
- ❌ Unauthorized testing is **illegal** and unethical

**Always get proper authorization before conducting security testing.**

---

## 🎓 Learning Path

1. **Start on Homepage** → Click "Explore Vulnerabilities"
2. **Try SQL Injection Demo** → Test the vulnerable login
3. **See the Fix** → Go to Solutions page for secure code
4. **Try XSS Demo** → Understand how script injection works
5. **Learn Password Security** → Test password strength
6. **Build Secure Apps** → Apply what you've learned

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the **MIT License**.

---

## 👨‍💻 Creator

**Greesha Gowda**

- 🔗 [LinkedIn](https://www.linkedin.com/in/greeshmagowda06)
- 🐙 [GitHub](https://github.com/greeshmagowda06)
- 📧 Email: greeshmagowda06@gmail.com

---

## 🙏 Acknowledgments

- **Shadcn UI** — Beautiful React component library
- **Vite** — Lightning-fast build tool
- **React Router** — Client-side routing
- **Tailwind CSS** — Utility-first CSS framework
- **Educational Security Community** — For inspiring best practices

---

## 📞 Support & Questions

If you have questions or run into issues:
1. Check the **FAQ** section in the About page
2. Open an issue on [GitHub Issues](https://github.com/greeshmagowda06/VulnScan/issues)
3. Connect on LinkedIn for direct messages

---

**Happy learning and keep building secure applications! 🚀**
