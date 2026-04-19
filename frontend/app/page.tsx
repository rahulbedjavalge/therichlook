'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/auth';

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-amber-600">The Rich Look</h1>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/services" className="text-gray-700 hover:text-amber-600">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-600">
                About
              </Link>
              {user ? (
                <>
                  <Link href="/dashboard" className="text-gray-700 hover:text-amber-600">
                    Dashboard
                  </Link>
                  {user.role === 'admin' && (
                    <Link href="/admin" className="text-gray-700 hover:text-amber-600 font-semibold">
                      Admin
                    </Link>
                  )}
                  <Link href="/logout" className="btn-primary text-sm">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-700 hover:text-amber-600">
                    Login
                  </Link>
                  <Link href="/signup" className="btn-primary text-sm">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to The Rich Look Saloon
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Experience premium beauty services with expert stylists and a luxurious atmosphere
          </p>
          <Link href={user ? '/booking' : '/signup'} className="btn-primary inline-block text-lg">
            Book Your Appointment Now
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Haircut & Styling', 'Spa & Massage', 'Nail Art'].map((service) => (
              <div key={service} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold text-amber-600 mb-4">{service}</h4>
                <p className="text-gray-600 mb-6">Experience our professional and personalized service</p>
                <Link
                  href={user ? '/booking' : '/signup'}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-6">Ready to Shine?</h3>
          <p className="text-lg mb-8">Book your ideal beauty appointment today and let our experts transform your look</p>
          <Link
            href={user ? '/booking' : '/signup'}
            className="inline-block px-8 py-4 bg-white text-amber-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 The Rich Look Saloon. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}