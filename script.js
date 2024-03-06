const variantsContainer = document.getElementById('variants');
const questionContainer = document.getElementById('question');
const container = document.getElementById('container');
const allData = [
    {type: "acidic", salt: `FeCl${toSub("2")}`},
    {type: "acidic", salt: `ZnCl${toSub("2")}`},
    {type: "acidic", salt: `FeBr${toSub("2")}`},
    {type: "acidic", salt: `CuCl${toSub("2")}`},
    {type: "acidic", salt: `Pb(NO${toSub("3")})${toSub("2")}`},
    {type: "acidic", salt: `NH${toSub("4")}Cl`},
    {type: "acidic", salt: `NH${toSub("4")}NO${toSub("3")}`},
    {type: "acidic", salt: `NH${toSub("4")}I`},
    {type: "acidic", salt: `Fe(NO${toSub("3")})${toSub("2")}`},
    {type: "acidic", salt: `Zn(NO${toSub("3")})${toSub("2")}`},


    {type: "basic", salt: `CaF${toSub("2")}`},
    {type: "basic", salt: `BaF${toSub("2")}`},
    {type: "basic", salt: `SrF${toSub("2")}`},
    {type: "basic", salt: `HCOONa`},
    {type: "basic", salt: `HCOOK`},
    {type: "basic", salt: `HCOOLi`},
    {type: "basic", salt: `CH${toSub("3")}COOK`},
    {type: "basic", salt: `CH${toSub("3")}COONa`},
    {type: "basic", salt: `(CH${toSub("3")}COO)${toSub("2")}Ca`},
    {type: "basic", salt: `(CH${toSub("3")}COO)${toSub("2")}Sr`},
    {type: "basic", salt: `Na${toSub("2")}CO${toSub("3")}`},
    {type: "basic", salt: `K${toSub("2")}SO${toSub("3")}`},


    {type: "neutral", salt: `Ca(NO${toSub("3")})${toSub("2")}`},
    {type: "neutral", salt: `Ba(NO${toSub("3")})${toSub("2")}`},
    {type: "neutral", salt: `Sr(NO${toSub("3")})${toSub("2")}`},
    {type: "neutral", salt: `CaBr${toSub("2")}`},
    {type: "neutral", salt: `SrBr${toSub("2")}`},
    {type: "neutral", salt: `KNO${toSub("3")}`},
    {type: "neutral", salt: `NaNO${toSub("3")}`},
    {type: "neutral", salt: `RbNO${toSub("3")}`},
    {type: "neutral", salt: `LiNO${toSub("3")}`},
    {type: "neutral", salt: `LiCl`},
    {type: "neutral", salt: `NaCl`},
    {type: "neutral", salt: `KCl`},
    {type: "neutral", salt: `KI`},
    {type: "neutral", salt: `NaClO${toSub("3")}`},
    
  
]

const questData = [
    {question: "Қышқылдық орта түзетін тұзды анықтаңыз", type:"acidic"},
    {question: `pH < 7 тұзды анықтаңыз`, type:"acidic"},
    {question: "pOH>7 тұзды анықтаңыз", type:"acidic"},
    {question: `pH < pOH тұзды анықтаңыз`, type:"acidic"},
    {question: `[H${toSup("+")}] > [OH${toSup("-")}] тұзды анықтаңыз`, type:"acidic"},
    {question: "Катион бойынша гидролизденетін тұздарды анықтаңыз", type:"acidic"},

    {question: "Негіздік орта түзетін тұзды анықтаңыз", type:"basic"},
    {question: "pH>7 тұзды анықтаңыз", type:"basic"},
    {question: "pOH<7 тұзды анықтаңыз", type:"basic"},
    {question: "pH>pOH тұзды анықтаңыз", type:"basic"},
    {question: `[H${toSup("+")}] < [OH${toSup("-")}] тұзды анықтаңыз`, type:"basic"},
    {question: "Анион бойынша гидролизденетін тұздарды анықтаңыз", type:"basic"},

    {question: "Бейтарап орта түзетін тұзды анықтаңыз", type:"neutral"},
    {question: "pH=7 тұзды анықтаңыз", type:"neutral"},
    {question: "pOH=7 тұзды анықтаңыз", type:"neutral"},
    {question: "pH=pOH тұзды анықтаңыз", type:"neutral"},
    {question: `[H${toSup("+")}] = [OH${toSup("-")}] тұзды анықтаңыз`, type:"neutral"},
    {question: "Гидролизге ұшырамайтын тұздарды анықтаңыз", type:"neutral"},

]

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return shuffled.slice(0, num);
  }

  function getRandomElement(array) {
    // Generate a random index between 0 and the length of the array
    const randomIndex = Math.floor(Math.random() * array.length);

    // Return the element at the randomly generated index
    return array[randomIndex];
}

function toSub(value) {
    return value.sub();
}

function toSup(value) {
    return value.sup();
}

function checkClass(all,className) {
    let a = true;
    all.forEach(elem => {
        if (!elem.classList.contains(className)) {
            a = false;
        }
    })
    return a;
}

function checkOneElemClass(all, className) {
    for(i=0; i<all.length; i++){
        if (all[i].classList.contains(className)){
            return true;
        }
    }
    return false;
}

function App() {
    const lists = getMultipleRandom(allData, 6);
    const question = getRandomElement(questData);
    const questionHeader = document.createElement('h1');
    const questionType = question.type;
    questionHeader.innerHTML = question.question;
    questionContainer.appendChild(questionHeader);

    lists.forEach(elem => {
        const spanVariant = document.createElement('span');
        spanVariant.classList.add('variant');
        spanVariant.classList.add(elem.type);
        spanVariant.innerHTML = elem.salt;
        spanVariant.addEventListener('click', () => {
            if (spanVariant.classList.contains('selected')) {
                spanVariant.classList.remove('selected');
            } else {
                spanVariant.classList.add('selected');
            }
        })
        variantsContainer.appendChild(spanVariant);
    })

    const submitButton = document.createElement('button');
    submitButton.innerHTML = "Қабылдаңыз";
    submitButton.id = 'submitButton';
    container.appendChild(submitButton);

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const allSelected = document.querySelectorAll('.selected');
        const allUnSelected = document.querySelectorAll('span.variant:not(.selected)');
        if (checkClass(allSelected, questionType) && (!checkOneElemClass(allUnSelected, questionType))) {
            variantsContainer.innerHTML = "";
            questionContainer.innerHTML = "";
            if (container.lastChild.tagName == `BUTTON`) {
                container.lastChild.remove();
            }
            App();
        }
    })
}
App();