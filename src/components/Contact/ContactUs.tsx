import { Phone, Mail } from 'lucide-react';
import { Contact } from './Contact';

export default function ContactUs() {
  return (
    <div id="ContactUs" className=" bg-linear-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build a Greener Tomorrow, Together
          </h1>
          <p className="text-lg text-gray-600">
            Ready to make the switch to sustainable energy? Get in touch with us today.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 9711753499</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@akbioenergy.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}