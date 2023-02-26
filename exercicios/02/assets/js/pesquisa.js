$('#pesquisa').keyup(function (e) {
    var termo = $('#pesquisa').val().toUpperCase();
    $('#lista li').each(function () {
        if ($(this).html().toUpperCase().indexOf(termo) === -1) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
});