
import { ShoppingCartIcon } from 'lucide-react';
import { ThemeToogle } from '@/components/themeToogle';
import { Card } from '@/components/ui/card';
import Logo from '@/components/logo';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/stores/cartStore';
import CartItem from './cart/cartItem';
import CheckouDialog from './chechout/dialog';
import { useState } from 'react';

const Header = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false)


  const { cart } = useCartStore(state => state)

  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price
  }

  return (
    <Card className='px-4 mt-2 mb-4'>
      <header className='flex items-center justify-between py-4'>
        <Logo />
        {/* <ul className='hidden md:flex md:gap-6 md:items-center'>
          <li>Home</li>
          <li>Categorias</li>
          <li>Contato</li>
        </ul> */}
        <div className='flex gap-4 items-center'>
          <ThemeToogle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className='relative' >
                <ShoppingCartIcon className="h-[1.2rem] w-[1.2rem]" />
                {cart.length > 0 &&
                  <div className='absolute size-4 bg-red-600 text-white rounded-full -right-1 -top-1 flex items-center justify-center text-[10px]'>
                    {cart.length}
                  </div>}
              </Button>
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className='flex items-center gap-2'>
                  <p>Carrinho</p>
                  <ShoppingCartIcon className="h-[1.2rem] w-[1.2rem] text-primary" />
                </SheetTitle>
              </SheetHeader>

              <div>
                <p className='mt-4'>Lista de Produtos</p>
                <div className='flex flex-col gap-2 mt-2'>
                  {cart.map(item => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              <Separator className='my-4' />

              <div className='flex justify-between items-center'>
                <div>Subtotal:</div>
                <div>R$ {subtotal.toFixed(2)}</div>
              </div>

              <Separator className='my-4' />

              <div className='text-center'>
                {cart.length <= 0 && <div>Carrinho vazio!</div>}
                {cart.length > 0 &&
                  <Button onClick={() => setCheckoutOpen(true)}>
                    Finalizar compra!
                  </Button>}

              </div>

              <CheckouDialog
                open={checkoutOpen}
                onOpenChange={setCheckoutOpen}
              />
            </SheetContent>
          </Sheet>
        </div>

      </header>
    </Card>
  );
}

export default Header;