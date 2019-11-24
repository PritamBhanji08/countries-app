import React from 'react'
import Input from '@material-ui/core/Input'

const Search = (props) => {

    function inputChange(e) {
        props.onInputChange(e.target.value)
    }

    return (
        <Input
            className="search-box"
            placeholder="Enter Country Name"
            onChange={inputChange}
        />
    );
}

export default Search;