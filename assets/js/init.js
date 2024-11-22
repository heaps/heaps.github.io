// ----------------------------------------------------
//                LOAD LIBRARIES START
// ----------------------------------------------------


var styles = [
  'https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap',  
  'assets/vendor/font-awesome/css/all.min.css',
  'assets/vendor/bootstrap-icons/bootstrap-icons.css',
  'assets/vendor/tiny-slider/tiny-slider.css',
  'assets/vendor/glightbox/css/glightbox.css',
  'assets/css/style.css'
];

var scripts = [
  'assets/gdc/header-footer.js',
  'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
  'assets/vendor/tiny-slider/tiny-slider.js',
  'assets/vendor/glightbox/js/glightbox.js',
  'assets/vendor/purecounterjs/dist/purecounter_vanilla.js',
  'assets/js/functions.js'
];

var metas = [
    {name:'viewport', content:'width=device-width, initial-scale=1, shrink-to-fit=no'},
    {name:'author', content:'geospatial.mit.edu'},
    {name:'description', content:'MIT GDC - Goespatial Data Center'}
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


function loadScript(url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadMegaTags() {
    // add encoding first
    let meta = document.createElement("meta");
    // meta.charset = "utf-8";
    meta.setAttribute("charset", "utf-8");
    document.head.appendChild(meta);   
    

    // add the rest of the meta tags
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


async function runner(){
  // load meta tags
  loadMegaTags();

  // load styles async
  var promises = [];
  for (var i=0; i<styles.length; i++) {
    promises.push(loadStyle(styles[i]));
  }
  await Promise.all(promises);

  // load sync scripts
  for (var i=0; i<scripts.length; i++) {
    await loadScript(scripts[i]);
  }

  // // load async scripts
  // promises = [];
  // for (var i=0; i<scripts.length; i++) {
  //  promises.push(loadScript(scripts[i]));
  // }
  // await Promise.all(promises);
  console.log('Pong!');
}
console.log('Ping!');

runner().then(() => {
  document.documentElement.style.display = 'block'; 
  console.log('Ping Pong!')
});

// ----------------------------------------------------
//                LOAD LIBRARIES END
// ----------------------------------------------------


