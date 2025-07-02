import { useState } from 'react';

function SignUp({ onLogin, togglePage }) {
  const [mode, setMode] = useState('email');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignUp = () => {
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }

    if (mode === 'email') {
      console.log('Signing up with email:', email);
    } else {
      console.log('Signing up with mobile:', mobile);
    }

    onLogin(); 
  };

  return (
    <div>
      <h2>Sign Up</h2>
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

      <input
        placeholder="Confirm Password"
        type="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button onClick={handleSignUp}>Create Account</button>
      <p>
        Already have an account?{' '}
        <button onClick={togglePage}>Sign In</button>
      </p>
    </div>
  );
}

export default SignUp;
