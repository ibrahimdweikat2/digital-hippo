"use client"
import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Category =typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category:Category
    handelOpen:()=> void
    isOpen:boolean
    isAnyOpen:boolean
}

const NavItem = ({category ,handelOpen ,isAnyOpen ,isOpen}:NavItemProps) => {
  return (
    <div className='flex'>
        <div className='relative flex items-center'>
            <Button 
                className='gap-1.5'
                onClick={handelOpen}
                variant={isOpen ? 'secondary' : 'ghost'}
            >
                {category?.label}
                <ChevronDown 
                    className={cn("h-4 w-4 transition-all text-muted-foreground",{
                        "-rotate-180" : isOpen
                    })} 
                />
            </Button>
        </div>

        {
            isOpen && (
                <div className={cn("absolute inset-x-0 top-full text-sm text-muted-foreground",{
                    "animate-in fade-in-10 slide-in-from-top-5" : !isAnyOpen
                })}>
                    <div className='absolute shadow inset-0 top-1/2 bg-white' />

                    <div className='relative bg-white'>
                        <div className='mx-auto px-8 max-w-7xl'>
                            <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                                <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                    {
                                        category?.featured.map((item)=>(
                                            <div key={item?.name} className='relative group text-base sm:text-sm'>
                                                <div className='relative aspect-video group-hover:opacity-75 group-hover:cursor-pointer overflow-hidden rounded-lg bg-gray-100'>
                                                    <Image 
                                                        src={item?.imageSrc} 
                                                        alt='Image Product'
                                                        fill
                                                        className='object-cover object-center'
                                                    />
                                                </div>

                                                <Link href={item?.href} className='mt-6 text-gray-900 block font-medium'>{item?.name}</Link>

                                                <p className='mt-1 cursor-pointer' aria-hidden='true'>Shop now</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default NavItem