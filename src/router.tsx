import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Restauration du routage SPA après la redirection GitHub Pages :
// 404.html stocke l'URL demandée en sessionStorage avant de revenir à la
// racine ; ici on la restaure avant que le routeur ne résolve la route.
if (typeof window !== "undefined") {
  try {
    const redirect = sessionStorage.getItem("spa-redirect");
    if (redirect && redirect.startsWith("/")) {
      sessionStorage.removeItem("spa-redirect");
      window.history.replaceState(null, "", redirect);
    }
  } catch {
    // sessionStorage indisponible : on reste sur la page d'accueil.
  }
}


export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
