
const Overview = () => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            🌐 Overview
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            AudienceElevate.com is a centralized communication and notification platform 
            built to streamline transactional email delivery across multiple micro-business 
            operations under one system.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                User Onboarding
              </h3>
              <p className="text-gray-600 text-sm">
                Streamlined verification and welcome sequences
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-4">🚨</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Service Alerts
              </h3>
              <p className="text-gray-600 text-sm">
                Critical notifications and system updates
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Support Follow-ups
              </h3>
              <p className="text-gray-600 text-sm">
                Automated support ticket management
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We help organizations manage user onboarding, service alerts, support follow-ups, 
              and critical notifications — each handled by a dedicated sender identity to ensure 
              delivery consistency and brand trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
