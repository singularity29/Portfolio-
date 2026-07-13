import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 100
      }}
    >
      <div style={{ fontWeight: 800, letterSpacing: '2px', fontSize: '1.2rem' }}>SUDIP</div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            fontWeight: isActive ? 600 : 400,
            transition: 'color 0.3s ease'
          })}
        >
          About
        </NavLink>
        <NavLink 
          to="/projects"
          style={({ isActive }) => ({
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            fontWeight: isActive ? 600 : 400,
            transition: 'color 0.3s ease'
          })}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            fontWeight: isActive ? 600 : 400,
            transition: 'color 0.3s ease'
          })}
        >
          Contact Me
        </NavLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;
