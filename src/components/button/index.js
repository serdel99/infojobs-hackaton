import classNames from 'classnames';
import "./styles.scss"

export const Button = ({ children, fullWidth, ...restButton }) => {
    return (
        <button
            className={classNames("button", {
                [`button--full-width`]: fullWidth
            })}
            {...restButton}
        >
            {children}
        </button>
    )
}