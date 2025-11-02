import { FileText, Users, Megaphone, TrendingUp, Download, Eye, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function DashboardPage() {
  const stats = [
    {
      title: "Comunicados",
      value: "32",
      change: "+5%",
      icon: Megaphone,
      color: "from-[#0A2E61] to-[#00B8D9]",
    },
    {
      title: "Documentos",
      value: "248",
      change: "+12%",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Usuários Ativos",
      value: "156",
      change: "+8%",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Newsletter",
      value: "68.5%",
      change: "+5.2%",
      icon: Mail,
      color: "from-[#E63946] to-orange-600",
    },
  ];

  const weeklyAccessData = [
    { day: "Seg", acessos: 420 },
    { day: "Ter", acessos: 380 },
    { day: "Qua", acessos: 510 },
    { day: "Qui", acessos: 450 },
    { day: "Sex", acessos: 390 },
    { day: "Sáb", acessos: 280 },
    { day: "Dom", acessos: 210 },
  ];

  const recentDocuments = [
    {
      name: "Relatório Financeiro Q3",
      type: "PDF",
      date: "25 Out 2025",
      downloads: 45,
    },
    {
      name: "Ata da Reunião - Outubro",
      type: "DOCX",
      date: "23 Out 2025",
      downloads: 23,
    },
    {
      name: "Apresentação de Resultados",
      type: "PPTX",
      date: "20 Out 2025",
      downloads: 67,
    },
    {
      name: "Planilha de Membros",
      type: "XLSX",
      date: "18 Out 2025",
      downloads: 34,
    },
  ];

  const recentAnnouncements = [
    {
      title: "Nova atualização da plataforma",
      date: "26 Out 2025",
      views: 234,
    },
    {
      title: "Webinar sobre inovação",
      date: "24 Out 2025",
      views: 189,
    },
    {
      title: "Mudanças no estatuto",
      date: "22 Out 2025",
      views: 156,
    },
  ];

  const activeUsers = [
    { name: "Carlos Silva", email: "carlos@empresa.com", lastAccess: "Agora" },
    { name: "Ana Costa", email: "ana@empresa.com", lastAccess: "5 min atrás" },
    { name: "João Santos", email: "joao@empresa.com", lastAccess: "12 min atrás" },
    { name: "Maria Oliveira", email: "maria@empresa.com", lastAccess: "1h atrás" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="mb-2 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
          Painel Nexus
        </h1>
        <p className="text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Visão geral das atividades e comunicações
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-600">{stat.change}</span>
                </div>
                <h3 className="mb-1 text-[#1E1E1E]" style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif' }}>{stat.value}</h3>
                <p className="text-[#6B7280]" style={{ fontSize: '0.875rem' }}>{stat.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Weekly Access Chart */}
      <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
        <CardHeader className="dark:border-white/10">
          <CardTitle className="flex items-center gap-2 text-[#0A2E61] dark:text-[#F5F5F5]">
            <TrendingUp className="w-5 h-5" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Acessos por Semana</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyAccessData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis 
                  dataKey="day" 
                  stroke="#6B7280"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                />
                <YAxis 
                  stroke="#6B7280"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  labelStyle={{ color: '#1E1E1E', fontWeight: 600 }}
                />
                <Bar dataKey="acessos" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0A2E61" />
                    <stop offset="100%" stopColor="#00B8D9" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Documents */}
        <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
          <CardHeader className="dark:border-white/10">
            <CardTitle className="flex items-center justify-between text-[#0A2E61] dark:text-[#F5F5F5]">
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Documentos Recentes</span>
              <Button variant="ghost" size="sm" className="text-[#00B8D9] hover:text-[#0A2E61]">
                Ver todos
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDocuments.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate">{doc.name}</p>
                      <p className="text-muted-foreground">{doc.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <Download className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{doc.downloads}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Announcements */}
        <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
          <CardHeader className="dark:border-white/10">
            <CardTitle className="flex items-center justify-between text-[#0A2E61] dark:text-[#F5F5F5]">
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Últimos Comunicados</span>
              <Button variant="ghost" size="sm" className="text-[#00B8D9] hover:text-[#0A2E61]">
                Ver todos
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnnouncements.map((announcement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Megaphone className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="truncate">{announcement.title}</p>
                      <p className="text-muted-foreground">{announcement.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                    <Eye className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{announcement.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Users Table */}
      <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
        <CardHeader className="dark:border-white/10">
          <CardTitle className="flex items-center gap-2 text-[#0A2E61] dark:text-[#F5F5F5]">
            <Users className="w-5 h-5" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Usuários Ativos</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Último Acesso</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeUsers.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell className="text-muted-foreground">{user.lastAccess}</TableCell>
                    <TableCell className="text-right">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Online
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
