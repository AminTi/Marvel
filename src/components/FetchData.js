import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import MarvalPosts from "./MarvalPosts"
import Pagination from "./Pagination"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0.4fr);
    grid-template-rows: repeat(3, 0.2fr);
    grid-template-areas: c c c;
    padding: 50px 50px;
    grid-gap: 30px;
`

function FetchData() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)

    const publicKey = "d4753fdd3b65bbe01081a9e325ebfc4c"
    const PrivatKey = "562e41fe38995a98b869c877137c6f7d93e50cc1"
    const hash = "9229350db55878b16e9df3f796721d9a"

    const api = `http://gateway.marvel.com/v1/public/characters?limit=50&ts=1&apikey=${publicKey}&hash=${hash}`

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axios.get(`${api}`)
            setPosts(res.data.data.results)
            setLoading(false)
        }
        fetchPosts()
    }, [])

    const indeOfLastPost = currentPage * postPerPage
    const indexofFirstPost = indeOfLastPost - postPerPage
    const currentPosts = posts.slice(indexofFirstPost, indeOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <Container>
            {currentPosts.map((post, index) => {
                return (
                    <MarvalPosts
                        key={index}
                        description={post.description}
                        name={post.name}
                        imageUrl={`${post.thumbnail.path}.jpg`}
                        loading={loading}
                        urls={post.urls}
                    />
                )
            })}
            <Pagination
                postPerPage={postPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
        </Container>
    )
}

export default FetchData
