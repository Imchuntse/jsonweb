import { FC } from "react"
import { default as CodeBlock, CodeBlue, CodeOrange, CodeBold, CodePink, CodeGreen, CodeLine, CodePurple, CodeBlockBar, CodeBlockBarButtons, CodeBlockBarTitle } from './index'

const DemoKotlinClientCodeblock: FC = () => {
    return <CodeBlock>
        <CodeBlockBar>
            <CodeBlockBarButtons />
            <CodeBlockBarTitle>api.kt</CodeBlockBarTitle>
        </CodeBlockBar>
        <CodeLine lineNumber={1}>
            <CodeOrange>val</CodeOrange> users = <CodeGreen>api</CodeGreen>.users.<CodeGreen>find</CodeGreen>(
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={2}>
            email=<CodeGreen>contains</CodeGreen>(<CodePink><CodeBold>"@fillmula.com"</CodeBold></CodePink>),
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={3}>
            <CodeGreen>_pageSize</CodeGreen>=<CodePink><CodeBold>30</CodeBold></CodePink>,
        </CodeLine>
        <CodeLine indentLevel={1} lineNumber={4}>
            <CodeGreen>_pageNo</CodeGreen>=<CodePink><CodeBold>1</CodeBold></CodePink>
        </CodeLine>
        <CodeLine lineNumber={5}>
            ).await()
        </CodeLine>
    </CodeBlock>
}

export default DemoKotlinClientCodeblock
