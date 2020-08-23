import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <a href = "mailto: i.r.rakshit@gmail.com" target='_blank' >
                    Send Feedback
            </a>
        </div>
    )
}

export default Footer
