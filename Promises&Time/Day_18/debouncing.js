
/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */

// jaise shopping site hoti h , usme hm jaise shirt search krte h
//  to pura shirt likhne k kuch time baad recommendation bhi display 
// hota h, ye recommendation api request krke lata h, aur hm nhi chahte
//  ki baar baar api request kre issliye hm debouncinig ka concept use krte h,
//  aur hm chahte h ki ye particular time baad execute ho aur baar baar executre
//  hi rha ho to cancel kr de

// same is in google search 