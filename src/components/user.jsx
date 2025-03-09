import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const User = () => {
    const { userid } = useParams();
    const navigate = useNavigate();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-4 text-center bg-light" style={{ width: "350px" }}>
                <h3 className="card-title text-primary fw-bold">User Profile</h3>
                <p className="card-text text-muted fs-4">
                    User ID: <span className="text-success fw-bold">{userid}</span>
                </p>
                <button className="btn btn-outline-primary mt-3" onClick={() => navigate('/home')}>
                    Go Back
                </button>
            </div>
        </div>
    );
};
