import "./NavigationBar.scss";
// Icons
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const NavigationBar = () => {
  return (
    <div id="navigationBar">
      <span><IoChatboxEllipsesOutline/></span>Chat App
    </div>
  );
};

export default NavigationBar;