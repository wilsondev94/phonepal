"use client";

import { useModalStore } from "@/hooks/useModalStore";
import { BiMenu } from "react-icons/bi";
import { Button } from "../ui/button";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Link from "next/link";

const data = [
  {
    name: "iPhone",
    value: 75,
    color: "#8B5CF6", // Purple
  },
  {
    name: "Samsung",
    value: 45,
    color: "#E11D48", // Pink/Red
  },
];

const trendData = [
  { month: "Jan", chats: "200", items: "5" },
  { month: "Feb", chats: "300", items: "2" },
  { month: "Mar", chats: "100", items: "1" },
  { month: "Apr", chats: "600", items: "4" },
];

export default function Dashboard() {
  const { setOpenMobileSidebar } = useModalStore();

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="w-full h-screen overflow-y-auto no-scrollbar flex flex-col gap-y-8 bg-brand-white-2">
      <div className="sticky h-fit z-[200] shadow-md top-0 flex items-center gap-x-12 bg-brand-white-1 backdrop-blur-3xl w-full p-4 md:px-12">
        <button
          onClick={() => setOpenMobileSidebar(true)}
          className="md:hidden"
        >
          <BiMenu className="size-8" />
        </button>
        <h1 className="text-2xl font-bold">DASHBOARD</h1>
      </div>

      <div className="flex-1 text-3xl px-4 md:px-12 h-full space-y-4">
        <div className="flex flex-col items-start gap-y-8 sm:flex-row sm:items-center justify-between">
          <h1 className="text-4xl font-semibold">Welcome, Wilson</h1>
          <Link
            href="/chat/1"
            className="px-4 py-2 bg-brand-primary hover:bg-brand-primary/80 text-xl text-white font-semibold rounded-lg p-6 mb-4 md:mb-0"
          >
            Place Order
          </Link>
        </div>

        <div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:gap-x-4">
          <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-y-6">
            {/* ORDER COUNT */}
            <p className="text-lg text-brand-black-1 font-semibold">
              Order count
            </p>
            <span className="text-4xl font-bold text-brand-primary">10</span>
          </div>
          {/* CHAT ACTIVITY  */}

          <div className="w-full h-[300px] sm:h-[150px] sm:w-1/3 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-y-6">
            <h2 className="text-lg font-semibold">Chat activity</h2>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{
                    fill: "#6b7280",
                    fontSize: 12,
                  }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />
                <YAxis
                  dataKey="chats"
                  tick={{
                    fill: "#6b7280",
                    fontSize: 12,
                  }}
                  axisLine={{ stroke: "#e5e7eb" }}
                />

                {/* <Tooltip
                  contentStyle={{
                    backgroundColor: "#ffffff",
                    borderColor: "#e5e7eb",
                    borderRadius: "0.375rem",
                    fontSize: 12,
                  }}
                /> */}

                <Line
                  type="monotone"
                  dataKey="chats"
                  stroke="#9c27b0 "
                  strokeWidth={1}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* TOP PRODUCT */}
          <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2">
            {" "}
            <h2 className="text-lg font-bold text-neutral-700">Top Product</h2>
            <div className="space-y-">
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  {/* Product Name */}
                  <div className="min-w-20 text-[16px] font-medium text-neutral-500">
                    {item.name}
                  </div>

                  {/* Progress Bar Container */}
                  <div className="relative flex-1 h-[13px] bg-neutral-300 rounded-full overflow-hidden">
                    {/* Progress Bar Fill */}
                    <div
                      style={{
                        width: `${(item.value / maxValue) * 100}%`,
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
                      }}
                      className="h-full rounded-full flex items-center justify-end pr-3 transition-color ease-in-out duration-300"
                    >
                      {/* Optional: Show value inside bar */}
                      <span className="text-white font-semibold text-xs">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between pb-4">
          {/* RECENT CHATS */}
          <div className="sm:w-1/2 bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-bold text-brand-black-1 mb-2">
              Recent chats
            </h2>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-brand-color-shade-1 rounded-lg p-4">
                <span className="rounded-full bg-brand-grey-1 h-8 w-8 text-sm text-brand-black-2 content-center text-center">
                  JD
                </span>
                <div className="text-brand-black-2">
                  <p className="text-sm font-semibold">John Doe</p>
                  <p className="text-xs">Looking for an iPhone 11 pro...</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-brand-color-shade-1 rounded-lg p-4">
                <span className="rounded-full bg-brand-grey-1 h-8 w-8 text-sm text-brand-black-2 content-center text-center">
                  MS
                </span>
                <div className="text-brand-black-2">
                  <p className="text-sm font-semibold">Maria Smith</p>
                  <p className="text-xs">Phone with budget recommendation...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
