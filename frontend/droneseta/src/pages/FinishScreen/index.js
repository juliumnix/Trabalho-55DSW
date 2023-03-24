import React from "react";
import { useRive } from "@rive-app/react-canvas";
import CartAnimation from "../../animations/cart-animated.riv";
import { ButtonNoShadow } from "./styles";
import { useNavigate } from "react-router-dom";

function FinishScreen() {
  const navigate = useNavigate();
  const { rive, RiveComponent } = useRive({
    src: CartAnimation,
    autoplay: true,
  });

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        background: "white",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#5e92a2",
      }}
    >
      <>
        <RiveComponent
          style={{ width: "50vh", height: "50vh" }}
          onMouseEnter={() => {
            if (!rive.isPlaying) {
              rive && rive.reset();
              rive.play();
            }
          }}
        />
        <p
          style={{
            fontSize: "3vw",
            fontWeight: "bold",
            color: "white",
            opacity: "1",
          }}
        >
          Sua compra foi finalizada com sucesso!
        </p>
        <p
          style={{
            fontSize: "2.5vw",
            fontWeight: "normal",
            color: "white",
            opacity: "0.5",
          }}
        >
          Logo logo, seus produtos estarão em suas mãos
        </p>
        <div style={{ paddingTop: "3vh" }}>
          <ButtonNoShadow
            onClick={() => {
              navigate("/home");
            }}
          >
            Voltar para home
          </ButtonNoShadow>
        </div>
      </>
    </div>
  );
}

export default FinishScreen;
