import React from 'react'
import './curator.scss'
import curatorPhoto from '../../images/pedro-veloso.jpg'

function CuratorItem() {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto do curador Pedro Veloso" />
      </div>
      <div className="curator__details">
        <div>
          <h3>Pedro Veloso</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Front-end dev ongoing and semi-harcore WoW player during spare time
          <br /> <br />
          FOR THE ALLIANCE
        </p>
      </div>
    </div>
  )
}

export default CuratorItem
