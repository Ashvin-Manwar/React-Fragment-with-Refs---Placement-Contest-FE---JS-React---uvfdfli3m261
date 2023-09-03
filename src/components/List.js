import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    <div>
      <React.Fragment>
    {listx.map((i) => {
      return <ListItems valuex={i} />;
    })}
    </React.Fragment>
    </div>
  )
}

export default List;
