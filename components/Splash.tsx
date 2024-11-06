import { styled } from 'linaria/react'
import { flexContainerCenterItems, headerBackground, singleSpace, wholeScreen, splashButtonColor } from '../styles/theme'

const Splash = styled.div`
    width: 100vw;
    height: 480px;
    background-color: ${headerBackground};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: Inter, sans-serif;
`

export const SplashTitles = styled.div`
    color: white;
    flex-grow: 1;
    width: 50%;
`

export const SplashTitle = styled.div`
    font-size: 60px;
    font-weight: 700;
`

export const SplashSubtitle = styled.div`
    max-width: 700px;
    font-size: 20px;
    font-stretch: 100%;
    line-height: 1.5;
    margin-top: 16px;
    color: rgb(226, 232, 240);;
`

export const SplashDemo = styled.div`
    flex-grow: 1;
    width: 50%;
`

export const SplashLinks = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: ${singleSpace * 4}px;
    font-size: 20px;
    font-weight: 500;
`

export const SplashLink = styled.a`
    display: block;
    color: white;
    background-color: ${splashButtonColor};
    padding: 12px 16px;
    text-decoration: none;
    margin-right: ${singleSpace * 2}px;
    border-radius: 8px;
`

export default Splash
