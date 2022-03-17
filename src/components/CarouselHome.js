import React from 'react'
import { Carousel } from 'react-bootstrap'
// import { Image, Container, Carousel } from 'react-bootstrap'
// import home_cover from '../images/home_cover.jpg'
import carousel01 from '../images/carousel01.jpg'
import carousel02 from '../images/carousel02.jpg'
import carousel03 from '../images/carousel03.jpg'
import carousel04 from '../images/carousel04.jpg'
import carousel05 from '../images/carousel05.jpg'



const CarouselHome = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item interval={1000} >
                <img
                    className="img-fluid d-block w-100 mx-auto border border-3 border-danger"
                    src={carousel01}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4>First slide label</h4>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000} >
                <img
                    className="d-block w-100 mx-auto border border-3 border-danger"
                    src={carousel02}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h4>Second slide label</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 mx-auto border border-3 border-danger"
                    src={carousel03}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h4>Third slide label</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 mx-auto border border-3 border-danger"
                    src={carousel04}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h4>Fourth slide label</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 mx-auto border border-3 border-danger"
                    src={carousel05}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h4>Fifth slide label</h4>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHome
