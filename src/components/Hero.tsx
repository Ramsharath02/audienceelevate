
import { Mail, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Audience Elevate
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Elevating User Communication, One Inbox at a Time
          </p>
          <p className="mt-8 text-xl leading-8 text-white max-w-xl mx-auto">
            A centralized communication and notification platform built to streamline 
            transactional email delivery across multiple micro-business operations.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-blue-100">
                <Mail className="h-5 w-5" />
                <span className="text-sm">Reliable Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Users className="h-5 w-5" />
                <span className="text-sm">Multi-Identity</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Zap className="h-5 w-5" />
                <span className="text-sm">Automated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
