import React from "react"
import styled from "styled-components"
import * as Image from "../assets/imgImport"
import SendPost from "../components/organisms/SendPost"

export default function RootRouter() {
    return (
        <SRootRouter>
            <STitle>Start React</STitle>
            <SImage src={Image.Test} />
            <SendPost />
        </SRootRouter>
    )
}

const SRootRouter = styled.div``
const STitle = styled.div``
const SImage = styled.img`
    width: 100px;
    height: 100px;
`
