import React, { useState, useRef, useContext, useEffect } from "react";
import { ModelContext } from "../context/model-context";
import { useDimension } from "../utils/dimension-hook";
import useImagePrediction from "./useImagePrediction";
import MagicDropzone from "react-magic-dropzone";
import upload from "../utils/upload.png";

const Detection = () => {
  const { model, labels } = useContext(ModelContext);
  const dimensions = useDimension();
  const [loadedImg, setLoadedImg] = useState(null);
  const [loading,setLoading] = useState(true)
  const imageRef = useRef();
  const resultRef = useRef();

  useImagePrediction(model, labels, loadedImg, imageRef, resultRef) 

  console.log(resultRef)

  const onDrop = (accepted, rejected, links) => {
    if (accepted && accepted.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setLoadedImg(reader.result);
      });
      reader.readAsDataURL(accepted[0]);
    }
  };

  return (
    <>
      <React.Fragment>
        <div>
          <div className="center-div">
            <div className="card">
              <MagicDropzone
                className="dropzone"
                accept="image/jpeg, image/png, .jpg, .jpeg, .png"
                multiple={false}
                onDrop={onDrop}
              >
                <div className="center-div-wrap">
                  {loadedImg ? (
                    <img
                      className="dropzone-image"
                      src={loadedImg}
                      width="100"
                      alt="drop"
                    />
                  ) : (
                    <div>
                      <div className="center-div">
                        <img src={upload} width="50" height="50" alt="upload" />
                      </div>
                      <div style={{ display: "block" }}>
                        <p>Drag/drop files over here</p>
                      </div>
                    </div>
                  )}
                </div>
              </MagicDropzone>
            </div>
          </div>
          <div className="center-div">
            {loadedImg && (
              <div
                style={{
                  width: `${dimensions.width}px`,
                  height: `${dimensions.height}px`,
                }}
              >
                <div className="image-container">
                  <img
                    src={loadedImg}
                    width={dimensions.width}
                    height={dimensions.height}
                    className="image-canvas"
                    ref={imageRef}
                    alt="ok"
                  />
                </div>
                {(loadedImg && <div className="result" ref={resultRef} />)}
              </div>
            )}
          </div>
        </div>
        {console.log(resultRef)}
      </React.Fragment>

    </>
  );
};

export default Detection;
