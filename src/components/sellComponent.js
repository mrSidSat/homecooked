import React from 'react';
import {Component} from 'react';
import Header from './headComponent.js';
import Footer from './footerComponent.js';
// import Carousel from './carousel';
import './Header.css';


class SellDash extends Component{
    render()
    {
        return(
            <React.Fragment>
                <Header/>
               
                <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" class="active" ></li>
                    <li data-target="#carouselIndicators" data-slide-to="1" ></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    
                    <div class="carousel-item">
                    <img class="d-block w-100 " src="food3.jpg" alt="Second slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Fantastic Ride for your TasteBuds</h3>
                        <p>We ensure sheer elegance in making every morsel of your food just perfect for your mood and taste</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 " src="food1.jpg" alt="Third slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Fantastic Ride for your TasteBuds</h3>
                        <p>We ensure sheer elegance in making every morsel of your food just perfect for your mood and taste</p>
                    </div>
                    </div>
                    <div class="carousel-item active">
                    <img class="d-block w-100 " src="food2.jpg" alt="First slide"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>Fantastic Ride for your TasteBuds</h3>
                        <p>We ensure sheer elegance in making every morsel of your food just perfect for your mood and taste</p>
                    </div>
                    </div>
                    
                </div>
                <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
                <br/>
                <div class="mheaders">Features</div>
                <section class="sec">
                    <div >
                        <div class="row">
                        <div class="card ccard col-md-3  " >
                        <img class="card-img-top ima" src="cardimg1.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Sign Up</h5>
                            <p class="card-text">Sign Up to Sell your handmade dishes to the foodies over the area</p>
                            <a href="/signup" class="btn btn-primary">Sign Up</a>
                        </div>
                        </div>
                        <div class="card ccard col-md-3 offset-md-1 " >
                        <img class="card-img-top ima" src="cardimg2.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Featured chefs </h5>
                            <p class="card-text">The best Chefs from the arsenal are here order now to taste the awesome delicasies</p>
                            <a href="#" class="btn btn-primary">Featured</a>
                        </div>
                        </div>
                        <div class="card ccard col-md-3 offset-md-1 " >
                        <img class="card-img-top ima" src="cardimg3.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Reviews</h5>
                            <p class="card-text">Good Food make Happy Customers Check out what our customers have to say</p>
                            <a href="#" class="btn btn-primary">Reviews</a>
                        </div>
                        </div>
                        </div>
                    </div>    
                </section>
                <section>
                    
                </section>
                <section>
                    <div class="reviewonsite">

                    </div>
                </section>
                <br/>
                <br/>
                <footer>
                    <Footer/>
                </footer>

            </React.Fragment>

        )
    }
}
export default SellDash;