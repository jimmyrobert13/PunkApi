import {BeerInfo, ActionButton, Image} from './styles'
import { useRouter } from "next/router";
import Link from 'next/link'

export default function BeerInfos(){
    const { query } = useRouter();

    return(
        <>
            <Image/>
            <BeerInfo>
                <div className="container">
                    <div className="left-content" >
                        <h1>BeerLovers</h1>
                        <img src={query.img} />
                    </div>
                    <div className="right-content">
                        <div className="card">
                            <h1>Name: {query.name}</h1>
                            <h3>Tagline: {query.tagline}</h3>
                            <h3>First Brewed: {query.first_brewed}</h3>
                            <h3>Ibu: {query.ibu}  abv:{query.abv}</h3>
                            <h3>Contributed: {query.contributed_by}</h3>
                        </div>
                    </div>
                    <Link href='/'>
                        <ActionButton>HOME</ActionButton>
                    </Link>
                </div>
            </BeerInfo>
        </>
    )
}