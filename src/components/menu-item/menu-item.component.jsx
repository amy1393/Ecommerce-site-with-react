import React from 'react';
import './menu-item.component.jsx'
import './menu-item.styles.scss'

const MenuItem = ({title, imageURL, size})=> (

    <div style = {{
        backgroundImage: `url(${imageURL})`
    }} className={`${size} menu-item`}>
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>

)

export default MenuItem;


