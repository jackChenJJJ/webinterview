setTimeout(()=>{
    console.log("setTimeout1");
    Promise.resolve().then(data => {
        console.log(222);
    });
});
setTimeout(()=>{
    console.log("setTimeout2");
});
Promise.resolve().then(data=>{
    console.log(111);
});

// console.log('script start');

// setTimeout(function () {
//     console.log('setTimeout---0');
// }, 0);

// setTimeout(function () {
//     console.log('setTimeout---200');
//     setTimeout(function () {
//         console.log('inner-setTimeout---0');
//     });
//     Promise.resolve().then(function () {
//         console.log('promise5');
//     });
// }, 200);

// Promise.resolve().then(function () {
//     console.log('promise1');
// }).then(function () {
//     console.log('promise2');
// });
// Promise.resolve().then(function () {
//     console.log('promise3');
// });
// console.log('script end');
