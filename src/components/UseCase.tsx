
import { CheckCircle, AlertTriangle, UserCheck, MessageSquare, Building } from "lucide-react";

const UseCase = () => {
  const services = [
    {
      icon: UserCheck,
      title: "User Onboarding & Verification",
      description: "Streamlined user registration and email verification processes",
      email: "verify@audienceelevate.com"
    },
    {
      icon: MessageSquare,
      title: "Support Request Tracking",
      description: "Automated support ticket creation and follow-up communications",
      email: "support@audienceelevate.com"
    },
    {
      icon: AlertTriangle,
      title: "Automated Alerts & Notifications",
      description: "Critical system alerts and business-specific notifications",
      email: "alerts@audienceelevate.com"
    },
    {
      icon: Building,
      title: "Internal Team Collaboration",
      description: "Team communication and workflow coordination",
      email: "team@audienceelevate.com"
    },
    {
      icon: CheckCircle,
      title: "Business Unit-Specific Communications",
      description: "Dedicated communication channels for different business units",
      email: "business@audienceelevate.com"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            🧩 Our Use Cases
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We operate several independent services under the AudienceElevate ecosystem, 
            each with dedicated sender identities for optimal delivery and brand trust.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {service.email}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <div className="mx-auto max-w-3xl p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Dedicated Sender Identities
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Each unit uses its own email sender address to maintain separation of identity 
                and routing logic in our backend system (e.g., support@, alerts@, team@, verify@, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCase;
