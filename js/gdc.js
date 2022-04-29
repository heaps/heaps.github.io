var gdc = {};
gdc.navigation_links = '';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="index.html">Home</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item dropdown">';
gdc.navigation_links += '          <a class="nav-link dropdown-toggle" href="" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Research</a>';
gdc.navigation_links += '          <div class="dropdown-menu" aria-labelledby="dropdown07">';
gdc.navigation_links += '            <a class="dropdown-item" href="data.html">Data Science</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="education.html">EdTech</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="iot.html">Internet of Things (IOT)</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="security.html">Cybersecurity</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="blockchain.html">Blockchain</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="geospatial.html">Geospatial Analytics</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="ar.html">Augmented Reality</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="simulation.html">Simulation</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="team.html">Team</a>';
gdc.navigation_links += '          </div>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="education.html">Courses</a>';
gdc.navigation_links += '        </li>';
gdc.navigation_links += '        <li class="nav-item">';
gdc.navigation_links += '          <a class="nav-link" href="media.html">Media</a>';
gdc.navigation_links += '        </li>';  
gdc.navigation_links += '        <li class="nav-item dropdown">';
gdc.navigation_links += '          <a class="nav-link dropdown-toggle" href="team.html" id="dropdown08" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">People</a>';
gdc.navigation_links += '          <div class="dropdown-menu" aria-labelledby="dropdown08">';
gdc.navigation_links += '            <a class="dropdown-item" href="team.html">People</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="join.html">Join Us</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="advisors_faculty.html">Advisors - Leadership Committee</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="advisors_security.html">Advisors - Cybersecurity</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="advisors_rfid.html">Advisors - Supply Chain</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="advisors_media.html">Advisors - Media</a>';
gdc.navigation_links += '            <a class="dropdown-item" href="advisors_gis.html">Advisors - GIS</a>';
gdc.navigation_links += '          </div>';
gdc.navigation_links += '        </li>';

gdc.advisorsDescription = '<p>The MIT GDC Advisory Board is divided into the following 4 groups: Leadership Committee, Geocentric Cybersecurity, Geolocated Supply Chain, Geospatial Technology, Geocoded Media. Select link below.</p>';
gdc.advisors = [];
gdc.advisors.push({
	url : 'advisors_faculty.html',
	label : 'Advisors - Leadership Committee'
});
gdc.advisors.push({
	url : 'advisors_security.html',
	label : 'Advisors - Cybersecurity'
});
gdc.advisors.push({
	url : 'advisors_rfid.html',
	label : 'Advisors - Supply Chain'
});
gdc.advisors.push({
	url : 'advisors_media.html',
	label : 'Advisors - Media'
});
gdc.advisors.push({
	url : 'advisors_gis.html',
	label : 'Advisors - GIS'
});

gdc.advisorsButtons = '';
gdc.advisors.forEach(function(advisor){
	gdc.advisorsButtons += '<a href="' + advisor.url + '" class="badge badge-primary">' + advisor.label + '</a> ';
});

gdc.advisorsList = '<ul>';
gdc.advisors.forEach(function(advisor){
	gdc.advisorsList += '<li><a href="' + advisor.url + '">' + advisor.label + '</a></li>';
});
gdc.advisorsList += '</ul>';









