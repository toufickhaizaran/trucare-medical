import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Save to Firestore
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // Send email using EmailJS
      await emailjs.send(
        "service_vnhrkvl", // Your Service ID
        "template_3drhwpe", // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "xne_TWDs1vssaxpHe" // Your Public Key
      );

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("❌ Error sending message. Please try again.");
    }

    setLoading(false); // Stop loading
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Whether you're looking for more information about our medical products or have a business inquiry, feel free to reach out.
      </p>

      {/* Contact Info */}
      <div className="mb-8 space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:trucare@trucarelebanon.com" className="text-blue-600">
            trucare@trucarelebanon.com
          </a>
        </p>
        <p>
          <strong>Phone (WhatsApp):</strong>{" "}
          <a
            href="https://wa.me/96170897394"
            className="text-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            +961 70 897 394
          </a>
        </p>
        <p>
          <strong>Location:</strong> Hlaleyye, Saida – South Lebanon
        </p>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/company/trucare-medical-lebanon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/96170897394"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        {status && (
          <p
            className={`text-sm ${
              status.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-4 py-2 rounded"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-4 py-2 rounded"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            className="w-full border px-4 py-2 rounded"
            rows="5"
            placeholder="Your message..."
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 rounded text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Map */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h2>
        <div className="rounded overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=33.56693,35.39286&z=15&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="TruCare Medical Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
