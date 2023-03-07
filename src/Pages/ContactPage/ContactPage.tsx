import React from 'react'
import './ContactPage.css'

const Contact: React.FC = () => {
  return (
    <div className='contactPage'>
        <ul className='contactPage__numbers'>
          <li><span>Lorem ipsum dolor sit amet:</span> +7-981-222-33-44</li>
          <li><span>Lorem, ipsum dolor:</span> +7-981-222-33-44</li>
          <li><span>Lorem ipsum dolor sit:</span> +7-981-222-33-44</li>
          <li><span>Lorem ipsum dolor sit amet:</span> +7-981-222-33-44</li>
        </ul>
      <iframe title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A12e23b7d54a5d5a15f98822275d39009a9ff47b222e0569d595962935caf7cfa&amp;source=constructor"></iframe>
    </div>
  )
}

export default Contact