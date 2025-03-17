import { Component } from "react";
import styles from "./buttonComponent.module.css";

class ClassComponent extends Component {
    state = {
        showText: true,
        changeColor: false,
        count: 0,
        countChangeColor: false
    }
    //component life cycle hooks
    componentDidMount() {
        //runs first time on page load.
        const { showText, changeColor } = this.state
        this.setState({
            showText: !showText,
            changeColor: !changeColor
        });
    }

    componentDidUpdate(prevProps, prevState) {
        //call immediately when there is change in component and provides previous value.
        console.log(this.state.count)
        if (prevState && prevState.count !== this.state.count && this.state.count == 10) {
            this.setState({
                ...this.state,
                countChangeColor: !this.state.countChangeColor
            })
        }
    }

    componentWillUnmount() {
        //calls when component is destroyed or unmounted
    }
    //component life cycle hooks end



    handleClick = () => {
        const { showText, changeColor } = this.state
        this.setState({
            showText: !showText,
            changeColor: !changeColor
        });
    }

    handleCount = () => {
        if (this.state.count < 10) {
            this.setState({
                ...this.state,
                count: this.state.count + 1
            })
        }
    }
    render() {
        const { showText, changeColor, count, countChangeColor } = this.state
        return (
            <div>
                {
                    // showText ? <p style={{color: changeColor ? 'red' : 'black'}}>I am from class.</p> : null
                    <p style={{ color: changeColor ? 'red' : 'black' }}>I am from class.</p>

                }
                <button onClick={this.handleClick} className={styles.button}>Toggle text</button>
                <button onClick={this.handleCount} className={styles.button}>Increase count</button>
                <h3 style={{ color: countChangeColor ? 'blue' : 'black', fontSize: countChangeColor ? '20px' : '14px ' }}>Count is: {count}</h3>
            </div>
        );
    }
}

export default ClassComponent;