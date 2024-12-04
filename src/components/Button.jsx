import style from "./Button.module.css"

export default function Button({ item, callback = () => { } }) {
    const { id, title } = item
    return (
        <button onClick={callback} className={style.btn}>{title}</button>
    )
}