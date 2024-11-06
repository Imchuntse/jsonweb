import React, { FC } from 'react'
import { styled } from 'linaria/react'
import { light, dark, lightBorder, darkBorder, codeFontStack, phonePortrait, codeBlue, codeBlockRadius, codeBlockBackGround } from '../styles/theme'
import Container from './Container'
import examples from '../data/examples'
import  { default as CodeBlock, CodeBlockBarButtons, CodeBlockBar, CodeBlue, CodeOrange, CodeBold, CodeLine, CodeGreen, CodePink, CodePurple, CodeBlockBarTitle, CodeBlockBarButton, CodeBlockBarButtonsContainer } from './Codeblock'
import { css } from 'linaria'
import CodeIcon from './CodeIcon'


const ExampleRegion = styled.div`
    padding-top: 40px;
    ${light} {
        border-top: 1px solid ${lightBorder};
    }
    ${dark} {
        border-top: 1px solid ${darkBorder};
    }
`

const ExampleSectionTitle = styled.div`
    font-weight: bold;
    text-align: center;
    font-size: 3rem;
    font-family: Barlow, system-ui, Arial, sans-serif;
`

const ExampleEntry = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    line-height: 1.5;
    width: 100%;
    margin-bottom: 20px;
`

const ExampleDetail = styled.div`
    display: flex;
    flex-direction: row;
    ${phonePortrait} {
        flex-direction: column-reverse;
    }
`

const ExampleDesc = styled.pre`
    border-bottom-right-radius: ${codeBlockRadius}px;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
    flex-shrink: 3;
    overflow: scroll;
    overflow-y: hidden;  
    background-color: #eee;
    margin: 0;
    ${phonePortrait} {
        width: 100%;
        padding-right: 0;
    }
`

const ExampleTitle = styled.div`
    font-size: 24px;
    font-weight: bold;
`

const ExampleSubtitle = styled.div`
    font-size: 16px;
`

const ExampleFeatures = styled.div`
    height: 100%;
    width: 100%;
`

const ExampleFeature = styled.span`
   
`

const ExampleCode = styled.pre`
    font-family: ${codeFontStack};
    background-color: #eee;
    overflow: scroll;
    display: flex;
    flex-shrink: 1;
    margin: 0;
    flex-direction: row;
    ${phonePortrait} {
        width: 100%;
    }
`


const Examples: FC = () => {
    const decoratorPattern = new RegExp(/^@.*/)
    const classNamePattern = new RegExp(/^class.*/)
    const pinkWords = new RegExp(/types|list|linkto|linkedby|presentwith|validate/)
    const pinkBoldWords = new RegExp(/\d+|None/)
    const greenWords = new RegExp(/str|mongoid|required|datetime|trim|presentwithout|enum|Optional|transform|compare/)
    const purpleWords = new RegExp(/writeonly|readonly|primary|securepw|length|tscreated|tsupdated|unique|writenonnull|writeonce|temp/)
    const blueWords = new RegExp(/authidentity|authbycheckpw|listof|objof|Singer|Song|Comment|validate_auth_code|check_user_calling_code|'parent'|'singers'|Gender|'phone_number'|'email'|salt|compare_password/)
    const boldWords = new RegExp(/[(]|[)]|[[]|[]]/)
    return <ExampleRegion id='examples'>
        <Container>
            <ExampleSectionTitle>Code Examples</ExampleSectionTitle>
            { examples.map((example) => {
                let lineNumberCount: number = 0
                const exampleCodeLineArray = example.code.split(/\n/)
                return <ExampleEntry key={example.title}>
                    <ExampleTitle>{example.title}</ExampleTitle>
                    <ExampleSubtitle>{example.description}</ExampleSubtitle>
                    <CodeBlockBarButtonsContainer className={css`
                        position: relative; 
                        justify-content: start; 
                        margin-top: 12px; 
                        background-color: ${codeBlockBackGround}; 
                        border-top-left-radius: ${codeBlockRadius}px;
                        border-top-right-radius: ${codeBlockRadius}px; 
                        height: 2rem;
                        `}>
                        <CodeBlockBarButton className={css`margin-left: 8px; background-color: #FF6259`}/>
                        <CodeBlockBarButton className={css` background-color: #FEBC2E`}/>
                        <CodeBlockBarButton className={css` background-color: #28C740`}/>
                    </CodeBlockBarButtonsContainer>
                    <ExampleDetail>
                        <CodeIcon />
                        <ExampleCode>
                            <CodeBlock className={css`
                                border-radius: 0px; 
                                border-right: 1px solid #CAD6E0;` }>
                                <CodeBlockBar >
                                    <CodeBlockBarTitle className={css`
                                        border-bottom: 1px solid;`}>
                                        example.py
                                    </CodeBlockBarTitle>
                                </CodeBlockBar>
                                    { exampleCodeLineArray.map((line, index) => {
                                        if ( index!== 0 && index!=exampleCodeLineArray.length-1 ) {
                                            return  decoratorPattern.test(line)?<CodeLine lineNumber={index} key={index} ><CodeBlue>{line}</CodeBlue></CodeLine>:classNamePattern.test(line)?(<CodeLine lineNumber={index} key={index} ><CodeOrange>{line.split(/\s/)[0]}</CodeOrange> <CodeBold>{line.split(/\s/)[1]}</CodeBold></CodeLine>)
                                                    :
                                                    <CodeLine lineNumber={index} key={index} linebreak={true}>
                                                    {line.split(/(.*:)|(=)|(\.)|([(])|([)])|(\d+)|(])|([[])|([|])/).map((words) => { 
                                                        return greenWords.test(words)?<CodeGreen>{words}</CodeGreen>: pinkWords.test(words)?<CodePink>{words}</CodePink>:
                                                                purpleWords.test(words)?<CodePurple>{words}</CodePurple>:blueWords.test(words)?<CodeBlue>{words}</CodeBlue>:pinkBoldWords.test(words)?
                                                                <CodePink><CodeBold>{words}</CodeBold></CodePink>:boldWords.test(words)?<CodeBold>{words}</CodeBold>:words   
                                                        })
                                                    }    
                                                    </CodeLine>       
                                        }
                                    })}
                            </CodeBlock>
                        </ExampleCode>
                        <ExampleDesc>
                            <ExampleFeatures>
                                <CodeBlock className={css`
                                    border-radius: 0px;
                                    height: 100%;
                                    width: 100%;`}>
                                    <CodeBlockBar >
                                        <CodeBlockBarTitle className={css`border-bottom: 1px solid;`}>introduction.txt</CodeBlockBarTitle>   
                                    </CodeBlockBar>
                                    { example.features.map((feature) => {
                                        const exampleFeatureLineArray = feature.split(/\n/)
                                        const fieldNamePattern = new RegExp(/(.*:)/)
                                        return  exampleFeatureLineArray.map((line, index_line) => {
                                            return  <CodeLine lineNumber={++lineNumberCount} key={index_line} >
                                                        <ExampleFeature key={line}>{fieldNamePattern.test(line)?<span><CodeBlue>{line.split(/:/)[0]}</CodeBlue>{':'+line.split(/:/)[1]}</span>:line}</ExampleFeature>
                                                    </CodeLine>          
                                        })
                                    })}
                                </CodeBlock>

                            </ExampleFeatures>
                        </ExampleDesc>
                    </ExampleDetail>
                </ExampleEntry>
            })}
        </Container>
    </ExampleRegion>
}

export default Examples
