
(function(){

// --- carousel slides are defined in the domain js file --

function buildCarousel(slides){
    // return empty string if no slides
    if (slides.length<1) return '';

    // build the carousel content
    var html = '';
    html += '<div id="myCarousel" class="carousel slide" data-ride="carousel">';
    html += indicators(slides);
    html += items(slides); 
    html += arrows();   
    html += '</div>    ';
    return html;    
}
var html = buildCarousel(slides);
document.getElementById('domainCarousel').innerHTML = html;    


function indicators(slides){
    var active = '';
    var html   = '';

    // open carousel indicators
    html += '  <ol class="carousel-indicators">';

    // add indicators
    slides.forEach(function(item,i){
        item.active ? active = 'class="active"' : active = '';
        html += '    <li data-target="#myCarousel" data-slide-to="' + i + '" ' + active + '></li>';
    });

    // close carousel indicators
    html += '  </ol>';
    return html;
}

function items(slides){
    var active = '';
    var html   = '';

    // open carousel items
    html += '  <div class="carousel-inner">';    

    // add items
    slides.forEach(function(item){
        item.active ? active = ' active' : active = '';
        html += '<div class="carousel-item' + active + '" style="background-image: url(\'' + item.image + '\')">';

        html += '   <div class="carousel-caption d-md-block" style="top: 50%;transform: translateY(-50%);bottom: initial;-webkit-transform-style: preserve-3d;-moz-transform-style: preserve-3d;transform-style: preserve-3d;">';

        html += '       <div class="gdcTopic" style="background-color:rgba(0, 0, 0, 0.75); padding: 50px 50px 50px 50px;">';            
        html += '           <h1>' + item.title + '</h1>';
        html += '           <p>' + item.description + '</p>';            
        html += '       </div>';            
        html += '       <div id="carouselButtons"></div>';
        html += '   </div>';
        html += '</div>';
    });

    // close carousel items
    html += '  </div>';    
    return html;
}

function arrows(){
    var html = '';
    html += '  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">';
    html += '    <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
    html += '    <span class="sr-only">Previous</span>';
    html += '  </a>';
    html += '  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">';
    html += '    <span class="carousel-control-next-icon" aria-hidden="true"></span>';
    html += '    <span class="sr-only">Next</span>';
    html += '  </a>'; 
    return html;    
}

  
})();


