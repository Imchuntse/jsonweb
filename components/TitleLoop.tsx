import React, { FC, useEffect, useState } from 'react'
import { css } from 'linaria'
import { codeBlue, codeGreen, codeOrange, codePink, codePurple, singleSpace } from '../styles/theme'

const TitleLoop: FC = () => {
    const titles = [
        {
            'title': 'ERP system',
            'color': codePink,
        },
        {
            'title': 'SRM system',
            'color': codeBlue
        },
        {
            'title': 'e-commerce platform',
            'color': codeGreen
        },
        {
            'title': 'CMS system',
            'color': codePurple
        },
        {
            'title': 'delivering system',
            'color': codeOrange
        },
    ]
    const [index, setIndex] = useState(-1)
    useEffect(() => {
        const handle = setInterval(() => {
            setIndex((index + 1) % 5)
        }, 4000)
        return () => {
            clearTimeout(handle)
        }
    })
    return <div className={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        font-weight: bold;
        margin-bottom: ${singleSpace}px;
    `}>
        <div>Create a </div>
        <div className={css`
            width: 200px;
            text-align: center;
        `} style={{color: titles[index]?.color}}>
            {titles[index]?.title}
        </div>
        <div> within an hour</div>
    </div>
}

export default TitleLoop
