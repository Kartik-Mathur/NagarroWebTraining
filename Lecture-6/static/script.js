$(()=>{
    let btn = $('#btn')
    let newtask = $('#newtask')
    let tasklist = $('#tasklist')

    function refreshTodos(){
        tasklist.empty()
        $.get('/gettodos',(data)=>{
            // data will be array of tasks
            for(let todo of data){
                tasklist.append(`<li>${todo}</li>`)
            }
        })
    }
    refreshTodos()

    // function addNewtaskOnly(){
    //     $.get('/gettodos',(data)=>{
    //         tasklist.append(`<li>${data.pop()}</li>`)
    //     })
    // }

    btn.click(()=>{
        let task = newtask.val()
        $.get(`/addtask?task=${task}`,(data)=>{
            // data == 'success'
            if(data == 'success'){
                refreshTodos()
            }
        })
    })
})