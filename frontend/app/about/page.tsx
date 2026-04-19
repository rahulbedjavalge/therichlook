'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const founders = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      bio: 'With 15+ years of experience in the beauty industry, Sarah founded The Rich Look Saloon with a vision to create an elevated salon experience combining luxury with accessibility.',
      image: '/images/founders/sarah.jpg',
    },
    {
      id: 2,
      name: 'Jessica Chen',
      role: 'Co-Founder & Creative Director',
      bio: 'Jessica brings her expertise in design and customer experience to The Rich Look. Her innovative approach to salon design has created a unique and welcoming atmosphere.',
      image: '/images/founders/jessica.jpg',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Co-Founder & Operations Manager',
      bio: 'Marcus ensures flawless operations and exceptional customer service. His background in hospitality management has been instrumental in building our reputation for excellence.',
      image: '/images/founders/marcus.jpg',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <h1 className="text-2xl font-bold text-amber-600">The Rich Look</h1>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-amber-600">
                Home
              </Link>
              <Link href="/about" className="text-amber-600 font-semibold">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-amber-600">
                Blog
              </Link>
              <Link href="/signup" className="btn-primary text-sm">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">About The Rich Look</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Where luxury meets accessibility. The Rich Look Saloon is dedicated to providing premium beauty services
            in a welcoming and inclusive environment.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Rich Look Saloon was born from a simple idea: everyone deserves to feel beautiful and confident.
                Our founders came together with a shared vision to revolutionize the salon experience by combining
                cutting-edge techniques with genuine care for our clients.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Since our opening, we've served thousands of happy clients and built a community dedicated to beauty,
                wellness, and self-confidence. Our team of expert stylists and professionals are passionate about
                delivering exceptional results every single time.
              </p>
              <p className="text-lg text-gray-700">
                Today, The Rich Look stands as a beacon of excellence in the beauty industry, known for our innovative
                services, professional staff, and commitment to customer satisfaction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-200 to-yellow-100 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-lg">📸 Salon Image Placeholder</p>
                <p className="text-gray-500 mt-2">Replace with your salon photo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for perfection in every service, ensuring every client leaves feeling their best.',
              },
              {
                title: 'Inclusivity',
                description: 'We celebrate diversity and welcome everyone. Our salon is a safe space for all.',
              },
              {
                title: 'Innovation',
                description: 'We stay ahead of trends and continuously invest in latest techniques and technologies.',
              },
              {
                title: 'Integrity',
                description: 'Honesty and transparency are at the core of everything we do.',
              },
              {
                title: 'Community',
                description: 'We build meaningful relationships with our clients and contribute to our local community.',
              },
              {
                title: 'Wellness',
                description: 'We believe beauty is about feeling good inside and out, holistically.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-amber-600 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative w-full h-64 bg-gradient-to-br from-amber-200 to-yellow-100 flex items-center justify-center">
                  <div className="absolute inset-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <p className="text-gray-600 text-lg">👤</p>
                        <p className="text-gray-500 mt-2 text-sm">Founder Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-700">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '5000+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Stylists' },
              { number: '10+', label: 'Years Experience' },
              { number: '100%', label: 'Satisfaction Rate' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Experience The Difference</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied clients who have discovered their best selves at The Rich Look Saloon.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors">
            Book Your Appointment Today
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