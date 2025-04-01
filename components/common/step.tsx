import { Step as StepType } from "@/lib/consts";
import { MoveRight } from "lucide-react";

interface StepProps extends StepType {
  showArrow?: boolean;
}

const Step = ({ title, description, Icon, showArrow = false }: StepProps) => {
  return (
    <div className="relative">
      <div className="group flex flex-col items-center rounded-2xl border-[0.5px] border-transparent p-4 text-center transition-colors duration-300 hover:border-rose-500">
        <Icon
          strokeWidth={1.5}
          className="mb-4 size-24 rounded-2xl bg-linear-to-br from-rose-100/80 to-rose-100/0 p-4 text-rose-500 transition-colors duration-300 group-hover:from-rose-200"
        />
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {showArrow && (
        <MoveRight
          strokeWidth={1}
          className="absolute top-1/2 -right-6 w-12 -translate-y-1/2 text-rose-400 max-md:hidden"
        />
      )}
    </div>
  );
};

export default Step;
