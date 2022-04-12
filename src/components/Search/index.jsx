import {Search} from './styles'
import { TextField, Checkbox, FormControlLabel, FormGroup } from '@mui/material' 

export default function Searchs({searchBeers, setBeerType}){
    return(
        <Search>
            <form >
                <div className="detail-container">
                    <TextField id="standard-basic" label="Beer" variant="standard" sx={{ width:300}} onChange={(e) => {searchBeers(e.target.value);setBeerType(e.target.value)}}/>
                </div>
            </form>
        </Search>
    )
}