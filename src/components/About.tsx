import { Target, Eye, Heart, Users } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-image.jpg';
import aboutBg from '@/assets/about-bg.jpg';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const values = [
    { icon: Heart, title: 'Excelência no atendimento' },
    { icon: Target, title: 'Disciplina e responsabilidade' },
    { icon: Users, title: 'Respeito e espírito de equipe' },
    { icon: Eye, title: 'Transparência nas relações' },
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      ref={ref}
      id="sobre" 
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Parallax Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${aboutBg})`,
          y: backgroundY
        }}
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
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
            Sobre nós
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quem somos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Main Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={aboutImage} 
                alt="Processo de serigrafia - trabalho artesanal com telas e tintas" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-xl -z-10"
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="bg-secondary rounded-2xl p-6 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Missão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fornecer suprimentos para os segmentos de Comunicação Visual, Serigrafia e Cobertura, 
              garantindo soluções de qualidade aos nossos clientes. Atuar com segurança e credibilidade, 
              valorizando nossos colaboradores e construindo relações comerciais sólidas.
            </p>
          </motion.div>

          <motion.div 
            className="bg-secondary rounded-2xl p-6 border-l-4 border-primary hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              Visão
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser reconhecida como a melhor empresa do interior do Rio Grande do Sul, destacando-se 
              pela excelência no atendimento, qualidade dos produtos e eficiência logística.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div 
          className="bg-foreground rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-background text-center mb-10">
            Nossos valores
          </h3>
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-background/10 backdrop-blur rounded-xl p-6 text-center hover:bg-background/20 transition-colors cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                </motion.div>
                <p className="text-background font-medium">{value.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
