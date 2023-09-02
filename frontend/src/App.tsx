import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [authType, setAuthType] = React.useState<'login' | 'register'>('login');

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');


  async function signup() {
    if (password !== passwordConfirmation) {
      alert('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);
      alert('User created successfully')
    } catch (error) {
      console.error(error);
      alert('Some error occurred')
    }
  }

  async function login() {
    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data);
      alert('User logged in successfully')
    } catch (error) {
      console.error(error);
      alert('Some error occurred')
    }
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col items-center justify-center">
      {
        authType === 'login' ?
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3
                text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                focus:outline-none focus:shadow-outline"
                type="button"
                onClick={login}
              >
                Login
              </button>
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                type="button"
                onClick={() => setAuthType('register')}
              >
                Register
              </button>
            </div>
          </div>
          :
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                leading-tight"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                leading-tight"
                id="email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                leading-tight"
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirmation">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700
                leading-tight"
                id="passwordConfirmation"
                type="password"
                placeholder="********"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                focus:outline-none focus:shadow-outline"
                type="button"
                onClick={signup}
              >
                Register
              </button>
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                type="button"
                onClick={() => setAuthType('login')}
              >
                Login
              </button>
            </div>
          </div>
      }
    </div>
  );
}

export default App;
