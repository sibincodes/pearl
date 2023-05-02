import './App.css';
import logo from './redfal.png';
const App = () => {
  return (
    <>
<div className="header">
  <h1><img src={logo} className="App-logo" alt="falcon_logo" />Red Falcons</h1>
</div>

<div className="menu">
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact Us</a></li>
  <li><a href="#about">About Us</a></li>
</ul>

</div>

<div className="main">
  <h3>Welcome to Red Falcon Club</h3>
  <p>Here you can read useful Articles,</p>
    <p>News and Blogs.</p> 
  <p>Keep supporting and stay with us.</p>
  <p>Admin - Sibin John</p>

</div>
    </>

  );
}

export default App;
