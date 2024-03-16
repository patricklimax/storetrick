import { CheckoutSteps } from '@/types/checkoutSteps';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkoutStore';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const formSchema = z.object({
  publicPlace: z.string().min(2, 'Inserir Logradouro'),
  number: z.string().min(2, 'Inserir número ou SN'),
  complement: z.string().optional(),
  district: z.string().min(2, 'Inserir Bairro'),
  cep: z.string().optional(),
  city: z.string().min(2, 'Inserir Cidade'),
  state: z.string().min(2, 'Inserir Estado'),
})

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

const StepAddress = ({ setStep }: Props) => {
  const { address, setAddress } = useCheckoutStore(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values);
    setStep('finish');
  }

  return (
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-4'>
            <div className='flex-1'>
              <FormField
                control={form.control}
                name='publicPlace'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Logradouro<span className='text-destructive'>*</span></FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
            <div className='w-16'>
              <FormField
                control={form.control}
                name='number'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número<span className='text-destructive'>*</span></FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex-1'>
              <FormField
                control={form.control}
                name='complement'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Complemento</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
            <div className='w-36'>
              <FormField
                control={form.control}
                name='district'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bairro<span className='text-destructive'>*</span></FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
            </div>
          </div>




          <div className='flex gap-4'>
            <FormField
              control={form.control}
              name='cep'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name='city'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cidade<span className='text-destructive'>*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            <FormField
              control={form.control}
              name='state'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estado <span className='text-destructive'>*</span></FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
          </div>

          
        </div>

        <div className='flex items-center gap-2 mt-4'>
          <Button
            className='flex-1'
            onClick={() => setStep('user')}
            variant={'outline'}>
            Voltar
          </Button>
          <Button
            className='flex-1'
            type='submit'
          >
            Próximo
          </Button>

        </div>
      </form>
    </Form>
  );
}

export default StepAddress;