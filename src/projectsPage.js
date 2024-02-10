import clearContent from './clearContent';

const createProjectsPage = () => {
    const content = document.getElementById('content');
    const projectsPageBody = document.createElement('div');
    projectsPageBody.classList.add('projects-page-body');
    projectsPageBody.innerText = 'This is the projects page!';



    content.appendChild(projectsPageBody);


}

export default createProjectsPage;