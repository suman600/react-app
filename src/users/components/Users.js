import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersRequest } from '../../actions/userActions';
import Card from '../../shared/Card';

const Users = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsersRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>User List</h1>
            <div>
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default Users;
