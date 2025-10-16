function timeout(){
    console.log("Iam set Timeout function");
}

console.log("Before SetTimeout");

setTimeout(timeout, 1000);

console.log("Before CPU Intesive task");

let c = 0;
for(let i = 0; i < 100000000000; i++){ // 3-4 sec to excecute
    c++;
}

console.log("After CPU Intesive Task");

//Reason : JavaScript is a single threaded. So the thread was not free. Since thread is continuously running the 12 13 14 lines of code for 3-4 secs, the thread was busy and then after it will move to 16 and run it after that the thread will be free and now whatever the contents inside the callBack Queue will come to Call Stack (Job of Event Loop - serving contents inside the Call Back queue to the call stack) and thread will be busy excecuting the functions inside the call stack.

//TBF - JS does not supposed to run Async code like SetTimeout, FS, It is nodeJS on top of JS is allowing you to run Async Code, It is Web Browser which is allowing you to run. Whenever you write async code then the control will move to WEB_API (Since CPU is not needed, we will hand it over to WEB API - We were switching on the Washing Machine and give control to it to do its task), whenever that async code returns or completes running then it will be moved to the Call Back Queue. Now whenever the Thread will be free then with the help of event loop that async code will move to call stack and will run and excecute.

// Imagine it like you are washing your clothes and decided to sprint for 1 hr. Even though washing machine completes in 40 minutes, it doesn't matter because you still sprinting and doing CPU intesive task. When your sprint gets completed then you go to washing matchine and take the clothes out - It is not gaurenteed that even though async code supposed to take 1 sec to run may take more than that, which is completed depend on wheather thread is free or not.


