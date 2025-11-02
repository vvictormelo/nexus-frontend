import { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "./ui/button";

interface PublicHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogin: () => void;
}

export function PublicHeader({ currentPage, onNavigate, onLogin }: PublicHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "institutional", label: "Institucional" },
    { id: "blog", label: "Blog" },
    { id: "partners", label: "Parceiros" },
    { id: "documents", label: "Documentos" },
    { id: "contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            onClick={() => onNavigate("home")}
            className="flex items-center cursor-pointer"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center mr-3">
              <span className="text-white">N</span>
            </div>
            <span className="text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}>
              Nexus Hub
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`transition-colors ${
                  currentPage === item.id
                    ? "text-[#0A2E61]"
                    : "text-[#6B7280] hover:text-[#00B8D9]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={onLogin}
              className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90 transition-opacity"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Entrar no Nexus
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A2E61]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "bg-[#0A2E61] text-white"
                      : "text-[#6B7280] hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onLogin();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90 transition-opacity mx-4"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Entrar no Nexus
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
