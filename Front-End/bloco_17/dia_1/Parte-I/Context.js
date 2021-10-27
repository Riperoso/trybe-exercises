// criar o context

import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);

//Criar Provider

// <MyContext.Provider value={/* algum valor compartilhado */}>
//  <MyComponent>
//    <MyOtherComponent>
//      ...
//    </MyOtherComponent>
//  <MyComponent>
// </MyContext.Provider>

// Usar Consumer 

function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {
        /* renderiza algo utilizando o valor recebido do contexto */
      }}
    </MyContext.Consumer>
  )
}
