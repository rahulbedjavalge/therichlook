'use client';

import { useAdminGuard } from '@/hooks/useAuthGuard';

export default function AdminPage() {
  const { user, loading } = useAdminGuard();

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-amber-600">42</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Today's Appointments</h3>
            <p className="text-3xl font-bold text-amber-600">8</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Active Offers</h3>
            <p className="text-3xl font-bold text-amber-600">3</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-amber-600">156</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Create Offer</h2>
            <div className="space-y-4">
              <input placeholder="Offer Title" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input placeholder="Discount %" type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <button className="w-full btn-primary">Create Offer</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <h2 className="text-2xl font-bold mb-6">Manage Slots</h2>
            <div className="space-y-4">
              <input placeholder="Opening Time" type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input placeholder="Closing Time" type="time" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <button className="w-full btn-primary">Update Slots</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}