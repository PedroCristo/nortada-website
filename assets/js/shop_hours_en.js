 // Shop Hours EN

  
 function checkDate(){

    var dt = new Date();
    var th = dt.getHours();
    var td = dt.getDay();
    var tm = dt.getMonth();
    var tda = dt.getDate();
    var fy = dt.getFullYear();
 


       //Shows the year on the footer

     document.getElementById("output_3").innerHTML = fy ;
    

    // Check the time and alert the users that the shop is open.

     //EN
     if (th >= 12 && th < 22){

      document.getElementById("output_en").innerHTML = "We are open. The schedule today is from 12AM to 10PM";
      document.getElementById("output_en").style.color = "#15EB07";

      
  // Alert the users that the shop is closed
  } else if (th >= 22 && th < 24){

    document.getElementById("output_en").innerHTML = "Sorry, we are closed. The schedule today was from 12AM to 10PM";
    document.getElementById("output_en").style.color ="#CE3333";

  } else {

      document.getElementById("output_en").innerHTML = "Sorry, we are closed. The schedule today is from 12AM to 10PM";
      document.getElementById("output_en").style.color ="#CE3333";


   }
   

  // Check and alert the users for the shop day off
   if ( td > 1 && td < 3){

      document.getElementById("output_en").innerHTML = "We are closed on Tuesdays";
      document.getElementById("output_en").style.color = "#CE3333";
  


  } 
     

  //Check for some time of the year and shows an message to alert the user. Like the CHristmas or something else
     //EN
     if (tm == 11 && tda > 3 || tm == 0 & tda < 6){

      document.getElementById("output_2_en").innerHTML = "Wishing all our customers a Merry Christmas and Happy new Year!!";
      document.getElementById("output_2_en").style.padding ="5px";
      document.getElementById("output_2_en").style.color = "white";
      document.getElementById("santa_img_en").style.display = "block";
    

    } else {

      document.getElementById("output_2").style.display ="none";
      document.getElementById("santa_img_en").style.display = "none";
      
  }


     //Check the date and alert the user for an exceptional day off

    //EN
    if (tm == 11 && tda == 25){
		
      document.getElementById("output_1_en").innerHTML ="We are close!";
      document.getElementById("output_en").style.display ="none";
      document.getElementById("output_1_en").style.marginBottom ="20px";
      document.getElementById("output_1_en").style.color = "#CE3333";
   
  } else {

      document.getElementById("output_1").style.display ="none";
    

  } 
  

}