import React, { useState } from 'react';
import NavBar from '../custom/NavBar';
import Footer from '../custom/Footer';
import ProductCarousel from '../sub-components/ProductCarousel';
import { Plus, Minus } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { ProductTypes, productReviewers, faqs } from './ProductData';

const productDetail = {
  id: 1,
  name: 'Product Name',
  type: 'Varient',
  price: '50',
};

const ProductDetailPage = () => {
  const [collapsibleDetailIndex, setCollapsibleDetailIndex] = useState([
    'details',
    'shipping',
    'returns',
  ]);
  const [collapsibleFaqIndex, setCollapsibleFaqIndex] = useState(-1);

  const openCollapsibleDetail = (value, index) => {
    if (value) {
      setCollapsibleDetailIndex([...collapsibleDetailIndex, index]);
    } else {
      setCollapsibleDetailIndex([
        ...collapsibleDetailIndex.filter(
          (collapsibleDetail) => collapsibleDetail !== index
        ),
      ]);
    }
  };

  return (
    <>
      <NavBar />

      <div className='bg-background-primary'>
        <div className='flex flex-col-reverse md:flex-row py-20 px-16 gap-20 text-white'>
          <div className='flex flex-1 flex-col gap-6'>
            <Breadcrumb>
              <BreadcrumbList className='text-white'>
                <BreadcrumbItem>
                  <BreadcrumbLink>Listing</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>Category</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className='text-white font-normal'>
                    Product Name
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
              {productDetail.name}
            </h2>
            <div className='flex justify-start items-center gap-4'>
              <p className='text-2xl font-bold non-italic'>
                ${productDetail.price}
              </p>

              <img src='src/assets/Divider.png' alt='divider' />

              <div className='flex items-center gap-1'>
                <img src='src/assets/star.png' alt='star' />
                <img src='src/assets/star.png' alt='star' />
                <img src='src/assets/star.png' alt='star' />
                <img src='src/assets/star.png' alt='star' />
                <img src='src/assets/star1.png' alt='star' />
              </div>

              <div>(3.5 stars) • 10 reviews</div>
            </div>

            <p className='text-base non-italic'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
              justo vel turpis aliquam lacinia.
            </p>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <p className='text-base non-italic'>Varient</p>

                <div className='flex flex-wrap gap-4'>
                  <button className='py-2 px-4 border border-white bg-white text-black'>
                    Option one
                  </button>
                  <button className='py-2 px-4 border border-white'>
                    Option two
                  </button>
                  <button className='py-2 px-4 border border-white opacity-25'>
                    Option three
                  </button>
                </div>
              </div>

              <div className='flex gap-2'>
                <div className='flex flex-col gap-2 flex-1'>
                  <label className='text-base non-italic'>Varient</label>

                  <Select>
                    <SelectTrigger className='p-3 bg-transparent rounded-none focus:ring-offset-0'>
                      <SelectValue
                        className='placeholder:text-[#666666] focus:ring-offset-0'
                        placeholder='Select'
                      />
                    </SelectTrigger>
                    <SelectContent className='bg-background-primary rounded-none'>
                      {ProductTypes.map((productType) => (
                        <SelectItem
                          key={productType.id}
                          className='text-white'
                          value={productType.type}
                        >
                          {productType.type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className='flex flex-col gap-2 w-20'>
                  <label className='text-base non-italic'>Varient</label>

                  <Input
                    placeholder='1'
                    className='bg-transparent rounded-none border-black focus-visible:ring-offset-0 focus-visible:ring-transparent'
                  />
                </div>
              </div>

              <div className='flex flex-col pt-2 px-0 pb-0 gap-4'>
                <button className='py-3 px-24 bg-black border border-black'>
                  Add to Cart
                </button>
                <button className='py-3 px-24 bg-transparent border border-black'>
                  Buy Now
                </button>
              </div>

              <p className='text-xs non-italic text-center'>
                Free Shipping Over $50
              </p>
            </div>

            <div className='flex flex-col gap-6'>
              <Collapsible
                open={collapsibleDetailIndex.includes('details')}
                onOpenChange={(val) => openCollapsibleDetail(val, 'details')}
                className='pt-3.5 space-y-2 border-t'
              >
                <div className='flex items-center justify-between space-x-4'>
                  <h4 className='text-sm font-semibold'>Details</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm' className='w-9 p-0'>
                      {collapsibleDetailIndex.includes('details') ? (
                        <Minus className='h-4 w-4' />
                      ) : (
                        <Plus className='h-4 w-4' />
                      )}
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className='space-y-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac justo vel turpis aliquam lacinia.
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={collapsibleDetailIndex.includes('shipping')}
                onOpenChange={(val) => openCollapsibleDetail(val, 'shipping')}
                className='pt-3.5 space-y-2 border-t'
              >
                <div className='flex items-center justify-between space-x-4'>
                  <h4 className='text-sm font-semibold'>Shipping</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm' className='w-9 p-0'>
                      {collapsibleDetailIndex.includes('shipping') ? (
                        <Minus className='h-4 w-4' />
                      ) : (
                        <Plus className='h-4 w-4' />
                      )}
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className='space-y-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac justo vel turpis aliquam lacinia.
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={collapsibleDetailIndex.includes('returns')}
                onOpenChange={(val) => openCollapsibleDetail(val, 'returns')}
                className='pt-3.5 pb-6 space-y-2 border-t border-b'
              >
                <div className='flex items-center justify-between space-x-4'>
                  <h4 className='text-sm font-semibold'>Returns</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm' className='w-9 p-0'>
                      {collapsibleDetailIndex.includes('returns') ? (
                        <Minus className='h-4 w-4' />
                      ) : (
                        <Plus className='h-4 w-4' />
                      )}
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className='space-y-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  ac justo vel turpis aliquam lacinia.
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div className='flex flex-1 flex-col gap-4'>
            <img src='src/assets/Product_2.png' alt='product' />

            <div className='grid grid-cols-5 hidden md:grid gap-4'>
              <img src='src/assets/Product_2.png' alt='product' />
              <img src='src/assets/Product_2.png' alt='product' />
              <img src='src/assets/Product_2.png' alt='product' />
              <img src='src/assets/Product_2.png' alt='product' />
              <img src='src/assets/Product_2.png' alt='product' />
            </div>
          </div>
        </div>

        <div className='flex flex-col py-28 px-16 gap-20 text-white'>
          <div className='flex flex-wrap items-end justify-between'>
            <div className='flex flex-col gap-4'>
              <p className='text-base font-bold non-italic'>Discover</p>
              <h2 className='lg:text-5xl hidden md:block text-4xl font-bold items-center gap-6'>
                Other products offered by the seller
              </h2>
              <h2 className='lg:text-5xl md:hidden text-4xl font-bold items-center gap-6'>
                Products
              </h2>
              <p className='text-lg non-italic'>
                Browse our wide selection of high-quality products.
              </p>
            </div>

            <button className='py-3 px-6 hidden md:block border border-black text-white'>
              View all
            </button>
          </div>

          <ProductCarousel />
        </div>

        <div className='flex flex-col items-center py-28 px-16 gap-20 text-white'>
          <div className='flex flex-col gap-6'>
            <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
              Customer Feedback
            </h2>
            <p className='text-lg non-italic'>
              Read what our customers have to say about our service.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {productReviewers.map((reviewer) => (
              <div
                className='flex flex-col gap-8 p-8 border border-white'
                key={reviewer.id}
              >
                <div className='flex flex-col gap-8'>
                  <div className='flex items-center gap-1'>
                    <img src='src/assets/star.png' alt='star' />
                    <img src='src/assets/star.png' alt='star' />
                    <img src='src/assets/star.png' alt='star' />
                    <img src='src/assets/star.png' alt='star' />
                    <img src='src/assets/star.png' alt='star' />
                  </div>
                  <p className='text-lg non-italic'>{reviewer.description}</p>
                </div>

                <div className='flex items-center gap-4'>
                  <img src='src/assets/Avatar Image.png' alt='avatar' />
                  <div className='flex flex-col'>
                    <p className='text-base font-semibold non-italic'>
                      {reviewer.name}
                    </p>
                    <p className='text-base font-normal non-italic'>
                      {`${reviewer.position}, ${reviewer.company}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 py-28 px-16 gap-20 text-white'>
          <div className='flex flex-col items-start gap-8'>
            <div className='flex flex-col gap-6'>
              <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
                FAQs
              </h2>
              <p className='text-lg font-normal non-italic'>
                Find answers to common questions about buying, selling, and
                listing products.
              </p>
            </div>

            <button className='py-3 px-6 border border-black text-white'>
              Contact
            </button>
          </div>

          <div className='flex flex-col gap-8'>
            {faqs.map((faq, index) => (
              <Collapsible
                key={faq.id}
                open={index === collapsibleFaqIndex}
                onOpenChange={(val) => setCollapsibleFaqIndex(val ? index : -1)}
                className='py-5 px-6 space-y-2 border'
              >
                <div className='flex items-center justify-between space-x-4'>
                  <h4 className='text-lg font-bold'>{faq.title}</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm' className='w-9 p-0'>
                      {index === collapsibleFaqIndex ? <Minus className='h-8 w-8' /> : <Plus className='h-8 w-8' />} 
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className='space-y-2'>
                  {faq.description}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        <div className='flex flex-col py-28 px-16 gap-6 text-white'>
          <div className='flex flex-col gap-6'>
            <h2 className='lg:text-5xl text-4xl font-bold items-center gap-6'>
              Start Selling Your Products Today
            </h2>
            <p className='text-lg font-normal non-italic'>
              Join our platform and reach a wider audience for your products
            </p>
          </div>

          <div className='flex gap-4 pt-4'>
            <button className='py-3 px-6 border bg-black border-black text-black'>
              Sign Up
            </button>

            <button className='py-3 px-6 border border-white text-black'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
