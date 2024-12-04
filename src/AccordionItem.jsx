export default function AccordionItem({ language, onClick, }) {
    const { id, title, description } = language
    return (
        <>
            <div onClick={onClick}>
                {title}
            </div>
            <div>
                {description}
            </div>
        </>
    )
}