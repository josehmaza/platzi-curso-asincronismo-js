const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Do something async '), 3000)
        :reject(new Error('Test Error'))
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log('YES!! : ', something)
}

/*console.log('BEFORE 1');
doSomething()
console.log('AFTER 1');*/

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something)
    } catch (error){
       console.error(error)
    }
}
console.log('BEFORE 2');
anotherFunction()
console.log('AFTER 2');
