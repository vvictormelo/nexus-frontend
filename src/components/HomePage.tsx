import { useState, useEffect } from "react";
import { Target, Eye, Heart, ArrowRight, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");

  const banners = [
    {
      image: "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYxOTMzMDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Conectando empresas ao futuro",
      subtitle: "Plataforma de inteligência e colaboração empresarial",
    },
    {
      image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NjE5MDQyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Tecnologia e inovação",
      subtitle: "Soluções inteligentes para o seu negócio",
    },
    {
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzYxODc4NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Excelência corporativa",
      subtitle: "Transforme dados em decisões estratégicas",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Conectar e empoderar associações empresariais através de tecnologia e inteligência de dados.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência em plataformas colaborativas para o setor empresarial brasileiro.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Inovação, transparência, colaboração e compromisso com resultados sustentáveis.",
    },
  ];

  const news = [
    {
      title: "Nova funcionalidade de relatórios integrados",
      excerpt: "Agora você pode gerar relatórios automáticos com dados consolidados de toda a rede.",
      date: "25 Out 2025",
    },
    {
      title: "Webinar: Tendências do mercado 2026",
      excerpt: "Participe do nosso evento online com especialistas do setor empresarial.",
      date: "20 Out 2025",
    },
    {
      title: "Nexus Hub alcança 500 empresas conectadas",
      excerpt: "Celebramos este marco importante com toda a nossa comunidade de parceiros.",
      date: "15 Out 2025",
    },
  ];

  const partners = [
    { name: "ABRACIT", color: "#0A2E61" },
    { name: "ASSOBENS", color: "#00B8D9" },
    { name: "FIEMG", color: "#E63946" },
    { name: "FIESP", color: "#0A2E61" },
    { name: "SEBRAE", color: "#00B8D9" },
    { name: "CNI", color: "#E63946" },
    { name: "FIESP", color: "#0A2E61" },
    { name: "ABRACIT", color: "#00B8D9" },
  ];

  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  // Auto-scroll partners carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % Math.ceil(partners.length / 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [partners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`E-mail ${email} cadastrado com sucesso!`);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 gradient-overlay" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  {banner.title}
                </h1>
                <p className="text-gray-200 mb-8" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  {banner.subtitle}
                </p>
                <Button
                  onClick={() => onNavigate("institutional")}
                  className="bg-[#E63946] hover:bg-[#d32f3c] text-white px-8 py-6"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center text-white transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quem Somos Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Quem Somos
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              O Nexus Hub é a plataforma que conecta associações e empresas através de tecnologia e inteligência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-[#0A2E61]">{value.title}</h3>
                    <p className="text-[#6B7280]">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comunicados Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Comunicados Recentes
            </h2>
            <p className="text-[#6B7280]">
              Fique por dentro das últimas novidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="text-[#00B8D9] mb-2">{item.date}</div>
                  <h3 className="mb-3 text-[#0A2E61]">{item.title}</h3>
                  <p className="text-[#6B7280] mb-4">{item.excerpt}</p>
                  <Button
                    onClick={() => onNavigate("blog")}
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
        </div>
      </section>

      {/* Parceiros Section */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Nossos Parceiros
            </h2>
            <p className="text-[#6B7280]">
              Empresas e associações que confiam no Nexus Hub
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out gap-8"
                style={{
                  transform: `translateX(-${currentPartnerSlide * 100}%)`,
                }}
              >
                {[...Array(Math.ceil(partners.length / 6))].map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="min-w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
                  >
                    {partners.slice(slideIndex * 6, (slideIndex + 1) * 6).map((partner, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className="flex items-center justify-center p-6 bg-gray-50 rounded-xl transition-all duration-300 group hover:bg-white hover:shadow-lg cursor-pointer"
                      >
                        <span
                          className="grayscale group-hover:grayscale-0 transition-all duration-300"
                          style={{
                            fontFamily: 'Montserrat, sans-serif',
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            color: partner.color,
                          }}
                        >
                          {partner.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentPartnerSlide(
                  (prev) => (prev - 1 + Math.ceil(partners.length / 6)) % Math.ceil(partners.length / 6)
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#0A2E61] transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() =>
                setCurrentPartnerSlide((prev) => (prev + 1) % Math.ceil(partners.length / 6))
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-[#0A2E61] transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(Math.ceil(partners.length / 6))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPartnerSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPartnerSlide
                      ? "bg-[#0A2E61] w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#0A2E61] to-[#00B8D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-white mx-auto mb-6" />
          <h2 className="mb-4 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
            Inscreva-se na Newsletter
          </h2>
          <p className="text-white/90 mb-8">
            Receba as últimas notícias e atualizações diretamente no seu e-mail
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
            />
            <Button
              type="submit"
              className="bg-[#E63946] hover:bg-[#d32f3c] text-white px-8"
            >
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
