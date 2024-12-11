import { useField, ErrorMessage } from "formik";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="mb-5">
        <label
          htmlFor={field.name}
          className="block mb-2 text-md font-medium text-white dark:text-white"
        >
          {label}
        </label>
        <div className="relative">
        <textarea
            id="message"
            rows="4"
            className={`block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${meta.touched && meta.error && 'border-4 border-red-600'}`}
            placeholder="Siéntete libre de escribir lo que quieras..."
            {...field}{...props}
            autoComplete="off"
          >
          </textarea>
          <ErrorMessage component="div" name={field.name} className="error" />
      </div>
      </div>
    </>
  );
};

export default TextArea;