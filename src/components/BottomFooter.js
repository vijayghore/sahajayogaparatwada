import React from 'react'
import { Container } from 'react-bootstrap'

const BottomFooter = () => {

    return (
        <footer className="bg-danger text-center text-white mt-4">
            <Container className="p-4 pb-0">
                <section>
                    <a className="mx-3 fs-2 text-white" href="#!" role="button">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    
                    <a className="mx-3 fs-2 text-white" href="#!" role="button">
                        <i className="fa-brands fa-facebook"></i>
                    </a>

                    <a className="mx-3 fs-2 text-white" href="#!" role="button">
                        <i className="fa-brands fa-twitter"></i>
                    </a>

                </section>
            </Container>

            <Container className="text-center p-3">
                <span><i>Designed & Managed by </i><u>  Vijay Ghore </u></span>
            </Container>
        </footer >
    )
}

export default BottomFooter
