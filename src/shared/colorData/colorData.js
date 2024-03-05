import React, {useEffect, useState} from "react";

function ColorData({getColorBoxData, getPalletColor, getImgColor, getIsImgTab}){
    const [colorBoxData, setColorBoxData] = useState(null)
    const [palletColor, setPalletColor] = useState(null)
    const [imgColor, setImgColor] = useState(null)

    const handleClick = (e)=>{
        e.target.select();
    }
    useEffect(() => {
        if (getColorBoxData !==null){
            setColorBoxData(getColorBoxData);
        }
        if (getPalletColor !==null){
            setPalletColor(getPalletColor);
        }
        if (getImgColor !==null){
            setImgColor(getImgColor);
        }

    }, [getColorBoxData, getPalletColor, getImgColor, getIsImgTab]);

    function hexToRgb(hex, alpha = 1) {
        hex = String(hex);
        hex = hex.replace(/^#/, '');
        // Convert hex to RGB
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;

        // Return RGBA string
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function hexToHsla(hex, alpha = 1) {
        // Remove the hash if it exists
        hex = String(hex);
        hex = hex.replace(/^#/, '');

        // Parse the hex values to obtain RGB
        const bigint = parseInt(hex, 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;

        // Convert RGB to HSL
        let h, s, l;
        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);

        if (max === min) {
            h = 0;
        } else if (max === r) {
            h = (60 * ((g - b) / (max - min)) + 360) % 360;
        } else if (max === g) {
            h = (60 * ((b - r) / (max - min)) + 120) % 360;
        } else if (max === b) {
            h = (60 * ((r - g) / (max - min)) + 240) % 360;
        }
        l = (max + min) / 2;

        if (max === min) {
            s = 0;
        } else if (l <= 0.5) {
            s = (max - min) / (max + min);
        } else {
            s = (max - min) / (2 - max - min);
        }

        // Convert HSL to HSLA
        h = Math.round(h);
        s = Math.round(s * 100);
        l = Math.round(l * 100);

        return `hsla(${h}, ${s}%, ${l}%, ${alpha})`;
    }

    let hexCode;
    let x;
    let y;
    if (!getIsImgTab) {
        if (colorBoxData?.color) {
            hexCode = colorBoxData.color;
            x = colorBoxData.x;
            y = colorBoxData.y;
        } else if (palletColor !==null) {
            hexCode = palletColor;
        }
    } else if (imgColor) {
        hexCode = imgColor;
        x = 0;
        y = 0;
    }

    let rgbCode =  hexToRgb((hexCode),1);
    let hslCode =  hexToHsla(hexCode,1);

    return (
        <div className="card card--color-data">
            <div className="card-header h5">
                Edit and Convert Color Code
            </div>
            <div className="card-body">
                <div className="color-strip" style={{ backgroundColor: hexCode }}></div>
                <div className="input-group">
                    <span>HEX</span> <input type="text" onClick={handleClick} value={hexCode}  onChange={()=>null}/>
                </div>
                <div className="input-group">
                    <span>RGBA</span> <input type="text" onClick={handleClick} value={rgbCode} onChange={()=>null}/>
                </div>
                <div className="input-group">
                    <span>HSL</span> <input type="text" onClick={handleClick} value={hslCode} onChange={()=>null} />
                </div>
                <div className="input-group">
                    <span>Pixel X</span> <input type="text" value={x} />
                </div>
                <div className="input-group">
                    <span>Pixel Y</span> <input type="text" value={y} />
                </div>
            </div>
        </div>
    );
}
export default ColorData;
