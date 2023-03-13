import React from 'react'
import './ProfileHistory.css'

function ProfileHistory() {
  
  return (
    <div className='historyContainer'>
      <ul className='historyList'>
        {[...Array(3)].map(el => (<li className='historyListItem'>
            <img src='images/history_product.jpg' alt='product'></img>
            <div>
              <p>date: xx.xx.xxxx </p>
              <p>Name of the purchased product</p>
              <p>price</p>
            </div>
          </li>))
        }
      </ul>
    </div>
  )
}

export default ProfileHistory