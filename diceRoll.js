const numInt = [1, 2, 3, 4, 5, 6];

let origLeftCont = document.querySelector("#left").innerHTML;
let origRightCont = document.querySelector("#right").innerHTML;
let origH1Cont = document.querySelector('.text-title').innerHTML;

document.querySelector('#footButton').addEventListener("click", function(){
    document.querySelector("#left").innerHTML = origLeftCont;
    document.querySelector("#right").innerHTML = origRightCont;
    document.querySelector('.text-title').innerHTML= origH1Cont;
})


//              Roll 1x dice section


document.querySelector('.oneRoll').addEventListener("click", function() {
    oneRollLoopThrough(numInt)
    
    document.querySelector("#right > img").style.display = "none";
    
    document.querySelector(".text-title").innerHTML = "Solo";
});

function oneRollLoopThrough (numInt){
    let randomNum1 = Math.floor(Math.random() * numInt.length);
    

    
    for( let n = 0; n < numInt.length; n++){
        (function(n) {
            setTimeout(function(){
                document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[n]}.png`);

            }, 100 * n);
        })(n);
    };
    setTimeout(() => {for( let j = 0; j < numInt.length; j++){
        (function(j) {
            setTimeout(function(){
                document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[j]}.png`);

            }, 200 * j);
        })(j);
    };}, 100)
    
    setTimeout(() => {for( let i = 0; i < numInt.length; i++){
        (function(i) {
            setTimeout(function(){
                document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[i]}.png`);
                
            }, 400 * i);
        })(i);
        if (i === randomNum1) {
            document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[randomNum1]}.png`);
            break;
        }
    };}, 300);
    
};

//          Roll 2x dice section


document.querySelector('.twoRoll').addEventListener("click", function(){
    document.querySelector(".text-title").innerHTML = "Let The Games Begin";

    twoRollLoopThrough (numInt);


    // let randomNum = Math.floor(Math.random() * numInt.length);
    // let randomNum2 = Math.floor(Math.random() * numInt.length);
    // document.querySelector("#right > img").setAttribute("src", `./images/dice${numInt[randomNum]}.png`);
    // document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[randomNum2]}.png`);
    document.querySelector("#right > img").style.display = "block";
    // if(randomNum > randomNum2){
    //     document.querySelector("#left").innerHTML = "<h2>Whites Win</h2>";
    //     setTimeout(() =>  {
    //         document.querySelector("#left").innerHTML = `<img src='./images/dice${numInt[randomNum2]}.png' alt='dice right'>`;
    //     }, 698)
    // } else if (randomNum < randomNum2){
    //     document.querySelector("#right").innerHTML = "<h2>Blacks Win</h2>";
    //     setTimeout(() =>  {
    //         document.querySelector("#right").innerHTML = `<img src='./images/dice${numInt[randomNum]}.png' alt='dice right'>`;
    //     }, 698)
    // } else if (randomNum === randomNum2){
    //     document.querySelector(".text-title").innerHTML = "Draw";
    //     document.querySelector("#left").style.display = "none";
    //     document.querySelector("#right").style.display = "none";
    //     setTimeout(() => {
    //         document.querySelector("#left").style.display = "block";
    //         document.querySelector("#right").style.display = "block";
    //     }, 698);
    // }
});


function twoRollLoopThrough (numInt) {
    let randomNum = Math.floor(Math.random() * numInt.length);
    let randomNum2 = Math.floor(Math.random() * numInt.length);
    
    for( let n = 0; n < numInt.length; n++){
        (function(n) {
            setTimeout(function(){
                document.querySelector("#right > img").setAttribute("src", `./images/dice${numInt[n]}.png`);
                document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[n]}.png`);
            }, 100 * n);
        })(n);
    };

    setTimeout(() => {
        for( let j = 0; j < numInt.length; j++){
        (function(j) {
            setTimeout(function(){
                document.querySelector("#right > img").setAttribute("src", `./images/dice${numInt[j]}.png`);
                document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[j]}.png`);
            }, 200 * j);
        })(j);
    };}, 100)

    setTimeout(() => {
        for( let i = 0; i < numInt.length; i++){
        (function(i) {
            setTimeout(function(){
                document.querySelector("#right > img").setAttribute("src", `./images/dice${numInt[i]}.png`);
            }, 400 * i);
        })(i);
        if (i === randomNum){
            document.querySelector("#right > img").setAttribute("src", `./images/dice${numInt[randomNum]}.png`);
            break;
        };
    };}, 300);

    setTimeout(() => {
        for( let ii = 0; ii < numInt.length; ii++){
        (function(ii) {
            setTimeout(function(){
                document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[ii]}.png`);
            }, 400 * ii);
        })(ii);
        if ( ii === randomNum2){
            document.querySelector("#left > img").setAttribute("src", `./images/dice${numInt[randomNum2]}.png`);
            break;
        };
    };}, 300);

    setTimeout(() => {
        if(randomNum > randomNum2){
        document.querySelector("#left").innerHTML = "<h2>Whites Win</h2>";
        setTimeout(() =>  {
            document.querySelector("#left").innerHTML = `<img src='./images/dice${numInt[randomNum2]}.png' alt='dice right'>`;
        }, 1500)
    } else if (randomNum < randomNum2){
        document.querySelector("#right").innerHTML = "<h2>Blacks Win</h2>";
        setTimeout(() =>  {
            document.querySelector("#right").innerHTML = `<img src='./images/dice${numInt[randomNum]}.png' alt='dice right'>`;
        }, 1500)
    } else if (randomNum === randomNum2){
        document.querySelector(".text-title").innerHTML = "Draw";
        document.querySelector("#left").style.display = "none";
        document.querySelector("#right").style.display = "none";
        setTimeout(() => {
            document.querySelector("#left").style.display = "block";
            document.querySelector("#right").style.display = "block";
        }, 1500);
    }}, 2500);

    

}

