import './App.css';
import logo from './redfal.png';
const App = () => {
  return (
    <div className="parent">
<div className="header">
  <h1><img src={logo} className="App-logo" alt="falcon_logo" />Red Falcons</h1>
</div>

<div className='main-content'>
<div class="sidebar">
  <a href="#home"><i class="fa fa-fw fa-home"></i> Home</a>
  <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
</div>

<div className="main">
  <h3>Welcome to Red Falcon Club</h3>
  <p>Here you can read useful Articles,</p>
    <p>News and Blogs.</p> 
  <p>Keep supporting and stay with us.</p>
</div>
</div>



    </div>

  );
}

export default App;
