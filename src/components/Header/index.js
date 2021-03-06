import React from "react"
import styled from "styled-components"
import BusinessHours from "./BusinessHours"
import HeaderLinksBar from "./HeaderLinksBar"
import HeaderBody from "./Body"
import HeaderNavBar from "./NavBar"
import { THEME_SETTING } from "../../constants"

const Header = () => {
    return (
        <>
            <BusinessHours />
            <HeaderWrapper>
                <HeaderLinksBar />
                <HeaderBody />s
                <HeaderNavBar />
            </HeaderWrapper>
        </>
    )
}

const HeaderWrapper = styled.div`
    border-top: 3px solid ${THEME_SETTING.COLOR};
    border-bottom: 1px solid #f3f3f3;
`

export default Header