import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total : 0,
      donates : []
    }
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';
    this.$heading = document.createElement ('h1');
    this.$heading.className = "total-amount";
    this.$heading.textContent = 'Итого : $';
    
    this.spanElement = document.createElement ('span');
    this.spanElement.textContent = this.state.total;
    this.$heading.append(this.spanElement);
    this.$rootElement.append(this.$heading)
    

    //Создаем экземпляр объекта формы donateForm с обработчиком события onSubmit, связанным с методом onItemCreate текущего объекта
    const donateForm = new Form({
      onSubmit : this.onItemCreate.bind(this) 
    });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;// Сохраняем ссылку на donateList в поле this.donateList
  }
  
  render() {
    document.body.appendChild(this.$rootElement);
  }
  onItemCreate(amount) {
   const item = new ListItem ({
    amount : amount
   })
   this.state.donates.push(item);
   
   console.log('Creating item with amount:', amount)
   this.donateList.addItem(item)
   this.state.total += amount
   this.spanElement.textContent = this.state.total;
  }
}

const myApp = new App();
myApp.setup();
myApp.render();

