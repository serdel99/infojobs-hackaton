"use client"
import { Input, Modal, Button } from "../../components"

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
            <Button onClick={() => {

                const urlParam = new URLSearchParams();
                urlParam.append("scope", "CV")
                urlParam.append("client_id", "1887d1046298422094317ee972669da6")
                urlParam.append("redirect_uri", "https://infojobs-linkedin-profile.vercel.app/")
                urlParam.append("response_type", "code")
                urlParam.append("state", "")
                window.location = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?${urlParam.toString()}`
            }} >Login Linkedin</Button>
            {/* <Input label="Linkedin URL" name="page" id="page" /> */}
        </Modal>
    )
}