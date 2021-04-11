import { useState, useRef, useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { getImageName } from "../Utils/utilFunctions";
const renderLoader = () => <p>Loading</p>;

const PressKeyScreen = (props) => {
  const inputRef = useRef(null);
  const [inputKey, setKey] = useState("");
  const [image, setImg] = useState(null);
  useEffect(() => {
    inputRef.current.focus();
    setKey("");
  }, []);

  let onChangeKey = (e) => {
    let keyPressed = e.target.value;
    setImg(keyPressed);
    keyPressed = getImageName(keyPressed);
    if (keyPressed == null) {
      setImg(null);
      return;
    }
    import(`../images/${keyPressed}`).then((image) => {
      setImg(image.default);
    });
  };

  return (
    <Layout>
      <Header />
      <div class="hero">
        <div class="hero__container">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter what you want"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              position: "absolute",
              top: "60%",
              left: 0,
              right: 0,
            }}
            onChange={onChangeKey}
            value={inputKey}
          />
          {image == null ? null : (
            <img src={image} alt="alien" className="hero__container--img" />
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default PressKeyScreen;
