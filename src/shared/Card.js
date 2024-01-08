import React from 'react';

const Card = ({ user }) => {
    return (
        <div className="card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            {/* Add other user details as needed */}
        </div>
    );
};

export default Card;
