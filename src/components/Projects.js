import React, { useState } from 'react';
import { projects } from '../data'
import Title from './Title'
import Project from './Project'
import Pagination from './Pagination';
const Projects = ({ projectsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // Logic to calculate the projects to display on the current page
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className='section' id='projects'>
            <Title title='featured' subTitle='projects' />

            <div className='section-center featured-center'>
                {currentProjects.map((project) => {
                    // console.log(project.id, project.title)
                    return <Project {...project} key={project.id} />
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(projects.length / projectsPerPage)}
                onPageChange={handlePageChange}
                projectsPerPage={projectsPerPage}
            />
        </section>
    )
}
export default Projects
