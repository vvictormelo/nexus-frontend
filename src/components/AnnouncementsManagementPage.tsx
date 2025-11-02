import { useState } from "react";
import { PlusCircle, Search, Calendar, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function AnnouncementsManagementPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Geral",
  });

  const announcements = [
    {
      id: 1,
      title: "Nova atualização da plataforma",
      excerpt: "Implementamos melhorias significativas no sistema de relatórios...",
      category: "Atualizações",
      date: "26 Out 2025",
      views: 234,
      status: "published",
    },
    {
      id: 2,
      title: "Webinar sobre inovação empresarial",
      excerpt: "Participe do nosso webinar com especialistas do mercado...",
      category: "Eventos",
      date: "24 Out 2025",
      views: 189,
      status: "published",
    },
    {
      id: 3,
      title: "Mudanças no estatuto social",
      excerpt: "Informamos sobre as alterações aprovadas na última assembleia...",
      category: "Jurídico",
      date: "22 Out 2025",
      views: 156,
      status: "published",
    },
    {
      id: 4,
      title: "Novo módulo de análise de dados",
      excerpt: "Em breve: ferramenta avançada de Business Intelligence...",
      category: "Atualizações",
      date: "20 Out 2025",
      views: 98,
      status: "draft",
    },
  ];

  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Comunicado criado:\nTítulo: ${formData.title}\nCategoria: ${formData.category}`
    );
    setFormData({ title: "", content: "", category: "Geral" });
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este comunicado?")) {
      alert(`Comunicado ID ${id} excluído`);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Atualizações":
        return "bg-blue-100 text-blue-700";
      case "Eventos":
        return "bg-purple-100 text-purple-700";
      case "Jurídico":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "published"
      ? "bg-green-100 text-green-700"
      : "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
            Gerenciar Comunicados
          </h1>
          <p className="text-muted-foreground">
            Crie e publique comunicados para os usuários
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <PlusCircle className="w-5 h-5 mr-2" />
              Novo Comunicado
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Criar Novo Comunicado</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Título</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Digite o título do comunicado"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="category">Categoria</Label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2"
                >
                  <option value="Geral">Geral</option>
                  <option value="Atualizações">Atualizações</option>
                  <option value="Eventos">Eventos</option>
                  <option value="Jurídico">Jurídico</option>
                </select>
              </div>

              <div>
                <Label htmlFor="content">Conteúdo</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="Digite o conteúdo do comunicado"
                  rows={8}
                  required
                  className="mt-2"
                />
              </div>

              <div className="flex gap-3 justify-end">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancelar
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-primary to-secondary">
                  Publicar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Buscar comunicados..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Announcements Grid */}
      {filteredAnnouncements.length === 0 ? (
        <Card className="border-none shadow-md">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">Nenhum comunicado encontrado</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAnnouncements.map((announcement) => (
            <Card key={announcement.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="mb-2">{announcement.title}</CardTitle>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className={getCategoryColor(announcement.category)}>
                        {announcement.category}
                      </Badge>
                      <Badge className={getStatusColor(announcement.status)}>
                        {announcement.status === "published" ? "Publicado" : "Rascunho"}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(announcement.id)}
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {announcement.excerpt}
                </p>
                <div className="flex items-center justify-between text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{announcement.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{announcement.views} visualizações</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Total de Comunicados</p>
          <p style={{ fontSize: '2rem' }}>{announcements.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Publicados</p>
          <p style={{ fontSize: '2rem' }}>
            {announcements.filter((a) => a.status === "published").length}
          </p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Total de Visualizações</p>
          <p style={{ fontSize: '2rem' }}>
            {announcements.reduce((acc, a) => acc + a.views, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
