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

  /**
   * Add item to cart
   */
  //addItem(code) {
  //  this.setState({
  //    ...this.state,
  //list: [...this.state.list, { code: generateCode(), title: 'Новая запись' }],
  //    cart:[...this.state.cart]
  //  });
  //}

  /**
   * Удаление записи по коду
   * @param code
   */
  //deleteItem(code) {
  //  this.setState({
  //    ...this.state,
  // Новый список, в котором не будет удаляемой записи
  //    list: this.state.list.filter(item => item.code !== code),
  //  });
  //}

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
  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          // Смена выделения и подсчёт
          return {
            ...item,
            selected: !item.selected,
            count: item.selected ? item.count : item.count + 1 || 1,
          };
        }
        // Сброс выделения если выделена
        return item.selected ? { ...item, selected: false } : item;
      }),
    });
  }
}

export default Store;
