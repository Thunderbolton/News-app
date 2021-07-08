import { useState } from "react";
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Searchbar = ({ data, apiFetch, apiKey }) => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        apiFetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <TextField className="search-bar"
                variant="outlined" 
                label="Search.."
                color="secondary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IconButton className="search-icon" onClick={() => {apiFetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)}}>
                    <SearchIcon color="secondary" fontSize="large"/>
                </IconButton>
            </form>   
        </div>
     );
}
 
export default Searchbar;