/**
 * Created by taekwon on 2017-04-27.
 */

$(document).ready(function () {

    console.log(selectedMarker);

    $('#myBasket_div').css('display','none');

    $('#myBasket-button').on('click', function () {
        console.log('장바구니 나와라 뿅');
        console.log(selectedMarker);
        $('#myBasket_div').css('display','block');
        $(this).attr('basketFlag', true);
    });

    $('#myBasket-exit-div').on('click', function(){
        $('#myBasket_div').css('display','none');
        $("#makeMyMapBtn").attr("style", "display: none");
        $('#myBasket-button').attr('basketFlag', false);
        $('#myBasket-content-div').html("지금 아무것도 없어요!");
        selectedMarker=[];
    });

});