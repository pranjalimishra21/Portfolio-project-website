import React from 'react'

import Arrow from '../../shared/arrow'

import "./style.scss"

const Showcase = ({data,transition}) => {
  return (
    <div className='projects-showcase'>
        {data.map ((project) =>(
            <div 
            key={project.name}
            className={`showcase-item ${transition === "zoomout "? "zoomout" : transition === "zoomin" ? "zoomin" : ""}`}>
                <div className="meta-content">
                    <h3>{project.name}</h3>
                    <div className="go-to-cta">
                        <span className="text">
                            Projects Details
                        </span>
                        <Arrow />
                    </div>
                </div>
                <img src={project.media.thumbnail}/>
            </div>
        )

    )}
    </div>
  )
}

export default Showcase