
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
import axios from 'axios';
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [routes, setRoutes] = useState<any>(false)
  const router = useSelector((state: any) => state.Memo);
  const [messages, setMessages] = useState<any>([]);
  const handleNewMessage = useCallback((message: any) => {
    setMessages((prevMessages: any) => [...prevMessages, message]);
  }, []);

  useWebSocket('wss://apiservices.ddnsgeek.com/ws', handleNewMessage);
  useEffect(() => {
    if (router?.id?.response == undefined) {
      setRoutes(false)
    } else {
      setRoutes(true)
    }
  }, [router])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/dashboard" element=
          {routes ?
            <><PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <ECommerce /></> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/calendar" element=
          {routes ?
            <> <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Calendar /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/profile" element=
          {routes ?
            <> <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Profile /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/forms/form-elements" element=
          {routes ?
            <> <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <FormElements /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/forms/form-layout" element=
          {routes ?
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <FormLayout /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/tables" element=
          {routes ?
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Tables /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>
          } />
        <Route path="/settings" element=
          {routes ?
            <> <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Settings /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>
          } />
        <Route path="/chart" element=
          {routes ?
            <> <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Chart /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/ui/alerts" element=
          {routes ?
            <> <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Alerts /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/ui/buttons" element=
          {routes ?
            <> <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Buttons /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/auth/signup" element=
          {routes ?
            <> <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignUp /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
      </Routes>
    </>

  );
}

export default App;
