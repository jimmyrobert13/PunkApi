import imgB from '../../assets/detalhes.jpg'
import styled from 'styled-components'

export const Image = styled.div`
    background-image: url(${imgB.src});
    background-size: cover;
    height: 100vh;
    filter: blur(8px);
`

export const BeerInfo = styled.div`
    padding: 2rem 2rem;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 100%;


    .container{
        width: 90%;
        margin: auto;
        display: flex;
    }

    .left-content, .right-content{
        flex-basis: 50%;
        height: 700px;
    }
    .left-content h1{
        color: white;
    }
    .left-content img{
        width: 180px;
        padding: 10% 30%;
    }
    .right-content{
        padding-top: 10%;
    }
    .right-content h1{
        color: #000000;
    }
    .card{
        background-color: #ffffff5c;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`
export const ActionButton = styled.button`
    flex: 0 0 auto;
    height: 20px;
    padding: 0 2rem;
    margin-top: 1rem;
    border: 0;
    border-radius: 20px;
    color: rgba(0, 0, 0, 0.85);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
    transition: background 0.25s;
    cursor: pointer;

    &:hover { background: rgba(255, 255, 255, 1)};
`