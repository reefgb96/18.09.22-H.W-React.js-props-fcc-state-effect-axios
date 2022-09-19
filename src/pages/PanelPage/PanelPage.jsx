import { Fragment, useState, useEffect } from "react";
import BizCardComponent from "../../components/BizCardComponent";
import "./PanelPage.scss";

let initialBizCardArray = [
  {
    name: "test1",
    img: "https://parrotdm.com/wp-content/uploads/2020/10/27255-scaled.jpg",
    desc: "asdfa43634w56erthdrg3453w464w53 5436w4356 w345rwq3 btw54 yw54 yw45yw345y",
    id: "12312423532452",
  },
  {
    name: "test2",
    img: "https://parrotdm.com/wp-content/uploads/2020/10/27255-scaled.jpg",
    desc: "asdfa43634w56erthdrg3453w464w53 5436w4356 w345rwq3 btw54 yw54 yw45yw345y",
    id: "12312423532453",
  },
  {
    name: "test3",
    img: "https://parrotdm.com/wp-content/uploads/2020/10/27255-scaled.jpg",
    desc: "asdfa43634w56erthdrg3453w464w53 5436w4356 w345rwq3 btw54 yw54 yw45yw345y",
    id: "12312423532454",
  },
];
const PanelPage = () => {
  const [findInput, setFindInput] = useState("");
  const [bizCardArr, setBizCardArr] = useState(initialBizCardArray);

  useEffect(() => {
    let regex = new RegExp(findInput, "i"); //create regex tamplate that will try to find the value and wil ignore case
    let bizCardArrCopy = JSON.parse(JSON.stringify(initialBizCardArray)); //cloneDeep
    // you cant change the array directly from the state, so we must do cloneDeep
    bizCardArrCopy = bizCardArrCopy.filter((item) => regex.test(item.name));
    setBizCardArr(bizCardArrCopy);
  }, [findInput]);

  const handleFindInputChange = (ev) => {
    // setTimeout(() => {
    //   setFindInput("1");
    // }, 1000);
    setFindInput(ev.target.value);
  };

  const handleBizCardDelete = (id) => {
    initialBizCardArray = initialBizCardArray.filter((item) => item.id !== id);
    setBizCardArr(initialBizCardArray);
  };

  return (
    <Fragment>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={findInput}
          onChange={handleFindInputChange}
        />
        <label htmlFor="floatingInput">Find</label>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {bizCardArr.map((item) => (
          <BizCardComponent
            key={"biz" + item.id}
            name={item.name}
            img={item.img}
            desc={item.desc}
            id={item.id}
            onDelete={handleBizCardDelete}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default PanelPage;
