import React from "react";

function Card({userData}){
    return(
    <>
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Name {userData.name}</h3>
            </div>
            <div className="card-body">
                <h4>Email {userData.email}</h4>
                <h5>phone: {userData.phone}</h5>
            </div>
            <div className="card-footer">
                <address>
                    street: {userData.address.street},
                    suite: {userData.address.suite},
                    city: {userData.address.city},
                    zipcode: {userData.address.zipcode},
                </address>
            </div>
        </div>
    </>
    )
}

export default Card;
