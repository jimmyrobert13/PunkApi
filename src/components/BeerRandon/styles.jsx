
import styled from 'styled-components'
import imgB from '../../assets/glasses-light-dark-wheat-beer-dark-background-b.jpg'


export const BeerRandon = styled.div`
    padding: 2rem 2rem;
    background-image: url(${imgB.src});
    background-size: cover;
    height: 600px;

    .container{
        width: 90%;
        margin: auto;
        display: flex;
    }

    .left-content, .right-content{
        flex-basis: 50%;
    }
    .left-content h1{
        color: white;
    }

`