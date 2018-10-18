var myImages =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlqvmkMotb6pazK3sw7gWlJLt5DMcVJfT4QJac0ABuMRzGvqLDQ", 
"http://images.all-free-download.com/images/graphicthumb/pigeon_birds_macro_215473.jpg",
"http://www.photographyblogger.net/wp-content/uploads/2010/08/birds2.jpg", 
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7GKzTqVecdu66rDf6SVuGU0CblA2_8w1iz9tfcZDWbfvSt70hg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Hio_u-c7H99BsyrsiL0RQ6s2mlVOaA1_usp3T33oGCJqlcVM4A"];


var captionImages =["Bird Image 1","Bird Image 2","Bird Image 3","Bird Image 4","Bird Image 5"];


 var index=0; 

 function updateImage(){
 document.getElementById("show").src = myImages[index];
 document.getElementById("show").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
 
} 
function autoSlide(){
if (document.getElementById("auto1").checked)
 next(); 
}


setInterval(autoSlide,2000); // Next





var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


