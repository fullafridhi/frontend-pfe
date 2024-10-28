import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgetPassword from './pages/ForgetPassword';
import Signup from './pages/Signup';
import Verify from './pages/Verify';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
// import CourseList from './components/CourseList';
import AddVideo from './components/AddVideo'; 
import VideoPlayer from './components/VideoPlayer';
import CourseDetail from './components/CourseDetail';
import Profile from './components/Profile';
import VideoList from './components/VideoList';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App app-background"> 
      <header className="App-header">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/verify" element={<Verify />} />
          {/* <Route path="/" element={<CourseList />} /> */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/add-video/:courseId" element={<AddVideo />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/watch/:videoId" element={<VideoPlayer />} />
          <Route path="/footer" element={<Footer />} />
          
        </Routes>
      </header>
    </div>
  );
}

export default App;
