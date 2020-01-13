import React from 'react'

class SearchBar extends React.Component {

    state = {
        strg : 'Default text'
    }

    render () {
        return ( <input type="text" defaultValue={this.state.strg}/> );
    }

}

export default SearchBar;