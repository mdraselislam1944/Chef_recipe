/**@format
 **/
/* eslint-disable no-unused-vars */

import React from "react";
import { Table } from "react-bootstrap";
import {
  FaCheck,
  FaHandPointRight,
  FaQuora,
  FaRocketchat,
} from "react-icons/fa";

const Blocks = () => {
  return (
    <div className="container p-5">
      <p>
        <small className="fs-3">
          {" "}
          <FaQuora></FaQuora> 1. Tell us the differences between uncontrolled
          and controlled components.
        </small>
        <p>
          <FaRocketchat></FaRocketchat>{" "}
          <small>
            The DOM is very similar to HTML but is not exactly the same as the
            HTML source document of the webpage. You can check it by yourself:
            inspecting the page DOM and viewing the page source can be very
            different. You might find elements on the DOM that you won’t find in
            the source or vice-versa. This is because HTML elements can be
            created, deleted and modified by Javascript. For example, clicking
            on a button in a page can make an image not present in the HTML
            source appear. However, you will find this image in the DOM.
            Controlled components or inputs are components whose value is tied
            to the React state of the components whereas uncontrolled components
            are the ones whose value is controlled or stored in the DOM directly
            and can only be accessed from the DOM.
          </small>
        </p>
      </p>
      <p>
        <small className="fs-3">
          {" "}
          <FaQuora></FaQuora> 2. How to validate React props using PropTypes ?
        </small>
        <p>
          <FaRocketchat></FaRocketchat>{" "}
          <small>
            When developing a React application, you’ll need to structure and
            define your props to avoid bugs and errors. Just like a function
            might have mandatory arguments, a React component might require a
            prop to be defined, otherwise, it will not render properly.
            Forgetting to pass a required prop into a component that needs it
            could cause your app to behave unexpectedly.Prior to React v15.5.0,
            a utility called PropTypes was available as part of the React
            package, which provided a lot of validators for configuring type
            definitions for component props. You could access it with
            React.PropTypes.
          </small>
        </p>
      </p>
      <p>
        <small className="fs-3">
          {" "}
          <FaQuora></FaQuora> 3. Tell us the difference between nodejs and
          express js.
        </small>
        <p>
          <FaRocketchat></FaRocketchat>
          <p>Difference between nodejs and express js.</p>
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Feature</th>
          <th>Express.js</th>
          <th>Node.js</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Usage</td>
          <td>It is used to build web-apps using approaches and principles of Node.js.</td>
          <td>It is used to build server-side, input-output, event-driven apps.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Level of features</td>
          <td>More features than Node.js.</td>
          <td>Fewer features.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Building Block</td>
          <td>It is built on Node.js.</td>
          <td>It is built on Google’s V8 engine.</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Written in</td>
          <td>JavaScript</td>
          <td>C, C++, JavaScript</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Framework/Platform</td>
          <td>Framework based on Node.js.</td>
          <td>Run-time platform or environment designed for server-side execution of JavaScript.</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Controllers</td>
          <td>Controllers are provided.</td>
          <td>It is built on Google’s V8 engine.</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Coding time</td>
          <td>It requires less coding time.</td>
          <td>It requires more coding time.</td>
        </tr>
      </tbody>
    </Table>
        </div>
        </p>
      </p>
      <p>
        <small className="fs-3">
          {" "}
          <FaQuora></FaQuora> 4. What is a custom hook, and why will you create
          a custom hook?
        </small>
        <p>
          <FaRocketchat></FaRocketchat>{" "}
          <small>
            Custom React JS hooks are reusable functions that a React JS
            software developer can use to add special and unique functionality
            to the React applications. Usually, if there is a requirement to add
            a feature, one can install a third-party library and solve the
            problem. But what if there is no such library with hooks that can be
            used? This problem is solved by using custom React JS hooks.
            <ul>
              A custom hook is a special JavaScript function whose name starts
              with ‘use’ and can be used to call other hooks. Let’s take a look
              at some major differences between a custom React JS hook and React
              JS components:
              <li>A custom hook does not require a specific signature.</li>
              <li>
                A software developer can choose what argument the custom hook
                has and what should the argument return.
              </li>
              <li>A custom hook always starts with the name ‘use’.</li>
            </ul>
          </small>
        </p>
      </p>
    </div>
  );
};

export default Blocks;
