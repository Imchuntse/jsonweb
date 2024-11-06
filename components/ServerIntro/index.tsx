import React, { FC } from 'react'
import { css } from 'linaria'
import { styled } from 'linaria/react'
import { light, dark, lightBorder, darkBorder, phonePortrait, contentFontStack, titleFontStack, singleSpace } from '../../styles/theme'
import Container from '../Container'
import DemoBackendCodeblock from '../Codeblock/DemoBackendCodeblock'
import DemoTypeScriptClientCodeblock from '../Codeblock/DemoTypeScriptClientCodeblock'
import DemoSwiftClientCodeblock from '../Codeblock/DemoSwiftClientCodeblock'
import DemoKotlinClientCodeblock from '../Codeblock/DemoKotlinClientCodeblock'

const ServerIntroContainer = styled.div`
    display: flex;
    margin-bottom: ${singleSpace * 10}px;
`

const ServerIntroTitle = styled.div`
    font-family: ${titleFontStack};
    font-size: 48px;
    text-align: center;
    font-weight: bold;
    margin-top: ${10 * singleSpace}px;
`

const ServerIntroContent = styled.div`
    font-family: ${titleFontStack};
    font-size: 18px;
    font-weight: 400;
    max-width: 640px;
    line-height: 1.6;
    margin-top: ${singleSpace * 1}px;
    text-align: center;
`

const ServerIntroClient = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: ${singleSpace * 8}px;
`

const ServerIntroClientDemo = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0%;
    padding-right: ${singleSpace * 4}px;
`

const ServerIntroClientContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0%;
`

const ServerIntroClientTitle = styled.div`
    font-family: ${titleFontStack};
    font-size: 36px;
    font-weight: bold;
    text-align: center;
`

const InlineCode = styled.span`
    display: inline-block;
    padding: 0 8px;
    background-color: #effaf4;
    border-radius: 3px;
`

const ServerButton = styled.a`
    display: block;
    text-decoration: none;
    color: white;
    background-color: red;
    padding: 12px 20px;
    margin-top: ${singleSpace * 3}px;
    border-radius: 8px;

    &:hover {
        text-decoration: none;
        color: white;
    }
    &:visited {
        text-decoration: none;
        color: white;
    }
`

const ServerIntro: FC = () => {
    return <ServerIntroContainer>
        <Container className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}>
            <ServerIntroTitle>Declare Your Schema</ServerIntroTitle>
            <ServerIntroContent>
                The schema definition is very neat and descriptive. You get full data validation, data transformation, data sanitization, ORM methods, and a RESTful API set.
            </ServerIntroContent>
            <div className={css`
                height: ${singleSpace * 3}px;
            `} />
            <DemoBackendCodeblock />
            <ServerIntroTitle>Auto-generated Clients</ServerIntroTitle>
            <ServerIntroContent>
                The API client can be directly used in frontend projects. No need to declare data models and request functions. It provides smart completion and type checking.
            </ServerIntroContent>
            <ServerIntroClient>
                <ServerIntroClientDemo>
                    <DemoTypeScriptClientCodeblock />
                </ServerIntroClientDemo>
                <ServerIntroClientContent>
                    <ServerIntroClientTitle>TypeScript</ServerIntroClientTitle>
                    <ServerIntroContent>
                        The auto-generated TypeScript client can be directly installed with <InlineCode>npm</InlineCode> and <InlineCode>git</InlineCode>. It features optional React addons.
                    </ServerIntroContent>
                    <ServerButton>Learn More</ServerButton>
                </ServerIntroClientContent>
            </ServerIntroClient>
            <ServerIntroClient>
                <ServerIntroClientDemo>
                    <DemoSwiftClientCodeblock />
                </ServerIntroClientDemo>
                <ServerIntroClientContent>
                    <ServerIntroClientTitle>Swift</ServerIntroClientTitle>
                    <ServerIntroContent>
                        The auto-generated Swift client can be directly installed with Swift Package Manager. It features optional SwiftUI addons.
                    </ServerIntroContent>
                    <ServerButton>Learn More</ServerButton>
                </ServerIntroClientContent>
            </ServerIntroClient>
            <ServerIntroClient>
                <ServerIntroClientDemo>
                    <DemoKotlinClientCodeblock />
                </ServerIntroClientDemo>
                <ServerIntroClientContent>
                    <ServerIntroClientTitle>Kotlin</ServerIntroClientTitle>
                    <ServerIntroContent>
                        The auto-generated Kotlin client can be directly installed. It features optional Jetpack Compose addons.
                    </ServerIntroContent>
                    <ServerButton>Learn More</ServerButton>
                </ServerIntroClientContent>
            </ServerIntroClient>
        </Container>
    </ServerIntroContainer>
}

export default ServerIntro
