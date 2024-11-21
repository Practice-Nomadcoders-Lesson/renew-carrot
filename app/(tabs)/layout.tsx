import TabBar from "@/components/tab-bar";

interface Props {
  children: React.ReactNode;
}

const TabLayout = ({ children }: Props) => {
  return (
    <>
      <div>
        {children}
        <TabBar />
      </div>
    </>
  );
};

export default TabLayout;
