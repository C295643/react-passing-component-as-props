import "./styles.scss";
import { ButtonWithIconElement } from "./components/ButtonWithIconElement";
import { ButtonWithIconComponent } from "./components/ButtonWithIconComponent";
import { ButtonWithIconFunction } from "./components/ButtonWithIconFunction";
import CheckBox from "@mui/icons-material/CheckBox";

const CheckBoxHoverIcon = ({
  attributes,
  isHovered = true,
}: {
  attributes?: object;
  isHovered?: boolean | true;
}) => {
  return <CheckBox {...attributes} color={isHovered ? "primary" : "warning"} />;
};

function App() {
  return (
    <div style={{}}>
      <ButtonWithIconElement icon={<CheckBoxHoverIcon />}>
        Button with icon as an Element
      </ButtonWithIconElement>
      <br />

      <ButtonWithIconComponent Icon={CheckBoxHoverIcon}>
        Button with icon as a Component
      </ButtonWithIconComponent>
      <br />

      <ButtonWithIconFunction
        iconFunction={(attributes) => (
          <CheckBox
            fontSize={attributes.fontSize}
            color={attributes.isHovered ? "primary" : "warning"}
          />
        )}
      >
        Button with icon as a Function
      </ButtonWithIconFunction>
    </div>
  );
}

export default App;
