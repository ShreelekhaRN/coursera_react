import React, { Component } from 'react';
import { Button, Label, Row, Col, } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Commentform extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit= this.handleSubmit.bind(this);

        this.state = {
            isFormOpen: false,

    };
}

    toggleForm() {
        this.setState({
          isFormOpen: !this.state.isFormOpen
        });
      }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    render() {
        return(
            <div className="container">
                <div className="row row-content">
                <div className="col-12">
                    <h3>Submit Comment</h3>
                </div>
                <div className="col-12 col-md-9">
                <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                <Row className="form-group">
                <Col md={{size: 6}}>
                    <Control.select model=".rating" name="Rating"
                        className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                    </Control.select>
                </Col>
                    </Row>
                <Row className="form-group">
                <Label htmlFor="yourname" md={2}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                         />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send
                                    </Button>
                                </Col>
                            </Row>
                </LocalForm>
                </div>
                </div>
            </div>
        );
    }
}
export default Commentform;