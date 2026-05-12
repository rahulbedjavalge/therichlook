'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth';

export default function Home() {
  const { user } = useAuth();
  const googleReviewsUrl =
    process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL ||
    'https://www.google.com/search?q=The+Rich+Look+Saloon+reviews';

  const services = [
    {
      title: 'Haircut & Styling',
      description: 'Precision cuts, trend styling, and shine treatments tailored to your look.',
      image: '/images/services/haircut.svg',
    },
    {
      title: 'Spa & Massage',
      description: 'Relaxing scalp and body rituals designed for deep comfort and renewal.',
      image: '/images/services/spa.svg',
    },
    {
      title: 'Nail Art',
      description: 'Clean manicures, elegant finishes, and creative nail art by experts.',
      image: '/images/services/nails.svg',
    },
  ];

  const reviews = [
    {
      name: 'Aarohi P.',
      rating: 5,
      text: 'Absolutely loved the haircut and finish. The team is warm and very professional.',
    },
    {
      name: 'Nikhil R.',
      rating: 5,
      text: 'Clean salon, premium vibe, and on-time service. Booking was super easy.',
    },
    {
      name: 'Sana M.',
      rating: 5,
      text: 'Best spa session I have had in months. Calm atmosphere and great staff.',
    },
    {
      name: 'Karan T.',
      rating: 4,
      text: 'Great nail art and attention to detail. Will definitely come back.',
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
            <div className="flex items-center gap-4">
              <Link href="/services" className="text-brand-ink hover:text-brand-primary">
                Services
              </Link>
              <Link href="/about" className="text-brand-ink hover:text-brand-primary">
                About
              </Link>
              <Link href="/blog" className="text-brand-ink hover:text-brand-primary">
                Blog
              </Link>
              {user ? (
                <>
                  <Link href="/dashboard" className="text-brand-ink hover:text-brand-primary">
                    Dashboard
                  </Link>
                  {user.role === 'admin' && (
                    <Link href="/admin" className="text-brand-ink hover:text-brand-primary font-semibold">
                      Admin
                    </Link>
                  )}
                  <Link href="/logout" className="btn-primary text-sm">
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-brand-ink hover:text-brand-primary">
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,143,55,0.2),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(34,45,62,0.12),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <p className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-soft-gold text-brand-primary text-xs font-semibold tracking-wide uppercase">
              Premium Beauty Experience
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight">
              Beautiful Hair,
              <span className="text-brand-primary"> Confident You.</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-muted mb-8 max-w-2xl">
              Luxury salon care with expert stylists, modern techniques, and a calm, elegant vibe.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={user ? '/booking' : '/signup'} className="btn-primary inline-block text-lg">
                Book Your Appointment
              </Link>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary inline-block text-lg"
              >
                Read Google Reviews
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/10 blur-2xl rounded-full" />
            <Image
              src="/images/salon/hero-showcase.svg"
              alt="Salon showcase"
              width={900}
              height={650}
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-brand-soft-gold"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12 text-brand-ink">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-brand-cream p-6 rounded-xl border border-brand-soft-gold shadow hover:shadow-lg transition-shadow">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={640}
                  height={360}
                  className="w-full h-44 object-cover rounded-lg mb-5"
                />
                <h4 className="text-2xl font-semibold text-brand-primary mb-4">{service.title}</h4>
                <p className="text-brand-muted mb-6">{service.description}</p>
                <Link
                  href={user ? '/booking' : '/signup'}
                  className="text-brand-primary hover:text-brand-primary-dark font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-brand-ink text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-brand-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">Client Love</p>
              <h3 className="text-3xl md:text-4xl font-bold">Google Reviews</h3>
            </div>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors font-semibold"
            >
              View All Reviews
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review) => (
              <article key={review.name} className="bg-white/10 border border-white/15 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-brand-accent text-sm mb-3">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                <p className="text-sm text-gray-100 leading-relaxed mb-4">"{review.text}"</p>
                <p className="font-semibold text-white">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold mb-6">Ready to Shine?</h3>
          <p className="text-lg mb-8">Book your ideal beauty appointment today and let our experts transform your look</p>
          <Link
            href={user ? '/booking' : '/signup'}
            className="inline-block px-8 py-4 bg-white text-brand-primary font-bold rounded-lg hover:bg-brand-cream transition-colors"
          >
            Get Started
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
