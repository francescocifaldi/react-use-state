import { useState } from "react"
import style from "./Accordion.module.css"

export default function AccordionItem({ language, onClick, }) {
    const [selected, setSelected] = useState(false)
    const { id, title, description } = language

    function onToggle() {
        setSelected(!selected)
    }

    return (
        <div onClick={onToggle} className={style.accordion}>
            <div className={style.title}>
                {title}
            </div>
            {selected && <div className={style.item}>
                {description}
            </div>}
        </div>
    )
}