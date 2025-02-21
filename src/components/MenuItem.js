import React, { useState } from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, price, description, imageName, count, onIncrement, onDecrement}) => {
    return (
        <>
        <div className="menu-description">
                <div>
                    <img className="menu-photos" src={imageName} alt="image 1"/>
                </div>
                <div className="menu-description">
                    <div className="menu-text">
                        <b>{title}</b><br />
                        <p style={{ whiteSpace: 'pre-line' }}>{description}<br /></p>
                        <b>${price.toFixed(2)}</b>
                        <div className="menu-buttons">
                            {/* Decrement */}
                            <button
                                className = "px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md disabled:opacity-50"
                                onClick={onDecrement}
                                disabled={count === 0}
                            >
                                -
                            </button>

                            <span className="w-6 text-center">{count}</span>
                            
                            {/* Increment Button */}
                            <button 
                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md"
                                onClick={onIncrement}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default MenuItem;
