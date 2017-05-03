'use strict';

// $(document).ready(function(){

	var repj1=0;
	var repj2=0;
	var scorejoueur = 0;

	/*********** MODE ORDI *************/

	function chifoumiordi(reponse){

		resetcssordi();

		var scoreordi = 0;
		var reponseordi = Math.floor(Math.random()*4+1);

		switch(reponse){

			case "pierre":
			reponse = 1;
			$("#pierre").css('border','5px solid red');
			break;

			case "feuille":
			reponse = 2;
			$("#feuille").css('border','5px solid red');
			break;

			case "ciseaux":
			reponse = 3;
			$("#ciseaux").css('border','5px solid red');
			break;

			case "puits":
			reponse = 4;
			$("#puits").css('border','5px solid red');
			break;

			default:
			alert("<p>Entrée Incorrecte. Réessayez !</p>");
			break;
		}

		switch(reponseordi){

			case 1:
			$("#pierreordi").css('border','5px solid blue');
			break;

			case 2:
			$("#feuilleordi").css('border','5px solid blue');
			break;

			case 3:
			$("#ciseauxordi").css('border','5px solid blue');
			break;

			case 4:
			$("#puitsordi").css('border','5px solid blue');
			break;

			default:
			break;
		}

		if(reponseordi == reponse)
		{
			$("#resultat").html("Egalité !");
		}

		else if (
			(reponseordi == 4 && reponse == 1) ||
			(reponseordi == 4 && reponse == 3) ||
			(reponseordi == 3 && reponse == 2) ||
			(reponseordi == 2 && reponse == 4) ||
			(reponseordi == 2 && reponse == 1) ||
			(reponseordi == 1 && reponse == 3)
		)
		{
			scoreordi ++;
			$("#scoreordi").html(parseInt($("#scoreordi").html())+1);
			$("#resultat").html("Tu as perdu !");
		}
		else
		{
			scorejoueur ++;
			$("#scoreuser").html(parseInt($("#scoreuser").html())+1);
			$("#resultat").html("Tu as gagné !");
		}
		setTimeout(function(){resetcssordi()},2000);
	}

	/*********** MODE 2 JOUEURS *************/

	function chifoumideuxjoueurs(reponse, reponsejoueur2){

		if(reponse == 0){resetcssj2();}
		if(reponsejoueur2 == 0){resetcssj1();}

		var scorejoueur2 = 0;

		switch(reponse){

			case "pierre":
			repj1 = 1;
			$("#pierre").css('border','5px solid red');
			break;

			case "feuille":
			repj1 = 2;
			$("#feuille").css('border','5px solid red');
			break;

			case "ciseaux":
			repj1 = 3;
			$("#ciseaux").css('border','5px solid red');
			break;

			case "puits":
			repj1 = 4;
			$("#puits").css('border','5px solid red');
			break;

			default:
			break;
		}

		switch(reponsejoueur2){

			case "pierre":
			repj2 = 1;
			$("#pierrejoueur2").css('border','5px solid blue');
			break;

			case "feuille":
			repj2 = 2;
			$("#feuillejoueur2").css('border','5px solid blue');
			break;

			case "ciseaux":
			repj2 = 3;
			$("#ciseauxjoueur2").css('border','5px solid blue');
			break;

			case "puits":
			repj2 = 4;
			$("#puitsjoueur2").css('border','5px solid blue');
			break;

			default:
			break;
		}

		if(repj1 >= 1 && repj1 <= 4 && repj2 >= 1 && repj2 <= 4){

			if(repj1 == repj2)
			{
				$("#resultat").html("Egalité !");
			}

			else if (
				(repj2 == 4 && repj1 == 1) ||
				(repj2 == 4 && repj1 == 3) ||
				(repj2 == 3 && repj1 == 2) ||
				(repj2 == 2 && repj1 == 4) ||
				(repj2 == 2 && repj1 == 1) ||
				(repj2 == 1 && repj1 == 3)
			)
			{
				scorejoueur2 ++;
				$("#scorejoueur2").html(parseInt($("#scorejoueur2").html())+1);
				$("#resultat").html("Joueur 2 gagne !");
			}
			else
			{
				scorejoueur ++;
				$("#scoreuser").html(parseInt($("#scoreuser").html())+1);
				$("#resultat").html("Joueur 1 gagne !");
			}
			repj1 = 0;
			repj2 = 0;
			setTimeout(function(){resetcssj1()},2000);
			setTimeout(function(){resetcssj2()},2000);
		}
	}

	function resetcssordi(){
		$("#pierre").css('border','0');
		$("#feuille").css('border','0');
		$("#ciseaux").css('border','0');
		$("#puits").css('border','0');
		$("#pierreordi").css('border','0');
		$("#feuilleordi").css('border','0');
		$("#ciseauxordi").css('border','0');
		$("#puitsordi").css('border','0');
	}

	function resetcssj1(){
		$("#pierre").css('border','0');
		$("#feuille").css('border','0');
		$("#ciseaux").css('border','0');
		$("#puits").css('border','0');
	}

	function resetcssj2(){
		$("#pierrejoueur2").css('border','0');
		$("#feuillejoueur2").css('border','0');
		$("#ciseauxjoueur2").css('border','0');
		$("#puitsjoueur2").css('border','0');
	}

// });
