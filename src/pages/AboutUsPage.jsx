import lumicLogo from "../assets/lumic-logo-about-us.png"
import SubmissionSection from "../section/SubmissionSection";

const AboutUsPage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 md:pt-5 px-6">
      {/* Logo and Introduction */}
      <div className="text-center my-10 animate__animated animate__fadeInDown">
        <img src={lumicLogo} alt="Company Logo" className="logo mx-auto mb-4" />
        <h1 className="text-2xl md:text-3xl font-semibold text-primary-dark">
          About Us
        </h1>
        <p className="text-sm md:text-lg font-light max-w-screen-md mx-auto mt-4">
          Welcome to PT. Solusi Digitalisasi Retail, your partner in modernizing retail with cutting-edge Electronic Shelf Labels.
        </p>
      </div>

      {/* Logo Philosophy */}
      <div className="my-10" data-aos="fade-up"
          data-aos-duration="1500">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Logo Philosophy</h2>
        <p className="text-sm md:text-base">
          Our logo is a visual representation of our values and mission. The combination of violet and yellow produces an impression of strength and optimism. The purple in our logo signifies strength and wisdom, while the yellow adds a touch of warmth and optimism. Together, these colors create a visually powerful combination that embodies our commitment to innovation and excellence.
        </p>
        <p className="text-sm md:text-base mt-2">
          The design consists of the letter &#39;L&#39; and a shiny icon, symbolizing our brand name &#39;Lumic&#39; and our focus on bright, innovative solutions.
        </p>
      </div>

      {/* Company History */}
      <div className="my-10" data-aos="fade-up"
          data-aos-duration="1500">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Our History</h2>
        <p className="text-sm md:text-base">
          Established in 2024, PT. Solusi Digitalisasi Retail has been at the forefront of revolutionizing retail in Indonesia. We specialize in providing innovative Electronic Shelf Labels (ESL) that transform the retail experience by enabling real-time pricing updates and enhancing operational efficiency.
        </p>
      </div>

      {/* Vision and Mission */}
      <div className="my-10" data-aos="fade-up"
          data-aos-duration="1500">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Vision and Mission</h2>
        <p className="text-sm md:text-base">
          <strong>Vision:</strong> To be the leading provider of digital retail solutions in Indonesia, empowering retailers to embrace modern technology for a more efficient and engaging shopping experience.
        </p>
        <p className="text-sm md:text-base mt-2">
          <strong>Mission:</strong> Our mission is to deliver innovative Electronic Shelf Label solutions that enable real-time price management, improve operational efficiency, and enhance the overall customer experience in retail environments across Indonesia.
        </p>
      </div>

      {/* Values and Culture */}
      <div className="my-10" data-aos="fade-up"
          data-aos-duration="1500">
        <h2 className="text-xl font-semibold text-primary-dark mb-4">Our Values</h2>
        <p className="text-sm md:text-base">
          At PT. Solusi Digitalisasi Retail, we are guided by a set of core values that define our culture and drive our success:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li className="text-sm md:text-base">Innovation: We continuously seek out new ways to improve our products and services to meet the evolving needs of our customers.</li>
          <li className="text-sm md:text-base mt-2">Customer Focus: Our customers are at the heart of everything we do, and we are committed to providing exceptional service and support.</li>
          <li className="text-sm md:text-base mt-2">Integrity: We conduct our business with honesty and integrity, building trust with our customers, partners, and employees.</li>
          <li className="text-sm md:text-base mt-2">Collaboration: We believe in the power of teamwork and collaboration, working together to achieve our common goals.</li>
          <li className="text-sm md:text-base mt-2">Excellence: We strive for excellence in every aspect of our business, from product development to customer service.</li>
        </ul>
      </div>
      <br />
      <div id="contact" className="relative pt-20 -mt-20">
        <SubmissionSection />
      </div>

    </div>
  );
};

export default AboutUsPage;
