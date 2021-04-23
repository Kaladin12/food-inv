import {BrowserRouter as Router, NavLink} from 'react-router-dom';


const NavBar = () => {
        const handleSub = (e)=>{
            e.preventDefault();
        }

        return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarColor01">

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact to='/home'>Home</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact to="/create">New Item </NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" exact to="/zero">Zero </NavLink>
                            </li>
                        </ul>

                    <form className="form-inline my-2 my-lg-0" onSubmit={handleSub}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;