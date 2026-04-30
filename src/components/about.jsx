import React from "react";

export default function About({ image, about }) {
    return (
            <aside>
                <img src={image} className="logo" alt="blog logo" />
                <p className="p">{about}</p>
            </aside>
    );
}