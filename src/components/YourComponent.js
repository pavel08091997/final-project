import { Component } from "../core/Component";
import { Button } from "./Button";

export class YourComponent extends Component {
  setup(props) {
    this.state = {
      counter: 0
    }
    // создаем коревой эллемент
    this.$rootElement = document.createElement('div');
    // присвиваем класс для стилизации
    this.$rootElement.className = 'component';

    //создаем ДО эл
    const $heading = document.createElement ('h1');
    // Первоначальный заголовок будет — Hello world: 0
    $heading.textContent = `${props.heading} : ${this.state.counter}`; 
    // Заносим элемент в поле $heading, чтобы потом смогли к нему обратиться
    this.$rootElement.appendChild ($heading);
    this.$heading = $heading;
   
    // Передаем в кнопку входные параметры — текст и callback-функцию,
    // которая должна вызваться при клике на нее
    const incrementButton = new Button ({
      text: 'Увеличить счётчик',
      onClick: this.handleClick.bind(this)
    });// Закрепляем контекст
    // При добавлении на страницу также используем $rootElement
    this.$rootElement.appendChild(incrementButton.$rootElement)
    }
    // Эта фукнция вызовется при клике на кнопку внутри компонента Button
  handleClick(event){
    this.state.counter++;
    
    this.$heading.textContent = `${this.props.heading}: ${this.state.counter}`;
  }
}
