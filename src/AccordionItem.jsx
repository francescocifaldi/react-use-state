import { useState } from "react"

export default function AccordionItem({ language, onClick, }) {
    const [selected, setSelected] = useState(false)
    const { id, title, description } = language
    function onToggle() {
        setSelected(!selected)
    }
    return (
        <div onClick={onToggle}>
            <div>
                {title}
            </div>
            {selected && <div>
                {description}
            </div>}
        </div>
    )
}