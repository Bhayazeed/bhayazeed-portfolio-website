# Portfolio: M. Bhayaziid Amalin

A plain static site: no JavaScript, no build step, no framework.

## Files to upload

| File | What it's for |
|---|---|
| `index.html` | All content. Edit text here. |
| `style.css` | Colors, fonts, spacing (variables at the top). |
| `photo.jpg` | Profile photo (480×480, cropped). |
| `CV_M_Bhayaziid_Amalin.pdf` | The "Download CV" button. Keep this exact name, or change the link in `index.html`. |

Do **not** upload anything else from the folder (for example the original group photo).

## Common edits

- **Add a job or project:** in `index.html`, copy one `<li class="entry"> ... </li>` block inside Experience or Projects, paste it, and change the text.
- **Remove something:** delete its `<li class="entry"> ... </li>` block.
- **Change the main color:** edit `--accent` at the top of `style.css` (dark-mode colors are right below).
- **Update your CV:** replace the PDF with the same file name.
- **Change the site address:** update the `og:image` URL near the top of `index.html` so link previews show your photo.

## Preview locally

Double-click `index.html`.

## Publish free on GitHub Pages

1. Create a new **public** repo named exactly `Bhayazeed.github.io`.
2. Upload the 4 files above (Add file → Upload files → Commit changes).
3. Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)` → Save.
4. After 1–2 minutes the site is live at **https://bhayazeed.github.io**.

To update later, edit `index.html` on GitHub (pencil icon) and commit.
