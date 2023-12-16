import { RefObject, useEffect } from "react"


const useOutSideMouse =<T extends HTMLElement = HTMLElement>(
    ref:RefObject<T>,
    calBackFun:(e:Event)=>void
)=>{
    useEffect(()=>{
        const handler=(e:Event)=>{
            const event=ref?.current

            if(!event || event.contains((e?.target as Node) || null)){
                return
            }

            calBackFun(e)
        }

        document.addEventListener("mousedown",handler)
        document.addEventListener("touchstart",handler)

        return ()=>{
            document.removeEventListener("mousedown",handler)
            document.removeEventListener("touchstart",handler)
        }
    },[ref,calBackFun])
}

export default useOutSideMouse