function Gallery({img,title,onClick}) {
  return (
    <div  onClick={onClick} className="lg:w-1/3 sm:w-1/2 p-4 cardMain">
        <div className="flex relative cardss">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={img}
          />
          <div className="cardText px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Shooting Flowers
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed">
              Flowers are the colorful, fragrant reproductive parts of plants
              and used in decoration, ceremonies, and as symbols of love and
              beauty.
            </p>
          </div>
        </div>
      </div>
    
  );
}

export default Gallery;
