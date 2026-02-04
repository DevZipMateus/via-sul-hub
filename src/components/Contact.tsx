import { Mail, Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import contactBg from '@/assets/contact-bg.jpg';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const contactInfo = [
    { icon: Phone, title: 'Telefone', content: 'Via Sul Suprimentos', isLink: false },
    { icon: Mail, title: 'E-mail', content: 'financeiro@viasulsuprimentos.com.br', isLink: true, href: 'mailto:financeiro@viasulsuprimentos.com.br' },
    { icon: MapPin, title: 'Endereço', content: 'BR 287, Nº 1318 LOJA 01', isLink: false },
    { icon: Clock, title: 'Horário', content: '8h às 12h e 13h30 às 18h', isLink: false },
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      ref={ref}
      id="contato" 
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Parallax Background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${contactBg})`,
          y: backgroundY
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
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
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você com excelência. Entre em contato conosco!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-2xl p-6 text-center hover:shadow-card transition-all duration-300 cursor-pointer group"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              {item.isLink ? (
                <a 
                  href={item.href}
                  className="text-primary hover:underline text-sm break-all"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">{item.content}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social & CTA */}
        <motion.div 
          className="bg-foreground rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background */}
          <motion.div 
            className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div 
            className="text-center md:text-left relative z-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-background mb-2">
              Siga-nos nas redes sociais
            </h3>
            <p className="text-background/70">
              Acompanhe nossas novidades e lançamentos
            </p>
          </motion.div>
          <motion.a
            href="https://www.instagram.com/viasul_suprimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-300 relative z-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-6 h-6" />
            @viasul_suprimentos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
