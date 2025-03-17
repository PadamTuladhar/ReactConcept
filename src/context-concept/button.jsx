import { useContext } from "react"
import { GlobalContext } from "../context"

export default function ContextButtonComponent() {
    const { theme, setTheme } = useContext(GlobalContext);

    function handleGlobalContext() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    return (
        // <button className="button" onClick={handleGlobalContext}>Click here</button>
        <button className="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Click here</button>
    )
}