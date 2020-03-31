import React, { useState, Fragment } from "react";
import "./Info.scss";

export default function Info(props) {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <button className="Info-button" onClick={() => setVisible(!visible)}>
        Info
      </button>
      {visible && (
        <div className="Info">
          <strong>Information:</strong>
          <ul>
            <li>
              Clicking on a column heading lets you sort the column in ascending
              order, click again for descending order{" "}
            </li>
            <li>
              Holding shift while clicking on several column headings at once
              allows you sort the data by multiple columns
            </li>
            <li>
              Typing in the search box allows you to filter all the results by
              name
            </li>
            <li>
              Clicking the column name checkboxes lets you choose which columns
              to show
            </li>
          </ul>
          <button className="Close-button" onClick={() => setVisible(false)}>
            Close
          </button>
        </div>
      )}
    </Fragment>
  );
}
