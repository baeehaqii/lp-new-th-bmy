import { School, Hospital, TreePine, ShoppingBag } from "lucide-react"

export default function Accessibility() {
  const facilities = [
    {
      icon: <Hospital />,
      title: "Fasilitas Kesehatan",
      items: [
        "3 dari RSU Muhammadiyah Siti Aminah",
        "4 menit ke RSUD Bumiayu",
      ],
    },
    {
      icon: <School />,
      title: "Fasilitas Pendidikan",
      items: [
        "2 menit dari SMK Muhammadiyah Bumiayu",
        "3 menit dari SMP Negeri 1 Bumiayu",
        "8 menit dari Universitas Peradaban Bumiayu",
      ],
    },
    {
      icon: <ShoppingBag />,
      title: "Fasilitas Perbelanjaan",
      items: [
        "4 menit dari Pasar Bumiayu",
      ],
    },
    {
      icon: <TreePine />,
      title: "Fasilitas Umum",
      items: [
        "3 dari Terminal Bumiayu",
        "8 menit dari Stasiun Bumiayu",
      ],
    },
  ]

  return (
    <section id="aksesibilitas" className="accessibility-section">
      <div className="container">
        <h2 className="section-title">Akses Mudah</h2>
        <h3 className="accessibility-subtitle">Terhubung dengan Segala Kebutuhan</h3>

        <div className="accessibility-grid">
          {facilities.map((facility, index) => (
            <div key={index} className="accessibility-card about-stat-card">
              <div className="accessibility-header">
                <div className="accessibility-icon">{facility.icon}</div>
                <h3 className="accessibility-title">{facility.title}</h3>
              </div>

              <ul className="accessibility-list">
                {facility.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="accessibility-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
