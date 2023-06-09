import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from 'react-icons/fa';
import useCart from '../Hooks/UseMenu/useCart';

export default function Dashboard() {
  const [cart] = useCart();
  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
          <li>
            <NavLink to="/dashboard/home">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservations">
              <FaCalendarAlt />
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet />
              Payment History
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart />
              My Cart
              <span className="badge  badge-secondary">
                +{cart?.length || 0}
              </span>
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu"> Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
