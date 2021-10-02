import React from 'react'
import {Rating} from '@material-ui/core'

const Labelling = () => {
    return (
        <div style={{ height: "20vh"}}>
            Aca se dice si el cliente es autonomo y en que %
            <div>
                <Rating name="size-large" defaultValue={2} size="large" />
            </div>
        </div>
    )
}

export default Labelling
