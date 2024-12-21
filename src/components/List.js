import { Component } from '../core/Component';
//реализация листа с донатами
export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';
    this.$titleDonatos = document.createElement('h2');
    this.$titleDonatos.className = 'donates-container__title';
    this.$titleDonatos.textContent = 'Список донатов'
    this.$listContainer = document.createElement('div');
    this.$listContainer.className = "donates-container__donates"


    this.$rootElement.append(this.$titleDonatos);
    this.$rootElement.append(this.$listContainer);
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement)
  }
}



