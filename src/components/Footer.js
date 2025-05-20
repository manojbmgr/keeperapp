import React from "react";
function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-light text-center">
            <div className="container">
                <span><p>&copy; {new Date().getFullYear()} Keeper App</p></span>
            </div>
        </footer>
    )
}
export default Footer;