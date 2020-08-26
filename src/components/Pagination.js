import React from "react"
import styled from "styled-components"

export const NavList = styled.nav`
    min-width: 100%;
    min-height: 100%;
    width: 100%;
    height: 100%;
    grid-area: b;
    margin: 0 auto;
`

const List = styled.ul`
    list-style-type: none;
    display: inline;
`
const ListItem = styled.li`
    display: inline;
    padding: 5px 5px;
    letter-spacing: 0.1rem;
    background: red;
    color: white;
    border: 1px solid white;
`

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <NavList>
            <List>
                {pageNumbers.map((number) => (
                    <ListItem key={number}>
                        <a onClick={() => paginate(number)} herf="!#">
                            {number}
                        </a>
                    </ListItem>
                ))}
            </List>
        </NavList>
    )
}

export default Pagination
