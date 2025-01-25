import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import image7 from "./assets/7.jpg";
import image8 from "./assets/8.jpg";

function CourseMenu() {
  const topics = [
    {
      title: "Cloud Computing",
      description:
        "Cloud computing involves delivering hosted services over the internet, such as storage, databases, and applications.",
      image: image1,
    },
    {
      title: "Virtualization and Cloud Computing",
      description:
        "Virtualization enables multiple operating systems to run on a single physical machine, forming the basis of cloud computing.",
      image: image2,
    },
    {
      title: "VPN Technology",
      description:
        "VPN technology ensures secure communication over the internet by encrypting data and masking IP addresses.",
      image: image3,
    },
    {
      title: "Docker and Container",
      description:
        "Docker containers provide lightweight, portable environments for running applications consistently across platforms.",
      image: image4,
    },
    {
      title: "Active Directory",
      description:
        "Active Directory manages and secures users, devices, and resources in a Windows-based network.",
      image: image5,
    },
    {
      title: "การจัดทำมาตรฐานด้านความปลอดภัยสารสนเทศ (ISO 27001)",
      description:
        "มาตรฐาน ISO 27001 กำหนดแนวทางการจัดการความปลอดภัยของข้อมูลให้เป็นระบบและปลอดภัยมากขึ้น.",
      image: image6,
    },
    {
      title: "พรบ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
      description:
        "กฎหมายที่มุ่งเน้นการคุ้มครองข้อมูลส่วนบุคคลและสร้างมาตรฐานการใช้ข้อมูลอย่างปลอดภัย.",
      image: image7,
    },
    {
      title: "Type of Data Center",
      description:
        "Data centers come in different types, such as enterprise, colocation, and cloud, each with specific uses and benefits.",
      image: image8,
    },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Course Topics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={topic.image}
              alt={topic.title}
              className="rounded-t-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-600 text-sm">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <CourseMenu />
    </div>
  );
}

export default App;
