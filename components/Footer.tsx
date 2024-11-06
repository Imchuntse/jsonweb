import { styled } from 'linaria/react'
import { FC } from 'react'
import { css } from 'linaria'
import { light, dark, lightBorder, darkBorder, codeFontStack, contentFontStack, singleSpace, titleFontStack } from '../styles/theme'
import Container from './Container'

const FooterContainer = styled.div`
    padding-top: ${singleSpace * 5}px;
    padding-bottom: ${singleSpace * 20}px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-top: 2px solid rgb(226, 232, 240);
    color: rgb(160, 174, 192);
    font-size: 18px;
`

const FooterColumn = styled.div`
    flex-grow: 2;
    flex-shrink: 1;
    flex-basis: 0%;
`

const FooterGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    &:not(:first-child) {
        margin-top: ${singleSpace * 6}px;
    }
`

const FooterGroupHeader = styled.div`
    font-family: ${titleFontStack};
    text-transform: uppercase;
    font-weight: 600;
`

const FooterLogo = styled.div`
    font-family: ${titleFontStack};
    font-weight: bold;
    font-size: 24px;
`

const FooterItem = styled.div`
    margin-top: ${singleSpace * 2}px;
    font-weight: 300;
    font-size: 16px;
`

const FooterLink = styled.a`
    cursor: pointer;
    &:hover {
        color: rgb(113, 128, 150);
    }
    &:active {
        color: rgb(74, 85, 104);;
    }
`

const Footer: FC = () => {
    return <Container>
        <FooterContainer>
            <FooterColumn>
                <FooterGroup>
                    <FooterLogo>JSONClasses</FooterLogo>
                </FooterGroup>
            </FooterColumn>
            <FooterColumn>
                <FooterGroup>
                    <FooterGroupHeader>Resources</FooterGroupHeader>
                    <FooterItem>
                        <FooterLink href='https://docs.jsonclasses.com/docs/guide/data-type-definition'>
                            Guides
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='https://docs.jsonclasses.com/docs/api-documentation/types-modifiers'>
                            API Documentation
                        </FooterLink>
                    </FooterItem>
                </FooterGroup>
                <FooterGroup>
                    <FooterGroupHeader>Components</FooterGroupHeader>
                    <FooterItem>
                        <FooterLink href='/components/core'>
                            Core
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='/components/pymongo'>
                            Pymongo ORM
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='/components/sqlorm'>
                            SQLAlchemy ORM [WIP]
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='/components/server'>
                            Server Integration
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='/components/command'>
                            Command Line Tool
                        </FooterLink>
                    </FooterItem>
                </FooterGroup>
            </FooterColumn>
            <FooterColumn>
                <FooterGroup>
                    <FooterGroupHeader>Community</FooterGroupHeader>
                    <FooterItem>
                        <FooterLink>
                            Github
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink>
                            Slack
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink>
                            Discussions
                        </FooterLink>
                    </FooterItem>
                </FooterGroup>
                <FooterGroup>
                    <FooterGroupHeader>Company</FooterGroupHeader>
                    <FooterItem>
                        <FooterLink href='/about'>
                            About
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='https://fillmula.com/'>
                            Official Website
                        </FooterLink>
                    </FooterItem>
                    <FooterItem>
                        <FooterLink href='/components/cooperation'>
                            Cooperation
                        </FooterLink>
                    </FooterItem>
                </FooterGroup>
            </FooterColumn>
            <FooterColumn className={css`
                flex-grow: 3;
            `}>
                <FooterGroup>
                    <FooterGroupHeader>Find Us</FooterGroupHeader>
                    <FooterItem>
                        JSONClasses is under MIT License.
                    </FooterItem>
                    <FooterItem>
                        Made with ❤️ and passion, from Teochew.
                    </FooterItem>
                    <FooterItem>
                        Presented by Fillmula Inc. © 2021-{new Date().getFullYear()}.
                    </FooterItem>
                </FooterGroup>
            </FooterColumn>
        </FooterContainer>
    </Container>
}

export default Footer
