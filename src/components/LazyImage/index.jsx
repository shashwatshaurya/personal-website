import React, { useState, memo, useEffect, useLayoutEffect } from "react";
import { Blurhash } from "react-blurhash";

const LazyImage = ({ src, alt, blurhash, appliedClass, cHeight, cWidth }) => {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.alt = alt || "";
    img.onload = () => {
      setLoaded(true);
      document.getElementById(`${blurhash}`).appendChild(img);
    };
  }, [src, alt, blurhash]);

  useLayoutEffect(() => {
    if (!loaded)
      document?.getElementById('blurhashwrapper')?.children[0]?.classList.add(appliedClass);
  }, [loaded]);


  return (
    <>
      <div id={'blurhashwrapper'} style={{ display: loaded ? "none" : "block" }}>
        <Blurhash
          hash={blurhash}
          resolutionX={32}
          resolutionY={32}
          height={cHeight}
          width={cWidth}
          punch={1}
        />
      </div>
      <div id={blurhash} style={{ display: loaded ? "block" : "none" }} className={appliedClass}>
      </div>
    </>
  );
};

export default memo(LazyImage);
