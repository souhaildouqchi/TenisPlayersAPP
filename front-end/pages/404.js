import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) // go back one page
      // router.go(1) // go forward one page
      router.push("/"); // go to home page
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
