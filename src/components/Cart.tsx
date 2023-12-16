import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ShoppingCart } from 'lucide-react'
import { Separator } from './ui/separator';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import Image from 'next/image';

const Cart = () => {
    const itemCount=0
    const fee=1
    const total=100
  return (
    <Sheet>
        <SheetTrigger className='-m-2 group flex items-center p-2'>
            <ShoppingCart aria-hidden='true' className='h-6 w-6 text-sm font-medium text-gray-500 group-hover:text-gray-700'/>
            <span className='ml-2 text-gray-700 group-hover:text-gray-800'>0</span>
        </SheetTrigger>
        <SheetContent className='w-full flex flex-col pr-2 sm:max-w-lg'>
            <SheetHeader className='space-y-2.5 pr-6'>
                <SheetTitle>
                    Cart (0)
                </SheetTitle>
            </SheetHeader>
            {
                itemCount > 0 ? (
                    <>
                        <div className='w-full flex flex-col pr-6'>
                            cart items
                        </div>
                        <div className='pr-6 space-y-4'>
                            <Separator />
                            <div className='space-y-1.5 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Transaction Fee</span>
                                    <span>{formatPrice(fee,{
                                        currency:"USD",
                                        notation:"compact"
                                    })}</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>{formatPrice(total,{
                                        currency:"USD",
                                        notation:"compact"
                                    })}</span>
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href='/cart' className={buttonVariants({className:'w-full'})}>
                                        Continue To CheckOut
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ):(
                    <div className='flex items-center justify-center flex-col space-y-1 h-full'>
                        <div className='h-60 w-60 relative mb-4 text-muted-foreground'>
                            <Image src={'/hippo-empty-cart.png'} alt='empty product cart' fill/>
                        </div>
                        <div className='font-semibold text-xl'>
                            Your Cart Is Empty
                        </div>
                        <SheetTrigger asChild>
                            <Link href='/product' className={buttonVariants({
                                variant:'link',
                                size:'sm',
                                className:'text-sm text-muted-foreground'
                            })}>Add Product To Your Cart</Link>
                        </SheetTrigger>
                    </div>
                )
            }
        </SheetContent>
    </Sheet>
  )
}

export default Cart