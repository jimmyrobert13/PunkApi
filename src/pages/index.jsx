import styled from 'styled-components'
import {Text, Head, Cards, ContentCard, Container, Search, BeerRandon} from '../components'
import  useAxios  from '../hook/useAxios'

export default function Home() {

  const {beerData, loading, searchBeers, setBeerType} = useAxios();

  return (
    <>
      {
        loading ? <h1>Loading...</h1> :
        <Container>
          <BeerRandon/>
          <Search searchBeers={searchBeers} setBeerType={setBeerType}/>
          <ContentCard>
            <Cards beerData={beerData}></Cards>
          </ContentCard>
        </Container>
      }
    </>
  )
}
