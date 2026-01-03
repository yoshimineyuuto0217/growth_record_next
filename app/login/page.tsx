import HeadingText from "@/components/HeadingText";
import { HEADING_STYLES } from "@/constants/FontConstant";
import FormBox from "@/features/common/forms/FormBox";

const paga = () => {
  return (
    <div className="w-200 mx-auto flex flex-col justify-center items-center ">
      <HeadingText
        textClassname={`${HEADING_STYLES.small} mr-auto`}
        text="ログイン"
      />
      <FormBox
        outsideclassname="w-full h-75 bg-[#FFFFFF] rounded-[5px] border-[#000000] border flex justify-center items-center"
        buttonname="ログイン"
        formclassname="h-55"
      />
    </div>
  );
};

export default paga;
