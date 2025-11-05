// router/router.js

// 1. Define Routes: Map URL paths to the Page functions
const routes = {
  "/": "Home",
  "/product": "ProductDetail", // Placeholder for a dynamic route like /product/1
  "/login": "Login",
  "/register": "Register",
  "/profile": "Profile",
};

const appContainer = document.getElementById("app");

// 2. Navigation Function (Updates URL without reload)
export const navigate = (url) => {
  // Prevent navigation if the URL is the same
  if (window.location.pathname === url) return;

  window.history.pushState(null, null, url);
  handleRoute();
};

// 3. Core Router Logic (Loads and Renders the Page)
const handleRoute = async () => {
  const path = window.location.pathname;

  // Simple check: get the page name from the routes object
  const pageKey = routes[path] || "Home"; // Default to Home if route not found

  // Dynamically import the corresponding page function
  try {
    const pageModule = await import(`../pages/${pageKey}.js`);

    // Render the Header component and then the Page content
    const { Header } = await import("../components/Header.js");

    // Note: The Header is included in every page render
    appContainer.innerHTML = Header() + pageModule[`${pageKey}Page`]();

    // Optional: Run any post-render initialization scripts here
  } catch (error) {
    console.error("Routing Error:", error);
    appContainer.innerHTML = `
            ${Header()}
            <div style="padding: 2rem;">
                <h1>404 Not Found</h1>
                <p>The page you requested does not exist.</p>
            </div>
        `;
  }
};

// Listen for browser navigation (back/forward buttons)
window.onpopstate = handleRoute;

// Initialize the router on page load
document.addEventListener("DOMContentLoaded", () => {
  // Attach the navigate function globally so components can use it
  window.router = { navigate };
  handleRoute();
});
