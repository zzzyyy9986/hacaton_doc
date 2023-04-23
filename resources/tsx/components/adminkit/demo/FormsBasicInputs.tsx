import React, { useState } from "react";

type Props = {
    contents: string;
};

/**
 * This is a demo component that is not included in the admin SPA by default. It is inserted from the laravel page
 * basicInputsHardRoute.blade.php, when the route calling that page is visited. This way, you can have different
 * components for different pages that are not hard-wired to the SPA and not routed by the SPA.
 */
const FormsBasicInputs = (props: Props) => {
    return (
        <>
            <h1 className="h3 mb-3">Basic Inputs</h1>
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Input</h5>
                        </div>
                        <div className="card-body">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Input"
                            />
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Textarea</h5>
                        </div>
                        <div className="card-body">
                            <textarea
                                className="form-control"
                                rows="2"
                                placeholder="Textarea"
                            ></textarea>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Checkboxes</h5>
                        </div>
                        <div className="card-body">
                            <div>
                                <label className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                    />
                                    <span className="form-check-label">
                                        Option one is this and that&mdash;be
                                        sure to include why it's great
                                    </span>
                                </label>
                                <label className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        disabled
                                    />
                                    <span className="form-check-label">
                                        Option two is disabled
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="option1"
                                    />
                                    <span className="form-check-label">1</span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="option2"
                                    />
                                    <span className="form-check-label">2</span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value="option3"
                                        disabled
                                    />
                                    <span className="form-check-label">3</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">
                                Custom checkboxes
                            </h5>
                        </div>
                        <div className="card-body">
                            <label className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                />
                                <span className="custom-control-label">
                                    Custom checkbox
                                </span>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    disabled
                                    checked
                                />
                                <span className="custom-control-label">
                                    Disabled custom checkbox
                                </span>
                            </label>
                            <label className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    disabled
                                />
                                <span className="custom-control-label">
                                    Disabled custom checkbox
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Custom selects</h5>
                        </div>
                        <div className="card-body">
                            <select className="custom-select mb-3">
                                <option selected>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                            <select className="custom-select" multiple>
                                <option>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Sizes</h5>
                        </div>
                        <div className="card-body">
                            <input
                                className="form-control form-control-lg mb-3"
                                type="text"
                                placeholder="Large input"
                            />
                            <input
                                className="form-control mb-3"
                                type="text"
                                placeholder="Medium input"
                            />
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                placeholder="Small input"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Radios</h5>
                        </div>
                        <div className="card-body">
                            <div>
                                <label className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="option1"
                                        name="radios-example"
                                        checked
                                    />
                                    <span className="form-check-label">
                                        Option one is this and that&mdash;be
                                        sure to include why it's great
                                    </span>
                                </label>
                                <label className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="option2"
                                        name="radios-example"
                                    />
                                    <span className="form-check-label">
                                        Option two can be something else and
                                        selecting it will deselect option one
                                    </span>
                                </label>
                                <label className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value="option3"
                                        name="radios-example"
                                        disabled
                                    />
                                    <span className="form-check-label">
                                        Option three is disabled
                                    </span>
                                </label>
                            </div>
                            <div>
                                <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inline-radios-example"
                                        value="option1"
                                    />
                                    <span className="form-check-label">1</span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inline-radios-example"
                                        value="option2"
                                    />
                                    <span className="form-check-label">2</span>
                                </label>
                                <label className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="inline-radios-example"
                                        value="option3"
                                        disabled
                                    />
                                    <span className="form-check-label">3</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Custom radios</h5>
                        </div>
                        <div className="card-body">
                            <label className="custom-control custom-radio">
                                <input
                                    name="custom-radio"
                                    type="radio"
                                    className="custom-control-input"
                                />
                                <span className="custom-control-label">
                                    Toggle this custom radio
                                </span>
                            </label>
                            <label className="custom-control custom-radio">
                                <input
                                    name="custom-radio"
                                    type="radio"
                                    className="custom-control-input"
                                />
                                <span className="custom-control-label">
                                    Or toggle this other custom radio
                                </span>
                            </label>
                            <fieldset disabled>
                                <label className="custom-control custom-radio">
                                    <input
                                        name="custom-radio-2"
                                        type="radio"
                                        className="custom-control-input"
                                        checked
                                    />
                                    <span className="custom-control-label">
                                        Disabled custom radio
                                    </span>
                                </label>
                                <label className="custom-control custom-radio">
                                    <input
                                        name="custom-radio-2"
                                        type="radio"
                                        className="custom-control-input"
                                    />
                                    <span className="custom-control-label">
                                        Other disabled custom radio
                                    </span>
                                </label>
                            </fieldset>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Switches</h5>
                        </div>
                        <div className="card-body">
                            <div className="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customSwitch1"
                                />
                                <label
                                    className="custom-control-label"
                                    for="customSwitch1"
                                >
                                    Toggle this switch element
                                </label>
                            </div>
                            <div className="custom-control custom-switch">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    disabled
                                    id="customSwitch2"
                                />
                                <label
                                    className="custom-control-label"
                                    for="customSwitch2"
                                >
                                    Disabled switch element
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Selects</h5>
                        </div>
                        <div className="card-body">
                            <select className="form-control mb-3">
                                <option selected>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>

                            <select multiple className="form-control">
                                <option>Open this select menu</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Disabled</h5>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="form-label">
                                    Disabled input
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Disabled input"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">
                                    Disabled select menu
                                </label>
                                <select className="form-control" disabled>
                                    <option>Disabled select</option>
                                </select>
                            </div>
                            <label className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    disabled
                                />
                                <span className="form-check-label">
                                    Can't check this
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title mb-0">Read only</h5>
                        </div>
                        <div className="card-body">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Readonly input"
                                readonly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormsBasicInputs;
