var recaptchaVerifier  = new firebase.auth.RecaptchaVerifier('captha',{
	size : 'invisible'
});

recaptchaVerifier.render().then(function(widgetId){
	console.log(widgetId);
});



$('#frm-phone').submit((e)=>{
	e.preventDefault();

	let proceso = $(this).data('proceso');

	switch(proceso){
		case	1 	:
			enviarSMS();
			break;
		case 	2	:
			verificarCodigo();
			break;
	}
});


enviarSMS = function(){

	let phone = $('#phone').intlTelInput('getNumber'); //+51


	firebase.auth().signInWithPhoneNumber(phone,recaptchaVerifier).then((confirmationResult)=>{
		console.log(confirmationResult);


		

	})

}