import React from 'react'
const Card = (props) => {


    const {Title, Description} = props;
    return (
        <div className='course'>
            <div className="card mx-1 my-0.5" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{Title}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">1 week crash course</h6> */}
                    <p className="card-text">{Description}</p>
                    <p className="card-link">Coming Soon</p>
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}

export default Card
