# Bharat Ride Frontend

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## React Router DOM Installation

To install React Router DOM, use the following command:

```bash
npm install react-router-dom
```

## Usage

In your `main.jsx` file, you need to use `<BrowserRouter>` to wrap your application. Here is an example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

This will enable routing in your React application.

## Creating Routes in `App.jsx`

To create routes in your `App.jsx` file, you need to import the necessary components from `react-router-dom` and define your routes. Here is an example:

```jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CaptainSignup from './CaptainSignup';
import UserSignup from './UserSignup';
import UserLogin from './UserLogin';
import CaptainLogin from './CaptainLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/captain-signup" element={<CaptainSignup />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
    </Routes>
  );
}

export default App;
```

This will set up routing for your application with the specified paths and components.