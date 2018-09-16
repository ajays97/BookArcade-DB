import React, { Component } from "react";
import * as actions from "../actions";
import { connect } from "react-redux";

class AddBook extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      book_sku: "",
      s_image_url: "",
      m_image_url: "",
      l_image_url: "",
      isbn10: "",
      isbn13: "",
      language: "",
      short_description: "",
      long_description: "",
      mrp: 0,
      price: 0,
      pages: 0,
      publisher: "",
      release_date: new Date().toISOString().split("T")[0],
      stock_available: false,
      condition: "",
      genre: "",
      rating: 0.0,
      book_title: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleFormSubmit = e => {
    const { addBook } = this.props;
    e.preventDefault();
    addBook(this.state);
    this.setState({
      author: "",
      book_sku: "",
      s_image_url: "",
      m_image_url: "",
      l_image_url: "",
      isbn10: "",
      isbn13: "",
      language: "",
      short_description: "",
      long_description: "",
      mrp: 0,
      price: 0,
      pages: 0,
      publisher: "",
      release_date: new Date().toISOString().split("T")[0],
      stock_available: false,
      condition: "",
      genre: "",
      rating: 0.0,
      book_title: ""
    });
  };

  render() {
    return (
      <div className="pt-4">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                placeholder="Enter Author Name"
                value={this.state.author}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="book_title">Book Title</label>
              <input
                type="text"
                className="form-control"
                id="book_title"
                placeholder="Enter Book Title"
                value={this.state.book_title}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="book_sku">Book Sku</label>
              <input
                type="text"
                className="form-control"
                id="book_sku"
                placeholder="Enter Book Sku"
                value={this.state.book_sku}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="s_image_url">S Image Url</label>
              <input
                type="url"
                className="form-control"
                id="s_image_url"
                placeholder="Enter s image url"
                value={this.state.s_image_url}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="m_image_url">M Image Url</label>
              <input
                type="url"
                className="form-control"
                id="m_image_url"
                placeholder="Enter m image url"
                value={this.state.m_image_url}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="l_image_url">L Image Url</label>
              <input
                type="url"
                className="form-control"
                id="l_image_url"
                placeholder="Enter image url"
                value={this.state.image_url}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="isbn10">ISBN 10</label>
              <input
                type="text"
                className="form-control"
                id="isbn10"
                placeholder="Enter isbn10"
                value={this.state.isbn10}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="isbn13">ISBN 13</label>
              <input
                type="text"
                className="form-control"
                id="isbn13"
                placeholder="Enter isbn13"
                value={this.state.isbn13}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <input
                type="text"
                className="form-control"
                id="language"
                placeholder="Input Language"
                value={this.state.language}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-3">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">MRP</div>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="mrp"
                  placeholder="0"
                  value={this.state.mrp}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group col-md-3">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">Rs.</div>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  placeholder="0"
                  value={this.state.price}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
            <div className="form-group col-md-3">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">Pages</div>
                </div>
                <input
                  type="number"
                  className="form-control"
                  id="pages"
                  placeholder="0"
                  value={this.state.pages}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="short_description">Short Description</label>
            <input
              type="text"
              className="form-control"
              id="short_description"
              placeholder="Input Short Description"
              value={this.state.short_description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="short_description">Long Description</label>
            <textarea
              className="form-control"
              aria-label="With textarea"
              id="long_description"
              value={this.state.long_description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group">
            <input
              type="date"
              className="form-control"
              id="release_date"
              value={this.state.release_date}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleFormSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(
  mapStateToProps,
  actions
)(AddBook);
