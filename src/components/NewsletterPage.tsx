import { useState } from "react";
import { Mail, Send, TrendingUp, Users, CheckCircle, XCircle, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { toast } from "sonner";

export function NewsletterPage() {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const stats = [
    {
      title: "Total de Assinantes",
      value: "1,248",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Taxa de Abertura",
      value: "68.5%",
      change: "+5.2%",
      icon: Mail,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Enviadas este mês",
      value: "8",
      change: "+2",
      icon: Send,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Engajamento",
      value: "42.3%",
      change: "+8.1%",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const newsletterHistory = [
    {
      id: 1,
      title: "Novidades de Outubro 2025",
      date: "28 Out 2025",
      recipients: 1248,
      openRate: 72.5,
      status: "success",
    },
    {
      id: 2,
      title: "Webinar: Inovação Digital",
      date: "21 Out 2025",
      recipients: 1240,
      openRate: 68.2,
      status: "success",
    },
    {
      id: 3,
      title: "Relatório Mensal - Setembro",
      date: "15 Out 2025",
      recipients: 1235,
      openRate: 65.8,
      status: "success",
    },
    {
      id: 4,
      title: "Convite: Reunião Anual",
      date: "08 Out 2025",
      recipients: 1230,
      openRate: 58.3,
      status: "failed",
    },
    {
      id: 5,
      title: "Atualização de Políticas",
      date: "01 Out 2025",
      recipients: 1225,
      openRate: 71.2,
      status: "success",
    },
  ];

  const handleSendNewsletter = () => {
    if (!subject || !content) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    toast.success("Newsletter enviada com sucesso!");
    setSubject("");
    setContent("");
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
          Newsletter
        </h1>
        <p className="text-[#6B7280]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Gerencie e envie newsletters para seus assinantes
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
                <h3 className="mb-1" style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif' }}>{stat.value}</h3>
                <p className="text-[#6B7280]" style={{ fontSize: '0.875rem' }}>{stat.title}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Create Newsletter */}
      <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
        <CardHeader className="border-b dark:border-white/10 bg-gradient-to-r from-[#0A2E61] to-[#00B8D9]">
          <CardTitle className="flex items-center gap-2 text-white">
            <Mail className="w-5 h-5" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Criar Nova Newsletter</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-[#1E1E1E]">
              Assunto
            </Label>
            <Input
              id="subject"
              placeholder="Digite o assunto da newsletter..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-gray-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-[#1E1E1E]">
              Conteúdo do E-mail
            </Label>
            <Textarea
              id="content"
              placeholder="Digite o conteúdo da newsletter..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="border-gray-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setSubject("");
                setContent("");
              }}
              className="border-[#0A2E61] text-[#0A2E61] hover:bg-[#0A2E61]/10"
            >
              Limpar
            </Button>
            <Button
              onClick={handleSendNewsletter}
              className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90"
            >
              <Send className="w-4 h-4 mr-2" />
              Enviar Newsletter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter History */}
      <Card className="border-none shadow-md dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
        <CardHeader className="dark:border-white/10">
          <CardTitle className="flex items-center gap-2 text-[#0A2E61] dark:text-[#F5F5F5]">
            <Calendar className="w-5 h-5" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>Histórico de Newsletters</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#1E1E1E]">Título</TableHead>
                  <TableHead className="text-[#1E1E1E]">Data</TableHead>
                  <TableHead className="text-[#1E1E1E]">Destinatários</TableHead>
                  <TableHead className="text-[#1E1E1E]">Taxa de Abertura</TableHead>
                  <TableHead className="text-[#1E1E1E] text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {newsletterHistory.map((newsletter) => (
                  <TableRow key={newsletter.id}>
                    <TableCell className="text-[#1E1E1E]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {newsletter.title}
                    </TableCell>
                    <TableCell className="text-[#6B7280]" style={{ fontSize: '0.875rem' }}>
                      {newsletter.date}
                    </TableCell>
                    <TableCell className="text-[#6B7280]" style={{ fontSize: '0.875rem' }}>
                      {newsletter.recipients.toLocaleString('pt-BR')}
                    </TableCell>
                    <TableCell className="text-[#6B7280]" style={{ fontSize: '0.875rem' }}>
                      {newsletter.openRate}%
                    </TableCell>
                    <TableCell className="text-right">
                      {newsletter.status === "success" ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100 gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Enviado
                        </Badge>
                      ) : (
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-100 gap-1">
                          <XCircle className="w-3 h-3" />
                          Falhou
                        </Badge>
                      )}
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
