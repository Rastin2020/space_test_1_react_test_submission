import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const data = [
  { name: "Item A", price: 125 },
  { name: "Item B", price: 230 },
  { name: "Item C", price: 295 },
  { name: "Item D", price: 245 },
  { name: "Item E", price: 900 },
  { name: "Item F", price: 875 },
  { name: "Item G", price: 235 },
  { name: "Item H", price: 400 },
];

const sortByDescendingPrice = (inputArray, limitDisplay = 0) => {
  let arrayResult = inputArray;
  arrayResult.sort((a, b) => a.price - b.price);

  if (limitDisplay === 0) {
    return arrayResult;
  } else {
    let arrayResultWithMaxDisplay = [];
    for (let i = 0; i < limitDisplay; i++) {
      arrayResultWithMaxDisplay.push(arrayResult[i]);
    }

    return arrayResultWithMaxDisplay;
  }
};

const Test = () => {
  const [dataArray, setDataArray] = useState(sortByDescendingPrice(data, 5));
  const [isCollapsed, setIsCollapsed] = useState(true);

  function viewAll() {
    setDataArray(sortByDescendingPrice(data, 0));
    setIsCollapsed(false);
  }

  function viewWithLimit() {
    setDataArray(sortByDescendingPrice(data, 5));
    setIsCollapsed(true);
  }

  const list = dataArray.map((element) => (
    <li className="vertical-margins" key={element.name}>
      <Card>
        <Card.Header>{element.name}</Card.Header>
        <Card.Body>
          <Button variant="primary">£{element.price}</Button>
        </Card.Body>
      </Card>
    </li>
  ));

  if (isCollapsed === true) {
    return (
      <div>
        <ul className="no-list-dots">{list}</ul>
        <button type="button" className="btn btn-primary general-margin-large button-right-align" onClick={viewAll}>View All</button>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="no-list-dots">{list}</ul>
        <button type="button" className="btn btn-primary general-margin-large button-right-align" onClick={viewWithLimit}>Collapse</button>
      </div>
    );
  }
};

export default Test;
