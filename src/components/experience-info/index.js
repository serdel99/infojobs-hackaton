'use client'
import { useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { Button } from "@/components/button"
import "./styles.scss"


export const ExperienceInfo = ({
    index, title, company, time, description, success, handleAction
}) => {

    return (
        <article className={classNames("experience", {
            [`experience--sucess`]: success,
            [`experience--loading`]: success,
        })}>
            <div className='experience-header'>
                <Image
                    src="/experience-default.svg"
                    width={56}
                    height={56}
                    alt='Sin imagen cargada'
                />
                <div div className='experience-info'>
                    <h1 className='experience__title'> {title}</h1>
                    <h2 className='experience__company'>{company}</h2>
                    <p className='experience__date'> {time}</p>
                </div>
            </div>
            {description &&
                <p className='experience__description' >
                    {description}
                </p>
            }
            <div className='experience-actions'>
                <Button
                    iconLeft={success && (
                        <Image
                            src="/circle-check.svg"
                            width={16}
                            height={16}
                            className="experice-check"
                            alt='Agregregado al cv' />
                    )}
                    outline={!success}
                    success
                    onClick={() => { handleAction(index) }}
                    size="m"
                >
                    Agregar al CV
                </Button>
            </div>
        </article >
    )
}