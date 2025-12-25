import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TreePine, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background bg-xmas-pattern">
      <div className="text-center card-dark p-12 max-w-md mx-4">
        <div className="text-6xl mb-4">🎄</div>
        <h1 className="mb-4 text-6xl font-display font-bold text-gradient-xmas">404</h1>
        <p className="mb-6 text-lg text-muted-foreground font-body">Oups! Cette page n'existe pas</p>
        <a href="/">
          <Button className="btn-xmas rounded-full px-8 py-6 font-body group">
            <Home className="w-5 h-5 mr-2" />
            Retour à l'Accueil
            <TreePine className="w-5 h-5 ml-2 group-hover:animate-sway" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;