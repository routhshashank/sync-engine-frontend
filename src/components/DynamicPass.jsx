import React, { useState, useEffect } from 'react';

export default function DynamicPass({ member }) {
  const [timeLeft, setTimeLeft] = useState(15);
  const [qrToken, setQrToken] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setQrToken(`SYNC-${member.rollNumber}-${Date.now()}`);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [member]);

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ccc' }}>
      <h2>{member.name}</h2>
      <p>Club: {member.club} | Domain: {member.domain}</p>
      
      <div style={{ background: '#f0f0f0', padding: '30px', margin: '15px auto', width: '200px' }}>
        <strong>[ DYNAMIC TOTP QR ]</strong>
        <p style={{ fontSize: '10px', wordBreak: 'break-all' }}>{qrToken || 'GENERATING-PASS...'}</p>
      </div>

      <p style={{ color: 'red', fontWeight: 'bold' }}>
        Pass Refreshes In: {timeLeft}s (Prevents Screenshot Proxy)
      </p>
    </div>
  );
}
