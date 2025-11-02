import { useState } from "react";
import { 
  TrendingUp, 
  Download, 
  Users, 
  Eye, 
  BarChart3, 
  Calendar,
  ArrowUp,
  ArrowDown,
  Activity
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
  ComposedChart,
} from "recharts";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

type Period = "week" | "month" | "quarter";

export function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("week");

  // KPI Data
  const kpiData = [
    {
      title: "Total de Acessos",
      value: "24,589",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Downloads",
      value: "3,847",
      change: "+8.2%",
      trend: "up",
      icon: Download,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Usuários Ativos",
      value: "1,248",
      change: "-2.4%",
      trend: "down",
      icon: Users,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Taxa de Engajamento",
      value: "68.5%",
      change: "+15.3%",
      trend: "up",
      icon: Activity,
      color: "from-orange-500 to-orange-600",
    },
  ];

  // Data por período
  const weekData = [
    { day: "Seg", acessos: 2420, downloads: 450, engajamento: 65 },
    { day: "Ter", acessos: 2680, downloads: 380, engajamento: 68 },
    { day: "Qua", acessos: 3510, downloads: 510, engajamento: 72 },
    { day: "Qui", acessos: 3250, downloads: 450, engajamento: 70 },
    { day: "Sex", acessos: 2890, downloads: 390, engajamento: 67 },
    { day: "Sáb", acessos: 1980, downloads: 280, engajamento: 58 },
    { day: "Dom", acessos: 1610, downloads: 210, engajamento: 52 },
  ];

  const monthData = [
    { period: "Sem 1", acessos: 18420, downloads: 2450, engajamento: 65 },
    { period: "Sem 2", acessos: 21680, downloads: 2880, engajamento: 68 },
    { period: "Sem 3", acessos: 24510, downloads: 3210, engajamento: 72 },
    { period: "Sem 4", acessos: 22890, downloads: 2790, engajamento: 69 },
  ];

  const quarterData = [
    { period: "Jan", acessos: 68420, downloads: 8450, engajamento: 62 },
    { period: "Fev", acessos: 75680, downloads: 9880, engajamento: 65 },
    { period: "Mar", acessos: 82510, downloads: 10210, engajamento: 68 },
  ];

  const getData = () => {
    switch (selectedPeriod) {
      case "week":
        return weekData;
      case "month":
        return monthData;
      case "quarter":
        return quarterData;
      default:
        return weekData;
    }
  };

  const currentData = getData();

  // Dados de performance por módulo
  const modulePerformance = [
    { module: "Documentos", views: 8542, downloads: 1234, engagement: 72 },
    { module: "Comunicados", views: 6789, downloads: 0, engagement: 68 },
    { module: "Banners", views: 4521, downloads: 0, engagement: 45 },
    { module: "Newsletter", views: 2345, downloads: 567, engagement: 58 },
    { module: "Usuários", views: 1890, downloads: 89, engagement: 65 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-card-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value.toLocaleString('pt-BR')}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 
            className="mb-2 text-[#0A2E61] dark:text-[#F5F5F5]" 
            style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}
          >
            Análises e Relatórios
          </h1>
          <p className="text-[#6B7280] dark:text-[#A0A0A0]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Métricas detalhadas e insights sobre o uso da plataforma
          </p>
        </div>

        {/* Period Filter */}
        <Tabs value={selectedPeriod} onValueChange={(value) => setSelectedPeriod(value as Period)}>
          <TabsList className="bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10">
            <TabsTrigger value="week" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Semana</span>
            </TabsTrigger>
            <TabsTrigger value="month" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Mês</span>
            </TabsTrigger>
            <TabsTrigger value="quarter" className="gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Trimestre</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          const TrendIcon = kpi.trend === "up" ? ArrowUp : ArrowDown;
          return (
            <Card 
              key={index} 
              className="border-none shadow-md bg-white dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div 
                    className={`flex items-center gap-1 ${
                      kpi.trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    <TrendIcon className="w-4 h-4" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{kpi.change}</span>
                  </div>
                </div>
                <h3 
                  className="mb-1 text-[#1E1E1E] dark:text-[#F5F5F5]" 
                  style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}
                >
                  {kpi.value}
                </h3>
                <p className="text-[#6B7280] dark:text-[#A0A0A0]" style={{ fontSize: '0.875rem' }}>
                  {kpi.title}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Combined Chart - Acessos e Downloads */}
      <Card className="border-none shadow-md bg-white dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
        <CardHeader className="border-b dark:border-white/10">
          <CardTitle className="flex items-center gap-2 text-[#0A2E61] dark:text-[#F5F5F5]">
            <BarChart3 className="w-5 h-5" />
            <span style={{ fontFamily: 'Poppins, sans-serif' }}>
              Visão Geral - Acessos e Downloads
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={currentData}>
                <defs>
                  <linearGradient id="colorAcessos" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0A2E61" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#00B8D9" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" className="dark:stroke-white/10" />
                <XAxis 
                  dataKey={selectedPeriod === "week" ? "day" : "period"} 
                  stroke="#6B7280"
                  className="dark:stroke-[#A0A0A0]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                />
                <YAxis 
                  stroke="#6B7280"
                  className="dark:stroke-[#A0A0A0]"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem' }}
                />
                <Area
                  type="monotone"
                  dataKey="acessos"
                  fill="url(#colorAcessos)"
                  stroke="#0A2E61"
                  strokeWidth={2}
                  name="Acessos"
                />
                <Line
                  type="monotone"
                  dataKey="downloads"
                  stroke="#E63946"
                  strokeWidth={3}
                  dot={{ fill: '#E63946', r: 4 }}
                  name="Downloads"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Engagement Line Chart */}
        <Card className="border-none shadow-md bg-white dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
          <CardHeader className="border-b dark:border-white/10">
            <CardTitle className="flex items-center gap-2 text-[#0A2E61] dark:text-[#F5F5F5]">
              <TrendingUp className="w-5 h-5" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Taxa de Engajamento</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentData}>
                  <defs>
                    <linearGradient id="colorEngajamento" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00B8D9" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#00B8D9" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" className="dark:stroke-white/10" />
                  <XAxis 
                    dataKey={selectedPeriod === "week" ? "day" : "period"}
                    stroke="#6B7280"
                    className="dark:stroke-[#A0A0A0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    className="dark:stroke-[#A0A0A0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="engajamento"
                    stroke="#00B8D9"
                    strokeWidth={2}
                    fill="url(#colorEngajamento)"
                    name="Engajamento (%)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Module Performance Bar Chart */}
        <Card className="border-none shadow-md bg-white dark:bg-[#1A1A1A] dark:shadow-xl dark:shadow-black/20">
          <CardHeader className="border-b dark:border-white/10">
            <CardTitle className="flex items-center gap-2 text-[#0A2E61] dark:text-[#F5F5F5]">
              <BarChart3 className="w-5 h-5" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Performance por Módulo</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modulePerformance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" className="dark:stroke-white/10" />
                  <XAxis 
                    type="number"
                    stroke="#6B7280"
                    className="dark:stroke-[#A0A0A0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}
                  />
                  <YAxis 
                    type="category"
                    dataKey="module"
                    stroke="#6B7280"
                    className="dark:stroke-[#A0A0A0]"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem' }}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="views" fill="#0A2E61" radius={[0, 8, 8, 0]} name="Visualizações" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Button */}
      <div className="flex justify-end">
        <Button 
          className="bg-gradient-to-r from-[#0A2E61] to-[#00B8D9] hover:opacity-90 shadow-lg"
        >
          <Download className="w-4 h-4 mr-2" />
          Exportar Relatório (PDF)
        </Button>
      </div>
    </div>
  );
}
