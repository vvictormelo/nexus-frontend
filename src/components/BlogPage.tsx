import { useState } from "react";
import { Calendar, Tag, ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "news", label: "Notícias" },
    { id: "events", label: "Eventos" },
    { id: "insights", label: "Insights" },
    { id: "updates", label: "Atualizações" },
  ];

  const posts = [
    {
      id: 1,
      title: "Nova funcionalidade de relatórios integrados",
      excerpt:
        "Apresentamos uma nova forma de gerar relatórios automáticos com dados consolidados de toda a rede, facilitando a tomada de decisões estratégicas.",
      category: "updates",
      date: "25 Out 2025",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjE5MzUwMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Webinar: Tendências do mercado 2026",
      excerpt:
        "Participe do nosso evento online com especialistas do setor empresarial discutindo as principais tendências para o próximo ano.",
      category: "events",
      date: "20 Out 2025",
      image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxOTI3NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Nexus Hub alcança 500 empresas conectadas",
      excerpt:
        "Celebramos este marco importante com toda a nossa comunidade de parceiros. Obrigado pela confiança!",
      category: "news",
      date: "15 Out 2025",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYxOTMzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Como otimizar a gestão de documentos corporativos",
      excerpt:
        "Dicas e práticas recomendadas para organizar e gerenciar documentos de forma eficiente na sua organização.",
      category: "insights",
      date: "10 Out 2025",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzYxODc4NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      title: "Segurança de dados: Nossas certificações",
      excerpt:
        "Conheça as certificações de segurança que garantem a proteção dos seus dados na plataforma Nexus Hub.",
      category: "news",
      date: "05 Out 2025",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjE5MDQyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      title: "Atualizações mensais: Setembro 2025",
      excerpt:
        "Confira todas as novidades, melhorias e correções implementadas no mês de setembro.",
      category: "updates",
      date: "01 Out 2025",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjE5MTcyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryLabel = (categoryId: string) => {
    return categories.find((cat) => cat.id === categoryId)?.label || categoryId;
  };

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative h-[300px] md:h-[350px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxOTI3NzMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2E61]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Blog & Comunicados
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              Fique por dentro das últimas novidades e insights do Nexus Hub
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#0A2E61] to-[#00B8D9]"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6B7280]">Nenhum post encontrado.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge
                        variant="secondary"
                        className="bg-[#00B8D9]/10 text-[#00B8D9]"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {getCategoryLabel(post.category)}
                      </Badge>
                      <div className="flex items-center text-[#6B7280]">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="mb-3 text-[#0A2E61]">{post.title}</h3>
                    <p className="text-[#6B7280] mb-4 line-clamp-3">{post.excerpt}</p>

                    <Button
                      variant="ghost"
                      className="text-[#00B8D9] hover:text-[#0A2E61] p-0"
                    >
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sidebar - Latest Posts (could be a separate section) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
            Posts em Destaque
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="mb-2 text-[#0A2E61] line-clamp-2">{post.title}</h4>
                  <div className="flex items-center text-[#6B7280]">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
