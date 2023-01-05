import { splitProps } from 'solid-js';


const PRAndIssuesListItem = (props) => {
    const [local] = splitProps(props, [
      'number',
      'title'
    ]);

  
    return (
      <div>{local.title}</div>
    );
  };
  
  export default PRAndIssuesListItem;