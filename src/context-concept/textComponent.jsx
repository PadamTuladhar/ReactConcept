import { useContext } from "react"
import { GlobalContext } from "../context"

export default function ContextTextComponent() {
    const { theme } = useContext(GlobalContext);

    return (
        <p style={{ color: theme == 'light' ? 'red' : 'black' }}>Hello React course</p>
    )
}