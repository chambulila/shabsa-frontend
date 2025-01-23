import { redirect } from "next/navigation";
import Hero from "@/components/ui/user/hero";
import Image from "next/image";

export default function Home() {
  redirect("/home");
}
