import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)]">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center border border-gray-200">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          If you have any questions or feedback, feel free to reach out.
        </p>

        <div className="space-y-4 text-gray-800">
          <div className="flex items-center gap-3">
            <Mail className="text-orange-600 w-5 h-5" />
            <span className="font-medium">Khandaysalmaan00@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-orange-600 w-5 h-5" />
            <span className="font-medium">+123 456 7890</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-orange-600 w-5 h-5" />
            <span className="font-medium">
              123 Srinagar, Jammu & Kashmir, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
