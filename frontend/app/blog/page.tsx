'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Must-Try Hair Trends for 2026',
      excerpt: 'Discover the hottest hair trends taking over the beauty world this year. From bold colors to innovative cuts, we break down what\'s in and why.',
      author: 'Sarah Mitchell',
      date: 'April 15, 2026',
      category: 'Trends',
      readTime: '5 min read',
      image: '/images/blog/trends.svg',
    },
    {
      id: 2,
      title: 'The Science Behind Healthy Hair Care',
      excerpt: 'Learn how to properly care for your hair with science-backed tips and techniques. Your hair deserves the best treatment!',
      author: 'Jessica Chen',
      date: 'April 12, 2026',
      category: 'Hair Care',
      readTime: '7 min read',
      image: '/images/blog/hair-care.svg',
    },
    {
      id: 3,
      title: 'Spa Day at Home: DIY Facial Treatments',
      excerpt: 'Can\'t visit the salon? Learn how to create a luxurious spa experience at home with these easy DIY facial treatments.',
      author: 'Marcus Johnson',
      date: 'April 10, 2026',
      category: 'Wellness',
      readTime: '6 min read',
      image: '/images/blog/spa.svg',
    },
    {
      id: 4,
      title: 'How to Choose the Right Nail Color for Your Skin Tone',
      excerpt: 'Finding the perfect nail shade can be tricky. Here\'s our complete guide to choosing nail colors that complement your unique skin tone.',
      author: 'Sarah Mitchell',
      date: 'April 8, 2026',
      category: 'Nails',
      readTime: '4 min read',
      image: '/images/blog/nails.svg',
    },
    {
      id: 5,
      title: 'Sustainable Beauty: Eco-Friendly Salon Practices',
      excerpt: 'Join us on our journey to sustainability. Learn about our eco-friendly practices and how you can support green beauty.',
      author: 'Jessica Chen',
      date: 'April 5, 2026',
      category: 'Sustainability',
      readTime: '8 min read',
      image: '/images/blog/sustainable.svg',
    },
    {
      id: 6,
      title: 'The Psychology of Self-Care and Beauty',
      excerpt: 'Exploring the deep connection between beauty treatments, self-care, and mental wellness. Taking care of yourself matters.',
      author: 'Marcus Johnson',
      date: 'April 1, 2026',
      category: 'Wellness',
      readTime: '9 min read',
      image: '/images/blog/psychology.svg',
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
              <Link href="/about" className="text-brand-ink hover:text-brand-primary">
                About
              </Link>
              <Link href="/blog" className="text-brand-primary font-semibold">
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
          <h1 className="text-5xl font-bold mb-6 text-brand-ink">Beauty & Wellness Blog</h1>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto">
            Expert tips, trends, and insights from the beauty industry. Stay informed and inspired!
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-brand-soft-gold shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Image src={blogPosts[0].image} alt={blogPosts[0].title} width={1200} height={700} className="w-full h-96 object-cover" />
              <div className="p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-brand-ink">{blogPosts[0].title}</h2>
                <p className="text-brand-muted text-lg mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-brand-primary font-semibold">{blogPosts[0].author}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{blogPosts[0].date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{blogPosts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-block w-fit px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary-dark transition-colors"
                >
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-brand-ink">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-brand-cream rounded-lg border border-brand-soft-gold shadow hover:shadow-lg transition-shadow overflow-hidden cursor-pointer h-full">
                  <Image src={post.image} alt={post.title} width={1200} height={700} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="bg-brand-soft-gold text-brand-ink px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-brand-ink line-clamp-2">{post.title}</h3>
                    <p className="text-brand-muted mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-brand-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">Subscribe to our newsletter for weekly beauty tips and exclusive offers.</p>
          <form className="flex gap-2 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-900 flex-1 max-w-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-ink text-white font-bold rounded-lg hover:bg-[#131a24] transition-colors"
            >
              Subscribe
            </button>
          </form>
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
