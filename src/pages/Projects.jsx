import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const projects = projectsData;

  return (
    <PageTransition>
      <main style={{ marginTop: '4rem', minHeight: '80vh' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <h1 className="page-title">Projects</h1>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/singularity29/Project-Control-" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Code size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {projects.length === 0 ? (
              <div style={{ color: 'var(--text-secondary)' }}>No projects available yet.</div>
            ) : (
              projects.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                />
              ))
            )}
          </div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Projects;
