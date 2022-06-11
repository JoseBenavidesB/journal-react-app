import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ id, date, title, body, url}) => {

  const dispatch = useDispatch();

  const noteDate = moment(date);

  const handleSetActive = () => {
    const note = {
      date,
      title,
      body, 
      url
    };
    
    dispatch( activeNote(id, note))
  };
  
  return (
    <div 
      onClick={ handleSetActive }
      className='journal__entry pointer animate__animated animate__fadeIn'>
        {
          
          url && 
            <div className="journal__entry-picture">
              <img src={ url } alt="Entry Imagen"/>
            </div>
        }
        <div className="journal__entry-body">
            <p className='journal__entry-title'> { title }</p>
            <p className='journal__entry-content'>{ body }</p>
        </div>

        <div className="journal__entry-date-box">
            <span>{ noteDate.format('dddd') }</span>
            <h4>{ noteDate.format('Do') }</h4>
        </div>
    </div>
  )
}
