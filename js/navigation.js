$(document).ready(function () {
    $('.sidebar-nav li').click(function (e) {
        /*remove class active de tous les liens*/
       $('.sidebar-nav li').removeClass('active');
        /*ajouter classe active sur le lien en question*/
        var lien = e;
        $(lien.currentTarget).addClass('active');
    });
    $('.link-nav a').click(function(e){
/*highlight good tab in central panel when we click on link in left menu*/
        var parent=e.currentTarget.parentElement.id;
        var target = parent.replace('nav-',''); /*target = export ou import*/
        console.log(target);
        $('#page-content-wrapper ul li').removeClass('active');
         $('#list-tabs > li').removeClass('active');
        $('#tab-' + target).addClass('active');
        /*Affichage du bon panel*/
        $('.tab-content > *').removeClass('active').removeClass('in');
        $('#'+target).addClass('active').addClass('in');
        });
});
