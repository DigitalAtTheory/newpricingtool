import { useProductFunction, useProductState } from "../context/ProductContext";

export default function ContactInfo() {
  const { contactInfo } = useProductState();
  const { setContactInfo } = useProductFunction();

  return (
    <div>
      <h3 className="text-3xl lg:text-4xl">
        Fill out your personal information
      </h3>
      <div className="bg-zinc-200 px-2 py-4 lg:p-8 rounded-lg mt-8">
        <h4 className="text-center text-2xl font-bold mb-8">
          Contact Information
        </h4>
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-full justify-center items-center">
          <div className="w-full">
            <label htmlFor="contactName" className="sr-only">
              Contact Name
            </label>
            <input
              type="text"
              name="contactName"
              value={contactInfo.name}
              onChange={(e) =>
                setContactInfo((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }))
              }
              placeholder="Contact Name"
              className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
            />
          </div>
          <div className="w-full">
            <label htmlFor="contactPhone" className="sr-only">
              Contact Phone
            </label>
            <input
              type="text"
              name="contactPhone"
              value={contactInfo.phone}
              onChange={(e) =>
                setContactInfo((prevState) => ({
                  ...prevState,
                  phone: e.target.value,
                }))
              }
              placeholder="Contact Phone"
              className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
            />
          </div>
        </div>
        <div className="my-4">
          <label htmlFor="contactEmail" className="sr-only">
            Contact Email
          </label>
          <input
            type="email"
            name="contactEmail"
            value={contactInfo.email}
            onChange={(e) =>
              setContactInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            placeholder="Contact Email"
            className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="disclaimer" className="">
            Disclaimer
          </label>
          <input
            type="text"
            name="disclaimer"
            value={contactInfo.disclaimer}
            onChange={(e) =>
              setContactInfo((prevState) => ({
                ...prevState,
                disclaimer: e.target.value,
              }))
            }
            className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <label htmlFor="additionalNotes" className="sr-only">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            rows="3"
            value={contactInfo.notes}
            onChange={(e) =>
              setContactInfo((prevState) => ({
                ...prevState,
                notes: e.target.value,
              }))
            }
            className="py-4 shadow-sm focus:ring-black focus:border-zinc-500 block w-full border-zinc-400 rounded-md"
            placeholder="Additional Notes"
          />
        </div>
      </div>
    </div>
  );
}
