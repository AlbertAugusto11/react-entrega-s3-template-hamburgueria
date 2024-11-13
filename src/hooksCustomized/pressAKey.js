import { useEffect, useRef } from "react";

export const pressAKey = (key) =>{
    const ref = useRef(null)

    useEffect(() =>{
        const pressAKey = (event) =>{
            if(event.key === key){
                ref.current?.click()
            }
        }
            window.addEventListener("keydown", pressAKey)
        return () =>{
            window.removeEventListener("keydown", pressAKey)
        }
    },[])
    return ref
}