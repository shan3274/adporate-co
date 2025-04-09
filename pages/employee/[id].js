import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaLaptopCode, FaTrophy, FaUsers } from "react-icons/fa";

const employees = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    department: "Management",
    reportsTo: null,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    skills: [
      { name: "Leadership", experience: 10 },
      { name: "Strategy", experience: 8 },
      { name: "Business Growth", experience: 12 },
    ],
    achievements: [
      { title: "Founded Adporate", description: "Built the company from scratch" },
      { title: "10+ years experience", description: "Worked with top industry leaders" },
    ],
  },
  {
    id: 2,
    name: "Sarah Lee",
    position: "CTO",
    department: "Technology",
    reportsTo: 1,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    skills: [
      { name: "AI", experience: 5 },
      { name: "Cloud Computing", experience: 7 },
      { name: "Security", experience: 6 },
    ],
    achievements: [
      { title: "Led 50+ projects", description: "Managed multiple AI-driven projects" },
      { title: "Built AI infrastructure", description: "Created scalable AI models" },
    ],
  },
];

const EmployeeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <div className="text-center text-2xl p-10">Employee Not Found</div>;
  }

  const underEmployees = employees.filter((emp) => emp.reportsTo === employee.id);
  const reportsTo = employees.find((emp) => emp.id === employee.reportsTo);

  return (
    <div className="bg-white text-black min-h-screen">
      <Header />

      {/* 🏆 Hero Section (Centered, Premium Look) */}
<section className="py-20 bg-gray-100 shadow-lg">
<div className="max-w-6xl mx-auto flex flex-col items-center text-center px-6">
  {/* 🖼️ Employee Image */}
  <img
    src={employee.image}
    alt={employee.name}
    className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-gray-300 shadow-xl"
  />

  {/* 🏷️ Employee Info */}
  <div className="mt-6">
    <h1 className="text-5xl font-bold">{employee.name}</h1>
    <p className="text-2xl text-gray-600 mt-2">
      {employee.position} - {employee.department}
    </p>

    {/* 🏢 Reports To */}
    {reportsTo && (
      <p className="text-lg text-gray-500 mt-2">
        Reports to: <span className="font-semibold">{reportsTo.name}</span>
      </p>
    )}

    {/* ⏳ Experience */}
    <p className="text-lg text-gray-500 mt-2">
      Experience:{" "}
      <span className="font-semibold">
        {employee.skills?.reduce((acc, skill) => acc + skill.experience, 0)}+ years
      </span>
    </p>
  </div>
</div>
</section>


      {/* 💡 Skills Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {employee.skills?.map((skill, index) => (
            <div key={index} className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg flex items-center">
              <FaLaptopCode className="text-5xl text-blue-600 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
                <p className="text-gray-600">Experience: {skill.experience} years</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏅 Achievements Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {employee.achievements?.map((achieve, index) => (
            <div key={index} className="bg-white border border-gray-300 p-6 shadow-lg rounded-lg flex items-center">
              <FaTrophy className="text-5xl text-yellow-500 mr-4" />
              <div>
                <h3 className="text-lg font-bold">{achieve.title}</h3>
                <p className="text-gray-600">{achieve.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔗 Reporting & Hierarchy Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Reporting & Hierarchy</h2>

        {/* 🏢 Reports To */}
        {reportsTo && (
          <div className="bg-white border border-gray-300 p-6 shadow-lg rounded-lg inline-block">
            <p className="text-gray-500">Reports to</p>
            <h3 className="font-bold">{reportsTo.name}</h3>
          </div>
        )}

        {/* 📊 Under Employees */}
        {underEmployees.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Team Members</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {underEmployees.map((emp) => (
                <div key={emp.id} className="bg-white border border-gray-300 p-6 shadow rounded-lg">
                  <img src={emp.image} className="w-20 h-20 rounded-full mx-auto" />
                  <h3 className="font-bold mt-4">{emp.name}</h3>
                  <p className="text-gray-500">{emp.position}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default EmployeeDetail;
