"use client"
import { Button } from "../button"
import "./styles.scss"

export const Modal = ({ children, handleSubmit }) => {
    return (
        <div className="modal">
            <form
                className="modal-content"
                onSubmit={handleSubmit}
            >
                <div className="modal__title">
                    My new brand modal
                </div>
                <div className="modal__body">
                    {children}
                </div>
                <div className="modal__footer">
                    <Button fullWidth type="submit">
                        Aceptar
                    </Button>
                </div>
            </form>
        </div>
    )
}