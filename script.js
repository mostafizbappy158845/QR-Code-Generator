const wrapper = document.querySelector(".wrapper");
  qrInput = wrapper.querySelector(".form input");
  generateBtn = wrapper.querySelector(".form button");
  qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // if input field then empty retun from here
    generateBtn.innerText = 'Generating QR Code...';
    // getting a qr code of user entered value using the qrserver
    // api and passing the api returned img src to qrImg
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () =>{ //once qrcode img load

        wrapper.classList.add("active");
        generateBtn.innerText = 'Generate QR Code...';
    });
});

// after clear input field remove img/active class
qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
});