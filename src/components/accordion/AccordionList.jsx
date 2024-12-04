
import AccordionItem from "../../AccordionItem"
import languages from "../../languages.js"

export default function AccordionList() {

    return (
        <>
            <div>
                accordion list
            </div>

            <div>
                {languages.map((language) => (
                    <div key={language.id}>
                        <AccordionItem language={language} />
                    </div>
                ))}

            </div>
        </>
    )
}