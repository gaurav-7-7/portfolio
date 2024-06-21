import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import config from '../config'
import { motion } from 'framer-motion';
import Skills from '../Skills/Skills';
import ProjectCard from './ProjectCard';
import './projects.css'

const Projects = () => {
  return (
    <Container className="my-5">
      <Row className='skills-row'>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
          >
            <Skills />
          </motion.div>
        </Col>
      </Row>
      <Row className='projects-row'>
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
          >
            <section id="projects" className='project-section'>
              <h1 className="sectionTitle">Projects</h1>
              <div className='projectsContainer'>
                <ProjectCard
                  className='project-card'
                  src={config.projectAssest.JSON.jsonPlayground}
                  projectLink={config.projectAssest.JSON.liveLink}
                  repoLink={config.projectAssest.JSON.repoLink}
                  technologies="React.js Javascript HTML CSS Vercel"
                  h3="JSON Playground"
                  p="Place where you can play with JSON object."
                />
                <ProjectCard
                  className='project-card'
                  src={config.projectAssest.POKEDEX.pokemonfinder}
                  projectLink={config.projectAssest.POKEDEX.liveLink}
                  repoLink={config.projectAssest.POKEDEX.repoLink}
                  technologies="React.js Javascript HTML CSS Vercel"
                  h3="Pokedex"
                  p="Browse and find all you favourite pokemons"
                />
                <ProjectCard
                  className='project-card'
                  src={config.projectAssest.TODO.todoApp}
                  projectLink={config.projectAssest.POKEDEX.liveLink}
                  repoLink={config.projectAssest.POKEDEX.repoLink}
                  technologies="Angular.js Javascript MonogoDB CSS AWS"
                  h3="ToDo APP"
                  p="Log all you tasks and mantain productivity."
                />
              </div>
            </section>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
