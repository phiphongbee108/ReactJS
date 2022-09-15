import React, { Component } from "react";
import {
  Nav,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from "reactstrap";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleComment = this.handleComment.bind(this);
    this.state = {
      isModalOpen: false,
      isDropdownOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleDropDown() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
    });
  }

  handleComment(event) {
    this.toggleModal();
    alert(
      "Rating: " +
        this.rating.value +
        " User Name: " +
        this.username.value +
        " Comment: " +
        this.comment.value
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button outline onClick={this.toggleModal}>
              <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>
          </NavItem>
        </Nav>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleComment}>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CommentForm;
