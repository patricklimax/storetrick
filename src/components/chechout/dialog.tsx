'use client'

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from '@/components/ui/progress';
import StepUser from '@/components/chechout/stepUser';
import StepAddress from '@/components/chechout/stepAddress';
import StepFinish from '@/components/chechout/stepFinish';
import { CheckoutSteps } from '@/types/checkoutSteps';



type Props = {
  open: boolean,
  onOpenChange: (open: boolean) => void,
}


const CheckouDialog = ({ open, onOpenChange }: Props) => {
  const [step, setStep] = useState<CheckoutSteps>('user')

  let progressBar = 0
  switch (step) {
    case 'user':
      progressBar = 33;
      break;
    case 'address':
      progressBar = 67;
      break;
    case 'finish':
      progressBar = 100;
      break;
  }


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {step === 'user' && 'Dados pessoais'}
            {step === 'address' && 'Endereço de entrega'}
            {step === 'finish' && 'Enviar pedido pelo Whatsapp'}
          </DialogTitle>

          <DialogDescription className='mt-2'>
            {step === 'user' && 'Etapa 1 de 3'}
            {step === 'address' && 'Etapa 2 de 3'}
            {step === 'finish' && 'Etapa 3 de 3'}

            <p className='text-destructive mt-2 text-xs'>* Campos obrigatórios</p>
          </DialogDescription>
        </DialogHeader>

        <Progress value={progressBar} />

        <div className='flex flex-col gap-2'>
          {step === 'user' &&
            <StepUser setStep={setStep} />
          }
          {step === 'address' &&
            <StepAddress setStep={setStep} />
          }
          {step === 'finish' &&
            <StepFinish setStep={setStep} />
          }
        </div>
      </DialogContent>
    </Dialog>

  );
}

export default CheckouDialog;