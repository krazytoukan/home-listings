var $address = $('#address');
var $bathrooms = $('#bathrooms');
var $bedrooms = $('#bedrooms');
var $homes = $('#homes');
var $form = $('form');

$form.on("submit", function(event){
    event.preventDefault();
    var addressVal = $address.val();
    var bathroomsVal = $bathrooms.val();
    var bedroomsVal = $bedrooms.val();
    $homes.append(`<li style="display:none">Address: ${addressVal}  Bedrooms: ${bedroomsVal} Bathrooms: ${bathroomsVal}</li>`)
    $('li').last().fadeIn();
})

//Delegation where if user clicks anywhere in the list it will remove that list item.  This refers to the specific thing clicked on.
$homes.on("click", 'li', function(){
    $(this).fadeOut(function(){
    $(this).remove()})
})