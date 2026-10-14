import React, { useState } from 'react';

export default function LeadScanner() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scannedMember, setScannedMember] = useState(null);

  const handlePinSubmit = () => {
    if (pin === '4482') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid Lead Master PIN! Access Denied.');
    }
  };

  const simulateScan = () => {
    setScannedMember({
      name: 'Rahul Sharma',
      rollNumber: '21BD1A0501',
      club: 'SPECDAM',
      domain: 'DANCE',
      year: 3,
      profilePicUrl: 'https://i.pravatar.cc/150?img=12'
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      {!isAuthenticated ? (
        <div>
          <h3>Enter Lead Master PIN to Unlock Scanner</h3>
          <input 
            type="password" 
            placeholder="Enter PIN (4482)" 
            value={pin} 
            onChange={(e) => setPin(e.target.value)} 
          />
          <button onClick={handlePinSubmit}>Unlock Scanner</button>
        </div>
      ) : (
        <div>
          <h3>Scanner Active (Dance Practice Session)</h3>
          <button onClick={simulateScan}>[ Simulate Dynamic QR Scan ]</button>

          {scannedMember && (
            <div style={{ border: '2px solid green', padding: '20px', marginTop: '20px' }}>
              <h4>VERIFICATION MODAL</h4>
              <img 
                src={scannedMember.profilePicUrl} 
                alt="Profile" 
                style={{ width: '120px', height: '120px', borderRadius: '50%' }} 
              />
              <h3>{scannedMember.name}</h3>
              <p>Roll No: {scannedMember.rollNumber}</p>
              <p>Club: {scannedMember.club} | Domain: {scannedMember.domain}</p>
              
              <button style={{ background: 'green', color: 'white', marginRight: '10px' }} onClick={() => alert('Attendance Marked Present!')}>
                CONFIRM PRESENT
              </button>
              <button style={{ background: 'red', color: 'white' }} onClick={() => alert('Proxy Rejected!')}>
                REJECT (PROXY)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
