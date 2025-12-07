import React from 'react';
import Image from 'next/image';
import { Mail, Factory, Award, Users, Globe, Leaf } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-[font-2] text-gray-900 mb-6">
            About SRJ Crafts
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto italic">
            "Expertise in Transforming Your Dream Furniture into Reality"
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8">Who We Are and What We Do</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              SRJ Crafts is a premier hospitality furniture manufacturer based in jaipur, India. We specialize in creating and producing custom furniture for hospitality spaces including restaurants, cafés, bars, hotels, resorts, and commercial establishments, serving clients both in India and internationally.
            </p>
            <p>
              Our work helps businesses create welcoming environments where guests feel comfortable, stay longer, and return. Every chair, table, booth, or bench we build is made to order. We tailor the design to suit your space, align finishes with your brand's aesthetic, and engineer durability to withstand daily commercial use.
            </p>
            <p>
              Some of India's top hospitality names trust us with their spaces. You'll find our custom hospitality furniture in The Fern Hotels, Long Boat Brewery, Torq 03, Broadway, The Park, Royal Orchid, Taj Group, iSprout, Travel Food Services, Reliance, Ambuja Neotia, and many more prestigious establishments.
            </p>
            <p className="text-xl font-[font-1] text-blue-900">
              Making the most furniture is not our goal. Our goal is to make it right for both the businesses who invest in it and the people who use it.
            </p>
          </div>
        </div>
      </section>

      {/* Image Grid - Client Projects */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-[font-2] text-gray-900 mb-8 text-center">Our Work in Action</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/industries/bar.jpeg', alt: 'Custom Bar Furniture - SRJ Crafts', caption: 'Bar Furniture' },
              { src: '/industries/cafe.jpeg', alt: 'Café Furniture Solutions - SRJ Crafts', caption: 'Café Furniture' },
              { src: '/industries/bar.jpeg', alt: 'Restaurant Furniture Manufacturing - SRJ Crafts', caption: 'Restaurant Furniture' },
              { src: '/industries/hotel.jpeg', alt: 'Hotel Furniture - SRJ Crafts', caption: 'Hotel Furniture' },
              { src: '/industries/outdoor.jpeg', alt: 'Outdoor Hospitality Furniture - SRJ Crafts', caption: 'Outdoor Furniture' },
              { src: '/industries/bar.jpeg', alt: 'Custom Hospitality Furniture - SRJ Crafts', caption: 'Custom Projects' }
            ].map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-sm group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-[font-1]">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8">Our History and Journey</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              The company didn't start big. We had no showroom, no factory, and no staff in the beginning. Just a 150 square foot room, a single machine, and a basic order.
            </p>
            <p>
              Those early days weren't easy. Orders were unpredictable, expenses were constant, and we were frequently overworked. There was a point where we nearly switched paths and started a side consultancy to stay afloat. But despite the uncertainty, we persisted.
            </p>
            <p>
              Our big break came with Long Boat Brewery in Bangalore. It was our first large restaurant project, and it got people talking. Suddenly, more calls came in from Bangalore and beyond. That one job changed everything.
            </p>
            <p>
              Another major milestone came from a single referral, an architect named Mr. Nilay Patalia. What started as a small collaboration turned into a strong working relationship. We've been building projects together for over five years, including a 2400+ seater brewery that is now one of the largest in India.
            </p>
            <p>
              From that one-room setup, we've grown into a 1.15 lakh square foot manufacturing facility. Our team now includes over 150 skilled workers, supervisors, and coordinators. We manufacture customized furniture for over 200 commercial projects annually and ship more than 20 containers every month. With steady year-on-year growth of 15 percent, we've kept our focus on quality, consistency, and staying true to what we promised from the start.
            </p>
          </div>
        </div>
      </section>

      
      {/* Mission, Vision, Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-12 text-center">Mission, Vision & Values</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-[font-2] text-blue-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to help hospitality businesses create spaces that feel welcoming, are easy to maintain, and improve efficiency in daily operations. We don't just build furniture. We build trust by listening to our client needs, offering smart recommendations, and delivering what we commit to.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[font-2] text-blue-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become India's most dependable and design-forward hospitality furniture manufacturer. Over the next decade, we aim to expand our export network, invest in digital fabrication tools, and build deeper partnerships with architects and designers across markets. We don't want to chase every order. We want to be the first recall for every serious project.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-[font-2] text-blue-900 mb-4">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-[font-2] text-lg text-gray-900 mb-2">Quality Over Quantity</h4>
                  <p className="text-gray-700">
                    We never take on more than we can deliver well. Each piece goes through strict quality checks to ensure it looks great and lasts longer, even in high-traffic spaces.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-[font-2] text-lg text-gray-900 mb-2">Clear Communication</h4>
                  <p className="text-gray-700">
                    From the first quote to final delivery, we keep things simple and honest. If a design isn't practical or if a material won't work long-term, we say it upfront.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-[font-2] text-lg text-gray-900 mb-2">Care for the Planet</h4>
                  <p className="text-gray-700">
                    We use certified wood, recycle leftover materials wherever possible, and constantly explore cleaner processes and finishes that reduce environmental impact.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h4 className="font-[font-2] text-lg text-gray-900 mb-2">Practical Innovation</h4>
                  <p className="text-gray-700">
                    If a new process or material helps reduce damage, improve strength, or cut delivery delays, we adopt it. Everything we tweak has a clear benefit for the end user.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm md:col-span-2">
                  <h4 className="font-[font-2] text-lg text-gray-900 mb-2">Team-Led Growth</h4>
                  <p className="text-gray-700">
                    Our team is our strength. Whether it's a carpenter learning a new joinery technique or a designer trying out a fresh idea, we support and reward it. Growth is real only when it lifts everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Facility */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8">Manufacturing Facility and Technology</h2>

            {/* Factory Images */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              '/industries/bar.jpeg',
              '/industries/cafe.jpeg',
              '/industries/bar.jpeg',
              '/industries/hotel.jpeg'
            ].map((src, idx) => (
              <div key={idx} className="relative h-80 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={src}
                  alt={`SRJ Crafts Manufacturing Facility ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Our factory is located in jaipur and spans 1.15 lakh square feet. It houses everything from cutting, carpentry, welding, upholstery, polishing, packing, and quality control. We also operate a 10,000 square foot showroom that lets clients experience our product range firsthand.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-sm my-8">
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Modern Machinery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Imported Wood Working Machines</li>
                <li>• Automated Polish Booths</li>
                <li>• Upholstery Stations</li>
                <li>• Metal Welding Setups</li>
                <li>• Dedicated Packaging Zones</li>
              </ul>
            </div>
            <p>
              But machines are only part of the story. The actual quality comes from the people using them. We have a team of experienced craftsmen, polishers, welders, and fabricators. Some have been with us for years. New team members go through hands-on training and quality workshops.
            </p>
            <p>
              Before packaging, each product undergoes a multi-point quality inspection. We inspect stability, joint strength, polish layering, fabric stitching, and overall balance. Although time-consuming, it definitely avoids problems later.
            </p>
            <p>
              We currently ship over 20 full containers each month. Our projects range from 50-seater cafés to 1000+ seater breweries to hotel chains with hundreds of rooms.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="font-[font-2] text-lg mb-2">ISO 9001:2015</h4>
              <p className="text-gray-600">Quality Management Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-[font-2] text-lg mb-2">FSC® Certified</h4>
              <p className="text-gray-600">Responsible Sourcing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="font-[font-2] text-lg mb-2">Vriksh Certification</h4>
              <p className="text-gray-600">Legal Sheesham Wood Exports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8">Our Product Range</h2>
          <p className="text-xl text-gray-700 mb-12">
            We make furniture for spaces where people gather, dine, drink, stay, or just have a good conversation. At SRJ Crafts, we specialize in crafting hospitality furniture that's designed to handle real-world use without compromising on style or comfort.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Restaurant Furniture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/industries/bar.jpeg" alt="Restaurant Furniture Manufacturing" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Restaurant Furniture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dining Chairs & Tables</li>
                <li>• Booth Seating & Banquettes</li>
                <li>• Bar Stools</li>
                <li>• Host Stations</li>
                <li>• Custom Brand-Themed Furniture</li>
              </ul>
            </div>

            {/* Hotel Furniture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/industries/hotel.jpeg" alt="Hotel Furniture Solutions" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Hotel Furniture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hotel Beds & Headboards</li>
                <li>• Bedside Tables & Desks</li>
                <li>• Lounge Chairs & Ottomans</li>
                <li>• Wardrobes & Luggage Racks</li>
                <li>• Lobby Sofas & Accent Chairs</li>
              </ul>
            </div>

            {/* Café Furniture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/industries/cafe.jpeg" alt="Café Furniture Design and Manufacturing" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Café Furniture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Compact Café Tables</li>
                <li>• Bistro Chairs (Wood, Metal, Rattan)</li>
                <li>• Low Lounge Seating</li>
                <li>• Outdoor Café Furniture</li>
                <li>• Foldable & Stackable Options</li>
              </ul>
            </div>

            {/* Bar Furniture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/industries/bar.jpeg" alt="Bar Furniture and Bar Stools" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Bar Furniture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• High Bar Stools</li>
                <li>• Bar Counters (Wood & Metal)</li>
                <li>• Pub Tables</li>
                <li>• Lounge Chairs</li>
                <li>• Outdoor Bar Seating</li>
              </ul>
            </div>

            {/* Outdoor Furniture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/industries/outdoor.jpeg" alt="Outdoor Hospitality Furniture" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Outdoor Furniture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Outdoor Dining Sets</li>
                <li>• Patio Lounges & Daybeds</li>
                <li>• Rope-Woven & Wicker Furniture</li>
                <li>• Aluminum-Frame Chairs</li>
                <li>• Weather-Resistant Finishes</li>
              </ul>
            </div>

            {/* Custom Furniture */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/industries/bar.jpeg" alt="Custom Hospitality Furniture Manufacturing" fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Custom Furniture</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bespoke Booths & Banquettes</li>
                <li>• Communal Dining Tables</li>
                <li>• Brand-Specific Designs</li>
                <li>• Fusion Wood-Metal-Cane Designs</li>
                <li>• Prototyping Services</li>
              </ul>
            </div>
          </div>

          {/* Materials & Styles */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Materials We Use</h3>
              <p className="text-gray-700">
                <strong>Solid Wood:</strong> Acacia, White Ash, Oak, Red Cedar, Teak, Sheesham, Mango<br />
                <strong>Metals:</strong> Mild Steel, Powder-Coated Aluminum, Brass<br />
                <strong>Upholstery:</strong> Fabric, Velvet, Leatherette, Performance Materials<br />
                <strong>Finishes:</strong> Natural Polish, Lacquer, Water-Based Coatings
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">Design Languages</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Modern Minimalist</li>
                <li>• Rustic & Farmhouse</li>
                <li>• Industrial Chic</li>
                <li>• Colonial & Vintage</li>
                <li>• Ethnic-Modern Hybrids</li>
                <li>• Scandinavian-Inspired</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8">Our Clientele and Market Reach</h2>
          <p className="text-xl text-gray-700 mb-8">
            From boutique cafés to luxury hotel chains, our furniture has found its place in hundreds of inspiring spaces across India and internationally.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
            <h3 className="text-2xl font-[font-2] text-gray-900 mb-6">Trusted by Leading Brands</h3>
            <div className="grid md:grid-cols-3 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Taj Group of Hotels</li>
                <li>• The Fern Hotels & Resorts</li>
                <li>• The Park Hotels</li>
                <li>• Royal Orchid Hotels</li>
              </ul>
              <ul className="space-y-2">
                <li>• Long Boat Brewery</li>
                <li>• Broadway</li>
                <li>• Torq03</li>
                <li>• Reliance Industries</li>
              </ul>
              <ul className="space-y-2">
                <li>• Travel Food Services</li>
                <li>• Ambuja Neotia</li>
                <li>• iSprout Coworking</li>
                <li>• And many more...</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Globe className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">India Coverage</h3>
              <p className="text-gray-700 mb-4">
                Delhi NCR, Mumbai, Bangalore, Hyderabad, Goa, Pune, Chennai, Ahmedabad, Indore, Jaipur, and many tier-2 and tier-3 cities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <Globe className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-[font-2] text-gray-900 mb-4">International Exports</h3>
              <p className="text-gray-700 mb-4">
                Germany, UAE, Oman, Qatar, Kenya, Nepal, Maldives. Actively expanding into Southeast Asia and Middle Eastern markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8">Sustainability and Social Responsibility</h2>
          <p className="text-xl text-gray-700 mb-8">
            We believe good business shouldn't harm the planet or the people making your product.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <Leaf className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-[font-2] text-gray-900 mb-3">Environmental Care</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Legally sourced timber</li>
                <li>• Low-VOC polish materials</li>
                <li>• Recycling of wood and metal offcuts</li>
                <li>• Moving toward solar power</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-[font-2] text-gray-900 mb-3">Certifications</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• ISO 9001:2015</li>
                <li>• FSC® Certified</li>
                <li>• Vriksh Certified</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <Users className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-[font-2] text-gray-900 mb-3">Social Responsibility</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Fair wages and benefits</li>
                <li>• Regular training workshops</li>
                <li>• School scholarships for workers' children</li>
                <li>• Safe working conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-4xl font-[font-2] text-gray-900 mb-16 text-center">
      Our Team and Leadership
    </h2>

    {/* Founder Block */}
    <div className="flex flex-col md:flex-row items-start gap-10 mb-16 bg-white p-4">
      
      {/* IMAGE - left on desktop, top on mobile */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/industries/cafe.jpeg"
            alt="Neeraj Garg"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* TEXT - right side on desktop */}
      <div className="w-full md:w-2/3 p-8 ">
        <h3 className="text-3xl font-[font-2] text-blue-900 mb-2">Neeraj Garg</h3>
        <p className="text-gray-600 mb-4 font-medium">Founder</p>

        <p className="text-gray-700 leading-relaxed">
          He oversees sales, customer communication, after-sales service, hiring, and
          product curation. His strength lies in building deep, long-term relationships
          that extend well beyond a single order. He is responsible for driving brand
          direction while ensuring customer experience stays at the highest level.
        </p>
      </div>
    </div>

    {/* Our People */}
            {/* Founder Block */}
    <div className="flex flex-col md:flex-row items-start gap-10 mb-16 bg-white p-4">
      
      {/* IMAGE - left on desktop, top on mobile */}
      <div className="w-full md:w-1/3 flex-shrink-0">
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm">
          <Image
            src="/industries/cafe.jpeg"
            alt="Neeraj Garg"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* TEXT - right side on desktop */}
      <div className="w-full md:w-2/3 p-8 ">
        <h3 className="text-3xl font-[font-2] text-black mb-8">Our People</h3>
        

        <p className="text-gray-700 leading-relaxed">
          We are a team of 150+ skilled professionals carpenters, welders, polishers, upholsterers, CAD designers, QC experts, and support staff. Every new member undergoes hands-on training that blends technical learning with real project exposure. Our belief is simple: the true strength of a company lies in its people, not its machines.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-12 text-center">Why Choose SRJ Crafts?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Commercial Grade', desc: 'Built to withstand constant use and heavy traffic' },
              { title: 'Full Customization', desc: 'Tailored designs with expert recommendations' },
              { title: 'In-House Manufacturing', desc: 'Complete control from cutting to final polish' },
              { title: 'Sustainable Practices', desc: 'Certified wood and eco-friendly processes' },
              { title: 'Trusted Brands', desc: 'Serving Taj, Fern, Park, and more' },
              { title: 'End-to-End Support', desc: 'From design to delivery and beyond' },
              { title: '15% YoY Growth', desc: 'Consistent quality, zero compromise' },
              { title: 'No Shortcuts', desc: 'Transparent, honest, and reliable always' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-lg font-[font-2] text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-[font-2] text-gray-900 mb-8 text-center">Future Plans and Innovations</h2>
          <p className="text-xl text-gray-700 mb-8 text-center">We're scaling slowly, but surely.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Launching outdoor and poolside lounge line',
              'Secondary unit for faster prototyping',
              'Collaborations with independent designers',
              'Expansion into Southeast Asia and Middle East',
              'Investment in greener finishes and waste-reduction',
              'AI-supported order tracking and quoting tools'
            ].map((plan, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <span className="text-blue-800 font-[font-2] text-xl mr-3">{idx + 1}.</span>
                  <p className="text-gray-700">{plan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}