import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  
  const userEmail = localStorage.getItem("userEmail") || "Engineer";
  const userName = userEmail.split('@')[0].toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate('/login');
  };

  return (
    <div className="dashboard-container" style={{ padding: '80px 40px', backgroundColor: '#050505', minHeight: '100vh', color: '#eee', fontFamily: 'Inter, sans-serif' }}>
      
      {/* --- HEADER --- */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.8rem', letterSpacing: '1px' }}>SYSTEMS STATUS: <span style={{ color: '#ff4d4d' }}>OPERATIONAL</span></h2>
          <p style={{ color: '#666', margin: '5px 0' }}>Welcome, Chief Engineer {userName} | Protocol v4.2.0</p>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <div style={{ textAlign: 'right', marginRight: '20px' }}>
            <div style={{ color: '#888', fontSize: '0.8rem' }}>SERVER TIME</div>
            <div style={{ fontWeight: 'bold' }}>{new Date().toLocaleTimeString()}</div>
          </div>
          <button onClick={handleLogout} className="auth-btn" style={{ width: 'auto', padding: '10px 25px', background: 'transparent', border: '1px solid #ff4d4d', color: '#ff4d4d' }}>
            DE-AUTHORIZE
          </button>
        </div>
      </header>

      {/* --- TOP ROW: GLOBAL METRICS --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '30px' }}>
        {[
          { label: 'TOTAL ASSETS', val: '$4.2B', color: '#fff' },
          { label: 'ACTIVE WORKERS', val: '1,240', color: '#fff' },
          { label: 'ENERGY EFFICIENCY', val: 'A+', color: '#00ff00' },
          { label: 'OSHA COMPLIANCE', val: '100%', color: '#00ff00' }
        ].map((stat, i) => (
          <div key={i} style={{ background: '#111', padding: '20px', borderRadius: '8px', borderLeft: `4px solid ${stat.color}` }}>
            <div style={{ color: '#666', fontSize: '0.8rem', marginBottom: '5px' }}>{stat.label}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: stat.color }}>{stat.val}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
        
        {/* --- LEFT COLUMN: CORE OPERATIONS --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* LOGISTICS & GLOBAL MAP SIMULATION */}
          <div style={{ background: '#111', padding: '25px', borderRadius: '12px', border: '1px solid #222' }}>
            <h4 style={{ color: '#ff4d4d', marginTop: 0, marginBottom: '20px' }}>GLOBAL LOGISTICS TRACKER</h4>
            <div style={{ height: '200px', background: '#0a0a0a', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', border: '1px dashed #333' }}>
              <p style={{ color: '#444' }}>[ GLOBAL COORDINATE MAP LOADED ]</p>
              {/* Decorative Map Dots */}
              <div style={{ position: 'absolute', top: '30%', left: '20%', width: '8px', height: '8px', background: '#ff4d4d', borderRadius: '50%', boxShadow: '0 0 10px #ff4d4d' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '70%', width: '8px', height: '8px', background: '#ff4d4d', borderRadius: '50%', boxShadow: '0 0 10px #ff4d4d' }}></div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
              <div style={{ textAlign: 'center' }}><small style={{ color: '#666' }}>NYC HUB</small><br/><b>ACTIVE</b></div>
              <div style={{ textAlign: 'center' }}><small style={{ color: '#666' }}>DUBAI HUB</small><br/><b>STANDBY</b></div>
              <div style={{ textAlign: 'center' }}><small style={{ color: '#666' }}>LONDON HUB</small><br/><b>ACTIVE</b></div>
            </div>
          </div>

          {/* STRUCTURAL HEALTH MONITOR */}
          <div style={{ background: '#111', padding: '25px', borderRadius: '12px', border: '1px solid #222' }}>
            <h4 style={{ color: '#ff4d4d', marginTop: 0 }}>STRUCTURAL SENSOR TELEMETRY</h4>
            <div style={{ marginTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Foundation Stability (The Zenith)</span>
                <span style={{ color: '#00ff00' }}>99.98%</span>
              </div>
              <div style={{ height: '4px', background: '#222', borderRadius: '2px' }}>
                <div style={{ width: '99%', height: '100%', background: '#00ff00' }}></div>
              </div>
            </div>
            <div style={{ marginTop: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>Wind Sway Deflection</span>
                <span style={{ color: '#ffcc00' }}>2.1cm / 5.0cm (MAX)</span>
              </div>
              <div style={{ height: '4px', background: '#222', borderRadius: '2px' }}>
                <div style={{ width: '42%', height: '100%', background: '#ffcc00' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: COMMS & TEAM --- */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* TEAM CHAT / COMMS */}
          <div style={{ background: '#111', padding: '25px', borderRadius: '12px', border: '1px solid #222', height: '100%' }}>
            <h4 style={{ color: '#ff4d4d', marginTop: 0 }}>SITE COMMUNICATIONS</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
              <div style={{ fontSize: '0.85rem', borderLeft: '2px solid #ff4d4d', paddingLeft: '10px' }}>
                <b style={{ color: '#ff4d4d' }}>Site Manager:</b> Crane 4 is clear for the heavy lift.
                <div style={{ fontSize: '0.7rem', color: '#555' }}>10 mins ago</div>
              </div>
              <div style={{ fontSize: '0.85rem', borderLeft: '2px solid #888', paddingLeft: '10px' }}>
                <b style={{ color: '#888' }}>Supply Chain:</b> Steel shipment cleared customs in Jersey.
                <div style={{ fontSize: '0.7rem', color: '#555' }}>25 mins ago</div>
              </div>
              <div style={{ fontSize: '0.85rem', borderLeft: '2px solid #ff4d4d', paddingLeft: '10px' }}>
                <b style={{ color: '#ff4d4d' }}>Safety Lead:</b> All floors inspected. No hazards.
                <div style={{ fontSize: '0.7rem', color: '#555' }}>1 hour ago</div>
              </div>
            </div>
            <input 
              type="text" 
              placeholder="Broadcast to all sites..." 
              style={{ width: '100%', marginTop: '30px', background: '#000', border: '1px solid #333', padding: '10px', color: '#fff', borderRadius: '4px' }}
            />
          </div>

          {/* WEATHER RADAR SIMULATION */}
          <div style={{ background: 'linear-gradient(135deg, #111, #000)', padding: '25px', borderRadius: '12px', border: '1px solid #222', textAlign: 'center' }}>
            <h5 style={{ margin: 0, color: '#888' }}>SKYLINE TEMP</h5>
            <div style={{ fontSize: '3rem', fontWeight: 'bold' }}>18°C</div>
            <p style={{ color: '#ffcc00' }}>WIND SPEED: 12KM/H</p>
          </div>

        </div>
      </div>
    </div>
  );
}