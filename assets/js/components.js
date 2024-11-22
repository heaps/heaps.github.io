// Create a class for the element
class VideoCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const img         = this.getAttribute('img');
    const video       = this.getAttribute('video');
    const author      = this.getAttribute('author');
    const title       = this.getAttribute('title'); 
    const url         = this.getAttribute('url');
    const description = this.getAttribute('description');        
    const length      = this.getAttribute('length');

    let card = `
          <!-- Video Card item START -->
            <div class="card shadow h-100">


              <!-- play button overlay -->
              <div class="position-relative">
                <img src="${img}" class="card-img-top" alt="course image">
                <div class="bg-overlay bg-dark opacity-6 rounded-3" class="card-img-top"></div>               
                <div class="card-img-overlay">
                  <div class="position-absolute top-50 start-50 translate-middle">
                              <div class="d-flex align-items-center justify-content-center">
                        <a href="https://www.youtube-nocookie.com/embed/${video}" class="btn btn-lg btn-round btn-white-shadow text-danger mb-0 overflow-visible glightbox3" style="font-size: 1.5rem;"> 
                          <i class="fas fa-play" style="font-size: 1.5rem;"></i>
                        </a>
                      </div>
                  </div>
                </div>
              </div>


              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-success bg-opacity-10 text-success">${author}</a>
                  <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="${url}">${title}</a></h5>
                <p class="mb-2 text-truncate-2">${description}</p>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>${length}</span>
                </div>
              </div>
            </div>
          <!-- Video Card item END -->
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-video-card', VideoCard);



// Create a class for the element
class VideoMini extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const img         = this.getAttribute('img');
    const video       = this.getAttribute('video');
    const title       = this.getAttribute('title'); 
    const description = this.getAttribute('description');        

    let card = `
          <!-- Video Card item START -->
            <div class="card shadow h-100">


              <!-- play button overlay -->
              <div class="position-relative">
                <img src="${img}" class="card-img-top" alt="course image">
                <div class="bg-overlay bg-dark opacity-6 rounded-3" class="card-img-top"></div>               
                <div class="card-img-overlay">
                  <div class="position-absolute top-50 start-50 translate-middle">
                              <div class="d-flex align-items-center justify-content-center">
                        <a href="https://www.youtube-nocookie.com/embed/${video}" class="btn btn-lg btn-round btn-white-shadow text-danger mb-0 overflow-visible glightbox3" style="font-size: 1.5rem;"> 
                          <i class="fas fa-play" style="font-size: 1.5rem;"></i>
                        </a>
                      </div>
                  </div>
                </div>
              </div>


              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="">${title}</a></h5>
                <p class="mb-2 text-truncate-2">${description}</p>
              </div>
              
            </div>
          <!-- Video Card item END -->
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-video-mini', VideoMini);


// Create a class for the element
class CourseCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const img         = this.getAttribute('img');
    const level       = this.getAttribute('level');
    const title       = this.getAttribute('title');    
    const url         = this.getAttribute('url');
    const description = this.getAttribute('description');        
    const length      = this.getAttribute('length');

    let card = `
          <!-- Course Card item START -->
            <div class="card shadow h-100">
              <!-- Image -->
              <img src="${img}" class="card-img-top" alt="course image">
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-success bg-opacity-10 text-success">${level}</a>
                  <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="${url}">${title}</a></h5>
                <p class="mb-2 text-truncate-2">${description}</p>

              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>${length}</span>
                </div>
              </div>
            </div>
          <!-- Course Card item END -->
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-course-card', CourseCard);




// Create a class for the element
class FacultyCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const img  = this.getAttribute('img');
    const name = this.getAttribute('name');
    const bio  = this.getAttribute('bio');    

    let card = `
      <div class="py-2">
          <div class="card shadow p-2">
            <div class="row g-0">
              <!-- Image -->
              <div class="col-md-4">
                <img src="${img}" class="img-fluid rounded-3" alt="...">
              </div>

              <!-- Card body -->
              <div class="col-md-8">
                <div class="card-body">
                  <!-- Title -->
                  <div class="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 class="card-title mb-0"><a href="#">${name}</a></h5>
                    </div>
                  </div>
                  <!-- Content -->
                  <p class="mb-3">${bio}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    `;

    this.innerHTML = card;    
  }
}

// Define the new element
customElements.define('mit-faculty-card', FacultyCard);






// Create a class for the element
class VideoButton extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const video = this.getAttribute('video');
    const label = this.getAttribute('label');        

    let labelStr = 'Watch video';
    if(label){
      labelStr = label;
    }


    let card = `
            <!-- Video button -->
            <div class="d-flex align-items-center justify-content-center py-2 ms-0 ms-sm-4">
              <a href="https://www.youtube-nocookie.com/embed/${video}" class="btn btn-round btn-white-shadow text-danger me-7 mb-0 overflow-visible glightbox3"> 
                <i class="fas fa-play"></i>
                <h6 class="mb-0 ms-3 text-white fw-normal position-absolute start-100 top-50 translate-middle-y">${labelStr}</h6>
              </a>
            </div>
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-video-button', VideoButton);


// Create a class for the element
class Topic extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const color = this.getAttribute('color');
    const icon  = this.getAttribute('icon');
    const title = this.getAttribute('title');
    const subtitle  = this.getAttribute('subtitle');        
    const url   = this.getAttribute('url');    

    let card = `
          <a href="${url}">
            <div class="d-flex justify-content-center align-items-center p-2 bg-${color} bg-opacity-15 rounded-3">
              <span class="display-6 lh-1 text-${color} mb-0"><i class="${icon}"></i></span>
              <div class="ms-4 h6 fw-normal mb-0">
                <div class="d-flex">
                  <h5 class="mb-0 fw-bold">${title}</h5>
                </div>
                <p class="mb-0">${subtitle}</p>
              </div>
            </div>
          </a>
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-topic', Topic);


// Create a class for the element
class Pills extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const color = this.getAttribute('color');

    let card = `
            <a href="iot.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Internet of Things"
            >IOT</a>
            <a href="data.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Big Data"            
            >Data</a>
            <a href="ai.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Artificial Intelligence & Machine Learning"            
            >AI</a>
            <a href="web3.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Blockchain, DeFi, and Web3"            
            >Web3</a>
            <a href="cloud.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Cloud Technologies"            
            >Cloud</a>
            <a href="security.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Cybersecurity"            
            >Cybersecurity</a>
            <a href="courses.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Courses on digital technology"            
            >Courses</a>
            <a href="outreach.html" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="Sharing education with the world"            
            >Outreach</a>
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-pills', Pills);


// Create a class for the element
class Pill extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const color = this.getAttribute('color');
    const url   = this.getAttribute('url');
    const label = this.getAttribute('url');    

    let card = `
            <a href="${url}" class="badge text-bg-${color}"
              data-bs-toggle="tooltip" 
              data-bs-title="${label}"
            >${label}</a>
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-pill', Pill);

/*
// Create a class for the element
class Module extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title = this.getAttribute('title');

    this.innerHTML = `
        <div class="card">
          <h5 class="card-header">${title}</h5>
          <div class="card-body">
            ${this.innerHTML}
          </div>
        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);
*/