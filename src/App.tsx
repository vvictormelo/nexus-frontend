import { useState } from "react";
import { Toaster } from "sonner";
import { PublicHeader } from "./components/PublicHeader";
import { PublicFooter } from "./components/PublicFooter";
import { HomePage } from "./components/HomePage";
import { InstitutionalPage } from "./components/InstitutionalPage";
import { BlogPage } from "./components/BlogPage";
import { DocumentsPage } from "./components/DocumentsPage";
import { ContactPage } from "./components/ContactPage";
import { LoginPage } from "./components/LoginPage";
import { IntranetLayout } from "./components/IntranetLayout";
import { DashboardPage } from "./components/DashboardPage";
import { UsersManagementPage } from "./components/UsersManagementPage";
import { AnnouncementsManagementPage } from "./components/AnnouncementsManagementPage";
import { BannersManagementPage } from "./components/BannersManagementPage";
import { NewsletterPage } from "./components/NewsletterPage";
import { SettingsPage } from "./components/SettingsPage";
import { AnalyticsPage } from "./components/AnalyticsPage";

type PublicPages = "home" | "institutional" | "blog" | "partners" | "documents" | "contact" | "login";
type IntranetPages = "dashboard" | "documents-admin" | "users" | "announcements" | "banners" | "newsletter" | "analytics" | "settings";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPublicPage, setCurrentPublicPage] = useState<PublicPages>("home");
  const [currentIntranetPage, setCurrentIntranetPage] = useState<IntranetPages>("dashboard");
  const [userName, setUserName] = useState("Usuário Demo");

  const handleLogin = (email: string, password: string) => {
    // Demo login - in production, this would validate credentials
    if (email && password) {
      setIsLoggedIn(true);
      setUserName(email.split("@")[0]);
      setCurrentIntranetPage("dashboard");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPublicPage("home");
  };

  const handleNavigateToLogin = () => {
    setCurrentPublicPage("login");
  };

  const handlePublicNavigate = (page: string) => {
    setCurrentPublicPage(page as PublicPages);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIntranetNavigate = (page: string) => {
    setCurrentIntranetPage(page as IntranetPages);
  };

  // Render Login Page
  if (currentPublicPage === "login" && !isLoggedIn) {
    return (
      <LoginPage
        onLogin={handleLogin}
        onBackToHome={() => setCurrentPublicPage("home")}
      />
    );
  }

  // Render Intranet
  if (isLoggedIn) {
    return (
      <>
        <IntranetLayout
          currentPage={currentIntranetPage}
          onNavigate={handleIntranetNavigate}
          onLogout={handleLogout}
          userName={userName}
        >
          {currentIntranetPage === "dashboard" && <DashboardPage />}
          {currentIntranetPage === "announcements" && <AnnouncementsManagementPage />}
          {currentIntranetPage === "banners" && <BannersManagementPage />}
          {currentIntranetPage === "newsletter" && <NewsletterPage />}
          {currentIntranetPage === "users" && <UsersManagementPage />}
          {currentIntranetPage === "analytics" && <AnalyticsPage />}
          {currentIntranetPage === "settings" && <SettingsPage />}
          {currentIntranetPage === "documents-admin" && (
            <div className="p-8">
              <h1 className="mb-4 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
                Gerenciar Documentos
              </h1>
              <p className="text-[#6B7280]">Módulo em desenvolvimento...</p>
            </div>
          )}
        </IntranetLayout>
        <Toaster position="top-right" richColors />
      </>
    );
  }

  // Render Public Pages
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader
        currentPage={currentPublicPage}
        onNavigate={handlePublicNavigate}
        onLogin={handleNavigateToLogin}
      />
      
      <main className="flex-1 mt-16 md:mt-20">
        {currentPublicPage === "home" && <HomePage onNavigate={handlePublicNavigate} />}
        {currentPublicPage === "institutional" && <InstitutionalPage />}
        {currentPublicPage === "blog" && <BlogPage />}
        {currentPublicPage === "documents" && <DocumentsPage />}
        {currentPublicPage === "contact" && <ContactPage />}
        {currentPublicPage === "partners" && (
          <div className="py-24 text-center">
            <h1 className="mb-4">Parceiros</h1>
            <p className="text-muted-foreground">Página em desenvolvimento...</p>
          </div>
        )}
      </main>

      <PublicFooter onNavigate={handlePublicNavigate} />
    </div>
  );
}
