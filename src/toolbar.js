
import Project from './createNewProject';


const createToolBar = () => {
    const toolBar = document.createElement('div');
    toolBar.classList.add('toolbar');
    
    const button = document.createElement('button');
    button.innerHTML = 'Create New Project';

    // keep track of the created form
    let projectForm;

    button.addEventListener('click', () => {
        console.log('Button clicked');

        const project = new Project();
        projectForm = project.createProject();

        const content = document.getElementById('content');
        content.appendChild(projectForm);

    });
    
    toolBar.appendChild(button);

    const content = document.getElementById('content');
    content.appendChild(toolBar);
    
    return toolBar;
}

export default createToolBar;