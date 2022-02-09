import React, { useEffect, useState } from "react";
import {myApi} from "../../api/API";
import EditorPage from "../../components/editorpage/EditorPage";
import Button from "../../components/buttons/buttonForGenerate/Button";
import { useHistory } from "react-router-dom";
import "./userButtonsGenerate.css";
import NormalCard from "../../components/cards/normalCard/NormalCard";
import { useAuth } from "../../contexts/AuthContext";

function UserButtonsGenerate(props) {
  const [componentId, setComponentId] = useState(props.match.params.id);
  // const [type, setType] = useState(props.match.params.type);
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
    console.log(props.match.params.id);
    const handleComponentById = async () => {
      const id = componentId;
      const token = localStorage.getItem('token');
      try {
        // const response = await myApi.get(`/savedcomponents/${componentId}`, {data:{},  headers: {'content-type': 'application/json' }});
        // const response = await myApi(token).get(`savedcomponents/${componentId}`);
        const res = await myApi(localStorage.getItem('token')).get("/savedcomponents");
        let component=res.data.filter((component)=>{
         return component._id === componentId;
        })
        component=component[0];
        
        setType(component.category);
        setComponentPropsArray(component.propsArr);
        //creating the componentSize object
        setComponentSize({
          componentWidth: component.propsArr[1],
          componentHeight: component.propsArr[2],
          componentPadding: component.propsArr[3],
          componentMargin: component.propsArr[4],
        });
        //creating the selectedBoreder object
        setSelectedBoreder({
          borderWidth: component.propsArr[5],
          borederStyle: component.propsArr[6],
          borderRadius: component.propsArr[12],
        });
        //creating the boxShadow object
        setBoxShadow({
          hOffSet: component.propsArr[8],
          vOffSet: component.propsArr[9],
          blur: component.propsArr[10],
        });
        setSelectedColorInner(component.propsArr[13])

        // setType(response.data.category);
        // setComponentPropsArray(response.data.propsArr);
        // //creating the componentSize object
        // setComponentSize({
        //   componentWidth: response.data.propsArr[1],
        //   componentHeight: response.data.propsArr[2],
        //   componentPadding: response.data.propsArr[3],
        //   componentMargin: response.data.propsArr[4],
        // });
        // //creating the selectedBoreder object
        // setSelectedBoreder({
        //   borderWidth: response.data.propsArr[5],
        //   borederStyle: response.data.propsArr[6],
        //   borderRadius: response.data.propsArr[12],
        // });
        // //creating the boxShadow object
        // setBoxShadow({
        //   hOffSet: response.data.propsArr[8],
        //   vOffSet: response.data.propsArr[9],
        //   blur: response.data.propsArr[10],
        // });
        // setSelectedColorInner(response.data.propsArr[13])
      } catch (e) {
        console.table(e);
        // setError(e.response);
        console.log(error);
      }
    };

    handleComponentById();
  }, []);

  //Delete component by id
  const handleDeleteComponent = async () => {
    const id = componentId;

    try {
      const response = await myApi(localStorage.getItem('token')).delete(`/savedcomponents/${id}`);

      console.log("update component by id: ", response);
      history.push("/user-profile");
    } catch (e) {
      // setError(e.response.data.message);
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
          {type==="cards" && <NormalCard
          color={componentPropsArray[0]}
          componentSize={componentSize}
          borderColor={componentPropsArray[7]}
          border={selectedBoreder}
          boxShadow={boxShadow}
          shadowColor={componentPropsArray[11]}
          selectedColorInner={componentPropsArray[13]}
          />}
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
