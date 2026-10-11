# Kerwin B. Madronal — React Portfolio

## Requirements
- Node.js (LTS)
- Git (optional, for pushing to GitHub)

## Run locally
1. Extract the ZIP.
2. Open the `Madronal-Portfolio` folder in VS Code.
3. Open Terminal in that folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL Vite prints in the terminal (usually `http://localhost:5173`).

## Build test
```bash
npm run build
```

## Add your photo
The current profile area is a placeholder. To add your own photo:
1. Create a `public` folder in the project root.
2. Copy your photo into it, for example `profile.jpg`.
3. In `src/App.jsx`, find the placeholder block containing `Add photo` and replace that block with:

```jsx
<img src="/profile.jpg" alt="Kerwin B. Madronal" className="h-full w-full object-cover" />
```

## Personalize before submitting
- Replace the sample project descriptions with your own completed project details and screenshots.
- Add your real email and GitHub profile links.
- Update the education and experience section with accurate information.
- The contact form currently validates input and displays an on-page confirmation. It does not send email without a backend or form service.
- The CV button currently links to the contact section. If you have a PDF CV, place it in `public` and change the link to `/cv.pdf` with the `download` attribute.

## Deploy to Vercel
1. Create a GitHub repository and upload this project folder's files.
2. Sign in to Vercel using your GitHub account.
3. Choose **Add New → Project**, then import the repository.
4. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.
5. Click **Deploy**.
6. Open the provided public `.vercel.app` URL and test the navigation, project details, checklist, contact form, and mobile layout.

## React features included
- React components (`SectionHeading`, reusable project cards)
- State with `useState`
- Interactive navigation and mobile menu
- Clickable learning checklist with dynamic progress
- Project detail show/hide buttons
- Contact form handling and email validation
- Conditional rendering and Tailwind transitions
