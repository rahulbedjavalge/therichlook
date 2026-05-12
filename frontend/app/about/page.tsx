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
      image: '/images/founders/sarah.svg',
    },
    {
      id: 2,
      name: 'Jessica Chen',
      role: 'Co-Founder & Creative Director',
      bio: 'Jessica brings her expertise in design and customer experience to The Rich Look. Her innovative approach to salon design has created a unique and welcoming atmosphere.',
      image: '/images/founders/jessica.svg',
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Co-Founder & Operations Manager',
      bio: 'Marcus ensures flawless operations and exceptional customer service. His background in hospitality management has been instrumental in building our reputation for excellence.',
      image: '/images/founders/marcus.svg',
    },
  ];

  return (
    <main className="min-h-screen bg-brand-cream text-brand-ink">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-soft-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/brand/logo-mark.svg" alt="The Rich Look logo" width={40} height={40} />
              <div>
                <p className="text-lg font-extrabold leading-none text-brand-primary">The Rich Look</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-brand-accent">Saloon</p>
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-brand-ink hover:text-brand-primary">
                Home
              </Link>
              <Link href="/about" className="text-brand-primary font-semibold">
                About
              </Link>
              <Link href="/blog" className="text-brand-ink hover:text-brand-primary">
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
      <section className="bg-gradient-to-r from-[#f8f3e9] to-[#efe1c4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-brand-ink">About The Rich Look</h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
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
              <h2 className="text-4xl font-bold mb-6 text-brand-ink">Our Story</h2>
              <p className="text-lg text-brand-muted mb-4">
                The Rich Look Saloon was born from a simple idea: everyone deserves to feel beautiful and confident.
                Our founders came together with a shared vision to revolutionize the salon experience by combining
                cutting-edge techniques with genuine care for our clients.
              </p>
              <p className="text-lg text-brand-muted mb-4">
                Since our opening, we've served thousands of happy clients and built a community dedicated to beauty,
                wellness, and self-confidence. Our team of expert stylists and professionals are passionate about
                delivering exceptional results every single time.
              </p>
              <p className="text-lg text-brand-muted">
                Today, The Rich Look stands as a beacon of excellence in the beauty industry, known for our innovative
                services, professional staff, and commitment to customer satisfaction.
              </p>
            </div>
            <Image
              src="/images/salon/interior.svg"
              alt="The Rich Look salon interior"
              width={1200}
              height={800}
              className="rounded-lg border border-brand-soft-gold shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-brand-ink">Our Values</h2>
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
              <div key={idx} className="bg-brand-cream p-8 rounded-lg border border-brand-soft-gold shadow hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-brand-primary mb-4">{value.title}</h3>
                <p className="text-brand-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-brand-ink">Meet Our Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.id} className="bg-white rounded-lg border border-brand-soft-gold shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <Image src={founder.image} alt={founder.name} width={600} height={600} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-brand-ink mb-2">{founder.name}</h3>
                  <p className="text-brand-primary font-semibold mb-4">{founder.role}</p>
                  <p className="text-brand-muted">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-primary text-white py-16">
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
          <h2 className="text-4xl font-bold mb-6 text-brand-ink">Experience The Difference</h2>
          <p className="text-xl text-brand-muted mb-8">
            Join thousands of satisfied clients who have discovered their best selves at The Rich Look Saloon.
          </p>
          <Link href="/signup" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary-dark transition-colors">
            Book Your Appointment Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ink text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 The Rich Look Saloon. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
