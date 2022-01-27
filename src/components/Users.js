import React from 'react'

export default function Users({ users }) {
    return (
        <div>
            <h2 className='text-center'>This informations are coming from a fake backend </h2>
            <br />
            <br />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nmae</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                           <tr>
                           <th scope="row">{index+1}</th>
                           <td>{user.name}</td>
                           <td>{user.username}</td>
                           <td>{user.email}</td>
                         </tr>                    ))}
                </tbody>
            </table>
        </div >
    )
}
