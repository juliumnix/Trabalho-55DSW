import React, { useEffect, useState } from "react";

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
  const [tamanho, setTamanho] = useState("");
  const [qtd, setQtd] = useState(0);
  const [precoAtualizado, setPrecoAtualizado] = useState(0);

  useEffect(() => {
    setQtd(quantidade);
    setPrecoAtualizado(preco);
    setTamanho(
      tamanhos.map((item) => {
        return item.sigla + "";
      })
    );
  }, []);

  function removeItem() {
    const novaLista = [...produtos];
    const response = novaLista.filter((item) => item.id !== id);
    const novoValorFinal = preco * qtd;
    const novoValor = valorTotal - novoValorFinal;
    setValorTotal(novoValor.toFixed(2));
    setProdutos(response);
  }

  function addQtd() {
    const novaQtd = qtd + 1;
    setQtd(novaQtd);

    const novoValorTotal = Number(valorTotal) + preco;
    const novoValorFinal = preco * novaQtd;

    setPrecoAtualizado(novoValorFinal.toFixed(2));
    setValorTotal(novoValorTotal.toFixed(2));
  }

  function removeQtd() {
    const novaQtd = qtd - 1;
    if (novaQtd >= 1) {
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
      <ContainerImage src={urlImagem} />
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
