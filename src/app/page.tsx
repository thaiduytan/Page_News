import { HomeLayout } from "@/components/Layout";
import MainNews from "@/components/MainNews";
import { sendRequestJS } from "@/utils/api";

export default function Home() {
  return (
    <HomeLayout>
      <MainNews />
    </HomeLayout>
  );
}
