import React from 'react'
import FooterService from './FooterService'
import FooterContent from './FooterContent'
import FooterBottom from './FooterBottom'

function Footer() {
  return (
    <div className='py-12'>
        <FooterService/>
        <FooterContent/>
        <hr className='border-gray-600 mt-4 mb-4'/>
        <FooterBottom/>
    </div>
  )
}

export default Footer