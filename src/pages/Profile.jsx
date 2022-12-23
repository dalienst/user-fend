import React from 'react'
import Sidenav from '../layouts/Sidenav'

export default function Profile() {
  return (
    <>
      <div className="main">
        <Sidenav />
        <main className="content">
          <nav className="page-nav">
            <h2>Your Dashboard</h2>
          </nav>
          <section className='home'>
            <div className="welcome-msg">
                <h2>Profile details and editing coming soon</h2>
                <p>Once I get home :)</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
