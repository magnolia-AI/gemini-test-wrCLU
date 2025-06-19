import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-center mb-8 md:mb-12">
          About HatHaven
        </h1>

        <div className="prose prose-lg max-w-none mx-auto">
          <p className="lead text-xl text-gray-700 mb-8">
            Welcome to HatHaven, your ultimate destination for stylish and high-quality hats. We believe that a hat is more than just an accessory – it's a statement, an expression of personality, and a timeless piece of fashion.
          </p>

          <div className="my-12">
            <Image
              src="https://images.unsplash.com/photo-1533055640609-24b098df3727?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200&h=600&fit=crop"
              alt="Collection of stylish hats"
              width={1200}
              height={600}
              className="rounded-lg shadow-xl aspect-[2/1] object-cover"
            />
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Our Mission</h2>
          <p>
            At HatHaven, our mission is simple: to provide hat enthusiasts and fashion-forward individuals with an unparalleled selection of hats that combine quality craftsmanship, contemporary design, and exceptional comfort. We aim to be the go-to source for anyone looking to elevate their style with the perfect headwear.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6">Our Story</h2>
          <p>
            HatHaven was born from a passion for hats and a desire to share that passion with the world. What started as a small collection curated by a dedicated hat lover has grown into a thriving online store. We meticulously select each hat, ensuring it meets our high standards for quality, style, and durability. We partner with talented artisans and reputable brands to bring you a diverse range of options, from classic fedoras and cozy beanies to trendy snapbacks and elegant sun hats.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-6">What Makes Our Hats Special?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Quality Materials:</strong> We source hats made from premium materials to ensure longevity and comfort.
            </li>
            <li>
              <strong>Curated Selection:</strong> Our collection is thoughtfully curated to include a variety of styles that cater to diverse tastes and occasions.
            </li>
            <li>
              <strong>Attention to Detail:</strong> From stitching to finishing touches, we value craftsmanship and attention to detail.
            </li>
            <li>
              <strong>Customer Focus:</strong> We are committed to providing an excellent shopping experience, from easy navigation to responsive customer support.
            </li>
          </ul>

          <p className="mt-12">
            Thank you for choosing HatHaven. We're excited to help you find the perfect hat that not only looks great but also makes you feel confident and stylish. Explore our collection and discover your next favorite hat today!
          </p>
        </div>
      </div>
    </div>
  );
}

