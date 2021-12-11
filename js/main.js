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
{src: "2 Царей 6:16", txt:"«Не бойся, — ответил Елисей, — потому что тех, кто с нами, больше, чем тех, кто с ними»."},
{src: "1 Летопись 28:9", txt:"И ты, мой сын Соломон, знай Бога своего отца и служи ему всем сердцем и всей душой, потому что Иегова исследует сердца всех людей и знает их мысли и желания. Если ты будешь искать его, то найдёшь его, а если отвернёшься от него, он отвергнет тебя навсегда."},
{src: "1 Самуила 15:22", txt:"Самуил сказал: «Разве всесожжения и жертвы так же радуют Иегову, как послушание Иегове? Послушание лучше жертвы, и покорность лучше жира баранов."},
{src: "Притчи 24:16", txt:"Ведь праведный может упасть и семь раз, но всё равно встанет, А грешник во время бедствия упадёт и не поднимется."},
{src: "Иакова 2:26", txt:"Итак, как тело без духа мертво, так и вера без дел мертва."},
{src: "Деяния 17:11", txt:"Люди здесь были более широких взглядов, чем фессалоники́йцы: они охотно приняли слово Бога и каждый день усердно исследовали Писание, проверяя, верно ли то, что им говорят."},
{src: "Римлянам 12:10", txt:"Любите друг друга, как братья, и относитесь друг к другу с теплотой. Первыми проявляйте уважение к другим."},];


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

function getNumber(min,max){

    index = Math.floor(Math.random()*max);

    while(index<min){
        index = Math.floor(Math.random()*max);
    }
    return(index);
}

function showcard(i){
    document.querySelector("#cardFirst").innerHTML=mas[i].src;
}


function getCard(){
  index = getNumber(0,mas.length-1);

    showcard(index)
}