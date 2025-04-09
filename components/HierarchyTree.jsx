import Link from "next/link";
import EmployeeCard from "./EmployeeCard";

const employees = [
  { id: 1, name: "John Doe", position: "CEO", reportsTo: null, image: "/avatars/ceo.png" },
  { id: 2, name: "Sarah Lee", position: "CTO", reportsTo: 1, image: "/avatars/cto.png" },
  { id: 3, name: "Michael Smith", position: "CFO", reportsTo: 1, image: "/avatars/cfo.png" },
  { id: 4, name: "James Brown", position: "Lead Developer", reportsTo: 2, image: "/avatars/developer.png" },
  { id: 5, name: "Emily Davis", position: "Marketing Lead", reportsTo: 3, image: "/avatars/marketing.png" },
];

const HierarchyTree = () => {
  const renderHierarchy = (managerId) => {
    return employees
      .filter(emp => emp.reportsTo === managerId)
      .map(emp => (
        <div key={emp.id} className="relative">
          <div className="flex flex-col items-center space-y-4">
            <Link href={`/employee/${emp.id}`}>
              <EmployeeCard employee={emp} />
            </Link>
            <div className="border-l-4 border-gray-300 h-8"></div>
          </div>
          <div className="ml-10">{renderHierarchy(emp.id)}</div>
        </div>
      ));
  };

  return <div className="flex flex-col items-center">{renderHierarchy(null)}</div>;
};

export default HierarchyTree;
