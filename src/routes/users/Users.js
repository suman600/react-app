import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from './states/userActions';
import Card from '../../shared/card/Card';

const Users = () => {
    const gridStyle = {
        'display': 'grid',
        'gridTemplateColumns': 'repeat(4, 1fr)',
        'gridGap': '2rem'
    };

    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    // if (error) return <p>Error: {error.message}</p>;
    return (
        <>
            {users && users?.length && !loading > 0 ? (
                <div style={gridStyle}>
                    {users.map((user) => (
                        <Card key={user.id} user={user} loading={loading} />
                    ))}
                </div>
            ) : (
                <div style={gridStyle}>
                    {[0,1,2,3,4,5,6,7].map(() => <Card loading={loading} />)}
                </div>
            )}
        </>
    );
};

export default Users;
