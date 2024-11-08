import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList,addCartList }) => {
   return (
      <ul>
         {productList.map((element) => (
            <ProductCard key={crypto.randomUUID()} element={element} addCartList={addCartList}/>
         ))}
      </ul>
   );
};
