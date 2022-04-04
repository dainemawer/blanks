import Product from '@components/Product/Product'

const Products = ({ products }) => {
    const featured = products.slice(0, 10);
    return (
        <div>
            <h2>Products</h2>
            {featured && featured.map(product => {
                const { sku, gender, totalStock, price, sizes } = product;
                return <Product key={sku} sku={sku} gender={gender} stock={totalStock} price={price} sizes={sizes} />
            })}
        </div>
    )
}

export default Products;