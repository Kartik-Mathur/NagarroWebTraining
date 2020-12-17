$(()=>{
    // console.log($('#div'))
    let x = $('#div')
    // x.css('background-color','green').css('font-size','50px')
    y = $('.div1')
    console.log(y)
    y.css('background-color','magenta')
    x.css({'background-color':'green','font-size':'50px'})
    x.append('World')
    console.log($('#div').attr('id','myDiv'))
    // $('#inp').prop('checked','123')
    console.log($('#inp').prop('checked'))

    $('#btn').click((ev)=>{
        x.css('background-color','orange')
        console.log(ev.target)
    })
})

// console.log(document.getElementById('div'))