import React, { useEffect, useState } from "react";
import { myApi } from "../../api/API";
import EditorPage from "../../components/editorpage/EditorPage";
import Button from "../../components/buttons/buttonForGenerate/Button";
import { useHistory } from "react-router-dom";
import "./userButtonsGenerate.css";
import NormalCard from "../../components/cards/normalCard/NormalCard";
import { useAuth } from "../../contexts/AuthContext";

function UserButtonsGenerate(props) {
  const [type, setType] = useState("");
  const [componentPropsArray, setComponentPropsArray] = useState([]);
  const [componentSize, setComponentSize] = useState({});
  const [selectedBoreder, setSelectedBoreder] = useState({});
  const [boxShadow, setBoxShadow] = useState({});
  const [selectedColorInner, setSelectedColorInner] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentToken } = useAuth();

  //get component by id and set the state objects
  useEffect(() => {
    setType(props.userComponent.category);
    setComponentPropsArray(props.userComponent.propsArr);
    //creating the componentSize object
    setComponentSize({
      componentWidth: props.userComponent.propsArr[1],
      componentHeight: props.userComponent.propsArr[2],
      componentPadding: props.userComponent.propsArr[3],
      componentMargin: props.userComponent.propsArr[4],
    });
    //creating the selectedBoreder object
    setSelectedBoreder({
      borderWidth: props.userComponent.propsArr[5],
      borederStyle: props.userComponent.propsArr[6],
      borderRadius: props.userComponent.propsArr[12],
    });
    //creating the boxShadow object
    setBoxShadow({
      hOffSet: props.userComponent.propsArr[8],
      vOffSet: props.userComponent.propsArr[9],
      blur: props.userComponent.propsArr[10],
    });
    setSelectedColorInner(props.userComponent.propsArr[13]);
  }, []);

  // Delete component by id
  const handleDeleteComponent = async () => {
    const id = props.userComponent._id;

    try {
      const response = await myApi(localStorage.getItem("token")).delete(
        `/savedcomponents/${id}`
      );

      console.log("update component by id: ", response);
      history.push("/user-profile");

    } catch (e) {

      setError(e.response.data.message);
      
    }
  };

  return (
    <div>
      <div>
        <div className="user-show_btn_container">
          {/*show the component depends on it's type: {buttons/cards}*/}
          {type === "buttons" && (
            <div className="user-show_btn">
              <Button
                color={componentPropsArray[0]}
                componentSize={componentSize}
                borderColor={componentPropsArray[7]}
                border={selectedBoreder}
                boxShadow={boxShadow}
                shadowColor={componentPropsArray[11]}
              />
            </div>
          )}
          {type === "cards" && (
            <NormalCard
              color={componentPropsArray[0]}
              componentSize={componentSize}
              borderColor={componentPropsArray[7]}
              border={selectedBoreder}
              boxShadow={boxShadow}
              shadowColor={componentPropsArray[11]}
              selectedColorInner={componentPropsArray[13]}
            />
          )}
        </div>
        <div>
          <div className="component-delete_btn">
            <button onClick={handleDeleteComponent}>Delete component</button>
          </div>
          <EditorPage
            color={componentPropsArray[0]}
            componentSize={componentSize}
            borderColor={componentPropsArray[7]}
            border={selectedBoreder}
            boxShadow={boxShadow}
            shadowColor={componentPropsArray[11]}
            selectedColorInner={componentPropsArray[13]}
            showSave={false}
            type={type}
          />
        </div>
      </div>
    </div>
  );
}

export default UserButtonsGenerate;
