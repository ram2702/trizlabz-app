import React from "react";
import Customer from "../components/customer.admin";
import Navbar from "../components/navbar";

export default function Administration() {
  return (
    <div className="page-cont">
      <Navbar props={["Administration", "customer"]} />
      <Customer />
    </div>
  );
}
