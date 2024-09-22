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
    const pickedItem = this.state.list.find(item => item.code === code);
    if (pickedItem) {
      const { title, price } = pickedItem;
      const newItem = {
        code,
        title,
        price,
        quantity: 1,
        total: price,
      };
      const itemInCart = this.state.cart.items.find(item => item.code === code);
      if (itemInCart) {
        newItem.quantity += itemInCart.quantity;
        newItem.total += itemInCart.total;
        this.deleteItemFromCart(code);
      }
      const newItems = [...this.state.cart.items, newItem];
      let newTotalCartPrice = 0;
      for (let item of newItems) {
        newTotalCartPrice += item.total;
      }

      this.setState({
        ...this.state,
        cart: {
          itemsInCart: newItems.length,
          totalCartPrice: newTotalCartPrice,
          items: newItems,
        },
      });
    }
  }

  deleteItemFromCart(code) {
    const newItems = this.state.cart.items.filter(item => item.code !== code);
    const newItemsInCart = newItems.length;
    const newTotalCartPrice = newItems.reduce((sumTotal, item) => sumTotal + item.total, 0);
    this.setState({
      ...this.state,
      cart: {
        itemsInCart: newItemsInCart,
        totalCartPrice: newTotalCartPrice,
        items: newItems,
      },
    });
  }

  hideCart() {
    this.setState({
      ...this.state,
      cartShowing: false,
    });
  }

  showCart() {
    //console.log('this is firing');
    this.setState({
      ...this.state,
      cartShowing: true,
    });
  }
}

export default Store;
