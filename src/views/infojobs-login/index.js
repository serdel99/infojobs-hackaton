'use client'
import Image from "next/image"
import { Button } from "@/components"
import "./styles.scss"

export const InfojobsLogin = () => {
    return (
        <div className="Infojobs-login">
            <Button>
                Ingresa a tu cuenta de infoJobs
                <Image src="/logo.svg" width={40} height={40} alt="infojobs logo" />
            </Button>
        </div>

    )
}