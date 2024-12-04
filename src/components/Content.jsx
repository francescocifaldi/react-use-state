export default function Content({ item }) {
    const { id, title, description } = item
    return (
        <>{description}</>
    )
}