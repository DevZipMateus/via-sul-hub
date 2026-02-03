import { Instagram, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img
              src="/logo.png"
              alt="Via Sul Suprimentos"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Distribuidora de produtos para Serigrafia e Comunicação Visual com mais de 
              15 anos de experiência no Rio Grande do Sul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Navegação</h4>
            <nav className="space-y-2">
              <a href="#inicio" className="block text-background/70 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-background/70 hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#atuacao" className="block text-background/70 hover:text-primary transition-colors">
                Atuação
              </a>
              <a href="#contato" className="block text-background/70 hover:text-primary transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:financeiro@viasulsuprimentos.com.br"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">financeiro@viasulsuprimentos.com.br</span>
              </a>
              <div className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>BR 287, Nº 1318 LOJA 01</span>
              </div>
              <a
                href="https://www.instagram.com/viasul_suprimentos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @viasul_suprimentos
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Via Sul Suprimentos. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-xs mt-2">
            CNPJ: 10.169.314/0001-76
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
