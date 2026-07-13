import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Trash2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="glass-panel"
      style={{ overflow: 'hidden', marginBottom: '3rem' }}
    >
      <div style={{ width: '100%', height: '400px', backgroundColor: '#000', position: 'relative' }}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: true }}
          loop={project.media.length > 1}
          style={{ width: '100%', height: '100%', '--swiper-theme-color': 'var(--accent)' }}
        >
          {project.media.map((item, idx) => (
            <SwiperSlide key={idx} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {item.type === 'video' ? (
                <video 
                  src={item.dataUrl} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(0.85)' }} 
                />
              ) : (
                <img 
                  src={item.dataUrl} 
                  alt={`${project.title} - ${idx}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', transform: 'scale(0.85)' }} 
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.desc}</p>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-outline" 
                style={{ display: 'inline-block', fontSize: '0.9rem', padding: '0.5rem 1rem' }}
              >
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
