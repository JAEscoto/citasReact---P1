const Error = ({ children }) => {
  return (
    <div className="bg-red-600 font-bold text-white text-center p-3 uppercase mb-3 rounded-lg">
      {children}
    </div>
  );
};

export default Error;
