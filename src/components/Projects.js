import { projects } from '../data'
import Title from './Title'
import Project from './Project'
const Tours = () => {
    return (
        <section className='section' id='projects'>
            <Title title='featured' subTitle='projects' />

            <div className='section-center featured-center'>
                {projects.map((project) => {
                    return <Project {...project} key={project.id} />
                })}
            </div>
        </section>
    )
}
export default Tours
