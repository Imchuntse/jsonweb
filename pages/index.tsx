import type { NextPage } from 'next'
import { css } from 'linaria'
import Layout from '../components/Layout'
import Splash, { SplashDemo, SplashSubtitle, SplashTitle, SplashTitles, SplashLinks, SplashLink } from '../components/Splash'
import Header, { HeaderAnchor, HeaderLink, HeaderLinks } from '../components/Header'
import { dark, darkContent, darkTint, exceptPhonePortrait, light, lightContent, lightTint, phonePortrait } from '../styles/theme'
import Container from '../components/Container'
import Footer from '../components/Footer'
import LevelDemo from '../components/LevelDemo'
import TitleLoop from '../components/TitleLoop'
import ServerIntro from '../components/ServerIntro'


const Home: NextPage = () => {
    return <Layout>
        <Header backgroundColor="#303846" />
        <Splash>
            <Container className={css`
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
            `}>
                <SplashTitles>
                    <TitleLoop />
                    <SplashTitle>
                        Next-generation Data Flow, ORM and API Server
                    </SplashTitle>
                    <SplashSubtitle>
                        Full-fledged declarative backend with auto generated clients.
                    </SplashSubtitle>
                    <SplashLinks>
                        <SplashLink href="https://docs.jsonclasses.com/docs/miscellaneous/installation">Install</SplashLink>
                        <SplashLink className={css`background-color: rgb(113, 128, 150);`} href="https://docs.jsonclasses.com">Read the Docs</SplashLink>
                    </SplashLinks>
                </SplashTitles>
                <SplashDemo>
                    <LevelDemo />
                </SplashDemo>
            </Container>
        </Splash>
        <ServerIntro />
        <Footer />
    </Layout>
}

export default Home
