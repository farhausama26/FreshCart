export default function NewsLetter() {
  return (
    <>
      {/* <!-- Newsletter --> */}
      <section id="newsletter" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest offers, recipes, and health tips.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-600 text-white px-6 py-3 rounded-r-lg hover:bg-primary-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
