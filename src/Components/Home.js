import React from 'react'
import styled from 'styled-components'
import img from '../Assets/Pizza.jpg'
import { Link } from 'react-router-dom'

const ImageContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat:no-repeat;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  *{
    text-decoration:none;
    font-size: 6rem;
      color:whitesmoke;
  }
`

export default function Home() {
    return (

        <ImageContainer>
            <Link to='/pizza'><h1>START THAT ORDER</h1></Link>
        </ImageContainer>
    )
}