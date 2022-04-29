(function(){

function buildFooter(){
    var html = '';
    html += '<!-- FOOTER -->';
    html += '<footer>';
    html += '<br>';    
    html += '<div class="container">';
    // html += '   <p class="float-right"><a href="#">Back to top</a></p>';
    // html += '   <p>&copy; 2017 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>';
    html += '	<p class="text-muted"> &copy; 2017 Abel Sanchez & John R. Williams</p>';
    html += '</div>';    
    html += '</footer>';
    return html;
}
var html = buildFooter();
document.getElementById('domainFooter').innerHTML = html;

})();