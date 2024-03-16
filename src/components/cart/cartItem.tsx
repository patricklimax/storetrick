import { Cart } from '@/stores/cartStore';
import CartItemQuantity from './cartItemQuantity';

type Props = {
  item: Cart
}

const CartItem = ({ item }: Props) => {
  return ( 
    <div className='flex items-center gap-3'>
      <div className="w-12 overflow-hidden rounded">
        <img
          src={item.product.image}
          alt={item.product.name}
          className='w-full h-auto object-cover' />
      </div>
      <div className="flex-1">
        <p>{item.product.name}</p>
        <p className='opacity-50'>R$ {item.product.price.toFixed(2)}</p>
      </div>
      <div>
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
   );
}
 
export default CartItem;