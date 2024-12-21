import './index.css'
import { App } from './components/App';
import { Form } from './components/Form';

// вывод компонента

import { YourComponent } from "./components/YourComponent";

document.addEventListener('DOMContentLoaded' , function(){
  //// Передаем объект, в котором определим свойство heading
  const yourComponent = new YourComponent({ heading: 'Hello World'});
  document.body.appendChild(yourComponent. $rootElement)
})
