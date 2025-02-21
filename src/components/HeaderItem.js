import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const HeaderItem = ({name, logo, restaurant, description}) => {
    return (
        <>
        <div className="header">
        {/* Display menu items dynamicaly here by iterating over the provided menuItems */}
        <img className="logo-photo"src={logo} alt="cozy crumbs logo"/>
        </div>
        <div className="flex-center">
        <div class = "headingText">
          <div>
            <div><h2 className="decorative-font">{restaurant}</h2></div>
          </div>
          <div>
            <div><h2 className="second-header">{description}</h2></div>
          </div>
        </div>
      </div>
        </>
    );
};

export default HeaderItem;
