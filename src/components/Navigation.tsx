
const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">
              Audience Elevate
            </h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('overview')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Our Use Cases
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
