import React from "react";
import PropTypes from "prop-types";
import MediaHeader from "./MediaHeader";
import Footer from "../footer";
import "../../assets/scss/main.scss";

export default function MediaLayout({ children })  {
    return (
        <section className="container">
            <MediaHeader />
            {children}
            <Footer />
        </section>
    )
}

MediaLayout.propTypes = {
    children: PropTypes.node.isRequired
}
