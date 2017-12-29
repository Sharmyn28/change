import React from "react";
import { Col } from "react-bootstrap";

const FormContact = () => {
    return (
        <Col lg={6} md={6}>
            <div className="slide__hero">
                <div role="form" className="wpcf7" id="wpcf7-f1235-p61-o1" lang="en-US" dir="ltr">
                    {/*<div className="screen-reader-response"></div>*/}
                    <form method="post" className="wpcf7-form" siq_id="autopick_9802">
                        {/*<div style={{ display: 'none' }}>
                            <input type="hidden" name="_wpcf7" value="1235" />
                            <input type="hidden" name="_wpcf7_version" value="4.7" />
                            <input type="hidden" name="_wpcf7_locale" value="en_US" />
                            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1235-p61-o1" />
                            <input type="hidden" name="_wpnonce" value="acdd764fd5" />
                            aria-required="true" aria-invalid="false"
    </div>*/}
                        <div className="contact-form">
                            <div className="contact-form__field-wrap"><label className="contact-form__label">Name</label>
                                <span className="wpcf7-form-control-wrap your-name">
                                    <input type="text" name="your-name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" required />
                                </span>
                            </div>
                            <div className="contact-form__field-wrap"><label className="contact-form__label">Email</label>
                                <span className="wpcf7-form-control-wrap your-email">
                                    <input type="email" name="your-email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" required/>
                                </span>
                            </div>
                            <div className="contact-form__field-wrap"><label className="contact-form__label">Subject</label>
                                <span className="wpcf7-form-control-wrap your-subject">
                                    <input type="text" name="your-subject" size="40" className="wpcf7-form-control wpcf7-text" required/>
                                </span>
                            </div>
                            <div className="contact-form__field-wrap"><label className="contact-form__label">Message</label>
                                <span className="wpcf7-form-control-wrap your-message">
                                    <textarea name="your-message" cols="40" rows="5" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" required></textarea>
                                </span>
                            </div>
                            <div className="contact-form__button-wrap">
                                <input type="submit" value="Send Message" className="wpcf7-form-control wpcf7-submit" />
                            </div>
                        </div>
                        {/*<div className="wpcf7-response-output wpcf7-display-none"></div>*/}
                    </form>
                </div>
            </div>
        </Col>
    )
}

export default FormContact;