import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [image, setImages] = useState([]);

  const api = {
    baseurl: "https://jsonplaceholder.typicode.com/photos?_limit=5",
  };

  useEffect(() => {
    fetch(api.baseurl)
      .then((response) => response.json())
      .then((json) => setImages(json));
  }, []);

  const prevClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const nextClick = () => {
    if (count < image.length - 1) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <h1>Image slider using React</h1>
      <div className="image_slider">
        <button onClick={prevClick}>prev</button>
        {image.length > 0 && (
          <div>
            <img src={image[count].url} alt={image[count].title} />
            <div className="image-index">
              {image.map((_, index) => (
                <span
                  key={index}
                  className={`index-number ${index === count ? "active" : ""}`}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        )}

        <button onClick={nextClick}>next</button>
      </div>
    </>
  );
}

export default App;
