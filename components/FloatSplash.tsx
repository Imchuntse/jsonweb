import React, { FC } from "react"
import { styled } from 'linaria/react'
import { css } from 'linaria'


export const HeaderSection =  styled.div`
    display: flex;
    text-align: left;
    justify-content: space-between;
    padding: 2rem 1rem;
    max-width: 1200px;
    border-radius: 8px;
    border: 0 solid #e2e8f0;
    margin: 50px 0 -240px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 7%) 0px 20px 53px, rgb(0 0 0 / 4%) 0px 4px 15.9779px, rgb(0 0 0 / 2%) 0px 2px 6.63642px, rgb(0 0 0 / 1%) 0px 0px 2.40026px;
}
`

export const HeaderBlock = styled.div`
    padding: 1.5rem;
    flex-grow: 1;
`

export const BlockTitle = styled.div`
    display: flex;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 18px;
`

export const BlockContent = styled.p`
    padding-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 16px;
    font-stretch: 100%;
    color: #7D8A9F;
` 

interface FloatSplashProps {
    title?: string[]
    content?: string[]
}

const FloatSplash: FC<FloatSplashProps>= ({ title, content, children }) => {
    return  <HeaderSection>
                <HeaderBlock>
                    <BlockTitle>{title![0]}</BlockTitle>
                    <BlockContent>{content![0]}</BlockContent>
                </HeaderBlock>
                <HeaderBlock>
                    <BlockTitle>{title![1]}</BlockTitle>
                    <BlockContent>{content![1]}</BlockContent>
                </HeaderBlock>
                <HeaderBlock>
                    <BlockTitle>{title![2]}</BlockTitle>
                    <BlockContent>{content![2]}</BlockContent>
                </HeaderBlock>
            </HeaderSection>
}

export default FloatSplash