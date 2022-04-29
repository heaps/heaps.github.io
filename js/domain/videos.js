
(function(){

// --- videos are defined in the domain js file --

function buildVideos(videos){
    // return empty string if no features
    if (videos.length<1) return '';

    // build the video content
    var html   = '';

    
    // add featurettes
    videos.forEach(function(item){
        html += '<div class="pb-3">';
        html += '  <div class="card">';
        html += '    <h4 class="card-header">' + item.title + '</h4>';
        html += '    <div class="card-body">';
        if (item.subtitle) html += '<h4 class="card-title">' + item.subtitle + '</h4>';
        if (item.description) html += '<p class="card-text">' + item.description + '</p>';
        html += '      <div class="embed-responsive embed-responsive-16by9">';
        html += '        <iframe class="embed-responsive-item" src="' + item.url + '" allowfullscreen></iframe>';
        html += '      </div>';
        html += '    </div>';
        html += '  </div>';
        html += '</div>';        
    });
    return html;
}
var html = buildVideos(videos);
document.getElementById('domainVideos').innerHTML = html;    


  
})();


