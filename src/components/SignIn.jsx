import { useState } from 'react';

function SignIn({ onLogin, togglePage }) {
  const [mode, setMode] = useState('email'); // 'email' or 'mobile'
  // State for email and mobile inputs
  const [email, setEmail] = useState(''); 
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (mode === 'email') {
      console.log('Logging in with email:', email, password);
    } else {
      console.log('Logging in with mobile:', mobile, password);
    }
    onLogin();
  };

  return (
    <div>
      <h2>Sign In</h2>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => setMode('email')}>Email</button>
        <button onClick={() => setMode('mobile')}>Mobile</button>
      </div>

      {mode === 'email' ? (
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <input
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      )}

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account?{' '}
        <button onClick={togglePage}>Sign Up</button>
      </p>
    </div>
  );
}

export default SignIn;
