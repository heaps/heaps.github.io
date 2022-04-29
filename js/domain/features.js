
(function(){

// --- features are defined in the domain js file --

function buildFeatures(features){
    // return empty string if no features
    if (features.length<1) return '';

    // build the features content
    var html   = '';
    html += '<hr class="featurette-divider">';        
    
    // add featurettes
    features.forEach(function(item,i){
        (Math.abs(i % 2) === 1) ? order = {one:'order-md-1',two:'order-md-2'} : order = {one:'',two:''};       
        html += '<div class="row featurette">';
        html += '  <div class="col-md-7 ' + order.two + '">';
        html += '    <h2 class="featurette-heading">';
        html += item.title;
        html += '    </h2>';
        html += '    <p class="lead">';
        html += item.description;        
        html += '    </p>';        
        html += '  </div>';
        html += '  <div class="col-md-5 ' + order.one + '">';
        html += '    <img class="featurette-image img-fluid mx-auto" src="' + item.image + '" alt="description">';
        html += '  </div>';
        html += '</div>';
        html += '<hr class="featurette-divider">';        
    });
    return html;
}
var html = buildFeatures(features);
document.getElementById('domainFeatures').innerHTML = html;    


  
})();


