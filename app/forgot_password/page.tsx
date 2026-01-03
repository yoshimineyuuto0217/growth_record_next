import HeadingText from "@/components/HeadingText";
import { HEADING_STYLES } from "@/constants/FontConstant";
import FormBox from "@/features/common/forms/FormBox";

const paga = () => {
  return (
    <div className="w-200 mx-auto flex flex-col justify-center items-center ">
      <HeadingText
        textClassname={`${HEADING_STYLES.small} mr-auto`}
        text="パスワード再設定"
      />
      <FormBox
        outsideclassname="w-full h-50 bg-[#FFFFFF] rounded-[5px] border-[#000000] border flex justify-center items-center"
        buttonname="送信"
        formclassname="h-35"
      />
    </div>
  );
};

export default paga;
