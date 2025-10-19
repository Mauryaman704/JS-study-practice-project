    const promiseOne = new Promise(function(resolve,reject){
        //do async task
        //DB call ,cryptography call
        setTimeout(function(){
            console.log('async task is complete');
            resolve()
        },1000)
    })

    promiseOne.then(function(){
console.log("promise consumed");


    })


    new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('async taskTwo');
            resolve()
        },1000)
    }).then(function(){
        console.log("a sync 2 resolved");
        
    })


    const promiseThree = new Promise(function(resolve,reject){

        setTimeout(function(){

            console.log('');

            resolve({userName: "aman maurya",email: "anchalAman@gmail.com"})
            
        },1000)

    })


    promiseThree.then(function(aman){
        console.log(aman);
        
    })


    const promiseFour = new Promise(function(resolve,reject){
        setTimeout(function(){
            let error = false
            if (!error) {
                resolve({userName:"anchal",password:"123"})
            } else{
                reject('ERROR: something went wrong')
            }

        },2000)
      
    })

    promiseFour
    .then((aman) => {
        console.log(aman);
        return user.username
    })
    .then((userName) => {
        console.log(username);  
    })
    .catch(function(error){
        console.log(error); 
    })
    .finally(() => console.log("The promise is either resolve or rejectd")
    )

    const promiseFive = new Promise((resolve,reject) => {
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({userName:"lily",password:"123"})
            } else{
                reject('ERROR: lily went wrong')
            }

        },2000)
    })

    async function consumePromiseFive() {
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }
        
    }

        consumePromiseFive()


        // async function getAllData() {
        //     try {
        //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //         const data =  await response.json()
        //         console.log(data);
                
        //     } catch (error) {
        //         console.log("E:" , error);
                
        //     }
           
        // }

        // getAllData() 


        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((respose) => {
            return respose.json()

        })
        .then((data) => {
            console.log(data);
            
        })
        .catch((error) => {console.log(error);}
        )