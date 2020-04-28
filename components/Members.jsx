import React from 'react'
import memberData from '../members.json'

const Members = (props) => {
    
    const alphaOrder = (a, b) => {
        if (a.lastName < b.lastName) {
            return -1
        }
        else {
            return 1
        }
    }

    memberData.sort(alphaOrder)

    let memberList = memberData.map( (member, i) => {
        return <tr key={'member' + i}>
            <td>{i+1}</td>
            <td>{member.firstName}</td>
            <td>{member.lastName}</td>
            <td>{member.email}</td>
        </tr>
    })
    
    return (
        <div className='members'>
            <h1>Club Members</h1>
            
            <div>
                <table>

                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                </thead>

                <tbody>
                {memberList}
                </tbody>

                </table>
            </div>
            
        </div>
    )
}


export default Members