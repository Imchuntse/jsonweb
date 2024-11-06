import React, { FC } from 'react'
import { styled } from 'linaria/react'
import { css } from 'linaria'
import { light, dark, lightBorder, darkBorder, codeFontStack, phonePortrait } from '../../styles/theme'
import { phone, exceptPhone } from '../../styles/theme'
import Container from '../Container'
import advantages from '../../data/advantages'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark as darkCode } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


export const AdvantageEntry = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    &:nth-child(2n) {
        flex-direction: row-reverse;
    }
    margin-bottom: 20px;
`

interface AdvantageImageProps {
    src: string
}

const AdvantageImage: FC<AdvantageImageProps> = ({ src }) => {
    return <div className={css`
        height: 300px;
        width: 300px;
        flex-grow: 1;
    `}>
        <img className={css`
            width: 300px;
            height: 300px;
        `} src={src} />
    </div>
}

const AdvantageContent = styled.div`
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const AdvantageTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`

const AdvantageDesc = styled.div`
    margin-top: 8px;
`

const AdvantageCode: FC = ({ children }) => {
    return <SyntaxHighlighter customStyle={{
        marginTop: 20,
        maxHeight: '100%',
        marginBottom: 0,
        overflowY: 'hidden'
    }} language="python" style={darkCode}>
        {children}
    </SyntaxHighlighter>
}

export const AdvantagesContainer = styled.div`
    padding-top: 40px;
    ${light} {
        border-top: 1px solid ${lightBorder};
    }
    ${dark} {
        border-top: 1px solid ${darkBorder};
    }
`


export const Advantages: FC = () => {
    return <AdvantagesContainer>
        <Container className={css`
            display: flex;
            flex-direction: column;
        `}>
            {advantages.map((advantage, idx) => {
                return <AdvantageEntry key={idx}>
                    <AdvantageImage src={advantage.image} />
                    <AdvantageContent>
                        <AdvantageTitle>{advantage.title}</AdvantageTitle>
                        <AdvantageDesc>{advantage.desc}</AdvantageDesc>
                        <AdvantageCode>{advantage.code}</AdvantageCode>
                    </AdvantageContent>
                </AdvantageEntry>
            })}
        </Container>
    </AdvantagesContainer>
}
