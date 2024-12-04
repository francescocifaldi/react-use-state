import { useState } from "react"
import AccordionItem from "../../AccordionItem"
import languages from "../../languages.js"

export default function AccordionList() {
    const [selected, setSelected] = useState(false)
    function show() {
        console.log('clicco')
    }
    return (
        <>
            <div>
                accordion list
            </div>

            <ul>
                {languages.map((language) => (
                    <li key={language.id}>
                        <AccordionItem onClick={show} language={language} />
                    </li>
                ))}

            </ul>
        </>
    )
}