
import React, { useEffect, useState, useCallback } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import { useSelector } from 'react-redux';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import useWebSocket from './hooks/useWebsocket';
import { Navigate } from 'react-router-dom';
import { ZohoRefreshTokengetter } from './hooks/zohoRefreshToken';
import Cookies from 'js-cookie';

const PublicRoute = ({ children, redirectTo = '/' }: { children: any, redirectTo: any }) => {
  const isAuthenticated = () => {
    const authUser = Cookies.get('authUser');
    return authUser && JSON.parse(authUser).email;
  };

  return !isAuthenticated() ? children : <Navigate to={redirectTo} />;
};
const PrivateRoute = ({ children }: { children: any }) => {
  const authUser = Cookies.get('authUser');
  const isAuthenticated = authUser && JSON.parse(authUser).email;

  return isAuthenticated ? children : <Navigate to="/signin" />;
};
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [routes, setRoutes] = useState<any>(false)
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const handleNewMessage = useCallback((message: any) => {
    setMessages((prevMessages: any) => [...prevMessages, message]);
  }, []);

  const webSocket = useWebSocket('wss://apiservices.ddnsgeek.com/ws', handleNewMessage);
  const sendMessage = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN && newMessage) {
      webSocket.send(newMessage);
      setNewMessage('');
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  {/* <div>
        <h2>WebSocket Chat</h2>
        <div>
          {messages.map((msg, index) => (
            <p className='text-[red]' key={index}>{msg}</p>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send Message</button>
      </div> */}
  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<PrivateRoute><ECommerce /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><ECommerce /></PrivateRoute>} />
        <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        {/* Continue wrapping other routes that require authentication */}
        <Route path="/forms/form-elements" element={<PrivateRoute><FormElements /></PrivateRoute>} />
        <Route path="/forms/form-layout" element={<PrivateRoute><FormLayout /></PrivateRoute>} />
        <Route path="/tables" element={<PrivateRoute><Tables /></PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path="/chart" element={<PrivateRoute><Chart /></PrivateRoute>} />
        <Route path="/ui/alerts" element={<PrivateRoute><Alerts /></PrivateRoute>} />
        <Route path="/ui/buttons" element={<PrivateRoute><Buttons /></PrivateRoute>} />
        {/* Routes that do not require authentication */}
        <Route path="/signin" element={<PublicRoute redirectTo="/dashboard"><SignIn /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute redirectTo="/dashboard"><SignUp /></PublicRoute>} />
        {/* You can add any other public routes here */}
      </Routes>

    </>

  );
}

export default App;
