let user = document.getElementById("email");
    	let flag = 1;
    	function validateform(){
    	if(user.value == ""){
    	document.getElementById("error").innerHTML = "valid email required!";
        user.style.border = "1px solid tomato";
        user.style.color = "tomato";
        user.style.backgroundColor = "rgb(246, 218, 213)";
    	flag = 0; }
    	else{
    	document.getElementById("error").innerHTML = "";
		document.getElementById("display-block").style.display = "block";
		document.getElementById("display-none").style.display = "none";
    	flag = 0; 
	}
    	if(flag){
    	return true;
    	}else{
    	return false; }
    	return false; }

		function mainmenu(){
			document.getElementById("display-block").style.display = "none";
		    document.getElementById("display-none").style.display = "flex";
			user.style.border = "1px solid grey";
			user.value = "";
			flag = 1;
		}



