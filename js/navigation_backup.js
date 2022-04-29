(function(){

    var html = '';
    html += '<!-- Navigation -->';
    html += '<nav class="navbar fixed-top navbar-toggleable-md navbar-inverse">';
    html += '    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarExample" aria-controls="navbarExample" aria-expanded="false" aria-label="Toggle navigation">';
    html += '        <span class="navbar-toggler-icon"></span>';
    html += '    </button>';
    html += '    <div class="container">';
    html += '        <a class="navbar-brand" href="#">MIT Geospatial Datacenter</a>';
    html += '        <div class="collapse navbar-collapse" id="navbarExample">';
    html += '            <ul class="navbar-nav ml-auto">';

    html += '                <li class="nav-item active dropdown">';
    html += '                    <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
    html += '                    Domains';
    html += '                    </a>';
    html += '                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">';
    html += '                        <a class="dropdown-item" href="#">Internet of Things (IOT)</a>';
    html += '                        <a class="dropdown-item" href="#">Cybersecurity</a>';    
    html += '                        <a class="dropdown-item" href="#">Data Science</a>';        
    html += '                        <a class="dropdown-item" href="#">Blockchain</a>';    
    html += '                        <a class="dropdown-item" href="#">Augmented Reality</a>';    
    html += '                        <a class="dropdown-item" href="#">EdTech</a>';
    html += '                        <a class="dropdown-item" href="#">Simulation</a>';    
    html += '                        <a class="dropdown-item" href="#">Team</a>';        
    html += '                    </div>';
    html += '                </li>';


    html += '                <li class="nav-item">';
    html += '                    <a class="nav-link" href="#">Data-Science</a>';
    html += '                </li>';
    html += '                <li class="nav-item">';
    html += '                    <a class="nav-link" href="#">Cybersecurity</a>';
    html += '                </li>';
    html += '                <li class="nav-item">';
    html += '                    <a class="nav-link" href="#">IOT</a>';
    html += '                </li>';
    html += '                <li class="nav-item">';
    html += '                    <a class="nav-link" href="#">Blockchain</a>';
    html += '                </li>';
    html += '                <li class="nav-item">';
    html += '                    <a class="nav-link" href="#">EdTech</a>';
    html += '                </li>';    
    html += '                <li class="nav-item">';
    html += '                    <a class="nav-link" href="#">Team</a>';
    html += '                </li>';    
    html += '            </ul>';
    html += '        </div>';
    html += '    </div>';
    html += '</nav>';    
    document.getElementById('headernavbar').innerHTML = html;    

    html = '';
    html += '<!-- Navigation -->';
    html += '<nav class="navbar fixed-bottom navbar-inverse bg-inverse">';
    html += '   <a class="navbar-brand" href="http://www.mit.edu">';
    html += '       <img src="images/mit.png" class="float-right">';
    html += '   </a>';
    html += '</nav>';
    document.getElementById('footernavbar').innerHTML = html;    
    
})();

/*




*/