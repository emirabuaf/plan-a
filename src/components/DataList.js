import React from "react";

const DataList = ({ data }) => {
  return (
    <div>
      <fieldset>
        <legend>Density:</legend>
        {data && data.length !== 0 ? (
          <div className="titles">
            <h3>Average</h3>
            <h3>Day</h3>
          </div>
        ) : (
          <h3>No data available</h3>
        )}

        {data &&
          data.map((item, index) => (
            <div key={index} className="content">
              <div>{item.average.toFixed(6)}</div>
              <div>{item.start.substring(0, 10)}</div>
            </div>
          ))}
      </fieldset>
    </div>
  );
};

export { DataList };
