import { Link } from "react-router-dom";
//importing the react 'link' component feature

function Header(props) {

    return (
        <nav className="nav">
            <Link to="/">
                <header>You Are Here</header>
                <div className="subheader">National Park Lesson Plans for Educators</div>
            </Link>
            <img className="mountain" src="https://imgur.com/lbEgVVu.png" alt="mountain drawing"/>
        </nav>
    );
  }
  
  export default Header;