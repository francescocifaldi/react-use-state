import style from "./Button.module.css"

export default function Button({ item, callback = () => { }, active }) {
    const { id, title } = item
    return (
        <button onClick={callback} className={`${style.btn} ${active ? style.selected : ''}`}>{title}</button>
    )
}