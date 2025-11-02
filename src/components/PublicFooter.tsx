import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface PublicFooterProps {
  onNavigate: (page: string) => void;
}

export function PublicFooter({ onNavigate }: PublicFooterProps) {
  return (
    <footer className="bg-[#0A2E61] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Coluna 1: Sobre */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00B8D9] to-[#E63946] flex items-center justify-center mr-3">
                <span>N</span>
              </div>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.25rem' }}>
                Nexus Hub
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Plataforma de conexão e inteligência para associações e grupos empresariais.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00B8D9] transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00B8D9] transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00B8D9] transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00B8D9] transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => onNavigate("home")}
                className="text-gray-300 hover:text-[#00B8D9] transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate("institutional")}
                className="text-gray-300 hover:text-[#00B8D9] transition-colors text-left"
              >
                Institucional
              </button>
              <button
                onClick={() => onNavigate("blog")}
                className="text-gray-300 hover:text-[#00B8D9] transition-colors text-left"
              >
                Blog
              </button>
              <button
                onClick={() => onNavigate("documents")}
                className="text-gray-300 hover:text-[#00B8D9] transition-colors text-left"
              >
                Documentos
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="text-gray-300 hover:text-[#00B8D9] transition-colors text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00B8D9] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Av. Paulista, 1234 - São Paulo, SP
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00B8D9] flex-shrink-0" />
                <span className="text-gray-300">(11) 3000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00B8D9] flex-shrink-0" />
                <span className="text-gray-300">contato@nexushub.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-gray-300">
            © 2025 Nexus Hub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
