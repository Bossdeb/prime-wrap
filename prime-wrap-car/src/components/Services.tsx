const services = [
    {
        icon: '🎨',
        title: 'ติดตั้งสีแรปรถยนต์',
        description: 'บริการติดตั้งสีแรปรถยนต์โดยช่างผู้เชี่ยวชาญ รับประกันคุณภาพ',
        features: ['ช่างมืออาชีพ', 'รับประกัน 2 ปี', 'ใช้เวลา 1-2 วัน']
    },
    {
        icon: '🛠️',
        title: 'ออกแบบกราฟิก',
        description: 'บริการออกแบบกราฟิกสำหรับรถยนต์ ตามความต้องการของลูกค้า',
        features: ['ออกแบบฟรี', 'ปรับแก้ไขได้', 'ดีไซน์เฉพาะตัว']
    },
    {
        icon: '🚗',
        title: 'ขายปลีก-ส่ง',
        description: 'จำหน่ายสีแรปรถยนต์คุณภาพสูง ราคาส่งพิเศษสำหรับร้านค้า',
        features: ['ราคาส่งพิเศษ', 'สินค้าคุณภาพ', 'จัดส่งทั่วประเทศ']
    },
    {
        icon: '🔧',
        title: 'บำรุงรักษา',
        description: 'บริการดูแลรักษาสีแรปให้คงความสวยงามและทนทาน',
        features: ['ตรวจสอบฟรี', 'คำแนะนำการดูแล', 'ซ่อมแซมเล็กน้อย']
    }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            บริการของเรา
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            บริการครบวงจรด้านสีแรปรถยนต์ ตั้งแต่การออกแบบ ติดตั้ง จนถึงการดูแลรักษา
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm mt-4 transition-colors duration-200">
                  เรียนรู้เพิ่มเติม →
                </button>
              </div>
                        </div>
                    ))}
                </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ต้องการคำปรึกษา?
            </h3>
            <p className="text-gray-600 mb-6">
              ทีมงานผู้เชี่ยวชาญพร้อมให้คำแนะนำและประเมินราคาฟรี
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary hover:scale-105 transition-transform duration-200">
                📞 โทรปรึกษา 02-xxx-xxxx
              </button>
              <button className="btn-secondary hover:scale-105 transition-transform duration-200">
                💬 แชทไลน์
              </button>
            </div>
          </div>
        </div>
            </div>
        </section>
    );
}