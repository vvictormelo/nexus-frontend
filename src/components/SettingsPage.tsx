import { useState } from "react";
import { Settings as SettingsIcon, Palette, Shield, Plug, Save, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Switch } from "./ui/switch";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

export function SettingsPage() {
  const [brandingSettings, setBrandingSettings] = useState({
    siteName: "Nexus Hub",
    logoUrl: "",
    primaryColor: "#0A2E61",
    secondaryColor: "#00B8D9",
    accentColor: "#E63946",
  });

  const [accessSettings, setAccessSettings] = useState({
    twoFactorAuth: false,
    passwordExpiry: true,
    sessionTimeout: 30,
    ipRestriction: false,
  });

  const [integrationSettings, setIntegrationSettings] = useState({
    awsAccessKey: "",
    awsSecretKey: "",
    smtpHost: "smtp.example.com",
    smtpPort: "587",
    smtpUser: "",
    smtpPassword: "",
    apiKey: "",
  });

  const handleSaveBranding = () => {
    toast.success("Configurações de branding salvas com sucesso!");
  };

  const handleSaveAccess = () => {
    toast.success("Configurações de acesso salvas com sucesso!");
  };

  const handleSaveIntegrations = () => {
    toast.success("Configurações de integrações salvas com sucesso!");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
          Configurações
        </h1>
        <p className="text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Gerencie as configurações do sistema, branding e integrações
        </p>
      </div>

      <Tabs defaultValue="branding" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
          <TabsTrigger value="branding" className="gap-2">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Branding</span>
          </TabsTrigger>
          <TabsTrigger value="access" className="gap-2">
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Acesso</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2">
            <Plug className="w-4 h-4" />
            <span className="hidden sm:inline">Integrações</span>
          </TabsTrigger>
        </TabsList>

        {/* Branding Tab */}
        <TabsContent value="branding" className="space-y-6 mt-6">
          <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
            <CardHeader className="border-b dark:border-white/10 bg-gradient-to-r from-[#0A2E61] to-[#00B8D9]">
              <CardTitle className="flex items-center gap-2 text-white">
                <Palette className="w-5 h-5" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Identidade Visual</span>
              </CardTitle>
              <CardDescription className="text-white/80">
                Personalize a aparência do portal Nexus Hub
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Site Name */}
              <div className="space-y-2">
                <Label htmlFor="siteName" className="text-[#1E1E1E]">
                  Nome do Portal
                </Label>
                <Input
                  id="siteName"
                  value={brandingSettings.siteName}
                  onChange={(e) =>
                    setBrandingSettings({ ...brandingSettings, siteName: e.target.value })
                  }
                  className="border-gray-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <Separator />

              {/* Logo Upload */}
              <div className="space-y-2">
                <Label htmlFor="logo" className="text-[#1E1E1E]">
                  Logotipo
                </Label>
                <div className="flex items-center gap-4">
                  {brandingSettings.logoUrl ? (
                    <div className="w-24 h-24 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img src={brandingSettings.logoUrl} alt="Logo" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] flex items-center justify-center text-white">
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2rem' }}>N</span>
                    </div>
                  )}
                  <Button variant="outline" className="gap-2">
                    <Upload className="w-4 h-4" />
                    Enviar Logo
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Colors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="primaryColor" className="text-[#1E1E1E]">
                    Cor Primária
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="primaryColor"
                      type="color"
                      value={brandingSettings.primaryColor}
                      onChange={(e) =>
                        setBrandingSettings({ ...brandingSettings, primaryColor: e.target.value })
                      }
                      className="w-16 h-10 p-1 cursor-pointer"
                    />
                    <Input
                      value={brandingSettings.primaryColor}
                      onChange={(e) =>
                        setBrandingSettings({ ...brandingSettings, primaryColor: e.target.value })
                      }
                      className="flex-1 border-gray-300"
                      style={{ fontFamily: 'mono' }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="secondaryColor" className="text-[#1E1E1E]">
                    Cor Secundária
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="secondaryColor"
                      type="color"
                      value={brandingSettings.secondaryColor}
                      onChange={(e) =>
                        setBrandingSettings({ ...brandingSettings, secondaryColor: e.target.value })
                      }
                      className="w-16 h-10 p-1 cursor-pointer"
                    />
                    <Input
                      value={brandingSettings.secondaryColor}
                      onChange={(e) =>
                        setBrandingSettings({ ...brandingSettings, secondaryColor: e.target.value })
                      }
                      className="flex-1 border-gray-300"
                      style={{ fontFamily: 'mono' }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="accentColor" className="text-[#1E1E1E]">
                    Cor de Destaque
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="accentColor"
                      type="color"
                      value={brandingSettings.accentColor}
                      onChange={(e) =>
                        setBrandingSettings({ ...brandingSettings, accentColor: e.target.value })
                      }
                      className="w-16 h-10 p-1 cursor-pointer"
                    />
                    <Input
                      value={brandingSettings.accentColor}
                      onChange={(e) =>
                        setBrandingSettings({ ...brandingSettings, accentColor: e.target.value })
                      }
                      className="flex-1 border-gray-300"
                      style={{ fontFamily: 'mono' }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleSaveBranding}
                  className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Access Tab */}
        <TabsContent value="access" className="space-y-6 mt-6">
          <Card className="border-none shadow-md">
            <CardHeader className="border-b bg-gradient-to-r from-[#0A2E61] to-[#00B8D9]">
              <CardTitle className="flex items-center gap-2 text-white">
                <Shield className="w-5 h-5" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Segurança e Permissões</span>
              </CardTitle>
              <CardDescription className="text-white/80">
                Configure papéis, permissões e políticas de acesso
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Two Factor Auth */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="space-y-1">
                  <Label htmlFor="2fa" className="text-[#1E1E1E]">
                    Autenticação em Dois Fatores (2FA)
                  </Label>
                  <p className="text-[#6B7280] text-sm">
                    Exigir verificação adicional ao fazer login
                  </p>
                </div>
                <Switch
                  id="2fa"
                  checked={accessSettings.twoFactorAuth}
                  onCheckedChange={(checked) =>
                    setAccessSettings({ ...accessSettings, twoFactorAuth: checked })
                  }
                />
              </div>

              {/* Password Expiry */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="space-y-1">
                  <Label htmlFor="passwordExpiry" className="text-[#1E1E1E]">
                    Expiração de Senha
                  </Label>
                  <p className="text-[#6B7280] text-sm">
                    Senhas expiram após 90 dias
                  </p>
                </div>
                <Switch
                  id="passwordExpiry"
                  checked={accessSettings.passwordExpiry}
                  onCheckedChange={(checked) =>
                    setAccessSettings({ ...accessSettings, passwordExpiry: checked })
                  }
                />
              </div>

              {/* IP Restriction */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="space-y-1">
                  <Label htmlFor="ipRestriction" className="text-[#1E1E1E]">
                    Restrição por IP
                  </Label>
                  <p className="text-[#6B7280] text-sm">
                    Limitar acesso a IPs específicos
                  </p>
                </div>
                <Switch
                  id="ipRestriction"
                  checked={accessSettings.ipRestriction}
                  onCheckedChange={(checked) =>
                    setAccessSettings({ ...accessSettings, ipRestriction: checked })
                  }
                />
              </div>

              <Separator />

              {/* Session Timeout */}
              <div className="space-y-2">
                <Label htmlFor="sessionTimeout" className="text-[#1E1E1E]">
                  Tempo de Sessão (minutos)
                </Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  value={accessSettings.sessionTimeout}
                  onChange={(e) =>
                    setAccessSettings({
                      ...accessSettings,
                      sessionTimeout: parseInt(e.target.value) || 30,
                    })
                  }
                  className="border-gray-300 max-w-xs"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleSaveAccess}
                  className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Tab */}
        <TabsContent value="integrations" className="space-y-6 mt-6">
          <Card className="border-none shadow-md">
            <CardHeader className="border-b bg-gradient-to-r from-[#0A2E61] to-[#00B8D9]">
              <CardTitle className="flex items-center gap-2 text-white">
                <Plug className="w-5 h-5" />
                <span style={{ fontFamily: 'Poppins, sans-serif' }}>Integrações Externas</span>
              </CardTitle>
              <CardDescription className="text-white/80">
                Configure APIs, AWS, SMTP e outras integrações
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* API Key */}
              <div className="space-y-2">
                <Label htmlFor="apiKey" className="text-[#1E1E1E]">
                  Chave da API Nexus
                </Label>
                <Input
                  id="apiKey"
                  type="password"
                  placeholder="••••••••••••••••••••"
                  value={integrationSettings.apiKey}
                  onChange={(e) =>
                    setIntegrationSettings({ ...integrationSettings, apiKey: e.target.value })
                  }
                  className="border-gray-300"
                  style={{ fontFamily: 'mono' }}
                />
              </div>

              <Separator />

              {/* AWS Settings */}
              <div className="space-y-4">
                <h3 className="text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  AWS S3 (Armazenamento)
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="awsAccessKey" className="text-[#1E1E1E]">
                    AWS Access Key
                  </Label>
                  <Input
                    id="awsAccessKey"
                    type="password"
                    placeholder="••••••••••••••••••••"
                    value={integrationSettings.awsAccessKey}
                    onChange={(e) =>
                      setIntegrationSettings({ ...integrationSettings, awsAccessKey: e.target.value })
                    }
                    className="border-gray-300"
                    style={{ fontFamily: 'mono' }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="awsSecretKey" className="text-[#1E1E1E]">
                    AWS Secret Key
                  </Label>
                  <Input
                    id="awsSecretKey"
                    type="password"
                    placeholder="••••••••••••••••••••"
                    value={integrationSettings.awsSecretKey}
                    onChange={(e) =>
                      setIntegrationSettings({ ...integrationSettings, awsSecretKey: e.target.value })
                    }
                    className="border-gray-300"
                    style={{ fontFamily: 'mono' }}
                  />
                </div>
              </div>

              <Separator />

              {/* SMTP Settings */}
              <div className="space-y-4">
                <h3 className="text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>
                  Servidor SMTP (E-mail)
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="smtpHost" className="text-[#1E1E1E]">
                      Host SMTP
                    </Label>
                    <Input
                      id="smtpHost"
                      value={integrationSettings.smtpHost}
                      onChange={(e) =>
                        setIntegrationSettings({ ...integrationSettings, smtpHost: e.target.value })
                      }
                      className="border-gray-300"
                      style={{ fontFamily: 'mono' }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="smtpPort" className="text-[#1E1E1E]">
                      Porta
                    </Label>
                    <Input
                      id="smtpPort"
                      value={integrationSettings.smtpPort}
                      onChange={(e) =>
                        setIntegrationSettings({ ...integrationSettings, smtpPort: e.target.value })
                      }
                      className="border-gray-300"
                      style={{ fontFamily: 'mono' }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtpUser" className="text-[#1E1E1E]">
                    Usuário SMTP
                  </Label>
                  <Input
                    id="smtpUser"
                    type="email"
                    placeholder="email@example.com"
                    value={integrationSettings.smtpUser}
                    onChange={(e) =>
                      setIntegrationSettings({ ...integrationSettings, smtpUser: e.target.value })
                    }
                    className="border-gray-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="smtpPassword" className="text-[#1E1E1E]">
                    Senha SMTP
                  </Label>
                  <Input
                    id="smtpPassword"
                    type="password"
                    placeholder="••••••••••••"
                    value={integrationSettings.smtpPassword}
                    onChange={(e) =>
                      setIntegrationSettings({ ...integrationSettings, smtpPassword: e.target.value })
                    }
                    className="border-gray-300"
                    style={{ fontFamily: 'mono' }}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  onClick={handleSaveIntegrations}
                  className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvar Alterações
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
