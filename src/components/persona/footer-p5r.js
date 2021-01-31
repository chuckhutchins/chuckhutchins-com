import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Chuck Hutchins
            </div>
        </footer>
    );
}
