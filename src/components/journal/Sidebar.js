import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'


export const Sidebar = () => {


    const dispatch = useDispatch();

    const { name } = useSelector( state => state.auth );

    const handleLogout = () =>{
        dispatch( startLogout() );

    };

    const handleAddNew = () => {
        dispatch( startNewNote() );
    };

    let cssClass = 'visible';

    const [value, setValue] = useState(false)

    const handleShow = () => {
        setValue( !value )
        console.log(value)
    };

    

  return (
    <aside className='journal__sidebar'>
        <button 
            className="journal__sidebar-symbol"
            onClick={ handleShow }
            value= { value }
        >
            <i className="fa-solid fa-bars" ></i>
        </button>
        <div className={ value ? `journal__sidebar-notes ${cssClass}` : 'journal__sidebar-notes'}>
            <div className="journal__sidebar-navbar">
                <h3 className='mt-1'>
                    <i className='far fa-moon'></i>
                    <span> { name } </span>
                </h3>

                <button className='btn btn-logout' onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <div 
                onClick={ handleAddNew }
                className="journal__new-entry">
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-1'>New entry</p>
            </div>

            <JournalEntries />
        </div>
    </aside>
  )
}
