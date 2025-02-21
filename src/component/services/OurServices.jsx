import React from "react";
import "./services.css";
const services = [
  {
    id: 1,
    image: "image/construction-works.jpg",
    title: "الانشاءات المعدنية",
    description:
      "وهي الإنشاءات التي تتشكل من ألواح وأعمدة الصلب، وتتميز المنشآت المعدنية بقدرتها على تحمل الضغط العالي ولا تستهلك مواد البناء مثل المباني الخرسانية",
  },
  {
    id: 2,
    image: "public/image/concrete-works.jpg",
    title: "الانشاءات الخرسانية",
    description:
      "وتشمل أعمال الأساسات والجدران والأعمدة والأدراج والكمرات والبلاطات والطوب وتصميم الخلطات الخرسانية",
  },
  {
    id: 3,
    image: "public/image/Industrial-facilities-works.jpg",
    title: "أعمال البناء الخاصة والفردية",
    description:
      "تمتد الأعمال المدنية لتغطي تشييد الأبنية وبنيتها التحتية والمباني الخرسانية واعمال التشطبيات",
  },
  {
    id: 4,
    image: "public/image/restoration-works.jpg",
    title: "أعمال التوسعة والترميم",
    description:
      "حيث نعمل على ترميم المباني الخرسانية والشروخ ودعم اعمال الدهانات والوصلات الكهربائية للعمل على رفع كفاءة المباني والمنشآت",
  },
  {
    id: 5,
    image: "public/image/Industrial-facilities-works.jpg",
    title: "بناء المنشآت الصناعية​",
    description:
      "حيث نقوم بالتخطيط واختبار الأرضية للتأكد من توافقها مع المواصفات القياسية لبناء المنشأة بدءأ بأعمال الحفر والخرسانة مرورا بتركيبات المرافق وعناصر الحماية والأمان للمنشأة والانتاء بأعمال التشطيبات والديكورات النهائية",
  },
  {
    id: 6,
    image: "image/decoration-works.jpg",
    title: "عمال التشطيبات والديكور",
    description:
      "نقوم بتنفيذ كافة أنواع التشطيبات والديكورات للمباني الإدارية والمجمعات السكنية والمصانع والمصانع بأحدث الأذواق العالمية مع الالتزام التام بجودة التشطيب.",
  },
  {
    id: 7,
    image: "public/image/OIP(1).jfif",
    title: "تمديدات المياه والصرف الصحى",
    description: "نقوم بتنفيذ كافة أنواع تمديدات المياه والصرف الصحى.",
  },
];
function OurServices() {
  return (
    <div className="services-boxs pt-[100px]">
      <p className="  text-center text-white text-lg ">
        وتعمل مؤسسة هيكلة الإعمار و البناء للمقاولات العامة كأحد شركات المقاولات
        على تنفيذ المشروعات المطلوبة من خلال تقديم خدماتها الهندسية التالية
      </p>
      <div className="boxs-service">
        {services.map((service) => {
          return (
            <div className="service" key={service.id}>
              <img src={service.image} alt="" />
              <p className="title">{service.title}</p>
              <p className="description">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurServices;
