function CourseMenu() {
  const topics = [
    "Could computing",
    "Virtualization and Could computing",
    "VPN Technology",
    "Docker and Container",
    "Active directory",
    "การจัดทำมาตรฐานด้านความปลอดภัยสารสนเทศ (ISO 27001)",
    "พรบ.คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562",
    "Type of data center",
  ];

  return (
    <div className="menu">
      <h2 className="text-2xl font-semibold text-center">Course Topics</h2>
      <ul className="list-disc list-inside">
        {topics.map((topic, index) => (
          <li key={index} className="text-lg">
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <CourseMenu />
    </>
  );
}

export default App;
