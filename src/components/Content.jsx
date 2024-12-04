import style from "./Content.module.css"

export default function Content({ item }) {
    const { id, title, description } = item
    return (
        <>
            <div className={style.description}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    )
}