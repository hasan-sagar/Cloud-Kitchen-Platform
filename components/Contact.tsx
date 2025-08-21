import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Cloud Street", "Food City, FC 12345", "United States"],
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-EATS",
        "+1 (555) 123-HELP",
        "24/7 Support Available",
      ],
      color: "text-secondary",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@cloudeats.com",
        "support@cloudeats.com",
        "partners@cloudeats.com",
      ],
      color: "text-accent",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon-Fri: 24/7",
        "Sat-Sun: 24/7",
        "Customer Support: Always Open",
      ],
      color: "text-primary",
    },
  ];

  return (
    <section className="py-10 bg-[linear-gradient(180deg,hsl(0_0%_100%)_0%,hsl(43_96%_98%)_100%)] w-full max-w-screen-xl mx-auto p-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold mb-6 mt-10">
            Get <span className="text-primary">In Touch</span>
          </h1>
          <p className="text-base md:text-lg text-pretty font-semibold text-mutedColor mb-9 leading-relaxed max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help! Reach
            out to us through any of the channels below.
          </p>
        </div>
      </div>

      {/* contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 text-center 
                 p-6 hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center 
                    bg-gradient-to-br from-${info.color.split("-")[1]}/10 to-${
                info.color.split("-")[1]
              }/20`}
            >
              <info.icon className={`h-6 w-6 ${info.color}`} />
            </div>
            <h3 className="font-semibold mb-3">{info.title}</h3>
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-gray-500 text-sm mb-1">
                {detail}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
