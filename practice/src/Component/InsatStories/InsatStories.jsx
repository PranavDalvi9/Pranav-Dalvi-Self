import React from 'react'

import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "images/1.jpg" },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "images/5.jpg" },
    { url: "images/6.jpg" },
    { url: "images/7.jpg" },
];


export default function InsatStories() {
    return (
        <div>
            <h1>hello</h1>

            <div>
                <div>
                    <SimpleImageSlider
                        width={896}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>

<div>
    {/* <p>{images}</p> */}
</div>

        </div>
    )
}
