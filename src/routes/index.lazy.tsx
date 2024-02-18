import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="w-full h-full">
      <div className="bg-red-300 ">
        <h1>Website name</h1>
        <h3>welcome message</h3>
      </div>
      <div className="bg-blue-300 ">application content</div>
    </div>
  );
}
