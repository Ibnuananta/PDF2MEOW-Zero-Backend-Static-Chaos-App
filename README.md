<div align="center">

# 🐱 PDF2MEOW

### A zero-backend browser app that turns serious PDFs into cat-certified nonsense.

<br>

![GitHub repo size](https://img.shields.io/github/repo-size/Ibnuananta/PDF2MEOW-Zero-Backend-Static-Chaos-App?style=for-the-badge&color=ff5c7a)
![GitHub stars](https://img.shields.io/github/stars/Ibnuananta/PDF2MEOW-Zero-Backend-Static-Chaos-App?style=for-the-badge&color=7c5cff)
![Static App](https://img.shields.io/badge/STATIC-APP-ff5c7a?style=for-the-badge)
![Zero Backend](https://img.shields.io/badge/ZERO-BACKEND-7c5cff?style=for-the-badge)
![Cat Approved](https://img.shields.io/badge/CAT-APPROVED-2ecc71?style=for-the-badge)

<br>

[![Open Project](https://img.shields.io/badge/Open%20Live%20App-FF5C7A?style=for-the-badge&logo=githubpages&logoColor=white)](https://ibnuananta.github.io/PDF2MEOW-Zero-Backend-Static-Chaos-App/)
[![View Repository](https://img.shields.io/badge/View%20Repository-1F1F29?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ibnuananta/PDF2MEOW-Zero-Backend-Static-Chaos-App)

</div>

---

## ✨ Overview

**PDF2MEOW** is a fun static web app that extracts text from a PDF, replaces the original words with chaotic cat language, and exports the result as a new PDF.

It runs fully in the browser, with no server, no database, and no backend cost.

The current UI has been redesigned into a softer **creator-support inspired interface**: rounded cards, warm pink/purple accents, clean upload flow, and mobile-friendly layout.

---

## 🧩 What It Does

```txt
Upload PDF
   ↓
Extract text with PDF.js
   ↓
Convert words into cat language
   ↓
Generate new PDF with jsPDF
   ↓
Download meowified result
```

---

## 🐾 Features

- Drag-and-drop PDF upload
- Click-to-select PDF upload
- Multiple cat language modes
- Browser-only PDF text extraction
- Browser-only PDF generation
- No backend required
- No database required
- No API key required
- Works well for GitHub Pages hosting
- Soft creator-style redesign based on `design.md`

---

## 😼 Cat Modes

| Mode | Description |
|---|---|
| 🐈 Classic Meow | Standard household meow chaos |
| 😾 Angry Cat | Loud and hostile feline output |
| 🐱 Cute Kitten | Soft, cute, tiny meow language |
| 🧙 Ancient Cat | Mythical cursed-cat vocabulary |

---

## 🎨 Design Direction

The redesign follows a friendly creator-platform style inspired by the planning in `design.md`.

### Visual Keywords

- Friendly
- Clean
- Soft rounded UI
- Warm creator-support feeling
- Bright CTA button
- Mobile-first layout
- Lightweight static experience

### Main Palette

```css
--primary: #ff5c7a;
--secondary: #7c5cff;
--background: #fff7f9;
--surface: #ffffff;
--text: #1f1f29;
--muted: #777789;
```

---

## 🛠️ Tech Stack

| Part | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript |
| PDF Reading | PDF.js |
| PDF Export | jsPDF |
| Hosting | GitHub Pages |

---

## 📁 Project Structure

```txt
PDF2MEOW-Zero-Backend-Static-Chaos-App/
├── index.html
├── style.css
├── script.js
├── design.md
└── README.md
```

---

## 🚀 Live Demo

Open the live app here:

```txt
https://ibnuananta.github.io/PDF2MEOW-Zero-Backend-Static-Chaos-App/
```

Repository:

```txt
https://github.com/Ibnuananta/PDF2MEOW-Zero-Backend-Static-Chaos-App
```

---

## 🧪 Run Locally

Clone the repository:

```bash
git clone https://github.com/Ibnuananta/PDF2MEOW-Zero-Backend-Static-Chaos-App.git
```

Move into the project folder:

```bash
cd PDF2MEOW-Zero-Backend-Static-Chaos-App
```

Open the app:

```bash
start index.html
```

Or simply double-click `index.html` in your file explorer.

---

## 🌐 Deploy on GitHub Pages

1. Open the repository on GitHub
2. Go to **Settings**
3. Open **Pages**
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save
6. Open your generated GitHub Pages URL

---

## 🧠 How the Conversion Works

The app reads the PDF in the browser using PDF.js, extracts text from each page, replaces each word with a randomized word from the selected cat vocabulary bank, then uses jsPDF to generate a new downloadable PDF.

Example logic:

```js
function randomize(text, bank) {
  return text
    .split(/\s+/)
    .map(() => bank[Math.floor(Math.random() * bank.length)])
    .join(" ");
}
```

---

## 🧭 Roadmap

Planned improvements:

- Better PDF validation
- Safer filename handling
- Visible conversion result popup
- Page count and word count stats
- Dark/light theme toggle
- Better mobile spacing
- Preview before download
- Custom cat vocabulary editor
- Creator-support landing page experiment

---

## ⚠️ Notes

PDF2MEOW is a joke project, but the browser-only architecture makes it a useful lightweight experiment for:

- Static web apps
- Client-side PDF processing
- GitHub Pages deployment
- Fun UI experiments
- Zero-cost web projects

Do not upload sensitive documents unless you understand how the browser-side processing works. The current app does not intentionally send files to a server, but users should still be careful with private documents.

---

## 🤝 Contributing

Ideas, forks, and chaotic cat improvements are welcome.

Suggested contribution areas:

- UI polish
- Accessibility improvements
- Better PDF formatting
- More cat modes
- Cleaner mobile layout
- Error handling

---

## 📜 License

This project is open for learning, remixing, and experimentation.

Add a formal license file if you plan to make reuse permissions explicit.

---

<div align="center">

### Made for serious documents that secretly wanted to say meow.

🐾

</div>
