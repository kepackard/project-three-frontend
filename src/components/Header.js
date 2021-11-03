import { Link } from "react-router-dom";
//importing the react 'link' component feature

function Header(props) {

    return (
        <nav className="nav">
            <Link to="/">
                <div>National Park Lesson Plans</div>
            </Link>
        </nav>
    );
  }
  
  export default Header;