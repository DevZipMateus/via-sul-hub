import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com excelência. Entre em contato conosco!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
            <p className="text-muted-foreground text-sm">Via Sul Suprimentos</p>
          </div>

          <div className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
            <a 
              href="mailto:financeiro@viasulsuprimentos.com.br" 
              className="text-primary hover:underline text-sm break-all"
            >
              financeiro@viasulsuprimentos.com.br
            </a>
          </div>

          <div className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
            <p className="text-muted-foreground text-sm">BR 287, Nº 1318 LOJA 01</p>
          </div>

          <div className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-shadow">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Horário</h3>
            <p className="text-muted-foreground text-sm">8h às 12h e 13h30 às 18h</p>
          </div>
        </div>

        {/* Social & CTA */}
        <div className="bg-foreground rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-background mb-2">
              Siga-nos nas redes sociais
            </h3>
            <p className="text-background/70">
              Acompanhe nossas novidades e lançamentos
            </p>
          </div>
          <a
            href="https://www.instagram.com/viasul_suprimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
            @viasul_suprimentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
