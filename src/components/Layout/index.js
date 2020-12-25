import React from "react"
import styled from "styled-components"
import Header from "../Header"
import Footer from "../Footer"
import backgroundImage from "../../images/body-bg.gif"
import { THEME_SETTING } from "../../constants"

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <ContainerBody>
                { children }
            </ContainerBody>
            <Footer />
        </Container>
    )
}
export default Layout

const Container = styled.div`
    background: url(${ backgroundImage });
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    font-family: ${ THEME_SETTING.FONT_FAMILY };
`

const ContainerBody = styled.div`
`