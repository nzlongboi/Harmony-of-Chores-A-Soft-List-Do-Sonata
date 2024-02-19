
import createProjectsPage from './projectsPage';
import clearContent from './clearContent';

const createWelcomePage = () => {
    //get DOM element like body or content div
    const content = document.getElementById('content');
    const welcomePageBody = document.createElement('div');
    welcomePageBody.classList.add('welcome-page-body');
    welcomePageBody.innerText = 'Welcome!';
    

    const button = document.createElement('button');
    button.innerText = 'Projects Page';
    // add event listner to button
    button.addEventListener('click', () => {
        
        console.log('hello');
        clearContent();
        createProjectsPage();
    });

    


    // appending
    welcomePageBody.appendChild(button);
    content.appendChild(welcomePageBody);
}

export default createWelcomePage;


//in the future, we want this welcome page to persist for a few seconds
//before transitioning to the our list of projects
//right now, lets just add a button that we can click that will take us to the projects page 