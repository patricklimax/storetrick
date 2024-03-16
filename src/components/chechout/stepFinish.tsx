import { useCheckoutStore } from '@/stores/checkoutStore';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';
import { CheckoutSteps } from '@/types/checkoutSteps';
import { GenerateMessage } from '@/lib/generateMessage';

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

const StepFinish = ({ setStep }: Props) => {
  const { name } = useCheckoutStore(state => state)

  const message = GenerateMessage()

  const linkWhatsapp = `https://wa.me//${process.env.NEXT_PUBLIC_TELWHATSAPP}?text=${encodeURI(message)}`


  return (
    <div className='text-center flex flex-col gap-4'>
      <p>Parabéns pela escolha, <strong>{name}</strong>!</p>
      <p>Confira seus dados e pedido.</p>

      <p className='font-semibold'>
        {message}
      </p>
      <p>
        Para finalizar, envie seu pedido para nosso Whatspp.
        Nosso atendente irá te guiar sobre o andamento do pedido
      </p>
      <div className='flex items-center gap-2 mt-4'>
        <Button
          className='flex-1'
          onClick={() => setStep('address')}
          variant={'outline'}>
          Voltar
        </Button>
        <Button className='flex-1'>
          <Link target='_blank' href={linkWhatsapp}>
            Enviar para Whatsapp
          </Link>
        </Button>

      </div>
      
    </div>
  );
}

export default StepFinish;