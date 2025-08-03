import React from "react";

function About() {
  const team = [
    { name: "Mohamad Khaizaran", role: "Managing Director" },
    { name: "Tarek Dada", role: "Chief Executive Officer" },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About TruCare Medical</h1>

      <p className="text-gray-700 mb-4">
        TruCare Medical is a trusted Lebanese supplier of premium medical equipment, surgical instruments, and hospital furniture.
        We serve hospitals, clinics, and healthcare professionals across Lebanon.
      </p>

      <p className="text-gray-700 mb-4">
        Our mission is to empower healthcare providers with innovative and certified tools. We partner with global brands like
        Geotek and RZ to deliver reliable solutions.
      </p>

      <p className="text-gray-700 mb-4">
        Our values are rooted in quality, reliability, and sustainable partnerships.
      </p>

      <p className="text-gray-700 mb-10">
        Based in <strong>Hlaleyye, Saida – South Lebanon</strong>, TruCare Medical supports healthcare professionals across
        the region with excellence and trust.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Leadership</h2>
      <ul className="list-disc list-inside text-gray-700">
        {team.map((member, idx) => (
          <li key={idx}>
            <strong>{member.name}</strong> – {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
