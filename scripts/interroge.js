var xhr = getXMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
        var data1=eval("("+xhr.responseText+")");
        console.log(data1.length);
        for(var i=0;i<data1.length;i=i+1){
            console.log(data1[i]["date"])
            console.log("coucou")
        }
        }
    }
xhr.open("GET", "lire.php", true);
xhr.send(null);
toto();