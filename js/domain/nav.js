
(function(){


function navigation(){
    var html = '';
    html += '<nav class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">';
    html += '  <div class="container">';    
    html += '     <a class="navbar-brand" href="index.html">MIT GDC</a>';
    html += '     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">';
    html += '       <span class="navbar-toggler-icon"></span>';
    html += '     </button>';
    html += '     <div class="collapse navbar-collapse" id="navbarCollapse">';
    html += '       <ul class="navbar-nav">';
    html +=  gdc.navigation_links;
    html += '       </ul>';
    html += '     </div>';
    html += '  </div>';    
    html += '</nav>';
    return html;
}
var html = navigation();
document.getElementById('domainNav').innerHTML = html;    

  
})();


