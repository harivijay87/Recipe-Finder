import React from 'react'
import { Link } from 'react-router-dom'

const MissingPage = () => {
  return (
    <div>
      I Think You are at the Wrong Page.... 
      Visit Our <Link className='link' to='/'>Home</Link>
    </div>
  )
}

export default MissingPage
