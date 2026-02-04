import { Target, Eye, Heart, Users } from 'lucide-react';
import aboutImage from '@/assets/about-image.jpg';

const About = () => {
  const values = [
    { icon: Heart, title: 'Excelência no atendimento' },
    { icon: Target, title: 'Disciplina e responsabilidade' },
    { icon: Users, title: 'Respeito e espírito de equipe' },
    { icon: Eye, title: 'Transparência nas relações' },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Sobre nós
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quem somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={aboutImage} 
                alt="Processo de serigrafia - trabalho artesanal com telas e tintas" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma empresa distribuidora de produtos para Serigrafia e Comunicação Visual, 
              com mais de 15 anos de atuação no mercado, atendendo Santa Maria e todo o estado 
              do Rio Grande do Sul.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Desde o início, construímos nossa trajetória com foco na excelência no atendimento 
              e na qualidade dos produtos, trabalhando com marcas reconhecidas e consolidadas nos 
              segmentos Silk e Signs. Já no primeiro ano de operação, alcançamos a marca de 
              atendimento em 32 municípios do interior do RS.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A empresa nasceu do sonho de contribuir ativamente para o desenvolvimento do setor 
              de Comunicação Visual e Serigrafia em Santa Maria e região. Mais do que comercializar 
              produtos, nosso propósito sempre foi oferecer suporte, orientação e parceria, ajudando 
              nossos clientes a evoluírem e fortalecerem seus negócios.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="bg-secondary rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fornecer suprimentos para os segmentos de Comunicação Visual, Serigrafia e Cobertura, 
              garantindo soluções de qualidade aos nossos clientes. Atuar com segurança e credibilidade, 
              valorizando nossos colaboradores e construindo relações comerciais sólidas.
            </p>
          </div>

          <div className="bg-secondary rounded-2xl p-6 border-l-4 border-primary">
            <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              Visão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a melhor empresa do interior do Rio Grande do Sul, destacando-se 
              pela excelência no atendimento, qualidade dos produtos e eficiência logística.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-foreground rounded-3xl p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-background text-center mb-10">
            Nossos valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background/10 backdrop-blur rounded-xl p-6 text-center hover:bg-background/15 transition-colors"
              >
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="text-background font-medium">{value.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
