import React from "react";
import Nav from "../../components/Nav.jsx";
import Footer from "../../components/Footer.jsx";
import Book1 from "../../assets/images/books/ego_is_the_enemy.png";
import { FaEnvelope, FaStar, FaPhoneAlt, FaCalendar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import ProfilePic from "../../assets/images/profiles/joy-yuri.png";
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
    <div className="bg-white shadow-md">
      <div className="w-full p-4 rounded-lg rounded-b-full bg-secondary-300">
        <div className="flex flex-col items-center">
          <img src={ProfilePic} alt="Profile" className="rounded-full" />
          <h2 className="mt-4 text-xl font-bold text-primary-500">Jo Yu-ri</h2>
          <button className="text-sm text-white">Edit Profile</button>
        </div>
      </div>
      <div className="container flex flex-col gap-4 px-8 py-8 text-md text-primary-300">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-primary-500" />
          <p>joyu@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-primary-500" />
          <p>09900002619</p>
        </div>
        <div className="flex items-center gap-3">
          <FaLocationPin className="text-primary-500" />
          <p>0845 Kiwi Street</p>
        </div>
        <div className="flex items-center gap-3">
          <FaCalendar className="text-primary-500" />
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
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <TbTruckDelivery className="text-primary-300 text-md" />
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
      <main className="container h-screen px-4 pt-8 mx-auto">
        <div className="grid grid-cols-4 gap-5">
          <div>
            <UserProfile />
            <div className="mt-6 text-primary-500">
              <ul className="space-y-2 font-semibold">
                <li>
                  <a href="#" className="hover-preset-3">
                    Account Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-preset-3">
                    My Purchase
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-preset-3">
                    My Vouchers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover-preset-3">
                    Notifications
                  </a>
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
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
