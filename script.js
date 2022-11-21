const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

// Copy to ClipBoard
clipboardEl.addEventListener("click", () => {
    if (resultEl.innerText.length > 0) {
      navigator.clipboard.writeText(resultEl.innerText);
      alert("Password Copied:  " + resultEl.innerText);
    } else {
      alert("Please click on Generate Password!");
    }
  });

// Adding Event Listeners
generateEl.addEventListener("click", () => {
    generatePassword(
      lengthEl.value
    );
  });


function generatePassword(length) {

    let tmp,str,count=0,add="";
    // n = lengthEl.value
    n = length
    for (let i = 0; count<n; i++)
    {
        if(i==4)
        {
            if(count == n)
            {
                break;
            }
            else
            {
                i = 0;
                tmp = Object.keys(randomFunc)[i];
                str = randomFunc[tmp]();
                add = add + str;
                count++;
            }
        }
        else {
            if(count == n)
            {
                break;
            }
            else
            {
                tmp = Object.keys(randomFunc)[i];
                str = randomFunc[tmp]();
                add = add + str;
                count++;
            }
       
        }
    }
    resultEl.textContent = add;

    
}

function getRandomLower() {
    
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
     
}

function getRandomUpper() {
    
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)]
    
}

function getRandomNumber() {
    
        const number = "0123456789";
        return number[Math.floor(Math.random() * number.length)]
    
}

function getRandomSymbol() {
    
        const symbol = "@#$*;.";
        return symbol[Math.floor(Math.random() * symbol.length)]
    
}



