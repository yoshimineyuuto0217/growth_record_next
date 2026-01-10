import IconBox from "../articles/IconBox";

const SearchBox = () => {
  return (
    <form
      action=""
      className="h-12.5 w-82.5 border rounded-[5px] flex items-center"
    >
      <IconBox
        src="/search.svg"
        alt="検索アイコン"
        srcclassname="w-5 h-5 "
        asType="default"
      />
      <input type="text" className="w-full h-full text-xl" />
    </form>
  );
};

export default SearchBox;
