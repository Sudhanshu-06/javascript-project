var navstatus=0;

function openNav()
{
    if(!navstatus)
    {
        $('.main-div').css('width', '100%')
        $('li').css('display','block')
        navstatus=1
    }
    else{
        $('.main-div').css('width', '0')
        $('li').css('display','none')
        navstatus=0
    }
}
