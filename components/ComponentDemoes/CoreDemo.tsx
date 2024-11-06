import { FC } from "react"
import { css } from 'linaria'
import { default as CodeBlock, CodeBlue, CodeOrange, CodeBold, CodePink, CodeGreen, CodeLine, CodePurple, CodeBlockBar, CodeBlockBarButtons, CodeBlockBarTitle } from '../Codeblock/index'

const CoreDemo: FC = () => {
    return <CodeBlock className={css`
        margin-top: -60px;
        flex-grow: 1;
    `}>
        <CodeBlockBar>
            <CodeBlockBarButtons />
            <CodeBlockBarTitle>core.py</CodeBlockBarTitle>
        </CodeBlockBar>
        <CodeLine lineNumber={1}>
            <CodeBlue>@jsonclass</CodeBlue>
        </CodeLine>
        <CodeLine lineNumber={4}>
            <span>
                <CodeOrange>class</CodeOrange> <CodeBold>User</CodeBold>:
            </span>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={5}>
            <span>
                {"id: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>readonly</CodePurple>.<CodeGreen>str</CodeGreen>.<CodePurple>primary</CodePurple>.<CodeGreen>mongoid</CodeGreen>.<CodeGreen>required</CodeGreen>
            </span>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={6}>
            <span>
                {"email: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodeGreen>str</CodeGreen>.<CodePurple>email</CodePurple>.<CodePurple>unique</CodePurple>.<CodeBlue>authidentity</CodeBlue>.<CodeGreen>required</CodeGreen>
            </span>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={7}>
            <span>
                {"password: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>writeonly</CodePurple>.<CodeGreen>str</CodeGreen>.<CodePurple>securepw</CodePurple>.<CodePurple>length</CodePurple>(<CodePink><CodeBold>8</CodeBold></CodePink>, <CodePink><CodeBold>16</CodeBold></CodePink>).<CodeGreen>salt</CodeGreen>.<CodeBlue>authbycheckpw</CodeBlue>.<CodeGreen>required</CodeGreen>
            </span>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={8}>
            <span>
                {"name: "} <CodeGreen>str</CodeGreen> | <CodePink><CodeBold>None</CodeBold></CodePink>
            </span>
        </CodeLine>
    </CodeBlock>
}

export default CoreDemo
