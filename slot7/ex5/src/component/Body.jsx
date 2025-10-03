export default function Body() {
  const students = [
    {
      id: "DE160182",
      name: "Nguyễn Hữu Quốc Khánh",
      img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg",
    },
    {
      id: "DE160377",
      name: "Choy Vĩnh Thành",
      img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg",
    },
    {
      id: "DE160547",
      name: "Đỗ Nguyên Phúc",
      img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg",
    },
    {
      id: "DE170049",
      name: "Lê Hoàng Minh",
      img: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTA2L3Jhd3BpeGVsb2ZmaWNlN19waG90b19vZl95b3VuZ19pbmRpYW5fYm95X2hvbGRpbmdfc3R1ZGVudF9iYWNrcF9mMTgzNzMwYy00ZDdmLTRlNzUtOGE1MC1iZmFkNTI5MjMyYjFfMS5qcGc.jpg",
    },
  ];

  return (
    <main className="container my-4">
      {/* Banner */}
      <div className="mb-4">
        <img
          src="https://static.tuoitre.vn/tto/i/s626/2016/08/29/anh-1472440134.jpg"
          alt="Banner"
        />
      </div>

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Students</li>
        </ol>
      </nav>

      {/* Students Detail */}
      <h3 className="text-center fw-bold mb-4">Students Detail</h3>
      <div className="row">
        {students.map((s, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img src={s.img} className="card-img-top" alt={s.name} />
              <div className="card-body text-center">
                <h6>{s.name}</h6>
                <p>{s.id}</p>
                <div className="form-check">
                  <input type="radio" name={`status-${s.id}`} className="form-check-input" id={`absent-${s.id}`} />
                  <label className="form-check-label" htmlFor={`absent-${s.id}`}>Absent</label>
                </div>
                <div className="form-check">
                  <input type="radio" name={`status-${s.id}`} className="form-check-input" id={`present-${s.id}`} />
                  <label className="form-check-label" htmlFor={`present-${s.id}`}>Present</label>
                </div>
                <button className="btn btn-warning mt-2">Submit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
