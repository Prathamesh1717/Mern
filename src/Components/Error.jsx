import { NavLink } from "react-router-dom"

const Error = () => {
    return(
        <>
        <section id="error-page">
            <div className="container content">
       <h2 className="header">404</h2>
        <h4> oops! page not found</h4>
        <p>
        sorry, the page you are looking for doesn't exist. you can go back to the homepage
        </p>

        <div className="btns">
            <NavLink to = "/">return home</NavLink>
            <NavLink to = "/contact">contact us</NavLink>
           </div>
           </ div>
        </section>
        </>
    )
}

export default Error;