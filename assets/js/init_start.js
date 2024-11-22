// ----------------------------------------------------
//                START - LOAD LIBRARIES
// ----------------------------------------------------

var metas = [
  {name:'viewport', content:'width=device-width, initial-scale=1, shrink-to-fit=no'},
  {name:'author', content:'geospatial.mit.edu'},
  {name:'description', content:'MIT GDC - Goespatial Data Center'}
];

var styles = [
  'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap',  
  'assets/vendor/font-awesome/css/all.min.css',
  'assets/vendor/bootstrap-icons/bootstrap-icons.css',
  'assets/vendor/tiny-slider/tiny-slider.css',
  'assets/vendor/glightbox-new/css/glightbox.css',
  'assets/css/style.css'
];

var loadStyle = function(url){
        return new Promise(function (resolve, reject) {
        var style = document.createElement('link');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.href = url;
        if (url == 'assets/css/style.css') style.id = "style-switch";
        style.onload = resolve;
        style.onerror = reject;
        document.head.appendChild(style);
    });
};

function loadMegaTags() {
    // encoding first
    let meta = document.createElement("meta");
    // meta.charset = "utf-8";
    meta.setAttribute("charset", "utf-8");
    document.head.appendChild(meta);   
    

    // the rest of the meta tags
    metas.forEach((meta) => {
        var tag = document.createElement('meta');
        tag.name = meta.name;
        tag.content = meta.content;
        document.head.appendChild(tag);
    });
}

// load icon 
var s4  = document.createElement('link');
s4.rel  = 'icon';
s4.href = 'assets/images/favicon.ico';
document.head.appendChild(s4);  


async function runnerStart(){
  // load meta tags
  loadMegaTags();

  // load styles async
  var promises = [];
  for (var i=0; i<styles.length; i++) {
    promises.push(loadStyle(styles[i]));
  }
  await Promise.all(promises);
  console.log('START - Pong!');
}
console.log('START - Ping!');

runnerStart().then(() => {
  console.log('START - Ping Pong!')
});
