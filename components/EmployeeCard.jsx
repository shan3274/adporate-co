const EmployeeCard = ({ employee }) => {
    return (
      <div className="p-6 bg-white shadow-md rounded-xl flex items-center gap-4 border border-gray-200 hover:shadow-lg transition duration-300">
        <img src={employee.image} alt={employee.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="font-bold text-lg">{employee.name}</h3>
          <p className="text-sm text-gray-600">{employee.position}</p>
        </div>
      </div>
    );
  };
  
  export default EmployeeCard;
  