import skiingImage from "../assets/skiing.jpg";
import { ContactForm } from "../components/ContactForm.tsx";

function Banner() {
  return (
    <section className="min-h-screen relative">
      <img
        src={skiingImage}
        alt="Skiing"
        loading="eager"
        className="w-full object-cover h-full absolute"
      />
      <div className="bg-black bg-opacity-60 absolute w-full h-full top-0 left-0 flex justify-center items-center">
        <h1 className="text-xl md:text-7xl font-semibold text-white">
          Liam Typescript
        </h1>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Banner />
      <ContactForm />
    </>
  );
}
