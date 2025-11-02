import { useState } from "react";
import { Upload, Trash2, Eye, EyeOff } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Switch } from "./ui/switch";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export function BannersManagementPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    link: "",
  });

  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Conectando empresas ao futuro",
      subtitle: "Plataforma de inteligência e colaboração empresarial",
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYxOTMzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      active: true,
    },
    {
      id: 2,
      title: "Tecnologia e inovação",
      subtitle: "Soluções inteligentes para o seu negócio",
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjE5MDQyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      active: true,
    },
    {
      id: 3,
      title: "Excelência corporativa",
      subtitle: "Transforme dados em decisões estratégicas",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzYxODc4NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      active: false,
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Banner criado:\nTítulo: ${formData.title}\nSubtítulo: ${formData.subtitle}`
    );
    setFormData({ title: "", subtitle: "", link: "" });
    setIsDialogOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm("Tem certeza que deseja excluir este banner?")) {
      setBanners(banners.filter((banner) => banner.id !== id));
      alert(`Banner ID ${id} excluído`);
    }
  };

  const toggleActive = (id: number) => {
    setBanners(
      banners.map((banner) =>
        banner.id === id ? { ...banner, active: !banner.active } : banner
      )
    );
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="mb-2" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1.875rem' }}>
            Gerenciar Banners
          </h1>
          <p className="text-muted-foreground">
            Adicione e gerencie os banners da página inicial
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-primary to-secondary">
              <Upload className="w-5 h-5 mr-2" />
              Novo Banner
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Adicionar Novo Banner</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Título do Banner</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Digite o título"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="subtitle">Subtítulo</Label>
                <Input
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) =>
                    setFormData({ ...formData, subtitle: e.target.value })
                  }
                  placeholder="Digite o subtítulo"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="link">Link (opcional)</Label>
                <Input
                  id="link"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  placeholder="https://..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="image">Imagem do Banner</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground mb-2">
                    Clique para fazer upload ou arraste a imagem
                  </p>
                  <p className="text-muted-foreground">
                    Recomendado: 1920x600px, JPG ou PNG
                  </p>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary"
                >
                  Adicionar Banner
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {banners.map((banner) => (
          <Card key={banner.id} className="border-none shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E61]/80 to-[#00B8D9]/60 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h3 className="mb-2">{banner.title}</h3>
                  <p className="text-gray-200">{banner.subtitle}</p>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Switch
                    checked={banner.active}
                    onCheckedChange={() => toggleActive(banner.id)}
                  />
                  <span className="text-muted-foreground">
                    {banner.active ? "Ativo" : "Inativo"}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    {banner.active ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(banner.id)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Card */}
      <Card className="border-none shadow-md bg-blue-50 dark:bg-blue-950">
        <CardContent className="p-6">
          <h3 className="mb-2 text-primary">Dicas para Banners</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Use imagens de alta qualidade (1920x600px recomendado)</li>
            <li>• Mantenha textos curtos e objetivos</li>
            <li>• Apenas banners ativos serão exibidos no site</li>
            <li>• Reordene os banners arrastando-os para mudar a sequência</li>
          </ul>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Total de Banners</p>
          <p style={{ fontSize: '2rem' }}>{banners.length}</p>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-md">
          <p className="text-muted-foreground mb-2">Banners Ativos</p>
          <p style={{ fontSize: '2rem' }}>
            {banners.filter((b) => b.active).length}
          </p>
        </div>
      </div>
    </div>
  );
}
