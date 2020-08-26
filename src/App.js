import React from "react"
import styled from "styled-components"
import FetchData from "./components/FetchData"

const Titel = styled.h1`
    color: white;
    font-size: 50px;
    background: red;

    padding: 10px 10px;

    margin: auto;
`
function App() {
    return (
        <div className="App">
            <Titel> Marvel </Titel>
            <FetchData />
        </div>
    )
}

export default App
