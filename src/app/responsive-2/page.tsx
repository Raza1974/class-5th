export default function Responsive2() {
    return (
       <div className="p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen flex items-center justify-center">
      
        <div className="bounce-in-right sm:jello-horizontal w-[90%] sm:w-[250px] hover:bg-yellow-500 h-[300px] bg-red-600 sm:bg-gray-700 md:bg-blue-700 rounded-xl shadow-xl m-3"></div>
      
        <div className="bounce-in-right sm:jello-horizontal w-[90%] sm:w-[250px] hover:bg-yellow-300 h-[300px] bg-green-500 sm:bg-gray-700 md:bg-blue-700 rounded-xl shadow-xl m-3"></div>
       
        <div className="bounce-in-right sm:jello-horizontal w-[90%] sm:w-[250px] hover:bg-yellow-100 h-[300px] bg-blue-800 sm:bg-gray-700 md:bg-blue-700 rounded-xl shadow-xl m-3"></div>
      </div>
    );
  }