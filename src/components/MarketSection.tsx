import { Printer, Palette, MapPin, Building2, FileImage, Layers, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import marketImage from '@/assets/market-image.jpg';
import marketBg from '@/assets/market-bg.jpg';

const MarketSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const segments = [
    { icon: Printer, title: 'Serigrafistas', description: 'Materiais de alta qualidade para impressão' },
    { icon: Palette, title: 'Gráficas', description: 'Suprimentos para produção gráfica' },
    { icon: FileImage, title: 'Comunicadores visuais', description: 'Soluções completas em visual' },
    { icon: Building2, title: 'Sinalização', description: 'Produtos para sinalização profissional' },
    { icon: Layers, title: 'Adesivação', description: 'Materiais para adesivos e revestimentos' },
    { icon: MapPin, title: 'Fachadas e banners', description: 'Lonas e materiais para fachadas' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      ref={ref}
      id="atuacao" 
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Parallax Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${marketBg})`,
          y: backgroundY
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Image Banner */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-xl mb-12 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={marketImage} 
            alt="Ambiente de trabalho de comunicação visual com impressora e materiais coloridos" 
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <motion.div 
              className="p-8 md:p-12 max-w-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Soluções completas
              </h3>
              <p className="text-white/90">
                Tudo que você precisa para serigrafia e comunicação visual em um só lugar.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Vitrine Section */}
        <motion.div 
          className="bg-background rounded-3xl p-8 md:p-12 shadow-xl mb-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div 
              className="w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0"
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring" }}
            >
              <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 text-primary" />
            </motion.div>
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Conheça nossa Vitrine
              </h3>
              <p className="text-muted-foreground text-lg max-w-xl">
                Explore nosso catálogo completo de produtos para serigrafia e comunicação visual. 
                Tintas, solventes, substratos e muito mais!
              </p>
            </div>
            <Link
              to="/vitrine"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-accent transition-all duration-300 shadow-red hover:shadow-lg hover:scale-105 flex-shrink-0"
            >
              Acessar Vitrine
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>


        <motion.div 
          className="bg-gradient-to-r from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-primary-foreground overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated background shapes */}
          <motion.div 
            className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.div 
              className="flex items-center justify-center gap-3 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              <MapPin className="w-8 h-8" />
              <h3 className="font-display text-2xl md:text-3xl font-bold">
                Área de cobertura
              </h3>
            </motion.div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Nossa atuação abrange Santa Maria e todo o estado do Rio Grande do Sul, 
              com estrutura logística preparada para garantir agilidade, segurança e 
              eficiência nas entregas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketSection;
