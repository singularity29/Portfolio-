import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      style={{
        textAlign: 'center',
        padding: '3rem',
        color: 'var(--text-secondary)',
        fontFamily: 'monospace',
        fontSize: '0.85rem',
        marginTop: 'auto'
      }}
    >
      {/* Footer content removed */}
    </motion.footer>
  );
};

export default Footer;
