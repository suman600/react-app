import React, { useEffect, useRef, useState } from 'react';

function ColorPalette({ colors, sendCurrentColor }) {
    const canvasRef = useRef(null);
    const [currentColor, setCurrentColor] = useState(null);
    const [clickedCell, setClickedCell] = useState(null);

    const rgbToHex = (r, g, b) => `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;

    const handleCanvasClick = (event) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const cellSize = 20;
        const gap = 2;
        const cols = 10;

        const clickedCol = Math.floor(x / (cellSize + gap));
        const clickedRow = Math.floor(y / (cellSize + gap));

        setClickedCell({ row: clickedRow, col: clickedCol });

        const imageData = ctx.getImageData(x, y, 1, 1);
        const [r, g, b] = imageData.data;
        const color = rgbToHex(r, g, b);
        setCurrentColor(color);
    };

    const drawColorPalette = (colors) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const cellSize = 20;
        const borderSize = 1;
        const gap = 2;
        const cols = 10;

        const totalWidth = cols * (cellSize + gap) - gap;
        const totalHeight = Math.ceil(colors.length / cols) * (cellSize + gap) - gap;

        canvas.width = totalWidth;
        canvas.height = totalHeight;

        let colorIndex = 0;

        for (let row = 0; row < Math.ceil(colors.length / cols); row++) {
            for (let col = 0; col < cols; col++) {
                ctx.fillStyle = colors[colorIndex] || '#fff';
                ctx.fillRect(col * (cellSize + gap), row * (cellSize + gap), cellSize, cellSize);

                if (clickedCell?.row === row && clickedCell?.col === col) {
                    ctx.strokeStyle = '#000';
                    ctx.lineWidth = borderSize;
                    ctx.strokeRect(
                        col * (cellSize + gap) + borderSize / 2,
                        row * (cellSize + gap) + borderSize / 2,
                        cellSize - borderSize,
                        cellSize - borderSize
                    );
                }

                colorIndex++;
            }
        }
    };

    useEffect(() => {
        drawColorPalette(colors);
        if (currentColor !== null) {
            sendCurrentColor(currentColor);
        }
    }, [colors, clickedCell, currentColor]);

    const handleCellHover = () => {
        canvasRef.current.style.cursor = 'pointer';
    };

    return (
        <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            onMouseOver={handleCellHover}
        />
    );
}

export default ColorPalette;
