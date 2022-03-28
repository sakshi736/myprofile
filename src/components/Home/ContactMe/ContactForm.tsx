import { Icon } from "@iconify/react"
import { useForm } from "react-hook-form"
import contactFormSubmit, {
  ContactFormValuesType,
} from "../../functions/contactFormSubmit"

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormValuesType>()

  return (
    <form
      className="grid grid-cols-1 gap-4 text-black"
      onSubmit={handleSubmit(contactFormSubmit)}
      method="POST"
    >
      <div className="flex content-between gap-4">
        {/* Name */}
        <div className="p-2 bg-gray-200 rounded-md w-full">
          <label className="block text-sm text-gray-800">Name</label>
          <input
            className="bg-transparent outline-none focus:outline-none w-full"
            type="text"
            {...register("name", { required: true })}
            required
          />
        </div>
        {/* Email */}
        <div className="p-2 bg-gray-200 rounded-md w-full">
          <label className="block text-sm text-gray-800">Email</label>
          <input
            className="bg-transparent outline-none focus:outline-none w-full"
            type="email"
            {...register("email", { required: true })}
            required
          />
        </div>
      </div>
      {/* Subject */}
      <div className="p-2 bg-gray-200 rounded-md">
        <label className="block text-sm text-gray-800">Subject</label>
        <input
          className="bg-transparent outline-none focus:outline-none w-full"
          type="text"
          {...register("subject", { required: true })}
          required
        />
      </div>
      {/* Message */}
      <div className="p-2 bg-gray-200 rounded-md">
        <label className="block text-sm text-gray-800">Message</label>
        <textarea
          className="bg-transparent outline-none focus:outline-none w-full"
          {...register("message", { required: true })}
          cols={0}
          rows={7}
          required
        />
      </div>
      {/* Submit */}
      <div className="">
        <button
          type="submit"
          className="bg-violet-500 text-white dark:text-[wheat] rounded-lg p-2 flex items-center"
        >
          Send Message
          <Icon icon="uil:message" className="mx-1" />
        </button>
      </div>
    </form>
  )
}
export default ContactForm
