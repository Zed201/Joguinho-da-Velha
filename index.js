var divis = Array.from(document.getElementsByTagName("div")) // Array que vai conter todos os locais de jogar
var jog = true //Controle de quem vai jogar
const p = document.getElementById("vec") //Parágrafo de falar que é vencedor
const s = document.getElementById("qjo") //Parágrafo de "status"
divis.map( // Adição da função a todas as divs
    (item) => {
        item.addEventListener("click", () => {
            if (item.innerText == "") {
                Clicar(item)
                trocar()
            }
            Vencer()
        })
    }
)
function trocar() { // Trocar quem joga
    jog = !jog
    Clicar(s)
}
function Clicar(i) {//Função de colocar o X ou o O
        if (jog) {
            i.innerText = "X"
        }
        if (!jog) {
            i.innerText = "O"
        }
}    
function reset() { // Resetar todas divs e o local de dizer o vencedor
    divis.map((item) => {
        item.innerHTML = ""
    })
    p.innerText = ""
}
function ExtTXT(clas, id) {// Extração de texto para saber qual o símbolo que tá em determinada div
    return document.querySelector(`.${clas}#${id}`).innerHTML
}
function Vencer() {// Verificação se venceu
    for (let lin = 1; lin < 4; lin++){
        let valor1 = ""
        let valor2 = ""
        let valor3 = ""
        for (let col = 1; col < 4; col++){// Verificação na horizontal
            let c = String(col).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            let l = String(lin).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            if (col == 1) {
                valor1 = document.querySelector(`.${l}#${c}`).innerHTML
            }
            if (col == 2) {
                valor2 = document.querySelector(`.${l}#${c}`).innerHTML
            }
            if (col == 3) {
                valor3 = document.querySelector(`.${l}#${c}`).innerHTML
            }
        }
        if (valor1 == valor2 && valor2 == valor3) {
            if (valor1 != "") {
                p.innerText = `${valor1} venceu!`
            }
        }
    }
    for (let lin = 1; lin < 4; lin++){
        let valor1 = ""
        let valor2 = ""
        let valor3 = ""
        for (let col = 1; col < 4; col++){//Verficação na Vertical
            let l = String(col).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            let c = String(lin).replace(/1/g, "um").replace(/2/g, "dois").replace(/3/g, "tres")
            if (col == 1) {
                valor1 = document.querySelector(`.${l}#${c}`).innerHTML
            }
            if (col == 2) {
                valor2 = document.querySelector(`.${l}#${c}`).innerHTML
            }
            if (col == 3) {
                valor3 = document.querySelector(`.${l}#${c}`).innerHTML
            }
        }
        if (valor1 == valor2 && valor2 == valor3 ) {
            if (valor1 != "") {
                p.innerText = `${valor1} venceu!`
            }
        }
    }// Vitória na digonal (class , id)1(um, um) = 5(dois, dois) = 9(tres, tres) /
    if (ExtTXT("um", "um") == ExtTXT("dois", "dois") && ExtTXT("dois", "dois") == ExtTXT("tres", "tres")){
        if (ExtTXT("um", "um") != "") {
            p.innerText = `${ExtTXT("um", "um")} venceu`
        }
    }//Vitória na diagonal inversa  3(um, tres) = 5(dois, dois) = 7(tres, um) \
    if (ExtTXT("um", "tres") == ExtTXT("dois", "dois") && ExtTXT("dois", "dois") == ExtTXT("tres", "um")){
        if (ExtTXT("um", "tres") != "") {
            p.innerText = `${ExtTXT("um", "tres")} venceu`
        }
    }
}