// a basic callback example

function greet(name, callback){
    console.log("Hello" + name)
    callback()
}

greet('Aakash', function(){
    console.log("Callback is called")
})

