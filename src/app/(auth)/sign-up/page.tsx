"use client"

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {z} from 'zod'
import { AuthCredentialValidator, TAuthCredentialValidator } from '@/lib/valedaitor/account-valedator'

const page = () => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {register,handleSubmit,formState:{errors}} = useForm<TAuthCredentialValidator>(
        {
            resolver: zodResolver(AuthCredentialValidator)
        }
    )

    const onSubmits=({email,password}:TAuthCredentialValidator)=>{
        console.log(email,password)
    }
  return <>
    <div className='container relative flex flex-col items-center justify-center pt-20 pb-10 lg:space-x-0'>
        <div className='flex flex-col justify-center mx-auto w-full sm:w-[350px] space-y-6'>
            <div className='flex flex-col items-center space-y-2'>
                <Icons.logo className='w-20 h-20'/>
                <h1 className='text-2xl font-bold'>Create An Account</h1>
                <Link href='/sing-in' className={buttonVariants({
                    variant:'link',
                    className:'gap-1.5'
                })}>
                    Already Have An Account
                    <ArrowRight />
                </Link>
            </div>
            <div className='grid gap-6'>
                <form onSubmit={handleSubmit(onSubmits)}>
                    <div className='grid gap-2'>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='email'>First Name</Label>
                            <Input 
                            {...register('firstName')}
                            className={cn(
                                {
                                    "focus-visible:ring-red-500":errors.firstName
                                }
                            )}
                            placeholder='First Name'
                            />
                        </div>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='email'>Last Name</Label>
                            <Input 
                            {...register('lastName')}
                            className={cn(
                                {
                                    "focus-visible:ring-red-500":errors.lastName
                                }
                            )}
                            placeholder='Last Name'
                            />
                        </div>
                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='email'>Email</Label>
                            <Input 
                            {...register('email')}
                            className={cn(
                                {
                                    "focus-visible:ring-red-500":errors.email
                                }
                            )}
                            placeholder='you@example.com'
                            />
                        </div>

                        <div className='grid gap-1 py-2'>
                            <Label htmlFor='password'>Password</Label>
                            <Input 
                            {...register('password')}
                            className={cn(
                                {
                                    "focus-visible:ring-red-500":errors.password
                                }
                            )}
                            placeholder='password'
                            />
                        </div>

                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </>
}

export default page