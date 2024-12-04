import style from "./Button.module.css"

export default function Button({ item, callback = () => { } }, className) {
    const { id, title } = item
    return (
        <button onClick={callback} className={`${style.btn} ${className}`}>{title}</button>
    )
}