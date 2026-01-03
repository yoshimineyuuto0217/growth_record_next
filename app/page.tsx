import Button from "@/components/Button";

export default function Home() {
  return (
      <div className="w-full flex flex-col items-center h-33 justify-between absolute bottom-20">
        <Button
          buttoName="投稿をみる"
          buttonColor="bg-[#FFD1A3] rounded-[5px] w-200 h-12.5 text-black text-center content-center"
          link="/main"
        />
        <Button
          buttoName="日記を書く"
          buttonColor=" bg-[#FEFEFE] border-[#FFD1A3] border-1 rounded-[5px] w-200 h-12.5 text-[#FFD1A3] text-center content-center"
          link="/login"
        />
      </div>
  );
}
