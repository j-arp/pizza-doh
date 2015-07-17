$(document).ready(function(){

$('input').blur(function(){
	$('#calculate').trigger('click');
})

$('select').change(function(){
  $('select').material_select();
	if($('#flour-needed').text() !== ""){
		$('#calculate').trigger('click');
  }

})

$('#show-starter').click(function(){
	$(this).fadeOut('slow')
	$('#starter-controls').removeClass('hide')
	$('#starter-flour').val("100")
	$('#starter-water').val("150")
  $('#calculate').trigger('click');
  $('select').material_select();
  
})

$('.reset-button').click(function(){
	$('#result-container').addClass('hide');
	$(this).addClass('hide');
	$("#calculate").fadeIn();
	$('#starter-controls').addClass('hide')
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

    console.log("calculate with ", ratio)
    //console.log(ratio)

    water = ((ratio.per * cd.quantity) * ratio.percent / 100) - cd.starter_water
    flour = (ratio.per * cd.quantity) - cd.starter_flour
    console.log( flour * ratio.percent / 100 )

    console.log( 'For a ' + cd.type  + ' pizza, use (' + flour +' flour and ' + water + ') ' + ratio.percent + ' ratio')
    //console.log(flour + ' flour and ' + water + 'water')


    $('#flour-needed').text( flour )
    $('#water-needed').text( water )

    $('#result-container').removeClass('hide');
  	$(this).addClass('hide');
  	$(".reset-button").removeClass('hide');
  })




/*
json data to power calculations 
*/

doh = {thin:
  {
     percent: 65,
     per: 125
  },

  nyc:
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


