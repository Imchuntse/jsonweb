import type { NextPage } from 'next'
import { css } from 'linaria'
import Layout from '../components/Layout'
import Splash, { SplashLink, SplashLinks, SplashSubtitle, SplashTitle } from '../components/Splash'
import Header from '../components/Header'
import Container from '../components/Container'
import Footer from '../components/Footer'
import ServerIntro from '../components/ServerIntro'
import Examples from '../components/Examples'
import { MainTitle, SubTitle } from '../components/HeadTitle'
import DropJumpIcon from '../components/DropJumpIcon'
import { styled } from 'linaria/react'
import { exampleBackGround } from '../styles/theme'


const IconWrap = styled.span`
    align-items: center;
`

const Example: NextPage = () => {
    return <Layout>
        <Header backgroundColor={exampleBackGround} />
        <Splash className={css`
            background-color: ${exampleBackGround};
            flex-direction: column;
            color: white;
        `}>
            <MainTitle>Examples</MainTitle>
            <SplashSubtitle className={css`
                text-align: center;
            `}>
                JSONClasses Server CGraph give a powerful data struct can validate and transform input data.
            </SplashSubtitle>
            <SplashLinks className={css`
                width: auto;
                margin-bottom: 48px;
            `}>
                <SplashLink  className={css`
                    display: flex; 
                    align-items: center; 
                    font-size: 18px;
                    `} href="#examples">
                    See code examples
                    <IconWrap color=''><DropJumpIcon /></IconWrap> 
                </SplashLink>
            </SplashLinks>
        </Splash>
        <Examples />
        <Footer />
    </Layout>
}

export default Example
