// the domain banner 
// ----------------------------------

var banner = {
    title       : 'GDC Global Simulation Platform',
    description : 'The GDC Simulator provides decision makers with a tool that allows understanding and predicting the consequences of the deployment of new network topologies, hardware conﬁgurations or software applications in a global data infrastructure, without affecting the service. The simulator was validated on the data infrastructure of a Fortune 100 company.<div><a href="pdf/sim/brochure.pdf" class="badge badge-info">Simulator Brochure</a> <a href="pdf/sim/paper.pdf" class="badge badge-info">Simulator Paper</a> <a href="pdf/safari/brochure.pdf" class="badge badge-info">Safari Brochure</a> <a href="pdf/safari/presentation.pdf" class="badge badge-info">Safari Presentation</a> <a href="pdf/safari/futurework.pdf" class="badge badge-info">Safari Future Work</a> <a href="pdf/safari/architecture.pdf" class="badge badge-info">Safari Architecture </a></div>',
    image       : 'img/data/bokeh.jpg',
    linkIsVideo : false,    
    link        : ''
};

// simulation document links
// ----------------------------------
gdc.sim = {};
gdc.sim.docs = [];
gdc.sim.description = '<p>The GDC Simulator provides decision makers with a tool that allows understanding and predicting the consequences of the deployment of new network topologies, hardware conﬁgurations or software applications in a global data infrastructure, without affecting the service. The simulator was validated on the data infrastructure of a Fortune 100 company.</p>';

gdc.sim.docs.push({
    url : 'pdf/sim/brochure.pdf',
    label : 'Global MIT IT Simulator Brochure'
});
gdc.sim.docs.push({
    url : 'pdf/sim/paper.pdf',
    label : 'Global MIT IT Simulator Paper'
});
gdc.sim.docs.push({
    url : 'pdf/safari/brochure.pdf',
    label : 'Safari Brochure'
});
gdc.sim.docs.push({
    url : 'pdf/safari/presentation.pdf',
    label : 'Safari Presentation'
});
gdc.sim.docs.push({
    url : 'pdf/safari/futurework.pdf',
    label : 'Safari Future Work'
});
gdc.sim.docs.push({
    url : 'pdf/safari/architecture.pdf',
    label : 'Safari Architecture - Technology Platform'
});

gdc.sim.list = '<ul>';
gdc.sim.docs.forEach(function(doc){
    gdc.sim.list += '<li><a href="' + doc.url + '">' + doc.label + '</a></li>';
});
gdc.sim.list += '</ul>';


// the domain videos
// ----------------------------------

var boxes = [];
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
boxes.push({
    title       : 'CIP',
    subtitle    : 'OT Security',
    description : 'Cybersecurity Critical Infrastructure Protection',
    url         : 'https://www.youtube.com/embed/tIkz4wfev5A',
    video       : true,
    thumbnail   : 'images/iot_576.jpg'
});
