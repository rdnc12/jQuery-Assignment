// Make the project great again with jQuery ..
//alert('deneme12');

// Delete li
$(document).on('click','.delete', function () {
    event.preventDefault();
   // $(this).closest('li').hide();
    $(this).closest('li').remove();
    //$('ul li').remove();
    console.log(event);
    
});


// Add li 

$('button').on('click', function (e) {
    e.preventDefault();
    let newValue = $('#addListItem').val();

    let newLi = $('<li></li>').appendTo('ul');
    let newSpan = $("<span class='name'></span>").text(newValue).appendTo(newLi);
    let newSpan2 = $("<span class='delete'></span>").text('delete').appendTo(newLi);
    $('#addListItem').val('');

    // $('ul').append("<li><span class='name'>"
    //     + newValue
    //     + "</span><span class='delete'>delete</span>");
    // $('#addListItem').val('');

});


// hide 

$('#hide').click(function () {
    $('ul').toggle(this.unchecked);
});

//search

$('input[type="text"]').keyup(function () {
    


})
