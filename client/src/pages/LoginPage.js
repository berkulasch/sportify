import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return(
        <div>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}