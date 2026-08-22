import React from 'react';

const YouthMemories = () => {
    return (
        <div className="youth-memories" style={{ 
            maxWidth: '400px', 
            margin: '40px auto', 
            padding: '20px', 
            fontFamily: 'Georgia, serif', 
            backgroundColor: '#fdf6e3', 
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{ textAlign: 'center', color: '#8b4513', marginBottom: '20px' }}>📜 致青春</h1>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555', marginBottom: '20px' }}>
                “那些年的风，吹过操场，吹过教室，也吹进了我们的回忆。”
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '6px', border: '1px dashed #d2b48c' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#a0522d' }}>🎒 那年夏天</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>阳光洒在课桌上，蝉鸣声声，我们笑着挥手告别。</p>
                </div>
                <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '6px', border: '1px dashed #d2b48c' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#a0522d' }}>📖 图书馆角落</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>偷偷传过的纸条，藏在书里的日记，都是青春的注脚。</p>
                </div>
                <div style={{ padding: '15px', backgroundColor: '#fff', borderRadius: '6px', border: '1px dashed #d2b48c' }}>
                    <h3 style={{ margin: '0 0 5px 0', color: '#a0522d' }}>🌅 操场黄昏</h3>
                    <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>奔跑的身影，挥洒的汗水，定格成永不褪色的画面。</p>
                </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: '#999' }}>— 保留我们青春的回忆 —</p>
        </div>
    );
};

export default YouthMemories;
