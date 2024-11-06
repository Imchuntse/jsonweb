import type { NextPage } from 'next'
import { css } from 'linaria'
import Layout from '../../components/Layout'
import Splash, { SplashLink, SplashLinks, SplashSubtitle } from '../../components/Splash'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MainTitle, SubTitle } from '../../components/HeadTitle'
import Section from '../../components/Section'
import Container from '../../components/Container'
import { coreBackGround } from '../../styles/theme'
import CoreDemo from '../../components/ComponentDemoes/CoreDemo'


const CorePage: NextPage = () => {
    return <Layout>
        <Header backgroundColor={`${coreBackGround}`} />
        <Splash className={css`
            background-color: ${coreBackGround};
            flex-direction: column;
            color: white;
        `}>
            <SubTitle>JSONCLASSES CORE</SubTitle>
            <MainTitle>
                Powerful
                <br />
                JSONClasses Core
            </MainTitle>
            <SplashSubtitle className={css`
                text-align: center;
            `}>
                JSONClasses Core provides a powerful CGraph data modifiers that can validate and transform input data.
            </SplashSubtitle>
            <SplashLinks className={css`
                width: auto;
                margin-bottom: 48px;
            `}>
                <SplashLink href="https://docs.jsonclasses.com/docs/miscellaneous/installation">Install</SplashLink>
                <SplashLink className={css`background-color: rgb(113, 128, 150);`} href="https://docs.jsonclasses.com">Read the Docs</SplashLink>
            </SplashLinks>
        </Splash>
        <Section>
            <Container className={css`
                display: flex;
                flex-direction: row;
            `}>
                <div className={css`
                    width: 200px;
                    margin-right: 64px;
                `}>
                    <h2>Declare class with Decorator</h2>
                </div>
                <CoreDemo />
            </Container>
        </Section>
        <Footer />
    </Layout>
}

export default CorePage
