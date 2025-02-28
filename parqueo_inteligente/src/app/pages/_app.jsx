import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;