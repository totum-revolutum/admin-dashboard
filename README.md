# Admin Dashboard

## Description

This is an interactive prototype of an Admin Dashboard built with Vite and React. The main focus is on clean and functional UI/UX, convenient navigation, reusable components, and a modern design. The project demonstrates an approach to building admin interfaces using TailwindCSS and custom UI components.

---

## Installation & Local Run

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Start the development server:**
   ```
   npm run dev
   ```
3. **Build for production:**
   ```
   npm run build
   ```
4. **Preview the production build:**
   ```
   npm run preview
   ```

---

## Project Structure

```
src/
  components/         // Reusable UI components (MetricCard, Sidebar, Switch, Input, Checkbox, Label, Card)
  constants/          // Mock data for metrics and users
  layout/             // Layout with Sidebar and Outlet for pages
  pages/              // Pages: Overview, Users, Settings
  routes/             // Routing implementation (AppRoutes.jsx)
  index.css           // Global styles (TailwindCSS)
  main.jsx            // Entry point
  App.jsx             // Main app component
```

---

## Routing Implementation

- Uses **React Router** (`react-router-dom`).
- All pages are wrapped in a common Layout with a Sidebar.
- Main routes:
  - `/overview` — metrics page
  - `/users` — users table
  - `/settings` — settings page
- See: `src/routes/AppRoutes.jsx`

---

## State Management Approach

- **React useState** is used for local state management.
- No global state management is used, as all state is localized within components (e.g., Users, Settings).

---

## Components Structure & Reusability

- **Reusable components:**
  - `MetricCard` — metric card, accepts label and value, used on the Overview page.
  - `Sidebar` — navigation sidebar.
  - `Switch`, `Input`, `Checkbox`, `Label`, `Card` — simple UI components for the settings form.
- **Approach:**
  - Components are kept simple and accept props for flexibility.
  - Mock data is separated into dedicated files (`constants/metrics.js`, `constants/users.js`).
  - All pages use a shared Layout for a consistent look and feel.

---

## Additional Notes

- **TailwindCSS** is used for styling.
- User table sorting is implemented by clicking the Name column header.
- Theme switcher is implemented as a Switch component in the Settings page.
