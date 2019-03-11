import React from 'react'
import './GridWrapper.css'
import Bar from '../components/Bar'
import Profile from '../components/Profile'
import { Route } from 'react-router'
import Main from '../components/Main'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Messages from '../components/Messages'

const Wrapper = () => {
  const path = window.location.href
  const container = ( path === 'http://localhost:3000/profile' ) ? 'grid-container-profile' : 'grid-container'
  return (
    <div className={container}>
      <div className="grid-item side-bar-left">
        <Sidebar />
      </div>
      <div className="grid-item header">
        <Route path='/' component={Header}/>
      </div>
      <div className="grid-item bar-item">
        <Bar/>
      </div>
      <div className="grid-item main-content">
        {path !== 'http://localhost:3000/messages' ? <Route path="/" component={Main}/> : null}
        <Route path='/messages' component={Messages}/>
      </div>
      {container === 'grid-container-profile' ? (
        <div className="grid-item side-bar-right">
          <Route path="/profile" component={Profile}/>
        </div>
      ) : null}
    </div>
  )
}

export default Wrapper