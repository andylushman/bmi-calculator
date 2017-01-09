$(document).ready(function(){


	var $root = $('.content');

	var Overlays = {
		$normal : $('.normal-weight-outline'),
		$over : $('.over-weight-outline'),
		$obeseOne : $('.obesity-class-1-outline'),
		$obeseTwo : $('.obesity-class-2-outline'),
		$obeseThree : $('.obesity-class-3-outline')
	};

	function handleCalculateBmi (evt) {
		evt.preventDefault();

		// cache variables and values
		var $h = $("#height");
		var $w = $("#weight");
		var h = $h.val();
		var w = $w.val();

		resetOverlays();

		// Check the form fields before doing anything
		if (!h){

			alert("You must have a height!");
			return; // prevent function from continuing to execute if the field is empty

		} else if (!w) {

			alert("You must have a weight");
			return;
		}


		var bmi = w/Math.pow(h, 2);

		return revealBmi(bmi);
	}

	function revealBmi(bmi) {

		if (bmi < 18.5) {
			alert('PUT SOME MEAT ON THOSE BONES!!!  YOU\'RE SO SKINNY!!!')
		}

		if (bmi >= 18.5 && bmi < 25) {

			Overlays.$normal.removeClass('hidden');
			return;
		}

		if (bmi >= 25 && bmi < 30) {

			Overlays.$over.removeClass('hidden');
			return;
		}

		if (bmi >= 30 && bmi < 35) {

			Overlays.$obeseOne.removeClass('hidden');
			return;
		};

		if (bmi >= 35 && bmi <= 40) {

			Overlays.$obeseTwo.removeClass('hidden');
			return;
		};

		if (bmi >= 40 && bmi <= 45) {

			Overlays.$obeseThree.removeClass('hidden');
			return;
		};

		if (bmi > 45) {
			alert('... I don\'t even believe you...');
		}

	}

	function resetOverlays(){

		for (var key in Overlays){

			Overlays[key].addClass('hidden');
		}
	}

	$root.on(
		'submit',
		'.calculator-form',
		handleCalculateBmi
	);


});
