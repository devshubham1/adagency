$(function(){$("#ratingForm").on("submit",function(a){a.preventDefault();var t=$(this).serialize();$.ajax({type:"POST",dataType:"json",url:"action.php",data:t,success:function(a){1==a.success&&($("#ratingForm")[0].reset(),window.location.reload())}})});var a=$(".star-rating .fa"),t=function(){return a.each(function(){return parseInt(a.siblings("input.rating-value").val())>=parseInt($(this).data("rating"))?$(this).removeClass("fa-star-o").addClass("fa-star"):$(this).removeClass("fa-star").addClass("fa-star-o")})};a.on("click",function(){return a.siblings("input.rating-value").val($(this).data("rating")),t()}),t()});