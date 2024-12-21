import { Component } from '../core/Component';
import { Button } from './Button';



export class Form extends Component {
  setup(props) {
    // создаем объект-состояние
    this.state = {
      amount: '',
    }
    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';
    this.$labelElement = document.createElement ('label');
    this.$labelElement.className = 'donate-form__input-label';
    this.$labelElement.textContent = 'Введите сумму в $';
    this.$input = document.createElement ('input');
    this.$input.className = 'donate-form__donate-input';
    this.$input.name = 'amount';
    this.$input.type = 'number';
    this.$input.max ='100';
    this.$input.min = '1'; 
    this.$input.required = true;// требоввание

    this.$rootElement.appendChild(this.$labelElement);
    this.$labelElement.appendChild (this.$input);
    
    // привязываем обработчик события на this.$input и  this.$rootElement 
    this.$input.addEventListener('input', this.handleInput.bind(this)); // Обновление состояния 'amount' на основе введенных пользователем данных;

    // Обработчик события 'submit': предотвращает стандартное поведение отправки формы на сервер
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));//Не забывайте про привязку контекста с помощью метода bind(). 

    this.$button = new Button ({
      text: 'Задонатить',
      class: 'donate-form__submit-button',
      type :'submit',
      disabled : true,
      onClick: this.handleClick.bind(this)
    });// Закрепляем контекст
    // При добавлении на страницу также используем $rootElement
    this.$labelElement.appendChild(this.$button.$rootElement)
    };

    handleInput (event){
      // Обработчик ввода: выводит в консоль значение ввода и обновляет состояние 'amount'
      console.log(event.target.value) //целевое значение события
    this.state.amount = event.target.value; // то что ввел пользователь встает в счетчик
    this.state.amount = parseFloat(event.target.value) // преобразование в число
    console.log(this.isValid)

    if(this.state.amount >= 0 && this.state.amount <= 100){
      this.$labelElement.querySelector('button').disabled = false; // иначе кнопка открыта
    }else{
      this.$labelElement.querySelector('button').disabled = true; // иначе кнопка закрыта
    }
    }
    handleSubmit (event){
      // страница не перезагружается
      event.preventDefault();
      // Вызываем onSubmit из props и передаем значение amount из состояния
        this.props.onSubmit(this.state.amount); //ередадим значение this.state.amount, приведенное к числу. 
        console.log("Форма отправлена с суммой", this.state.amount)
  }
    // Эта фукнция вызовется при клике на кнопку внутри компонента Button
    // не реализуется процесс. Кнопка должна быть неклик. при менее 1 и больше 100. Продумать
  handleClick(event){
  const min = 1;
  const max = 100;
  if(this.state.amount < max){
  } else {
    this.state.amount = min;
    console.log(this.state.amount)
  }  
}
// выстраиваем логику тру фалс при передачи числа от 1 до 100
get isValid (){
  const isNumenic = typeof this.state.amount === 'number';
  if(isNumenic && this.state.amount >=1 && this.state.amount <=100)
    {
    console.log("true")
    return true// возврат значения в консоль
  }else{
    console.log("False")
    return false
  }
}

}