import Button from "@/components/Button";
import HeadingText from "@/components/HeadingText";
import { HEADING_STYLES } from "@/constants/FontConstant";
import { COMMON_STYLES } from "@/constants/StyleCss";
import FormBox from "@/features/common/forms/FormBox";

const paga = () => {
  return (
    <div className="w-200 mx-auto flex flex-col justify-center items-center ">
      <HeadingText
        textClassname={`${HEADING_STYLES.small} mr-auto`}
        text="新規登録"
      />
      <div className={COMMON_STYLES.form_wrapper}>
        <FormBox
          outsideclassname={`${COMMON_STYLES.form_style} h-75`}
          buttonname="登録"
          formclassname="h-65"
        />
        <div className={COMMON_STYLES.flex_between_layout}>
          <Button
            buttoName="GitHubで登録"
            isImageFlag
            buttonColor={COMMON_STYLES.auth_button}
            as="button"
            src="/github.svg"
            alt="GitHub"
          />
          <Button
            buttoName="Googleで登録"
            isImageFlag
            buttonColor={COMMON_STYLES.auth_button}
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
