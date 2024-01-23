import React from 'react';

const Card = ({ user, loading }) => {

    return (
        loading ? (
            <div className={'card skeleton'}>
                <h2 className={'sk-anim sk-t'}>text</h2>
                <p className={'sk-anim sk-t'}>text</p>
                <div className={'sk-anim sk-t'}>text</div>
            </div>
        ) : (
            <div className={'card'}>
                <h2>{user?.name}</h2>
                <p>Email: {user?.email}</p>
                <div>Phone: {user?.phone}</div>
            </div>
        )
    );
};

export default Card;
