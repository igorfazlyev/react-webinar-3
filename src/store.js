import { generateCode } from './utils';

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    };
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  addItemToCart(code) {
    //alert(code);
    const itemInList = this.state.list.find(item => item.code === code);
    const { title, price } = itemInList;
    let quantity = 1;
    let total = itemInList.price;
    if (itemInList) {
      let itemInCart = this.state.cart.find(item => item.code === code);
      if (itemInCart) {
        quantity += itemInCart.quantity;
        total = itemInList.price * quantity;
        this.deleteItemFromCart(code);
      }
      return this.setState({
        ...this.state,
        cart: [...this.state.cart, { code, title, price, quantity, total }],
      });
    }
  }

  deleteItemFromCart(code) {
    this.setState({
      ...this.state,
      cart: this.state.cart.filter(item => item.code !== code),
    });
  }

  hideCart() {
    this.setState({
      ...this.state,
      cartShowing: false,
    });
  }

  showCart() {
    console.log('this is firing');
    this.setState({
      ...this.state,
      cartShowing: true,
    });
  }
}

export default Store;
