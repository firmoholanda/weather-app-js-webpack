// import stylesheets
import './view/css/style.css';

// import modules
import footer from './view/footer';
import home from './view/home';


const main = document.querySelector('#content');

main.insertAdjacentHTML('beforeEnd', '<div class="activeInfo"></div>');
main.insertAdjacentHTML('beforeEnd', footer);


const activeInfo = document.querySelector('.activeInfo');
activeInfo.innerHTML = home;
