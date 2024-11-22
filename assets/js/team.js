// the domain banner 
// ----------------------------------
/*
'GDC is always looking for strong students and researchers. A strong preference is given to students who have been admitted to MIT. Similarly, research assistant positions are typically filled internally by graduate students.<br><a href="#join" class="badge badge-primary">Join The Team</a>'
*/

(function (){

    var banner = {
        title       : 'People',
        description : 'Meet the GDC team. <div><a href="join.html" class="badge badge-info">Join GDC</a> <a href="#gdcadvisors" class="badge badge-info">Advisory Board</a> <a href="#gdcteam" class="badge badge-info">Meet The Team</a></div>',
        image       : 'img/data/bokeh.jpg'
    };


    // the domain thumbnails - use by album.js 
    // ----------------------------------------
    var students = [];
    students.push({
        name : 'Abel Sanchez',
        img  : 'assets/images/people/AbelSanchez.jpg',
        url  : 'https://abel.mit.edu/'
    });
    students.push({
        name : 'John R. Williams',
        img  : 'assets/images/people/JohnWilliams.jpg',
        url  : 'https://johntango.github.io/'
    });
    students.push({
        name : 'Bruce Jones',
        img  : 'assets/images/people/BruceJones.jpg'
    });
    students.push({
        name : 'Isabella Voelkl',
        img  : 'assets/images/people/IsabellaVoelkl.jpg'
    });
    students.push({
        name : 'Kai Pan',
        img  : 'assets/images/people/KaiPan.jpg'
    });
    students.push({
        name : 'Anuj Bheda',
        img  : 'assets/images/people/AnujBheda.jpg'
    });
    students.push({
        name : 'David Whyte',
        img  : 'assets/images/people/DavidWhyte.jpg'
    });
    students.push({
        name : 'Fabian Spreng',
        img  : 'assets/images/people/FabianSpreng.jpg'
    });
    students.push({
        name : 'Nadia Megallon',
        img  : 'assets/images/people/NadiaMegallon.jpg'
    });
    students.push({
        name : 'Ranjan Pramanik',
        img  : 'assets/images/people/RanjanPramanik.jpg'
    });
    students.push({
        name : 'Sam Raymond',
        img  : 'assets/images/people/SamRaymond.jpg'
    });
    students.push({
        name : 'Seonkyoo Yoon',
        img  : 'assets/images/people/SeonkyooYoon.jpg'
    });

    // ----------------------------------------
    students.push({
        name : 'Xiating Ouyang',
        img  : 'assets/images/people/oliver.jpg'
    });
    students.push({
        name : 'Derek Ma',
        img  : 'assets/images/people/derekma.jpg'
    });
    students.push({
        name : 'Brant Gu',
        img  : 'assets/images/people/brantgu.jpg'
    });
    students.push({
        name : 'Andrew Chang',
        img  : 'assets/images/people/andrewchang.jpg'
    });
    students.push({
        name : 'Lam Ping Him',
        img  : 'assets/images/people/lampinghim.jpg'
    });
    students.push({
        name : 'Yiran Wei',
        img  : 'assets/images/people/yiranwei.jpg'
    });
    students.push({
        name : 'Lumin Xu',
        img  : 'assets/images/people/luminxu.jpg'
    });
    // ----------------------------------------

    students.push({
        name : 'Cheung Tsz Chung',
        img  : 'assets/images/people/cheungtszchung.jpg'
    });

    students.push({
        name : 'Cheung Tsz Chung',
        img  : 'assets/images/people/yi_zhou.jpg'
    });

    students.push({
        name : 'Linda Gong',
        img  : 'assets/images/people/LindaGong.jpg'
    });
    students.push({
        name : 'Botong Ma',
        img  : 'assets/images/people/BotongMa.jpg'
    });
    students.push({
        name : 'Carlos Caldera',
        img  : 'assets/images/people/CarlosCaldera.jpg'
    });
    students.push({
        name : 'Robert Ramirez',
        img  : 'assets/images/people/RobertRamirez.jpg'
    });
    students.push({
        name : 'Greg Falco',
        img  : 'assets/images/people/GregFalco.jpg'
    });
    students.push({
        name : 'Rongsha Li',
        img  : 'assets/images/people/students/MITGDC_RongshaLi.jpg'
    });
    students.push({
        name : 'Roberto Aceves',
        img  : 'assets/images/people/students/MITGDC_RobertoAceves.jpg'
    });
    students.push({
        name : 'Sergio Herrero',
        img  : 'assets/images/people/students/MITGDC_SergioHerrero.jpg'
    });
    students.push({
        name : 'Alberto Garcia',
        img  : 'assets/images/people/students/MITGDC_AlbertoGarcia.jpg'
    });
    students.push({
        name : 'Phil Clay',
        img  : 'assets/images/people/students/MITGDC_PClay.jpg'
    });
    students.push({
        name : 'Dan Robey',
        img  : 'assets/images/people/students/MITGDC_DanRobey.jpg'
    });
    students.push({
        name : 'Ane Fabo',
        img  : 'assets/images/people/students/MITGDC_AneFabo.jpg'
    });
    students.push({
        name : 'Zeid Alghareeb',
        img  : 'assets/images/people/students/MITGDC_ZeidAlghareeb.jpg'
    });
    students.push({
        name : 'Naiara Rodriguez',
        img  : 'assets/images/people/students/MITGDC_naiara.jpg'
    });
    students.push({
        name : 'Fivos Constantinou',
        img  : 'assets/images/people/students/MITGDC_FivosConstantinou.jpg'
    });
    students.push({
        name : 'Indy Yu',
        img  : 'assets/images/people/students/MITGDC_IndyYu.jpg'
    });
    students.push({
        name : 'Jinhock Ong',
        img  : 'assets/images/people/students/MITGDC_JinOng.jpg'
    });
    students.push({
        name : 'Xabier Insausti',
        img  : 'assets/images/people/students/xabierinsausti.jpg'
    });
    students.push({
        name : 'Jo Venkat',
        img  : 'assets/images/people/students/MITGDC_JoVenkat.jpg'
    });
    students.push({
        name : 'Maria Arenas',
        img  : 'assets/images/people/students/MITGDC_MariaArenas.jpg'
    });
    students.push({
        name : 'JC Murillo',
        img  : 'assets/images/people/students/MITGDC_JCMurillo.jpg'
    });
    students.push({
        name : 'Jokin Zunzunegui',
        img  : 'assets/images/people/students/MITGDC_JokinZunzunegui.jpg'
    });
    students.push({
        name : 'Karen Davie',
        img  : 'assets/images/people/students/MITGDC_KarenDavie.jpg'
    });
    students.push({
        name : 'Mario Assiotis',
        img  : 'assets/images/people/students/MITGDC_MariosAssiotis.jpg'
    });
    students.push({
        name : 'Ruktai Ace',
        img  : 'assets/images/people/students/MITGDC_RuktaiAcePrurapark.jpg'
    });
    students.push({
        name : 'Rida Chan',
        img  : 'assets/images/people/students/MITGDC_RidaChan.jpg'
    });
    students.push({
        name : 'Chaitra',
        img  : 'assets/images/people/students/MITGDC_ChaitraChandrasekhar.jpg'
    });
    students.push({
        name : 'Ching-Huei Tsou',
        img  : 'assets/images/people/students/MITGDC_Ching-HueiTsou.jpg'
    });
    students.push({
        name : 'Henry Chen',
        img  : 'assets/images/people/students/MITGDC_HenryChen.jpg'
    });
    students.push({
        name : 'Ivan Ruiz',
        img  : 'assets/images/people/students/MITGDC_Ivan_Ruiz.jpg'
    });
    students.push({
        name : 'Joe Foley',
        img  : 'assets/images/people/students/MITGDC_JoeFoley.jpg'
    });
    students.push({
        name : 'Sangeeth Ram',
        img  : 'assets/images/people/students/MITGDC_SangeethRam.jpg'
    });
    students.push({
        name : 'Sivaram Cheekiralla',
        img  : 'assets/images/people/students/MITGDC_SivaramCheekiralla.jpg'
    });
    students.push({
        name : 'Stefanie Delichatsios',
        img  : 'assets/images/people/students/MITGDC_StefanieDelichatsios.jpg'
    });
    students.push({
        name : 'Stephen Gill',
        img  : 'assets/images/people/students/MITGDC_StephenGill.jpg'
    });
    students.push({
        name : 'Taehee Han',
        img  : 'assets/images/people/students/MITGDC_TaeheeHan.jpg'
    });
    students.push({
        name : 'Adam Schlesinger',
        img  : 'assets/images/people/students/MITGDC_AdamSchlesinger.jpg'
    });


    // get team div
    var team = document.getElementById('team');


    // html string
    var html = '';

    // start list
    html += '<ul>';


    var thumbnails = [];
    students.forEach(function(student){
        var name = student.name;

        // shorten if longer than 11
        if (name.length > 11) name = name.substring(0,13);

        html += `               
                <!-- Avatar -->
                <li class="avatar avatar-xl mb-3">
                    <img class="avatar-img rounded-circle" src="${student.img}" alt="avatar"
                    data-bs-toggle="tooltip" data-bs-title="${student.name}">
                    <!-- Info -->
                    <div class="text-center">
                        <p style="font-size:0.7em">${name}</p>
                </li>
        `;
    });

    // end list
    html += '</ul>';

    // set html for team
    team.innerHTML = html;

})();

