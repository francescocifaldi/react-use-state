import style from "./Button.module.css"

export default function Button({ item }) {
    const { id, title } = item
    return (
        <button className={style.btn}>{title}</button>
    )
}