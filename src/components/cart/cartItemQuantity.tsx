import { Cart, useCartStore } from '@/stores/cartStore';
import { Button } from '../ui/button';
import { MinusIcon, PlusIcon } from 'lucide-react';

type Props = {
  cartItem: Cart;
}

const CartItemQuantity = ({ cartItem }: Props) => {
  const { upsertCartItem } = useCartStore(state => state)

  const handlerPlusButton = () => {
    upsertCartItem(cartItem.product, 1);
  }
  const handlerMinusButton = () => {
    upsertCartItem(cartItem.product, -1);
  }

  return (
    <div className='flex items-center gap-2'>


      <Button onClick={handlerMinusButton} variant={'outline'} size='icon' className='size-7'>
        <MinusIcon className='size-4' />
      </Button>

      <div>{cartItem.quantity}</div>
      
      <Button
        onClick={handlerPlusButton}
        variant={'outline'}
        size='icon'
        className='size-7'>
        <PlusIcon className='size-4' />
      </Button>
    </div>
  );
}

export default CartItemQuantity;