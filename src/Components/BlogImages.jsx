import React from "react";

function BlogImages({
  image1,
  image2,
  image1Alt,
  image2Alt,
  image3,
  image3Alt,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[30px] mb-[30px]">
      <img
        src={image1}
        alt={image1Alt}
        className="w-full h-auto sm:max-h-[250px] md:max-h-[450px]"
        style={{ objectFit: "contain" }}
      />
      <img
        src={image2}
        alt={image2Alt}
        className="w-full h-auto sm:max-h-[250px] md:max-h-[450px]"
        style={{ objectFit: "contain" }}
      />
      <img
        src={image3}
        alt={image3Alt}
        className="w-full h-auto sm:max-h-[250px] md:max-h-[450px]"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default BlogImages;
