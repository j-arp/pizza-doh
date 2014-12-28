$(document).ready(function(){


$('input').blur(function(){
	 //console.log('trigger calculate') 
	$('#calculate').trigger('click');
})

$('select').change(function(){
	if($('#flour-needed').text() !== ""){
		//console.log('trigger calculate')
		$('#calculate').trigger('click');
  }
})

$('#show-starter').click(function(){
	$(this).fadeOut('slow')
	$('#starter-controls').fadeIn('slow')
	$('#starter-flour').val("100")
	$('#starter-water').val("150")


    //console.log('trigger calculate')
    $('#calculate').trigger('click');
  
})

$('#reset').click(function(){
	$('#result-container').fadeOut('slow');
	$(this).hide();
	$("#calculate").fadeIn();
	$('#starter-controls').hide()
	$('#show-starter').show()
	$('#flour-needed').text( "" )
  $('#water-needed').text( "" )
  $('#starter-flour').val("0")
  $('#starter-water').val("0")

});

$('#calculate').click(function(){
 
  cd = {
    quantity: $('#quantity').val(),
    type: $('#type').val(),
    starter_flour: $('#starter-flour').val(),
    starter_water: $('#starter-water').val()
  }
  
  ratio = doh[cd.type]

    console.log(cd)
    //console.log(ratio)

  water = ((ratio.per * cd.quantity) * ratio.percent / 100) - cd.starter_water
  flour = (ratio.per * cd.quantity) - cd.starter_flour
  console.log( flour * ratio.percent / 100 )

  console.log( 'For a ' + cd.type  + ' pizza, use (' + flour +' flour and ' + water + ') ' + ratio.percent + ' ratio')
  //console.log(flour + ' flour and ' + water + 'water')


  $('#flour-needed').text( flour )
  $('#water-needed').text( water )

  $('#result-container').fadeIn('slow');
	$(this).hide();
	$("#reset").fadeIn();


})




/*
json data to power calculations 
*/

doh = {thin:
  {
     percent: 65,
     per: 125
  },

  ny:
  {
     percent: 67,
     per: 125
  },

  pan:
  {
     percent: 70,
     per: 125
  }
  }

})


