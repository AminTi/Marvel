import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Pagination from "./Pagination"

export const Charcontainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;

    grid-area: a;
`

const PicContainrer = styled.div`
    min-width: 50%;
    min-height: 70%;
    width: 100%;
    height: 100%;
`
const Img = styled.img`
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: auto;
`
const NameContainer = styled.button`
    background: red;
    color: white;
    padding: 5px 5px;
    outline: none;
    border: 1px solid red;
`
const DescriptionContainer = styled.div`
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
`
const LinkTag = styled.a`
    background: red;
    width: 100%;
`

const MarvalPosts = ({ loading, imageUrl, name, description, urls }) => {
    const [hide, setHide] = useState(true)
    const showAndHide = useRef(true)
    const [styles, setStyles] = useState()

    if (loading) {
        return <h2>Loading...</h2>
    }

    const paragraph = description ? description : " Description indisponible "

    function showHide(e) {
        if (hide) {
            setStyles("1px solid red")
            showAndHide.current.innerText = `${paragraph}`

            setHide(false)
        } else {
            setStyles("none")
            showAndHide.current.innerText = ""
            setHide(true)
        }
    }

    return (
        <div>
            <Charcontainer>
                <PicContainrer>{<Img src={imageUrl} />}</PicContainrer>
                <NameContainer onClick={showHide}>{name}</NameContainer>
                <DescriptionContainer
                    ref={showAndHide}
                    style={{ border: styles }}></DescriptionContainer>
            </Charcontainer>
        </div>
    )
}

export default MarvalPosts
