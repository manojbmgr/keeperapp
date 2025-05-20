import React from "react";
function Footer() {
    return (
        <footer className="footer bg-dark text-light text-center fixed-bottom py-3">
            <div className="container">
                <span><p>&copy; {new Date().getFullYear()} Keeper App</p></span>
            </div>
        </footer>
    );
}
export default Footer;
