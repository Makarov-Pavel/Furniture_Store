import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../../../Redux/Slices/ProfileSlice'
import './ProfileNameChange.css'

function ProfileNameChange() {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const onClickApplyBtn = useCallback(() => {
    if(inputValue && inputValue.length >= 5) {
      dispatch(setName(inputValue))
      localStorage.setItem('name', inputValue)
    }
  },[inputValue])

  return (
    <div className={`nameChangeContainer ${inputValue && inputValue.length < 5 ? 'wrongName' : ''}`}>
      <input
        placeholder='write a name...'
        maxLength={30}
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
      <button type='button' onClick={()=>onClickApplyBtn()}>Apply changes</button>
    </div>
  )
}

export default ProfileNameChange