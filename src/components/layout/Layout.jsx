// import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Layout({ children }) {
  return (
  <>
      <Navbar />
      <div className='content' >
        {children}
      </div>
      <Footer />
  </>
  )
}

export default Layout