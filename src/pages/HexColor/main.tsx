import hex from "./main.module.css"
import { useEffect } from "react"
import { useState } from "react"

export default function HexColor() {
    const [change, setChange] = useState<boolean>(false);
    const [color, setColor] = useState<string>("#DFF587");
    const [shouldUpdate,setShouldUpdate] = useState<boolean>(true);

    function generateColor() {
        let code = Math.round((Math.random() * 255)).toString(16)
        if (code.length < 2) code = "0".concat(code)
        return code
    }

    useEffect(() => {
        if(!shouldUpdate) return

        const r = generateColor()
        const g = generateColor()
        const b = generateColor()

        const newColor = "#".concat(r, g, b).toUpperCase()
        setColor(newColor)
        setShouldUpdate(false)
    }, [change]);

    return (
        <div onTransitionEnd={()=> setShouldUpdate(true)} className={hex.hex} style={{ backgroundColor: color }}>
            <p className={hex.hex__code}>{color}</p>

            <button className={hex.hex__btn} onClick={() => {
                setChange(!change)
            }}>change color</button>
        </div>
    )
}
