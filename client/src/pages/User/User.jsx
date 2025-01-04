import React from 'react';
import Nav from '../../components/Nav.jsx';
import Footer from '../../components/Footer.jsx';

const UserPage = () => {
  const orders = [
    {
      id: 1,
      title: "THE SUBTLE ART OF NOT GIVING A F*CK",
      author: "MARK MANSON",
      price: 12.95,
      status: "To Ship",
      rating: 5,
      image: "../../assets/images/books/ego_is_the_enemy.png"
    },
    {
      id: 2,
      title: "THE SUBTLE ART OF NOT GIVING A F*CK",
      author: "MARK MANSON",
      price: 12.95,
      status: "To Ship",
      rating: 5,
      image: "../../assets/images/books/ego_is_the_enemy.png"
    },
    {
      id: 3,
      title: "THE SUBTLE ART OF NOT GIVING A F*CK",
      author: "MARK MANSON",
      price: 12.95,
      status: "To Ship",
      rating: 5,
      image: "../../assets/images/books/ego_is_the_enemy.png"
    }
  ];

  const UserProfile = () => (
    <div className="p-4 bg-teal-100 rounded-lg">
      <div className="flex flex-col items-center">
        <img src="/api/placeholder/100/100" alt="Profile" className="rounded-full" />
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
    <div className="flex gap-4 mb-4 border-b">
      {['All', 'To Pay', 'To Ship', 'To Receive', 'Completed', 'Cancelled', 'Return Refund'].map(tab => (
        <button key={tab} className={`pb-2 px-2 ${tab === 'All' ? 'text-teal-500 border-b-2 border-teal-500' : ''}`}>
          {tab}
        </button>
      ))}
    </div>
  );

  const StarRating = ({ rating }) => (
    <div className="flex text-yellow-400">
      {[...Array(rating)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );

  const OrderCard = ({ order }) => (
    <div className="flex items-center gap-4 p-4 mb-4 border rounded">
      <img
        src={order.image}
        alt="Book cover"
        className="object-cover w-20"
      />
      <div className="flex-grow">
        <h3 className="font-bold">{order.title}</h3>
        <p className="text-teal-500">{order.author}</p>
        <StarRating rating={order.rating} />
        <p className="font-bold">${order.price}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <button className="text-red-500">Cancel Order</button>
        <div className="text-sm text-gray-500">
          <span>Delivery status | </span>
          <span>{order.status}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <div className="max-w-4xl p-4 mx-auto">
        <div className="grid grid-cols-4 gap-6">
          <div>
            <UserProfile />
            <div className="mt-4">
              <ul className="space-y-2">
                <li className="text-teal-600"><a href="#">Account Settings</a></li>
                <li className="text-teal-600"><a href="#">My Purchase</a></li>
                <li className="text-teal-600"><a href="#">My Vouchers</a></li>
                <li className="text-teal-600"><a href="#">Notifications</a></li>
              </ul>
            </div>
          </div>
          <div className="col-span-3">
            <OrderTabs />
            {orders.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UserPage;