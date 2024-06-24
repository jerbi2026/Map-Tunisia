

var ville_to_load;
var back = document.getElementsByClassName("header")[0];

$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        back.style.backgroundImage="url("+ville_to_load.back2+")";
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        back.style.backgroundImage="url("+ville_to_load.back1+")";
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 



function load_ville(){
  
   
    
    var bodyDiv = document.body;



    
    let nom=document.getElementById("nom");
    let description=document.getElementById("description");
    let titre=document.getElementById("titre");
    let description2=document.getElementById("description2");
    let photo1=document.getElementById("photo1");
    let photo1_title=document.getElementById("photo1_title");
    let photo1_subtitle=document.getElementById("photo1_subtitle");
    let photo1_description=document.getElementById("photo1_description");
    let photo2=document.getElementById("photo2");
    let photo2_title=document.getElementById("photo2_title");
    let photo2_subtitle=document.getElementById("photo2_subtitle");
    let photo2_description=document.getElementById("photo2_description");
    let photo3=document.getElementById("photo3");
    let photo3_title=document.getElementById("photo3_title");
    let photo3_subtitle=document.getElementById("photo3_subtitle");
    let photo3_description=document.getElementById("photo3_description");
    let video_src=document.getElementById("video_src");
    let map_title=document.getElementById("map_title");
    let map_src=document.getElementById("map_src");
    var objetEnJSON = localStorage.getItem("ville");
    
    ville_to_load = JSON.parse(objetEnJSON);
    if(ville_to_load.back1!=null){
        if (bodyDiv.classList.contains('light-theme')) {
            back.style.backgroundImage="url("+ville_to_load.back2+")";
            
        } else if (bodyDiv.classList.contains('dark-theme')) {
            back.style.backgroundImage="url("+ville_to_load.back1+")";
           
        } else {
            console.log("Aucune classe n'est active");
        }
        
    }
    document.title=ville_to_load.nom;
    nom.textContent=ville_to_load.nom;
    description.textContent=ville_to_load.description;
    titre.textContent=ville_to_load.titre;
    description2.textContent=ville_to_load.description2;
    photo1.src=ville_to_load.photo1;
    photo1_title.textContent=ville_to_load.photo1_title;
    photo1_subtitle.textContent=ville_to_load.photo1_subtitle;
    
    photo1_description.innerText=ville_to_load.photo1_description;
    photo2.src=ville_to_load.photo2;
    photo2_title.textContent=ville_to_load.photo2_title;
    photo2_subtitle.textContent=ville_to_load.photo2_subtitle;
    photo2_description.textContent=ville_to_load.photo2_description;
    photo3.src=ville_to_load.photo3;
    photo3_title.textContent=ville_to_load.photo3_title;
    photo3_subtitle.textContent=ville_to_load.photo3_subtitle;
    photo3_description.textContent=ville_to_load.photo3_description;
    video_src.src=ville_to_load.lien_youtube;
    map_title.textContent=ville_to_load.map_title;
    map_src.src=ville_to_load.map_src;
   
 



}

window.onload=function(){
    load_ville();

}