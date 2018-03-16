var ans=prompt("Are you sure you want to do that ?","");// loome muutuja ans ja seome tulemuse prompt(), ehk mida kijtuatakse prompt dialoogi // prompt() meetod käsitleb kahtkomaga eraldatud parameetrit: küsimust kasutajale ja vastust.

if(ans){
	alert("You said: "+ ans);// vastuse korral lisab muutuja ans vastuse alert boxi.
	}
	else{
		alert("You refused to answer"); //Juhul kui vastaja keeldub vastamast ja ans=0.
		}