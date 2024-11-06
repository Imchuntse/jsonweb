import React, { FC } from "react"
import { default as ExploerIcon, SearchIcon, SourceControlIcon, ExtensionIcon, DebugIcon } from './EditorIcons'
import { styled } from 'linaria/react'
import { codeBlockBackGround, codeBlockRadius } from "../styles/theme"


const IconLIst = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${codeBlockBackGround};
    justify-content: space-arround;
    padding: 12px
    border-bottom-left-radius: ${codeBlockRadius}px;
`
const IconWrap = styled.span`
    justify-content: center;
    margin-top:8px;
`

const CodeIcon: FC = () => {
    return <IconLIst>
                <IconWrap><ExploerIcon /></IconWrap>
                <IconWrap><SearchIcon /></IconWrap>
                <IconWrap><SourceControlIcon /></IconWrap>
                <IconWrap><DebugIcon /></IconWrap>
                <IconWrap><ExtensionIcon /></IconWrap>
           </IconLIst>
}

export default CodeIcon