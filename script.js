class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
                    }s`);
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

const element1= document.getElementById('video-texto1');
const element2 = document.getElementById('img-text1');

const element3= document.getElementById('video-texto2');
const element4 = document.getElementById('img-text2');


var x1= document.getElementById('1')
var x2= document.getElementById('2')
if(window.screen.width < 1200) {


    //FAZER PARA TODOS OS TOPICOS
    
    element1.classList.remove('box-img1');
    element2.classList.remove('box-text1');
    x1.parentElement.removeChild(x1)
    element3.classList.remove('box-img2');
    element4.classList.remove('box-text2');
    x2.parentElement.removeChild(x2)
    
}


const menu = document.getElementById('mobile-menu');
let   menu1 = document.getElementById('menu');
let    back = document.getElementById('back');
let audio= document.getElementById("myAudio1")
let item = document.getElementsByClassName('menu-item');
let teste = 0 
function fundo(){
    if(window.screen.width < 1200) { // aqui você define o tamanho pra mobile
        if(teste >=1){
        
        
            teste-=1
    
            menu.style.paddingLeft = "290px"
            back.style.display = 'none'
        
        
        
        }
        else{
            menu.style.paddingLeft = "90px"
    
            teste = teste+1
            
        
            for (var i = 0; i < item.length; i++) {
                item[i].addEventListener('click', function(){ back.style.display = 'none'});
            }
            back.style.display = 'block'
        
        
        
        
        }
    }
    

else if(teste >=1){
    
    
    teste-=1
    menu.style.paddingLeft = menu.style.fontSize;
    menu.style.paddingRight = "0"
    menu.style.transition = "padding-Right 0.8s"; 
    back.style.display = 'none'
   
    
}
else{
    menu.style.paddingLeft = "0"
    menu.style.paddingRight = "145px"
    console.log("sadsda")
    teste = teste+1
    menu.style.transition = "padding-Right 2s";    

    for (var i = 0; i < item.length; i++) {
        item[i].addEventListener('click', function(){ back.style.display = 'none'});
    }
    back.style.display = 'block'

    
}
} 
function fonte(e) {

    var elemento = $(".text-center");
    var elemento1 = $(".text-head");
    var elemento2 = $(".text-body");
    var fonte = parseInt(elemento.css('font-size'));
    var fonte2 = parseInt(elemento1.css('font-size'));
    var fonte3 = parseInt(elemento2.css('font-size'));
    var body = $("body");
    const fonteNormal = parseInt(body.css('font-size'));


    if (e == 'a') {
        fonte++;
    }
    if (e == 'd') {
        fonte--;
    }
    if (e == 'n') {
        fonte = fonteNormal;
    }

    elemento.css("fontSize", fonte);
    if (e == 'a') {
        fonte2++;
    }
    if (e == 'd') {
        fonte2--;
    }
    if (e == 'n') {
        fonte2 = fonteNormal;
    }
    elemento1.css("fontSize", fonte2);
    if (e == 'a') {
        fonte3++;
    }
    if (e == 'd') {
        fonte3--;
    }
    if (e == 'n') {
        fonte3 = fonteNormal;
    }

    elemento2.css("fontSize", fonte3);
}
let contaudio = 0
function playAudio() {

    if (contaudio >= 1) {
        let x = document.getElementById("myAudio");
        x.pause();
        contaudio -= 1
    }
    else {
        let x = document.getElementById("myAudio");
        x.play();
        contaudio += 1
    }

}



var player = document.getElementById("myAudio");
let progress = document.getElementById("progress");
let playbtn = document.getElementById("playbtn");

var playpause = function () {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function () {
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
}

player.onpause = function () {
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause");
}

player.ontimeupdate = function () {
    let ct = player.currentTime;
    current1.innerHTML = timeFormat(ct);
    //progress
    let duration = player.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}

function timeFormat(ct) {
    minutes = Math.floor(ct / 60);
    seconds = Math.floor(ct % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

/* GESSIKA2 */

var GÉSSIKA2 = document.getElementById("GÉSSIKA2");
let playbtn1 = document.getElementById("playbtn1");
var playpause = function () {
    if (GÉSSIKA2.paused) {
        GÉSSIKA2.play();
    } else {
        GÉSSIKA2.pause();
    }
}

playbtn1.addEventListener("click", playpause);

GÉSSIKA2.onplay = function () {
    playbtn1.classList.remove("fa-play");
    playbtn1.classList.add("fa-pause");
}

GÉSSIKA2.onpause = function () {
    playbtn1.classList.add("fa-play");
    playbtn1.classList.remove("fa-pause");
}

GÉSSIKA2.ontimeupdate = function () {
    let ct = GÉSSIKA2.currentTime;
    current2.innerHTML = timeFormat(ct);
    //progress
    let duration = GÉSSIKA2.duration;
    prog = Math.floor((ct * 150) / duration);
    progress.style.setProperty("--progress", prog + "%");
}






let mensagem = document.querySelector(".mensagem") ;

// mostra a mensagem
function showMessage(){   
mensagem.style.display = "block";   
}
// esconde a mensagem
function hideMessage(){
mensagem.style.display = "none"; 
}

let mensagem3 = document.querySelector(".mensagem3") ;

// mostra a mensagem
function showMessage1(){   
mensagem3.style.display = "block";   
}
// esconde a mensagem
function hideMessage1(){
mensagem3.style.display = "none"; 
}

let mensagem2 = document.querySelector(".mensagem2") ;

// mostra a mensagem
function showMessage2(){   
mensagem2.style.display = "block";   
}
// esconde a mensagem
function hideMessage2(){
mensagem2.style.display = "none"; 
}

let mensagem4 = document.querySelector(".mensagem4") ;

// mostra a mensagem
function showMessage4(){   
mensagem4.style.display = "block";   
}
// esconde a mensagem
function hideMessage4(){
mensagem4.style.display = "none"; 
}

let mensagem6 = document.querySelector(".mensagem6") ;

// mostra a mensagem
function showMessage6(){   
mensagem6.style.display = "block";   
}
// esconde a mensagem
function hideMessage6(){
mensagem6.style.display = "none"; 
}
//Mapa
(function($) {
$(document).ready(function(){
        //Exibe box de parceiros correspondetes em cada estado quando houver click.
    $('#map .state').click(function(){
        var estado = $(this).attr('data-state');
        var box_estado = '#box_'+estado;

        console.log('.state_'+estado+' .shape');

        // Reseta o estado e seu label para a cor padrão
        $('.state .label_icon_state').css({'fill': '#666'});
        $('.state .shape').css({'fill': '#ddd'});

        // Colore o estado selecionado
        $('#state_'+estado+' .label_icon_state').css({'fill': '#FFF'});
        $('#state_'+estado+' .shape').css({'fill': '#fd7132'});


        //Verifica se o cadastro de contato do estado existe
        if($('#box_'+estado).length == 0){
            console.log('Não existe');
        }else{
            $('.parca .estado').addClass('some');
            $('.parca .estado').css({'opacity': 0 , 'visibitity':'hidden'});

            $(box_estado).removeClass('some');
            $(box_estado).css({'opacity': 1 , 'visibitity':'visible'});
        }
    });

    $('#map .state').click(function(e){
        e.preventDefault();
    });

    //Change select responsive
    $('#seletory').change(function () {
        $('.parca .estado').css({'opacity': 0 , 'visibitity':'hidden'});
        $('#box_'+$(this).val()).css({'opacity': 1 , 'visibitity':'visible'});
    });
});
})(jQuery);

// Alteração do seletor responsivo
var seletor = document.getElementById('seletory');
if (seletor) {
    seletor.addEventListener('change', function() {
        document.querySelectorAll('.parca .estado').forEach(function(estadoBox) {
            estadoBox.style.opacity = '0';
            estadoBox.style.visibility = 'hidden';
        });
        var selectedBox = document.getElementById('box_' + this.value);
        if (selectedBox) {
            selectedBox.style.opacity = '1';
            selectedBox.style.visibility = 'visible';
        }
    });
}


//troca de 
function trocasp(){
document.getElementById("titulo_caixa").innerHTML = "São Paulo"
document.getElementById("link1").innerHTML = "<a href='https://www.youtube.com/watch?v=qpFQ0aXEGgU' download id='link1'>LINK2</a>"
document.getElementById("link2").innerHTML = "<a href='https://www.youtube.com/watch?v=qpFQ0aXEGgU' download id='link1'>LINK1</a>"
document.getElementById("link3").innerHTML = "<a href='https://www.youtube.com/watch?v=qpFQ0aXEGgU' download id='link1'>LINK3</a>"

}
function trocarj(){
    document.getElementById("titulo_caixa").innerHTML = "Rio de Janeiro"

    document.getElementById("link1").innerHTML = "<a href='https://www.youtube.com/watch?v=qpFQ0aXEGgU' download id='link1'>LINKRJ</a>"
    document.getElementById("link2").innerHTML = "<a href='https://www.youtube.com/watch?v=qpFQ0aXEGgU' download id='link1'></a>"
    document.getElementById("link3").innerHTML = "<a href='https://www.youtube.com/watch?v=qpFQ0aXEGgU' download id='link1'></a>"

    }