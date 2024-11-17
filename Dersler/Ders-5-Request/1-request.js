document.getElementById('veri').addEventListener('click',function(){
    const xhr=new XMLHttpRequest();

    console.log(xhr);
    xhr.onreadystatechange = function(){
        console.log(xhr.readyState);
    };
    
    xhr.open('GET', text.text, true);
    xhr.send();
}); 

