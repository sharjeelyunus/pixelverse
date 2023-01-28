import { preview } from '../assets';
import Loader from './Loader';

type Props = {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}: Props) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          className='block text-sm font-medium text-gray-900'
          htmlFor={name}
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            className='font-semibold text-xs bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'
            onClick={handleSurpriseMe}
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-sm outline-none focus:ring-[#6469ff] focus:border-[#6469ff] block w-full p-3'
      />
    </div>
  );
};

export default FormField;
