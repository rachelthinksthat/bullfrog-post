# The Bullfrog Post — site + editor

This is the real site, built as a static site generator (Eleventy) instead of one big HTML file, plus a form-based editor (Decap CMS) so you can publish a new post without asking Claude or re-downloading anything.

## What's in here

- `index.njk`, `poetry.njk`, `food.njk`, `travel.njk`, `essays.njk`, `books.njk` — the homepage and the five category pages.
- `_includes/base.njk` — the shared page shell (header, footer, all styling). Change this once and it updates every page.
- `_includes/post.njk` — the layout every individual post uses.
- `posts/*.md` — the actual posts. Each is a plain text file with a small header (title, date, category, image, excerpt) and the body underneath.
- `admin/` — the Decap CMS editor. This is the form you'll actually use day to day.
- `assets/` — all illustrations and images.

## One-time setup (about 15 minutes)

1. **Put this in a GitHub repo.** Create a new repo on GitHub (name it something like `bullfrog-post`), then push this folder to it. If you've never used git before, GitHub's "upload files in browser" option works fine for the initial upload — drag this whole folder in.

2. **Connect it to Netlify.** Go to app.netlify.com → "Add new site" → "Import an existing project" → pick your new GitHub repo. Netlify will read `netlify.toml` automatically (build command `npm run build`, publish folder `_site`) — just click deploy. In a minute or two you'll have a live URL like `random-name-123.netlify.app`.

3. **Turn on the editor.** In your Netlify site dashboard: go to **Identity** → **Enable Identity**. Then **Identity → Settings → Registration**, set it to "Invite only" (so strangers can't sign up). Then **Identity → Services**, enable **Git Gateway**.

4. **Invite yourself.** Still in Identity, click **Invite users**, enter your own email. You'll get an email — click it, set a password.

5. **(Optional) Connect your own domain.** Site settings → Domain management → Add a custom domain, then point your domain's DNS at Netlify following the instructions it gives you.

That's it — steps 1–5 only ever happen once.

## Publishing a new post from now on

1. Go to `yoursite.netlify.app/admin/` and log in with the password from step 4.
2. Click **New Post**.
3. Fill in the title, pick a category, upload a cover image, write an excerpt (one or two sentences — this is what shows on the homepage), and write the body.
4. Click **Publish**.

That's the whole workflow. Netlify rebuilds the site automatically in the background (takes about a minute) and the new post appears on the homepage and its category page — no Claude, no downloading, no dragging files anywhere.

## Editing existing text (the header, About section, footer, etc.)

Anything that isn't a post — the hero text, the About Rachel bio, the footer links — lives in `index.njk` and `_includes/base.njk`. To change it:
- Easiest: come back to Claude, say what you want changed, and ask for updated `index.njk`/`base.njk` content to paste in on GitHub (click the file on GitHub → pencil icon → paste → commit). Netlify redeploys automatically.
- Or edit the files directly on GitHub yourself once you're comfortable with the markup — it's plain HTML-ish text.

## Local preview (optional, only if you want to see changes before publishing)

If you ever install Node.js on your computer:
```
npm install
npm run serve
```
This runs the site at `localhost:8080` and rebuilds live as you edit files.
