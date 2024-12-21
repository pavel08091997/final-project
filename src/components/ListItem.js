import { Component } from '../core/Component';
import { Button } from './Button';
// реализация добавления в список донатов.
export class ListItem extends Component {
  setup(props) {
    this.state = {
      id : Date.now(),
      date : new Date(),
      amount : props.amount
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.setAttribute = this.state.id;// установить определенный атрибут для элемента веб-страницы
    this.$rootElement.innerHTML = `${this.state.date.toLocaleString()} - <b> $ ${this.state.amount}</b>`


    this.$button = document.createElement('button')
    this.$button.className = 'delete-button'
    this.$button.textContent = 'Удалить'
    this.$rootElement.appendChild(this.$button)

    //привязываем к кнопке событие удаление
    this.$button.addEventListener('click', (event)=>
      {
      this.$button.remove();
      this.$rootElement.remove()
    })
  }
  
  get id(){
    return this.state.id
  }

  get amount(){
  return this.state.amount

  }
}

