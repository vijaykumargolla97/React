/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import {Card,CardBody,CardText, CardTitle, CardGroup, CardFooter} from "reactstrap"

import {FaEnvelope, FaMapMarkedAlt, FaPhone, FaBaby } from "react-icons/fa"

const Mycard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150px" width="150px"
                className="rounded-circle img-thumbnail border-danger" 
                src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title} </span>
                        <span>{details.name?.first} </span>
                        <span>{details.name?.last} </span>
                    </h1>
                    <h3>
                        <FaBaby className="m-2" >
                        </FaBaby>
                        {details.dob?.age}
                    </h3>
                    <CardText>
                        <FaMapMarkedAlt className="m-2"/>
                        {details.location?.city}
                    </CardText>
                    <CardGroup>
                        
                    </CardGroup>
                    <CardFooter>
                        <FaEnvelope className="m-2"/>
                        {details.email}
                        <br/>
                        <FaPhone className="m-2 phone"/>
                        {details.phone}
                    </CardFooter>
                </CardTitle>
            </CardBody>
        </Card>
    )

}

export default  Mycard