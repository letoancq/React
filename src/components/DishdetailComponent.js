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
} from "reactstrap";
import { Link } from "react-router-dom";

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

function RenderComments({ comments }) {
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
        </div>
      </div>
    );
  else return <div></div>;
};

export default DishDetail;
