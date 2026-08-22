import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import YouthMemories from './components/YouthMemories';

function App() {
    const [view, setView] = useState('login'); // 'login', 'register', 'memories'
    
    return (
        <div className="App" style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 style={{ textAlign: 'center', color: '#8b4513' }}>Auth Demo</h1>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <button 
                    onClick={() => setView('login')}
                    style={{ marginRight: '10px', padding: '8px 16px', cursor: view === 'login' ? 'default' : 'pointer', opacity: view === 'login' ? 0.6 : 1 }}
                >
                    Login
                </button>
                <button 
                    onClick={() => setView('register')}
                    style={{ marginRight: '10px', padding: '8px 16px', cursor: view === 'register' ? 'default' : 'pointer', opacity: view === 'register' ? 0.6 : 1 }}
                >
                    Register
                </button>
                <button 
                    onClick={() => setView('memories')}
                    style={{ padding: '8px 16px', cursor: view === 'memories' ? 'default' : 'pointer', opacity: view === 'memories' ? 0.6 : 1 }}
                >
                    Memories
                </button>
            </div>
            {view === 'login' && <LoginForm />}
            {view === 'register' && <RegisterForm />}
            {view === 'memories' && <YouthMemories />}
        </div>
    );
}

export default App;
