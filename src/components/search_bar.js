import React from 'react';

class SearchBar extends React.Component {

    state = {
        str : ''
    };

    handleChange  = (event) => {
        this.setState({str: event.target.value});
        this.props.handleOnChange(this.state.str)
    };


    render () {
        return (
            <div className='search-bar ui fluid icon input'>
                <input autoComplete="on" type="text" onChange={this.handleChange}
                       value={this.state.str} placeholder="Search..."/>
                <i className="search icon"></i>
            </div>
            );
    }

}

export default SearchBar;