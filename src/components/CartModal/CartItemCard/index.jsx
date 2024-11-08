import { MdDelete } from "react-icons/md";

export const CartItemCard = ({ product,dellCartList }) => {
   return (
      <li>
         <img src={product.img} alt={product.name} />
         <div>
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</p>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => dellCartList(product)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
