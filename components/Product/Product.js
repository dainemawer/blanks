const Product = ({ sku, gender, stock, sizes, price }) => {
    
    return (
        <article id={sku} >
            <h2>Product</h2>
            <span>Category: {gender}</span>
            <span>Stock: {stock}</span>
            <span>Price: {price}</span>
            <ul>
                {sizes.map((size, index) => (
                    <li key={`size-${index}`}>{`${Object.keys(size)}: ${Object.values(size)}`}</li>
                ))}
            </ul>
        </article>
    )
}

export default Product;