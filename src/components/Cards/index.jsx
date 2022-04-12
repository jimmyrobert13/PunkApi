import * as React from 'react';
import { useState } from "react"
import {Card, Content, Icon, PlanTitle, PlanCost, FeatureLintItem, ActionButton, BackgroundSquare} from './styles'
import Link from 'next/link'

function Cards ({beerData}) {

    return (
        <>
            {beerData.map((item) =>( 
                <div>
                    <Card>
                        <BackgroundSquare />
                        <Content>
                            <Icon><img src={item.image_url}/></Icon>
                            <PlanTitle>{item.name}</PlanTitle>
                            <PlanCost>{item.tagline}</PlanCost>
                            <FeatureLintItem>
                                <span>{item.first_brewed}</span>
                            </FeatureLintItem>
                            <Link href={{ pathname:'/beerInfo', query: {img:(item.image_url), first_brewed:(item.first_brewed), name:(item.name), tagline:(item.tagline), abv:(item.abv), ibu:(item.ibu), contributed_by:(item.contributed_by)}}}>
                                <ActionButton>Detalhes</ActionButton>
                            </Link>
                        </Content>
                    </Card>
                </div>
            ))
            }
            {/* <button onClick={()=>{nextPage()}} disabled>nextPage</button>
            <button onClick={()=>{prevPage()}} >prevPage</button> */}
        </>
    )
}
export default Cards