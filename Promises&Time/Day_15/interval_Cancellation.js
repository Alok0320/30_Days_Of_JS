// setInterval

function test() {
    console.log("Hello Everyone")
}

const stop = setInterval(test, 1000)

setTimeout(()=>{
    clearInterval(stop)
}, 5000)  // 5 seconds mein ruk jayega

// bilkul similar h setTimeout and clearTimeout k,
//  bss usme ek hi baar apna code execute hota tha
//  and isme intervals mein execute ho rha h 