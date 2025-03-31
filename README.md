# 🌀 Design to Dev – Tailwind Refactor Branch

> 🚧 **WARNING: This branch is currently a work-in-progress.**  
> Only the **Hero section** and **mobile menu** are partially implemented using Tailwind CSS.

---

This is the **Tailwind CSS** version of the Sprint 1 layout refactor for ITACADEMY.  
The goal of this branch is to rebuild the layout using a **utility-first approach** with Tailwind.

---

## 🧠 Goal

Refactor the layout using **Tailwind CSS**:

- Use utility classes instead of custom CSS
- Improve development speed and maintainability
- Build mobile-first and responsive UI
- Minimize CSS file size with Tailwind’s build process

---

## 🚀 Getting Started

### 1. Clone the Repo and Switch to This Branch

```bash
git clone https://github.com/angelesgonzalez/S1-Design-to-Dev-All-Levels.git
cd S1-Design-to-Dev-All-Levels
git checkout Tailwind-Refactor
```

---

### 2. Install Dependencies

Make sure you have Node.js installed. Then install the packages:

```bash
npm install
```

---

### 3. Run Tailwind with Live Reload

Use your build tool (e.g. Vite, PostCSS, or Tailwind CLI) to start the project.  
Assuming you're using Tailwind CLI:

```bash
npx tailwindcss -i ./input.css -o ./src/output.css --watch
```

> 📁 `input.css` is where Tailwind is imported. `output.css` is the compiled version.

---

## 📁 Folder Structure

```
📦 Tailwind-Refactor
 ┣ 📂 assets/
 ┣ 📂 src/
 ┃ ┗ 📄 output.css (compiled from input.css)
 ┣ 📄 index.html
 ┣ 📄 input.css         <-- Tailwind directives here
 ┣ 📄 main.js
 ┣ 📄 package.json
 ┣ 📄 package-lock.json
 ┗ 📄 README.md
```

---

## 📸 Progress Preview

[Preview](/tailwind-progress.gif)

---

## ✅ To Do

- [ ] Complete Hero section layout
- [ ] Refine mobile menu interaction and transitions
- [ ] Add remaining layout sections (features, footer, etc.)
- [ ] Implement responsive breakpoints
- [ ] Use Tailwind components for consistency
- [ ] Extract repetitive classes using `@apply`
- [ ] Optimize performance using `purge` in Tailwind config

---

## 🛠 Technologies Used

- Tailwind CSS
- HTML5
- JavaScript (for menu toggle)
- Node.js + npm

---

## 🔗 Related Branches

- [`Vanilla-CSS`](https://github.com/angelesgonzalez/S1-Design-to-Dev-All-Levels/tree/Vanilla-CSS)
- [`SASS-Refactor`](https://github.com/angelesgonzalez/S1-Design-to-Dev-All-Levels/tree/SASS-Refactor)

---

## 💡 Notes

This version is still under construction. Tailwind is configured and working, but only a small part of the layout has been built so far.
