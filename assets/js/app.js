form = document.getElementById('generateform');
qr = document.getElementById('qrcode');

onGenerate = (e) => {
    e.preventDefault();

    ClearImg();

    url = document.getElementById('url').value;
    size = document.getElementById('size').value;

    ColorInput = document.getElementById("color-picker").value;
   // console.log(`The Value of the selected color is : ${ColorInput}`)

    if (url === '') { alert('Please Enter a URL') }
    else {
        generateqrcode(url, size);
        setTimeout(() => {
            saveUrl = qr.querySelector('img').src;
            generatebtn(saveUrl);
        }, 50)
    }
}

generateqrcode = (url, size, theColor) => {
    // ColorInput.addEventListener("input", function () {
    //var theColor = ColorInput;
    //console.log(theColor)

    qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size,
        //colorDark: theColor,
        colorDark: ColorInput,
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    })
    // })   
}

ClearImg = () => {
    qr.innerHTML = '';
    savebtn = document.getElementById('save-link');
    if (savebtn) { savebtn.remove(); }
}

generatebtn = (saveURL) => {
    link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 w-1/3 m-auto my-5';
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

form.addEventListener('submit', onGenerate);