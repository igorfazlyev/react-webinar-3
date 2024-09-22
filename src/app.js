import React, { useCallback, useState, useEffect } from 'react';
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
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    // Subscribe to store updates
    const unsubscribe = store.subscribe(() => {
      // Update local state when the store changes
      setState(store.getState());
    });

    // Cleanup subscription on component unmount
    return () => {
      unsubscribe();
    };
  }, [store]);

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
  const { list, cart, cartShowing } = state;

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls onOpenCart={callbacks.onOpenCart} cart={cart} />
      <List list={list} onClickItemButton={callbacks.onAddToCart} />
      {cartShowing && (
        <Cart
          cart={cart}
          onDeleteItemFromCart={callbacks.onDeleteItemFromCart}
          isVisible={cartShowing}
          onCloseCart={callbacks.onCloseCart}
        />
      )}
    </PageLayout>
  );
}

export default App;
