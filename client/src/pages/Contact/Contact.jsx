import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const Contact = () => {
  return (
    <>
      <Nav />
      <main>
        <div>
          <div className="py-16 mb-8 bg-primary-50">
            <div className="flex flex-col items-center justify-center text-center text-primary-500">
              <h1 className="mb-4 text-3xl font-bold">Let's Stay Connected</h1>
              <p className="text-md">
                We're just a message away—reach out to us for <br /> support,
                inquiries, or feedback.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-40 text-center text-primary-500">
            <div>
              <h1 className="mb-2 text-2xl font-semibold">Phone</h1>
              <p>09566082679</p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl font-semibold">Address</h1>
              <p>
                1234 Maple Lane Suite 567 Springfield,
                <br /> CA 98765 United States
              </p>
            </div>
            <div>
              <h1 className="mb-2 text-2xl font-semibold ">Email</h1>
              <p>07206442@dwc-legazpi.edu</p>
            </div>
          </div>
          <div />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
