import { FC } from "react"
import { default as CodeBlock, CodeBlue, CodeOrange, CodeBold, CodePink, CodeGreen, CodeLine, CodePurple, CodeBlockBar, CodeBlockBarButtons, CodeBlockBarTitle } from './index'

const DemoTypeScriptClientCodeblock: FC = () => {
    return <CodeBlock>
        <CodeBlockBar>
            <CodeBlockBarButtons />
            <CodeBlockBarTitle>api.ts</CodeBlockBarTitle>
        </CodeBlockBar>
        <CodeLine>
            <CodeOrange>const</CodeOrange> users = <CodeOrange>await</CodeOrange> <CodeGreen>api</CodeGreen>.users.<CodeGreen>find</CodeGreen>({'{'}
        </CodeLine>
        <CodeLine indentLevel={1}>
            email: {'{'} <CodeGreen>_contains</CodeGreen>: <CodePink><CodeBold>'@fillmula.com'</CodeBold></CodePink> {'}'},
        </CodeLine>
        <CodeLine indentLevel={1}>
            <CodeGreen>_pageSize</CodeGreen>: <CodePink><CodeBold>30</CodeBold></CodePink>,
        </CodeLine>
        <CodeLine indentLevel={1}>
            <CodeGreen>_pageNo</CodeGreen>: <CodePink><CodeBold>1</CodeBold></CodePink>
        </CodeLine>
        <CodeLine>
            {'}'})
        </CodeLine>
    </CodeBlock>
}

export default DemoTypeScriptClientCodeblock
