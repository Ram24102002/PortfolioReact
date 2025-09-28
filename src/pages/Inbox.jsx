// Inbox.jsx
import React, { useState, useEffect } from "react";
import { Star, ArrowLeft, MoreVertical, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import bottomImg from "../assets/bottomImg.png";
import { notifyTostFun } from "../utils/notifyTostFun";

export default function Inbox() {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null); 
  const [showStarredOnly, setShowStarredOnly] = useState(false);

  // Fetch inbox messages
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/inbox`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error:", err));
  }, []);



  const markAsRead = async (msg) => {
  try {
    // only update if not already read
    if (msg.read === false) {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/inbox/${msg._id}/read`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ read: true }),
        }
      );

      if (!res.ok) throw new Error("Failed to update read status");

      const updatedMsg = await res.json();

      // Update state
      setMessages((prev) =>
        prev.map((m) => (m._id === updatedMsg._id ? updatedMsg : m))
      );
      setSelectedMessage(updatedMsg); // show on right panel
      // 🎉 show success toast
      // notifyTostFun("Read status updated ✅", "#11c011ff");
    } else {
      // already read → just open it
      setSelectedMessage(msg);
    }
  } catch (err) {
    console.error("Error marking as read:", err);
    notifyTostFun("Error updating Read status","#b80707ff");
  }
};

  
  

  // Toggle star/unstar
  const toggleStar = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m._id === id ? { ...m, isStarred: !m.isStarred } : m))
    );
    if (selectedMessage?._id === id) {
      setSelectedMessage((prev) => ({ ...prev, isStarred: !prev.isStarred }));
    }
  };



  const staredApi = async (msg) => {
                  try {
                    const updated = !selectedMessage.stared;

                    // Call backend
                    const res = await fetch(
                      `${import.meta.env.VITE_API_URL}/api/inbox/${selectedMessage._id}/stared`,
                      {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ stared: updated }),
                      }
                    );

                    if (!res.ok) throw new Error("Failed to update Stared status");

                    const updatedMsg = await res.json();

                    // Update frontend state
                    setMessages((prev) =>
                      prev.map((m) =>
                        m._id === updatedMsg._id ? updatedMsg : m
                      )
                    );
                    setSelectedMessage(updatedMsg);
                    // 🎉 show success toast
                    notifyTostFun("Starred status updated ✅", "#11c011ff");
                  } catch (err) {
                    console.error("Error updating Stared status:", err);
                    notifyTostFun("Error updating ⭐ status","#b80707ff");
                  }
                }





// Filter messages by search and starred toggle
const filteredMessages =
  messages?.filter((msg) => {
    const matchesSearch = msg.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStarred = showStarredOnly ? msg.stared : true;
    return matchesSearch && matchesStarred;
  }) || [];


  return (
    <div className="min-h-screen md:max-h-screen bg-black text-white flex flex-col-reverse md:flex-row overflow-hidden">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 max-h-[50vh] md:max-h-screen border-r border-gray-800 flex flex-col">
        {/* Header */}
        <div className="border-b border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <Link to={"/"}>
              <button className="text-2xl font-light mb-4 flex item-center">
                <ArrowLeft className="w-10 h-10 cursor-pointer" />
              </button>
            </Link>
            <h1 className="text-2xl text-lime-400 mb-4">Inbox</h1>
          </div>
          <div className="relative flex items-center space-x-2 ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search messages"
              className="bg-black text-white pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:border-gray-500 focus:outline-none w-9/10"
            />
            <Star
                    onClick={() => {  
                      //  markAsRead(msg);
                toggleStar(selectedMessage._id);
                setShowStarredOnly((prev) => !prev)
              }}
              className={`w-6 h-6 m-3 cursor-pointer ${
    showStarredOnly
      ? "fill-yellow-400 text-yellow-400"
      : "text-gray-500"
  }`}
                  />
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto md:max-h-screen">
          {filteredMessages.map((msg) => (
            <div
              key={msg._id}
              className={`p-4 border-b border-gray-800 cursor-pointer transition-colors hover:bg-gray-900 ${
                selectedMessage?._id === msg._id
                  ? "bg-black border-r-2 border-r-white"
                  : ""
              }`}
              onClick={() =>{ 
                markAsRead(msg);
                setSelectedMessage(msg); // open in right panel
              }} 
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3
                      className={`text-sm font-medium truncate ${
                        msg.read ? "text-gray-300" : "text-white"
                      }`}
                    >
                      {msg.name}
                    </h3>
                    {!msg.read && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{msg.email}</p>
                  <p
                    className={`text-sm truncate line-clamp-1 ${
                      msg.read ? "text-gray-400" : "text-gray-300"
                    }`}
                  >
                    {msg.comment}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStar(msg._id);
                  }}
                  className="ml-2 p-1  rounded"
                >
                  <Star
                    onClick={() => {
                      markAsRead(msg);
                toggleStar(selectedMessage._id)
              }}
                    className={`w-4 h-4 ${
                      msg.stared
                        ? "fill-yellow-400 text-yellow-400"
                        : "hidden"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex flex-col overflow-hidden min-h-[50dvh] md:max-h-screen">
        {selectedMessage ? (
          <>
            {/* Message Header */}
            <div className="border-b border-gray-800 p-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="p-2 hover:bg-gray-800 rounded"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => {toggleStar(selectedMessage._id)
                      staredApi(selectedMessage._id)}
                    }
                    className="p-2 hover:bg-gray-800 rounded"
                  >
                    <Star
                    className={`w-4 h-4 ${
                        selectedMessage.stared
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-500"
                      }`}
                    // onClick={() => }
                      
                    />
                  </button>
                  <button className="p-2 hover:bg-gray-800 rounded">
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex flex-col space-x-2">
                  <span className="text-white font-medium">
                    {selectedMessage.name}
                  </span>
                  <span>{selectedMessage.email}</span>
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              <p className="text-gray-200 leading-relaxed">
                {selectedMessage.comment}
              </p>
            </div>

            {/* Read / Unread toggle */}
            <div className="border-t border-gray-800 p-6">
              <button
                onClick={async () => {
                  try {
                    const updated = !selectedMessage.read;

                    // Call backend
                    const res = await fetch(
                      `${import.meta.env.VITE_API_URL}/api/inbox/${selectedMessage._id}/read`,
                      {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ read: updated }),
                      }
                    );

                    if (!res.ok) throw new Error("Failed to update read status");

                    const updatedMsg = await res.json();

                    // Update frontend state
                    setMessages((prev) =>
                      prev.map((m) =>
                        m._id === updatedMsg._id ? updatedMsg : m
                      )
                    );
                    setSelectedMessage(updatedMsg);
                    // 🎉 show success toast
                    notifyTostFun("Read status updated ✅", "#11c011ff");
                  } catch (err) {
                    console.error("Error updating read status:", err);
                    notifyTostFun("Error updating Read status","#b80707ff");
                  }
                }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm transition-colors"
              >
                {selectedMessage.read ? "Mark as Unread" : "Mark as Read"}
              </button>
            </div>
          </>
        ) : (
          // Empty State
          <div className="flex-1 flex items-end md:items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-sm">
                Choose a{" "}
                <span className="text-lime-400">conversation</span> from the
                list to read it here
              </p>
              <div className="text-6xl mb-4 md:hidden">
                <img src={bottomImg} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
