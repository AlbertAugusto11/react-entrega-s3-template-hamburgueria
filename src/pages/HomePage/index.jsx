import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { apiHamburgueria } from "../../service/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState(() => {
      const loadingCartList = localStorage.getItem("@CartList");
      return loadingCartList ? JSON.parse(loadingCartList) : [];   
   });
   const [isOpen,setIsOpen] = useState(false)

   const addCartList = (x) =>{
      let y = [...cartList,x]
      let yId2 = y.map(element => ({
         ...element,id2: crypto.randomUUID()
      }))
      setCartList(yId2)  // usado para remover somente um elemento repetido do carrinho
   }
   const dellCartList = (x) =>{
      let y = cartList.filter(element =>{
         return element.id2 != x.id2
      })
      setCartList(y)
   }
   const dellAllCartList = () =>{
      setCartList([])
   }
   const filterProducts = (item) =>{
      let x = productList.filter(element =>{
         return element.name.toLowerCase().includes(item.toLowerCase())
      })
      if(x.length > 0){
      setProductList(x)
      }else{
         alert("Produto não Encontrado")
         window.location.reload()
      }
   }

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

   useEffect(() =>{
      localStorage.setItem("@CartList", JSON.stringify(cartList))
    },[cartList])

   
   return (
      <>
         <Header filterProducts={filterProducts} cartList={cartList} setIsOpen={setIsOpen}/>
         <main>
            <ProductList productList={productList} addCartList={addCartList}/>
            {isOpen ? <CartModal cartList={cartList} dellCartList={dellCartList} dellAllCartList={dellAllCartList} setIsOpen={setIsOpen}/> : null}
         </main>
      </>
   );
};
