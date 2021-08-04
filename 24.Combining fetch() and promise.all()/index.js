//Combining promise.all() with fetch()
//when you do multiple fetch calls but don't want to do anything until all data is loaded , then fetch() with Promises.all() works really good

let datafile1 = fetch("./data.json") //simple fetch
let datafile2 = fetch("./data.json")

//datafile1 & datafile2 are promises in itself b.c fetch() method returns a promise

Promise.all([datafile1,datafile2])
    .then(files => {
        files.forEach(file => {
            process(file.json()) //the reason we are doing this is b.c we have two data files and for each file we have to do the same task i.e to convert the data to redable format and display to ui
            //also file.json itself returns a promise.
             
        })
    })
    .catch(err => {

    })

    let process = (fileJsonPromise) => {
        fileJsonPromise
        .then(data => {
            let output = document.getElementById("output")
            output.textContent = JSON.stringify(data)
        })
    }