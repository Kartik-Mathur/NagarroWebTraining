function download(url){
    return new Promise((resolve,reject)=>{
        console.log("Download started from url",url)
        if(!url.startsWith('http')){
            throw new Error('Not a Valid URL')
        }
        setTimeout(()=>{
            let file = url.split('/').pop()
            resolve(file)
        },2000)
    })
}

function compressFile(file){
    return new Promise((resolve,reject)=>{
        if(-1 == ['mp3','ogg'].indexOf(file.split('.').pop())){ // file->file.mp4
            // throw new Error('Wrong format for compression')
            reject('Wrong format for compression')
            console.log("We are here after throwing error")
        }
        console.log("Compression started of file",file)
        setTimeout(()=>{
            let filecompress = file.split('.')[0] + '.zip'
            resolve(filecompress)
        },2000)
    })
}

function uploadFile(filecompress){
    return new Promise((resolve,reject)=>{
        console.log('Starting upload of file',filecompress)
        setTimeout(()=>{
            let newURL = 'http://newexample.com/'+filecompress
            resolve(newURL)
        },2000)
    })
}

// let p = download("https://example.com/file.mp3")
// console.log("Calling .then on promise")
    download("https://example.com/file.mp3")
    .then(compressFile)
    .then(uploadFile)
    .then(function(){
        console.log("All Done")
    }).catch(function(err){
        console.error(err.message)
    })

// 2nd way
// p.then(function(file){
//     console.log("Download completed as",file)
//     return compressFile(file)
// }).then(function(filecompress){
//     console.log('File compressed as',filecompress)
//     return uploadFile(filecompress)
// }).then(function(newURL){
//     console.log('File uploaded at',newURL)
//     console.log('All done')
// }).catch(function(err){
//     console.error(err.message)
// })

// 1st way
// p.then(function(file){
//     console.log("Download completed as",file)
//     compressFile(file).then(function(filecompress){
//         console.log('File compressed as',filecompress)
//         uploadFile(filecompress).then(function(newURL){
//             console.log('File uploaded at',newURL)
//         })
//     })
// })