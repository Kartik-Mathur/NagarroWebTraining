function download(url,downloaded){
    console.log(`Download started at ${url}`)
    setTimeout(function(){
        let file = url.split('/').pop()
        downloaded(file)
    },2000)
}

function compressFile(file,compressed){
    console.log("Compression started of",file)
    setTimeout(function(){
        let minfile = file.split('.')[0] + '.zip'
        compressed(minfile)
    },2000)
}

function uploadFile(minfile,uploaded){
    console.log("Uploading started of",minfile)
    setTimeout(function(){
        let newUrl = 'https://def.com/'+minfile
        uploaded(newUrl)
    },2000)
}

download("https://abc.com/abc.mp4",function(file){
    console.log("Download finished",file)
    compressFile(file,function(minfile){
        console.log("Compression completed as",minfile)
        uploadFile(minfile,function(newUrl){
            console.log("Uploading finished at",newUrl)
        })
    })
})