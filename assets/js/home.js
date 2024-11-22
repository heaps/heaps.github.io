// home - landing content 
// ----------------------------------

(function (){

    // get home div
    var home = document.getElementById('home');

    // html string
    var html = `
    <!-- =======================
            Main Banner START 
         ======================= -->

        <section class="pt-0 position-relative overflow-hidden h-700px h-sm-600px h-lg-700px rounded-top-4 mx-2 mx-md-4" style="background-image:url(assets/gdc/blur.jpg); background-position: center; background-size: cover;">
            <div class="bg-overlay bg-dark opacity-5"></div>
            
            <!-- SVG decoration for curve -->
            <figure class="position-absolute bottom-0 left-0 w-100 d-md-block mb-n3 z-index-9">
                <svg class="fill-body" width="100%" height="150" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path d="M0,150 L0,40 Q250,150 500,40 L580,150 Z"></path>
                </svg>
            </figure>
                
            <div class="container z-index-9 position-relative">


                <div class="row py-0 py-md-5 align-items-center text-center text-sm-start">
                    <div class="col-sm-10 col-lg-10 col-xl-10 all-text-white my-5 mt-md-0">
                        <div class="py-0 py-md-5 my-5">
                                        
                            <!-- Title -->
                            <h1 class="text-white display-5">Geospatial Data Center<span class="text-warning"> Applied Computation.</span></h1>
                            <p class="text-white">The MIT Geospatial Data Center is the uniting force of MIT's Intelligent Engineering Systems Laboratory, bringing together applied computation research in Data Science, Cybersecurity, Simulation, Augmented Reality, the Internet of Things (IOT), Blockchain, and Educational Technology (EdTech).</p>

                            <!-- links to other topics -->
                            <mit-pills color="primary"></mit-pills>
                            
                            <div class="d-sm-flex align-items-center mt-4">
                                <mit-video-button video="L4EgZWh2sQ4"></mit-video-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <!-- =======================
            Main Banner END 
         ======================= -->


    <!-- Content END -->
    `;


    // set html for home
    home.innerHTML = html;
})();

