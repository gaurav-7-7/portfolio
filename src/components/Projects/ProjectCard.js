import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

function ProjectCard({ src, projectLink, repoLink, technologies, h3, p }) {
    return (
        <a>
            <div className='card'>
                <img className="hover" src={src} alt={`${h3} logo`} />
                <div className='text-content'>
                    <span className='technologies'>{technologies}</span>
                    <h3>{h3}</h3>
                    <p>{p}</p>
                    <span>
                        <a className='project-link' href={projectLink} target="_blank">
                            <FaGlobe size={20} />
                        </a>
                        <a className='project-repo' href={repoLink} target="_blank">
                            <FaGithub size={20} />
                        </a>
                    </span>
                </div>
            </div>
        </a>

    );
}

export default ProjectCard;