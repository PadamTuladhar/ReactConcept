import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./style.css";


function ProductList({ product }) {
    // const { product } = props;
    const [flag, setFlag] = useState(true);
    const [count, setCount] = useState(0);
    const [changeColor, setColor] = useState(false);

    function handleToggleText() {
        setFlag(!flag);
    }

    useEffect(() => {
        console.log('run only once on page load')
        setFlag(!flag);

        return () => {
            console.log('component is unmounted') //componentWillUnmount
        }
    }, [])//this will only run on page load once because of no dependency []

    useEffect(() => {
        if (count == 10) setColor(true)
        if (count == 0) setColor(false)
    }, [count]) //count is the dependency for this useEffect function

    function handleIncreseCount() {
        if (count < 10) {
            setCount(count + 1)
        }
        // else {
        //     setColor(true);
        // }
    }

    function handleDecreaseCount() {
        if (count > 0) {
            setCount(count - 1)
        }
        // else {
        //     setColor(false);
        // }
    }
    return (
        <div>
            {/* <ProductItem /> */}
            {
                flag ? <p>Hello</p> : <p>world</p>
            }
            <div style={{ color: changeColor ? 'blue' : 'black' }}> Count is: {count}</div>
            <button className='button' onClick={handleIncreseCount}>Increase count</button><br></br>
            <button className='button' onClick={handleDecreaseCount}>Decrease count</button><br></br>
            <button className="button" onClick={handleToggleText}>Toggle text</button>
            <ul>
                {
                    product.map((item, idx) =>
                        // <li key={idx}>{item}</li>
                        <ProductItem product={item} key={idx} />
                    )
                }
            </ul>
        </div>
    );
}

export default ProductList;