import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import { HEADING_STYLES } from "@/constants/FontConstant";
import FormBox from "@/features/common/forms/FormBox";

const paga = () => {
  return (
    <div className="w-200 mx-auto flex flex-col justify-center items-center ">
      <HeadingText
        textClassname={`${HEADING_STYLES.small} mr-auto`}
        text="新規登録"
      />
      <div className="h-100 w-full flex-col flex justify-between mt-5">
        <FormBox
          outsideclassname="w-full h-75 bg-[#FFFFFF] rounded-[5px] border-[#000000] border flex justify-center items-center"
          buttonname="登録"
          formclassname="h-65"
        />
        <div className="flex w-full h-12.5 justify-between">
          <Button
            buttoName="GitHubで登録"
            isImageFlag
            buttonColor="w-97.5 boreder-[#000000] rounded-[5px] border flex items-center relative "
            as="button"
            src="/github.svg"
            alt="GitHub"
          />
          <Button
            buttoName="Googleで登録"
            isImageFlag
            buttonColor="w-97.5 boreder-[#000000] rounded-[5px] border flex items-center relative "
            as="button"
            src="/google.svg"
            alt="Google"
          />
        </div>
      </div>
    </div>
  );
};

export default paga;
