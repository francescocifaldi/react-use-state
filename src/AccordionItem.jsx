export default function AccordionItem({ language }) {
    const { id, title } = language
    return (
        <>
            <div>
                {title}
            </div>
        </>
    )
}