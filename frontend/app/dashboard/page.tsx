'use client';

import { useAuthGuard } from '@/hooks/useAuthGuard';

export default function DashboardPage() {
  const { user, loading } = useAuthGuard();

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Upcoming Appointments</h3>
            <p className="text-3xl font-bold text-amber-600">2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Bookings</h3>
            <p className="text-3xl font-bold text-amber-600">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm font-semibold mb-2">Member Since</h3>
            <p className="text-3xl font-bold text-amber-600">2026</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-6">Your Appointments</h2>
          <p className="text-gray-500">No appointments yet. <a href="/booking" className="text-amber-600 hover:text-amber-700">Book one now!</a></p>
        </div>
      </div>
    </div>
  );
}