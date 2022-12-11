
//PARALLAX

$(window).scroll(function () {
    parallax();
  });
  function parallax() {
    var wScroll = $(window).scrollTop();
  
    $(".parallax").css("background-position", "center " + wScroll * 0.4 + "px");

    $(".parallax_2").css("background-position", "center " + wScroll * 2 + "px");

    $(".parallax-box").css("top", -50 + wScroll * 0.5 + "em");
  }

  // Shoop Hours

  
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
    //PT
    if (th >= 12 && th < 22){

        document.getElementById("output").innerHTML = "Estamos abertos! O horário de hoje é das 12:00H até às 22.00H";
        document.getElementById("output").style.color = "#15EB07";

        
    // Alert the users that the shop is closed
    } else if (th >= 22 && th < 24){

      document.getElementById("output").innerHTML = "Lamentamos estamos encerrados. O horário hoje foi das 12.00H às 22.00H";
      document.getElementById("output").style.color ="#CE3333";
 
    } else {

        document.getElementById("output").innerHTML = "Lamentamos estamos encerrados. O horário de hoje é das 12.00H às 22.00H";
        document.getElementById("output").style.color ="#CE3333";


     }
     

    // Check and alert the users for the shop day off
     if ( td > 1 && td < 3){

        document.getElementById("output").innerHTML = "Lamentamos, estamos encerrados à terça-feira";
        document.getElementById("output").style.color = "#CE3333";
    
    } 

  
     //Check for some time of the year and shows an message to alert the user. Like the Christmas or something else
     //PT
    if (tm == 11 && tda > 3 || tm == 0 & tda < 6){

        document.getElementById("output_2").innerHTML = "Desejamos a todos os nossos clientes um Feliz Natal e um próspero Ano Novo!!";
        document.getElementById("output_2").style.padding ="5px";
        document.getElementById("output_2").style.color = "white";
        document.getElementById("santa_img").style.display = "block";
      
 
      } else {
 
        document.getElementById("output_2").style.display ="none";
        document.getElementById("santa_img").style.display = "none";
        
        
    }

 
         
      //Check the date and alert the user for an exceptional day off
      //PT
      if (tm == 11 && tda ==25){
		
        document.getElementById("output_1").innerHTML ="Estamos Encerrados! ";
        document.getElementById("output").style.display ="none";
        document.getElementById("output_1").style.padding ="5px";
        document.getElementById("output_1").style.color = "#CE3333";
     
    } else {

        document.getElementById("output_1").style.display ="none";

    } 
    
  
}



//Cookies Concent 
function cookies(functions) {
	const container = document.querySelector('.cookies-container');
	const save = document.querySelector('.cookies-save');
	if (!container || !save) return null;
  
	const localPref = JSON.parse(window.localStorage.getItem('cookies-pref'));
	if (localPref) activateFunctions(localPref);
  
	function getFormPref() {
	  return [...document.querySelectorAll('[data-function]')]
		.filter((el) => el.checked)
		.map((el) => el.getAttribute('data-function'));
	}
  
	function activateFunctions(pref) {
	  pref.forEach((f) => functions[f]());
	  container.style.display = 'none';
	  window.localStorage.setItem('cookies-pref', JSON.stringify(pref));
	}
  
	function handleSave() {
	  const pref = getFormPref();
	  activateFunctions(pref);
	}
  
	save.addEventListener('click', handleSave);
  }
  
  function marketing() {
	console.log('Função de marketing');
  }
  
  function analytics() {
	console.log('Função de analytics');
  }
  
  cookies({
	marketing,
	analytics,
  });