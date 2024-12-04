import AccordionItem from "../../AccordionItem"
import languages from "../../languages.js"

export default function AccordionList() {
    return (
        <>
            <div>
                accordion list
            </div>

            <ul>
                {languages.map((language) => (
                    <li key={language.id}>
                        <AccordionItem language={language} />
                    </li>
                ))}

            </ul>
            {
                console.log(typeof (languages))
            }

        </>
    )
}