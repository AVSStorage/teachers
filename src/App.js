import './App.css';
import './components/Popup';
import Header from './components/global/header/Header'
import SideBar from './components/global/Sidebar';
import Test from './components/materials/Tests';
import Course from './components/materials/Course'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Themes from './components/materials/Themes';
import Lessons from './components/materials/Lessons';
import Lesson from './components/materials/lessons/Lesson';
import Tasks from './components/materials/tasks/Tasks';
import Links from './components/materials/links/Links';
import Files from './components/materials/files/Files';
import Schedule from './components/schedule/Schedule';
import Task from './components/materials/tasks/Task';
import Theme from './components/materials/themes/Theme';
import Students from './components/Students';
import Student from './components/student/Student';
import Blog from './components/Blog';
import Profile from './components/Profile';
import ProfileEditForm from './components/ProfileEditForm';
import Settings from './components/Settings';
import Chat from './components/Chat';
import Welcome from './components/Welcome';
import LoginPopup from './components/global/auth/LoginPopup';
import ResetPasswordPopup from './components/global/auth/ResetPasswordPopup';
import RegisterPopup from './components/global/auth/RegisterPopup';
import { useSelector } from 'react-redux'

function App() {
  const {isAuth} = useSelector(state => state.user)
  
  
  return (
      <div className="wrapper">
    <Router>
        {isAuth && (
  <Header/>
        )}
      
        <div className="d-flex">
        {isAuth && (
    <SideBar/>
        )}
       
        <div className="w-100">
       <Switch>
       <Route exact path="/">
            <Welcome/>
            <LoginPopup/>
            <RegisterPopup/>
            <ResetPasswordPopup/>
            
    </Route>
          <Route exact path="/teachers">
            <Schedule/>
            
    </Route>
    <Route path="/courses">
      <Course/>
    </Route>
    <Route path="/themes">
     <Themes/>
    </Route>
    <Route path="/lessons">
      <Lessons/>
    </Route>
    <Route path="/tests">
        <Test/>
    </Route>
    <Route path="/tasks">
        <Tasks/>
    </Route>
    <Route path="/files">
        <Files/>
    </Route>
    <Route path="/links">
        <Links/>
    </Route>
    <Route path="/task/:id">
        <Task/>
    </Route>
    <Route path="/theme/:id">
        <Theme/>
    </Route>
    <Route path="/lesson/:id">
        <Lesson/>
    </Route>
    <Route path="/students">
      <Students/>
    </Route>
    <Route path="/student/:id">
      <Student/>
    </Route>
    <Route path="/blog">
      <Blog/>
    </Route>
    <Route exact path="/profile">
      <Profile/>
    </Route>
    <Route exact path="/settings">
      <Settings/>
    </Route>
    <Route exact path="/profile/edit">
   <ProfileEditForm/>
    </Route>
    <Route path="/messages">
      <Chat/>
    </Route>

        </Switch>
        </div>
        </div>
    </Router>
      </div>
  );
}

export default App;
