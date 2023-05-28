'use client'
import Image from "next/image"
import { Button } from "@/components"
import "./styles.scss"

export const InfojobsLogin = () => {
    const handleLogin = () => {
        const urlParam = new URLSearchParams();
        urlParam.append("scope", "CV")
        urlParam.append("client_id", "1887d1046298422094317ee972669da6")
        urlParam.append("response_type", "code")
        urlParam.append("state", "")
        window.location = `https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?${urlParam.toString()}&redirect_uri=https://infojobs-linkedin-profile.vercel.app/infojobs-callback-uri`
    }
    return (
        <div className="Infojobs-login">
            <Button onClick={handleLogin}>
                Ingresa a tu cuenta de infoJobs
                <Image src="/logo.svg" width={40} height={40} alt="infojobs logo" />
            </Button>
        </div>

    )
}