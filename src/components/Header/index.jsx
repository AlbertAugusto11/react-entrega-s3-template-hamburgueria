import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "../Header/index.scss"

export const Header = ({filterProducts,cartList,setIsOpen}) => {
   const [value, setValue] = useState("");

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className="div__header">
         <form>
               <input
                  type="text"
                  placeholder="Busque seu Lanche"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="button" onClick={() => {
                  filterProducts(value)
                  setInterval(() =>{
                     window.location.reload()
                  },7000) 
               }}>
                 <MdSearch size={21} />
               </button>
            </form>
            <button type="button" onClick={() => setIsOpen(true)}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};
