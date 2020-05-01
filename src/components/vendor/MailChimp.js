import React, { useState, useReducer } from "react"
import styled from "styled-components"
import Form from "../form/Form"
import FormList from "../form/FormList"
import InputBox from "../form/InputBox"
import Label from "../form/Label"
import GDPR from "../form/GDPR"
import ListItem from "../ui/lists/ListItem"
import CheckBox from "../form/CheckBox"
import Emphasis from "../contentContainers/Emphasis"
import { setColor } from "../../styles/styleHelpers"
import Button from "../../components/ui/Button"
import TextLink from "../../components/ui/TextLink"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const MailChimp = ({ emphasisColor }) => {
  const [result, setResult] = useState(null);

  const initialState = {
    email: "",
    firstName: "",
    oneToOne: false,
    jlptBootcamp: false,
    beginnersCourse: false,
    beginnersBootcamp: false,
    onlineConversationClub: false,
    marketingByEmail: false,
  }

  function reducer(state, { field, value }) {
    return {
      ...state,
      [field]: value,
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value })
  }

  const onToggle = e => {
    dispatch({ field: e.target.name, value: !state[e.target.name] })
  }

  const {
    email,
    firstName,
    oneToOne,
    jlptBootcamp,
    beginnersCourse,
    beginnersBootcamp,
    onlineConversationClub,
    marketingByEmail,
  } = state


  // TODO: make less awful :) 
  const buildMailChimpObject  = () => {
    const mailchimpObject = {
      FNAME: firstName
    };
    if (oneToOne) {
      mailchimpObject["group[1891][4]"] = "4"
    } 
    if (jlptBootcamp) {
      mailchimpObject["group[1891][8]"] = "8"
    }
    if (beginnersCourse) {
      mailchimpObject["group[1891][16]"] = "16"
    }
    if (beginnersBootcamp) {
      mailchimpObject["group[1891][32]"] = "32"
    }
    if (onlineConversationClub) {
      mailchimpObject["group[1891][64]"] = "64"
    }
    if (marketingByEmail) {
      mailchimpObject["gdpr[27377]"] = "Y"
    }
    return mailchimpObject
  }
  const handleSubmit = async () => {
    const mailchimpResult = await addToMailchimp(email, buildMailChimpObject());
    setResult(mailchimpResult);
    console.log(mailchimpResult);
  }


 
  return (
    <MailChimpWrapper>
      <div id="mc_embed_signup">
        <Form
          //   action="https://nihongoscotland.us16.list-manage.com/subscribe/post?u=17e930ef2f11232d3ac0dca1e&amp;id=200df291c9"
          // method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <Label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </Label>
              <InputBox
                type="email"
                value={email}
                name="email"
                id="mce-EMAIL"
                onChange={onChange}
                required
              />
            </div>
            <div className="mc-field-group">
              <Label htmlFor="mce-FNAME">First Name </Label>
              <InputBox
                type="text"
                value={firstName}
                name="firstName"
                className=""
                id="mce-FNAME"
                onChange={onChange}
              />
            </div>
            <Emphasis
              className="mc-field-group input-group"
              padding="1rem"
              color={emphasisColor}
            >
              <MailChimpLegend>
                What would you like to hear about?
              </MailChimpLegend>
              <FormList flex={true}>
                <ListItem flex={true}>
                  <CheckBox
                    value={oneToOne}
                    name="oneToOne"
                    id="mce-group[1891]-1891-0"
                    onChange={onToggle}
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-0"
                    display="inline-block"
                  >
                    1-1 lessons
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value={jlptBootcamp}
                    name="jlptBootcamp"
                    id="mce-group[1891]-1891-1"
                    onChange={onToggle}
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-1"
                    display="inline-block"
                  >
                    JLPT Bootcamps
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value={beginnersCourse}
                    name="beginnersCourse"
                    id="mce-group[1891]-1891-2"
                    onChange={onToggle}
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-2"
                    display="inline-block"
                  >
                    Beginner courses
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value={beginnersBootcamp}
                    name="beginnersBootcamp"
                    id="mce-group[1891]-1891-3"
                    onChange={onToggle}
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-3"
                    display="inline-block"
                  >
                    Beginner Bootcamps
                  </Label>
                </ListItem>
                <ListItem flex={true}>
                  <CheckBox
                    value={onlineConversationClub}
                    name="onlineConversationClub"
                    id="mce-group[1891]-1891-4"
                    onChange={onToggle}
                  />
                  <Label
                    htmlFor="mce-group[1891]-1891-4"
                    display="inline-block"
                  >
                    Online Japanese Conversation Club Membership
                  </Label>
                </ListItem>
              </FormList>
            </Emphasis>
            <GDPR
              id="mergeRow-gdpr"
              className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div className="content__gdpr">
                <Label>
                  <p style={{ marginBottom: "0.25rem" }}>
                    How would you like to hear from us?
                  </p>
                </Label>
                <fieldset
                  className="mc_fieldset gdprRequired mc-field-group"
                  name="interestgroup_field"
                >
                  <Label className="checkbox subfield" htmlFor="gdpr_27377">
                    <CheckBox
                      id="gdpr_27377"
                      name="marketingByEmail"
                      value={marketingByEmail}
                      className="av-checkbox gdpr"
                      onChange={onToggle}
                    />
                    <span>Contact me by Email</span>{" "}
                  </Label>
                  {/* <Label className="checkbox subfield" htmlFor="gdpr_27385">
                    <CheckBox
                      id="gdpr_27385"
                      name="gdpr[27385]"
                      value="Y"
                      className="av-checkbox gdpr"
                    />
                    <span>Contact me via Customized Online Advertising</span>{" "}
                  </Label> */}
                </fieldset>
              </div>
              <div className="content__gdprLegal">
                <p style={{ fontSize: "0.6rem", marginTop: "0.25rem" }}>
                  We use Mailchimp as our marketing platform. By clicking below
                  to subscribe, you acknowledge that your information will be
                  transferred to Mailchimp for processing.{" "}
                  <TextLink
                    link=" https://mailchimp.com/legal/"
                    isExternal
                    isOnBrandBg
                  >
                    Learn more about Mailchimp's privacy practices here.
                  </TextLink>
                </p>
              </div>
            </GDPR>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <InputBox
                type="text"
                name="b_17e930ef2f11232d3ac0dca1e_200df291c9"
                tabindex="-1"
                value=""
                onChange={onToggle}
              />
            </div>
            {/* <div className="clear"> */}
            <Button
              type="button"
              name="subscribe"
              id="mc-embedded-subscribe"
              isAction
              isCentered
              onClick={handleSubmit}
            >
              Subscribe
            </Button>
            {result.result === "success" && <p>{result.msg}</p>}
            {/* </div> */}
            <p style={{ fontSize: "0.6rem", fontFamily: "Poppins-Regular" }}>
              You can unsubscribe at any time by clicking the link in the footer
              of our emails. For information about our privacy practices, please
              visit the{" "}
              <TextLink
                link="https://www.nihongoconnection.com"
                isExternal
                isOnBrandBg
              >
                Nihongo Connection website
              </TextLink>
            </p>
          </div>
        </Form>
      </div>
    </MailChimpWrapper>
  )
}

const MailChimpWrapper = styled.div``

const MailChimpLegend = styled.legend`
  font-size: 0.8rem;
  font-family: "Poppins-Regular";
  margin-bottom: 0.5rem;
`

export default MailChimp
