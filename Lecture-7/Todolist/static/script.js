$(()=>{
    let inp = $('#inp')
    let btn = $('#btn')
    let tasklist = $('#tasklist')

    function refreshTodos(){
        tasklist.empty()
        $.get('/todos',(data)=>{
            for(let todo of data){
                tasklist.append(`<li>${todo.name} ${todo.age} ${todo.marks}</li>`)
            }
        })
    }

    refreshTodos()

    btn.click(()=>{
        $.post(
            '/todos',
            {
                name:inp.val(),
                age:$('#age').val(),
                marks:$('#marks').val()
            },
            (data)=>{
                if(data == 'success'){
                    refreshTodos()
                }
                else{
                    alert('Post Request Failed')
                }
            }
        )
    })    
})