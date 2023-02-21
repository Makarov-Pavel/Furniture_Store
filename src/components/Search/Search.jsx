import React, { useRef, useState, useCallback } from 'react'
import {BiSearch} from 'react-icons/bi'
import {CgClose} from 'react-icons/cg'
import {useDispatch} from 'react-redux'
import { setSearchValue } from '../../Redux/Slices/SearchSlice'
import debounce from 'lodash.debounce';
import './Search.css'

function Search(props) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const debounceFunc = useCallback(debounce((str)=>{
    dispatch(setSearchValue(str))
  }, 500),[])

  const onEnterPressHandler = (e) => {
    if(e.key === "Enter") dispatch(setSearchValue(e.target.value))
  }

  const onChangeHandler = (e) => {
    setValue(e.target.value)
    debounceFunc(e.target.value)
  }

  const inputRef = useRef()

  return (
    <div className='search-container'>
        <BiSearch className='search-icon'/>
        <input 
        className='search-input'
        ref={inputRef}
        placeholder='Search...'
        style={{backgroundColor:'white', color:'black'}}
        value={value}
        onChange={onChangeHandler}
        onKeyDown = {onEnterPressHandler}
        />
        {value && <CgClose className='close-icon' onClick={()=>{setValue(''); debounceFunc(''); inputRef.current.focus()}}/>}
    </div>
  )
}

export default Search