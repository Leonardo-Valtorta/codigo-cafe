import { useField, ErrorMessage } from "formik";

const TextField = ({ label, ...props }) => {
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
          {props.icon ? props.icon : <></> }
          <input
            type="text"
            className={`bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${meta.touched && meta.error && 'border-4 border-red-600' }`}
            placeholder={props.placeh}
            {...field}
            {...props}
            autoComplete="off"
          />
          <ErrorMessage component="div" name={field.name} className="error" />
        </div>
      </div>
    </>
  );
};

export default TextField;
