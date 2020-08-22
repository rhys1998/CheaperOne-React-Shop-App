import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <a href = "https://mail.google.com/mail/?view=cm&fs=1&to=i.r.rakshit@gmail.com" >
                    Send Feedback
            </a>
        </div>
    )
}

export default Footer
