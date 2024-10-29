import PillButton from "./PillButton" 

const PillButtonXL = ({ children, className }) => {
return (
    <>
    <PillButton className={`px-12 ${className}`}> 
        {children}
    </PillButton>
    </>
)
}

export default PillButtonXL