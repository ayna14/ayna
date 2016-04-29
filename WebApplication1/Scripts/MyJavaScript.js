$("#target").click(function () {
    name = $('#text_input').val();
    count = $('#mylist div').length;
    $('#mylist').append('<div id="' + count + '" class="list-group-item">' + name + '</div>');
    $('#text_input').val("");
});