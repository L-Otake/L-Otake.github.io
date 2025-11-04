// function(){}


document.getElementById('U').addEventListener('click', function() {  
    this.classList.toggle('U_clicked'); 
	this.classList.toggle('Uc');
	this.classList.toggle('Uc_clicked'); 
	var hide=document.getElementById('T')
	
	hide.classList.toggle('Us')
	
	setTimeout(function() {
		hide.classList.toggle('Th')
	}, 1500);
		
}); 
document.getElementById('T').addEventListener('click', function() {  
    this.classList.toggle('T_clicked'); 
	this.classList.toggle('Tc');
	this.classList.toggle('Tc_clicked');
	 
	 var hide=document.getElementById('U');
	 hide.classList.toggle('Ts');
	 
	 var windowss=document.getElementById('U_T');
	 windowss.style.background='hotpink';
	 windowss.style.height='100vh';
	 windowss.style.width='100vw';
	 windowss.style.border='0'
/* 	 var choose=false;
	 if (choose==true) {
	 	
	 	choose= !choose;
	 } else{
	 	windowss.classList.toggle('Tmmm');
	 	choose= !choose;
	 } */
	 
}); 




// document.addEventListener('DOMContentLoaded', function() {  
//     var buttonA = document.getElementById('buttonA');  
//     var buttonB = document.getElementById('buttonB');  
//     var contentDiv = document.getElementById('contentDiv');  
  
//     buttonA.addEventListener('click', function() {  
//         contentDiv.textContent = '1';  
//     });  
  
//     buttonB.addEventListener('click', function() {  
//         contentDiv.textContent = '2';  
//     });  
// });