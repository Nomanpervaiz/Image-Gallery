import React, { useState, useEffect } from 'react';

function Gallery() {
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://pixabay.com/api/?key=45578993-ca6222f00589783713222fd66&q=yellow+flowers&image_type=photo");
                const data = await res.json();
                setImages(data.hits);
            } catch (err) {
                setError(err);
                console.error(err);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="main flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Image Gallery by Noman
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        A gallery is a curated space, either artworks, photographs, or other visual pieces are displayed for public viewing. It serves as a platform for artists to showcase their creations, allowing audiences to appreciate, critique, and sometimes purchase the works. Galleries often host exhibitions, highlighting specific themes, artists, or collections, and play a crucial role in the art world by promoting cultural exchange and artistic expression.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4"   > 
                    {images.map((val, ind) => (
                        <div key={ind} className="lg:w-1/3 sm:w-1/2 p-4" >
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={val.largeImageURL}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                                        Shooting Flowers
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                        {val.tags}
                                    </h1>
                                    <p className="leading-relaxed">

                                        Flowers are the colorful, fragrant reproductive parts of plants and used in decoration, ceremonies, and as symbols of love and beauty.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;
