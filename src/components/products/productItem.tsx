'use client'
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useCartStore } from '@/stores/cartStore';

type Props = {
  item: Product
}

const ProductItem = ({ item }: Props) => {
  const { toast } = useToast()

  const { upsertCartItem } = useCartStore(state => state)

  const handlerAddButton = () => {
    //TODO: adicionar item no store
    upsertCartItem(item, 1)

    toast({
      title: 'Produto adicionado ao carrinho!',
      description: item.name,
      action: <ToastAction altText="fechar">Fechar</ToastAction>
    })

  }

  return (
    <div className='flex flex-col gap-2 bg-muted rounded-sm'>
      <div className="w-full h-[170px] rounded-sm overflow-hidden p-2">
        <img src={item.image} alt={item.name} className='w-full h-[170px] object-cover rounded-sm' />
      </div>
      <div className='p-2'>
        <div className="w-full text-center rounded-sm bg-background py-2 font-semibold">
          {item.name}
        </div>
        <div className="w-full h-16px] rounded-sm text-center py-3 text-2xl font-semibold opacity-50">
          R$ {item.price.toFixed(2)}
        </div>
        <div className="w-full h-[48px] rounded-sm">
          <Button
            className='w-full'
            onClick={handlerAddButton}
          >Adicionar</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;