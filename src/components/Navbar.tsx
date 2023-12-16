import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import Link from 'next/link'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Cart from './Cart'

const Navbar = () => {
    const user=null

  return (
    <div className='bg-white sticky top-0 inset-x-0 z-50 h-16'>
        <header className='bg-white relative'>
            <MaxWidthWrapper className='fixed-error'>
                <div className='border-b border-gray-200'>
                    <div className='flex items-center h-16'>
                        <div className='flex ml-4 lg:ml-0'>
                            <Link href='/'>
                                <Icons.logo className='h-10 w-10' />
                            </Link>
                        </div>

                        <div className='hidden z-50 lg:block lg:ml-8 lg:self-stretch'>
                            <NavItems />
                        </div>

                        <div className='ml-auto flex items-center'>
                            <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-4'>
                                {
                                    user ? null : <Link 
                                        href={'/sign-in'} 
                                        className={buttonVariants({variant:"ghost"})}
                                        >
                                            Sign in
                                        </Link>
                                }
                                {
                                    user ? null : <span className='w-px h-6 bg-gray-200' aria-hidden='true' />
                                }
                                {
                                    user ? <p></p> : <Link 
                                        href={'/sign-up'}
                                        className={buttonVariants({variant:"ghost"})}
                                    >
                                        Create Account
                                    </Link>
                                }
                                {
                                    user ? <div className='flex lg:ml-6'>
                                        <span className='w-px h-6 bg-gray-200' aria-hidden='true' />
                                    </div> : <span className='w-px h-6 bg-gray-200' aria-hidden='true' />
                                }
                                <div className='ml-4 lg:ml-6 flow-root'>
                                    <Cart />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar