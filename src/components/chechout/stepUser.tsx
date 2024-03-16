import { CheckoutSteps } from '@/types/checkoutSteps';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/checkoutStore';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>;
}

const formSchema = z.object({
  name: z.string().min(2, 'Preencha seu nome e sobrenome')
})

const StepUser = ({ setStep }: Props) => {
  const { name, setName } = useCheckoutStore(state => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name);
    setStep('address');
  }

  return (
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-3'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qual seu nome e sobrenome?<span className='text-destructive'>*</span></FormLabel>
              <FormControl>
                <Input
                  autoFocus
                  placeholder='Digite seu nome e sobrenome aqui...'
                  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-center mt-4'>
          <Button
            className='flex-1'
            type='submit'>
            Próximo
          </Button>
        </div>

      </form>
    </Form>
  );
}

export default StepUser;