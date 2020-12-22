$(()=>{
    let list = $('#list')
    function updateList(){
        list.empty()
        let str = ''
        $.get('/getemployee',(data)=>{
            for(let x of data){
                if(x.inOffice == true){
                    str += `<li class='in'>`
                }
                else{
                    str += `<li class='out'>`
                }
                str+=x.name + '</li>'
            }
            list.html(str)
        }).fail((jqXHR)=>{
            // $('#myDiv').append(`Error ${jqXHR.status} ${jqXHR.statusText}`)
            $('#myDiv').load('404.html')
            list.hide()
            $('#btn').hide()
            $('#heading').hide()
            $('#inp').hide()
        })
    }

    updateList()
})