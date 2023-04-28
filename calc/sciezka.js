const fs = require("fs")
const path = require("path")

function my_path(filename){
    return path.join(__dirname, 'teksty', filename)
}

fs.readFile(my_path('loremipsum.txt'), (err, dane)=>{
    if (err){
        console.log(err.message)
        throw err
    }
    console.log(dane.toString())
})
console.log('ok')