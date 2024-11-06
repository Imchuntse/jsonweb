import { styled } from 'linaria/react'
import { css } from 'linaria'
import { FC } from 'react'
import Container from './Container'
import GithubIcon from './GithubIcon'

const HeaderInner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HeaderLinks = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    font-family: Inter, sans-serif;
    font-size: 14px;
`

export const HeaderLink = styled.li`
    margin-left: 48px;
`

export const HeaderAnchor = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        color: white;
        text-decoration: none;
    }
    &:visited {
        color: white;
        text-decoration: none;
    }
`

interface HeaderProps {
    backgroundColor: string
    color?: string
}

const Header: FC<HeaderProps> = ({ children, backgroundColor, color = 'white'}) => {
    return <div className={css`
        padding-top: 24px;
        padding-bottom: 24px;
    `} style={{ 'backgroundColor': backgroundColor, color: color }}>
        <Container>
            <HeaderInner>
                <div className={css`
                    font-family: Barlow, sans-serif;
                    font-weight: bold;
                    font-size: 24px;
                `}>
                    <HeaderAnchor href="/">JSONClasses</HeaderAnchor>
                    
                </div>
                <HeaderLinks>
                    <HeaderLink>
                        <HeaderAnchor href="https://docs.jsonclasses.com/docs/miscellaneous/get-started">
                            Quickstart
                        </HeaderAnchor>
                    </HeaderLink>
                    <HeaderLink>
                        <HeaderAnchor href="/example">
                            Example
                        </HeaderAnchor>
                    </HeaderLink>
                    <HeaderLink>
                        <HeaderAnchor href="https://docs.jsonclasses.com">
                            Docs
                        </HeaderAnchor>
                    </HeaderLink>
                    <HeaderLink>
                        <HeaderAnchor href="/about">
                            About
                        </HeaderAnchor>
                    </HeaderLink>
                    <HeaderLink>
                        <HeaderAnchor href="https://github.com/fillmula/jsonclasses">
                            <GithubIcon />
                        </HeaderAnchor>
                    </HeaderLink>
                </HeaderLinks>
            </HeaderInner>
        </Container>
    </div>
}

export default Header
