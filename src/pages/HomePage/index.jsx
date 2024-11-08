import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { apiHamburgueria } from "../../service/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

   const addCartList = (x) =>{
      setCartList([...cartList,x])
      console.log(cartList)
   }
   const dellCartList = (x) =>{
      let y = cartList.filter(element =>{
         return element.name != x.name
      })
      setCartList(y)
   }
   const dellAllCartList = () =>{
      setCartList([])
   } 

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() =>{
      const loadProducts = async () =>{
         try{
            const {data} = await apiHamburgueria.get("/products")
            setProductList(data)
         }catch(error){
            console.log(error)
         }
      }
      loadProducts()
   },[])


   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} addCartList={addCartList}/>
            <CartModal cartList={cartList} dellCartList={dellCartList} dellAllCartList={dellAllCartList}/>
         </main>
      </>
   );
};
