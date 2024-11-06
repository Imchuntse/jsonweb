import type { NextPage } from 'next'
import { css } from 'linaria'
import Layout from '../../components/Layout'
import Splash, { SplashLink, SplashLinks, SplashSubtitle } from '../../components/Splash'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ServerIntro from '../../components/ServerIntro'
import { MainTitle, SubTitle } from '../../components/HeadTitle'
import { pymongoBackGround } from '../../styles/theme'



const PymongoPage: NextPage = () => {
    return <Layout>
        <Header backgroundColor={pymongoBackGround} />
        <Splash className={css`
            background-color: ${pymongoBackGround};
            flex-direction: column;
            color: white;
        `}>
            <SubTitle>JSONCLASSES PYMONGO</SubTitle>
            <MainTitle>
                Powerful
                <br />
                JSONClasses Pymongo
            </MainTitle>
            <SplashSubtitle className={css`
                text-align: center;
            `}>
                JSONClasses Pymong CGraph give a powerful data struct can validate and transform input data.
            </SplashSubtitle>
            <SplashLinks className={css`
                width: auto;
                margin-bottom: 48px;
            `}>
                <SplashLink href="https://docs.jsonclasses.com/docs/miscellaneous/installation">Install</SplashLink>
                <SplashLink className={css`background-color: rgb(113, 128, 150);`} href="https://docs.jsonclasses.com">Read the Docs</SplashLink>
            </SplashLinks>
        </Splash>
        <ServerIntro />
        <Footer />
    </Layout>
}

export default PymongoPage
