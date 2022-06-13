/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Regform() {
  //   const [fname, setfname] = useState("");
  //   const [lname, setlname] = useState("");
  //   const [email, setemail] = useState("");
  //   const [mobile, setmobile] = useState("");
  //   const [gender, setgender] = useState("");
  //   const [address, setaddress] = useState("");
  const [contactInfo, setContactInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(contactInfo);
  };

  return (
    <div
      style={{
        // textAlign: "center",
        // flex: 1,
        // justifyContent: "space-between",
        // alignContent: "center",
        // alignSelf: "center",
        // alignItems: "start",
        color: "white",
        fontFamily: "cursive",
        background: "grey",
        position: "absolute",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label htmlFor="fname">First Name </label>
            </td>
            <td>
              <input
                onChange={(e) =>
                  setContactInfo({ ...contactInfo, fname: e.target.value })
                }
                type="text"
                value={contactInfo.fname}
                name="fname"
              />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Last Name </label>
            </td>
            <td>
              <input type="text" name="lname" value={contactInfo.lname} />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Email ID </label>
            </td>
            <td>
              <input type="text" name="email" value={contactInfo.email} />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Mobile Number </label>
            </td>
            <td>
              <input type="tel" name="mobile" value={contactInfo.mobile} />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label> Gender </label>
            </td>
            <td>
              <input type="radio" name="male" value="Male" />
              <label for="male">Male</label>
              <input type="radio" name="female" value="Female" />
              <label for="female">Female</label>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Address: </label>
            </td>
            <td>
              <textarea name="address" placeholder="Enter Address here" />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>City: </label>
            </td>
            <td>
              <input type="text" name="city" />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Pincode: </label>
            </td>
            <td>
              <input type="number" name="pincode" />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Country: </label>{" "}
            </td>
            <td>
              <input type="text" name="country" />{" "}
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Hobbies: </label>
            </td>
            <td>
              <input type="radio" name="Drawing" value="Drawing" />
              <label for="Drawing">Drawing</label>
              <input type="radio" name="Singing" value="Singing" />
              <label for="Singing">Singing</label>
              <input type="radio" name="Dancing" value="Dancing" />
              <label for="Dancing">Dancing</label>
              <input type="radio" name="Painting" value="Painting" />
              <label for="Painting">Painting</label>
              <br />
              <input type="radio" name="Others" value="Others" />
              <label for="Others">Others, Specify: </label>
              <input type="text" name="Others" />
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Qualification: </label>
            </td>
            <td>
              <input
                type="checkbox"
                id="High School (10th)"
                name="High School (10th)"
                value="10th"
              />
              <label for="High School (10th)"> High School (10th)</label>

              <input
                type="checkbox"
                id="Higher School (12th)"
                name="Higher School (12th)"
                value="12th"
              />
              <label for="Higher School (12th)"> Higher School (12th)</label>
              <br />
              <input
                type="checkbox"
                id="Graduation"
                name="Graduation"
                value="graduation"
              />
              <label for="Graduation"> Graduation</label>

              <input
                type="checkbox"
                id="PostGraduation"
                name="Post Graduation"
                value="postgrad"
              />
              <label for="PostGraduation"> Post Graduation</label>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <label>Course Applied: </label>
            </td>
            <td>
              <input type="checkbox" id="BCA" name="BCA" value="BCA" />
              <label for="BCA"> BCA</label>

              <input type="checkbox" id="BCom" name="BCom" value="BCom" />
              <label for="BCom"> BCom</label>

              <input type="checkbox" id="BA" name="BA" value="BA" />
              <label for="BA"> BA</label>
              <br />
              <input type="checkbox" id="MBA" name="MBA" value="MBA" />
              <label for="MBA"> MBA</label>

              <input type="checkbox" id="MCA" name="MCA" value="MCA" />
              <label for="MCA"> MCA</label>
            </td>
          </tr>
        </table>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Regform;
