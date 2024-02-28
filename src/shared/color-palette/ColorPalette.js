import React, { useEffect, useRef, useState } from 'react';

function ColorPalette({ colors }) {
    // Ref for the canvas element
    const canvasRef = useRef(null);

    // State to track the clicked cell
    const [clickedCell, setClickedCell] = useState(null);

    // Function to convert RGB values to hex color code
    const rgbToHex = (r, g, b) => `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;

    // Handler for canvas click events
    const handleCanvasClick = (event) => {
        // Extracting canvas and 2D context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Calculate the clicked cell's position
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const cellSize = 20;
        const gap = 2;
        const cols = 10;

        // Calculate the clicked cell's row and column
        const clickedCol = Math.floor(x / (cellSize + gap));
        const clickedRow = Math.floor(y / (cellSize + gap));

        // Update the clicked cell in the state
        setClickedCell({ row: clickedRow, col: clickedCol });

        // Get the color of the clicked pixel
        const imageData = ctx.getImageData(x, y, 1, 1);
        const [r, g, b] = imageData.data;
        const color = rgbToHex(r, g, b);

        // Log the selected color (you can modify this part as needed)
        console.log(color);
    };

    // Function to draw the color palette on the canvas
    const drawColorPalette = (colors) => {
        // Extracting canvas and 2D context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const cellSize = 20;
        const borderSize = 1;
        const gap = 2;
        const cols = 10;

        // Calculate the total width and height of the canvas
        const totalWidth = cols * (cellSize + gap) - gap;
        const totalHeight = Math.ceil(colors.length / cols) * (cellSize + gap) - gap;

        // Set the canvas dimensions
        canvas.width = totalWidth;
        canvas.height = totalHeight;

        let colorIndex = 0;

        // Loop through rows and columns to draw the color cells
        for (let row = 0; row < Math.ceil(colors.length / cols); row++) {
            for (let col = 0; col < cols; col++) {
                // Fill the cell with the corresponding color
                ctx.fillStyle = colors[colorIndex] || '#fff';
                ctx.fillRect(col * (cellSize + gap), row * (cellSize + gap), cellSize, cellSize);

                // If the cell is clicked, draw a border around it
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

    // Effect to redraw the color palette when colors or clickedCell change
    useEffect(() => {
        drawColorPalette(colors);
    }, [colors, clickedCell]);

    // Handler for cell hover events to change cursor style
    const handleCellHover = () => {
        canvasRef.current.style.cursor = 'pointer';
    };

    return <canvas ref={canvasRef} onClick={handleCanvasClick} onMouseOver={handleCellHover} />;
}

export default ColorPalette;
