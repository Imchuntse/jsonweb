import { styled } from 'linaria/react'
import { light, dark, lightBorder, darkBorder, phonePortrait } from '../styles/theme'

const FloatSection = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: row;
    ${phonePortrait} {
        right: 0;
    }
`

export default FloatSection
