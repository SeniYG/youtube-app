import React from 'react'

class SearchBar extends React.Component {

    state = {
        str : 'Default text'
    }

    handleChange  = (event) => {
        this.setState({str: event.target.value})
        this.props.handleOnChange(this.state.str)
    }


    render () {
        return (
            <div>
                <input autoComplete="on" type="text" onChange={this.handleChange} value={this.state.str}
                />
            </div>
            );
    }

}

export default SearchBar;