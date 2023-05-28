import "./styles.scss"

export const Card = ({ children, title }) => {
    return (
        <div className="card">
            <header className="card__header">
                {title}
            </header>
            <div className="card__body">
                {children}
            </div>
        </div>
    )
}