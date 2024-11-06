import React, { FC } from 'react'
import { styled } from 'linaria/react'
import features from '../data/features'
import { phone, exceptPhone } from '../styles/theme'
import Container from './Container'

const FeaturesList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 40px;
    margin-top: 20px;
    ${phone} {
        flex-direction: column;
    }
`
const Feature = styled.div`
    flex: 1;
    ${exceptPhone} {
        &:not(:last-child) {
            margin-right: 10px;
        }
    }
    ${phone} {
        &:not(:first-child) {
        margin-top: 20px;
    }
    }
`
const FeatureImage = styled.div`
    width: 100%;
    height: 150px;
    background-color: skyblue;
`
const FeatureTitle = styled.div`
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
`
const FeatureDesc = styled.div`
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
`

const Features: FC = () => {
    return <Container>
        <FeaturesList>
            {features.map((feature, idx) => (
                <Feature key={idx}>
                    <FeatureImage></FeatureImage>
                    <FeatureTitle>
                        {feature.title}
                    </FeatureTitle>
                    <FeatureDesc>
                        {feature.description}
                    </FeatureDesc>
                </Feature>
            ))}
        </FeaturesList>
    </Container>
}

export default Features
