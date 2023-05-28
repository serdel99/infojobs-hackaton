/* eslint-disable react/jsx-key */
'use client'
import { useState, useEffect } from "react"
import { Card, ExperienceInfo } from "@/components"



export const ExperienceList = () => {

    const [experience, setExperience] = useState([])

    useEffect(() => {
        fetch("/api/linkedin", { method: "POST", body: JSON.stringify({ url: "test-url" }) })
            .then(res => res.json())
            .then(data => { setExperience(data.profile.experience) })
    }, [])

    return (
        <Card title="Experiencia" >
            {
                experience.map(({ title, company, time, description }) => (
                    <ExperienceInfo
                        title={title}
                        company={company}
                        time={time}
                        description={description}
                    />
                ))
            }
        </Card>
    )
}