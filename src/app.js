import React, { useCallback } from 'react';
import List from './components/list';
import Controls from './components/controls';
import Head from './components/head';
import PageLayout from './components/page-layout';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onAddToCart: useCallback(
      code => {
        store.addItemToCart(code);
      },
      [store],
    ),
  };

  return (
    <PageLayout>
      <Head title="Магазин" />
      <Controls onAdd={callbacks.onAddItem} cart={cart} />
      <List list={list} onClickItemButton={callbacks.onAddToCart} />
    </PageLayout>
  );
}

export default App;
