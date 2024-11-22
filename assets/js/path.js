// resolve path for local and server development
var path = document.currentScript.getAttribute('src');
 console.log('path 00:',path);
if (path.includes('../assets/js')){
  var index = path.indexOf('assets/js');
  path = path.substring(0,index);
  console.log('path 01:',path);
}
else{
  path = '';
}	
console.log('path 02:',path);	
