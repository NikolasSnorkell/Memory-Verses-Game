let mas=[
    {src: "1 Самуила 15:22", txt:"Самуил сказал: «Разве всесожжения и жертвы так же радуют Иегову, как послушание Иегове? Послушание лучше жертвы, и покорность лучше жира баранов."},
    {src: "2 Царей 6:16", txt:"Не бойся, — ответил Елисей, — потому что тех, кто с нами, больше, чем тех, кто с ними»."},
    {src: "1 Летопись 28:9", txt:"И ты, мой сын Соломон, знай Бога своего отца и служи ему всем сердцем и всей душой, потому что Иегова исследует сердца всех людей и знает их мысли и желания. Если ты будешь искать его, то найдёшь его, а если отвернёшься от него, он отвергнет тебя навсегда."},
    {src: "Псалом 145:18", txt:"Иегова близок ко всем призывающим его, Ко всем призывающим его в истине."},
    {src: "Псалом 145:19", txt:"Он исполнит желание боящихся его, Услышит их крик о помощи и спасёт их."},
    {src: "Псалом 145:20", txt:"Иегова охраняет всех любящих его, А всех нечестивых истребит."},
    {src: "Притчи 12:18", txt:"Иной, говоря бездумно, ранит, как мечом, а язык мудрых исцеляет."},
    {src: "Притчи 12:25", txt:"Беспокойство подавляет сердце человека, а доброе слово доставляет сердцу радость."},
    {src: "Притчи 13:10", txt:"Иегова охраняет всех любящих его, А всех нечестивых истребит."},
    {src: "Притчи 24:16", txt:"Ведь праведный может упасть и семь раз, но всё равно встанет, А грешник во время бедствия упадёт и не поднимется."},
    {src: "Исайя 41:10", txt:"Не бойся, потому что я с тобой. Не тревожься, потому что я твой Бог. Я укреплю тебя, помогу тебе, Буду крепко держать тебя правой рукой."},
    {src: "Исайя 48:17", txt:"Так говорит Иегова, ваш Избавитель, Святой Бог Израиля: «Я, Иегова, — ваш Бог, Я учу вас для вашей же пользы, Веду вас по тому пути, по которому вы должны идти."},    
        
    {src: "Иоанна 14:21", txt:"Тот, кто признаёт мои заповеди и соблюдает их, любит меня. А того, кто любит меня, будет любить мой Отец, и я тоже буду его любить и открою ему себя»."},
    {src: "Деяния 17:11", txt:"Люди здесь были более широких взглядов, чем фессалоники́йцы: они охотно приняли слово Бога и каждый день усердно исследовали Писание, проверяя, верно ли то, что им говорят."},
    {src: "Римлянам 12:10", txt:"Любите друг друга, как братья, и относитесь друг к другу с теплотой. Первыми проявляйте уважение к другим."},
    {src: "Римлянам 10:13", txt:"Ведь каждый, кто призывает имя Иеговы, будет спасён."},
    {src: "1 Коринфянам 15:33", txt:"Не заблуждайтесь. Плохое окружение губит полезные привычки."},
    {src: "Галатам 5:22,23", txt:"А плод духа — это любовь, радость, мир, терпение, доброта, добро, вера, кротость, самообладание. Против подобного нет закона."},
    {src: "Эфесянам 4:2", txt:"Всегда будьте смиренными, кроткими, терпеливыми, миритесь с недостатками друг друга, проявляя любовь."},
    {src: "Филиппийцам 4:6,7", txt:"Ни о чём не беспокойтесь, но во всех обстоятельствах просите Бога о помощи, обращаясь к нему в молитвах и мольбах и воздавая ему благодарность. И тогда Божий мир, который выше человеческого понимания, будет оберегать ваше сердце и ум через Христа Иисуса."},
    {src: "Филиппийцам 2:13", txt:"Ведь сам Бог ради того, что ему угодно, действует в вас, чтобы вы и желали, и действовали."},
    {src: "Филиппийцам 4:13", txt:"Всё мне под силу благодаря тому, кто меня укрепляет."},
    {src: "1 Тимофею 4:3", txt:"Ведь настанет время, когда люди отвергнут здравое учение и, следуя своим желаниям, будут искать учителей, которые бы говорили им лишь то, что они хотят услышать."},
    {src: "2 Тимофею 3:16", txt:"Всё Писание вдохновлено Богом и полезно для обучения, для обличения, для исправления, для наставления в праведности."},
    {src: "2 Тимофею 4:2", txt:"Проповедуй слово, делай это безотлагательно во время благоприятное и во время неблагоприятное, обличай, порицай, увещай со всем долготерпением и искусством учить."},
    {src: "Евреям 3:4", txt:"У каждого дома есть строитель, а тот, кто построил всё, — это Бог."},
    {src: "Евреям 11:1", txt:"Вера — это твёрдая убеждённость в том, что наша надежда осуществится, ясное доказательство существования того, что невидимо."},
    {src: "Иакова 2:26", txt:"Итак, как тело без духа мертво, так и вера без дел мертва."},
    {src: "Иакова 3:17", txt:"Но мудрость свыше, прежде всего, чиста, потом мирна, благоразумна, послушна, исполнена милосердия, приносит много добрых плодов, беспристрастна, нелицемерна."},
    {src: "Иакова 4:8", txt:"Приблизьтесь к Богу, и он приблизится к вам. Омойте руки, грешники, и очистите сердца, нерешительные."},
    {src: "1 Иоанна 3:18", txt:"Мои любимые дети, мы должны любить не на словах, а на деле, по-настоящему."},
    {src: "1 Иоанна 4:11", txt:"Мои дорогие, если Бог нас так полюбил, то и мы обязаны любить друг друга."},
    {src: "1 Иоанна 4:18", txt:"У того, кто любит Бога, нет страха. Страх сковывает, но совершенная любовь изгоняет его. Тот, кто боится, не достиг совершенства в любви."},
    {src: "1 Иоанна 5:3", txt:"Любить Бога означает соблюдать его заповеди, и соблюдать их не тяжело."},    
];


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

document.querySelector("#nextBtn").addEventListener("click",getCard);
let startBtnNameKey = 0;
let lock = 0;
let checkLock = 0;
//Apply index to verses

function getCard(elem){

        if(lock==0){
            $("#textVerse").animate({
                height:'toggle',
                opacity:"toggle"
            },1)
        }
        lock=1;
        if(startBtnNameKey==0){
            document.querySelector("#nextBtn").innerHTML = "Далее";
        }

        startBtnNameKey=1;

        if(checkLock==0){
            document.querySelector("#checkBtn").toggleAttribute("disabled");
        }
        checkLock=1;

       

        if(elem.innerText==undefined){
            index = getNumber(0,masSwitcher.length);   
          
            showcard(index,"masSwitcher");
        } else {
            for(let i=0;i<mas.length;i++){
                if(mas[i].src==elem.innerText) {
                    index=i;
                    srcListShow(rotate);

                    showVerse("src");
                    showcard(index,"mas");

                    break
                }

            }
        }
          
    }


    function getNumber(min,max){
        if(max==1){
             index = 0;

            }else
             {
            index = Math.floor(Math.random()*max);

            while(checker==index){
                index = Math.floor(Math.random()*max);
            }
            checker = index;
        }
    
    
        return(index);
    }



//Show verse i got
function showcard(i,key){
    $("#srcVerse").animate({
        opacity:"0"
    },400);

    if((masSwitcher.length==mas.length)||key=="mas"){
    setTimeout(function(){
    document.querySelector("#srcVerse").innerHTML=mas[i].src;
    document.querySelector("#textVerse").innerHTML="<span class='quotes'>&#171;</span> "+mas[i].txt+" <span class='quotes'>&#187;</span>";
   },400)
} else {
    setTimeout(function(){      
        document.querySelector("#srcVerse").innerHTML=masSwitcher[i].src;
        document.querySelector("#textVerse").innerHTML="<span class='quotes'>&#171;</span> "+masSwitcher[i].txt+" <span class='quotes'>&#187;</span>";
    },400)  

}
   
    $("#srcVerse").animate({
        opacity:"1"
    },400);

}



// $("#textVerse").css({
//     height:'toggle',
//     opacity:'0',
// })


$("#checkBtn").on("click",function(){showVerse("btn")})


function showVerse(key){
    if(key=="btn"){
        $("#textVerse").animate({
            height:'toggle',
            opacity:"toggle"
        })

    document.querySelector("#nextBtn").toggleAttribute("disabled");

    }
    if(key=="src"){
    if( document.querySelector("#nextBtn").hasAttribute("disabled")==true){
        $("#textVerse").animate({
            height:'toggle',
            opacity:"toggle"
        })
        document.querySelector("#nextBtn").toggleAttribute("disabled");
    }
    }
    if(document.querySelector("#nextBtn").hasAttribute("disabled")==true){
        document.querySelector("#checkBtn").innerHTML="Скрыть";
        } else {
        document.querySelector("#checkBtn").innerHTML="Проверить";
        }
}




for(let i=0;i<mas.length;i++){
    document.querySelector('#srcText').innerHTML+="<div class='srcBlocks'><p class='srcTexts' onclick='getCard(this)'>"+mas[i].src+"</p><input type='checkbox' class='checkBoxes'></div>"
}
$("#srcList").css("height",'40px');
$(".srcTexts").css("opacity",'0');
$(".srcBlocks").css("display",'none');

$("#teqBlock").css("opacity",'0');
$("#teqBlock").css("display",'none');

document.querySelector("#arrowTitleCont").addEventListener("click",getSrcList);

let rotate = 0, keyForClickFunc = 0;;

            function getSrcList(){
            
                // if(keyForClickFunc == 0){
                //     let srcS = document.querySelectorAll(".srcTexts");
                //     // for(let i=0;i<srcS.length;i++){
                //     //     srcS[i].addEventListener("click",console.log(this));
                //     // }

                //     keyForClickFunc=1;
                // }
               
                srcListShow(rotate)
           
            }

            let createChecksFlag = 0;

            function srcListShow(coeff){

                if(coeff==0){
                    $("#imgSrc").css("transform",'rotate(-180deg)');
    
                    $("#srcList").animate({height:'950px'});
                    // $("#srcList").css("height",'1050px');
                    $(".srcBlocks").css("display",'flex');
                    $(".srcTexts").animate({opacity:'1'});

                    $("#teqBlock").animate({opacity:'1'});
                    $("#teqBlock").css("display",'flex');
                
                    rotate = 1;
                    if(createChecksFlag==0){
                        createChecks();
                        createChecksFlag=1;
                        
                    }
                   
                }
                    else {
                        $("#imgSrc").css("transform",'rotate(0deg)');
    
                        $("#srcList").animate({height:'40px'});
                        // $("#srcList").css("height",'30px');
    
                        $(".srcTexts").animate({opacity:'0'});
                        $(".srcBlocks").css("display",'none');

                        $("#teqBlock").animate({opacity:'0'});
                        $("#teqBlock").css("display",'none');
                       
                
                        rotate = 0;
                        checkMas();
                    }



            }

          




            let checksMas;

            function createChecks(){

                checksMas = document.querySelectorAll(".checkBoxes");

                for(let i=0;i<checksMas.length;i++){
                    
                        // $(checksMas[i]).prop("checked",true)=true;
                        checksMas[i].checked = true;
                        // checkMas[i].addEventListener("change",function(){checkedVisual(this)});
                    }
            }


             







            //Turn off/on all checks functions

                    document.querySelector("#on").addEventListener("click",function(){
                        for(let i=0;i<checksMas.length;i++){
                            checksMas[i].checked = true;
                           
                        }
                    })
                    document.querySelector("#off").addEventListener("click",function(){
                        for(let i=0;i<checksMas.length;i++){
                            checksMas[i].checked = false;
                         
                        }
                    })





            function checkMas(){
              
                actualMas = [];

                for(let i=0;i<checksMas.length;i++){
                    if( checksMas[i].checked ==true){
                        actualMas.push(mas[i]);
                       
                    } else continue
                    
                }


                // for(let i=0;i<checksMas.length;i++){
                //     if(checksMas[i].hasAttribute("checked")==true){
                //         actualMas.push(mas[i]);
                        
                //     } else continue
                // }
                if(actualMas.length==mas.length){
                    masSwitcher=mas;
                } else if(actualMas.length==0){
                    actualMas.push({src:"Стих не выбран!",txt:"Нет текста."});
                    masSwitcher=actualMas;
                } else {
                    masSwitcher=actualMas;
                }

                console.log(masSwitcher)
            }






        document.querySelector("#changeLog").addEventListener("click",changeLogFunc);
let logKey =0;
        function changeLogFunc(){
            if(logKey==0){
              

                $("#changeLog").animate({height:'200px'});
                // $("#srcList").css("height",'1050px');
                $("#changesList").css("display",'block');
                $("#changesList").animate({opacity:'1'});
                $("#changeLog").css('background','rgba(0,0,0,0.8)');
                $("#changeLog").css('boxShadow','0 8px 7px 0 rgba(0, 0, 0,0.4)');
            
                logKey = 1;
               
            }
                else {
                  

                    $("#changeLog").animate({height:'35px'});
                    // $("#srcList").css("height",'30px');

                    $("#changesList").animate({opacity:'0'});
                    $("#changesList").css("display",'none');
                    $("#changeLog").css('background','rgba(0,0,0,0.5)');
                    $("#changeLog").css('boxShadow','0 0px 7px 0 rgba(0, 0, 0,0.4)');
            
                    logKey = 0;
                    
                }
        }
