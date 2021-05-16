import { createContext, useContext, useState } from "react";

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({children}){
  //this is a custom provider(store data and 
  //functionality(updaters) and anyone can access it through the consumer)

  const [cartOpen, setCartOpen] = useState(false);
  
  function toggleCart(){
    setCartOpen(!cartOpen);
  }

  function closeCart(){
    setCartOpen(false);
  }

  function openCart(){
    setCartOpen(true);
  }

return (
  <LocalStateProvider 
    value={{ 
    cartOpen, 
    setCartOpen, 
    toggleCart, 
    closeCart, 
    openCart  }}
    >
      {children}
  </LocalStateProvider>
  );
}

//custom hook for accessing the cart local state 
function useCart(){
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };