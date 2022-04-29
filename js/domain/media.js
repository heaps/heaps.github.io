// the domain banner 
// ----------------------------------

var banner = {
    title       : 'Media',
    description : 'Video from the GDC.',
    image       : 'img/data/bokeh.jpg'
};


// the domain videos
// ----------------------------------
// before deploying restric URL access
// https://console.developers.google.com/apis/credentials/wizard?api=youtube.googleapis.com&project=api-project-837099048967
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCro0hRiT9K7UqIYTQHCf30g&maxResults=10&order=date&type=video&key=AIzaSyCUDPY8zV5jfjqiVDwTMUUDMn7jrHi8nQo';
var request = new XMLHttpRequest();
request.open('GET', url, false);  // `false` makes the request synchronous
request.send(null);

var boxes = [];



boxes.push({
    title       : 'ICS Security Threats',
    subtitle    : 'By Asif Iqbal',
    description : 'Hardware security challenges plus',
    url         : 'http://vimeo.com/96533939',
    video       : true,
    thumbnail   : 'images/videos/ics.jpg'    
});
boxes.push({
    title       : 'Datacenter Security',
    subtitle    : 'By Jim Culbert',
    description : 'Securing the Massachusetts Green High Performance Computing Center By Jim Culbert.',
    url         : 'http://vimeo.com/97254850',
    video       : true,
    thumbnail   : 'images/videos/datacenter.jpg'    
});
boxes.push({
    title       : 'Digital Forensics',
    subtitle    : '',
    description : 'Digital Forensics. Geospatial Data Center. Cyber Security - Big Data - Multicore',
    url         : 'http://vimeo.com/105188615',
    video       : true,
    thumbnail   : 'images/videos/forensics.jpg'    
});
boxes.push({
    title       : 'Negative Authentication',
    subtitle    : 'By Alvaro Madero',
    description : 'Password Security and Negative Authentication by Alvaro Madero.',
    url         : 'http://vimeo.com/105408895',
    video       : true,
    thumbnail   : 'images/videos/auth.jpg'    
});
boxes.push({
    title       : 'Data Stack Refactor',
    subtitle    : 'By Sabin Thomas',
    description : 'Data Stack Refactor by Sabin Thomas.',
    url         : 'http://vimeo.com/105434308',
    video       : true,
    thumbnail   : 'images/videos/refactor.jpg'    
});
boxes.push({
    title       : 'Cybersecurity & Society: It\'s Complicated',
    subtitle    : 'By Camille Francois',
    description : 'Cybersecurity & Society: It\'s Complicated by Camille Francois. This talk is about how to tackle the complexity of defining cybersecurity in the policy and law realm, with elements of the history of technology to put the current surveillance debate in context',
    url         : 'http://vimeo.com/105434309',
    video       : true,
    thumbnail   : 'images/videos/policy.jpg'    
});
boxes.push({
    title       : 'Enterprise Web Services',
    subtitle    : 'By John R. Williams and Abel Sanchez',
    description : 'Enterprise Web Services By John R. Williams and Abel Sanchez.',
    url         : 'http://vimeo.com/105451120',
    video       : true,
    thumbnail   : 'images/videos/ws.jpg'    
});
boxes.push({
    title       : 'Basic Security Hygiene',
    subtitle    : 'By Dr. Ron Ross',
    description : 'Basic Security Hygiene: Necessary But Not Sufficient for Mission/Business Protection By Dr. Ron Ross.This talk focuses on the activities necessary to strengthen the information technology infrastructure within an organization from a software assurance, systems and security engineering, and supply chain risk management perspective.',
    url         : 'http://vimeo.com/105460475',
    video       : true,
    thumbnail   : 'images/videos/securitybasics.jpg'    
});
boxes.push({
    title       : 'Fraud Analytics',
    subtitle    : 'By Jim McMillen and Shen Liu',
    description : 'Fraud Analytics By Jim McMillen and Shen Liu. Topics: Accenture Fraud Analytics Practice and delivery network, Market context and challenges, Fraud Management and Operating Model, Fraud Analytics Framework, Opportunity Areas.',
    url         : 'http://vimeo.com/105523033',
    video       : true,
    thumbnail   : 'images/videos/fraud.jpg'    
});
boxes.push({
    title       : 'Campus Security',
    subtitle    : 'By Michael Halsall',
    description : 'Computer Security by Michael Halsall. MIT\'s network is open and therefore a target for cyber attacks. Mike discusses cyber defense strategies and the challenges MIT is facing.',
    url         : 'http://vimeo.com/105570245',
    video       : true,
    thumbnail   : 'images/videos/campussecurity.jpg'    
});
boxes.push({
    title       : 'Anticipating the Cyber Threat',
    subtitle    : 'By Owen McCusker',
    description : 'Anticipating the Cyber Threat: Are we looking at the data the right way? By Owen McCusker. Owen is Principal Analyst at Sonalysts, Inc. and an expert in Cyber Security and Predictive Analytics.',
    url         : 'http://vimeo.com/105563432',
    video       : true,
    thumbnail   : 'images/videos/threat.jpg'    
});
boxes.push({
    title       : 'Security Lessons Learned from Boston Marathon',
    subtitle    : 'By John D. Halamka',
    description : 'Security Lessons Learned from Boston Marathon By John D. Halamka.',
    url         : 'http://vimeo.com/105579038',
    video       : true,
    thumbnail   : 'images/videos/marathon.jpg'    
});
boxes.push({
    title       : 'Cyber Security Best Practices',
    subtitle    : 'Gary Morgan',
    description : 'Cyber Security Best Practices: Certification and Accreditation.',
    url         : 'http://vimeo.com/105592349',
    video       : true,
    thumbnail   : 'images/videos/bestpractices.jpg'    
});
boxes.push({
    title       : 'Brief Technical Intro to Networks',
    subtitle    : 'By Alvaro Madero',
    description : 'Brief Technical Intro to Networks By Alvaro Madero',
    url         : 'http://vimeo.com/105598620',
    video       : true,
    thumbnail   : 'images/videos/network.jpg'    
});


boxes.push({
    title       : 'CIP',
    subtitle    : 'OT Security',
    description : 'Cybersecurity Critical Infrastructure Protection',
    url         : 'https://www.youtube.com/embed/tIkz4wfev5A',
    video       : true,
    thumbnail   : 'images/iot_576.jpg'
});
boxes.push({
    title       : 'SAFARI',
    subtitle    : 'Situational Awareness Framework for Risk Ranking',
    description : 'Situational Awareness framework that exploits different perspectives of the same financial data and assigns risk scores to entities (e.g. payment documents) to improve false positive ratios and assist the identification of fraudulent activity in huge and unlabeled financial data.',
    url         : 'https://www.youtube.com/embed/Kypp0XhcImU',
    video       : true,
    thumbnail   : 'images/safari_play_576.jpg'
});
boxes.push({
    title       : 'SAFFRON',
    subtitle    : 'Applied Computation Research',
    description : 'SAFFRON is a risk modeling and data analytics tool that allows energy delivery OT operators to better understand the risks associated with cyber threats.',
    url         : 'https://www.youtube.com/embed/pnk-EawgbrA',
    video       : true,
    thumbnail   : 'images/electric_576.jpg'    
});

// videos from youtube
if (request.status === 200) {
    console.log(request.responseText);
    var youtube = JSON.parse(request.responseText);
    youtube.items.forEach(function(video){
        console.log('video.id.videoId: ' + video.id.videoId);
        console.log('video.snippet.title: ' + video.snippet.title);
        boxes.push({
            title       : video.snippet.title,
            subtitle    : video.snippet.description,
            description : '',
            url         : 'https://www.youtube.com/embed/' + video.id.videoId,
            video       : true,
            thumbnail   : 'http://img.youtube.com/vi/' + video.id.videoId + '/mqdefault.jpg'
        });

    });
}
