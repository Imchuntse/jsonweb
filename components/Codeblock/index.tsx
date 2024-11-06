import React, { FC } from 'react'
import { styled } from 'linaria/react'
import { light, dark, lightBorder, darkBorder, codeFontStack, codeColor, phonePortrait, codeBlue, codePink, codeOrange, codeGreen, singleSpace, codePurple, windowBackgroundColor, windowBoxShadow, contentFontStack, codeBlockRadius } from '../../styles/theme'



const CodeBlock = styled.div`
    background-color: ${windowBackgroundColor};
    border-radius: ${codeBlockRadius}px;
    font-family: ${codeFontStack};
    color: ${codeColor};
    display: flex;
    flex-direction: column;
    padding: ${singleSpace * 2}px;
    line-height: 1.5;
    font-size: 15px;
    overflow-x: scroll;
    box-shadow: ${windowBoxShadow};
`

export const CodeBlockBar = styled.div`
    height: 20px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CodeBlockBarButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
`

export const CodeBlockBarButton = styled.div`
    background-color: #e2e8f0;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    margin-right: 6px;
`

export const CodeBlockBarButtons = () => {
    return <CodeBlockBarButtonsContainer>
        <CodeBlockBarButton />
        <CodeBlockBarButton />
        <CodeBlockBarButton />
    </CodeBlockBarButtonsContainer>
}

export const CodeBlockBarTitle = styled.div`
    color: #cbd5e0;
    font-weight: bold;
    align-self: center;
    justify-self: center;
    position: absolute;
    top: -8px;
    font-family: ${contentFontStack};
`

const CodeLineNo = styled.span`
    display: inline-block;
    width: 28px;
    color: #cbd5e0;
    user-select: none;
    -webkit-user-select: none;
`



interface CodeLineProps {
    indentSpace?: number
    indentLevel?: number
    lineNumber?: number | undefined
    linebreak?: boolean
}


export const CodeLine: FC<CodeLineProps> = ({ indentSpace = 4, indentLevel = 0, children, lineNumber, linebreak = false }) => {
    return  <span style={{whiteSpace: linebreak ? undefined : 'nowrap'}}>
        {lineNumber !== undefined ? <CodeLineNo>{lineNumber}</CodeLineNo> : null}
        {"\u00A0".repeat(indentSpace * indentLevel)}
        {children}
    </span>
}

export const CodeBlue = styled.span`
    color: ${codeBlue};
`

export const CodePink = styled.span`
    color: ${codePink};
`

export const CodeOrange = styled.span`
    color: ${codeOrange};
`

export const CodeGreen = styled.span`
    color: ${codeGreen};
`

export const CodePurple = styled.span`
    color: ${codePurple};
`

export const CodeBold = styled.span`
    font-weight: bold;
`

export default CodeBlock
