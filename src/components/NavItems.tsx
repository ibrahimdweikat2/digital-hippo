"use client"
import React,{useState,useRef,useEffect} from 'react'
import { PRODUCT_CATEGORIES } from '@/config'
import NavItem from './NavItem'
import useOutSideMouse from '@/hooks/useOutSideMouse'
const NavItems = () => {
    const [activeIndex,setActiveIndex]=useState< null | number >(null)
    
    const isAnyOpen= activeIndex !== null
    const ref=useRef<HTMLDivElement | null>(null);
    useOutSideMouse(ref,()=>setActiveIndex(null))

    useEffect(()=>{
        const handler=(e:KeyboardEvent)=>{
            if(e.key === 'Escape'){
                setActiveIndex(null)
            }
        }

        document.addEventListener('keydown', handler)

        return ()=>{
            document.removeEventListener('keydown', handler)
        }
    },[])

  return (
    <div className='flex gap-4 h-full' ref={ref}>
        {
            PRODUCT_CATEGORIES.map((category,i)=>{
                
                const handelOpen=()=>{
                    if(activeIndex === i){
                        setActiveIndex(null)
                    }else {
                        setActiveIndex(i)
                    }
                }

                const isOpen= i === activeIndex

                return <div key={category.label}>
                    <NavItem 
                        category={category}
                        isOpen={isOpen}
                        handelOpen={handelOpen}
                        isAnyOpen={isAnyOpen}
                    />
                </div>
            })
        }
    </div>
  )
}

export default NavItems