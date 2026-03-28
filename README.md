# Mrigank Kishore Varma - Portfolio

A modern, professional portfolio website for a Principal Cloud Architect built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Optimized for mobile and desktop
- **Dark/Light Mode**: Toggle between themes
- **Interactive Elements**: Animated timeline, expandable cards, progress bars
- **AI Chatbot**: Keyword-based Q&A about the profile
- **Static Export**: Ready for GitHub Pages deployment

## Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages (static export)

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Export Static Files**
   ```bash
   npm run export
   ```

## Deployment to GitHub Pages

1. **Build and Export**
   ```bash
   npm run build && npm run export
   ```

2. **The `out` folder will contain the static files**

3. **Upload the contents of the `out` folder to your GitHub Pages branch (usually `gh-pages`)**

4. **Or use GitHub Actions for automatic deployment**

### GitHub Actions Workflow (optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Export
        run: npm run export

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Achievements.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Chatbot.tsx
│   └── theme-provider.tsx
└── lib/
public/
├── profile.json
└── ...
```

## Customization

- **Profile Data**: Edit `public/profile.json` to update personal information
- **Styling**: Modify `src/app/globals.css` and Tailwind classes
- **Components**: Update individual components in `src/components/`
- **Chatbot Responses**: Add more responses in `profile.json` under `chatbot_responses`

## Performance

- Lighthouse optimized
- Static generation for fast loading
- Minimal bundle size with tree shaking

## License

This project is open source and available under the [MIT License](LICENSE).
