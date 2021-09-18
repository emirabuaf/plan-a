import React, { useState } from "react";

const Form = ({ values, setValues, setData, setShow }) => {
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      values.product !== null &&
      values.country !== null &&
      values.startDate !== null &&
      values.endDate !== null
    ) {
      setError(false);
      setShow(true);
      await fetch(
        `https://api.v2.emissions-api.org/api/v2/${values.product}/average.json?country=${values.country}&begin=${values.startDate}&end=${values.endDate}&limit=100&offset=0`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch(() => setError(true));
    } else {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleClick}>
      <fieldset>
        <label id="country">Country:</label>
        <select
          aria-labelledby="country"
          className="input"
          name="country"
          onChange={handleInputChange}
        >
          <option hidden value>
            -- Select a country --
          </option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
          <option value="GB">United Kingdom</option>
        </select>
        <br />
        <label id="ghgtype">GHG Type:</label>
        <select
          aria-labelledby="ghgtype"
          className="input"
          name="product"
          onChange={handleInputChange}
        >
          <option hidden value>
            -- Select a product --
          </option>
          <option value="methane">Methane</option>
          <option value="carbonmonoxide">Carbonmonoxide</option>
          <option value="ozone">Ozone</option>
          <option value="nitrogendioxide">Nitrogendioxide</option>
        </select>
        <br />
        <label id="startDate">Start Date:</label>
        <input
          aria-labelledby="startDate"
          className="input"
          onChange={handleInputChange}
          type="date"
          name="startDate"
        />
        <br />
        <label id="endDate">End Date:</label>
        <input
          aria-labelledby="endDate"
          className="input"
          onChange={handleInputChange}
          type="date"
          name="endDate"
        />
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
        {error ? <h4>Please enter all the fields!</h4> : null}
      </fieldset>
    </form>
  );
};

export { Form };
