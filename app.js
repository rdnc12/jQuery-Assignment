// Make the project great again with jQuery ..
//alert('deneme12');

// `Delete` buttons should remove the topics (`li` elements). 
$(document).on('click', '.delete', function () {
    event.preventDefault();
    var noSound = new Audio("sound/no.mp3");
    noSound.play();

    $(this).fadeOut(500, function () {
        $(this).closest('li').remove()
    });
});


// `Add` button should add a topic (an `li` element inside 2 `span` elements).

$('button').on('click', function (e) {
    e.preventDefault();
    var newValue = $('#addListItem').val();

    if (newValue !== '') {
        var addSound = new Audio("sound/adds.mp3");
        addSound.play();

        $('button').css('background-color', '#9361bf');
        $('ul').append("<li><span class='name'>"
            + newValue
            + "</span><span class='delete'>delete</span>");
        $('#addListItem').val('');
    }
    else {
        $('button').css('background-color', 'red');
    }

});



// There is a `checkbox` under the topics. It should hide all topics when checked, 
//unhide when unchecked. (hide all `ul` elements)

$('#hide').click(function () {
    $('ul').toggle(this.unchecked);
});

//There is search field above. It should filter the topics (filter `li` elements).
// It should be case-insensitive.

$('#search-topics input').keyup(function () {
    var searchText = $(this).val();

    $('ul > li').each(function () {
        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.indexOf(searchText) !== -1;
        $(this).toggle(showCurrentLi);
    });
})
