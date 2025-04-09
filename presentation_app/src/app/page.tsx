import { appRoutes } from "@/config/app-routes";
import Link from "next/link";

export default function Home() {
  return (
    <main className='min-h-screen flex items-center justify-center px-4'>
      <section className='text-center max-w-xl'>
        <h1 className='text-4xl font-bold mb-4'>📄 Extract Text from Images</h1>
        <p className='text-lg mb-8'>
          Upload a screenshot or any image, and we&#39;ll recognize and extract
          the text in seconds. A simple and convenient tool to copy text from
          images.
        </p>
        <Link
          className='inline-block px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition'
          href={appRoutes.recognizeText}
        >
          🔍 Go to Text Extractor
        </Link>
      </section>
    </main>
  );
}
