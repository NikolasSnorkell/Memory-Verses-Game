let mas = [
    {
        "src": "1 Самуила 15:22",
        "txt": "Самуил сказал: «Разве всесожжения и жертвы так же радуют Иегову, как послушание Иегове? Послушание лучше жертвы, и покорность лучше жира баранов.",
        "tags":["Послушание"]
    },
    {
        "src": "2 Царей 6:16",
        "txt": "Не бойся, — ответил Елисей, — потому что тех, кто с нами, больше, чем тех, кто с ними».",
        "tags":["Вера"]
    },
    {
        "src": "1 Летопись 28:9",
        "txt": "И ты, мой сын Соломон, знай Бога своего отца и служи ему всем сердцем и всей душой, потому что Иегова исследует сердца всех людей и знает их мысли и желания. Если ты будешь искать его, то найдёшь его, а если отвернёшься от него, он отвергнет тебя навсегда.",
        "tags":["Вера", "Отношения с Богом"]
    },
    {
        "src": "Псалом 34:10",
        "txt": "Даже молодые сильные львы голодают, А те, кто ищет Иегову, не лишатся благ.",
        "tags":["Польза", "Вера", "Доверие"]
    },
    {
        "src": "Псалом 51:10",
        "txt": "Дай мне чистое сердце, мой Бог, И вложи в меня новый, непоколебимый дух.",
        "tags":["Вера","Преданность"]
    },
    {
        "src": "Псалом 145:18",
        "txt": "Иегова близок ко всем, кто его призывает, Ко всем, кто призывает его искренне.",
        "tags":["Поклонение", "Отношения с Богом"]
    },
    {
        "src": "Псалом 145:19",
        "txt": "Он исполняет желания боящихся его, Слышит их крик о помощи и спасает их.",
        "tags":["Вера","Отношения с Богом","Польза"]
    },
    {
        "src": "Псалом 145:20",
        "txt": "Иегова оберегает всех, кто его любит, А всех, кто делает зло, он уничтожит.",
        "tags":["Вера","Отношения с Богом","Доверие","Польза"]
    },
    {
        "src": "Притчи 12:18",
        "txt": "Бездумные слова ранят, словно меч, А язык мудрых исцеляет.",
        "tags":["Мудрость","Речь"]
    },
    {
        "src": "Притчи 12:25",
        "txt": "Беспокойство подавляет человека, А доброе слово радует его.",
        "tags":["Речь"]
    },
    {
        "src": "Притчи 13:10",
        "txt": "Самоуверенность приводит лишь к ссорам, А у тех, кто ищет совета, — мудрость.",
        "tags":["Мудрость"]
    },
    {
        "src": "Притчи 17:17",
        "txt": "Настоящий друг любит всегда, Он брат, на которого можно положиться в беде.",
        "tags":["Дружба"]
    },
    {
        "src": "Притчи 24:16",
        "txt": "Ведь праведный может упасть и семь раз, но всё равно встанет, А грешник во время бедствия упадёт и не поднимется.",
        "tags":["Падение","Отношения с Богом"]
    },
    {
        "src": "Исайя 41:10",
        "txt": "Не бойся, потому что я с тобой. Не тревожься, потому что я твой Бог. Я укреплю тебя, помогу тебе, Буду крепко держать тебя правой рукой.",
        "tags":["Вера","Отношения с Богом","Польза"]
    },
    {
        "src": "Исайя 48:17",
        "txt": "Так говорит Иегова, ваш Избавитель, Святой Бог Израиля: «Я, Иегова, — ваш Бог, Я учу вас для вашей же пользы, Веду вас по тому пути, по которому вы должны идти.",
        "tags":["Вера","Польза","Доверие","Поклонение"]
    },
    {
        "src": "Иеремия 29:11",
        "txt": "Я хорошо знаю, что я замыслил для вас, — говорит Иегова. — Я пошлю вам мир, а не бедствие, дам вам будущее и надежду.",
        "tags":["Вера","Доверие","Отношения с Богом"]
    },
    {
        "src": "Иоанна 14:21",
        "txt": "Тот, кто признаёт мои заповеди и соблюдает их, любит меня. А того, кто любит меня, будет любить мой Отец, и я тоже буду его любить и открою ему себя».",
        "tags":["Поклонение","Отношения с Богом"]
    },
    {
        "src": "Деяния 17:11",
        "txt": "Люди здесь были более широких взглядов, чем фессалоники́йцы: они охотно приняли слово Бога и каждый день усердно исследовали Писание, проверяя, верно ли то, что им говорят.",
        "tags":["Вера","Поклонение","Проповедь"]
    },
    {
        "src": "Римлянам 10:13",
        "txt": "Ведь каждый, кто призывает имя Иеговы, будет спасён.",
        "tags":["Вера","Поклонение","Отношения с Богом","Польза"]
    },
    {
        "src": "Римлянам 12:10",
        "txt": "Любите друг друга, как братья, и относитесь друг к другу с теплотой. Первыми проявляйте уважение к другим.",
        "tags":["Дружба"]
    },
    {
        "src": "1 Коринфянам 15:33",
        "txt": "Не заблуждайтесь. Плохое окружение губит полезные привычки.",
        "tags":["Мудрость","Дружба"]
    },
    {
        "src": "Галатам 5:22,23",
        "txt": "А плод духа — это любовь, радость, мир, терпение, доброта, добро, вера, кротость, самообладание. Против подобного нет закона.",
        "tags":["Вера","Отношения с Богом","Польза"]
    },
    {
        "src": "Галатам 6:4,5",
        "txt": "Но каждый пусть оценивает собственные дела, и тогда он сможет радоваться своим успехам, не сравнивая себя с другими. Ведь каждый понесёт свою ношу.",
        "tags":["Мудрость","Отношения с Богом"]
    },
    {
        "src": "Эфесянам 4:2",
        "txt": "Всегда будьте смиренными, кроткими, терпеливыми, миритесь с недостатками друг друга, проявляя любовь.",
        "tags":["Дружба"]
    },
    {
        "src": "Филиппийцам 2:3,4",
        "txt": "Ничего не делайте из тщеславия или желания поспорить, но будьте смиренными и считайте других выше себя. Заботьтесь не только о своих интересах, но и об интересах других.",
        "tags":["Дружба","Мудрость"]
    },
    {
        "src": "Филиппийцам 2:13",
        "txt": "Ведь сам Бог в согласии со своей волей укрепляет вас и даёт вам и желание, и силу действовать.",
        "tags":["Отношения с Богом","Польза"]
    },
    {
        "src": "Филиппийцам 4:6,7",
        "txt": "Ни о чём не беспокойтесь, но во всех обстоятельствах просите Бога о помощи, обращаясь к нему в молитвах и мольбах и воздавая ему благодарность. И тогда Божий мир, который выше человеческого понимания, будет оберегать ваше сердце и ум через Христа Иисуса.",
        "tags":["Вера","Отношения с Богом","Доверие"]
    },
    {
        "src": "Филиппийцам 4:13",
        "txt": "Всё мне под силу благодаря тому, кто меня укрепляет.",
        "tags":["Вера","Отношения с Богом","Доверие"]
    },
    {
        "src": "2 Тимофею 3:16",
        "txt": "Всё Писание вдохновлено Богом и полезно: оно помогает обучать, обличать, исправлять, наставлять на правильный путь.",
        "tags":["Польза","Поклонение"]
    },
    {
        "src": "2 Тимофею 4:2",
        "txt": "Проповедуй слово Бога, проявляй в этом рвение и в благоприятное, и в неблагоприятное время, обличай, предостерегай и убеждай, будь при этом терпелив и применяй учительское мастерство.",
        "tags":["Проповедь","Поклонение"]
    },
    {
        "src": "1 Тимофею 4:3",
        "txt": "Ведь настанет время, когда люди отвергнут здравое учение и, следуя своим желаниям, будут искать учителей, которые бы говорили им лишь то, что они хотят услышать.",
        "tags":["Вера","Отношения с Богом","Поклонение"]
    },
    {
        "src": "Евреям 3:4",
        "txt": "У каждого дома есть строитель, а тот, кто построил всё, — это Бог.",
        "tags":["Вера","Отношения с Богом"]
    },
    {
        "src": "Евреям 11:1",
        "txt": "Вера — это твёрдая убеждённость в том, что наша надежда осуществится, ясное доказательство существования того, что невидимо.",
        "tags":["Вера"]
    },
    {
        "src": "Иакова 2:26",
        "txt": "Итак, как тело без духа мертво, так и вера без дел мертва.",
        "tags":["Вера","Поклонение"]
    },
    {
        "src": "Иакова 3:17",
        "txt": "Но мудрость свыше, прежде всего, чиста, потом мирна, благоразумна, послушна, исполнена милосердия, приносит много добрых плодов, беспристрастна, нелицемерна.",
        "tags":["Мудрость"]
    },
    {
        "src": "Иакова 4:8",
        "txt": "Приблизьтесь к Богу, и он приблизится к вам. Омойте руки, грешники, и очистите сердца, нерешительные.",
        "tags":["Отношения с Богом"]
    },
    {
        "src": "1 Петра 5:7",
        "txt": "Переложите на него все свои беспокойства, потому что он заботится о вас.",
        "tags":["Вера","Доверие","Отношения с Богом","Польза"]
    },
    {
        "src": "1 Иоанна 3:18",
        "txt": "Мои любимые дети, мы должны любить не на словах, а на деле, по-настоящему.",
        "tags":["Дружба"]
    },
    {
        "src": "1 Иоанна 4:11",
        "txt": "Мои дорогие, если Бог нас так полюбил, то и мы обязаны любить друг друга.",
        "tags":["Дружба","Отношения с Богом"]
    },
    {
        "src": "1 Иоанна 4:18",
        "txt": "У того, кто любит Бога, нет страха. Страх сковывает, но совершенная любовь изгоняет его. Тот, кто боится, не достиг совершенства в любви.",
        "tags":["Отношения с Богом"]
    },
    {
        "src": "1 Иоанна 5:3",
        "txt": "Любить Бога означает соблюдать его заповеди, и соблюдать их не тяжело.",
        "tags":["Отношения с Богом","Доверие"]
    }
];
let tagsObj = {};



// $.getJSON('json/verses.json', { 'get_param': 'value' }, function (data) {
//     mas = data;
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
// });


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


let rotate = 0,rotate2=0, keyForClickFunc = 0;;

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

        $("#srcList").animate({ height: '1200px' });
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

        $("#srcList").animate({ height: '1500px' });

        tagClick();

        rotate2 = 1;
    } else {
        $("#imgTagsSrc").css("transform", 'rotate(0deg)');
        $("#tagsList").animate({ height: '40px' });
        $("#tags").animate({ opacity: '0' });
        $("#tags").css("display", 'none');

        $("#srcList").animate({ height: '1200px' });



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
















let x1 = null,x2=null, rightAns = 0, unknownAns = 0;
let xDiff, flag = -1;

$("#cardFirst").on("touchstart mousedown", function(event){
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;

    flag = 0;
});

// $("#cardFirst").on("touchmove",function(){
//     funcTouchMove(event);
// });







function funcTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;

    flag = 0;

    // if(lock==0) getCard($("#nextBtn"));
    // console.log(lock);
}


$("#cardFirst").on("touchmove mousemove", function(event){
     x2 = event.touches[0].clientX;

    xDiff = x2 - x1;


    $("#cardFirst").css({
        transform: "translateX(" + xDiff + "px)"
    });

    flag = 1;
});

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

$("#cardFirst").on("touchend mouseup", function(event){
    // alert("func start");

    //  x2 = event.touches[0].clientX;
     
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
});


function funcTouchEnd(event) {

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
