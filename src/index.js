// import stylesheets
import './view/css/style.css';

// import modules
import navbar from './view/navbar';
import footer from './view/footer';
import home from './view/tabs/home';
import contact from './view/tabs/contact';
import about from './view/tabs/about';


const main = document.querySelector('#content');

main.insertAdjacentHTML('beforeEnd', navbar);
main.insertAdjacentHTML('beforeEnd', '<div class="activeInfo"></div>');
main.insertAdjacentHTML('beforeEnd', footer);


const activeInfo = document.querySelector('.activeInfo');
activeInfo.innerHTML = home;


const nav = document.querySelector('.navbar');

nav.addEventListener('click', e => {
  if (e.target && e.target.classList.contains('nav-link')) {
    const selectedMenu = e.target.outerText;

    switch (selectedMenu) {
      case 'contact':
        activeInfo.innerHTML = contact;
        break;
      case 'about':
        activeInfo.innerHTML = about;
        break;
      default:
        activeInfo.innerHTML = home;
    }
  }
});
