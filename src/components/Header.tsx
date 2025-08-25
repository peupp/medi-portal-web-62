import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="bg-primary p-2 rounded-xl">
              <Heart className="h-8 w-8 text-primary-foreground" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Hospital São Paulo</h1>
              <p className="text-sm text-muted-foreground">Cuidado com Excelência</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/paciente" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Área do Paciente
            </Link>
            <Link 
              to="/medico" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Área do Médico
            </Link>
            <Button variant="outline" size="sm" className="ml-4">
              Contato
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/paciente" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Área do Paciente
              </Link>
              <Link 
                to="/medico" 
                className="text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Área do Médico
              </Link>
              <Button variant="outline" size="sm" className="w-fit">
                Contato
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};