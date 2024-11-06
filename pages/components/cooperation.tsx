import type { NextPage } from 'next'
import { styled } from 'linaria/react'
import { css } from 'linaria'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import EmailIcon from '../../components/EmailIcon'
import MessageIcon from '../../components/MessageIcon'
import servicesAndPartners from '../../data/images/servicesAndPartners.png'
import technologyPartners from '../../data/images/technologyPartners.png'
import PatternIcons from '../../components/PartnerIcons'
import BriefIcon from '../../data/images/octocatBug.png'
import BriefDotIcon from '../../components/BriefDotIcon'

const PageSection = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 9rem;
    -webkit-box-align: center;
    align-items: center;
    background-color: #044289;
    padding-bottom: 9rem;
    
`
const ContactBlock = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
`

const ContactInPutBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius:0.75rem;
    background-color: #EDF2F6;
    width: 480px;
    height:60px;
    margin: 1rem;
`
const ContactInput = styled.input`
    background-color: #EDF2F6;
    border: none;
    font-size:16px;
    margin-left: 1rem;
    outline: none;
    width:420px;

`

const InputLine = styled.div`
    display:flex;
    margin-left:1rem;
    align-items: center;
`

const ContactTitle = styled.div`
    font-size:4rem;
    font-family: Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    color: rgb(26, 32, 44);
    font-weight: bold;
    font-size: 2rem;
    color: white;
`
const ContactSubTitle = styled.div`
    font-size: 1rem;
    color: #c8e1ff;
    margin-top: 8px;
    margin-bottom: 48px;
`

const Splash = styled.div`
    z-index: -1;
    position: relative;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    padding-top: 96px ;
    padding-bottom: 96px;
    display: block;
    text-align: center;
    background-color: white;
    line-height: 1.5;
    color: black;
`

const SplashTitle = styled.h1`
    margin-bottom: 16px
    font-size: 64px;
`

const SplashSubtitle = styled.p`
    margin-bottom: 10px;
    font-size: 20px;
    width: 58%;
    margin-left: auto;
    margin-right: auto;
    color: #586069;
    
`

const SplashApply = styled.a`
    display: inline-block;
    text-align: center;
    font-size: 16px;
    margin-top: 24px;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: #1074e7;
    border: 1px solid #1074e7;
    border-radius: 3px;
    transition: .2s;
    appearance: none;
    padding: 16px 24px;
    color: white;
`
const PatternChoice = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    font-size: 14px;
    flex-wrap: nowrap;
    background-color: white;
    color: black;
    margin-right: auto;
    margin-left: auto;
    max-width: 1280px;
`

const PatternChoiceWrap = styled.div`
    line-height: 1.5;
    text-align: center;
    width: 50%;
    border-radius: 6px
    padding-right: 40px;
    padding-left: 40px;
    margin-right: 16px;
    margin-left: 16px;
    margin-top: 0;
    box-shadow: 0 1px 15px rgb(27 31 35 / 15%);
`
const PatternChoiceContentWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 4rem;
`
const PatternChoiceIcon = styled.span`
    display: inline-block;
    border-radius: 50%;
    background-color: white;
    width: 80px;
    height: 80px;
    margin-top: -80px;
    margin-left: auto;
    margin-right: auto;
    padding: 40px;
    box-shadow: 0 1px 15px rgb(27 31 35 / 15%);
    img {
        width: 80px;
        aspect-ratio: auto 80 / 80;
        height: 80px;
    }
}
`

const PatternChoiceTitile = styled.h1`
    margin-top: 16px;
    line-height: 1.25;
    
`

const PatternChoiceSubtitle = styled.h2`
    font-size: 16px;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,monospace !important;
    color: #586069;
`

const PatternChoiceContent = styled.p`
    font-size: 20px;
    margin-bottom: 10px;

`
const PatternChoiceButton = styled.a`
    display: inline-block;
    padding: 16px 24px;
    color: #1074e7;
    vertical-align: middle;
    background-color: rgba(255,255,255,0);
    border: 1px solid rgba(16,116,231,0.5);
    margin: 32px auto;
`

const Brief = styled.div`
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    flex-wrap: nowrap;
    padding-bottom: 4rem;
`
const BriefContent = styled.div`
    position: relative;
    width: 75%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f1f8ff;
    padding-right: 198px;
    padding-left: 128px;
    border-radius: 3px;
`

const BriefTitle = styled.h3`
    margin-bottom: 8px;
    color: #586069;
    font-weight: 400;
    font-size: 14px;
`

const BriefSubTitle = styled.h2`
    color: #24292e;
    font-size: 20px;
    font-weight: 600;
    padding-right: 112px;
}
`
const BriefLink = styled.a`

`
const BriefImg = styled.div`
    position: absolute;
    bottom: 0px;
    right: 40px;
    justify-content: flex-end
    img {
        position: relative;
        height: 191px;
        aspect-ratio: auto 243 / 191;
        width: 243px;
    }
`

const BriefDot = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    width: 380px;
    height: 150px;
    max-width: 35vw;
    background-repeat: repeat;
}
`
const Cooperation: NextPage = () => {
    return <Layout >
    <Header backgroundColor="black"  />
    <Splash>
        <SplashTitle>Cooperation with Fillmula</SplashTitle>
        <SplashSubtitle>
            Grow your business with GitHub. Whether you’re building solutions that integrate with GitHub or services that help customers reach their full potential, get the resources and technical support you need.
        </SplashSubtitle>
        <SplashApply href='#form-signup'>Apply</SplashApply>
        <PatternIcons />
    </Splash>
    <PatternChoice>
        <PatternChoiceWrap>
            <PatternChoiceContentWrap>
                <PatternChoiceIcon>
                    <img src={servicesAndPartners.src}/>
                </PatternChoiceIcon>
                <PatternChoiceTitile>Services and Channel Partners</PatternChoiceTitile>
                <PatternChoiceSubtitle>Consult. Resell. Grow.</PatternChoiceSubtitle>
                <PatternChoiceContent>Partner with GitHub to expand your team’s capabilities, grow your pipeline, and become a trusted advisor for your customers. Get sales, technical, and marketing resources from our experienced teams to grow your business.</PatternChoiceContent>
                <PatternChoiceButton>Learn More</PatternChoiceButton>
            </PatternChoiceContentWrap>
        </PatternChoiceWrap>
        <PatternChoiceWrap>
            <PatternChoiceContentWrap>
                <PatternChoiceIcon>
                    <img src={technologyPartners.src}/>
                </PatternChoiceIcon>
                <PatternChoiceTitile>Technology <br/>Partners</PatternChoiceTitile>
                <PatternChoiceSubtitle>Build. Integrate. Extend.</PatternChoiceSubtitle>
                <PatternChoiceContent>Transform the way software is built, deployed, and maintained. Partner with us to deliver innovative user experiences within your product and on GitHub.</PatternChoiceContent>
                <PatternChoiceButton>Learn More</PatternChoiceButton>
            </PatternChoiceContentWrap>
        </PatternChoiceWrap>
    </PatternChoice>
    <Brief>
        <BriefContent>
            <BriefTitle>Partner with GitHub</BriefTitle>
            <BriefSubTitle>Work with one of our official partners to give your team the tools and know-how you need to be successful on GitHub.</BriefSubTitle>
            <BriefLink></BriefLink>
            <BriefImg><img src={BriefIcon.src}/></BriefImg>
        </BriefContent>
    </Brief>
    <PageSection id='form-signup'>
            <ContactBlock>
               <ContactTitle>Become a Fillmula Partner</ContactTitle>
                <ContactSubTitle>Tell us about your business to apply.</ContactSubTitle>
                <ContactInPutBlock>
                    <InputLine>
                        <EmailIcon />
                        <ContactInput placeholder="your@email.com"></ContactInput>
                    </InputLine>
                </ContactInPutBlock>
                <ContactInPutBlock>
                    <InputLine>
                        <MessageIcon />
                        <ContactInput placeholder="message"></ContactInput>
                    </InputLine>
                </ContactInPutBlock>
            </ContactBlock>
        </PageSection>      
    <Footer />
</Layout>
}


export default Cooperation
