import { Component } from "../core/Component";

export class Button extends Component{
  setup(props){
    this.$rootElement =document.createElement('button');
    // props.text содержит текст 'Увеличить счетчик'
    this.$rootElement.textContent = props.text;
    // Внутри класса Button при создании кнопки

    // Добавляем класс, переданный через props, к корневому элементу кнопки для применения стилей
    this.$rootElement.classList.add(props.class);
    this.$rootElement.type = props.type;
    this.$rootElement.disabled = true // кнопка всегда закрыта

    // props.onClick содержит метод handleClick() родительского компонента
    this.$rootElement.addEventListener('click', props.onClick);
  }
} 