// home - landing content 
// ----------------------------------

(function (){

    // get home div
    var home = document.getElementById('home');

    // html string
    var html = `
    <!-- Content START -->
    <div class="container">
                                    
                            
        <!-- Slider START -->
        <div class="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
            <div class="tiny-slider-inner" data-autoplay="false" data-gutter="0" data-arrow="true" data-dots="false" data-items="1">


                <!-- Card item START -->
                <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/gdc/columns_blur.jpg); background-position: center left; background-size: cover;">
                    <!-- Background dark overlay -->
                    <div class="bg-overlay bg-dark opacity-6"></div>
                                                    
                    <!-- Card image overlay -->
                    <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                        <div class="w-100 my-auto">

                            <h1 class="text-white display-6">MIT GDC</h1>

                            <div class="row g-2">
                                <!-- Counter item -->
                                <div class="col px-4 my-2">
                                    <a href="pages/data.html">
                                        <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3">
                                            <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-solid fa-database"></i></span>
                                            <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                <div class="d-flex">
                                                    <h5 class="text-white mb-0 fw-bold">Data</h5>
                                                </div>
                                                <p class="mb-0">AI, ML, Ops, Cloud</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="row g-2">

                                <!-- Counter item -->
                                <div class="col px-4 my-2">
                                    <a href="pages/web3.html">
                                        <div class="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-50 rounded-3">
                                            <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-duotone fa-cubes"></i></span>
                                            <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                <div class="d-flex">
                                                    <h5 class="text-white mb-0 fw-bold">Web3</h5>
                                                </div>
                                                <p class="mb-0">BC, DeFi, Metaverse</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div class="row g-2">

                                <!-- Counter item -->
                                <div class="col px-4 my-2">
                                    <a href="pages/outreach.html">
                                        <div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-50 rounded-3">
                                            <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-hands-helping"></i></span>
                                            <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                <div class="d-flex">
                                                    <h5 class="text-white mb-0 fw-bold">Outreach</h5>
                                                </div>
                                                <p class="mb-0">Education Outreach</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>                                          

                            <div class="row g-2">


                                <!-- Counter item -->
                                <div class="col px-4 my-2">
                                    <a href="https://giving.mit.edu/form?fundId=3892672">
                                        <div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-50 rounded-3">
                                            <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-hand-holding-usd"></i></span>
                                            <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                <div class="d-flex">
                                                    <h5 class="text-white mb-0 fw-bold">Donate</h5>
                                                </div>
                                                <p class="mb-0">Support GDC's Mission</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <!-- Card item END -->                                  
                

                <!-- Card item START -->
                <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/gdc/bp01_low2.jpg); background-position: center left; background-size: cover;">
                    <!-- Background dark overlay -->
                    <div class="bg-overlay bg-dark opacity-6"></div>
                                                    
                    <!-- Card image overlay -->
                    <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                        <div class="w-100 my-auto">
                            <div class="row justify-content-center">
                                <div class="col-11 col-lg-7">
                                    <!-- Title -->
                                    <h1 class="text-white display-6">Discover Beautiful Patterns</h1>
                                    <p class="text-white">GDC Outreach - Teaching computation to women in Latin America.</p>
                                    <!-- Button -->
                                    <a href="university-admission-form.html" class="btn btn-primary me-2 mb-0">Project</a>
                                    <a href="#" class="btn btn-outline-white mb-0">Video</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card item END -->


                <!-- Card item START -->
                <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/images/bg/01.jpg); background-position: center left; background-size: cover;">
                    <!-- Background dark overlay -->
                    <div class="bg-overlay bg-dark opacity-6"></div>
                                                    
                    <!-- Card image overlay -->
                    <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                        <div class="w-100 my-auto">
                            <div class="row justify-content-center">
                                <div class="col-11 col-lg-7">
                                    <!-- Title -->
                                    <h1 class="text-white display-6">Discover Lifelong Learning</h1>
                                    <p class="text-white">This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College, University, Courses Hub, Training Center, or any Academy.</p>
                                    <!-- Button -->
                                    <a href="university-admission-form.html" class="btn btn-primary me-2 mb-0">Admissions</a>
                                    <a href="#" class="btn btn-outline-white mb-0">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card item END -->                                  


            </div>
        </div>
        <!-- Slider END -->

                            
    </div>
    <!-- Content END -->
    `;


    // set html for home
    home.innerHTML = html;
    document.documentElement.style.display = 'block';
})();

