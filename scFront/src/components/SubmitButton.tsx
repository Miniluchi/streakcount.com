interface SubmitButtonProps {
    label: string;
  }
  
  export const SubmitButton = ({ label }: SubmitButtonProps) => (
    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full font-semibold">
      {label}
    </button>
  );
  