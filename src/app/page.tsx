'use client'

import Footer from '@/components/footer';
import Header from '@/components/header';
import SkeletonTabs from '@/components/products/skeleton';
import ProductTabs from '@/components/products/productTabs';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen px-2">
      <Header />

      <main className='mb-4'>
        <div>
          <Suspense fallback={<SkeletonTabs />}>
            <ProductTabs />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}
