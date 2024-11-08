export const ProductCard = ({ element,addCartList }) => {
    return(
        <li>
            <img src={element.img} alt={element.name} />
            <div>
                <h3>{element.name}</h3>
                <span>{element.category}</span>
                <span>{element.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button onClick={() => addCartList(element)}>Adicionar</button>
            </div>
        </li>
    )
}