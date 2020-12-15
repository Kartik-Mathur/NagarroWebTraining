window.onload = ()=>{
    let btn = document.getElementById('btn')
    let inp = document.getElementById('inp')
    let list = document.getElementById('list')

    btn.onclick = ()=>{
        let val = inp.value
        let x = ''
        for(let i = 0 ; i < parseInt(val) ; i++){
            x += `<li>${i}</li>`
            // let li = document.createElement('li')
            // li.innerText = i
            // list.appendChild(li)
        }
        list.innerHTML = x
    }
}