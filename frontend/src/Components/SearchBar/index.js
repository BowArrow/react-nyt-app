import React, { Component } from 'react';
import Button from '../Button';
import './style.css';

export default class Search extends Component {
    render() {
        return (
            <div className='container my-3'>
                <label for='search-bar'>Search for Books:</label>
                <div className='input-group'>
                    <input type='text' className='form-control' placeholder='Search..' aria-label='Search..' aria-describedby='appended-search' />
                     <div className='input-group-append'>
                        <Button 
                            color='outline-secondary'
                            name='search'
                            value='Search'
                        />
                     </div>
                </div>
            </div>
        );
    }
}