import { useState } from 'react';
import TodoApp from './components/TodoApp';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);
  const toggleAuthPage = () => setShowSignUp(!showSignUp);

  return (
    <div style={{ padding: '2rem' }}>
      {!isAuthenticated ? (
        <>
          {showSignUp ? (
            <SignUp onLogin={handleLogin} togglePage={toggleAuthPage} />
          ) : (
            <SignIn onLogin={handleLogin} togglePage={toggleAuthPage} />
          )}
        </>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md max-h-[90vh] overflow-hidden flex flex-col">
            <h1 className="text-xl font-semibold text-center mb-4">📝 My ToDo App</h1>
            <div className="flex-grow overflow-auto">
        <TodoApp />
            </div>
          </div>
        </div>

      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f2f2f2',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    color: '#333'
  }
};

export default App;
 