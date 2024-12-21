export class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.$rootElement = null;
    if (this.constructor === Component) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.setup(props);// реквизит
  }

  setup() {
    throw new Error("Method 'setup' must be implemented by derived classes");// Метод «setup» должен быть реализован производными классами.
  }
}
