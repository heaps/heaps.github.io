(function(){

    var carousel = [];


    carousel.push({
        title       : 'Geospatial Data Center',
        subtitle    : 'Applied Computation Research',
        description : 'The MIT Geospatial Data Center is the uniting force of MIT\'s Intelligent Engineering Systems Laboratory, bringing together applied computation research in Data Science, Cybersecurity, Simulation, Augmented Reality, the Internet of Things (IOT), Blockchain, and Educational Technology (EdTech).<div><a href="data.html" class="badge badge-info">Data Science</a> <a href="security.html" class="badge badge-info">Cybersecurity</a> <a href="iot.html" class="badge badge-info">IOT</a> <a href="blockchain.html" class="badge badge-info">Blockchain</a> <a href="education.html" class="badge badge-info">EdTech</a> <a href="simulation.html" class="badge badge-info">Simulation </a> <a href="geospatial.html" class="badge badge-info">Geospatial</a> <a href="ar.html" class="badge badge-info">Augmented Reality</a> <a href="team.html" class="badge badge-info">Team</a></div>',
        video       : '',
        image       : 'images/spatial_01_low.jpg',
        isactive    : true        
    });



    carousel.push({
        title       : 'Simulator',
        subtitle    : 'Global Infrastructure Data Simulator',
        description : 'The GDC Simulator provides decision makers with a tool that allows understanding and predicting the consequences of the deployment of new network topologies, hardware conﬁgurations or software applications in a global data infrastructure, without affecting the service. The simulator was validated on the data infrastructure of a Fortune 100 company.<div><a href="simulation.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/code_01_low.jpg'
    });

    carousel.push({
        title       : 'Hacking Education',
        subtitle    : 'EdTech Next Gen',
        description : 'With a long tradition of Educational Technology (EdTech) research, the GDC is investigating student data analytics/ML, the 360 degree view, new teaching platforms, feedback acceleration, connected intelligence, microcredentials, as well as scalable low-cost bootcamps. <div><a href="education.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/welder_low.jpg'
    });

    carousel.push({
        title       : 'Security',
        subtitle    : 'Cyber Physical Systems',
        description : 'The GDC has ongoing cybersecurity projects in Risk Modeling, Situational Awareness, Behavior Analysis, Negative Authentication, and Critical Infrastructure protection.<div><a href="security.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/security_00_low.jpg'
    });

    carousel.push({
        title       : 'Data Science',
        subtitle    : 'Big Data & Machine Learning',
        description : 'Current Data Science research projects are Reducing False Positives in Fraud Prevention (REFA), Decision Support Platform (DSP), Sustainable Infrastructure Planning System (SIPS), Integrated Energy Decision Support System (IEDSS), Cyber Security Initiative (CSI), Complex Systems Computation Platform (CSCP), and Connected Intelligence (COIN). <div><a href="data.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/datacenter_01_low.jpg'
    });

    carousel.push({
        title       : 'Blockchain',
        subtitle    : 'Value Exchanges and FinTech',
        description : 'The GDC is researching Security, Financial, Social networks, Storage, and general purpose application of blockchains. Social networks have been criticized for being "walled gardens" where the data is contained, siloed, and exploited by the owners of the network. Blockchain backed social networks offers a different proposition. One where users own the content, profit from the content, and do not need to trust third parties.<div><a href="blockchain.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/blockchain_02_low.jpg'
    });

    carousel.push({
        title       : 'Internet Of Things (IOT)',
        subtitle    : 'Physical Virtual Link',
        description : 'The GDC leadership led the global network architecture for the Internet of Things at MIT. The design addresses large-scale computation. Compared to the largest numbers in the world, 2 billion computers, 7 billion phones, and 7 billion people, IOT is orders of magnitude bigger. In similar work, Dr. Sanchez directed simulation of the U.S. critical infrastructure with the National Infrastructure Simulation and Analysis Center (NISAC). Early RFID work included supply chain information engineering, analytics, simulation, and visualization with Wal-Mart, Kraft, and SAP. <div><a href="iot.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/iot_02_low.jpg'
    });

    carousel.push({
        title       : 'Augmented Reality',
        subtitle    : 'A Virtual Layer on the Physical World',
        description : 'The ICS Cyberattack Simulation and Impact Analysis Framework uses serious game environments to generate Critical Infrastructures failures encountered from cybersecurity attacks. Decision makers can use the simulator to understand and predicting the consequences of the deployment of new network devices, hardware conﬁgurations or software applications in an Operations Technology (OT) global infrastructure, without affecting live operations.<div><a href="ar.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/ar_06_low.jpg'
    });

    carousel.push({
        title       : 'Geospatial Analytics',
        subtitle    : 'Geospatial Data Science',
        description : 'Turns Geospatial Big Data into advanced data analytics insights to support public works, oil & gas, and utilities operational safety and reliability.<div><a href="geospatial.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/lidar_02.jpg'
    });


    carousel.push({
        title       : 'Team',
        subtitle    : 'Meet the women and men of the GDC',
        description : 'GDC is always looking for strong students and researchers. A strong preference is given to students who have been admitted to MIT. Similarly, research assistant positions are typically filled internally by graduate students.<div><a href="team.html" class="badge badge-info">More Information ...</a></div>',
        video       : '',
        image       : 'images/team_17_low.jpg'
    });




    var html = '';
    html += '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">';
    html += '   <div class="carousel-inner" role="listbox">';

    // loop through carousel items, generate html, add to html variable
    carousel.forEach(function(item){ html += carouselItem(item); });

    html += '   </div>';
    html += '   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">';
    html += '       <span class="carousel-control-prev-icon" aria-hidden="true"></span>';
    html += '       <span class="sr-only">Previous</span>';
    html += '   </a>';
    html += '   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">';
    html += '       <span class="carousel-control-next-icon" aria-hidden="true"></span>';
    html += '       <span class="sr-only">Next</span>';
    html += '   </a>';
    html += '</div>';

    // set carousel content
    document.getElementById('carouselitems').innerHTML = html;    

    function carouselItem(item){
        var active = '';
        if (item.isactive) {active = ' active';}

        var html = '';        
        html += '<div class="carousel-item' + active + '" style="background-image: url(\'' + item.image + '\')">';

        html += '   <div class="carousel-caption d-md-block" style="top: 50%;transform: translateY(-50%);bottom: initial;-webkit-transform-style: preserve-3d;-moz-transform-style: preserve-3d;transform-style: preserve-3d;">';

        html += '       <div class="gdcTopic" style="background-color:rgba(0, 0, 0, 0.75); padding: 50px 50px 50px 50px;">';            
        html += '           <h1>' + item.title + '</h1>';
        html += '           <h3>' + item.subtitle + '</h3>';
        html += '           <p>' + item.description + '</p>';            
        html += '       </div>';            
        html += '       <div id="carouselButtons"></div>';
        html += '   </div>';
        html += '</div>';
        return html;
    }



    $(document).ready(function() {

        // carousel settings
        $('#playButton').click(function () {
            console.log('cycle clicked');                
            $('#homeCarousel').carousel('cycle');
        });
        $('#pauseButton').click(function () {
            console.log('pause clicked');
            $('#homeCarousel').carousel('pause');
        });

        $('.carousel').carousel({
          interval: 15000
        });

    });

    
})();


