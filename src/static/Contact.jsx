import RoadMap from "../components/RoadMap";
import phone from "../assets/Icons/icons-phone.svg";
import mail from "../assets/Icons/icons-mail.svg";
function Contact() {
  return (
    <div className="CustomContainer">
      <RoadMap />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-[30px] mb-[140px] ">
        <div className="flex flex-col items-center justify-center py-10 text-sm rounded shadow-lg lg:col-span-2 px-9">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={phone} alt="phone" loading="lazy" />
              <h4 className="text-base font-medium">Call To Us</h4>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className="bg-[#afafaf] h-px w-full my-8"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={mail} alt="mail" loading="lazy" />
              <h4 className="text-base font-medium">Write to us.</h4>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="lg:col-span-4 p-4 lg:px-[30px] lg:py-10 rounded shadow-lg">
          <form>
            <div className="grid gap-4 lg:grid-cols-3">
              <input
                type="text"
                placeholder="Your Name *"
                className="p-4 rounded bg-secondary1"
              />
              <input
                type="text"
                placeholder="Your Email *"
                className="p-4 rounded bg-secondary1"
              />
              <input
                type="text"
                placeholder="Your Phone *"
                className="p-4 rounded bg-secondary1"
              />
            </div>
            <textarea
              name="message"
              id="message"
              rows="10"
              placeholder="Your Message *"
              className="w-full p-4 mt-8 rounded bg-secondary1"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
