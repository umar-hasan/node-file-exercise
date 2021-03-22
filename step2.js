const fs = require('fs')
const axios = require('axios')
const a = process.argv[2]

function webCat(url) {
    let pattern = RegExp("https?:\/\/[a-z0-9]*\.[a-z0-9/?=:-]*")
    
    if (!pattern.test(url)) {
        console.log("This is a file or not a valid URL.")
    }
    else {
        axios.get(url).then(r => console.log(r.data))
                      .catch(r => console.log("Website does not exist."))
        
    }
}

webCat(a)