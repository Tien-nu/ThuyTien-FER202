import '../css/carousel.css';  
export default function Carousel(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://i.pinimg.com/1200x/4d/a7/3f/4da73f313deef52c2373795a970b4082.jpg"></img>
                    <div className="carousel-caption custom-caption caption-img">
                            <h5>Pizza</h5>
                            <p>Delicious, hot, and cheesy pizza made with the freshest ingredients.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://i.pinimg.com/1200x/43/9b/b3/439bb3c30302c369784a5df05cd85d70.jpg"></img>
                    <div className="carousel-caption custom-caption caption-img">
                            <h5>Pizza</h5>
                            <p>Delicious, hot, and cheesy pizza made with the freshest ingredients.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://i.pinimg.com/736x/ed/71/24/ed7124aa0c4616269bd88bb6410a5dde.jpg"></img> 
                    <div className="carousel-caption custom-caption caption-img">
                            <h5>Pizza</h5>
                            <p>Delicious, hot, and cheesy pizza made with the freshest ingredients.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}