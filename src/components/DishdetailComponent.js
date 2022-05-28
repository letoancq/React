import React from "react";
import dateFormat from "dateformat";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Label,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Errors, Control, LocalForm } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg src={dish.image} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function ModalSubmit() {
   

  const HideModal = () => {
    document.querySelector(".modal-container").style.display = "none";
    document
      .querySelector(".LocalForm")
      .addEventListener("click", function (event) {
        event.stopPropagation();
      });
  };

  return (
    <div className="modal-container" onClick={HideModal} >
    <LocalForm
      className="LocalForm"
      onSubmit={(values) => this.handleSubmit(values)}
      >
      <h2>Submit Comment</h2>
        <Row className="form-group">
          <Label htmlFor="yourname" md={12}>
            Rating
          </Label>
          <Col md={{ size: 12 }}>
            <Control.select
              model=".contactType"
              name="contactType"
              className="form-control"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Control.select>
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="yourname" md={12}>
            Your Name
          </Label>
          <Col md={{ size: 12 }}>
            <Control.text
              model=".yourname"
              id="yourname"
              name="yourname"
              placeholder="Your Name"
              className="form-control"
              validators={{
                required,
                minLength: minLength(3),
                maxLength: maxLength(15),
              }}
            />
            <Errors
              className="text-danger"
              model=".yourname"
              show="touched"
              messages={{
                required: "Required",
                minLength: "Must be greater than 2 characters",
                maxLength: "Must be 15 characters or less",
              }}
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Label htmlFor="feedback" md={12}>
            Comment
          </Label>
          <Col md={{ size: 12 }}>
            <Control.textarea
              model=".message"
              id="message"
              name="message"
              rows="12"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={{ size: 10 }}>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </Col>
        </Row>
    </LocalForm>
      </div>
  );
}

function RenderComments({ comments }) {
  const ShowModalSubmit = () => {
    return (document.querySelector(".modal-container").style.display = "block");
  };

  console.log(comments);
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {dateFormat(comment.date, "dd/mm/yyyy")}{" "}
                </p>
              </li>
            );
          })}
        </ul>
        <button className="btn-show-modal" onClick={ShowModalSubmit}>
          Submit Comment
        </button>
      </div>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className=" row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row ">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
          <ModalSubmit />
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
