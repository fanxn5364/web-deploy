import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // ใช้ React Router สำหรับการทำ Routing
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";
import image5 from "./assets/5.jpg";
import image6 from "./assets/6.jpg";
import image7 from "./assets/7.jpg";
import image8 from "./assets/8.jpg";

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="masthead flex items-center justify-center h-screen bg-gray-800 text-white text-center">
          <div>
            <h1 className="mb-4 text-5xl font-bold">MIIC 1325 PRESENTATION</h1>
            <h3 className="mb-8 text-2xl italic">
              Presenting the study of MIIC 1325 from the beginning of the
              semester until now
            </h3>
            <a
              href="#course"
              className="btn btn-primary btn-xl bg-blue-500 text-white px-6 py-3 rounded-lg"
            >
              Get Started
            </a>
          </div>
        </header>

        {/* Course Section */}
        <section id="course" className="bg-amber-400 text-black py-20">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-black font-extrabold text-4xl">Course</h3>
            <h2 className="text-3xl font-bold mb-10">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: image1,
                  title: "Cloud Computing",
                  text: "Cloud computing involves delivering hosted services over the internet, such as storage, databases, and applications.",
                  href: "/Chapter-1",
                },
                {
                  icon: image2,
                  title: "Virtualization and Cloud Computing",
                  text: "Virtualization enables multiple operating systems to run on a single physical machine, forming the basis of cloud computing.",
                  href: "/Chapter-2",
                },
                {
                  icon: image3,
                  title: "VPN Technology",
                  text: "VPN technology ensures secure communication over the internet by encrypting data and masking IP addresses.",
                  href: "/Chapter-3",
                },
                {
                  icon: image4,
                  title: "Docker and Container",
                  text: "Docker containers provide lightweight, portable environments for running applications consistently across platforms.",
                  href: "/Chapter-4",
                },
                {
                  icon: image5,
                  title: "Active Directory",
                  text: "Active Directory manages and secures users, devices, and resources in a Windows-based network.",
                  href: "/Chapter-5",
                },
                {
                  icon: image6,
                  title: "การจัดทำมาตรฐานด้านความปลอดภัยสารสนเทศ (ISO 27001)",
                  text: "มาตรฐาน ISO 27001 กำหนดแนวทางการจัดการความปลอดภัยของข้อมูลให้เป็นระบบและปลอดภัยมากขึ้น.",
                  href: "/Chapter-6",
                },
                {
                  icon: image7,
                  title: "พรบ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
                  text: "กฎหมายที่มุ่งเน้นการคุ้มครองข้อมูลส่วนบุคคลและสร้างมาตรฐานการใช้ข้อมูลอย่างปลอดภัย.",
                  href: "/Chapter-7",
                },
                {
                  icon: image8,
                  title: "Type of Data Center",
                  text: "Data centers come in different types, such as enterprise, colocation, and cloud, each with specific uses and benefits.",
                  href: "/Chapter-8",
                },
              ].map((service, index) => (
                <div key={index} className="text-center">
                  <Link to={service.href}>
                    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h4 className="text-xl font-bold mt-3 text-left">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-left">{service.text}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Route Sections for Each Chapter */}
        <Routes>
          <Route
            path="/Chapter-1"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 1: Cloud Computing
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    Cloud computing involves delivering hosted services over the
                    internet, such as storage, databases, and applications.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/1L9cM6_XkLrs4UiYpu2OEzmIEn5UqNU7j/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-8" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-2" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-2"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 2: Virtualization and Cloud Computing
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    Virtualization enables multiple operating systems to run on
                    a single physical machine, forming the basis of cloud
                    computing.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/1Oh4RgZyy7FvXqSZQkeWon9RPTdzPUAJc/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-1" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-3" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-3"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 3: VPN Technology
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    VPN technology ensures secure communication over the
                    internet by encrypting data and masking IP addresses.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/13O2nDfNzDG6JgVcpXOz6KldbwhXFig-V/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-2" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-4" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-4"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 4: Docker and Container
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    Docker containers provide lightweight, portable environments
                    for running applications consistently across platforms.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/1msO3sIbtmENCd67WtU6nCKf_qMsU1XYQ/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-3" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-5" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-5"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 5: Active Directory
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    Active Directory manages and secures users, devices, and
                    resources in a Windows-based network.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/1JxqwZl03ss2gLuVCPKAsf-rB5IYwFZlQ/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                    <iframe
                      src="https://drive.google.com/file/d/1Ll30drhEkhPp80d3rhkY4CcoBCRYm90o/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full mt-4"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-4" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-6" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-6"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 6: การจัดทำมาตรฐานด้านความปลอดภัยสารสนเทศ (ISO
                    27001)
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    มาตรฐาน ISO 27001
                    กำหนดแนวทางการจัดการความปลอดภัยของข้อมูลให้เป็นระบบและปลอดภัยมากขึ้น.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/1oBdi-Dwp2DJI5UBqUXmEhnLpanxTvoFp/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-5" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-7" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-7"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 7: พรบ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    กฎหมายที่มุ่งเน้นการคุ้มครองข้อมูลส่วนบุคคลและสร้างมาตรฐานการใช้ข้อมูลอย่างปลอดภัย.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/1PCCPHnyiQADGQ1tqeDfSORZfDbh4RCHT/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-6" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-8" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          <Route
            path="/Chapter-8"
            element={
              <section className="content-section bg-gray-800 text-white py-20 px-8 rounded-lg shadow-lg">
                <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-6">
                    Chapter 8: Type of Data Center
                  </h2>
                  <p className="mt-4 text-lg mb-6">
                    Data centers come in different types, such as enterprise,
                    colocation, and cloud, each with specific uses and benefits.
                  </p>
                  <div className="relative mb-6">
                    <iframe
                      src="https://drive.google.com/file/d/144ad2ZBBbFoxzOePvTzQceJkv9_BZTdw/preview"
                      width="100%"
                      height="480"
                      allow="autoplay"
                      className="rounded-lg shadow-xl max-w-full"
                    ></iframe>
                  </div>
                  {/* ปุ่มสำหรับไปยังหน้าถัดไป หรือ ย้อนกลับ */}
                  <div className="container mx-auto flex justify-between mt-8">
                    <Link to="/Chapter-7" className="btn btn-primary">
                      Previous
                    </Link>
                    <Link to="/Chapter-1" className="btn btn-primary">
                      Next
                    </Link>
                  </div>
                </div>
              </section>
            }
          />
          {/* เพิ่ม Route สำหรับ Chapter อื่น ๆ ที่คุณต้องการ */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
