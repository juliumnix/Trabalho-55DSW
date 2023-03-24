import React from "react";
import Rive from "@rive-app/react-canvas";
import Loading_dots from "../../animations/loading_dots.riv";
import Loading_dots_black from "../../animations/loading_dots_black.riv";

function Loading({ isBlack }) {
  return (
    <>
      {isBlack ? (
        <Rive src={Loading_dots_black} />
      ) : (
        <Rive src={Loading_dots} />
      )}
    </>
  );
}

export default Loading;
