import React from "react";

function About({ image, about }) {
    return (
            <aside>
                <img src={image} className="logo" alt="blog logo" />
                <p className="p">{about}</p>
            </aside>
    );
}

export default About;