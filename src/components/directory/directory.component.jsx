import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...allOtherProps }) => (
        <MenuItem
          key={id}
          {...allOtherProps} // Es6 Feature, instead of writing all seperately we use this and it will pass them down as name=theObject.name individually for all props
        ></MenuItem>
      ))}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps)(Directory);
