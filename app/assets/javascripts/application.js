import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import Routes from './config/routes';
window.$ = jQuery;
window.jQuery = $;
ReactDOM.render(Routes, document.getElementById("root"));
