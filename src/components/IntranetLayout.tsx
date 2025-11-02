import { useState, ReactNode } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Megaphone,
  Image,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Moon,
  Sun,
  Search,
  MessageSquare,
  Mail,
  ChevronDown,
  BarChart3,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface IntranetLayoutProps {
  children: ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  userName: string;
}

export function IntranetLayout({
  children,
  currentPage,
  onNavigate,
  onLogout,
  userName,
}: IntranetLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [showChatBot, setShowChatBot] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'user' | 'ai'; message: string }>>([
    { role: 'ai', message: 'Olá! Sou a IA Nexus. Como posso ajudá-lo hoje?' }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "announcements", label: "Comunicados", icon: Megaphone },
    { id: "documents-admin", label: "Documentos", icon: FileText },
    { id: "banners", label: "Banners", icon: Image },
    { id: "newsletter", label: "Newsletter", icon: Mail },
    { id: "users", label: "Usuários", icon: Users },
    { id: "analytics", label: "Análises", icon: BarChart3 },
    { id: "settings", label: "Configurações", icon: Settings },
  ];

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', message: currentMessage }]);
    setCurrentMessage("");
    
    // Simular resposta da IA
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        role: 'ai',
        message: 'Entendi sua solicitação. Posso ajudá-lo com documentos, comunicados, usuários e muito mais. O que você gostaria de fazer especificamente?'
      }]);
    }, 1000);
  };

  const userInitials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#0A2E61] dark:bg-[rgba(10,46,97,0.8)] dark:backdrop-blur-xl text-white border-r border-[#0A2E61]/20 dark:border-white/10">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B8D9] to-[#E63946] flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>N</span>
              </div>
              <div>
                <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.125rem' }}>
                  Nexus Hub
                </span>
                <p className="text-white/60 text-sm">Intranet</p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                    isActive
                      ? "bg-white/10 text-white shadow-lg backdrop-blur-sm"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <Button
              onClick={onLogout}
              variant="ghost"
              className="w-full justify-start text-white/70 hover:bg-white/5 hover:text-white"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Sair</span>
            </Button>
          </div>
        </aside>

        {/* Mobile Sidebar */}
        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-[#0A2E61] dark:bg-[rgba(10,46,97,0.95)] dark:backdrop-blur-xl text-white shadow-xl flex flex-col">
              {/* Logo */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B8D9] to-[#E63946] flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>N</span>
                  </div>
                  <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                    Nexus Hub
                  </span>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-white hover:bg-white/10 p-1 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu */}
              <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "bg-white/10 text-white shadow-lg"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span style={{ fontFamily: 'Inter, sans-serif' }}>{item.label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Logout */}
              <div className="p-4 border-t border-white/10">
                <Button
                  onClick={onLogout}
                  variant="ghost"
                  className="w-full justify-start text-white/70 hover:bg-white/5 hover:text-white"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>Sair</span>
                </Button>
              </div>
            </aside>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-white/10 sticky top-0 z-40 shadow-sm dark:shadow-black/20">
            <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden p-2 text-[#1E1E1E] dark:text-[#F5F5F5] hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Logo - Mobile */}
              <div className="lg:hidden flex items-center">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00B8D9] to-[#E63946] flex items-center justify-center shadow-md">
                  <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '0.875rem' }}>N</span>
                </div>
              </div>

              {/* Search Bar - Desktop */}
              <div className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] dark:text-[#A0A0A0]" />
                  <Input
                    placeholder="Buscar documentos, comunicados, usuários…"
                    className="pl-10 w-full bg-[#F8F9FC] dark:bg-[#0A0A0A] border-none dark:text-[#F5F5F5] dark:placeholder:text-[#A0A0A0]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Dark Mode Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-[#1E1E1E] dark:text-[#F5F5F5]"
                  title="Alternar tema"
                >
                  {isDarkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>

                {/* Chat IA */}
                <button 
                  onClick={() => setShowChatBot(!showChatBot)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-[#00B8D9]"
                  title="Chat IA Nexus"
                >
                  <MessageSquare className="w-5 h-5" />
                </button>

                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-[#1E1E1E] dark:text-[#F5F5F5]">
                  <Bell className="w-5 h-5" />
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-[#E63946] text-white border-2 border-white dark:border-[#1A1A1A]">
                    3
                  </Badge>
                </button>

                {/* User Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] text-white">
                          {userInitials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block text-left">
                        <p className="text-[#1E1E1E] dark:text-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}>{userName}</p>
                        <p className="text-[#6B7280] dark:text-[#A0A0A0]" style={{ fontSize: '0.75rem' }}>Administrador</p>
                      </div>
                      <ChevronDown className="w-4 h-4 text-[#6B7280] dark:text-[#A0A0A0] hidden sm:block" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Users className="w-4 h-4 mr-2" />
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      Configurações
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={onLogout} className="text-[#E63946]">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Search Bar - Mobile */}
            <div className="lg:hidden px-4 pb-3">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] dark:text-[#A0A0A0]" />
                <Input
                  placeholder="Buscar…"
                  className="pl-9 w-full bg-[#F8F9FC] dark:bg-[#0A0A0A] border-none text-sm dark:text-[#F5F5F5] dark:placeholder:text-[#A0A0A0]"
                />
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto bg-[#F8F9FC]">{children}</main>

          {/* Footer */}
          <footer className="bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-white/10 px-4 sm:px-6 lg:px-8 py-4">
            <p className="text-center text-[#6B7280] dark:text-[#A0A0A0]" style={{ fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Nexus Hub – Todos os direitos reservados
            </p>
          </footer>
        </div>

        {/* Chat IA Flutuante */}
        {showChatBot && (
          <div className="fixed bottom-4 right-4 w-80 sm:w-96 h-[500px] bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-2xl dark:shadow-black/50 border border-gray-200 dark:border-white/10 flex flex-col z-50 animate-in slide-in-from-bottom-5">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center relative">
                  <MessageSquare className="w-5 h-5" />
                  {/* Pulsating animation */}
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                </div>
                <div>
                  <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>IA Nexus</h3>
                  <p className="text-white/80 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowChatBot(false)}
                className="p-1 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''} animate-in fade-in slide-in-from-bottom-2`}>
                  {msg.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div 
                    className={`rounded-2xl p-3 max-w-[80%] shadow-md ${
                      msg.role === 'ai' 
                        ? 'bg-gray-100 dark:bg-[#2A2A2A] rounded-tl-none' 
                        : 'bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] text-white rounded-tr-none shadow-lg'
                    }`}
                  >
                    <p 
                      className={msg.role === 'ai' ? 'text-[#1E1E1E] dark:text-[#F5F5F5]' : 'text-white'} 
                      style={{ fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}
                    >
                      {msg.message}
                    </p>
                  </div>
                  {msg.role === 'user' && (
                    <Avatar className="w-8 h-8 flex-shrink-0 shadow-md">
                      <AvatarFallback className="bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] text-white">
                        {userInitials}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200 dark:border-white/10">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-[#F8F9FC] dark:bg-[#0A0A0A] border-none dark:text-[#F5F5F5] dark:placeholder:text-[#A0A0A0]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        )}

        {/* Chat Button - When chat is closed */}
        {!showChatBot && (
          <button
            onClick={() => setShowChatBot(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] text-white shadow-2xl hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40 group relative"
          >
            <MessageSquare className="w-6 h-6 relative z-10" />
            {/* Pulsating ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] opacity-75 animate-ping" />
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
          </button>
        )}
      </div>
    </div>
  );
}
