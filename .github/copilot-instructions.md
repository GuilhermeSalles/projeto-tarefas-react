# Copilot Instructions for This Project

## Project Overview
- **Type:** React + Vite single-page app (SPA) with Tailwind CSS for styling.
- **Main App:** `vite-project/src/App.jsx` manages task state and renders the UI.
- **Routing:** Uses `react-router-dom` (see `src/main.jsx`) for navigation between `/` (main) and `/task` (TaskPage).
- **Component Structure:**
  - `src/components/AddTask.jsx`: Form for adding tasks.
  - `src/components/Tasks.jsx`: Renders the list of tasks, handles completion and deletion.
  - `src/pages/TaskPage.jsx`: Placeholder for future task-related views.
- **State Management:** Local React state in `App.jsx` (no Redux or context).
- **Icons:** Uses `lucide-react` for UI icons.

## Build, Run, and Lint
- **Install dependencies:** Run `npm install` in both the root and `vite-project` folders.
- **Development server:** From `vite-project`, run `npm run dev` (starts Vite with HMR).
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (uses custom ESLint config in `eslint.config.js`).

## Styling
- **Tailwind CSS:**
  - Configured in `vite-project/tailwind.config.js` and `postcss.config.js`.
  - Styles are imported in `src/index.css`.
  - Some legacy/config SCSS in `/tailwind.config.scss` (not used by Vite build).

## Conventions & Patterns
- **Component Naming:**
  - Use PascalCase for components.
  - Main components are in `src/components/`.
  - Both `Tasks.jsx` and `tasks.jsx` exist; prefer `Tasks.jsx` (case-sensitive imports may cause issues on some systems).
- **Props:**
  - Components receive callbacks for actions (e.g., `onAddTaskSubmit`, `onTaskCompleted`, `onTaskDeleted`).
- **IDs:**
  - Task IDs are generated with `uuid` (see `onAddTaskSubmit` in `App.jsx`).
- **No API/backend:**
  - All data is in-memory; no persistence or external API calls.

## Integration Points
- **Dependencies:**
  - See `vite-project/package.json` and root `package.json` for all dependencies.
  - `lucide-react` and `react-router-dom` are required for icons and routing.
- **Vite Plugins:**
  - Uses `@vitejs/plugin-react` for React Fast Refresh.

## Troubleshooting
- **Case Sensitivity:**
  - Be consistent with file/component names (e.g., `Tasks.jsx` vs `tasks.jsx`).
- **Missing dependencies:**
  - If you see import errors, check both `vite-project/package.json` and root `package.json`.
- **Unused files:**
  - `tailwind.config.scss` is not used by the Vite build.

## Example: Adding a New Page
1. Create a new component in `src/pages/`.
2. Add a route in `src/main.jsx` using `createBrowserRouter`.
3. Link to the new route from a component or navigation.

---

For further details, see `vite-project/README.md` and `vite-project/package.json`.
