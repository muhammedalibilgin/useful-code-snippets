//select a tag
$( ".product-wrapper" ).hover(
    function() {
        //first function on hover
        console.log(this);
        $( this).find(".add-to-wishlist").css("display","block")
    },
    function() {
         //second function out hover
        $( this).find(".add-to-wishlist").css("display","none")
    }
  );