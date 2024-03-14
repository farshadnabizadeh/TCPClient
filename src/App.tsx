import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
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

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const router = useSelector((state: any) => state.Memo);
  console.log(router?.id?.response)
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
          {router?.id?.response ?
            <><PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <ECommerce /></> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/calendar" element=
          {router?.id?.response ?
            <> <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Calendar /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/profile" element=
          {router?.id?.response ?
            <> <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Profile /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/forms/form-elements" element=
          {router?.id?.response ?
            <> <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <FormElements /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/forms/form-layout" element=
          {router?.id?.response ?
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <FormLayout /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/tables" element=
          {router?.id?.response ?
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Tables /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>
          } />
        <Route path="/settings" element=
          {router?.id?.response ?
            <> <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Settings /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>
          } />
        <Route path="/chart" element=
          {router?.id?.response ?
            <> <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Chart /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/ui/alerts" element=
          {router?.id?.response ?
            <> <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Alerts /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/ui/buttons" element=
          {router?.id?.response ?
            <> <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <Buttons /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
        <Route path="/auth/signup" element=
          {router?.id?.response ?
            <> <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignUp /> </> :
            <> <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" /> <SignIn /> </>} />
      </Routes>
    </>

  );
}

export default App;
