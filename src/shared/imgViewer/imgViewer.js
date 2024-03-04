import React, {useState} from "react";


function ImgViewer(){
    const [imageSrc, setImageSrc] = useState('');
    const [file, setFile] = useState(null);

    function imgPreview(e){
        const imgInp = document.getElementById('imgInp');
        const [file] = imgInp.files;
        if(file){
            setFile(file)
            setImageSrc(URL.createObjectURL(file));
        }
    }
    function bytesToKB(bytes) {
        return (bytes / 1024).toFixed(2) + ' KB';
    }

    return(
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
                {imageSrc && <img id="uploadImg" src={imageSrc} alt="yourImage" />}
            </div>
        </form>
    )
}
export default ImgViewer;
