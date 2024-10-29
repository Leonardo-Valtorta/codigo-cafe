const PillButton = ({ children, className }) => {
    return (
      <button
        className={` text-white font-bold py-2 px-4 my-2 rounded-full inline-flex items-center ${className}`}
      >
        {children}
      </button>
    )
  }
   
  export default PillButton