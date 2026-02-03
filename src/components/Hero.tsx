import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <div className="animate-fade-in">
            {/* H1 oculto visualmente para SEO e acessibilidade */}
            <h1 className="sr-only">Via Sul - Suprimentos Silk & Signs</h1>
            
            {/* Logo visível no lugar do H1 */}
            <img
              src="/logo.png"
              alt="Via Sul Suprimentos Silk & Signs"
              className="h-24 md:h-32 lg:h-40 w-auto mb-6 mx-auto"
            />
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
              Distribuidora de produtos para Serigrafia e Comunicação Visual. 
              Mais de 15 anos de excelência atendendo Santa Maria e todo o Rio Grande do Sul.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5555999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all duration-300 shadow-red hover:shadow-lg"
              >
                Entre em contato
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 bg-foreground/5 text-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-foreground/10 transition-all duration-300 border border-foreground/10"
              >
                Conheça nossa história
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">RS</div>
                <div className="text-sm text-muted-foreground">Todo o estado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">32+</div>
                <div className="text-sm text-muted-foreground">Municípios atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
