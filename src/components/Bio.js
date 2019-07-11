import React from 'react'
import styles from './Bio.module.css'

function Bio(props) {
  let photoURL = 'https://lh3.googleusercontent.com/-97nNAtioGew/AAAAAAAAAAI/AAAAAAAACUo/pwTb25r6Qs0/photo.jpg'

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        pnbao personal programming blog {' '}
        <a href="https://github.com/pnbao">P. N. Bảo</a>.
        <br />
        <a href="https://linkedin.com/in/pnbao/">Linkedin's Profile</a>
      </p>
    </div>
  )
}

export default Bio
