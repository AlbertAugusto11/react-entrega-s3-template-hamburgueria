import { MdDelete } from "react-icons/md";
import "./index.scss"

export const CartItemCard = ({ product,dellCartList }) => {
   return (
      <li className="li__list">
         <img src={product.img} alt={product.name} />
         <div className="li__div">
            <div>
               <h3>{product.name}</h3>
               <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
            </div>
            <button className="button__cart" aria-label="delete" title="Remover item" onClick={() => dellCartList(product)}>
            <MdDelete size={21} />
            </button>
         </div>
      </li>
   );
};
