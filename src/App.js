import React, { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';


// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import './App.css'
import HeaderItem from './components/HeaderItem';
// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.

const App = () => {

  const headerInfo = [
    {
      imageName: '/images/yoshi.png',
      decorativeFont: 'Delicious Traditional Dishes to Feed the Soul',
      secondHeader: 'The Best Japanese Restaurant in Austin!'
    }
  ]
  
  const menuItems = [
    {
      id: 0,
      title: 'Gyoza',
      description: 'Japanese dumplings',
      imageName: '/images/gyoza.png',
      price: 5.99,
    },
    {
      id: 1,
      title: 'Sushi',
      description: 'Japanese rice rolls',
      imageName: '/images/sushi.png',
      price: 6.99,
    },
    {
      id: 2,
      title: 'Ramen',
      description: 'Japanese noodle\n soup',
      imageName: '/images/ramen.png',
      price: 7.99,
    },
    {
      id: 3,
      title: 'Matcha Cake',
      description: 'Japanese green\n tea cake',
      imageName: 'images/matcha-cake.png',
      price: 4.99,
    },
    {
      id: 4,
      title: 'Mochi',
      description: 'Japanese rice cake',
      imageName: '/images/mochi.png',
      price: 3.99,
    },
    {
      id: 5,
      title: 'Yakitori',
      description: 'Japanese skewered\n chicken',
      imageName: '/images/yakitori.png',
      price: 2.99,
    },
    {
      id: 6,
      title: 'Takoyaki',
      description: 'Japanese octopus\n balls',
      imageName: 'images/takoyaki.png',
      price: 5.99,
    },
    {
      id: 7,
      title: 'Sashimi',
      description: 'Japanese raw fish',
      imageName: '/images/sashimi.png',
      price: 8.99,
    },
    {
      id: 8,
      title: 'Okonomiyaki',
      description: 'Japanese savory\n pancake',
      imageName: '/images/okonomiyaki.png',
      price: 6.99,
    },
    {
      id: 9,
      title: 'Katsu Curry',
      description: 'Japanese curry\n with fried pork',
      imageName: '/images/katsu-curry.png',
      price: 9.99,
    }
  ];
  
  const [counts, setCounts] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const [subtotals, setSubtotals] = useState(
    menuItems.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );
  
  const handleIncrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setSubtotals((prev) => ({ ...prev, [id]: prev[id] + menuItems[id].price}));
  };
  
  const handleDecrement = (id) => {
    setCounts((prev) => ({ ...prev, [id]: Math.max(0, prev[id] - 1) }));
    setSubtotals((prev) => ({ ...prev, [id]: prev[id] - menuItems[id].price}));
  };

  const handleOrder = () => {
    let orderDetails = "Order placed!\n\n";
    menuItems.forEach((item) => {
      if (counts[item.id] > 0) {
        orderDetails += `${counts[item.id]} ${item.title} \n`;
      }
    });
    if (orderDetails == "Order placed!\n\n") 
    {
      orderDetails += 'No items in cart';
    }
    // orderDetails += `\nTotal: $${totalCount.toFixed(2)}`;

    // Display the alert
    alert(orderDetails);
  }

  const resetCounts = () => {
      setCounts((prevItems) =>
      Object.keys(prevItems).reduce((acc, id) => {
        acc[id] = 0;
        return acc;
      }, {})
    );

    // Reset subtotals to 0 for each key in the object
    setSubtotals((prevItems) =>
      Object.keys(prevItems).reduce((acc, id) => {
        acc[id] = 0;
        return acc;
      }, {})
    );
  };
  
  const totalCount = Object.values(subtotals).reduce((sum, count) => sum + count, 0);
  
  return (
      <>
          <HeaderItem
          name={"Yoshi"}
          logo={`${process.env.PUBLIC_URL}/${headerInfo[0].imageName}`}
          restaurant={headerInfo[0].decorativeFont}
          description={headerInfo[0].secondHeader}
          />
  
        <div className="menu-center">
          <div className="menu-items">
            {menuItems.map((item) => (
              <MenuItem 
                key={item.id} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
                imageName={`${process.env.PUBLIC_URL}/${item.imageName}`} 
                count={counts[item.id]}
                subtotal={subtotals[item.id]}
                onIncrement={() => handleIncrement(item.id)}
                onDecrement={() => handleDecrement(item.id)}
              />
            ))}
            <div className="end-results">
              <p>Subtotal: ${Math.abs(totalCount.toFixed(2))}</p>
              <div className="end-buttons">
                <button onClick={handleOrder}>Order</button>
                <button onClick={resetCounts}>Clear All</button>
              </div>
            </div>
          </div>
        </div>
  
        </>
    );
  }

export default App;
