import { Printer, Palette, MapPin, Building2, FileImage, Layers } from 'lucide-react';
import marketImage from '@/assets/market-image.jpg';

const MarketSection = () => {
  const segments = [
    { icon: Printer, title: 'Serigrafistas', description: 'Materiais de alta qualidade para impressão' },
    { icon: Palette, title: 'Gráficas', description: 'Suprimentos para produção gráfica' },
    { icon: FileImage, title: 'Comunicadores visuais', description: 'Soluções completas em visual' },
    { icon: Building2, title: 'Sinalização', description: 'Produtos para sinalização profissional' },
    { icon: Layers, title: 'Adesivação', description: 'Materiais para adesivos e revestimentos' },
    { icon: MapPin, title: 'Fachadas e banners', description: 'Lonas e materiais para fachadas' },
  ];

  return (
    <section id="atuacao" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Mercado de atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Segmentos que atendemos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Atuamos no mercado de Comunicação Visual e Serigrafia, oferecendo suprimentos e soluções 
            para profissionais, empresas e indústrias que buscam qualidade, confiabilidade e performance.
          </p>
        </div>

        {/* Image Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
          <img 
            src={marketImage} 
            alt="Ambiente de trabalho de comunicação visual com impressora e materiais coloridos" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="p-8 md:p-12 max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Soluções completas
              </h3>
              <p className="text-white/90">
                Tudo que você precisa para serigrafia e comunicação visual em um só lugar.
              </p>
            </div>
          </div>
        </div>

        {/* Segments Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <segment.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {segment.title}
              </h3>
              <p className="text-muted-foreground">
                {segment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage Area */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8" />
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Área de cobertura
            </h3>
          </div>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Nossa atuação abrange Santa Maria e todo o estado do Rio Grande do Sul, 
            com estrutura logística preparada para garantir agilidade, segurança e 
            eficiência nas entregas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
