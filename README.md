# 💅 Design to Dev – SASS Refactor Branch

> 🚧 **WARNING: This branch is currently a work-in-progress.**  
> The layout is not finished and several components are still missing or incomplete.

---

This is the **SASS** version of the Sprint 1 layout refactor for ITACADEMY.  
The goal of this branch is to rebuild the layout using **SCSS** with a structured and scalable architecture.

---

## 🧠 Goal

Refactor the original layout using **SASS (SCSS syntax)** for:

- Modular structure via partials
- Reusable styles (variables, mixins)
- Better file organization using the 7-1 architecture pattern
- Easier maintenance and scalability

---

## 🚀 Getting Started

### 1. Clone the Repo and Switch to This Branch

```bash
git clone https://github.com/angelesgonzalez/S1-Design-to-Dev-All-Levels.git
cd S1-Design-to-Dev-All-Levels
git checkout SASS-Refactor
```

---

### 2. Compile SCSS to CSS

Make sure SASS is installed:

```bash
npm install -g sass
```

Then compile:

```bash
sass scss/main.scss style.css --watch
```

> 📝 `main.scss` is the root file that imports all other partials.

---

## 📁 Folder Structure

```
📦 SASS-Refactor
 ┣ 📂 scss/
 ┃ ┣ 📂 abstracts/           → Variables, mixins, functions
 ┃ ┃ ┗ 📄 _variables.scss
 ┃ ┣ 📂 base/                → Resets, typography, globals
 ┃ ┃ ┣ 📄 _globals.scss
 ┃ ┃ ┣ 📄 _resets.scss
 ┃ ┃ ┗ 📄 _typography.scss
 ┃ ┣ 📂 atoms/               → Small UI elements (buttons, inputs)
 ┃ ┃ ┣ 📄 _buttons.scss
 ┃ ┃ ┗ 📄 _inputs.scss
 ┃ ┣ 📂 molecules/           → Groups of atoms (e.g. form, tab nav)
 ┃ ┃ ┣ 📄 _form.scss
 ┃ ┃ ┗ 📄 _tab-navigation.scss
 ┃ ┣ 📂 organisms/           → Sections (header, hero, features...)
 ┃ ┃ ┣ 📄 _accordion.scss
 ┃ ┃ ┣ 📄 _cards.scss
 ┃ ┃ ┣ 📄 _features.scss
 ┃ ┃ ┣ 📄 _footer.scss
 ┃ ┃ ┣ 📄 _header-nav.scss
 ┃ ┃ ┣ 📄 _hero.scss
 ┃ ┃ ┗ 📄 _mobile-navigation.scss
 ┃ ┣ 📂 pages/
 ┃ ┣ 📂 templates/
 ┃ ┗ 📄 main.scss
 ┣ 📄 index.html
 ┣ 📄 main.js
 ┣ 📄 style.css             ← Compiled CSS
 ┣ 📄 README.md
 ┣ 📄 package.json
 ┣ 📄 package-lock.json
```
---

## 📸 Progress Preview

![SASS Progress](SASS-progress.gif)


---

## ✅ To Do

- [ ] Continue layout work beyond the features section
- [ ] Finalize Features section responsiveness
- [ ] Complete remaining components (footer, forms, etc.)
- [ ] Add error styling to inputs
- [ ] Improve typography and vertical rhythm
- [ ] Use relative units instead of pixels
- [ ] Review and clean nesting depth
- [ ] Test responsiveness across screen sizes

---

## 🛠 Technologies Used

- HTML5
- SCSS (SASS)
- CSS3 (compiled output)
- JavaScript (basic DOM logic)

---

## 🔗 Related Branches

- [`Vanilla-CSS`](https://github.com/angelesgonzalez/S1-Design-to-Dev-All-Levels/tree/Vanilla-CSS)
- [`Tailwind-Refactor-v2`](https://github.com/angelesgonzalez/S1-Design-to-Dev-All-Levels/tree/Tailwind-Refactor-v2)

---

## 💡 Notes

This branch is focused on building scalable and reusable styles.  
