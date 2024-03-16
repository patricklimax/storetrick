import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllProducts } from '@/services/product';
import { Product } from '@/types/product';
import ProductItem from './productItem';
import { Separator } from '../ui/separator';

type Tab = {
  title: string,
  value: string,
  products: Product[];
}
const ProductTabs = async () => {
  const products = await getAllProducts();

  const tabs: Tab[] = [
    {
      title: "Black",
      value: 'black',
      products: products.filter(item => item.category === "black")
    },
    {
      title: "Blue",
      value: 'blue',
      products: products.filter(item => item.category === "blue"),
    },
    {
      title: "Gray",
      value: 'gray',
      products: products.filter(item => item.category === "gray"),
    },
    {
      title: "Green",
      value: 'green',
      products: products.filter(item => item.category === "green"),
    },
    {
      title: "Orange",
      value: 'orange',
      products: products.filter(item => item.category === "orange"),
    },
    {
      title: "Pink",
      value: 'pink',
      products: products.filter(item => item.category === 'pink'),
    },
    {
      title: "Red",
      value: 'red',
      products: products.filter(item => item.category === "red"),
    },
    {
      title: "Violet",
      value: 'violet',
      products: products.filter(item => item.category === "violet"),
    },
    {
      title: "White",
      value: 'white',
      products: products.filter(item => item.category === "white"),
    },
    {
      title: "Yellow",
      value: 'yellow',
      products: products.filter(item => item.category === "yellow"),
    },
  ]

  return (
    <div className='max-w-full mb-4'>
      <Tabs defaultValue="black" className='max-w-full'>
        <TabsList className='grid grid-cols-5 h-auto gap-2'>
          {tabs.map(tabTrigguer => (
            <TabsTrigger key={tabTrigguer.value} value={tabTrigguer.value} className='border border-muted-foreground'>
              {tabTrigguer.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map(tabContent => (
          <TabsContent key={tabContent.value} value={tabContent.value} className='mt-4'>
            {tabContent.title.length > 0 &&
              <div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                {tabContent.products.map(product => (
                  <ProductItem key={product.id} item={product} />
                ))}
              </div>
            }
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ProductTabs;