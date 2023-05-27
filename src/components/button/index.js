import classNames from 'classnames';
import "./styles.scss"

export const Button = ({ children, fullWidth }) => {
    return (
        <button
            className={classNames("button", {
                [`button--full-width`]: fullWidth
            })}
        >
            {children}
        </button>
    )
}