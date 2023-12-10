import { ButtonPropsType } from "../../types"


const CustomButton = ({ handleClick, disabled, designs, btnType, title, rIcon }: ButtonPropsType) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      type={btnType}
      className={`${designs} custom-btn bg-primary-blue rounded-full hover:bg-blue-800`}>
      <span>
        {title}
      </span>
      {rIcon && (<div className="relative w-6 h-6">
        <img src={rIcon} />
      </div>
      )}

    </button>)
}




export default CustomButton
