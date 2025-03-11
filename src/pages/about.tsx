export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center border border-gray-200">
        <h1 className="text-4xl font-bold text-orange-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are a team of food enthusiasts passionate about cooking and sharing
          our love for food with others.
        </p>
      </div>
    </div>
  );
}
