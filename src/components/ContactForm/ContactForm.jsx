import { useEffect, useState } from "react";
import { sendEmail } from "../../services/email";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-6"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="
          rounded-2xl
          border
          border-gray-700
          bg-transparent
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-white
        "
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="
          rounded-2xl
          border
          border-gray-700
          bg-transparent
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-white
        "
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Tell me about your project..."
        value={formData.message}
        onChange={handleChange}
        required
        className="
          resize-none
          rounded-2xl
          border
          border-gray-700
          bg-transparent
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition
          focus:border-white
        "
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-fit
          rounded-full
          bg-white
          px-8
          py-4
          font-medium
          text-black
          transition-all
          duration-300
          hover:scale-105
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p
          className="
            text-green-400
            font-medium
            transition-opacity
            duration-300
          "
        >
          ✅ Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p
          className="
            text-red-400
            font-medium
            transition-opacity
            duration-300
          "
        >
          ❌ Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}