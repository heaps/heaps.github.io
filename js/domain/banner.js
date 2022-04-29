
(function(){

function buildBanner(banner){

	// Code below sets a background image and a color layer behind text
	// --------------------------------------------------------------------------------------------------------------
    // <div class="jumbotron" style="background-image: url('images/bokeh_03.jpg'); background-size: cover;">
    //   <div class="container" style="background-color:rgba(0,0,0,0.5);padding: 20px;">
	// --------------------------------------------------------------------------------------------------------------

    var html = '';
    html += '<div class="jumbotron" >';
    html += '  <div class="container">';
    html += '    <h1 class="display-3">' + banner.title + '</h1>';
    html += '    <p>' + banner.description + '</p>';

    // if link is provided, code block adds video link or simple link
    if (banner.linkIsVideo){
        html += '    <p><a data-fancybox class="btn btn-primary btn-lg" href="' + banner.link + '" role="button">Learn more &raquo;</a></p>';                
    }
    else if (banner.link){
        html += '    <p><a class="btn btn-primary btn-lg" href="' + banner.link + '" role="button">Learn more &raquo;</a></p>';                
    }

    html += '  </div>';
    html += '</div>';
    return html;    
}
var html = buildBanner(banner);
document.getElementById('banner').innerHTML = html;    
 
})();


