import React from 'react';
import { observer } from 'mobx-react-lite';
import AuthVM from '../viewmodels/AuthVM';

const LoginForm = observer(() => {
    return (
        <div className="form-container" style={{ border: '2px solid #d2b48c', padding: '20px', borderRadius: '8px', backgroundColor: '#fffaf0' }}>
            <h2 style={{ color: '#8b4513', textAlign: 'center' }}>🕰️ 重返那年</h2>
            <input 
                type="text" 
                placeholder="输入你的名字..." 
                value={AuthVM.username} 
                onChange={(e) => AuthVM.setUsername(e.target.value)} 
                style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #deb887', borderRadius: '4px' }}
            />
            <input 
                type="password" 
                placeholder="输入那段秘密..." 
                value={AuthVM.password} 
                onChange={(e) => AuthVM.setPassword(e.target.value)} 
                style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #deb887', borderRadius: '4px' }}
            />
            <button 
                onClick={() => AuthVM.login()} 
                disabled={!AuthVM.isValid || AuthVM.isLoading}
                style={{ width: '100%', padding: '10px', backgroundColor: AuthVM.isValid && !AuthVM.isLoading ? '#cd853f' : '#ccc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
                {AuthVM.isLoading ? '正在穿越...' : '开启回忆'}
            </button>
            {AuthVM.error && <p style={{color: 'red', marginTop: '10px'}}>{AuthVM.error}</p>}
        </div>
    );
});

export default LoginForm;
