import React from "react";

const CustomerFeedback = () => {
  const feedbacks = [
    {
      customer: "Jenny Wilson",
      feedback: "The food was excellent and so was the service...",
      rating: 5,
    },
    {
      customer: "Dianne Russell",
      feedback: "We enjoyed the Eggs Benedict served on homemade...",
      rating: 4,
    },
    {
      customer: "Devon Lane",
      feedback: "Normally we are wings fans, but theirs are lean...",
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-md">
      <h3 className="text-lg font-medium mb-4">Customer's Feedback</h3>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-md">
            <div className="flex space-x-2 justify-start items-center">
              <img
                src="https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-man-6-940x940.png"
                alt="Profile"
                className="rounded-full w-10 h-10"
              />
              <h4 className="font-medium">{feedback.customer}</h4>
            </div>

            <p className="text-yellow-500 text-[20px]">
              {"★".repeat(feedback.rating)}
            </p>
            <p className="text-sm">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
