import Header from "../headphones/Header";
import Earphones from "./Earphones";
const headerTitle = "earphones";

const EarphonesHome = () => {
  return (
    <div>
      <Header title={headerTitle} />
      <Earphones title={"string"} desc={"string"} image={"string"} />
    </div>
  );
};

export default EarphonesHome;
