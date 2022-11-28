function showVal()
{
    sel = document.querySelector('#crop_name');
    var per;
    if (sel.value == 'roses') {
        per = '21-40';
    }
    else if(sel.value == 'apples'){
        per = '21-60';
    }
    else if(sel.value == 'wheat'){
        per = '';
    }
    else if(sel.value == 'rice'){
        per = '';
    }
    else if(sel.value == 'tomato'){
        per = '70-80';
    }
    op = 'For ' + sel.value + ' the moisture level required is : '+ per + ' %';
    document.querySelector('#selopt').textContent = op;
}