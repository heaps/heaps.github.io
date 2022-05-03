
(function(){

// --- thumbnails are defined in the domain js file --

function buildAlbum(thumbnails){
    // return empty string if no thumbnails
    if (thumbnails.length<1) return '';

    // build the album content    
    var html   = '';
    html += '  <div class="row">';
    
    // add featurettes
    thumbnails.forEach(function(item){
        html += '<div class="card" style="width:100px">';
        if(item.url) html += '<a href="' + item.url + '">';
        html += '  <img src="' + item.image + '" alt="description">';
        html += '    <p class="card-text"><small>';
        html +=         item.description;
        html += '    </small></p>';
        if(item.url) html += '</a>';        
        html += '</div>';
    });

    html += '  </div>'; 
    return html;
}
var html = buildAlbum(thumbnails);
document.getElementById('domainAlbum').innerHTML = html;    


  
})();


