"use client"
import { useState } from "react"
import { Button } from "../button"
import "./styles.scss"

export const Modal = ({ children }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal__title">
                    My new brand modal
                </div>
                <div className="modal__body">
                    {children}
                </div>
                <div className="modal__footer">
                    <Button fullWidth>
                        Aceptar
                    </Button>
                </div>
            </div>
        </div>
    )
}