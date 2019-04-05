import React from 'react'

import Header from '../layout/Header'

export default function Home(props) {
  console.log('oi')
  return (
    <div className="row">
      <div className="col-12">
        <Header icon="home" title="Home" />
      </div>
    </div>
  )
}
