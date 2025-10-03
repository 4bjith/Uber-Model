import React from "react";

const steps = [
  {
    id: 1,
    title: "Add your trip details",
    description:
      "Enter your pickup spot and destination, and check prices for your trip.",
    image:
      "https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=555/height=312/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9hYzU4NGY5Mi00YmY4LTQ2NmMtOGQyZi1mNTQ5NTU2ZTBhZWQucG5n",
  },
  {
    id: 2,
    title: "Pay easily",
    description:
      "Add your preferred payment method, then choose among the ride options available in your location.",
    image:
      "https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=555/height=312/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8wYjQ4MTk5Zi03N2MxLTQwNzgtOGYwNi0xZTRkOTk2ZTRjNTEucG5n",
  },
  {
    id: 3,
    title: "Meet your driver",
    description:
      "Uber will match you with a driver nearby, and you’ll get updates on your phone or computer about when to meet them.",
    image:
      "https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=555/height=312/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9jYmNjYTZkNS1mZDc5LTRmNjMtYWJkNC1jNzZmNGVhNDJkZTMucG5n",
  },
];

export default function BookingSteps() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-12">
        Book your trip on your phone or computer
      </h2>

      <div className="relative  border-black pl-10">
        {steps.map((step, index) => (
          <div key={step.id} className="mb-16 flex  md:flex-row items-start gap-8">
            {/* Step Image */}
            <div className="flex-shrink-0 w-[45%] md:w-1/3">
              <img
                src={step.image}
                alt={step.title}
                className="rounded-md shadow-lg w-full"
              />
            </div>

            {/* Step Content */}
            <div className="relative w-[45%] md:w-2/3">
              {/* Timeline dot */}
              {/* <span className="absolute -left-6 top-2 w-4 h-4 bg-black rounded-full"></span> */}

              <h3 className="text-lg font-semibold">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>

              {/* Optional link on last step */}
              {index === steps.length - 1 && (
                <a
                  href="#"
                  className="mt-4 inline-block text-black underline hover:text-gray-700"
                >
                  Book your first ride
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
