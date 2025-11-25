import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(){
    return (
        <>
            <div style={{display: "flex",background:"green" ,justifyContent: "space-between", alignItems: "center",fontSize: 17, fontWeight: "normal"}}>
                <div style={{display: "flex", gap: 20,justifyContent:"space-around", alignItems: "center"}}>
                    <Link className="link-primary" style={{textDecoration: "none", fontSize: 25, fontWeight: "bold"}} to={"/"}>ALLEN</Link>
                    <div className="menu-item">
                        <Link className="link" style={{textDecoration: "none"}} to={"/classroom-courses"}>Classroom Courses</Link>
                        <div className="hover-box">
                            <Link className="hover-item" to={"/classroom-courses"}>class 7</Link>
                            <Link className="hover-item" to={"/classroom-courses"}>class 8</Link>
                            <Link className="hover-item" to={"/classroom-courses"}>class 9</Link>
                            <Link className="hover-item" to={"/classroom-courses"}>class 10</Link>
                        </div>
                    </div>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/online-courses"}>Online Courses</Link>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/test-series"}>Test Series</Link>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/results"}>Results</Link>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/study-materials"}>Study Materials</Link>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/scholorships"}>Scholarships</Link>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/allen-store"}>ALLEN-Store</Link>
                    <Link className="menu-item" style={{textDecoration: "none"}} to={"/more"}>More</Link>
                </div>
                <div>
                    <button className="login-btn" style={{fontSize: 18, padding: 8, paddingLeft: 16, paddingRight: 16, borderRadius: 10, cursor: "pointer"}}>Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;