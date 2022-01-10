import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import theme from "./theme/chakraTheme";
import './styles/main.scss';
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);