
import React from 'react'

export default function Posts({ posts }) {

    return (
        
        <div className='row d-flex justify-content-between'  >
             <h2 className='text-center'>This informations are coming from a fake backend </h2>
            <br />
            <br />
            {posts.map((infor, index) => (
            <div className="card bg-light border-warning col-md-3 mt-3 mx-4" key={index} id='cards'>

                <div className="card-body">
                    <h5 className="card-title">{infor.title}</h5>
                    <hr/>
                    <p className="card-text">{infor.body}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            ))}

        </div>
    )
}

