var approx_grid_size = 500;//You can give the grid any size you want
var square_dimensions = 32;
//var square_dimensions = prompt("What would you like the grid size to be?");
var total_number_of_squares;
var actual_grid_size;//This will subtract
//any extra space that does not get filled because of the division (replace actual with
//approx if you dont get what im saying)
var square_size;



function create_new_grid()
{
  total_number_of_squares = square_dimensions**2;
  actual_grid_size = approx_grid_size - (approx_grid_size % square_dimensions);
  square_size = Math.floor(approx_grid_size/square_dimensions);
  var grid_elements = $('#grid');
  for(i = 0; i < total_number_of_squares; i++){
    grid_elements.append("<div class='square'></div>");
  }
  $('#grid').css({'width' : actual_grid_size + 'px',
                  'height' : actual_grid_size + 'px'});
  $('.square').css({'width' : square_size + 'px',
                    'height' : square_size + 'px'});
  $('.square').on('mouseenter',function(){
    $(this).css('background-color', '#543D95');
  });
}

$(document).ready(function(){
  create_new_grid();

  $('#change-size').on('click', function() {
    $('#grid').empty();
    square_dimensions = prompt("Please enter the grid size", "32");
    create_new_grid();
  });
});
