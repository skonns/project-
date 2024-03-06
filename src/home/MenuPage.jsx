import React from "react";
import Swal from "sweetalert2";
import "./MenuPage.css"; // Import file CSS untuk gaya tambahan

const RestaurantMenu = () => {
  const menuItems = [
    {
      name: "Pizza",
      description: "Pizza lezat dengan berbagai pilihan topping.",
      price: "Rp. 25.000",
      // image: "https://asset.kompas.com/crops/OPHojR1FUeGoy6cTweSwyBPm8VA=/1x0:1280x853/750x500/data/photo/2020/09/22/5f694a0e4d323.jpg",
    },
    {
      name: "Pasta",
      description: "Pasta lembut dengan saus bolognese yang kaya.",
      price: "Rp. 20.000",
      // image: "https://asset.kompas.com/crops/oS693LHobxbClbJpljPs9TS0ES4=/103x104:903x637/750x500/data/photo/2022/09/16/6323cb33ef229.jpg",
    },
  ];

  const handleOrder = (itemName) => {
    Swal.fire({
      title: "Pesan Diterima!",
      text: `Anda memesan ${itemName}`,
      icon: "success",
      confirmButtonText: "Ok",
      customClass: {
        popup: "custom-swal-popup",
        title: "custom-swal-title",
        content: "custom-swal-content",
        confirmButton: "custom-swal-confirm-button",
      },
    });
  };

  return (
    <div className="restaurant-menu">
      <h2>Menu Restoran</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button onClick={() => handleOrder(item.name)} className="order-button">
                Pesan Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
