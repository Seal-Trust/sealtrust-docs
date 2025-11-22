export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: '12px'
    }}>
      <div style={{
        width: '24px',
        height: '24px',
        border: '3px solid #e5e7eb',
        borderTopColor: '#0070f3',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <span style={{ color: '#666' }}>Loading...</span>
    </div>
  )
}
