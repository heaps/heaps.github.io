
(function(){

// --- boxes are defined in the domain js file --

function buildFancyBoxes(boxes){
    // return empty string if no features
    if (boxes.length<1) return '';

    // build the video content
    var html   = '<div class="row">';
    
    // add boxes
    boxes.forEach(function(item,i){

        // content
        html += '  <div class="card">';
        html += '    <a data-fancybox="gallery" href="' + item.url + '">';
        html += '      <div class="video-thumbnail">';
        html += '        <img class="card-img-top" src="' + item.thumbnail + '" alt="poster" >';
        html += '      </div>';
        html += '    </a>';
        html += '    <div class="card-body">';

        if (item.title) html += '<h4 class="card-title">' + item.title + '</h4>';
        if (item.subtitle) html += '<h5 class="card-title text-muted">' + item.subtitle + '</h5>';
        if (item.description) html += '<p class="card-text">' + item.description + '</p>';

        html += '    </div>';
        html += '  </div>';

    });
    html += '</div>';
    return html;
}
var html = buildFancyBoxes(boxes);
document.getElementById('domainFancyBoxes').innerHTML = html;    


  
})();


/*


(function(){

// --- boxes are defined in the domain js file --

function buildFancyBoxes(boxes){
    // return empty string if no features
    if (boxes.length<1) return '';

    // build the video content
    var html   = '<div class="row">';
    
    // add boxes
    boxes.forEach(function(item,i){

        // content
        html += '  <div class="card">';
        html += '  <div class="card-block">';        
        html += '    <h4 class="card-header">' + item.title + '</h4>';
        html += '    <img class="card-img-top" src="images/education_play.jpg" alt="Card image cap">';
        html += '    <div class="card-body">';

        if (item.subtitle) html += '<h4 class="card-title">' + item.subtitle + '</h4>';
        if (item.description) html += '<p class="card-text">' + item.description + '</p>';

        html += '      <a data-fancybox="gallery" href="' + item.url + '">';
        html += '        <img src="' + item.thumbnail + '" class="img-fluid" alt="thumbnail">';
        html += '      </a>';


        html += '    </div>';
        html += '  </div>';
        html += '  </div>';        

    });
    html += '</div>';
    return html;
}
var html = buildFancyBoxes(boxes);
document.getElementById('domainFancyBoxes').innerHTML = html;    


  
})();




*/