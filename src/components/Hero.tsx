import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBackground from '@/assets/hero-background.jpg';
import logoViaSul from '@/assets/logo-viasul.png';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Parallax Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          y: backgroundY
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          style={{ y: textY, opacity }}
        >
          {/* Content */}
          <div>
            {/* H1 oculto visualmente para SEO e acessibilidade */}
            <h1 className="sr-only">Via Sul - Suprimentos Silk & Signs</h1>
            
            {/* Logo visível no lugar do H1 */}
            <motion.img
              src={logoViaSul}
              alt="Via Sul Suprimentos Silk & Signs"
              className="h-24 md:h-32 lg:h-40 w-auto mb-6 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            <motion.h2 
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Distribuidora de produtos para Serigrafia e Comunicação Visual. 
              Mais de 15 anos de excelência atendendo Santa Maria e todo o Rio Grande do Sul.
            </motion.h2>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://wa.me/5555999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent transition-all duration-300 shadow-red hover:shadow-lg hover:scale-105"
              >
                Entre em contato
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 hover:scale-105"
              >
                Conheça nossa história
              </a>
              <Link
                to="/vitrine"
                className="inline-flex items-center justify-center gap-2 bg-white text-secondary px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <ShoppingBag className="w-5 h-5" />
                Ver Vitrine
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                >
                  15+
                </motion.div>
                <div className="text-sm text-white/80">Anos de experiência</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                >
                  RS
                </motion.div>
                <div className="text-sm text-white/80">Todo o estado</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1, type: "spring" }}
                >
                  32+
                </motion.div>
                <div className="text-sm text-white/80">Municípios atendidos</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
