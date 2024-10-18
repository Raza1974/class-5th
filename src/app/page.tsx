import Link from 'next/link'; // Ensure you're importing the Link component

export default function Home() {
  return (
    <section className="p-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
    <div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 "></h1>
        
        <div className="childContainer bounce-in-right mb-4 text-center">
          <div className="imageContainer">
            <img
              src="/image/health tips.jpg"      
              alt="Heart Health"
              className="w-full h-40 object-cover"
            />
          </div>
          <h2 className="title text-xl font-semibold">Eat Healthy</h2>
          <p className="description">
            You can help prevent  disease by following a Eat-healthy lifestyle.art.
          </p>
          <Link href="/blog/health">
            <button className="readMore bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
