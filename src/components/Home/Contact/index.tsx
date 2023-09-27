import { LoadingProvider } from "@/context/LoadingContext";
import { Contact } from "./ContactContent";
import { Loadign } from "@/components/Loading";

export function ContactRoot() {
  return (
    <LoadingProvider>
      <Contact />
      <Loadign />
    </LoadingProvider>
  );
}