const tab = document.getElementById('tab')
let code = '';
let empty = [];

let arr = [' '];
for (let i = 1; i <= 15; i++) {
    arr.push(i)
}

for (let i = 1; i <= 4; i++) {
    code += '<tr>'
        for (let j = 1; j <= 4; j++) {
            let key = rand(0,arr.length-1)
            code += `<td id="c${i}${j}"  onclick="swap(${i},${j})">${arr[key]}</td>`
            if (arr[key] == ' ') {
                empty = [i, j]
            }
            arr.splice(key,1)   
        }
    code += '</tr>'
}
table.innerHTML = code;

let x0 = document.getElementById(`c${empty[0]}${[empty[1]]}`)
x0.style.background ="#eecc8c"

let td = document.querySelectorAll('td');
function swap(i, j) {
    
    if( i == empty[0] && Math.abs(j-empty[1]) == 1 ||
        j == empty[1] && Math.abs(i - empty[0]) == 1 ) {
        let x1 = document.getElementById(`c${i}${j}`)
        let x2 = document.getElementById(`c${empty[0]}${[empty[1]]}`)
        x2.innerHTML = x1.innerHTML;
        x1.innerHTML = '';    
        empty = [i , j]
        let x0 = document.getElementById(`c${empty[0]}${[empty[1]]}`)
        x0.style.background ="#eecc8c"
        x2.addEventListener('click', sound1.play())
        td.forEach((item) => {
            if(item.innerHTML>0){
                item.style= "#eecc8c";
            };
        }
        )
    }
}
const sound1 = new Audio();
sound1.src="sound/sound.wav"


function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}