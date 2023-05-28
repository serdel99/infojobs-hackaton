/* eslint-disable react/jsx-key */
'use client'
import { useState, useEffect } from "react"
import { Card, ExperienceInfo } from "@/components"



export const ExperienceList = () => {

    const [experience, setExperience] = useState({})

    useEffect(() => {
        fetch("/api/linkedin", { method: "POST", body: JSON.stringify({ url: "test-url" }) })
            .then(res => res.json())
            .then(data => {
                setExperience(data.profile.experience.reduce((acc, item, index) => ({ ...acc, [`experience-${index}`]: { ...item } }), {}))
            })
    }, [])

    const addToInfojobsCV = (experienceKey) => {
        setTimeout(() => {
            setExperience(experience => ({
                ...experience,
                [experienceKey]: { ...experience[experienceKey], success: true }
            }))


        }, 1000);
    }


    return (
        <Card title="Experiencia" >
            {
                Object.entries(experience).map(([key, { title, company, time, description, success }]) => (
                    <ExperienceInfo
                        index={key}
                        title={title}
                        company={company}
                        time={time}
                        description={description}
                        handleAction={addToInfojobsCV}
                        success={success}
                    />
                ))
            }
        </Card>
    )
}