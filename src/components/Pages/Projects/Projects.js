import uniqid from 'uniqid'
import { projects } from '../../PortfolioData'
import ProjectContainer from './ProjectContainer'
import './Projects.css'

const Projects = () => {
    if (!projects.length) return null

    return (
        <section id='projects' className='section projects'>
            <h1 className='section__title text-center m-5'>Projects</h1>

            <div className='projects__grid'>
                {projects.map((project) => (
                    <ProjectContainer key={uniqid()} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects