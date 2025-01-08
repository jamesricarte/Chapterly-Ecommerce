import React from "react";
import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import Book1 from "../../assets/images/books/ego_is_the_enemy.png";
import { FaStar } from "react-icons/fa";
// import User from '../../assets/images/User/';

const UserPage = () => {
  const orders = [
    {
      id: 1,
      title: "THE SUBTLE ART OF NOT GIVING A F*CK",
      author: "MARK MANSON",
      price: 12.95,
      status: "To Ship",
      rating: 5,
    },
    {
      id: 2,
      title: "THE SUBTLE ART OF NOT GIVING A F*CK",
      author: "MARK MANSON",
      price: 12.95,
      status: "To Ship",
      rating: 5,
    },
    {
      id: 3,
      title: "THE SUBTLE ART OF NOT GIVING A F*CK",
      author: "MARK MANSON",
      price: 12.95,
      status: "To Ship",
      rating: 5,
    },
  ];

  const UserProfile = () => (
    <div className="p-4 bg-teal-100 rounded-lg">
      <div className="flex flex-col items-center">
        <img
          src="/api/placeholder/100/100"
          alt="Profile"
          className="rounded-full"
        />
        <h2 className="mt-2 font-bold">Jo Yu-ri</h2>
        <div className="text-sm text-gray-600">
          <p>joyu@gmail.com</p>
          <p>09900002619</p>
          <p>January 3, 2022</p>
        </div>
      </div>
    </div>
  );

  const OrderTabs = () => (
    <div className="flex gap-4 mb-6">
      {[
        "All",
        "To Pay",
        "To Ship",
        "To Receive",
        "Completed",
        "Cancelled",
        "Return Refund",
      ].map((tab) => (
        <button
          key={tab}
          className={`pb-2 px-2 ${
            tab === "All" ? "text-teal-500 border-b-2 border-teal-500" : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );

  const StarRating = ({ rating }) => (
    <div className="flex gap-2 mb-12 text-primary-300">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </div>
  );

  const OrderCard = ({ order }) => (
    <div className="flex items-center gap-4 p-4 mb-5 border rounded shadow-md">
      <img src={Book1} alt="Book cover" className="object-cover w-28" />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{order.title}</h3>
        <p className="mb-2 text-lg font-semibold text-secondary-500">
          {order.author}
        </p>
        <StarRating rating={order.rating} />
        <p className="font-bold text-primary-500">${order.price}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="p-2 mb-20 font-semibold border border-gray-300 text-primary-500 hover-preset-2">
          <button>Cancel Order</button>
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-primary-300">
            Delivery status |{" "}
          </span>
          <span className="text-[#CECECE]">{order.status}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Nav />
      <div className="container h-screen px-4 pt-8 mx-auto">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <UserProfile />
            <div className="mt-4 text-primary-500">
              <ul className="space-y-2 font-semibold">
                <li>
                  <a href="#">Account Settings</a>
                </li>
                <li>
                  <a href="#">My Purchase</a>
                </li>
                <li>
                  <a href="#">My Vouchers</a>
                </li>
                <li>
                  <a href="#">Notifications</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            <OrderTabs />
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
