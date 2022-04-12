import PropTypes from 'prop-types'
import NextHead from 'next/head'

function Head({ title }){
    return(
        <NextHead>
            <title>
                {title}
            </title>
        </NextHead>
    )
}

Head.PropTypes = {
    title: PropTypes.string.isRequired
}

export default Head