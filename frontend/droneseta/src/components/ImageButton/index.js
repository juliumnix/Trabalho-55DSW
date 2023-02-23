import React from 'react';
import { Button } from './styles';

function ImageButton({ image, width, height }) {
    return (
    <Button>
        <img src={image} width={width} height={height} />
    </Button>
    );
}

export default ImageButton;