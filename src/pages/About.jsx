import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 }
    }
  };

  return (
    <PageTransition>
      <main style={{ marginTop: '5rem', minHeight: '80vh' }}>
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={itemVariants}
            className="hero-title"
          >
            Hello, I'm Sudip.
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              padding: '0.6rem 1.2rem',
              borderRadius: '50px',
              border: '1px solid var(--accent)',
              background: 'rgba(107, 33, 168, 0.15)',
              fontSize: '0.85rem',
              marginBottom: '3rem'
            }}
          >
            <span style={{ 
              width: '8px', 
              height: '8px', 
              backgroundColor: '#00ff88', 
              borderRadius: '50%', 
              marginRight: '10px',
              boxShadow: '0 0 12px #00ff88'
            }}></span>
            Open to inquiries
          </motion.div>

          <motion.p 
            variants={itemVariants}
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              marginBottom: '3rem',
              lineHeight: 1.8
            }}
          >
            Hi, I'm Sudip Chakladar. I am a 3rd-year BCA student and an adaptable, fast-learning tech enthusiast. I am passionate about building modern web and mobile applications while actively expanding my knowledge in AI and Web3. Focused on continuous growth, I am working towards a seamless transition into the IT industry by 2029 to build the next generation of decentralized and intelligent technologies.
          </motion.p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: '8rem' }}
        >
          <h2 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '2rem',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1rem'
          }}>
            Tech Stack & Skills
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['C', 'Java', 'HTML / CSS / JS'].map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-badge"
                whileHover={{ scale: 1.05, y: -5, borderColor: 'var(--accent)', boxShadow: '0 5px 15px var(--accent-glow)' }}
                style={{
                  padding: '0.8rem 1.5rem',
                  borderRadius: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'var(--glass-blur)',
                  cursor: 'default',
                  transition: 'border-color 0.3s ease'
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </PageTransition>
  );
};

export default About;
