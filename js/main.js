let mas=[
{src: "Филиппийцам 2:13", txt:"Ведь сам Бог ради того, что ему угодно, действует в вас, чтобы вы и желали, и действовали."},
{src: "Филиппийцам 4:13", txt:"Всё мне под силу благодаря тому, кто меня укрепляет."},
{src: "1 Коринфянам 15:33", txt:"Не заблуждайтесь. Плохое окружение губит полезные привычки."},
{src: "Евреям 11:1", txt:"Вера — это твёрдая убеждённость в том, что наша надежда осуществится, ясное доказательство существования того, что невидимо."},
{src: "Евреям 3:4", txt:"У каждого дома есть строитель, а тот, кто построил всё, — это Бог."},
{src: "1 Иоанна 5:3", txt:"Любить Бога означает соблюдать его заповеди, и соблюдать их не тяжело."},
{src: "Иакова 4:8", txt:"Приблизьтесь к Богу, и он приблизится к вам. Омойте руки, грешники, и очистите сердца, нерешительные."},
{src: "1 Тимофею 4:3", txt:"Ведь настанет время, когда люди отвергнут здравое учение и, следуя своим желаниям, будут искать учителей, которые бы говорили им лишь то, что они хотят услышать."},
{src: "Исайя 41:10", txt:"Не бойся, потому что я с тобой. Не тревожься, потому что я твой Бог. Я укреплю тебя, помогу тебе, Буду крепко держать тебя правой рукой."},
{src: "2 Царей 6:16", txt:"Не бойся, — ответил Елисей, — потому что тех, кто с нами, больше, чем тех, кто с ними»."},
{src: "1 Летопись 28:9", txt:"И ты, мой сын Соломон, знай Бога своего отца и служи ему всем сердцем и всей душой, потому что Иегова исследует сердца всех людей и знает их мысли и желания. Если ты будешь искать его, то найдёшь его, а если отвернёшься от него, он отвергнет тебя навсегда."},
{src: "1 Самуила 15:22", txt:"Самуил сказал: «Разве всесожжения и жертвы так же радуют Иегову, как послушание Иегове? Послушание лучше жертвы, и покорность лучше жира баранов."},
{src: "Притчи 24:16", txt:"Ведь праведный может упасть и семь раз, но всё равно встанет, А грешник во время бедствия упадёт и не поднимется."},
{src: "Иакова 2:26", txt:"Итак, как тело без духа мертво, так и вера без дел мертва."},
{src: "Деяния 17:11", txt:"Люди здесь были более широких взглядов, чем фессалоники́йцы: они охотно приняли слово Бога и каждый день усердно исследовали Писание, проверяя, верно ли то, что им говорят."},
{src: "Римлянам 12:10", txt:"Любите друг друга, как братья, и относитесь друг к другу с теплотой. Первыми проявляйте уважение к другим."},
{src: "Притчи 12:18", txt:"Иной, говоря бездумно, ранит, как мечом, а язык мудрых исцеляет."},
{src: "Притчи 12:25", txt:"Беспокойство подавляет сердце человека, а доброе слово доставляет сердцу радость."},
{src: "Псалом 145:18", txt:"Иегова близок ко всем призывающим его, Ко всем призывающим его в истине."},
{src: "Псалом 145:19", txt:"Он исполнит желание боящихся его, Услышит их крик о помощи и спасёт их."},
{src: "Псалом 145:20", txt:"Иегова охраняет всех любящих его, А всех нечестивых истребит."},
{src: "Притчи 13:10", txt:"Иегова охраняет всех любящих его, А всех нечестивых истребит."},
{src: "2 Тимофею 4:2", txt:"Проповедуй слово, делай это безотлагательно во время благоприятное и во время неблагоприятное, обличай, порицай, увещай со всем долготерпением и искусством учить."},
{src: "2 Тимофею 3:16", txt:"Всё Писание вдохновлено Богом и полезно для обучения, для обличения, для исправления, для наставления в праведности."},





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



let index = 0;
let checker = 0;
// Randomizer for mas
function getNumber(min,max){
    index = Math.floor(Math.random()*max);

    while(index<min||checker==index){
        index = Math.floor(Math.random()*max);
    }
    checker = index;
    return(index);
}




document.querySelector("#checkBtn").toggleAttribute("disabled");

document.querySelector("#nextBtn").addEventListener("click",getCard);
let startBtnNameKey = 0;
let lock = 0;
let checkLock = 0;
//Apply index to verses

function getCard(){

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

            index = getNumber(0,mas.length);
        

           

    
            showcard(index)

          
    }




//Show verse i got
function showcard(i){
    $("#srcVerse").animate({
        opacity:"0"
    },400);
    setTimeout(function(){
    document.querySelector("#srcVerse").innerHTML=mas[i].src;
    document.querySelector("#textVerse").innerHTML="<span class='quotes'>&#171;</span> "+mas[i].txt+" <span class='quotes'>&#187;</span>";
   },400)
   
    $("#srcVerse").animate({
        opacity:"1"
    },400);

}



// $("#textVerse").css({
//     height:'toggle',
//     opacity:'0',
// })


$("#checkBtn").on("click", function(){

    $("#textVerse").animate({
        height:'toggle',
        opacity:"toggle"
    })

   document.querySelector("#nextBtn").toggleAttribute("disabled");

   if(document.querySelector("#nextBtn").hasAttribute("disabled")==true){
   document.querySelector("#checkBtn").innerHTML="Скрыть";
   } else {
    document.querySelector("#checkBtn").innerHTML="Проверить";
   }

  
})







for(let i=0;i<mas.length;i++){
    document.querySelector('#srcText').innerHTML+="<p class='srcTexts'>"+mas[i].src+"<br></p>"
}
$("#srcList").css("height",'40px');
$(".srcTexts").css("opacity",'0');
$(".srcTexts").css("display",'none');

    document.querySelector("#arrowTitleCont").addEventListener("click",getSrcList);

let rotate = 0;

            function getSrcList(){
            // document.getElementById("imgSrc").toggleAttribute("style",'transform:rotate(180deg)')
            if(rotate==0){
                $("#imgSrc").css("transform",'rotate(-180deg)');

                $("#srcList").animate({height:'700px'});
                // $("#srcList").css("height",'1050px');
                $(".srcTexts").css("display",'block');
                $(".srcTexts").animate({opacity:'1'});
            

                rotate=1;
            }
                else {
                    $("#imgSrc").css("transform",'rotate(0deg)');

                    $("#srcList").animate({height:'40px'});
                    // $("#srcList").css("height",'30px');

                    $(".srcTexts").animate({opacity:'0'});
                    $(".srcTexts").css("display",'none');
            

                    rotate=0;
                }
            }