import {Paragrafo} from './styles'

export default function Text({ children, color='purple' }){
    return(
        <Paragrafo color={color}>
            { children }
        </Paragrafo>
    )
}