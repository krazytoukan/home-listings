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
    console.log(addressVal + bathroomsVal + bedroomsVal)
})