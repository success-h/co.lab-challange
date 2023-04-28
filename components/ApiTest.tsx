import { RiErrorWarningLine } from "react-icons/ri";
import Card from "./Card";

export default function RandomApiData({ data }: { data: EventDataTypes[] }) {
  return (
    <div className="max-w-screen-2xl my-40 mx-auto px-7" id="api">
      <p className="text-2xl font-bold text-purple-100">Random Api data</p>
      <p className="text-sm p-4 text-black font-sans bg-purple-200 my-10 flex items-center">
        <RiErrorWarningLine size={40} className="mr-2" />{" "}
        <span className="text-lg font-mono">
          In the past, I built a Django REST framework API for event management
          and ticketing, which remains one of my favorite APIs developed using
          Django and Postgres. these are few event data returned.
        </span>
        This data is returned
      </p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {data.map((item) => (
          // @ts-ignore
          <Card key={item.id} event={item} />
        ))}
      </div>
    </div>
  );
}
