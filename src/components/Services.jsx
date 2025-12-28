import SectionHeading from './ui/SectionHeading';
import cardImage1 from '../assets/card-image-1.png';
import cardImage2 from '../assets/card-image-2.png';
import cardImage3 from '../assets/card-image-3.png';
import cardImage4 from '../assets/card-image-4.png';
import cardImage5 from '../assets/card-image-5.png';
import cardImage6 from '../assets/card-image-6.png';
import cardImage7 from '../assets/card-image-7.png';
import cardImage8 from '../assets/card-image-8.png';
import serviceImage from '../assets/service-image.png';
import ServiceCard from './ui/ServiceCard';
import Button from './ui/Button';

const Services = () => {
  return (
    <section id="services" className="mx-auto container px-6 py-8">
      <SectionHeading
        heading="Services"
        text="At our IT services company, we provide end-to-end technology solutions to help businesses design, build, and scale reliable digital systems."
      />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card */}
          <ServiceCard
  titleLine1="Web Application"
  titleLine2="Development"
  image={cardImage1}
  bgColor="#F3F3F3"
  textColor="black"
  highlightColor="#B9FF66"
  arrowBg="black"
  arrowColor="#B9FF66"
/>

<ServiceCard
  titleLine1="Mobile App"
  titleLine2="Development"
  image={cardImage2}
  bgColor="#B9FF66"
  textColor="black"
  highlightColor="#FFFFFF"
  arrowBg="black"
  arrowColor="#B9FF66"
/>

<ServiceCard
  titleLine1="Cloud & DevOps"
  titleLine2="Solutions"
  image={cardImage3}
  bgColor="#191A23"
  textColor="black"
  highlightColor="#FFFFFF"
  arrowBg="#FFFFFF"
  arrowColor="black"
  buttonTextColor="#FFFFFF"
/>

<ServiceCard
  titleLine1="Database Design"
  titleLine2="& Management"
  image={cardImage4}
  bgColor="#F3F3F3"
  textColor="black"
  highlightColor="#B9FF66"
  arrowBg="black"
  arrowColor="#B9FF66"
  buttonTextColor="black"
/>

<ServiceCard
  titleLine1="Software Testing"
  titleLine2="& QA"
  image={cardImage5}
  bgColor="#B9FF66"
  textColor="black"
  highlightColor="#FFFFFF"
  arrowBg="black"
  arrowColor="#B9FF66"
/>

<ServiceCard
  titleLine1="SaaS Product"
  titleLine2="Development"
  image={cardImage6}
  bgColor="#191A23"
  textColor="black"
  highlightColor="#B9FF66"
  arrowBg="#FFFFFF"
  arrowColor="black"
  buttonTextColor="#FFFFFF"
/>

<ServiceCard
  titleLine1="ERP & CRM"
  titleLine2="Development"
  image={cardImage7}
  bgColor="#F3F3F3"
  textColor="black"
  highlightColor="#B9FF66"
  arrowBg="black"
  arrowColor="#B9FF66"
/>

<ServiceCard
  titleLine1="Maintenance"
  titleLine2="& Support"
  image={cardImage8}
  bgColor="#B9FF66"
  textColor="black"
  highlightColor="#FFFFFF"
  arrowBg="black"
  arrowColor="#B9FF66"
/>
</div>
</div>
      <div>
        <div className="flex items-center bg-[#F3F3F3] rounded-2xl my-12 px-15 py-12 md:py-0">
          <div className="left flex flex-col gap-5">
            <h3 className="font-medium text-3xl">Let’s make things happen</h3>
            <p className="w-full md:w-1/2">
              Contact us today to discuss how our IT solutions can help you build, scale, and optimize reliable digital systems for your business.
            </p>
            <Button
              text="Get your free proposal"
              className={'bg-black text-white w-full md:w-fit'}
            />
          </div>
          <div className="right w-2/4 hidden md:block">
            <img src={serviceImage} alt="service-image" width={300} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
