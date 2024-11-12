import { useRef,useEffect } from "react";
import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import "./index.scss"

export const CartModal = ({cartList,dellCartList,dellAllCartList, setIsOpen }) => {
   const modalRef = useRef(null)

   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   useEffect(() =>{
        const cliqueFora = (event) =>{
            if(!modalRef.current?.contains(event.target)){
                setIsOpen(false)
            }
        }
        window.addEventListener("mousedown", cliqueFora)
        return () =>{
            window.removeEventListener("mousedown", cliqueFora)
        }
   },[])

   useEffect(() =>{
        const apertaEsc = (event) =>{
            if(event.key === "Escape"){
               setIsOpen(false)
            }
        }
            window.addEventListener("keydown", apertaEsc)
        return () =>{
            window.removeEventListener("keydown", apertaEsc)
        }
   },[]) 

   return (
      <div className="modalOverlay" role="dialog">
         <div ref={modalRef} className="modalBox">
            <div className="div__header">
               <h2>Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => setIsOpen(false)}>
                  <MdClose size={24} />
               </button>
            </div>
            <div className="div__list">
               <ul className="div__ul">
                  {cartList.map((product) => (
                     <CartItemCard key={crypto.randomUUID()} product={product} dellCartList={dellCartList}/>
                  ))}
               </ul>
            </div>
            <div className="div__total">
               <div>
                  <span className="total">Total</span>
                  <span className="valor">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button onClick={() => dellAllCartList()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
