import { useCartStore } from '@/stores/cartStore';
import { useCheckoutStore } from '@/stores/checkoutStore';

export const GenerateMessage = () => {
  const { name, address } = useCheckoutStore(state => state);
  const { cart } = useCartStore(state => state);

  let orderProducts = [];

  for (let item of cart) {
    orderProducts.push(`${item.quantity} x ${item.product.name}`);
  }

  return `***Dados do Cliente:***
*Nome:* ${name}
*Endereço:* ${address.publicPlace}, ${address.number}, ${address.complement},
${address.district}, ${address.cep}, ${address.city}, ${address.state}.
____________________________
***PEDIDO***
${orderProducts.join('\n')}
`;
};
