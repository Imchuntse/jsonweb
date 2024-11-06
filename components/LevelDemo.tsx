import React, { FC, useEffect, useState } from 'react'
import { css, cx } from 'linaria'
import { styled } from 'linaria/react'
import { singleSpace } from '../styles/theme'
import CodeBlock, { CodeBlockBar, CodeBlockBarButtons, CodeBlockBarTitle, CodeBlue, CodeBold, CodeGreen, CodeLine, CodeOrange, CodePink, CodePurple } from './Codeblock'

const Levels = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: bold;
    line-height: 2;
    margin-top: ${singleSpace * 2}px;
`

const Level = styled.div`
    color: white;
`

const LevelDemo: FC = () => {
    const [level, setLevel] = useState(-1)
    const hidableClassName = css`
        transition: all 1.5s ease-in-out 0s;
    `
    const hideClassName = css`
        opacity: 0;
        transform: translateY(8px);
    `
    const showClassName = css`
        opacity: 1;
    `
    useEffect(() => {
        const handle = setTimeout(() => {
            setLevel(0)
        }, 1000)
        return () => {
            clearTimeout(handle)
        }
    }, [])
    useEffect(() => {
        const handle = setTimeout(() => {
            setLevel(1)
        }, 4500)
        return () => {
            clearTimeout(handle)
        }
    }, [])
    useEffect(() => {
        const handle = setTimeout(() => {
            setLevel(2)
        }, 8000)
        return () => {
            clearTimeout(handle)
        }
    }, [])
    useEffect(() => {
        const handle = setTimeout(() => {
            setLevel(3)
        }, 11500)
        return () => {
            clearTimeout(handle)
        }
    }, [])
    useEffect(() => {
        const handle = setTimeout(() => {
            setLevel(4)
        }, 15000)
        return () => {
            clearTimeout(handle)
        }
    }, [])
    return <div className={css`
        display: flex;
        flex-direction: column;
    `}>
        <CodeBlock>
            <CodeBlockBar>
                <CodeBlockBarButtons />
                <CodeBlockBarTitle>app.py</CodeBlockBarTitle>
            </CodeBlockBar>
            <CodeLine lineNumber={1}>
                <CodeBlue className={cx(hidableClassName, level >= 3 ? showClassName : hideClassName)}>@api</CodeBlue>
            </CodeLine>
            <CodeLine lineNumber={2}>
                <CodeBlue className={cx(hidableClassName, level >= 2 ? showClassName : hideClassName)}>@pymongo</CodeBlue>
            </CodeLine>
            <CodeLine lineNumber={3}>
                <CodeBlue className={cx(hidableClassName, level >= 1 ? showClassName : hideClassName)}>@jsonclass</CodeBlue>
            </CodeLine>
            <CodeLine lineNumber={4}>
                <span className={cx(hidableClassName, level >= 0 ? showClassName : hideClassName)}>
                    <CodeOrange>class</CodeOrange> <CodeBold>User</CodeBold>:
                </span>
            </CodeLine>
            <CodeLine indentLevel={1} lineNumber={5}>
                <span className={cx(hidableClassName, level >= 0 ? showClassName : hideClassName)}>
                    {"id: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>readonly</CodePurple>.<CodeGreen>str</CodeGreen>.<CodePurple>primary</CodePurple>.<CodeGreen>mongoid</CodeGreen>.<CodeGreen>required</CodeGreen>
                </span>
            </CodeLine>
            <CodeLine indentLevel={1} lineNumber={6}>
                <span className={cx(hidableClassName, level >= 0 ? showClassName : hideClassName)}>
                    {"email: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodeGreen>str</CodeGreen>.<CodePurple>email</CodePurple>.<CodePurple>unique</CodePurple>.<CodeBlue>authidentity</CodeBlue>.<CodeGreen>required</CodeGreen>
                </span>
            </CodeLine>
            <CodeLine indentLevel={1} lineNumber={7}>
                <span className={cx(hidableClassName, level >= 0 ? showClassName : hideClassName)}>
                    {"password: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>writeonly</CodePurple>.<CodeGreen>str</CodeGreen>.<CodePurple>securepw</CodePurple>.<CodePurple>length</CodePurple>(<CodePink><CodeBold>8</CodeBold></CodePink>, <CodePink><CodeBold>16</CodeBold></CodePink>).<CodeGreen>salt</CodeGreen>.<CodeBlue>authbycheckpw</CodeBlue>.<CodeGreen>required</CodeGreen>
                </span>
            </CodeLine>
            <CodeLine indentLevel={1} lineNumber={8}>
                <span className={cx(hidableClassName, level >= 0 ? showClassName : hideClassName)}>
                    {"name: "} <CodeGreen>str</CodeGreen> | <CodePink><CodeBold>None</CodeBold></CodePink>
                </span>
            </CodeLine>
        </CodeBlock>
        <Levels>
            <Level className={cx(hidableClassName, level >= 0 ? showClassName : hideClassName)}>Declaratively describe your data model</Level>
            <Level className={cx(hidableClassName, level >= 1 ? showClassName : hideClassName)}>Level 1: Data sanitization, validation & transformation</Level>
            <Level className={cx(hidableClassName, level >= 2 ? showClassName : hideClassName)}>Level 2: ORM</Level>
            <Level className={cx(hidableClassName, level >= 3 ? showClassName : hideClassName)}>Level 3: RESTful API server</Level>
            <Level className={cx(hidableClassName, level >= 4 ? showClassName : hideClassName)}>Frontend API clients are auto-generated</Level>
        </Levels>
    </div>
}

export default LevelDemo
