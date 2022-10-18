import React from "react";
import "./MainContent.css";

export default function MainContent() {
  return (
    <div className="MainContent">
      <div className="code">
        <p>
          React provides a collection of life cycle events (or callback API) to
          attach functionality, which will to be executed during the various
          stages of the component. The visualization of life cycle and the
          sequence in which the life cycle events (APIs) are invoked as shown
          below.
        </p>
        <br />
        <br />
        <strong>Methods</strong>
        <br />
        <p>
          <strong>constructor()</strong> − Invoked during the initial
          construction phase of the React component. Used to set initial state
          and properties of the component.
          <br />
          <strong>render() </strong> − Invoked after the construction of the
          component is completed. It renders the component in the virtual DOM
          instance. This is specified as mounting of the component in the DOM
          tree.
          <br />
          <strong>componentDidMount() </strong> − Invoked after the initial
          mounting of the component in the DOM tree. It is the good place to
          call API endpoints and to do network requests. In our clock component,
          setInterval function can be set here to update the state (current date
          and time) for every second.
        </p>
        <p className="code_1">
          componentDidMount()&#123;
          <br />
          this.timeFn = setInterval( () =&#9002;this.setTime(), 1000); <br />
          &#125;
        </p>
        <p>
          componentDidUpdate() − Similar to ComponentDidMount() but invoked
          during the update phase. Network request can be done during this phase
          but only when there is difference in component’s current and previous
          properties. The signature of the API is as follows −
        </p>
        <p className="code_1">
          componentDidUpdate(prevProps, prevState, snapshot)
        </p>
        <p className="code_2">
          prevProps − Previous properties of the component.
          <br /> prevState − Previous state of the component.
          <br /> snapshot − Current rendered content.
        </p>
      </div>
      <p>
        <strong>componentWillUnmount()</strong> − Invoked after the component is
        unmounted from the DOM. This is the good place to clean up the object.
        In our clock example, we can stop updating the date and time in this
        phase
      </p>
      <p className="code_1">
        componentDidMount() &#123;
        <br /> this.timeFn = setInterval( () => this.setTime(), 1000);
        <br /> &#125;
      </p>
      <p>
        <strong>shouldComponentUpdate()</strong> − Invoked during the update
        phase. Used to specify whether the component should update or not. If it
        returns false, then the update will not happen.
        <br /> The signature is as follows −
      </p>
      <p className="code_1">shouldComponentUpdate(nextProps, nextState)</p>
      <p className="code_2">
        nextProps − Upcoming properties of the component.
        <br />
        nextState − Upcoming state of the component
      </p>
    </div>
  );
}
