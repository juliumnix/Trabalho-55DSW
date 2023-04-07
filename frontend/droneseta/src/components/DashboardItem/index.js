import React, { useEffect, useState } from "react";

import {
  Container,
  ContainerImagem,
  InfoContainer,
  TitleContainer,
} from "./styles";
import UploadImageService from "../../services/UploadImageService";

function DashboardItem({ image, height, title }) {
  const [imagem, setImagem] = useState("");
  const imageServices = new UploadImageService();

  useEffect(() => {
    downloadImage();
  }, []);

  async function downloadImage() {
    const response = await imageServices.servicoDeRecuperarImagem(image);
    console.log(response);
    setImagem(response);
  }
  return (
    <Container>
      <ContainerImagem src={imagem} />
      <InfoContainer style={{ height: height }}>
        <TitleContainer>{title}</TitleContainer>
      </InfoContainer>
    </Container>
  );
}

export default DashboardItem;
