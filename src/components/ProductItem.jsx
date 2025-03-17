import "./style.css"
function ProductItem({ product, index }) {
    // const flag = false;


    return (
        <div>
            <div style={{ border: "1px solid red", marginBottom: '20px' }} className="productTitle">
                <li key={index}>{product}</li>
            </div>
        </div>
    )
}

export default ProductItem;