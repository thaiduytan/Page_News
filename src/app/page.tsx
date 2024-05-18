import { HomeLayout } from "@/components/Layout";
import MainNews from "@/components/MainNews";

export default async function Home() {
  return (
    <HomeLayout>
      <MainNews />
    </HomeLayout>
  );
}
