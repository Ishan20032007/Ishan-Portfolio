# Ishan Kumar — Portfolio

A clean, professional portfolio website ready to deploy on GitHub Pages, Vercel, or Netlify.

---

## 📁 Project Structure

```
ishan-portfolio/
│
├── index.html              ← Main HTML file
├── style.css               ← All styles
├── script.js               ← All JavaScript
│
└── assets/
    ├── images/
    │   └── photo.jpg       ← ⬅ ADD YOUR PHOTO HERE
    │
    └── certs/
        ├── cert-lpu-java-bootcamp.png   ✅ Already added
        ├── cert-nptel-cloud.png         ✅ Already added
        ├── cert-dsa-cpp.jpg             ⬅ ADD YOUR DSA CERT IMAGE
        └── cert-cpp-prog.jpg            ⬅ ADD YOUR C++ CERT IMAGE
```

---

## ✅ Quick Setup — 3 Steps

### Step 1 — Add Your Photo
1. Take or choose a good portrait photo of yourself
2. Rename the file to `photo.jpg`
3. Place it inside `assets/images/`
4. Open `index.html` in your browser — your photo will appear automatically

> Supported formats: `.jpg`, `.jpeg`, `.png`
> Tip: A square or portrait crop (like a passport photo) looks best.

---

### Step 2 — Add Your Certificate Images
1. Take a screenshot or export your DSA certificate as an image
2. Name it `cert-dsa-cpp.jpg` and place it in `assets/certs/`
3. Do the same for your C++ certificate → name it `cert-cpp-prog.jpg`

> The LPU Java Bootcamp and NPTEL Cloud certificates are already included.

---

### Step 3 — Add Links (Optional)
Open `index.html` and find these lines to update:

**Resume Download:**
```html
<!-- Look for: id="resume-btn" -->
<a href="#" class="btn btn-dl" ...>Download Resume</a>
<!-- Replace href="#" with your Google Drive link -->
```

**Certificate Verify Links:**
```html
<a href="#" class="cert-lk">🔗 Verify</a>
<!-- Replace href="#" with each certificate's verify URL -->
```

---

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `ishan-portfolio`)
2. Upload all files keeping the folder structure intact
3. Go to **Settings → Pages → Source → Deploy from branch → main**
4. Your site will be live at: `https://yourusername.github.io/ishan-portfolio`

## 🚀 Deploy to Vercel

1. Push the folder to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done!

---

## 📝 Other Customizations

| What to change | Where to find it |
|---|---|
| Name, bio, contact info | `index.html` — search for "Ishan" |
| Skills / tech stack | `index.html` — `#skills` section |
| Projects | `index.html` — `#projects` section |
| Achievements | `index.html` — `#achievements` section |
| Colors / fonts | `style.css` — `:root` variables at the top |

---

Built with HTML, CSS, and vanilla JavaScript. No frameworks, no build tools needed.
