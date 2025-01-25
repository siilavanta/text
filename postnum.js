

var RootPath = './author';
var MonkPath = RootPath + '/monk';
var ManPath = RootPath + '/man';
var author = window.localStorage.getItem('author');

 const postnum = (linkSrc, txt)=>{
    var script = document.createElement('script');
  
        if(txt === 'monk'){
            script.src = `${MonkPath}/${linkSrc}.js`
            script.setAttribute('type', "text/javascript")
            document.head.appendChild(script)
        }else if(txt === 'man'){
            script.src = `${ManPath}/${linkSrc}.js`
            script.setAttribute('type', "text/javascript")
            document.head.appendChild(script)
        }
 }

 const setSrcipt = (link, link2)=>{
     for(var i = 0; i < link.length; i++){ 
         postnum(link[i][0], 'monk') 
         
     }
     for(var h = 0; h < link2.length; h++){
        postnum(link2[h][0], 'man') 
     }
     //console.log(link2)
 }
 //setSrcipt(MonkAuthor, ManAuthor); 




