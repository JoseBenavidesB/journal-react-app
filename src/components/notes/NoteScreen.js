import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>
        <NotesAppBar />

        <div className="notes__content">

            <input 
                type="text"
                placeholder='Some awsome title'
                className='notes__title-input'
                autoComplete='off'
            />

            <textarea 
                placeholder='What happened today?'
                className='notes__text-area'
            >

            </textarea>

            <div className='notes__image'>
                <img src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80' alt='image'/>
            </div>
        </div>
    </div>
  )
}
