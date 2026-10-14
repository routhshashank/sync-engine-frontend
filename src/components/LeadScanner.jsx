import React, { useState } from 'react';

export default function LeadScanner() {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [scannedMember, setScannedMember] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === '4482') {
      setIsAuthenticated(true);
      setStatusMessage('');
    } else {
      setStatusMessage('Access Denied: Invalid Master PIN');
    }
  };

  const simulateScan = () => {
    setScannedMember({
      name: 'Rahul Sharma',
      rollNumber: '21BD1A0501',
      club: 'SPECDAM',
      domain: 'DANCE',
      year: '3rd Year',
      profilePicUrl: 'https://i.pravatar.cc/150?img=12'
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.badge}>SYNC ENGINE v2.0</div>
        <h1 style={styles.title}>Domain Lead Terminal</h1>
        <p style={styles.subtitle}>Verified Multi-Club Attendance Gateway</p>
      </div>

      {!isAuthenticated ? (
        <div style={styles.card}>
          <div style={styles.lockIcon}>🔒</div>
          <h2 style={styles.cardTitle}>Lead Authentication</h2>
          <p style={styles.cardDesc}>Enter 4-Digit Security Master PIN</p>
          
          <form onSubmit={handlePinSubmit} style={styles.form}>
            <input
              type="password"
              maxLength="4"
              placeholder="••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              style={styles.pinInput}
            />
            <button type="submit" style={styles.primaryBtn}>
              Unlock Terminal
            </button>
          </form>

          {statusMessage && <p style={styles.errorText}>{statusMessage}</p>}
        </div>
      ) : (
        <div style={styles.card}>
          <div style={styles.statusBanner}>
            <span style={styles.liveDot}></span> SCANNER ACTIVE
          </div>

          <button onClick={simulateScan} style={styles.scanBtn}>
            📷 Simulate Dynamic QR Scan
          </button>

          {scannedMember && (
            <div style={styles.modalCard}>
              <div style={styles.modalHeader}>
                <span style={styles.verifiedBadge}>✓ MATCH FOUND</span>
              </div>
              
              <img
                src={scannedMember.profilePicUrl}
                alt="Member Profile"
                style={styles.profileAvatar}
              />

              <h3 style={styles.memberName}>{scannedMember.name}</h3>
              <p style={styles.rollNo}>{scannedMember.rollNumber}</p>

              <div style={styles.infoGrid}>
                <div style={styles.infoBox}>
                  <small style={styles.infoLabel}>CLUB</small>
                  <strong>{scannedMember.club}</strong>
                </div>
                <div style={styles.infoBox}>
                  <small style={styles.infoLabel}>DOMAIN</small>
                  <strong>{scannedMember.domain}</strong>
                </div>
              </div>

              <div style={styles.actionRow}>
                <button
                  onClick={() => {
                    alert('Attendance Marked Present!');
                    setScannedMember(null);
                  }}
                  style={styles.confirmBtn}
                >
                  Confirm Present
                </button>
                <button
                  onClick={() => setScannedMember(null)}
                  style={styles.rejectBtn}
                >
                  Reject
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    fontFamily: "'Inter', system-ui, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
  },
  header: { textAlign: 'center', marginBottom: '24px' },
  badge: {
    display: 'inline-block',
    background: 'rgba(59, 130, 246, 0.15)',
    color: '#60a5fa',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
    marginBottom: '8px',
  },
  title: { fontSize: '28px', fontWeight: '800', margin: '4px 0', color: '#ffffff' },
  subtitle: { fontSize: '14px', color: '#94a3b8' },
  card: {
    width: '100%',
    maxWidth: '420px',
    backgroundColor: '#1e293b',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
    border: '1px solid #334155',
    textAlign: 'center',
  },
  lockIcon: { fontSize: '36px', marginBottom: '12px' },
  cardTitle: { fontSize: '20px', fontWeight: '700', color: '#f8fafc', margin: '0 0 4px 0' },
  cardDesc: { fontSize: '13px', color: '#94a3b8', marginBottom: '20px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  pinInput: {
    padding: '14px',
    fontSize: '22px',
    textAlign: 'center',
    letterSpacing: '8px',
    borderRadius: '10px',
    border: '2px solid #475569',
    backgroundColor: '#0f172a',
    color: '#38bdf8',
    outline: 'none',
  },
  primaryBtn: {
    padding: '12px',
    fontSize: '15px',
    fontWeight: '600',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    cursor: 'pointer',
  },
  errorText: { color: '#ef4444', fontSize: '13px', marginTop: '12px' },
  statusBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    color: '#4ade80',
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  liveDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#4ade80',
    borderRadius: '50%',
  },
  scanBtn: {
    width: '100%',
    padding: '14px',
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#059669',
    color: '#ffffff',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  modalCard: {
    backgroundColor: '#0f172a',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #22c55e',
  },
  modalHeader: { marginBottom: '12px' },
  verifiedBadge: {
    background: 'rgba(34, 197, 94, 0.2)',
    color: '#4ade80',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '11px',
    fontWeight: '700',
  },
  profileAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '3px solid #38bdf8',
    marginBottom: '8px',
  },
  memberName: { fontSize: '18px', fontWeight: '700', margin: '4px 0' },
  rollNo: { fontSize: '13px', color: '#94a3b8', margin: '0 0 16px 0' },
  infoGrid: { display: 'flex', gap: '10px', marginBottom: '16px' },
  infoBox: {
    flex: 1,
    backgroundColor: '#1e293b',
    padding: '10px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  infoLabel: { fontSize: '10px', color: '#64748b' },
  actionRow: { display: 'flex', gap: '10px' },
  confirmBtn: {
    flex: 2,
    padding: '10px',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#16a34a',
    color: '#ffffff',
    cursor: 'pointer',
  },
  rejectBtn: {
    flex: 1,
    padding: '10px',
    fontSize: '13px',
    fontWeight: '700',
    borderRadius: '8px',
    border: '1px solid #dc2626',
    backgroundColor: 'transparent',
    color: '#f87171',
    cursor: 'pointer',
  },
};
