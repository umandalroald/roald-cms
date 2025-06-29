// AppRoutes.tsx

// Import the `useRoutes` hook from React Router, which allows us to define routes as plain objects
import { useRoutes } from 'react-router-dom';

// Import authentication-related route definitions from the auth feature
import authRoutes from '../features/auth/routes';

/**
 * Define all application routes in a single array.
 * - Spread in route objects from different features/modules.
 * - Add a catch-all `*` route to handle undefined paths (404).
 */
const allRoutes = [
  ...authRoutes, // 👈 Feature-based route group (e.g. /login, /register)
  {
    path: '*',
    element: <div>404 Not Found</div> // 👈 Displayed when no route matches
  }
];

/**
 * `AppRoutes` component
 * - Uses React Router's `useRoutes()` to register all route objects
 * - Returns the appropriate route element based on the current URL
 * - Used inside `<BrowserRouter>` in App.tsx
 */
export default function AppRoutes() {
  return useRoutes(allRoutes);
}
