import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const copyDiscord = () => {
    navigator.clipboard.writeText("_demonad_");
    alert("Discord ID _demonad_ copied to clipboard! Opening Discord...");
    window.open("https://discordapp.com/users/_demonad_", "_blank");
  };

  return (
    <PageTransition>
      <main style={{ marginTop: '5rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel contact-panel"
        >
          <h1 className="page-title" style={{ marginBottom: '1rem' }}>Let's Connect</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Feel free to reach out for opportunities, collaborations, or just to say hi!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <a href="mailto:sudipchakladar1@gmail.com" className="btn btn-primary" style={{ width: '100%', maxWidth: '300px', padding: '1rem' }}>
              <Mail size={20} />
              Email Me
            </a>
            
            <button onClick={copyDiscord} className="btn" style={{ background: '#5865F2', color: '#fff', width: '100%', maxWidth: '300px', padding: '1rem' }}>
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21 16.5c0 .38-.21.73-.53.91l-7.5 4.33c-.32.19-.68.19-1 0l-7.5-4.33C4.21 17.23 4 16.88 4 16.5V7.5c0-.38.21-.73.53-.91l7.5-4.33c.32-.19.68-.19 1 0l7.5 4.33c.32.18.53.53.53.91v9z"></path></svg>
              Discord: _demonad_
            </button>
          </div>
        </motion.div>
      </main>
    </PageTransition>
  );
};

export default Contact;
