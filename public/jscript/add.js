$(function(){
    $('header button').on('click',function(){
        console.log("dafds");
    })
    $('header').on('submit',function(){
        console.log("已触犯");
        let data=$('header input').val();
        if(data!=''){
            let item={item:data};
            $.ajax({
                url:'/todo',
                type:'post',
                data:item,
                success:function(){

                }
            });
        }
    });
});