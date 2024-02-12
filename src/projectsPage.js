import clearContent from './clearContent';
import createToolBar from './toolbar';

const createProjectsPage = () => {
    const content = document.getElementById('content');
    const projectsPageBody = document.createElement('div');
    projectsPageBody.classList.add('projects-page-body');
    projectsPageBody.textContent = 'This is the projects page!';

    const toolBar = createToolBar();
    projectsPageBody.appendChild(toolBar);
    content.appendChild(projectsPageBody);


}

export default createProjectsPage;