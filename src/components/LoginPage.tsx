import { useState } from "react";
import { LogIn, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onBackToHome: () => void;
}

export function LoginPage({ onLogin, onBackToHome }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2E61] via-[#00B8D9] to-[#0A2E61] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mr-4 shadow-lg">
              <span className="text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}>
                N
              </span>
            </div>
            <span className="text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2rem' }}>
              Nexus Hub
            </span>
          </div>
          <p className="text-white/90">
            Acesse a plataforma de inteligência empresarial
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-none shadow-2xl">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-[#0A2E61] mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
                Entrar na Intranet
              </h2>
              <p className="text-[#6B7280]">
                Insira suas credenciais para acessar
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Senha</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#0A2E61] focus:ring-[#00B8D9]"
                  />
                  <span className="text-[#6B7280]">Lembrar-me</span>
                </label>

                <button
                  type="button"
                  className="text-[#00B8D9] hover:text-[#0A2E61] transition-colors"
                >
                  Esqueceu a senha?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90 py-6"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-[#6B7280]">
                Não tem uma conta?{" "}
                <button className="text-[#00B8D9] hover:text-[#0A2E61] transition-colors">
                  Solicite acesso
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <button
            onClick={onBackToHome}
            className="text-white hover:text-white/80 transition-colors"
          >
            ← Voltar para o site
          </button>
        </div>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-4 text-center">
            <p className="text-white/90 mb-2">
              <strong>Credenciais de demonstração:</strong>
            </p>
            <p className="text-white/80">
              E-mail: demo@nexushub.com.br
              <br />
              Senha: demo123
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
