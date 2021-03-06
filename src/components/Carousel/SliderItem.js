import React from "react"
import styled from "styled-components"
import AddToCart from "../Basic/AddToCart"
import DemoImgSrc from "../../images/demo-product.jpg"

const SliderItem = ({ title }) => {
    return (
        <SliderItemWrapper>
            <ItemBody>
                <ItemImage>
                    <img src={ DemoImgSrc } alt="demp-product" />
                </ItemImage>
                <ItemDetail>
                    <ProductTitle> Product { title.toString() } </ProductTitle>
                    <PriceBox>
                        <SpecialPrice>$899.00</SpecialPrice>
                        <OldPrice>$1199.00</OldPrice>
                    </PriceBox>
                    <ProductActions>
                        <AddToCart />
                    </ProductActions>
                </ItemDetail>
            </ItemBody>
        </SliderItemWrapper>
    )
}

const SliderItemWrapper = styled.div`
    padding: 10px;
`   
const ItemBody = styled.div`
    background: #fff;
    color: #000;
`

const ItemDetail = styled.div`
    padding: 10px 0;
    color: #777777;    
`

const ItemImage = styled.div`

`

const ProductTitle = styled.strong`
    display: block;
    font-size: 14px;
    margin: 0 0 3px 0;
    hyphens: auto;
    min-height: 50px;
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
`
const PriceBox = styled.div`
    margin: 8px 0 13px;
    span {
        padding-right: 3px;
    }
`

const SpecialPrice = styled.span`
    font-size: 18px;
    color: #212529;
`

const OldPrice = styled.span`
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
`

const ProductActions = styled.div`
    width: 130px;
    margin: auto;
    position: relative;
`

export default SliderItem