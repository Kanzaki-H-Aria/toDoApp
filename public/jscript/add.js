$(function(){
    $('header').on('submit',function(){
        let data=$('header input').val();
        if(data!=''){
            let item={item:data};
            $.ajax({
                async:false,
                url:'/todo',
                type:'post',
                data:item,
                success:function(data){
                    location.reload();
                }
            });
        }
    });
    $('.remove').on('click',function(){
        let item=$.trim($(this).parent().parent().text());
        $.ajax({
            url:`/todo/${item}`,
            type:'delete',
            data:item,
            success:function(data){
                location.reload();
            }
        });
    })
});