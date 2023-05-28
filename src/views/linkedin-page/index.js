"use client"
import { Input, Modal } from "../../components"

export const LinkedinPage = () => {
    const getLinkedinData = (e) => {
        e.preventDefault();
        const page = e.target.page?.value;
        fetch('/api/linkedin', {
            method: "POST", body: JSON.stringify({ url: page })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            }).catch((err) => {
                console.error(err)
            })

    }
    return (
        <Modal handleSubmit={getLinkedinData}>
            <Input label="Linkedin URL" name="page" id="page" />
        </Modal>
    )
}