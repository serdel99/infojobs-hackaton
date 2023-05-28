import classNames from 'classnames';
import "./styles.scss"

export const Button = ({ children, fullWidth, outline, success, size, iconLeft, ...restButton }) => {
    return (
        <button
            className={classNames("button", {

                [`button--full-width`]: fullWidth,
                [`button--outline`]: outline,
                [`button--success`]: success,
                [`button--size-${size}`]: size
            })}
            {...restButton}
        >
            <span className='button-left-icon'>
                {
                    iconLeft
                }
            </span>

            {children}
        </button>
    )
}