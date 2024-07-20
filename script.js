
function modeon() {
    let modeonn = document.querySelector(".circle");
    let modeonm = document.querySelector(".navbar");
    let lo = document.getElementById("log");
    let modeono = document.querySelector(".maincon");
    let logoconn = document.querySelector(".logocon");
    let sp = document.querySelector(".spacefy");
    let ko = document.querySelector(".jstone");



    if (modeonn.style.transform === "translate(0px, 0px)" || modeonn.style.transform === "") {
        modeonn.style.transform = "translate(25px, 0px)";
        modeonn.style.background = "#444444";
        modeonm.style.background = "#444444";
        modeono.style.background = "#444444";
        logoconn.style.background = "#444444";
        sp.style.background = "#444444";
        lo.style.transform = "rotate(60deg)";
        ko.style.background ="linear-gradient(#444444, black)";

    } else {
        modeonn.style.transform = "translate(0px, 0px)";
        modeonn.style.background = "#000";
        modeonm.style.background = "#000";
        lo.style.transform = "rotate(0deg)";
        modeono.style.background = "#000";
        sp.style.background = "#000";
        logoconn.style.background = "#000";
                ko.style.background ="#000";

    }
}


function numfun() {
    const valueOutput = document.querySelector("#value");
    const rangeInput = document.querySelector("#pi_input");
    const val = document.querySelector(".inpmain");
    let numckk = document.querySelector("#numck")
    function createPassword(length) {

        const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        // const specialChars = "@#$%&*!@|{}[]";

        let allCharacters = upperLetters + lowerLetters + numbers;
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }
        return password;
    }

    function setupPasswordGenerator() {
        const initialLength = 6;
        rangeInput.value = initialLength;
        valueOutput.textContent = initialLength;
        const initialPassword = createPassword(initialLength);
        val.value = initialPassword;
        rangeInput.addEventListener("input", (event) => {
            const length = event.target.value;
            valueOutput.textContent = length;
            const generatedPassword = createPassword(length);
            val.value = generatedPassword;
        });
    }
    setupPasswordGenerator();
}


   //add the char  
   function charfun() {

    const valueOutput = document.querySelector("#value");
    const rangeInput = document.querySelector("#pi_input");
    const val = document.querySelector(".inpmain");
    let numckk = document.querySelector("#charck")
    function createPassword(length) {
        const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
        //const numbers = "0123456789";
        const specialChars = "@#$%&*!@|{}[]@&";

        let allCharacters = upperLetters + lowerLetters + specialChars;
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            password += allCharacters[randomIndex];
        }
        return password;
    }
    function setupPasswordGenerator() {
        const initialLength = 6;
        rangeInput.value = initialLength;
        valueOutput.textContent = initialLength;
        const initialPassword = createPassword(initialLength);
        val.value = initialPassword;
        rangeInput.addEventListener("input", (event) => {
            const length = event.target.value;
            valueOutput.textContent = length;
            const generatedPassword = createPassword(length);
            val.value = generatedPassword;
        });
    }
    setupPasswordGenerator();
}