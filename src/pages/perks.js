import React from "react";
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';
import ExUserFlippableCard from '../components/card/exusercard/ExUserFlippableCard.js'

function Perks() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>Perks</h1>
      </div>
      <div class="nav-container-up">
        <div>
          <Link to='/solent-alumni/homepage' ><button>up</button></Link>
        </div>
      </div>
      <div class="nav-container-bottom">
        <div>
          <Link to='/solent-alumni/news'><button>down</button></Link>
        </div>
      </div>

      {/* Contnent */}
      <div class="flex-container">
        <div className="perks"> {/*0*/}
          <ExUserFlippableCard />
        </div>
        <div className="perks"> {/*1*/}
          <ExUserFlippableCard />
        </div>
        <div className="perks"> {/*2*/}
          {/* <ExUserFlippableCard /> */}
        </div>
      </div>
      <div class="flex-container">
        <div className="perks"> {/*1*/}
          <ExUserFlippableCard />
        </div>
        <div className="perks"> {/*2*/}
          <ExUserFlippableCard />
        </div>
        <div className="perks">  {/*3*/}
          {/* <ExUserFlippableCard /> */}
        </div>
      </div>
    </div>
  )
}

export default Perks