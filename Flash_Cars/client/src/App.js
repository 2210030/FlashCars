import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter , Redirect, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import ForgotPassword from './pages/ForgotPassword';
import FeedbackPage from './pages/FeedbackPage';
import 'react-typist/dist/Typist.css';
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import FAQs from './pages/FAQs'
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';



function App() {
  return (
    <div className="App">

         
         
         <BrowserRouter>
             
             <ProtectedRoute path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/forgot-password' exact component={ForgotPassword} />
             <Route path='/register' exact component={Register} />
             <ProtectedRoute path='/booking/:carid' exact component={BookingCar} />
             <ProtectedRoute path='/userbookings' exact component={UserBookings} />
             <Route path="/feedback" component={FeedbackPage} />
             <ProtectedRoute path='/addcar' exact component={AddCar} />
             <ProtectedRoute path='/editcar/:carid' exact component={EditCar} />
             <ProtectedRoute path='/admin' exact component={AdminHome} />
             <ProtectedRoute path='/about' exact component={About} />
             <ProtectedRoute path='/contact' exact component={ContactUs} />
             <ProtectedRoute path='/faq' exact component={FAQs} />
             <ProtectedRoute path='/terms' exact component={TermsAndConditions} />
             <ProtectedRoute path='/privacy' exact component={PrivacyPolicy} />


         
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Redirect to='/login'/>
    }

}
export function AdminProtectedRoute(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user?.isAdmin) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
}