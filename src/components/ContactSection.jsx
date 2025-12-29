import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/ulits";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export function ContactSection() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.promise(
      emailjs.sendForm(
        "service_xtvqppy",
        "template_zl9aris",
        formRef.current,
        "1T1kupeRQLvxKFrn2"
      ),
      {
        loading: "Sending message...",
        success: () => {
        e.target.reset(); // ✅ reset ONLY on success
        return "Message sent successfully";
      },
        error: "Failed to send message",
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 flex flex-col items-center p-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start ">
                  <h4 className="font-medium">Email</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    mohammad.21213@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="w-3xs flex flex-col items-start ">
                  <h4 className="font-medium ">Phone</h4>
                  <a
                    href="tel:+989019837897"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +989019837897
                  </a>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="w-3xs flex flex-col items-start ">
                  <h4>Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Shiraz, Fars Province, Iran
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="bg-card p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-start"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like talking about..."
                />
              </div>

              <button
                className={cn(
                  "cosmic-button w-full flex justify-center items-center gap-2 cursor-pointer"
                )}
              >
                <span>Send</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
