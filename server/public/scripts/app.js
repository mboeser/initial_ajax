$(document).ready(function(){

    $('.container').on('click', '.btnPpl', buttonPeople);
    $('.container').append('<div class="btnPpl btn btn-default">SHOW PEOPLE</div>')
    $('.container').on('click', '.deletePerson', deletePerson);
});

function appendDom(data) {

    for(var i = 0; i < data.people.length; i++) {

        $(".container").append("<div class='col-md-4'><div class='person well'></div></div>");
        var $el = $(".container").children().children().last();
        var img = (data.people[i].imageURL).toString();
        $el.append("<div class='thumbnail'><img src="+ img +"></div>");
        $el.append("<div class=''>" + 'Name : ' + data.people[i].name + "</div>");
        $el.append("<div class=''>" + 'Title : ' + data.people[i].position + "</div>");
        $el.append("<div class=''>" + 'Location : ' + data.people[i].location + "</div>");
        $el.append("<div class='btn btn-danger deletePerson'>DELETE</div>")
    };
}

function buttonPeople (){

    $.ajax({
        type : "GET",
        url : "/data",
        success : function(data) {
            appendDom(data);
        }
    });

}

function deletePerson () {
    $(this).parent().parent().remove();
}