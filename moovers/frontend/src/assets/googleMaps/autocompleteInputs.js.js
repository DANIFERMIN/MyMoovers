
function autocompleteInputs(){
  const originInput = document.getElementById("origin-input");
  const destinationInput = document.getElementById("destination-input");
  const originAutocomplete = new google.maps.places.Autocomplete(originInput);
  
  // Specify just the place data fields that you need.
  originAutocomplete.setFields(["place_id"]);
  
  const destinationAutocomplete = new google.maps.places.Autocomplete(
    destinationInput)
}

export default autocompleteInputs
