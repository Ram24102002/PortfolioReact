import React, { useState } from 'react';
import { Search, Heart, Filter, MapPin, ShoppingCart, Bell, User, Coffee, Package } from 'lucide-react';

export default function temp() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Left Side - Main Content */}
        <div className="w-1/2 p-12 bg-gray-100">
          {/* Logo */}
          <div className="mb-16">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-8">
              <span className="text-black font-bold text-xl">ODEKO</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Odeko
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Enterprise-grade software platform for small businesses which needs supplies for their shops.
            </p>

            <button className="bg-white text-gray-700 px-8 py-4 rounded-xl border border-gray-300 font-medium hover:bg-gray-50 transition-colors shadow-sm">
              View more
            </button>
          </div>
        </div>

        {/* Right Side - App Interfaces */}
        <div className="w-1/2 p-8 bg-gray-100 flex items-center justify-center relative">
          {/* Desktop Browser Window */}
          <div className="absolute top-8 right-12 w-96 h-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-10">
            {/* Browser Header */}
            <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200 rounded-t-lg">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex items-center space-x-2 bg-white px-3 py-1 rounded-md border">
                <div className="w-4 h-4 text-gray-400">🔒</div>
                <span className="text-xs text-gray-600">odeko.com</span>
              </div>
              <div className="w-6"></div>
            </div>

            {/* Browser Content */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">O</span>
                  </div>
                  <span className="font-semibold">Supply</span>
                  <div className="text-xs">▼</div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">First Gate</span>
                  <div className="text-xs">▼</div>
                </div>
              </div>

              {/* Order Card */}
              <div className="bg-orange-100 rounded-lg p-3 mb-4">
                <div className="text-xs text-gray-600 mb-1">Saturday, April 6</div>
                <div className="font-semibold text-sm mb-2">Rise and shine, Francesco!</div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium">Simple Hungry Gnome</div>
                    <div className="text-xs text-gray-500">From fresh baguettes to delicious croissants, discover a new vendor.</div>
                    <button className="text-xs text-blue-600 underline mt-1">View Catalog</button>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Delivered Today */}
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Delivered Today</span>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <div className="text-gray-600">Dank Brooklyn</div>
                <div className="text-gray-500">Brooklyn, NY • 4 items</div>
              </div>
            </div>
          </div>

          {/* Mobile Phone */}
          <div className="w-80 h-[600px] bg-white rounded-3xl shadow-2xl border-4 border-gray-800 relative overflow-hidden ml-8">
            {/* Mobile Header */}
            <div className="px-4 py-6 bg-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 bg-gray-900 text-white text-xs rounded-full">Add</button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full">Scheduled</button>
                </div>
                <div className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center mb-4">
                <span className="font-medium text-sm">Charlotte, NC</span>
                <div className="ml-1 text-xs">▼</div>
              </div>

              {/* Search and Filter */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg text-sm"
                    placeholder="Search..."
                  />
                </div>
                <button className="flex items-center space-x-1 px-3 py-3 bg-gray-100 rounded-lg">
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">Filters</span>
                </button>
                <button className="p-3 bg-gray-100 rounded-lg">
                  <MapPin className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Category Icons */}
              <div className="flex justify-between mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                    <Coffee className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-xs text-gray-600">Beans</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                    <Package className="w-6 h-6 text-gray-600" />
                  </div>
                  <span className="text-xs text-gray-600">Bakery</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <span className="text-xs text-gray-600">Milkish</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <span className="text-xs text-gray-600">Veg</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  </div>
                  <span className="text-xs text-gray-600">Pet</span>
                </div>
              </div>

              {/* Today's Offer */}
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-3">Today's offer</h3>
                <div className="bg-yellow-600 rounded-xl p-4 relative overflow-hidden">
                  <div className="text-white">
                    <div className="text-2xl font-bold mb-1">$3 OFF day!</div>
                  </div>
                  <div className="absolute right-2 top-2">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Last Orders */}
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-3">Last orders</h3>
                <div className="flex space-x-3">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-2">
                      <Coffee className="w-6 h-6 text-gray-600" />
                    </div>
                    <span className="text-xs text-gray-600 text-center">Batch Coffee</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                      <div className="w-6 h-6 bg-white rounded"></div>
                    </div>
                    <span className="text-xs text-gray-600 text-center">Drip Coffee +1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-2 relative">
                      <div className="text-xs font-bold">GRIP</div>
                    </div>
                    <span className="text-xs text-gray-600 text-center">Grip Coffee +1</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                      <div className="text-xs font-bold text-orange-600">B</div>
                    </div>
                    <span className="text-xs text-gray-600 text-center">Batch Coffee</span>
                  </div>
                </div>
              </div>

              {/* Favorite Places */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-sm">Favorite places</h3>
                  <button className="text-xs text-blue-600">View All</button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-gray-50 rounded-lg p-2 flex-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Coffee className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="text-sm">Batch Coffee</span>
                  </div>
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                  <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}