import React, { useCallback } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';
import Cart from './components/cart';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onOpenCart: useCallback(() => {
      store.showCart();
    }, [store]),
    onCloseCart: useCallback(() => {
      store.hideCart();
    }, [store]),
    onAddToCart: useCallback(
      code => {
        store.addItemToCart(code);
      },
      [store],
    ),
    onDeleteItemFromCart: useCallback(
      code => {
        store.deleteItemFromCart(code);
      },
      [store],
    ),
  };
  console.log('cart showing:', store.cartShowing);
  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls onOpenCart={callbacks.onOpenCart} cart={cart} />
      <List list={list} onClickItemButton={callbacks.onAddToCart} />
      {store.cartShowing && (
        <Cart
          cart={cart}
          OnDeleteItemFromCart={callbacks.onDeleteItemFromCart}
          isVisible={store.cartShowing}
          OnCloseCart={callbacks.onCloseCart}
        />
      )}
    </PageLayout>
  );
}

export default App;
