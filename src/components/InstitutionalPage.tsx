import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function InstitutionalPage() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Nossa missão é conectar e empoderar associações empresariais através de tecnologia e inteligência de dados, proporcionando ferramentas que facilitam a colaboração, comunicação e tomada de decisões estratégicas.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência nacional em plataformas colaborativas para o setor empresarial, reconhecidos pela excelência tecnológica e pelo impacto positivo nas organizações que atendemos.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Inovação contínua, transparência em todas as relações, colaboração genuína entre parceiros e compromisso inabalável com resultados sustentáveis para nossos clientes.",
    },
  ];

  const pillars = [
    {
      icon: Users,
      title: "Conexão",
      description: "Aproximamos empresas e associações, criando uma rede sólida de colaboração.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos sempre a melhor experiência e resultados de alta qualidade.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      description: "Impulsionamos o desenvolvimento sustentável de todos os nossos parceiros.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Banner */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjE5MTcyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Institucional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2E61]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Institucional
            </h1>
            <p className="text-gray-200 max-w-2xl mx-auto" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
              Conheça mais sobre o Nexus Hub e nossa forma de transformar o setor empresarial
            </p>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0A2E61] to-[#00B8D9] flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="mb-4 text-[#0A2E61]">{value.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sobre o Nexus Hub */}
      <section className="py-16 md:py-24 bg-[#F8F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Sobre o Nexus Hub
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md">
              <p className="text-[#1E1E1E] mb-6 leading-relaxed">
                O <strong>Nexus Hub</strong> nasceu da necessidade de criar uma plataforma integrada que pudesse conectar
                associações empresariais, grupos corporativos e seus membros de forma inteligente e eficiente. Em um
                mercado cada vez mais dinâmico, percebemos que as organizações precisavam de ferramentas que fossem além
                da simples comunicação.
              </p>

              <p className="text-[#1E1E1E] mb-6 leading-relaxed">
                Nossa plataforma oferece um ecossistema completo onde empresas podem compartilhar conhecimento, acessar
                documentos estratégicos, participar de comunicações direcionadas e tomar decisões baseadas em dados
                consolidados. Desenvolvemos soluções que facilitam a gestão, promovem a transparência e fortalecem os
                laços entre parceiros de negócio.
              </p>

              <p className="text-[#1E1E1E] mb-6 leading-relaxed">
                Com tecnologia de ponta e foco na experiência do usuário, o Nexus Hub se tornou referência no mercado,
                atendendo centenas de empresas e associações em todo o Brasil. Nosso compromisso é continuar inovando
                e oferecendo as melhores ferramentas para que nossos parceiros alcancem seus objetivos estratégicos.
              </p>

              <p className="text-[#1E1E1E] leading-relaxed">
                Acreditamos no poder da colaboração e na força das redes empresariais. Por isso, investimos
                constantemente em melhorias, ouvimos nossos usuários e adaptamos nossas soluções às necessidades reais
                do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#0A2E61]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
              Nossos Pilares
            </h2>
            <p className="text-[#6B7280]">
              Os fundamentos que guiam nossas ações e decisões
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#00B8D9] transition-all hover:shadow-lg"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B8D9] to-[#E63946] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3 text-[#0A2E61]">{pillar.title}</h3>
                  <p className="text-[#6B7280]">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
