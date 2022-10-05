let mas = [];
let tagsObj = {};



$.getJSON('json/verses.json', { 'get_param': 'value' }, function (data) {
    mas = data;
    console.log(mas.length);
    put_info();

    for (let i = 0; i < mas.length; i++) {

        for (let m = 0; m < (mas[i].tags).length; m++) {

            let name = ((mas[i].tags)[m]).replaceAll(" ", "_");
            // console.log(name);
            if (tagsObj[name]) {
                tagsObj[name].push(i);
            } else {
                tagsObj[name] = [];
                tagsObj[name].push(i);
                name = name.replaceAll("_", " ")
                $('#tags').html($('#tags').html() + '<span>' + name + '</span>')
            }

            // tagsObj.дружба = [1,2,4]


        }

    }

    // for(let i=0;i<tagsObj.length;i++){
    //     console.log(tagsObj[i])
    // }


    // console.log(tagsObj);
});


// Блок для добавления стихов в массив
// ------------------------------------

// let currentVerse ="";


// function getMas(){

//     currentVerse = document.querySelector("#innerVerse").value;
//     currentVerse = currentVerse.split("/");
//     document.querySelector("#innerVerse").value = "";
//     mas.push({src:currentVerse[0],txt:currentVerse[1]});
//     console.log(mas);

// }


// function Output(){
//     output.innerHTML="";

//     for(let i=0;i<mas.length;i++){
//         output.innerHTML+='{<b>src:</b> "'+mas[i].src+'", <b>txt:</b>"'+mas[i].txt+'"},<br>'
//     }
// }


let actualMas = [];
let masSwitcher = mas;


let index = 0;
let checker = 0;
// Randomizer for mas











document.querySelector("#checkBtn").toggleAttribute("disabled");

// document.querySelector("#nextBtn").addEventListener("click",getCard);
let startBtnNameKey = 0;
let lock = 0;
let checkLock = 0;
let checkHideFlag = 0;
//Apply index to verses

function getCard(elem) {

    if (lock == 0) {
        $("#textVerse").animate({
            height: 'toggle',
            opacity: "toggle"
        }, 1)
    }
    lock = 1;

    // if(startBtnNameKey==0){
    //     document.querySelector("#nextBtn").innerHTML = "Далее";
    // }

    startBtnNameKey = 1;

    if (checkLock == 0) {
        document.querySelector("#checkBtn").toggleAttribute("disabled");
    }
    checkLock = 1;



    if (elem.innerText == undefined) {

        index = getNumber(0, masSwitcher.length);

        showcard(index, "masSwitcher");
    } else {


        for (let i = 0; i < mas.length; i++) {
            if (mas[i].src == elem.innerText) {
                index = i;
                srcListShow(rotate);

                showVerse("src");
                showcard(index, "mas");

                break
            }

        }
    }

}


function getNumber(min, max) {
    if (max == 1) {
        index = 0;

    } else {
        index = Math.floor(Math.random() * max);

        while (checker == index) {
            index = Math.floor(Math.random() * max);
        }
        checker = index;
    }


    return (index);
}



//Show verse i got
function showcard(i, key) {
    $("#srcVerse").animate({
        opacity: "0"
    }, 400);
    $("#textVerse").animate({
        opacity: "0"
    }, 400);

    if ((masSwitcher.length == mas.length) || key == "mas") {
        setTimeout(function () {
            document.querySelector("#srcVerse").innerHTML = mas[i].src;
            document.querySelector("#textVerse").innerHTML = "<span class='quotes'>&#171;</span> " + mas[i].txt + " <span class='quotes'>&#187;</span>";
        }, 400)

    } else {
        setTimeout(function () {
            document.querySelector("#srcVerse").innerHTML = masSwitcher[i].src;
            document.querySelector("#textVerse").innerHTML = "<span class='quotes'>&#171;</span> " + masSwitcher[i].txt + " <span class='quotes'>&#187;</span>";

        }, 400)

    }

    $("#srcVerse").animate({
        opacity: "1"
    }, 400);
    $("#textVerse").animate({
        opacity: "1"
    }, 400);
}



// $("#textVerse").css({
//     height:'toggle',
//     opacity:'0',
// })


$("#checkBtn").on("click", function () { showVerse("btn") })


function showVerse(key) {
    if (key == "btn") {
        $("#textVerse").animate({
            height: 'toggle',
            opacity: "toggle"
        })

        // document.querySelector("#nextBtn").toggleAttribute("disabled");

        if (checkHideFlag == 0) {
            document.querySelector("#checkBtn").innerHTML = "Скрыть";
            checkHideFlag = 1;
        } else {
            document.querySelector("#checkBtn").innerHTML = "Проверить";
            checkHideFlag = 0;
        }

    }
    // } else {
    //     $("#textVerse").animate({
    //         opacity:"0"
    //     },500);
    // }




    if (key == "src" && document.querySelector("#checkBtn").innerHTML == "Скрыть") {
        // setTimeout(() => {
        $("#textVerse").animate({
            height: 'toggle',
            opacity: "toggle"
        }, 0);
        document.querySelector("#checkBtn").innerHTML = "Проверить";
        checkHideFlag = 0;
    }
    // }, 400);


    // if( document.querySelector("#nextBtn").hasAttribute("disabled")==true){
    //     $("#textVerse").animate({
    //         height:'toggle',
    //         opacity:"toggle"
    //     })
    //     document.querySelector("#nextBtn").toggleAttribute("disabled");
    // }



    // if( checkHideFlag == 0){
    //     document.querySelector("#checkBtn").innerHTML="Скрыть";
    //     checkHideFlag=1;
    //     } else {
    //     document.querySelector("#checkBtn").innerHTML="Проверить";
    //     checkHideFlag=0;
    //     }
}



function put_info() {
    for (let i = 0; i < mas.length; i++) {
        document.querySelector('#srcText').innerHTML += "<div class='srcBlocks'><p class='srcTexts' onclick='getCard(this)'>" + mas[i].src + "</p><input type='checkbox' class='checkBoxes'></div>"
    }
    $("#srcList").css("height", '40px');
    $(".srcTexts").css("opacity", '0');
    $(".srcBlocks").css("display", 'none');
    $("#tagsList").css("display", 'none');
    $("#tagsList").css('opacity', '0');

    $("#teqBlock").css("opacity", '0');
    $("#teqBlock").css("display", 'none');

    document.querySelector("#arrowTitleCont").addEventListener("click", getSrcList);
    document.querySelector("#arrowTagsTitleCont").addEventListener("click", getTagsList);
}


let rotate = 0, keyForClickFunc = 0;;

function getSrcList() {

    srcListShow(rotate)

}

function getTagsList() {
    tagsShow(rotate2)

}

let createChecksFlag = 0;

function srcListShow(coeff) {

    if (coeff == 0) {
        $("#imgSrc").css("transform", 'rotate(-180deg)');

        $("#srcList").animate({ height: '1130px' });
        // $("#srcList").css("height",'1050px');
        $(".srcBlocks").css("display", 'flex');
        $(".srcTexts").animate({ opacity: '1' });

        $("#tagsList").css("display", 'flex');
        $("#tagsList").animate({ opacity: '1' });

        $("#teqBlock").animate({ opacity: '1' });
        $("#teqBlock").css("display", 'flex');

        rotate = 1;
        if (createChecksFlag == 0) {
            createChecks();
            createChecksFlag = 1;

        }

    }
    else {
        $("#imgSrc").css("transform", 'rotate(0deg)');

        $("#srcList").animate({ height: '40px' });
        // $("#srcList").css("height",'30px');

        $(".srcTexts").animate({ opacity: '0' });
        $(".srcBlocks").css("display", 'none');

        $("#tagsList").animate({ opacity: '0' });
        $("#tagsList").css("display", 'none');

        $("#teqBlock").animate({ opacity: '0' });
        $("#teqBlock").css("display", 'none');


        rotate = 0;
        checkMas();
    }



}


function tagsShow(coeff) {
    if (coeff == 0) {
        $("#imgTagsSrc").css("transform", 'rotate(-180deg)');
        $("#tagsList").animate({ height: '300px' });
        $("#tags").css("display", 'flex');
        $("#tags").animate({ opacity: '1' });

        $("#srcList").animate({ height: '1430px' });

        tagClick();

        rotate2 = 1;
    } else {
        $("#imgTagsSrc").css("transform", 'rotate(0deg)');
        $("#tagsList").animate({ height: '40px' });
        $("#tags").animate({ opacity: '0' });
        $("#tags").css("display", 'none');

        $("#srcList").animate({ height: '1130px' });



        rotate2 = 0
    }
}




let checksMas;

function createChecks(aim) {

    checksMas = document.querySelectorAll(".checkBoxes");

    for (let i = 0; i < checksMas.length; i++) {

        // $(checksMas[i]).prop("checked",true)=true;
        if (aim == "check") {
            checksMas[i].checked = true;
        } else {
            checksMas[i].checked = false;
        }
        // checkMas[i].addEventListener("change",function(){checkedVisual(this)});
    }
}


let amountCoeff = 0, activeTagsMas = [];
function tagClick() {
    $('#tags span').click(function () {
        let thisName = ($(this).text()).replaceAll(" ", "_");

        if ($(this).hasClass('clickedTag') == false) {
            $(this).addClass('clickedTag');
            amountCoeff++;
            activeTagsMas.push(thisName);

            if (amountCoeff == 1) {
                createChecks("uncheck")
            }

            for (let i = 0; i < (tagsObj[thisName]).length; i++) {
                let num = tagsObj[thisName][i];
                checksMas[num].checked = true;
            }

        } else {
            $(this).removeClass('clickedTag');
            amountCoeff--;

            var index = activeTagsMas.indexOf(thisName);
            if (index >= 0) {
                activeTagsMas.splice(index, 1);
            }
            createChecks("uncheck")

            if (amountCoeff == 0) {
                createChecks("check")
            }

            for (let m = 0; m < activeTagsMas.length; m++) {
                let currentName = activeTagsMas[m];
                for (let i = 0; i < (tagsObj[currentName]).length; i++) {
                    let num = tagsObj[currentName][i];
                    checksMas[num].checked = true;
                }
            }
        }


        // console.log(activeTagsMas)




        // console.log(thisName)
    })
}








//Turn off/on all checks functions

document.querySelector("#on").addEventListener("click", function () {
    for (let i = 0; i < checksMas.length; i++) {
        checksMas[i].checked = true;

    }

    activeTagsMas = [];
    amountCoeff = 0;
    $('.clickedTag').removeClass("clickedTag");
})
document.querySelector("#off").addEventListener("click", function () {
    for (let i = 0; i < checksMas.length; i++) {
        checksMas[i].checked = false;

    }

    activeTagsMas = [];
    amountCoeff = 0;
    $('.clickedTag').removeClass("clickedTag");
})





function checkMas() {

    actualMas = [];

    for (let i = 0; i < checksMas.length; i++) {
        if (checksMas[i].checked == true) {
            actualMas.push(mas[i]);

        } else continue

    }


    // for(let i=0;i<checksMas.length;i++){
    //     if(checksMas[i].hasAttribute("checked")==true){
    //         actualMas.push(mas[i]);

    //     } else continue
    // }
    if (actualMas.length == mas.length) {
        masSwitcher = mas;
    } else if (actualMas.length == 0) {
        actualMas.push({ src: "Стих не выбран!", txt: "Нет текста." });
        masSwitcher = actualMas;
    } else {
        masSwitcher = actualMas;
    }

    console.log(masSwitcher)
}






document.querySelector("#changeLog").addEventListener("click", changeLogFunc);
let logKey = 0;
function changeLogFunc() {
    if (logKey == 0) {


        $("#changeLog").animate({ height: '150px' });
        // $("#srcList").css("height",'1050px');
        $("#changesList").css("display", 'block');
        $("#changesList").animate({ opacity: '1' });
        $("#changeLog").css('background', 'rgba(0,0,0,0.8)');
        $("#changeLog").css('boxShadow', '0 8px 7px 0 rgba(0, 0, 0,0.4)');

        logKey = 1;

    }
    else {


        $("#changeLog").animate({ height: '35px' });
        // $("#srcList").css("height",'30px');

        $("#changesList").animate({ opacity: '0' });
        $("#changesList").css("display", 'none');
        $("#changeLog").css('background', 'rgba(0,0,0,0.5)');
        $("#changeLog").css('boxShadow', '0 0px 7px 0 rgba(0, 0, 0,0.4)');

        logKey = 0;

    }
}












// Themes block
let num = 0;
if (localStorage.getItem('ThemeNumber') == null || localStorage.getItem('ThemeNumber') == undefined) {
    num = 0
} else { num = localStorage.getItem('ThemeNumber'); }

$('head').append('<link rel="stylesheet" type="text/css" href="css/theme' + num + '.css">');
document.querySelector("#themeTitle").innerHTML = "Тема#" + num;


if (num == 5) {
    $('#imgSrc').attr("src", "icons/down_arrow_w.png");
    $('#imgTagsSrc').attr("src", "icons/down_arrow_w.png");
    $('#on').attr("src", "icons/filled_check_w.png");
    $('#off').attr("src", "icons/empty_check_w.png");
}


$('#plusT').on('click', function () { themeChange("plus") });
$('#minusT').on('click', function () { themeChange("minus") });

// document.querySelector("#plusT").addEventListener("click",function(){
//     themeChange("plus");
// })
function themeChange(key) {

    if (key == "plus") {
        num++;

        if (num == 5) {
            $('#imgSrc').attr("src", "icons/down_arrow_w.png");
            $('#imgTagsSrc').attr("src", "icons/down_arrow_w.png");
            $('#on').attr("src", "icons/filled_check_w.png");
            $('#off').attr("src", "icons/empty_check_w.png");
        } else {
            $('#imgSrc').attr("src", "icons/down_arrow.png");
            $('#imgTagsSrc').attr("src", "icons/down_arrow.png");
            $('#on').attr("src", "icons/filled_check.png");
            $('#off').attr("src", "icons/empty_check.png");
        }
        if (num == 6) num = 0;
        localStorage.setItem('ThemeNumber', num);
    }

    if (key == "minus") {
        num--;
        if (num == -1) num = 5;
        if (num == 5) {
            $('#imgSrc').attr("src", "icons/down_arrow_w.png");
            $('#imgTagsSrc').attr("src", "icons/down_arrow_w.png");
            $('#on').attr("src", "icons/filled_check_w.png");
            $('#off').attr("src", "icons/empty_check_w.png");
        } else {
            $('#imgSrc').attr("src", "icons/down_arrow.png");
            $('#imgTagsSrc').attr("src", "icons/down_arrow.png");
            $('#on').attr("src", "icons/filled_check.png");
            $('#off').attr("src", "icons/empty_check.png");
        }
        localStorage.setItem('ThemeNumber', num);
    }
    document.querySelector("#themeTitle").innerHTML = "Тема#" + num;
    $('head').append('<link rel="stylesheet" type="text/css" href="css/theme' + num + '.css">');

}


















$("#cardFirst").on("touchstart", function () {
    funcTouchStart(event);
});

// $("#cardFirst").on("touchmove",function(){
//     funcTouchMove(event);
// });



let x1 = null, rightAns = 0, unknownAns = 0;
let xDiff, flag = -1;



function funcTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;

    flag = 0;

    // if(lock==0) getCard($("#nextBtn"));
    // console.log(lock);
}




function funcTouchMove(event) {
    // if(x1) {
    //     return false;
    // }

    let x2 = event.touches[0].clientX;

    xDiff = x2 - x1;


    $("#cardFirst").css({
        transform: "translateX(" + xDiff + "px)"
    });

    flag = 2;

    // x1=null;

}

$("#cardFirst").on("touchend", function () {
    funcTouchEnd();
});


function funcTouchEnd() {

    let x2 = event.touches[0].clientX;

    xDiff = x2 - x1;

    flag = 2;

    $("#cardFirst").css({
        transform: "translateX(0px)"
    });



    if (flag == 2) {



        if (xDiff > 100) {
            $("#cardFirst").css({
                opacity: "0"
            });

            if (lock == 1) rightAns++;
        } else if (xDiff < -100) {
            $("#cardFirst").css({
                opacity: "0"
            });

            if (lock == 1) unknownAns++;
        }

        $("#idk_point").html(unknownAns);
        $("#know_point").html(rightAns);



        if ($("#textVerse").css("opacity") > 0 && checkHideFlag == 1) {
            // setTimeout(() => {
            $("#textVerse").animate({
                height: 'toggle',
                opacity: "toggle"
            }, 0);
            document.querySelector("#checkBtn").innerHTML = "Проверить";
            checkHideFlag = 0;
        }


        getCard($("#nextBtn"));



        setTimeout(() => {
            $("#cardFirst").animate({
                opacity: "1"
            }, 200);

        }, 300);










        flag = -1;

    }

    // console.log(rightAns, unknownAns);

}


// function funcTouchMove(event){
//     if(x1 || y1) {
//         return false;
//     }

//     let x2 = event.touches[0].clientX;
//     let y2 = event.touches[0].clientY;

//     let xDiff = x2-x1;
//     let yDiff = y2-y1;

//     console.log(xDiff);
// }
