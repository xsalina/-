console.log('go')
new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('hello')
    },2000)
})
.then((value)=>{
    console.log(value)
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(value + 'world')
        },2000)

    })

})
.then(res => {
    console.log(res)
})

let dd = new Promise(resolve => {
    setTimeout(() => {
        resolve(345)
    },3000)
})
setTimeout(()=>{
    dd.then( v => {
        console.log(v)
    })
},1000)

new Promise(resolve => {
  setTimeout(() => {
    resolve(111);
  }, 1000);
})
  .then(value => {
    return new Promise(resolve => {
      console.log(2222);
      setTimeout(() => {
        resolve(333);
      }, 2000);
    })
      .then(value => {
        console.log(444);
        return value;
      })
      .then(value => {
        console.log(5555);
        return value;
      })
      .then(value => {
        console.log(666);
        return value;
      });
  })
  .then(value => {
    console.log(value);
  });
//   一样的跟下面


  new Promise(resolve => {
    setTimeout(() => {
      resolve(111);
    }, 1000);
  })
    .then(value => {
      return new Promise(resolve => {
        console.log(2222);
        setTimeout(() => {
          resolve(333);
        }, 2000);
      })
        .then(value => {
          console.log(444);
          return value;
        })
        .then(value => {
          console.log(5555);
          return value;
        })
        .then(value => {
          console.log(666);
          return value;
        })
        .then(value => {
          console.log(value);
        });
    })
function b(){
    setTimeout(()=>{
        console.log(6666)
        return 898989
    },1000)

}

async function a(){
    const cc = await b()
    console.log(4444)
    console.log(cc)
}
a()
