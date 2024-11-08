import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import "../Header/index.scss"

export const Header = () => {
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
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
            <button>
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
         </div>
      </header>
   );
};
