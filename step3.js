const fs = require('fs')
const axios = require('axios')
const a = process.argv

function cat(r, w) {
    let pattern = RegExp("https?:\/\/[a-z0-9]*\.[a-z0-9/?=:-]*")
    
    if (!pattern.test(r)) {
        fs.readFile(r, 'utf8', function(err, data) {
            if (err) {
                console.log(err)
                process.exit(1)
            }
    
            fs.writeFile(w, data, 'utf8', (err) => {
                if (err) {
                    console.log(err)
                }
            })
    
        })
    }
    else {
        axios.get(r).then((res) => {
            fs.writeFile(w, res.data, 'utf8', (err) => {
                if (err) {
                    console.log(err)
                }
            })
        }).catch(r => console.log("Website does not exist."))
        
    }
}

if (a[2] === "--out") {
    if (a.length !== 5) {
        console.log("Please provide a valid output file and input file/URL.")
    }
    else {
        cat(a[4], a[3])
    }
}