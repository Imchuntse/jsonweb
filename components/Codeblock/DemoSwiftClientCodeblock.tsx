import { FC } from "react"
import { default as CodeBlock, CodeBlue, CodeOrange, CodeBold, CodePink, CodeGreen, CodeLine, CodePurple, CodeBlockBar, CodeBlockBarButtons, CodeBlockBarTitle } from './index'

const DemoSwiftClientCodeblock: FC = () => {
    return <CodeBlock>
        <CodeBlockBar>
            <CodeBlockBarButtons />
            <CodeBlockBarTitle>api.swift</CodeBlockBarTitle>
        </CodeBlockBar>
        <CodeLine>
            <CodeOrange>let</CodeOrange> users = <CodeOrange>try! await</CodeOrange> <CodeGreen>api</CodeGreen>.users.<CodeGreen>find</CodeGreen>(.<CodeGreen>init</CodeGreen>(
        </CodeLine>
        <CodeLine indentLevel={1}>
            email: <CodeGreen>.contains</CodeGreen>(<CodePink><CodeBold>"@fillmula.com"</CodeBold></CodePink>),
        </CodeLine>
        <CodeLine indentLevel={1}>
            <CodeGreen>_pageSize</CodeGreen>: <CodePink><CodeBold>30</CodeBold></CodePink>,
        </CodeLine>
        <CodeLine indentLevel={1}>
            <CodeGreen>_pageNo</CodeGreen>: <CodePink><CodeBold>1</CodeBold></CodePink>
        </CodeLine>
        <CodeLine>
            ))
        </CodeLine>
    </CodeBlock>
}

export default DemoSwiftClientCodeblock
