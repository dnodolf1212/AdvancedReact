import CartStyles from './styles/CartStyles';

export default function Cart(){
  const me = useUser();
  if (!me) return null;
  console.log(me);
  
  return(
    <CartStyles open={true}>
      HEY!!!
    </CartStyles>
  ) 
}