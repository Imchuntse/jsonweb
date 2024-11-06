import type { NextPage } from 'next'
import { styled } from 'linaria/react'
import { css } from 'linaria'
import Layout from '../components/Layout'
import Splash, { SplashSubtitle, SplashTitle } from '../components/Splash'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SubTitle, MainTitle } from '../components/HeadTitle'
import WorldIcon from '../components/WorldIcon'
import CompanyIcon from '../components/CompanyIcon'
import { aboutBackGround } from '../styles/theme'
import FloatSplash from '../components/FloatSplash'
import about from '../data/about'



const PageSection = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    margin-top: 16rem;
    -webkit-box-align: center;
    align-items: center;
`

const PageTitle = styled.h2`
    font-family: Barlow, system-ui, Arial, sans-serif;
    font-weight: bold;
    font-size: 1.75rem;
    line-height: 34px;
    letter-spacing: -0.02em;
    color: rgb(45, 55, 72);
`

const PageContent = styled.p`
    color: rgb(113, 128, 150);
    font-size: 1.25rem;
`

const Map = styled.div`
    overflow-x: scroll;
    position: relative;
    z-index: 1;

`

const MapBlock = styled.div`
    text-align: center;
    position: relative;
    margin-bottom: -3rem;
`

const IntroBlock = styled.div`
    background-color: rgb(247, 250, 252);
    font-size: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    z-index: 2;
`
const JoinTeamBlock = styled.div`
    max-width: 1200px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(45, 55, 72);
    border-radius: 0.5rem;
    padding: 2rem 4rem 2rem 4rem;
    color: rgb(255, 255, 255);
    margin: -2rem 4rem 0 4rem;
    tab-size: 4px;
    line-height: inherit;
`
const JoinTeamTitle = styled.div`
    font-weight: bold;
    font-size: 1.25rem;
    margin-right: 4rem;
`

const JoinTeamContent = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
    color: rgb(203, 213, 224);
    margin-right: 150px;
    tab-size: 4px;
    line-height: inherit;
`

const JoinTeamButton = styled.a`
    background-color: rgb(56, 161, 105);
    border-radius: 5px;
    color: rgb(255, 255, 255);
    padding: 0.5rem 1.25rem 0.5rem 1.25rem;
    font-weight: 600;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: inherit;
`

const CompanyIconWrap = styled.span`
    position: absolute;
    top: 203px;
    left: 898px;
`

export const BlockTitle = styled.div`
    display: flex;
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 18px;
`

export const BlockContent = styled.p`
    padding-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 16px;
    font-stretch: 100%;
    color: #7D8A9F;
`  
const HeaderBlock = styled.div`
    padding: 1.5rem;
    flex-grow: 1;
`

const About: NextPage = () => {
    return <Layout>
    <Header backgroundColor={aboutBackGround} />
    <Splash className={css`
        background-color: ${aboutBackGround};
        flex-direction: column;
        color: white;
    `}>
        <MainTitle>
            Data flow pipeline 
            <br />
            and Data graph framework 
        </MainTitle>
        <SplashSubtitle className={css`
            text-align: center;
        `}>
            The modern declarative data flow pipeline and data graph framework for the AI empowered generation.
        </SplashSubtitle>
        <FloatSplash title={about.titles} content={about.contents}/>
    </Splash>
    <PageSection>
        <MapBlock>
            <PageTitle>Our Office(s)</PageTitle>
            <PageContent>The company is located in GuangDong, China</PageContent>
            <Map>
                <WorldIcon />
                <CompanyIconWrap><CompanyIcon /></CompanyIconWrap>
            </Map>
        </MapBlock>
        <IntroBlock>
            <JoinTeamBlock>
                <JoinTeamTitle>Collaboration</JoinTeamTitle>
                <JoinTeamContent>We’re always excited to talk to more people who share our vision of simple, enjoyable data access for application developers.</JoinTeamContent>
                <JoinTeamButton>Contact us</JoinTeamButton>
            </JoinTeamBlock>
            <div className={css`
                padding-top:100px;
            `}></div>
        </IntroBlock>
    </PageSection>
    <Footer />
</Layout>
}


export default About
