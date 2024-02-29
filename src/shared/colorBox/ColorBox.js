import React, { useEffect, useRef, useState } from 'react';

function ColorBox({ selectedColor, sendColorBoxData }) {
    const [currentColorBoxData, setCurrentColorBoxData] = useState(selectedColor)
    const colorBox = {
        'width': '600px',
        'height': '438px',
        'backgroundColor': selectedColor,
        'position': 'relative',
    };
    const colorBoxCanvasRef = useRef(null);
    const cursorCanvasRef = useRef(null);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = colorBoxCanvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Create a linear gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(.01, '#fff'); // Top: white
        gradient.addColorStop(1, selectedColor); // Bottom: color

        // Fill the canvas with the linear gradient
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update cursor position canvas
        updateCursorPositionCanvas(cursorPosition.x, cursorPosition.y);
        if (currentColorBoxData !== null){
            sendColorBoxData(currentColorBoxData);
        }

    }, [selectedColor, cursorPosition, currentColorBoxData]);

    const rgbToHex = (r, g, b) => `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;

    const handleCanvasClick = (event) => {
        const canvas = colorBoxCanvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const color = getColorFromPosition(x, y);

        setCurrentColorBoxData({ color, x, y });

    };

    const getColorFromPosition = (x, y) => {
        const canvas = colorBoxCanvasRef.current;
        const ctx = canvas.getContext('2d');

        const imageData = ctx.getImageData(x, y, 1, 1);
        const pixel = imageData.data;

        return rgbToHex(pixel[0], pixel[1], pixel[2]);
    };

    const handleCanvasHover = (event) => {
        const canvas = colorBoxCanvasRef.current;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCursorPosition({ x, y });
        updateCursorPositionCanvas(x, y);
    };

    const updateCursorPositionCanvas = (x, y) => {
        const canvas = cursorCanvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw circular cursor indicator
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
    };

    return (
        <div style={colorBox} onMouseMove={handleCanvasHover} onClick={handleCanvasClick}>
            <canvas
                ref={colorBoxCanvasRef}
                style={{ position: 'absolute', top: 0, left: 0, cursor: 'crosshair' }}
                width={600}
                height={438}
            />
            <canvas
                ref={cursorCanvasRef}
                style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
                width={600}
                height={438}

            />
        </div>
    );
}

export default ColorBox;
