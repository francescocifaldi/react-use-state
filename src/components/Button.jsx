export default function Button({ item }) {
    const { id, title } = item
    return (
        <button>{title}</button>
    )
}