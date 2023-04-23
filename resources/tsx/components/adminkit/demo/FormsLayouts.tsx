import React, { useState } from "react";

type Props = {
    contents: string;
};

const FormsLayouts = (props: Props) => {
    return (
        <>
            <h1 className="h3 mb-3">Form Layouts</h1>
            <div className="row">
                <div className="col-12 col-xl-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Basic form</h5>
                            <h6 className="card-subtitle text-muted">
                                Default Bootstrap form layout.
                            </h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">
                                        Textarea
                                    </label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Textarea"
                                        rows="1"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label className="form-label w-100">
                                        File input
                                    </label>
                                    <input type="file" />
                                    <small className="form-text text-muted">
                                        Example block-level help text here.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                        />
                                        <span className="custom-control-label">
                                            Check me out
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-xl-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Horizontal form</h5>
                            <h6 className="card-subtitle text-muted">
                                Horizontal Bootstrap layout.
                            </h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 text-sm-right">
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 text-sm-right">
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 text-sm-right">
                                        Textarea
                                    </label>
                                    <div className="col-sm-10">
                                        <textarea
                                            className="form-control"
                                            placeholder="Textarea"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                </div>
                                <fieldset className="form-group">
                                    <div className="row">
                                        <label className="col-form-label col-sm-2 text-sm-right pt-sm-0">
                                            Radios
                                        </label>
                                        <div className="col-sm-10">
                                            <div className="custom-controls-stacked">
                                                <label className="custom-control custom-radio">
                                                    <input
                                                        name="custom-radio-3"
                                                        type="radio"
                                                        className="custom-control-input"
                                                        checked
                                                    />
                                                    <span className="custom-control-label">
                                                        Default radio
                                                    </span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input
                                                        name="custom-radio-3"
                                                        type="radio"
                                                        className="custom-control-input"
                                                    />
                                                    <span className="custom-control-label">
                                                        Second default radio
                                                    </span>
                                                </label>
                                                <label className="custom-control custom-radio">
                                                    <input
                                                        name="custom-radio-3"
                                                        type="radio"
                                                        className="custom-control-input"
                                                        disabled
                                                    />
                                                    <span className="custom-control-label">
                                                        Disabled radio
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="form-group row">
                                    <label className="col-form-label col-sm-2 text-sm-right pt-sm-0">
                                        Checkbox
                                    </label>
                                    <div className="col-sm-10">
                                        <label className="custom-control custom-checkbox m-0">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                            />
                                            <span className="custom-control-label">
                                                Check me out
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-10 ml-sm-auto">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Form row</h5>
                            <h6 className="card-subtitle text-muted">
                                Bootstrap column layout.
                            </h6>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputEmail4">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="inputPassword4">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div className="form-group">
                                    <label for="inputAddress2">Address 2</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress2"
                                        placeholder="Apartment, studio, or floor"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputCity">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label for="inputState">State</label>
                                        <select
                                            id="inputState"
                                            className="form-control"
                                        >
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label for="inputZip">Zip</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputZip"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-checkbox m-0">
                                        <input
                                            type="checkbox"
                                            className="custom-control-input"
                                        />
                                        <span className="custom-control-label">
                                            Check me out
                                        </span>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Inline form</h5>
                            <h6 className="card-subtitle text-muted">
                                Single horizontal row.
                            </h6>
                        </div>
                        <div className="card-body">
                            <form className="form-inline">
                                <label
                                    className="sr-only"
                                    for="inlineFormInputName2"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control mb-2 mr-sm-2"
                                    id="inlineFormInputName2"
                                    placeholder="Jane Doe"
                                />

                                <label
                                    className="sr-only"
                                    for="inlineFormInputGroupUsername2"
                                >
                                    Username
                                </label>
                                <div className="input-group mb-2 mr-sm-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            @
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inlineFormInputGroupUsername2"
                                        placeholder="Username"
                                    />
                                </div>

                                <div className="custom-control custom-checkbox mb-1 mr-sm-2">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customControlInline"
                                    />
                                    <label
                                        className="custom-control-label"
                                        for="customControlInline"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary mb-2"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormsLayouts;
