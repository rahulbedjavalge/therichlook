'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id;

  const blogPosts: Record<string, any> = {
    '1': {
      id: 1,
      title: '10 Must-Try Hair Trends for 2026',
      author: 'Sarah Mitchell',
      date: 'April 15, 2026',
      category: 'Trends',
      readTime: '5 min read',
      image: '/images/blog/trends.svg',
      content: `
        <p>The world of hair fashion is constantly evolving, and 2026 brings some exciting new trends that are taking the beauty industry by storm. Whether you're looking for a bold change or subtle updates, there's something for everyone.</p>

        <h2>1. Dimensional Balayage</h2>
        <p>Balayage continues to dominate, but 2026 is all about deeper dimension. Think rich chocolate bases with caramel ribbons and golden highlights. This technique creates a multi-dimensional look that catches the light beautifully.</p>

        <h2>2. The Shag Cut Returns</h2>
        <p>The iconic shag cut from the 70s is making a major comeback with a modern twist. This layered, textured style adds movement and volume to any hair type, making it incredibly versatile.</p>

        <h2>3. Laminated Brows</h2>
        <p>Forget microblading – laminated brows are the trend that's sticking around. This technique uses a special formula to shape and hold brows in place, creating that coveted 'feathered' effect.</p>

        <h2>4. Peachy Tones</h2>
        <p>Move over, rose gold – peachy tones are the new gold. Warm, peachy highlights are flattering on almost every skin tone and create a soft, romantic look.</p>

        <h2>5. Statement Fringes</h2>
        <p>Bold, blunt bangs are back. Whether full bangs or side-swept, a statement fringe can completely transform your look and frame your face beautifully.</p>

        <p>Ready to try one of these trends? Book a consultation with our expert stylists at The Rich Look Saloon to find the perfect style for you!</p>
      `,
    },
    '2': {
      id: 2,
      title: 'The Science Behind Healthy Hair Care',
      author: 'Jessica Chen',
      date: 'April 12, 2026',
      category: 'Hair Care',
      readTime: '7 min read',
      image: '/images/blog/hair-care.svg',
      content: `
        <p>Understanding the science of hair care is the key to achieving healthy, beautiful locks. Let's dive into the biology of hair and explore evidence-based tips for maintaining optimal hair health.</p>

        <h2>Hair Structure Basics</h2>
        <p>Hair is made up of three layers: the cuticle (outer protective layer), cortex (middle layer containing proteins), and medulla (inner core). Understanding this structure helps us care for hair more effectively.</p>

        <h2>The Protein You Need to Know</h2>
        <p>Hair is primarily made of keratin, a protein that provides strength and elasticity. As we age and expose hair to heat, chemicals, and environmental stressors, proteins break down, leading to damage.</p>

        <h2>Moisture Balance</h2>
        <p>Healthy hair maintains a careful balance of moisture. Too much moisture causes frizz and makes hair limp, while too little causes breakage and brittleness. The key is finding your hair's ideal moisture level.</p>

        <h2>The Role of Scalp Health</h2>
        <p>A healthy scalp produces natural oils (sebum) that protect and nourish hair. Regular cleansing removes buildup without stripping these essential oils.</p>

        <h2>Evidence-Based Hair Care Tips</h2>
        <ul>
          <li>Use sulfate-free shampoos that clean without harsh chemicals</li>
          <li>Apply conditioner primarily to the mid-lengths and ends</li>
          <li>Use heat protectant products before styling</li>
          <li>Get regular trims every 6-8 weeks</li>
          <li>Minimize heat styling when possible</li>
          <li>Use a silk pillowcase to reduce friction</li>
        </ul>

        <p>Visit us at The Rich Look Saloon for professional treatments that support these science-backed practices!</p>
      `,
    },
  };

  const post = blogPosts[postId as string] || blogPosts['1'];

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

      {/* Featured Image */}
      <Image src={post.image} alt={post.title} width={1200} height={700} className="w-full h-96 object-cover" />

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-brand-ink">{post.title}</h1>
          <div className="flex items-center gap-6 text-brand-muted">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{
            __html: post.content.replace(
              /<(h2|p|ul|li)>/g,
              (match: string, tag: string) => {
                const tagMap: Record<string, string> = {
                  h2: '<h2 class="text-3xl font-bold mt-8 mb-4 text-[#222d3e]">',
                  p: '<p class="text-lg text-[#576072] mb-4 leading-relaxed">',
                  ul: '<ul class="list-disc list-inside mb-4 text-[#576072]">',
                  li: '<li class="mb-2 text-[#576072]">',
                };
                return tagMap[tag] || match;
              }
            ),
          }}
        />

        {/* CTA Section */}
        <div className="bg-white rounded-lg border border-brand-soft-gold p-8 text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your look?</h3>
          <p className="text-brand-muted mb-6">
            Schedule a consultation with our expert stylists and bring these tips to life!
          </p>
          <Link href="/booking" className="inline-block px-8 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-primary-dark transition-colors">
            Book Your Appointment
          </Link>
        </div>

        {/* Related Posts */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-brand-ink">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2].map((num) => (
              <Link key={num} href={`/blog/${num}`}>
                <div className="bg-white rounded-lg border border-brand-soft-gold shadow hover:shadow-lg transition-shadow overflow-hidden cursor-pointer">
                  <Image src={num === 1 ? '/images/blog/trends.svg' : '/images/blog/hair-care.svg'} alt={`Related post ${num}`} width={1200} height={700} className="w-full h-40 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-brand-ink mb-2">{num === 1 ? '10 Must-Try Hair Trends for 2026' : 'The Science Behind Healthy Hair Care'}</h4>
                    <p className="text-brand-muted text-sm">Read more →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-brand-ink text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 The Rich Look Saloon. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
