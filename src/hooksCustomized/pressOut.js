import { useEffect, useRef } from "react";

export const pressOut = (callback) =>{
    const ref  = useRef(null)

    useEffect(() =>{
        const pressOut = (event) =>{
            if(!ref.current?.contains(event.target)){
                if(callback) callback()
            }
        }
        window.addEventListener("mousedown", pressOut)
        return () =>{
            window.removeEventListener("mousedown", pressOut)
        }
    },[])

    return ref
}