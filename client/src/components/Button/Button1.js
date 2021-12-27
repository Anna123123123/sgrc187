import './Button.styles.scss'

export const Button = (props) => {
    return (
            <button className={props.styles} onClick={props.onClick} {...props.children}>
                {props.children}
                <p>{props.title}</p>
            </button>
    )
}