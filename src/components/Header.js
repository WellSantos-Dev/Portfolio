import React, {useState, useEffect} from 'react'
import styles from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from 'react'
import { Link } from 'react-router-dom'
// Import components

export const Header = () => {
  const navRef = useRef();

  const toggleClass = () => {
    navRef.current.classList.toggle('navigation_responsive');
  }

  const closeClass = () => {
    navRef.current.classList.toggle('navigation_responsive');
  }

  return(
    <Container>
        <div className="container">
        <header className="header">
          <h3><Link to="/">WellSantos</Link></h3>
          <nav ref={navRef}>
            <a href="#home" onClick={closeClass}>Home</a>
            <a href="#experiencia" onClick={closeClass}>Experiência</a>
            <a href="#formacao" onClick={closeClass}>Formação</a>
            <Link to="/projetos">Projetos</Link>
            <button onClick={toggleClass} className="btn-style btn-close">
              <FaTimes />
            </button>
          </nav>
          <button onClick={toggleClass} className="btn-style">
          <FaBars />
          </button>
        </header>
        </div>
    </Container>
  )
}

const Container = styles.div`

  .container {
    position: fixed;
    background-color: #fff;
    top: 0;
    left: 0;
    width: 100vw;
  }

  h3 a {
    color: #333;
    font-size: 1.5rem;
    text-decoration: none;
  }
  
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    max-width: 1160px;
    margin: 0 auto;
  }

  header nav a { 
    padding: 10px 0 0 40px;
    color: #333;
    text-decoration: none;
    font-weight: 500;
  }

  .btn-style {
    background: transparent;
    border: none;
    display: none;
  }

  @media (max-width: 1024px) {

    .btn-style {
      display: block;
    }

    header nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 10px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #fff;
      transition: 0.1s;
      transform: translateY(-100vh);
    }

    .navigation_responsive {
      transform: none;
    }

    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      padding: 30px 30px;
    }
  }
`