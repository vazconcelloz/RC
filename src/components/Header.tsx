import logoFbn from "@/assets/logo-fbn.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    document.getElementById("formulario-estudo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#/" className="flex items-center gap-2">
          <img src={logoFbn} alt="Grupo FBN" className="h-14 w-auto" />
        </a>

        <div className="flex items-center gap-4 md:gap-5">
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-foreground">
            <a href="https://grupofbn.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Acessar o Site da FBN</a>
            <a href="https://wa.me/5511943880362" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              WhatsApp
            </a>
          </nav>

          <Button size="sm" className="font-semibold" onClick={scrollToForm}>
            Realizar estudo
          </Button>

        </div>
      </div>
    </header>
  );
};

export default Header;
