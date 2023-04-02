import React, { useEffect, useState } from "react";
import { useUsuario } from "../../hooks/UsuarioHook";
import UserService from "../../services/UserService";

import {
  Container,
  ContainerImage,
  ContainerLeft,
  ContainerRight,
  Delete,
  Price,
  PrimaryInformation,
  QuantityButton,
  QuantityIndicator,
  QuantityMedidor,
  QuantityText,
  Subtitle,
  Title,
} from "./styles";
import UploadImageService from "../../services/UploadImageService";

function ShoppingCartItem({
  titulo,
  tamanhos,
  preco,
  quantidade,
  urlImagem,
  id,
  produtos,
  setProdutos,
  setValorTotal,
  valorTotal,
  ...rest
}) {
  const { getUsuarioFromLocalState } = useUsuario();
  const [tamanho, setTamanho] = useState("");
  const [qtd, setQtd] = useState(0);
  const [precoAtualizado, setPrecoAtualizado] = useState(0);
  const [image, setImage] = useState("");
  const userService = new UserService();
  const imageService = new UploadImageService();

  useEffect(() => {
    setQtd(quantidade);
    setPrecoAtualizado(preco * quantidade);
    setTamanho(tamanhos.sigla);
    downloadImage();
  }, []);

  async function downloadImage() {
    const response = await imageService.servicoDeRecuperarImagem(urlImagem);
    setImage(response);
  }

  async function increase(itemid) {
    const user = await getUsuarioFromLocalState();
    await userService.increaseItemCount(user.id, itemid);
  }

  async function decrease(itemid) {
    const user = await getUsuarioFromLocalState();
    await userService.decreaseItemCount(user.id, itemid);
  }

  async function remove(itemid) {
    const user = await getUsuarioFromLocalState();
    await userService.removeItem(user.id, itemid);
  }

  async function removeItem() {
    await remove(id);
    const novaLista = [...produtos];
    const response = novaLista.filter((item) => item.id !== id);
    const novoValorFinal = preco * qtd;
    const novoValor = valorTotal - novoValorFinal;
    setValorTotal(novoValor.toFixed(2));
    setProdutos(response);
  }

  async function addQtd() {
    const novaQtd = qtd + 1;
    await increase(id);
    setQtd(novaQtd);

    const novoValorTotal = Number(valorTotal) + preco;
    const novoValorFinal = preco * novaQtd;

    setPrecoAtualizado(novoValorFinal.toFixed(2));
    setValorTotal(novoValorTotal.toFixed(2));
  }

  async function removeQtd() {
    const novaQtd = qtd - 1;
    if (novaQtd >= 1) {
      await decrease(id);
      setQtd(novaQtd);
      const novoValorTotal = Number(valorTotal) - preco;
      const valorDoQTD = preco * novaQtd;

      setValorTotal(novoValorTotal.toFixed(2));
      setPrecoAtualizado(valorDoQTD.toFixed(2));
    }
    return 1;
  }

  return (
    <Container {...rest}>
      <ContainerImage src={image} />
      <ContainerLeft>
        <PrimaryInformation>
          <Title>{titulo}</Title>
          <Subtitle>{"Tamanhos: " + tamanho}</Subtitle>
        </PrimaryInformation>

        <QuantityMedidor>
          <QuantityText>Quantidade</QuantityText>
          <QuantityIndicator>{qtd}</QuantityIndicator>
          <QuantityButton onClick={removeQtd}>-</QuantityButton>
          <QuantityButton onClick={addQtd}>+</QuantityButton>
        </QuantityMedidor>
      </ContainerLeft>
      <ContainerRight>
        <Delete onClick={removeItem}>X</Delete>
        <Price>$ {precoAtualizado}</Price>
      </ContainerRight>
    </Container>
  );
}

export default ShoppingCartItem;
