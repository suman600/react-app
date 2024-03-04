import React, { useState, useRef, useEffect } from "react";

function ImgViewer({sendImgColorToParent}) {
    const [imageSrc, setImageSrc] = useState("");
    const [file, setFile] = useState(null);
    const [selectedColor, setSelectedColor] = useState("#FFFFFF"); // Default color

    const imageRef = useRef(null);

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.addEventListener("click", handleImageClick);
        }

        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener("click", handleImageClick);
            }
        };
    }, [imageSrc]);


    useEffect(() => {
        // Send the selected color to the parent component when it changes
        sendImgColorToParent(selectedColor);
    }, [selectedColor]);

    function imgPreview(e) {
        const imgInp = document.getElementById("imgInp");
        const [file] = imgInp.files;
        if (file) {
            setFile(file);
            setImageSrc(URL.createObjectURL(file));
        }
    }

    function handleImageClick(event) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = imageRef.current.width;
        canvas.height = imageRef.current.height;

        ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const color = getColorFromPosition(x, y, ctx);
        setSelectedColor(color);
    }

    function getColorFromPosition(x, y, ctx) {
        const imageData = ctx.getImageData(x, y, 1, 1);
        const pixel = imageData.data;
        return rgbToHex(pixel[0], pixel[1], pixel[2]);
    }

    function rgbToHex(r, g, b) {
        return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
    }

    function bytesToKB(bytes) {
        return (bytes / 1024).toFixed(2) + " KB";
    }

    return (
        <form>
            <div className="img-flex">
                <label className="file-input btn btn-outline-dark" htmlFor="imgInp">
                    Upload Image
                    <input accept="image/*" type="file" id="imgInp" onChange={imgPreview} />
                </label>
                {file && (
                    <div className="img-data">
                        Size: {bytesToKB(file.size)} | Name: {file.name} | Type: {file.type}
                    </div>
                )}
            </div>

            <div className="image-viewer">
                {imageSrc && (
                    <>
                        <img ref={imageRef} id="uploadImg" src={imageSrc} alt="yourImage" />
                    </>
                )}
            </div>
        </form>
    );
}

export default ImgViewer;
