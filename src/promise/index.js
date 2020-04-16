const sometimeWillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('HEy !')
        }else {
            reject('Whoops Eror!')
        }
    })
}

sometimeWillHappen()
.then(response => console.log(response))
.catch(console.log)

const sometimeWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => {
                resolve('True')
            }, 2000)
        }else{
            //Handle error
            const error = new Error('Whoops Error!')
            reject(error)
        } 
    })
}

sometimeWillHappen2()
.then(console.log)
.catch(console.log)

Promise.all([sometimeWillHappen(), sometimeWillHappen2()])
.then(([resul1, result2]) => {
    console.log('All results: ', resul1, result2)
})
.catch((err => {
    console.log(err)
}))