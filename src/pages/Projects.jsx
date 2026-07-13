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
          <h1 style={{ fontSize: '3rem', fontWeight: 800 }}>My Work</h1>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/singularity29/Project-Control-" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Code size={18} />
              GitHub
            </a>
          </div>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {/* Section: My Work */}
          <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>My Work</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {projects.filter(p => p.category === 'my-work' || !p.category).length === 0 ? (
                <div style={{ color: 'var(--text-secondary)' }}>No projects in this section yet.</div>
              ) : (
                projects.filter(p => p.category === 'my-work' || !p.category).map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                  />
                ))
              )}
            </div>
          </section>

          {/* Section: Vibe Coded */}
          <section>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Vibe Coded</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {projects.filter(p => p.category === 'vibe-coded').length === 0 ? (
                <div style={{ color: 'var(--text-secondary)' }}>No projects in this section yet.</div>
              ) : (
                projects.filter(p => p.category === 'vibe-coded').map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                  />
                ))
              )}
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
};

export default Projects;
