import React, {useState} from 'react';
import pantone from '../../assets/images/pantone.png';
import image from '../../assets/images/photo.png';
import gradient from '../../assets/images/gradient.png';
import ColorPalette from "../../shared/color-palette/ColorPalette";

function ColorPicker() {
    const gridStyle = {
        'display': 'grid',
        'gridTemplateColumns': 'repeat(2, 1fr)',
        'gridGap': '2rem'
    };
    const colorArr = [
        '#FFFFFF', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#000000',
        '#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C',
        '#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F',
        '#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#6A1B9A',

        '#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#D500F9', '#AA00FF', '#7C4DFF', '#6200EA',
        '#E1F5FE', '#B3E0F2', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B',
        '#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064',
        '#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20',
        '#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E',
        '#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717',
        '#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17',
        '#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00',
        '#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100',
        '#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C',
        '#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723',
        '#EC407A', '#D81B60', '#FF4081', '#FF79B0', '#F50057', '#C51162', '#C51162', '#D500F9', '#AA00FF', '#304FFE',
        '#4A148C', '#7C4DFF', '#FF4081', '#FF79B0', '#F50057', '#C51162', '#C51162', '#D500F9', '#AA00FF', '#304FFE',
        '#F50057', '#C51162', '#C51162', '#D500F9', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#00B0FF', '#00E5FF',
        '#F50057', '#C51162', '#C51162', '#D500F9', '#AA00FF', '#6200EA', '#304FFE', '#2962FF', '#00B0FF', '#00E5FF',
        '#D50000', '#FF4081', '#FF79B0', '#F50057', '#C51162', '#C51162', '#D500F9', '#AA00FF', '#6200EA', '#304FFE',
    ];
    const [isSampler, setIsSampler] = useState(true);
    const [isSpectrum, setIsSpectrum] = useState(false);
    const [isImage, setIsImage] = useState(false);

    function clickSampler(){
        setIsSampler(true);
        setIsSpectrum(false);
        setIsImage(false)
    }
    function clickSpectrum(){
        setIsSampler(false);
        setIsSpectrum(true);
        setIsImage(false)
    }
    function clickImage(){
        setIsSampler(false);
        setIsSpectrum(false);
        setIsImage(true)
    }
    return (
        <div style={gridStyle}>
            <div className="card card--color-picker">
                <div className="card-header h5">Pick Color</div>
                <div className="card-body">
                    <div className="btn-flex">
                        <button className="btn btn-outline-dark" onClick={clickSampler}>
                            <img src={pantone} alt={pantone} width={14} height={14}/>Sampler
                        </button>
                        <button className="btn btn-outline-dark" onClick={clickSpectrum}>
                            <img src={gradient} alt={gradient} width={14} height={18}/>Spectrum
                        </button>
                        <button className="btn btn-outline-dark" onClick={clickImage}>
                            <img src={image} alt={image} width={14} height={14}/>Image
                        </button>
                    </div>
                    {isSampler && (
                        <ColorPalette colors={colorArr} />
                    )}
                    {isSpectrum && (
                        // <SpectrumComponent />
                        <h1>SpectrumComponent</h1>
                    )}
                    {isImage && (
                        // <ImageComponent />
                        <h1>ImageComponent</h1>
                    )}
                </div>
            </div>
        </div>

    );
}
export default ColorPicker;
