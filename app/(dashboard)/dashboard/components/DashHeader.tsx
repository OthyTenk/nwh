import Image from "next/image";
import NotifyDropDown from "./NotifyDropDown";
import Container from "@/app/components/common/Container";
import AccountDropDown from "@/app/components/common/AccountDropDown";

const DashHeader = () => {
  return (
    <Container>
      <header className="grid grid-cols-2 py-5 px-4 md:px-12 items-center sticky top-0 z-10 rounded-md bg-white shadow-md">
        {/* Left Area  */}
        <div className="flex items-center gap-x-8  ">
          <Image src="/img/logo.png" alt="logo" width={40} height={40} />
        </div>

        {/* Right Area */}
        <div className="flex items-center justify-end space-x-4">
          <NotifyDropDown />

          <AccountDropDown />
        </div>
      </header>
    </Container>
  );
};

export default DashHeader;
