import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';


function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);


    return (
        <div className="sr-root">
          <div className="sr-main">
            <header className="sr-header">
              <div className="sr-header__logo"></div>
            </header>
            <div className="sr-payment-summary completed-view">
              <h1>Your payment succeeded</h1>
              <h4>View CheckoutSession response:</h4>
            </div>
            <div className="sr-section completed-view">
              <div className="sr-callout">
                <pre>{JSON.stringify(session, null, 2)}</pre>
              </div>
              </div>
</div>

</div>
    );
};

export default Success;
