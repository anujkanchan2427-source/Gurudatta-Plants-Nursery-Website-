# Gurudatta Nursery — Website Files

Four files/folders:
- `index.html` — page structure
- `style.css` — all visual styling, including the Marathi "गुरुदत्त नर्सरी" logo type
- `script.js` — plant list, WhatsApp links, search/filter logic
- `images/` — put real photos of your plants here

## Add real photos (this is the one manual step)
Each plant card looks for a photo at a path listed in `script.js`, e.g.
`images/money-plant.jpg`. Take a phone photo of that plant, name the file
exactly that (same spelling, `.jpg`), and drop it into the `images` folder.
The card picks it up automatically — no code changes needed. Until a
plant's own photo exists, the greenhouse photo (`images/greenhouse.jpg`)
fills that spot instead, so nothing ever looks broken. Swap that file for
another wide shot of the nursery any time you like — same filename.

To rename a photo's expected filename, or add/remove a plant entirely, open
`script.js` and edit the `PLANTS` list near the top — each line has a name,
local/botanical name, category, photo path and short description.

## Preview it right now
Double-click `index.html` — opens in your browser. Works offline except for
the Google Maps box and the two Google Fonts (the Marathi display font and
Fraunces), which need internet the first time they load.

## Host it for free on GitHub Pages
1. Create a free account at github.com.
2. New repository → name it (e.g. `gurudatta-nursery`) → keep it **Public**.
3. "Add file" → "Upload files" → drag in `index.html`, `style.css`,
   `script.js`, and the whole `images` folder → Commit.
4. Repository → Settings → Pages → Branch: `main`, folder `/ (root)` → Save.
5. Wait ~1 minute, refresh that same page — your live link appears, e.g.
   `https://yourusername.github.io/gurudatta-nursery/`.

To update later — new plant, new photo, changed hours — edit the file in
GitHub (pencil icon) or re-upload it, then commit. The live site updates
within a minute or two.
