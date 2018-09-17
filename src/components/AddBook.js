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
      release_date: "",
      stock_available: true,
      condition: "New",
      genre: "",
      rating: 0.0,
      title: "",
      category: "",
      sub_category: "",
      category_tags: []
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onChangeRadio = e => {
    if (e.target.id === "option1") {
      this.setState({
        stock_available: true
      });
    } else {
      this.setState({
        stock_available: false
      });
    }
  };

  handleCategoryTags = e => {
    let categoryTag = e.target.value.split(",");
    this.setState({
      category_tags: categoryTag
    });
  };

  onChangeCondition = e => {
    if (e.target.id === "condition1") {
      this.setState({
        condition: "New"
      });
    } else {
      this.setState({
        condition: "Old"
      });
    }
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
      release_date: "",
      stock_available: true,
      condition: "New",
      genre: "",
      rating: 0.0,
      title: "",
      category: "",
      sub_category: "",
      category_tags: []
    });
  };

  render() {
    return (
      <div className="pt-4">
        <form>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="title">Book Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter Book Title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </div>
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
            <label htmlFor="release_date">Release Date</label>
            <input
              type="string"
              className="form-control"
              id="release_date"
              placeholder={new Date().toISOString().split("T")[0]}
              value={this.state.release_date}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Stock Available &ensp; </label>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label
                  className={
                    this.state.stock_available
                      ? "btn btn-primary active"
                      : "btn btn-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="options"
                    id="option1"
                    autocomplete="off"
                    checked={this.state.stock_available}
                    onClick={this.onChangeRadio}
                  />{" "}
                  Yes
                </label>
                <label
                  className={
                    !this.state.stock_available
                      ? "btn btn-primary active"
                      : "btn btn-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="options"
                    id="option2"
                    autocomplete="off"
                    checked={!this.state.stock_available}
                    onClick={this.onChangeRadio}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="">Condition &ensp; </label>
              <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label
                  className={
                    this.state.condition === "New"
                      ? "btn btn-primary active"
                      : "btn btn-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="condition"
                    id="condition1"
                    autocomplete="off"
                    checked={this.state.condition === "New" ? true : false}
                    onClick={this.onChangeCondition}
                  />{" "}
                  New
                </label>
                <label
                  className={
                    this.state.condition === "Old"
                      ? "btn btn-primary active"
                      : "btn btn-secondary"
                  }
                >
                  <input
                    type="radio"
                    name="condition"
                    id="condition2"
                    autocomplete="off"
                    checked={this.state.condition === "Old" ? true : false}
                    onClick={this.onChangeCondition}
                  />{" "}
                  Old
                </label>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                className="form-control"
                id="publisher"
                placeholder="Enter Publisher's Name"
                value={this.state.publisher}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="genre">Genre</label>
              <input
                type="text"
                className="form-control"
                id="genre"
                placeholder="Enter Genre"
                value={this.state.genre}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group col-md-4">
              <label htmlFor="goodreads_rating">Ratings</label>
              <input
                type="number"
                className="form-control"
                id="goodreads_rating"
                placeholder="Enter Ratings"
                value={this.state.goodreads_rating}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Input Category"
                value={this.state.category}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="sub_category">Sub Category</label>
              <input
                type="text"
                className="form-control"
                id="sub_category"
                placeholder="Input Sub Category"
                value={this.state.sub_category}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category_tags">Category tags</label>
            <input
              type="text"
              className="form-control"
              id="category_tags"
              placeholder="Input Category Tags"
              value={this.state.category_tags.join(",")}
              onChange={this.handleCategoryTags}
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
