import Highlight from "solid-highlight";
import "highlight.js/styles/stackoverflow-light.css";


function FileCode (props){
  return (
    <Highlight language={props.language}>
      {props.text}
    </Highlight>
  );
}

export default FileCode;
