import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="pt-20 pb-12">
      {/* Define Grid System */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* 1st Part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            WDW SHop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            velit odio perferendis recusandae similique modi mollitia repellat
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            (+000) 1234 5678 90 - info@wdwshop.com
          </p>
        </div>
        {/* 2nd Part  */}
        <div className="lg-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">Return Policy</p>
          <p className="footer_link">Privacy Policy</p>
          <p className="footer_link">Dropshipping</p>
          <p className="footer_link">Shipping Policy</p>
        </div>
        {/* 3rd Part  */}
        <div className="lg-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link">Dashboard</p>
          <p className="footer_link">My Order</p>
          <p className="footer_link">Account Information</p>
          <p className="footer_link">Track Order</p>
        </div>
        {/* 4th Part  */}
        <div className="lg-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best Sellers</p>
          <p className="footer_link">Latest Products</p>
          <p className="footer_link">Sale Products</p>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          © 2024 WDW Shop. All Rights Reserved
        </p>
        <Image
          src="/images/pay.svg"
          width={230}
          height={230}
          alt="pay"
          className="object-contain sm:ml-auto"
        />
      </div>
    </div>
  );
}
