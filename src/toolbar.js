
import createNewProject from './createNewProject';
import clearContent from './clearContent';
import clearFromProjectsPage from './clearFromProjectsPage'; 

const createToolBar = () => {
    const content = document.getElementById('content');
    const toolBar = document.createElement('div');
    toolBar.classList.add('toolbar');
    
    const button = document.createElement('button');
    button.innerHTML = 'Create New Project';



    button.addEventListener('click', () => {
        console.log('Button clicked');
        clearFromProjectsPage();
        createNewProject();

    });
    
    toolBar.appendChild(button);

    
    content.appendChild(toolBar);
    
    return toolBar;
}

export default createToolBar;