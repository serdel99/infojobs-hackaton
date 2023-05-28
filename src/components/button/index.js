import classNames from 'classnames';
import "./styles.scss"

export const Button = ({ children, fullWidth, outline, ...restButton }) => {
    return (
        <button
            className={classNames("button", {
                [`button--full-width`]: fullWidth,
                [`button--outline`]: outline
            })}
            {...restButton}
        >
            {children}
        </button>
    )
}