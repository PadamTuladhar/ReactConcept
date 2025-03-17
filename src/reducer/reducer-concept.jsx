import { useReducer } from "react"

export default function ReducerConcept() {
    const initialState = {
        showText: false,
        changeText: false
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case "HIDE_TEXT":
                return {
                    ...state,
                    showText: false
                }
                break;
            case "SHOW_TEXT":
                return {
                    ...state,
                    showText: true
                }
                break;
            case "CHANGE_TEXT":
                return {
                    ...state,
                    changeText: !state?.changeText
                }
                break;
            default:
                return state;
        }
    }
    console.log(state)

    return (
        <div>
            {
                state?.showText ? <h1 style={{ color: state?.changeText ? 'brown' : 'orange' }}>Reducer hook example</h1> : null

            }
            <button className="button" onClick={() => dispatch({ type: 'HIDE_TEXT' })}>Hide text</button>
            <button className="button" onClick={() => dispatch({ type: 'SHOW_TEXT' })}>Show text</button>
            <button className="button" onClick={() => dispatch({ type: 'CHANGE_TEXT' })}>change text</button>
        </div>
    )
}