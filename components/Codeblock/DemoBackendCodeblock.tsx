import { FC } from "react"
import { default as CodeBlock, CodeBlue, CodeOrange, CodeBold, CodePink, CodeGreen, CodeLine, CodePurple, CodeBlockBar, CodeBlockBarButtons, CodeBlockBarTitle } from './index'

const DemoBackendCodeblock: FC = () => {
    return <CodeBlock>
        <CodeBlockBar>
            <CodeBlockBarButtons />
            <CodeBlockBarTitle>app.py</CodeBlockBarTitle>
        </CodeBlockBar>
        <CodeLine lineNumber={1}>
            <CodeBlue>@authorized</CodeBlue>
        </CodeLine>
        <CodeLine lineNumber={2}>
            <CodeBlue>@api</CodeBlue>
        </CodeLine>
        <CodeLine lineNumber={3}>
            <CodeBlue>@pymongo</CodeBlue>
        </CodeLine>
        <CodeLine lineNumber={4}>
            <CodeBlue>@jsonclass</CodeBlue>
        </CodeLine>
        <CodeLine lineNumber={5}>
            <CodeOrange>class</CodeOrange> <CodeBold>User</CodeBold>:
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={6}>
            {"id: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>readonly</CodePurple>.<CodeGreen>str</CodeGreen>.<CodePurple>primary</CodePurple>.<CodeGreen>mongoid</CodeGreen>.<CodeGreen>required</CodeGreen>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={7}>
            {"email: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodeGreen>str</CodeGreen>.<CodePurple>email</CodePurple>.<CodePurple>unique</CodePurple>.<CodeBlue>authidentity</CodeBlue>.<CodeGreen>required</CodeGreen>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={8}>
            {"password: "} <CodeGreen>str</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>writeonly</CodePurple>.<CodeGreen>str</CodeGreen>.<CodePurple>securepw</CodePurple>.<CodePurple>length</CodePurple>(<CodePink><CodeBold>8</CodeBold></CodePink>, <CodePink><CodeBold>16</CodeBold></CodePink>).<CodeGreen>salt</CodeGreen>.<CodeBlue>authbycheckpw</CodeBlue>.<CodeGreen>required</CodeGreen>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={9}>
            {"name: "} <CodeGreen>str</CodeGreen> | <CodePink><CodeBold>None</CodeBold></CodePink>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={10}>
            {"created_at: "} <CodeGreen>datetime</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>readonly</CodePurple>.<CodeGreen>datetime</CodeGreen>.<CodePurple>tscreated</CodePurple>.<CodeGreen>required</CodeGreen>
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={11}>
            {"updated_at: "} <CodeGreen>datetime</CodeGreen> = <CodePink>types</CodePink>.<CodePurple>readonly</CodePurple>.<CodeGreen>datetime</CodeGreen>.<CodePurple>tsupdated</CodePurple>.<CodeGreen>required</CodeGreen>
        </CodeLine>
    </CodeBlock>
}

export default DemoBackendCodeblock
