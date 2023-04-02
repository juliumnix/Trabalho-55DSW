import React, { useEffect, useState } from "react";
import Loading from "../Loading";

import {
  Container,
  ContainerImagem,
  ContainerInfos,
  Price,
  Title,
} from "./styles";
import api from "../../services/AxiosConfig";
import UploadImageService from "../../services/UploadImageService";

function MenStoreItem({ imagem, titulo, preco, isLoading, ...rest }) {
  const imageServices = new UploadImageService();
  const [image, setImage] = useState();

  useEffect(() => {
    downloadImage();
  }, []);

  async function downloadImage() {
    const response = await imageServices.servicoDeRecuperarImagem(imagem);
    setImage(response);
  }
  return (
    <>
      <Container {...rest}>
        {isLoading ? (
          <Loading isBlack />
        ) : (
          <>
            <ContainerImagem src={image} />
            <ContainerInfos>
              <Title>{titulo}</Title>
              <Price>R$ {preco}</Price>
            </ContainerInfos>
          </>
        )}
      </Container>
    </>
  );
}

export default MenStoreItem;
